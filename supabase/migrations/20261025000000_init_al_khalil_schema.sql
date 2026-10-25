-- AL KHALIL PUBLISHERS (الخلیل پبلشرز)
-- Comprehensive Database Schema & Migrations
-- Generated for PostgreSQL 14+ / Supabase

-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--------------------------------------------------------------------------------
-- 1. PROFILES & ROLES
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    phone TEXT,
    whatsapp TEXT,
    province TEXT,
    city TEXT,
    address TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TYPE public.app_role AS ENUM ('super_admin', 'inventory_manager', 'order_manager', 'customer');

CREATE TABLE IF NOT EXISTS public.user_roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role public.app_role NOT NULL DEFAULT 'customer',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT unique_user_role UNIQUE (user_id, role)
);

CREATE TABLE IF NOT EXISTS public.addresses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT DEFAULT 'Home',
    recipient_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    whatsapp TEXT,
    province TEXT NOT NULL,
    city TEXT NOT NULL,
    street_address TEXT NOT NULL,
    postal_code TEXT,
    is_default BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

--------------------------------------------------------------------------------
-- 2. CATALOG: CATEGORIES, AUTHORS, PUBLISHERS, BOOKS, EDITIONS, IMAGES
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name_ur TEXT NOT NULL,
    name_en TEXT,
    slug TEXT NOT NULL UNIQUE,
    description_ur TEXT,
    parent_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    sort_order INT NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.authors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name_ur TEXT NOT NULL,
    name_en TEXT,
    bio_ur TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.publishers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name_ur TEXT NOT NULL,
    name_en TEXT,
    description TEXT,
    contact_info TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.books (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title_ur TEXT NOT NULL,
    title_en TEXT,
    subtitle_ur TEXT,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    subcategory_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    description_ur TEXT,
    language TEXT NOT NULL DEFAULT 'Urdu',
    binding_type TEXT DEFAULT 'مجالد (Hardback)',
    printing_type TEXT DEFAULT 'دو رنگہ (Two Color)',
    total_volumes INT NOT NULL DEFAULT 1,
    pages_count INT,
    publication_year INT,
    isbn TEXT,
    sku TEXT,
    tags TEXT[] DEFAULT '{}',
    is_featured BOOLEAN NOT NULL DEFAULT false,
    is_published BOOLEAN NOT NULL DEFAULT true,
    views_count INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TYPE public.author_role AS ENUM ('author', 'translator', 'editor', 'compiler');

CREATE TABLE IF NOT EXISTS public.book_authors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    book_id UUID NOT NULL REFERENCES public.books(id) ON DELETE CASCADE,
    author_id UUID NOT NULL REFERENCES public.authors(id) ON DELETE CASCADE,
    role public.author_role NOT NULL DEFAULT 'author',
    CONSTRAINT unique_book_author_role UNIQUE (book_id, author_id, role)
);

CREATE TYPE public.discount_type AS ENUM ('percentage', 'fixed');

CREATE TABLE IF NOT EXISTS public.book_editions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    book_id UUID NOT NULL REFERENCES public.books(id) ON DELETE CASCADE,
    publisher_id UUID NOT NULL REFERENCES public.publishers(id) ON DELETE RESTRICT,
    edition_name TEXT NOT NULL DEFAULT 'معیاری ایڈیشن (Standard Edition)',
    volumes INT NOT NULL DEFAULT 1,
    binding_type TEXT DEFAULT 'مجالد (Hardback)',
    printing_type TEXT DEFAULT 'دو رنگہ (Two Color)',
    purchase_cost INT NOT NULL DEFAULT 0, -- Stored in PKR integer
    regular_price INT NOT NULL,           -- Stored in PKR integer
    discount_type public.discount_type DEFAULT 'percentage',
    discount_value INT DEFAULT 0,         -- percentage (0-100) or fixed amount in PKR
    final_price INT NOT NULL,             -- Calculated selling price in PKR
    weight_grams INT NOT NULL DEFAULT 500,-- Weight in grams
    stock_quantity INT NOT NULL DEFAULT 0,-- Available physical stock
    reserved_quantity INT NOT NULL DEFAULT 0, -- In pending active orders
    low_stock_threshold INT NOT NULL DEFAULT 10,
    sku TEXT,
    barcode TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    cover_image_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT positive_prices CHECK (regular_price >= 0 AND final_price >= 0 AND purchase_cost >= 0),
    CONSTRAINT positive_stock CHECK (stock_quantity >= 0 AND reserved_quantity >= 0)
);

CREATE TYPE public.image_type AS ENUM ('front_cover', 'back_cover', 'gallery', 'sample_page');

CREATE TABLE IF NOT EXISTS public.book_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    book_id UUID NOT NULL REFERENCES public.books(id) ON DELETE CASCADE,
    edition_id UUID REFERENCES public.book_editions(id) ON DELETE CASCADE,
    image_type public.image_type NOT NULL DEFAULT 'front_cover',
    image_url TEXT NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

--------------------------------------------------------------------------------
-- 3. INVENTORY & STOCK MOVEMENTS AUDIT TRAIL
--------------------------------------------------------------------------------

CREATE TYPE public.movement_type AS ENUM (
    'restock',
    'sale',
    'reservation',
    'cancellation_release',
    'damage',
    'correction',
    'return'
);

CREATE TABLE IF NOT EXISTS public.inventory_movements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    edition_id UUID NOT NULL REFERENCES public.book_editions(id) ON DELETE CASCADE,
    movement_type public.movement_type NOT NULL,
    quantity_delta INT NOT NULL,
    previous_stock INT NOT NULL,
    new_stock INT NOT NULL,
    reason TEXT NOT NULL,
    reference_order_id UUID,
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

--------------------------------------------------------------------------------
-- 4. CARTS (DATABASE-BACKED OR PERSISTENT SESSION)
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.carts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    session_id TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT cart_owner_unique UNIQUE (user_id)
);

CREATE TABLE IF NOT EXISTS public.cart_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    cart_id UUID NOT NULL REFERENCES public.carts(id) ON DELETE CASCADE,
    edition_id UUID NOT NULL REFERENCES public.book_editions(id) ON DELETE CASCADE,
    quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT unique_cart_edition UNIQUE (cart_id, edition_id)
);

--------------------------------------------------------------------------------
-- 5. SHIPPING CONFIGURATION (ZONES & RATES)
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.shipping_zones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    province TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.shipping_rates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    zone_id UUID REFERENCES public.shipping_zones(id) ON DELETE CASCADE,
    city TEXT, -- NULL means province-wide default rate
    shipping_method TEXT NOT NULL DEFAULT 'Standard Courier (TCS / Leopard / Daewoo)',
    base_charge INT NOT NULL DEFAULT 200,          -- PKR for included weight
    included_weight_grams INT NOT NULL DEFAULT 1000, -- e.g., 1000g (1 kg)
    extra_charge_per_kg INT NOT NULL DEFAULT 80,    -- PKR per additional kg increment
    weight_increment_grams INT NOT NULL DEFAULT 1000,
    min_charge INT DEFAULT 150,
    max_charge INT,
    free_shipping_threshold INT,                    -- Optional e.g. orders above Rs. 5,000
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

--------------------------------------------------------------------------------
-- 6. PROMO CODES
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.promo_codes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code TEXT NOT NULL UNIQUE,
    description TEXT,
    discount_type public.discount_type NOT NULL DEFAULT 'percentage',
    discount_value INT NOT NULL, -- percent or PKR amount
    min_order_amount INT DEFAULT 0,
    max_discount_amount INT,
    start_date TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    expiry_date TIMESTAMPTZ,
    usage_limit INT,             -- total limit
    per_customer_limit INT DEFAULT 1,
    times_used INT NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

--------------------------------------------------------------------------------
-- 7. ORDERS, ITEMS, STATUS HISTORY
--------------------------------------------------------------------------------

CREATE TYPE public.order_status AS ENUM (
    'awaiting_payment',
    'payment_submitted',
    'payment_verified',
    'confirmed',
    'packing',
    'shipped',
    'delivered',
    'cancelled',
    'returned'
);

CREATE TYPE public.payment_status AS ENUM (
    'unpaid',
    'proof_submitted',
    'under_verification',
    'paid',
    'refunded'
);

CREATE TYPE public.payment_method AS ENUM (
    'bank_transfer',
    'easypaisa',
    'jazzcash',
    'cash_on_delivery'
);

CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_number TEXT NOT NULL UNIQUE, -- Human-readable, e.g. AK-2026-1001
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    status public.order_status NOT NULL DEFAULT 'awaiting_payment',
    payment_status public.payment_status NOT NULL DEFAULT 'unpaid',
    payment_method public.payment_method NOT NULL DEFAULT 'bank_transfer',
    
    -- Financial snapshots (stored in exact PKR integer)
    subtotal INT NOT NULL,
    book_discounts INT NOT NULL DEFAULT 0,
    promo_discount INT NOT NULL DEFAULT 0,
    promo_code_id UUID REFERENCES public.promo_codes(id) ON DELETE SET NULL,
    total_weight_grams INT NOT NULL DEFAULT 0,
    shipping_charge INT NOT NULL DEFAULT 0,
    grand_total INT NOT NULL,
    
    -- Customer & delivery snapshot
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_whatsapp TEXT,
    province TEXT NOT NULL,
    city TEXT NOT NULL,
    delivery_address TEXT NOT NULL,
    address_instructions TEXT,
    
    -- Fulfillment & Tracking
    courier_name TEXT,
    tracking_number TEXT,
    dispatch_date TIMESTAMPTZ,
    estimated_delivery TIMESTAMPTZ,
    
    -- Notes
    internal_notes TEXT,
    customer_notes TEXT,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    edition_id UUID REFERENCES public.book_editions(id) ON DELETE SET NULL,
    book_id UUID REFERENCES public.books(id) ON DELETE SET NULL,
    book_title_ur TEXT NOT NULL,
    publisher_name_ur TEXT NOT NULL,
    edition_name TEXT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    unit_purchase_cost INT NOT NULL DEFAULT 0,
    unit_regular_price INT NOT NULL,
    unit_discount INT NOT NULL DEFAULT 0,
    unit_final_price INT NOT NULL,
    line_total INT NOT NULL,
    weight_grams INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.order_status_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    previous_status public.order_status,
    new_status public.order_status NOT NULL,
    changed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.promo_code_usage (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    promo_code_id UUID NOT NULL REFERENCES public.promo_codes(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    discount_applied INT NOT NULL,
    used_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    CONSTRAINT unique_promo_order UNIQUE (promo_code_id, order_id)
);

--------------------------------------------------------------------------------
-- 8. PAYMENT RECORDS & PROOFS
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.payment_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    amount INT NOT NULL,
    payment_method public.payment_method NOT NULL,
    transaction_reference TEXT,
    status TEXT NOT NULL DEFAULT 'verified',
    verified_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    verified_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.payment_proofs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    file_url TEXT NOT NULL,
    transaction_reference TEXT,
    sender_name TEXT,
    sender_account TEXT,
    notes TEXT,
    uploaded_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

--------------------------------------------------------------------------------
-- 9. SITE SETTINGS & AUDIT LOGS
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.site_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key TEXT NOT NULL UNIQUE,
    value_json JSONB NOT NULL,
    description TEXT,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id TEXT,
    details_json JSONB,
    ip_address TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

--------------------------------------------------------------------------------
-- 10. INDEXES FOR PERFORMANCE
--------------------------------------------------------------------------------

CREATE INDEX IF NOT EXISTS idx_books_category ON public.books(category_id);
CREATE INDEX IF NOT EXISTS idx_books_featured ON public.books(is_featured) WHERE is_published = true;
CREATE INDEX IF NOT EXISTS idx_editions_book ON public.book_editions(book_id);
CREATE INDEX IF NOT EXISTS idx_editions_publisher ON public.book_editions(publisher_id);
CREATE INDEX IF NOT EXISTS idx_orders_user ON public.orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_number ON public.orders(order_number);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON public.order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_edition ON public.order_items(edition_id);
CREATE INDEX IF NOT EXISTS idx_cart_items_cart ON public.cart_items(cart_id);
CREATE INDEX IF NOT EXISTS idx_inventory_movements_edition ON public.inventory_movements(edition_id);

--------------------------------------------------------------------------------
-- 11. SECURITY: ROW LEVEL SECURITY (RLS) POLICIES
--------------------------------------------------------------------------------

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.publishers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.book_authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.book_editions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.book_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory_movements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shipping_zones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shipping_rates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.promo_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.promo_code_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_status_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_proofs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Helper security functions
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.user_roles
        WHERE user_id = $1 AND role IN ('super_admin', 'inventory_manager', 'order_manager')
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.has_role(user_id UUID, req_role public.app_role)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.user_roles
        WHERE user_id = $1 AND (role = req_role OR role = 'super_admin')
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Public Catalog read policies
CREATE POLICY "Public can view active categories" ON public.categories FOR SELECT USING (is_active = true OR public.is_admin(auth.uid()));
CREATE POLICY "Public can view active authors" ON public.authors FOR SELECT USING (is_active = true OR public.is_admin(auth.uid()));
CREATE POLICY "Public can view active publishers" ON public.publishers FOR SELECT USING (is_active = true OR public.is_admin(auth.uid()));
CREATE POLICY "Public can view published books" ON public.books FOR SELECT USING (is_published = true OR public.is_admin(auth.uid()));
CREATE POLICY "Public can view book authors" ON public.book_authors FOR SELECT USING (true);
CREATE POLICY "Public can view active editions" ON public.book_editions FOR SELECT USING (is_active = true OR public.is_admin(auth.uid()));
CREATE POLICY "Public can view book images" ON public.book_images FOR SELECT USING (true);
CREATE POLICY "Public can view active shipping rates" ON public.shipping_rates FOR SELECT USING (is_active = true OR public.is_admin(auth.uid()));
CREATE POLICY "Public can view active shipping zones" ON public.shipping_zones FOR SELECT USING (is_active = true OR public.is_admin(auth.uid()));
CREATE POLICY "Public can view active promo codes" ON public.promo_codes FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view public site settings" ON public.site_settings FOR SELECT USING (true);

-- User Profile policies
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id OR public.is_admin(auth.uid()));
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- User Address policies
CREATE POLICY "Users can view own addresses" ON public.addresses FOR SELECT USING (auth.uid() = user_id OR public.is_admin(auth.uid()));
CREATE POLICY "Users can manage own addresses" ON public.addresses FOR ALL USING (auth.uid() = user_id);

-- Cart policies
CREATE POLICY "Users can manage own cart" ON public.carts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own cart items" ON public.cart_items FOR ALL USING (
    EXISTS (SELECT 1 FROM public.carts WHERE carts.id = cart_items.cart_id AND carts.user_id = auth.uid())
);

-- Orders policies
CREATE POLICY "Users can view own orders" ON public.orders FOR SELECT USING (auth.uid() = user_id OR public.is_admin(auth.uid()));
CREATE POLICY "Users can view own order items" ON public.order_items FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.orders WHERE orders.id = order_items.order_id AND (orders.user_id = auth.uid() OR public.is_admin(auth.uid())))
);
CREATE POLICY "Users can view own order history" ON public.order_status_history FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.orders WHERE orders.id = order_status_history.order_id AND (orders.user_id = auth.uid() OR public.is_admin(auth.uid())))
);
CREATE POLICY "Users can upload and view own payment proofs" ON public.payment_proofs FOR ALL USING (
    EXISTS (SELECT 1 FROM public.orders WHERE orders.id = payment_proofs.order_id AND (orders.user_id = auth.uid() OR public.is_admin(auth.uid())))
);

-- Admin full access policies
CREATE POLICY "Admins have full access to categories" ON public.categories FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to authors" ON public.authors FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to publishers" ON public.publishers FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to books" ON public.books FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to book authors" ON public.book_authors FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to book editions" ON public.book_editions FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to book images" ON public.book_images FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to inventory movements" ON public.inventory_movements FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to shipping" ON public.shipping_rates FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to shipping zones" ON public.shipping_zones FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to promo codes" ON public.promo_codes FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to orders" ON public.orders FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to order items" ON public.order_items FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to payment records" ON public.payment_records FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to site settings" ON public.site_settings FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins have full access to audit logs" ON public.audit_logs FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can view user roles" ON public.user_roles FOR SELECT USING (public.is_admin(auth.uid()) OR auth.uid() = user_id);
CREATE POLICY "Super admins can manage user roles" ON public.user_roles FOR ALL USING (public.has_role(auth.uid(), 'super_admin'));
