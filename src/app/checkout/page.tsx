'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Building2,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  User,
  MapPin,
  Phone,
  FileText,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { store } from '@/lib/data/store';
import { PAKISTAN_PROVINCES, MAJOR_CITIES, PAYMENT_METHOD_DETAILS } from '@/lib/constants';
import { PaymentMethod } from '@/types';

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    regularSubtotal,
    finalSubtotal,
    bookDiscounts,
    promoCode,
    promoDiscount,
    totalWeightGrams,
    province,
    city,
    setDestination,
    shippingCharge,
    shippingError,
    grandTotal,
    clearCart,
  } = useCart();
  const { user } = useAuth();
  const settings = store.getSiteSettings();

  // Step 1: Form state
  const [customerName, setCustomerName] = useState(user?.profile.full_name || '');
  const [customerPhone, setCustomerPhone] = useState(user?.profile.phone || '');
  const [customerWhatsapp, setCustomerWhatsapp] = useState(user?.profile.whatsapp || '');
  const [deliveryAddress, setDeliveryAddress] = useState(user?.profile.address || '');
  const [addressInstructions, setAddressInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('bank_transfer');

  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h1 className="font-nastaliq text-2xl font-bold text-brand-navy-950">
          آپ کی ٹوکری میں کوئی کتاب موجود نہیں ہے
        </h1>
        <button
          onClick={() => router.push('/books')}
          className="mt-4 bg-brand-navy-950 text-brand-gold px-6 py-2.5 rounded-xl text-xs font-bold"
        >
          کتب دیکھیں
        </button>
      </div>
    );
  }

  const citiesForProvince = MAJOR_CITIES[province] || [];

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validation
    if (!customerName.trim()) {
      setFormError('براہ کرم اپنا پورا نام درج فرمائیں۔');
      return;
    }
    if (!customerPhone.trim() || customerPhone.trim().length < 10) {
      setFormError('براہ کرم درست رابطہ نمبر (موبائل فون) درج فرمائیں۔');
      return;
    }
    if (!deliveryAddress.trim()) {
      setFormError('براہ کرم مکمل ترسیلی پتہ درج فرمائیں۔');
      return;
    }

    setIsSubmitting(true);

    try {
      const orderItems = items.map((item) => ({
        id: `oi-${Date.now()}-${item.edition_id}`,
        order_id: '',
        edition_id: item.edition_id,
        book_id: item.book.id,
        book_title_ur: item.book.title_ur,
        publisher_name_ur: item.edition.publisher?.name_ur || 'الخلیل پبلشرز',
        edition_name: item.edition.edition_name,
        quantity: item.quantity,
        unit_purchase_cost: item.edition.purchase_cost || 0,
        unit_regular_price: item.edition.regular_price,
        unit_discount: item.edition.regular_price - item.edition.final_price,
        unit_final_price: item.edition.final_price,
        line_total: item.line_total,
        weight_grams: item.edition.weight_grams * item.quantity,
      }));

      const createdOrder = store.placeOrder({
        user_id: user?.id || null,
        payment_method: paymentMethod,
        subtotal: regularSubtotal,
        book_discounts: bookDiscounts,
        promo_discount: promoDiscount,
        promo_code_id: promoCode?.id || null,
        total_weight_grams: totalWeightGrams,
        shipping_charge: shippingCharge,
        grand_total: grandTotal,
        customer_name: customerName.trim(),
        customer_phone: customerPhone.trim(),
        customer_whatsapp: (customerWhatsapp || customerPhone).trim(),
        province,
        city,
        delivery_address: deliveryAddress.trim(),
        address_instructions: addressInstructions.trim(),
        items: orderItems,
      });

      // Clear the shopping cart
      clearCart();

      // Redirect to invoice page
      router.push(`/orders/${createdOrder.id}`);
    } catch (err: any) {
      setFormError(err?.message || 'آرڈر محفوظ کرنے میں خرابی پیش آئی۔ براہ کرم دوبارہ کوشش فرمائیں۔');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 text-right">
      <div className="border-b border-brand-gold/30 pb-4">
        <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
          آرڈر کی تصدیق اور چیک آؤٹ (Checkout)
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          براہ کرم ترسیلی پتہ، رابطہ اور ادائیگی کا طریقہ کار منتخب فرمائیں
        </p>
      </div>

      {formError && (
        <div className="bg-rose-50 border border-rose-300 text-rose-800 p-4 rounded-xl flex items-center space-x-3 space-x-reverse text-xs">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />
          <span className="font-medium">{formError}</span>
        </div>
      )}

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form Details (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Customer Details */}
          <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse text-brand-navy-950 font-bold border-b pb-3">
              <User className="w-5 h-5 text-brand-gold ml-1.5" />
              <h2 className="font-nastaliq text-lg">1. گاہک کے کوائف و رابطہ (Customer Details)</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-gray-700 block mb-1">
                  پورا نام (Full Name) <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="اپنا پورا نام درج کریں..."
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold text-right"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">
                  رابطہ نمبر / موبائل (Phone) <span className="text-rose-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="03001234567"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold text-right"
                  dir="ltr"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-semibold text-gray-700 block mb-1">
                  واٹس ایپ نمبر (WhatsApp Number) — اگر مختلف ہو
                </label>
                <input
                  type="tel"
                  placeholder="03001234567"
                  value={customerWhatsapp}
                  onChange={(e) => setCustomerWhatsapp(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold text-right"
                  dir="ltr"
                />
                <span className="text-[11px] text-gray-400 mt-1 block">
                  آرڈر کی تفصیلات اور ترسیلی ٹریکنگ اس واٹس ایپ پر ارسال کی جائیں گی۔
                </span>
              </div>
            </div>
          </div>

          {/* Step 2: Shipping Destination */}
          <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse text-brand-navy-950 font-bold border-b pb-3">
              <MapPin className="w-5 h-5 text-brand-gold ml-1.5" />
              <h2 className="font-nastaliq text-lg">2. ترسیلی پتہ (Delivery Address)</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-gray-700 block mb-1">
                  صوبہ (Province) <span className="text-rose-600">*</span>
                </label>
                <select
                  value={province}
                  onChange={(e) => {
                    const newP = e.target.value;
                    const newCities = MAJOR_CITIES[newP] || [];
                    setDestination(newP, newCities[0]?.name_ur || 'لاہور');
                  }}
                  className="w-full p-2.5 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-brand-gold text-right"
                >
                  {PAKISTAN_PROVINCES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name_ur} ({p.name_en})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">
                  شہر (City) <span className="text-rose-600">*</span>
                </label>
                <select
                  value={city}
                  onChange={(e) => setDestination(province, e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-brand-gold text-right"
                >
                  {citiesForProvince.map((c) => (
                    <option key={c.name_en} value={c.name_ur}>
                      {c.name_ur} ({c.name_en})
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="font-semibold text-gray-700 block mb-1">
                  مکمل پتہ (Street Address, House/Office Number, Landmark) <span className="text-rose-600">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="مکان نمبر، گلی، محلہ، نزدیکی معروف مقام درج فرمائیں..."
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold text-right text-xs"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-semibold text-gray-700 block mb-1">
                  ترسیلی ہدایات (Optional Delivery Instructions)
                </label>
                <input
                  type="text"
                  placeholder="مثلاً: ترسیل سے قبل کال کر لیں..."
                  value={addressInstructions}
                  onChange={(e) => setAddressInstructions(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-200 text-xs text-right"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Payment Method Selection */}
          <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse text-brand-navy-950 font-bold border-b pb-3">
              <CreditCard className="w-5 h-5 text-brand-gold ml-1.5" />
              <h2 className="font-nastaliq text-lg">3. طریقہ ادائیگی (Payment Method)</h2>
            </div>

            <div className="space-y-3">
              {/* Bank Transfer Option */}
              <label
                className={`p-4 rounded-xl border flex items-start space-x-3 space-x-reverse cursor-pointer transition-all ${
                  paymentMethod === 'bank_transfer'
                    ? 'border-brand-gold bg-brand-gold/5 shadow-sm'
                    : 'border-gray-200 hover:border-brand-gold/40'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'bank_transfer'}
                  onChange={() => setPaymentMethod('bank_transfer')}
                  className="mt-1 text-brand-gold focus:ring-brand-gold"
                />
                <div className="flex-1 mr-2 text-xs">
                  <div className="flex items-center font-bold text-brand-navy-950 text-sm">
                    <Building2 className="w-4 h-4 ml-1.5 text-brand-gold" />
                    <span>بینک ٹرانسفر — میزان بینک (Meezan Bank)</span>
                  </div>
                  <p className="text-gray-500 mt-1">
                    آرڈر کے بعد بینک اکاؤنٹ میں رقم جمع کرائیں اور رسید پورٹل یا واٹس ایپ پر ارسال فرمائیں۔
                  </p>

                  {paymentMethod === 'bank_transfer' && (
                    <div className="mt-3 bg-white p-3 rounded-lg border border-brand-gold/30 space-y-1 text-xs">
                      <div><span className="text-gray-400">بینک:</span> <strong>{settings.payment_instructions.bank_name}</strong></div>
                      <div><span className="text-gray-400">اکاؤنٹ ٹائٹل:</span> <strong>{settings.payment_instructions.account_title}</strong></div>
                      <div><span className="text-gray-400">اکاؤنٹ نمبر:</span> <strong className="font-mono">{settings.payment_instructions.account_number}</strong></div>
                      <div><span className="text-gray-400">IBAN:</span> <strong className="font-mono">{settings.payment_instructions.iban}</strong></div>
                    </div>
                  )}
                </div>
              </label>

              {/* Easypaisa Option */}
              <label
                className={`p-4 rounded-xl border flex items-start space-x-3 space-x-reverse cursor-pointer transition-all ${
                  paymentMethod === 'easypaisa'
                    ? 'border-brand-gold bg-brand-gold/5 shadow-sm'
                    : 'border-gray-200 hover:border-brand-gold/40'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'easypaisa'}
                  onChange={() => setPaymentMethod('easypaisa')}
                  className="mt-1 text-brand-gold focus:ring-brand-gold"
                />
                <div className="flex-1 mr-2 text-xs">
                  <div className="flex items-center font-bold text-brand-navy-950 text-sm">
                    <Smartphone className="w-4 h-4 ml-1.5 text-emerald-600" />
                    <span>ایزی پیسہ (Easypaisa)</span>
                  </div>
                  {paymentMethod === 'easypaisa' && (
                    <div className="mt-3 bg-white p-3 rounded-lg border border-brand-gold/30 space-y-1 text-xs">
                      <div><span className="text-gray-400">عنوان:</span> <strong>{settings.payment_instructions.easypaisa_title}</strong></div>
                      <div><span className="text-gray-400">نمبر:</span> <strong className="font-mono text-emerald-700">{settings.payment_instructions.easypaisa_number}</strong></div>
                    </div>
                  )}
                </div>
              </label>

              {/* JazzCash Option */}
              <label
                className={`p-4 rounded-xl border flex items-start space-x-3 space-x-reverse cursor-pointer transition-all ${
                  paymentMethod === 'jazzcash'
                    ? 'border-brand-gold bg-brand-gold/5 shadow-sm'
                    : 'border-gray-200 hover:border-brand-gold/40'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'jazzcash'}
                  onChange={() => setPaymentMethod('jazzcash')}
                  className="mt-1 text-brand-gold focus:ring-brand-gold"
                />
                <div className="flex-1 mr-2 text-xs">
                  <div className="flex items-center font-bold text-brand-navy-950 text-sm">
                    <Smartphone className="w-4 h-4 ml-1.5 text-rose-600" />
                    <span>جاز کیش (JazzCash)</span>
                  </div>
                  {paymentMethod === 'jazzcash' && (
                    <div className="mt-3 bg-white p-3 rounded-lg border border-brand-gold/30 space-y-1 text-xs">
                      <div><span className="text-gray-400">عنوان:</span> <strong>{settings.payment_instructions.jazzcash_title}</strong></div>
                      <div><span className="text-gray-400">نمبر:</span> <strong className="font-mono text-rose-700">{settings.payment_instructions.jazzcash_number}</strong></div>
                    </div>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Final Bill Summary (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-6 text-right sticky top-28">
            <h2 className="font-nastaliq text-xl font-bold text-brand-navy-950 border-b pb-3">
              فائنل بل و منتخب کتب (Order Items)
            </h2>

            {/* Items list summary */}
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-xs py-1 border-b border-gray-100 last:border-none">
                  <div className="flex-1 ml-2">
                    <span className="font-nastaliq font-bold text-brand-navy-950 block truncate max-w-[200px]">
                      {item.book.title_ur}
                    </span>
                    <span className="text-[10px] text-gray-500">
                      {item.edition.publisher?.name_ur || 'الخلیل پبلشرز'} × {item.quantity}
                    </span>
                  </div>
                  <span className="font-bold text-brand-navy-900 shrink-0">
                    روپے {item.line_total.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Detailed itemized financial summary */}
            <div className="space-y-2 text-xs border-t pt-4">
              <div className="flex justify-between text-gray-600">
                <span>اصل قیمت (Original Subtotal):</span>
                <span>روپے {regularSubtotal.toLocaleString()}</span>
              </div>

              {bookDiscounts > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>کتب پر رعایت (Book Discounts):</span>
                  <span>- روپے {bookDiscounts.toLocaleString()}</span>
                </div>
              )}

              {promoDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>پرومو رعایت ({promoCode?.code}):</span>
                  <span>- روپے {promoDiscount.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between text-gray-600">
                <span>کل وزن (Total Weight):</span>
                <span>{totalWeightGrams.toLocaleString()} گرام</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>شپنگ چارجز ({city}):</span>
                <span>روپے {shippingCharge.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-base font-extrabold text-brand-navy-950 border-t border-brand-gold/30 pt-3">
                <span>کل قابلِ ادا رقم:</span>
                <span className="text-brand-gold-700">
                  روپے {grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Submit Order Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-gold hover:bg-brand-gold-400 disabled:bg-gray-300 text-brand-navy-950 font-bold py-4 rounded-xl transition-all shadow-gold flex items-center justify-center space-x-2 space-x-reverse text-sm"
            >
              <CheckCircle2 className="w-5 h-5 ml-2" />
              <span>{isSubmitting ? 'آرڈر محفوظ کیا جا رہا ہے...' : 'آرڈر مکمل فرمائیں (Place Order)'}</span>
            </button>

            <p className="text-[11px] text-gray-400 text-center leading-relaxed">
              آرڈر محفوظ ہونے کے بعد آپ کو رسید ملے گی اور آپ تفصیلات واٹس ایپ پر بھی ارسال کر سکیں گے۔
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
