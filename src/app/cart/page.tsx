'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Trash2,
  ShoppingCart,
  ArrowLeft,
  ArrowRight,
  Tag,
  Scale,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { PAKISTAN_PROVINCES, MAJOR_CITIES } from '@/lib/constants';

export default function CartPage() {
  const router = useRouter();
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    regularSubtotal,
    finalSubtotal,
    bookDiscounts,
    promoCode,
    promoDiscount,
    applyPromoCode,
    removePromoCode,
    totalWeightGrams,
    province,
    city,
    setDestination,
    shippingCharge,
    shippingError,
    grandTotal,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;

    const res = applyPromoCode(promoInput.trim());
    setPromoMessage({ text: res.message, isError: !res.success });
    if (res.success) {
      setPromoInput('');
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-20 h-20 bg-brand-gold/15 text-brand-gold rounded-full flex items-center justify-center mx-auto">
          <ShoppingCart className="w-10 h-10" />
        </div>
        <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
          آپ کی خریداری کی ٹوکری خالی ہے
        </h1>
        <p className="text-xs text-gray-500 max-w-sm mx-auto">
          آپ نے ابھی تک کوئی کتاب منتخب نہیں کی۔ الخلیل پبلشرز کے علمی ذخیرے سے اپنی پسندیدہ کتب تلاش فرمائیں۔
        </p>
        <Link
          href="/books"
          className="inline-flex items-center bg-brand-navy-950 hover:bg-brand-navy-900 text-brand-gold font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-card"
        >
          <span>کتب کا جائزہ لیں (Browse Books)</span>
          <ArrowLeft className="w-4 h-4 mr-2" />
        </Link>
      </div>
    );
  }

  const citiesForProvince = MAJOR_CITIES[province] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 text-right">
      <div className="border-b border-brand-gold/30 pb-4 flex items-center justify-between">
        <div>
          <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
            خریداری کی ٹوکری (Shopping Cart)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            منتخب کردہ کتب، ایڈیشنز اور قیمتوں کا جائزہ لیں
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs text-rose-600 hover:text-rose-700 font-medium flex items-center"
        >
          <Trash2 className="w-3.5 h-3.5 ml-1" />
          <span>ٹوکری خالی کریں</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Cart Items List (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          {items.map((item) => {
            const coverUrl =
              item.book.images?.find((i) => i.image_type === 'front_cover')?.image_url ||
              item.edition.cover_image_url ||
              '/logo.png';

            const isLowStock =
              item.edition.stock_quantity <= item.edition.low_stock_threshold;

            return (
              <div
                key={item.id}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-brand-gold/30 shadow-soft flex flex-col sm:flex-row items-center gap-4 text-right"
              >
                {/* Cover Thumbnail */}
                <div className="relative w-20 h-28 bg-gray-100 rounded-lg overflow-hidden shrink-0 border">
                  <Image
                    src={coverUrl}
                    alt={item.book.title_ur}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 space-y-1 w-full">
                  <Link href={`/books/${item.book.id}`}>
                    <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950 hover:text-brand-gold transition-colors leading-tight">
                      {item.book.title_ur}
                    </h3>
                  </Link>

                  <p className="text-xs text-brand-gold-700 font-semibold">
                    {item.edition.publisher?.name_ur || 'الخلیل پبلشرز'} — {item.edition.edition_name}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500 pt-1">
                    <span className="flex items-center">
                      <Scale className="w-3 h-3 ml-1 text-gray-400" />
                      {item.edition.weight_grams * item.quantity} گرام
                    </span>
                    <span>•</span>
                    <span>فی نسخہ: روپے {item.edition.final_price.toLocaleString()}</span>
                    {item.edition.final_price < item.edition.regular_price && (
                      <span className="line-through text-gray-400">
                        روپے {item.edition.regular_price.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {isLowStock && (
                    <span className="text-[10px] text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded inline-block">
                      اسٹاک میں صرف {item.edition.stock_quantity} نسخے باقی ہیں
                    </span>
                  )}
                </div>

                {/* Quantity and Line Total */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                  <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50 overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.edition_id, item.quantity - 1)}
                      className="px-2.5 py-1 text-gray-600 hover:bg-gray-200 text-xs font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-bold text-brand-navy-950 min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.edition_id, item.quantity + 1)}
                      disabled={item.quantity >= item.edition.stock_quantity}
                      className="px-2.5 py-1 text-gray-600 hover:bg-gray-200 disabled:opacity-40 text-xs font-bold"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-sm font-bold text-brand-navy-950 block">
                      روپے {item.line_total.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.edition_id)}
                    className="text-gray-400 hover:text-rose-600 p-1"
                    title="حذف کریں"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary & Destination (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-6 text-right">
            <h2 className="font-nastaliq text-xl font-bold text-brand-navy-950 border-b pb-3">
              خلاصہ آرڈر (Order Summary)
            </h2>

            {/* Destination Selection for Accurate Weight-based Shipping */}
            <div className="space-y-3 bg-brand-navy-50/70 p-3.5 rounded-xl border border-brand-gold/30 text-xs">
              <span className="font-bold text-brand-navy-950 block">
                شپنگ کے لیے صوبہ و شہر منتخب کریں:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] text-gray-600 block mb-1">صوبہ:</label>
                  <select
                    value={province}
                    onChange={(e) => {
                      const newP = e.target.value;
                      const newCities = MAJOR_CITIES[newP] || [];
                      setDestination(newP, newCities[0]?.name_ur || 'لاہور');
                    }}
                    className="w-full bg-white border border-gray-300 rounded p-1.5 text-xs focus:outline-none"
                  >
                    {PAKISTAN_PROVINCES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name_ur}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] text-gray-600 block mb-1">شہر:</label>
                  <select
                    value={city}
                    onChange={(e) => setDestination(province, e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded p-1.5 text-xs focus:outline-none"
                  >
                    {citiesForProvince.map((c) => (
                      <option key={c.name_en} value={c.name_ur}>
                        {c.name_ur}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="space-y-2">
              <label className="text-xs font-semibold text-gray-700 block">
                پرومو کوڈ (Promo Code):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="کوپن کوڈ درج کریں..."
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="flex-1 uppercase font-mono text-xs p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold text-right"
                />
                <button
                  type="submit"
                  className="bg-brand-navy-900 hover:bg-brand-navy-800 text-brand-gold text-xs font-bold px-3 py-2 rounded-lg"
                >
                  لاگو کریں
                </button>
              </div>

              {promoMessage && (
                <p
                  className={`text-[11px] ${
                    promoMessage.isError ? 'text-rose-600' : 'text-emerald-600'
                  }`}
                >
                  {promoMessage.text}
                </p>
              )}

              {promoCode && (
                <div className="flex items-center justify-between bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1.5 rounded-lg text-xs">
                  <span>فعال کوڈ: <strong>{promoCode.code}</strong></span>
                  <button
                    type="button"
                    onClick={removePromoCode}
                    className="text-rose-600 hover:underline text-[11px]"
                  >
                    حذف کریں
                  </button>
                </div>
              )}
            </form>

            {/* Financial Breakdown */}
            <div className="space-y-2.5 text-xs border-t pt-4">
              <div className="flex justify-between text-gray-600">
                <span>اصل رقم کتب:</span>
                <span>روپے {regularSubtotal.toLocaleString()}</span>
              </div>

              {bookDiscounts > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>کتب پر رعایت:</span>
                  <span>- روپے {bookDiscounts.toLocaleString()}</span>
                </div>
              )}

              {promoDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>پرومو کوڈ رعایت:</span>
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

              {shippingError && (
                <p className="text-[11px] text-amber-700">{shippingError}</p>
              )}

              <div className="flex justify-between text-base font-extrabold text-brand-navy-950 border-t border-brand-gold/30 pt-3">
                <span>قابلِ ادائیگی رقم (Grand Total):</span>
                <span className="text-brand-gold-700">
                  روپے {grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={() => router.push('/checkout')}
              className="w-full bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-bold py-3.5 rounded-xl transition-all shadow-gold flex items-center justify-center space-x-2 space-x-reverse text-sm"
            >
              <span>آرڈر کے لیے آگے بڑھیں (Checkout)</span>
              <ArrowLeft className="w-4 h-4 mr-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
