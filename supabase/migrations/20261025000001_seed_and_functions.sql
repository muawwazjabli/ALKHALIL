-- AL KHALIL PUBLISHERS (الخلیل پبلشرز)
-- Database Functions, Stored Procedures & Seed Data

--------------------------------------------------------------------------------
-- 1. STORED PROCEDURES & ATOMIC TRANSACTIONS
--------------------------------------------------------------------------------

-- Procedure for stock adjustments by admin with full audit trail
CREATE OR REPLACE FUNCTION public.adjust_stock_atomic(
    p_edition_id UUID,
    p_quantity_delta INT,
    p_movement_type public.movement_type,
    p_reason TEXT,
    p_user_id UUID DEFAULT NULL
)
RETURNS JSONB AS $$
DECLARE
    v_prev_stock INT;
    v_new_stock INT;
    v_edition RECORD;
BEGIN
    -- Select with row-level lock
    SELECT * INTO v_edition 
    FROM public.book_editions 
    WHERE id = p_edition_id 
    FOR UPDATE;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Book edition not found with ID %', p_edition_id;
    END IF;

    v_prev_stock := v_edition.stock_quantity;
    v_new_stock := v_prev_stock + p_quantity_delta;

    IF v_new_stock < 0 THEN
        RAISE EXCEPTION 'Cannot reduce stock below 0. Current available: %, requested delta: %', v_prev_stock, p_quantity_delta;
    END IF;

    -- Update edition stock
    UPDATE public.book_editions
    SET stock_quantity = v_new_stock,
        updated_at = timezone('utc'::text, now())
    WHERE id = p_edition_id;

    -- Record movement audit
    INSERT INTO public.inventory_movements (
        edition_id,
        movement_type,
        quantity_delta,
        previous_stock,
        new_stock,
        reason,
        created_by
    ) VALUES (
        p_edition_id,
        p_movement_type,
        p_quantity_delta,
        v_prev_stock,
        v_new_stock,
        p_reason,
        p_user_id
    );

    RETURN jsonb_build_object(
        'success', true,
        'edition_id', p_edition_id,
        'previous_stock', v_prev_stock,
        'new_stock', v_new_stock
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- Procedure for updating order status with stock return/release handling
CREATE OR REPLACE FUNCTION public.update_order_status_atomic(
    p_order_id UUID,
    p_new_status public.order_status,
    p_changed_by UUID DEFAULT NULL,
    p_notes TEXT DEFAULT NULL
)
RETURNS JSONB AS $$
DECLARE
    v_order RECORD;
    v_item RECORD;
BEGIN
    SELECT * INTO v_order FROM public.orders WHERE id = p_order_id FOR UPDATE;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Order not found with ID %', p_order_id;
    END IF;

    -- If cancelling, release reserved stock
    IF p_new_status = 'cancelled' AND v_order.status != 'cancelled' THEN
        FOR v_item IN SELECT * FROM public.order_items WHERE order_id = p_order_id LOOP
            IF v_item.edition_id IS NOT NULL THEN
                UPDATE public.book_editions
                SET stock_quantity = stock_quantity + v_item.quantity,
                    reserved_quantity = GREATEST(0, reserved_quantity - v_item.quantity),
                    updated_at = timezone('utc'::text, now())
                WHERE id = v_item.edition_id;

                INSERT INTO public.inventory_movements (
                    edition_id,
                    movement_type,
                    quantity_delta,
                    previous_stock,
                    new_stock,
                    reason,
                    reference_order_id,
                    created_by
                )
                SELECT 
                    v_item.edition_id,
                    'cancellation_release'::public.movement_type,
                    v_item.quantity,
                    stock_quantity - v_item.quantity,
                    stock_quantity,
                    'Cancelled order ' || v_order.order_number,
                    p_order_id,
                    p_changed_by
                FROM public.book_editions WHERE id = v_item.edition_id;
            END IF;
        END LOOP;
    END IF;

    -- If delivered, finalize reserved stock deduction
    IF p_new_status = 'delivered' AND v_order.status != 'delivered' THEN
        FOR v_item IN SELECT * FROM public.order_items WHERE order_id = p_order_id LOOP
            IF v_item.edition_id IS NOT NULL THEN
                UPDATE public.book_editions
                SET reserved_quantity = GREATEST(0, reserved_quantity - v_item.quantity),
                    updated_at = timezone('utc'::text, now())
                WHERE id = v_item.edition_id;
            END IF;
        END LOOP;
    END IF;

    -- Update order status
    UPDATE public.orders
    SET status = p_new_status,
        updated_at = timezone('utc'::text, now())
    WHERE id = p_order_id;

    -- Insert status history
    INSERT INTO public.order_status_history (
        order_id,
        previous_status,
        new_status,
        changed_by,
        notes
    ) VALUES (
        p_order_id,
        v_order.status,
        p_new_status,
        p_changed_by,
        p_notes
    );

    RETURN jsonb_build_object(
        'success', true,
        'order_id', p_order_id,
        'previous_status', v_order.status,
        'new_status', p_new_status
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


--------------------------------------------------------------------------------
-- 2. SEED DATA: CATEGORIES, PUBLISHERS, AUTHORS, SHIPPING, SETTINGS
--------------------------------------------------------------------------------

-- Categories
INSERT INTO public.categories (id, name_ur, name_en, slug, description_ur, sort_order) VALUES
('c1000000-0000-0000-0000-000000000001', 'قرآن مجید', 'Holy Quran', 'quran-kareem', 'قرآن کریم کے خوبصورت نسخے، تجویدی و لفظی ترجمہ', 1),
('c1000000-0000-0000-0000-000000000002', 'تفاسیر', 'Tafseer', 'tafseer', 'مستند اور جامع تفاسیر قرآن', 2),
('c1000000-0000-0000-0000-000000000003', 'حدیث شریف', 'Hadith', 'hadith', 'صحاح ستہ، شروح حدیث اور مجموعات احادیث', 3),
('c1000000-0000-0000-0000-000000000004', 'فقہ و فتاویٰ', 'Fiqh & Fatawa', 'fiqh-fatawa', 'فقہی مسائل، بنیادی احکام اور فتاویٰ کے مجموعے', 4),
('c1000000-0000-0000-0000-000000000005', 'عقائد و کلام', 'Aqeedah', 'aqeedah', 'اہل سنت والجماعت کے مستند عقائد پر مبنی کتب', 5),
('c1000000-0000-0000-0000-000000000006', 'سیرت النبی ﷺ', 'Seerat-un-Nabi', 'seerat-un-nabi', 'سید المرسلین حضرت محمد مصطفیٰ ﷺ کی حیات طیبہ', 6),
('c1000000-0000-0000-0000-000000000007', 'تاریخ اسلام', 'Islamic History', 'islamic-history', 'خلافت راشدہ اور تاریخ اسلام کے اہم ادوار', 7),
('c1000000-0000-0000-0000-000000000008', 'عربی کتب', 'Arabic Books', 'arabic-books', 'کتب تراث، تفاسیر و احادیث مع شروح عربی', 8),
('c1000000-0000-0000-0000-000000000009', 'دینی نصاب', 'Dars-e-Nizami', 'dars-e-nizami', 'درس نظامی و وفاق المدارس کے نصابی کتب', 9),
('c1000000-0000-0000-0000-000000000010', 'بچوں کی اسلامی کتب', 'Children Islamic Books', 'children-islamic', 'بچوں کی تربیت اور دلچسپ سچی اسلامی کہانیاں', 10),
('c1000000-0000-0000-0000-000000000011', 'اصلاح و تربیت', 'Self Rectification & Tazkiya', 'islah-o-tarbiyat', 'تصوف، تزکیہ نفس اور اخلاقی تربیت', 11),
('c1000000-0000-0000-0000-000000000012', 'لغات و قواعد', 'Dictionaries & Grammar', 'dictionaries-grammar', 'عربی، اردو، فارسی لغات اور صرف و نحو کے اصول', 12)
ON CONFLICT (slug) DO NOTHING;

-- Publishers
INSERT INTO public.publishers (id, name_ur, name_en, description, contact_info) VALUES
('p1000000-0000-0000-0000-000000000001', 'الخلیل پبلشرز', 'Al Khalil Publishers', 'معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ', 'info@alkhalilpublishers.com'),
('p1000000-0000-0000-0000-000000000002', 'مکتبۃ معارف القرآن (دار العلوم کراچی)', 'Maktaba Maariful Quran', 'دار العلوم کراچی کی مستند مطبوعات', 'Karachi, Pakistan'),
('p1000000-0000-0000-0000-000000000003', 'مکتبۃ البشریٰ', 'Maktabatul Bushra', 'عربی کتب و نصاب کی دیدہ زیب طباعت', 'Karachi, Pakistan'),
('p1000000-0000-0000-0000-000000000004', 'دار السلام', 'Darussalam', 'عالمی سطح پر معروف اسلامی اشاعتی ادارہ', 'Lahore, Pakistan'),
('p1000000-0000-0000-0000-000000000005', 'بیت العلم', 'Bait-ul-Ilm', 'قدیم و جدید اسلامی کتب', 'Karachi, Pakistan')
ON CONFLICT DO NOTHING;

-- Authors
INSERT INTO public.authors (id, name_ur, name_en, bio_ur) VALUES
('a1000000-0000-0000-0000-000000000001', 'شیخ الاسلام مفتی محمد تقی عثمانی', 'Mufti Muhammad Taqi Usmani', 'معروف عالم دین، فقیہ اور سابق جج شرعی اپیلٹ بینچ سپریم کورٹ آف پاکستان'),
('a1000000-0000-0000-0000-000000000002', 'مفتی اعظم مفتی محمد شفیع عثمانیؒ', 'Mufti Muhammad Shafi Usmani', 'بانی دار العلوم کراچی اور مفسر معارف القرآن'),
('a1000000-0000-0000-0000-000000000003', 'حجۃ الاسلام امام ابو حامد غزالیؒ', 'Imam Abu Hamid Al-Ghazali', 'عظیم فقیہ، فلسفی اور مصلح امت'),
('a1000000-0000-0000-0000-000000000004', 'علامہ حافظ ابن کثیر دمشقیؒ', 'Hafiz Ibn Kathir', 'عظیم محدث، مفسر اور مؤرخ اسلام'),
('a1000000-0000-0000-0000-000000000005', 'امام ابو عبد اللہ محمد بن اسماعیل بخاریؒ', 'Imam Muhammad bin Ismail Al-Bukhari', 'امیر المومنین فی الحدیث اور مصنف صحیح بخاری')
ON CONFLICT DO NOTHING;

-- Shipping Zones (Provinces of Pakistan)
INSERT INTO public.shipping_zones (id, name, province) VALUES
('z1000000-0000-0000-0000-000000000001', 'پنجاب (Punjab)', 'Punjab'),
('z1000000-0000-0000-0000-000000000002', 'سندھ (Sindh)', 'Sindh'),
('z1000000-0000-0000-0000-000000000003', 'خیبر پختونخوا (KPK)', 'Khyber Pakhtunkhwa'),
('z1000000-0000-0000-0000-000000000004', 'بلوچستان (Balochistan)', 'Balochistan'),
('z1000000-0000-0000-0000-000000000005', 'وفاقی دارالحکومت اسلام آباد (ICT)', 'Islamabad'),
('z1000000-0000-0000-0000-000000000006', 'آزاد جموں و کشمیر (AJK)', 'Azad Jammu and Kashmir'),
('z1000000-0000-0000-0000-000000000007', 'گلگت بلتستان (GB)', 'Gilgit-Baltistan')
ON CONFLICT DO NOTHING;

-- Shipping Rates
INSERT INTO public.shipping_rates (
    zone_id,
    city,
    shipping_method,
    base_charge,
    included_weight_grams,
    extra_charge_per_kg,
    free_shipping_threshold
) VALUES
('z1000000-0000-0000-0000-000000000001', NULL, 'معیاری کوریئر سروس (TCS / Leopard)', 220, 1000, 90, 5000),
('z1000000-0000-0000-0000-000000000001', 'Lahore', 'لاہور مقامی ترسیل (Local Express)', 150, 1000, 60, 4000),
('z1000000-0000-0000-0000-000000000002', NULL, 'معیاری کوریئر سروس (TCS / Leopard)', 250, 1000, 100, 5000),
('z1000000-0000-0000-0000-000000000002', 'Karachi', 'کراچی کوریئر ترسیل', 200, 1000, 80, 4500),
('z1000000-0000-0000-0000-000000000003', NULL, 'معیاری کوریئر سروس', 260, 1000, 100, 6000),
('z1000000-0000-0000-0000-000000000004', NULL, 'معیاری کوریئر سروس', 300, 1000, 120, 7000),
('z1000000-0000-0000-0000-000000000005', 'Islamabad', 'معیاری کوریئر سروس', 200, 1000, 80, 5000),
('z1000000-0000-0000-0000-000000000006', NULL, 'معیاری کوریئر سروس', 280, 1000, 110, 6000),
('z1000000-0000-0000-0000-000000000007', NULL, 'معیاری کوریئر سروس', 320, 1000, 130, 7000)
ON CONFLICT DO NOTHING;

-- Initial Active Promo Code
INSERT INTO public.promo_codes (
    code,
    description,
    discount_type,
    discount_value,
    min_order_amount,
    max_discount_amount,
    is_active
) VALUES (
    'BISMILLAH',
    'خصوصی تعارفی رعایت برائے نئی شروعات',
    'percentage',
    10,
    1500,
    500,
    true
) ON CONFLICT (code) DO NOTHING;

-- Site Settings
INSERT INTO public.site_settings (key, value_json, description) VALUES
('general', '{
    "store_name_ur": "الخلیل پبلشرز",
    "store_name_en": "Al Khalil Publishers",
    "tagline_ur": "اسلامی کتب، تفاسیر، احادیث اور درسی کتب کا معتبر اشاعتی مرکز",
    "whatsapp_number": "923001234567",
    "phone_number": "+92 42 37123456",
    "email": "info@alkhalilpublishers.com",
    "address": "اردو بازار، لاہور، پاکستان",
    "default_currency": "PKR",
    "default_low_stock_threshold": 10
}'::jsonb, 'General Store Profile & Contacts'),

('payment_instructions', '{
    "bank_name": "Meezan Bank Limited",
    "account_title": "Al Khalil Publishers",
    "account_number": "01010101010101",
    "iban": "PK36MEZN0001010101010101",
    "easypaisa_title": "Al Khalil Publishers",
    "easypaisa_number": "03001234567",
    "jazzcash_title": "Al Khalil Publishers",
    "jazzcash_number": "03001234567",
    "instructions_ur": "آرڈر مکمل کرنے کے بعد اپنی رقم مذکورہ بینک اکاؤنٹ، ایزی پیسہ یا جاز کیش میں جمع کروائیں اور اسکرین شاٹ/رسید پورٹل پر یا واٹس ایپ پر ارسال فرمائیں۔"
}'::jsonb, 'Bank & Mobile Payment Accounts')
ON CONFLICT (key) DO NOTHING;
