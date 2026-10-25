'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Printer,
  Phone,
  MessageCircle,
  Truck,
  CheckCircle2,
  Clock,
  Package,
  Calendar,
  CreditCard,
  Building2,
  FileCheck,
  Upload,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import { store } from '@/lib/data/store';
import {
  ORDER_STATUS_DETAILS,
  PAYMENT_STATUS_DETAILS,
  PAYMENT_METHOD_DETAILS,
} from '@/lib/constants';
import { OrderStatus } from '@/types';

export default function OrderInvoicePage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params?.id as string;

  const order = store.getOrderById(orderId);
  const settings = store.getSiteSettings();

  // Payment proof form state
  const [txnRef, setTxnRef] = useState('');
  const [senderName, setSenderName] = useState('');
  const [proofSubmitted, setProofSubmitted] = useState(false);

  if (!order) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-nastaliq text-2xl font-bold text-brand-navy-950">
          مطلوبہ آرڈر کا ریکارڈ نہیں ملا
        </h1>
        <p className="text-xs text-gray-500">
          براہ کرم آرڈر نمبر کی درستگی چیک فرمائیں یا اپنے اکاؤنٹ میں لاگ ان ہوں۔
        </p>
        <Link
          href="/books"
          className="inline-block bg-brand-navy-950 text-brand-gold px-6 py-2.5 rounded-xl text-xs font-bold"
        >
          کتب کی فہرست پر جائیں
        </Link>
      </div>
    );
  }

  const statusInfo = ORDER_STATUS_DETAILS[order.status];
  const paymentInfo = PAYMENT_STATUS_DETAILS[order.payment_status];
  const methodInfo = PAYMENT_METHOD_DETAILS[order.payment_method];

  // WhatsApp prefilled message generation (Section 15 Specification)
  const itemsListText = (order.items || [])
    .map(
      (item) =>
        `• ${item.book_title_ur} (${item.edition_name} / ${item.publisher_name_ur}) × ${item.quantity} = روپے ${item.line_total.toLocaleString()}`
    )
    .join('\n');

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://alkhalilpublishers.com';
  const orderUrl = `${siteUrl}/orders/${order.id}`;

  const whatsappMessage = `*AL KHALIL PUBLISHERS — NEW ORDER*

*Order Number:* ${order.order_number}
*Order Date:* ${new Date(order.created_at).toLocaleDateString('ur-PK')}
*Customer Name:* ${order.customer_name}
*Customer Phone:* ${order.customer_phone}
*WhatsApp Number:* ${order.customer_whatsapp || order.customer_phone}
*Delivery Address:* ${order.delivery_address}
*City:* ${order.city}
*Province:* ${order.province}

*BOOK DETAILS:*
${itemsListText}

*Subtotal:* روپے ${order.subtotal.toLocaleString()}
*Book Discounts:* روپے ${order.book_discounts.toLocaleString()}
*Promo Discount:* روپے ${order.promo_discount.toLocaleString()}
*Total Weight:* ${order.total_weight_grams} گرام
*Shipping Charge:* روپے ${order.shipping_charge.toLocaleString()}
*Grand Total:* روپے ${order.grand_total.toLocaleString()}
*Payment Method:* ${methodInfo?.ur || order.payment_method}
*Payment Status:* ${paymentInfo?.ur || order.payment_status}
*Order Status:* ${statusInfo?.ur || order.status}

*Order Details URL:* ${orderUrl}`;

  const encodedWhatsAppUrl = `https://wa.me/${settings.general.whatsapp_number}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handlePrint = () => {
    window.print();
  };

  const handleProofSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!txnRef.trim() && !senderName.trim()) return;

    store.addPaymentProof(order.id, {
      file_url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop', // receipt mock
      transaction_reference: txnRef.trim(),
      sender_name: senderName.trim(),
    });

    setProofSubmitted(true);
  };

  // Progress Steps Tracker
  const steps: { key: OrderStatus; labelUr: string }[] = [
    { key: 'awaiting_payment', labelUr: 'آرڈر موصول' },
    { key: 'confirmed', labelUr: 'تصدیق شدہ' },
    { key: 'packing', labelUr: 'پیکنگ جاری' },
    { key: 'shipped', labelUr: 'روانہ شدہ' },
    { key: 'delivered', labelUr: 'پہنچ گیا' },
  ];

  const currentStep = statusInfo?.step || 1;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 text-right">
      {/* Top Action Bar (No-Print) */}
      <div className="no-print bg-white p-4 rounded-2xl border border-brand-gold/30 shadow-card flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2 space-x-reverse">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 ml-1.5" />
          <span className="font-nastaliq text-base font-bold text-brand-navy-950">
            آرڈر کامیابی کے ساتھ محفوظ ہو گیا ہے!
          </span>
        </div>

        <div className="flex items-center space-x-3 space-x-reverse">
          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="flex items-center bg-gray-100 hover:bg-gray-200 text-brand-navy-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors"
          >
            <Printer className="w-4 h-4 ml-1.5" />
            <span>رسید پرنٹ کریں (Print Invoice)</span>
          </button>

          {/* WhatsApp Direct Order Button (Section 15) */}
          <a
            href={encodedWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow"
          >
            <MessageCircle className="w-4 h-4 ml-1.5" />
            <span>واٹس ایپ پر تفصیلات بھیجیں</span>
          </a>
        </div>
      </div>

      {/* Visual Tracking Progress Bar (Section 16) */}
      <div className="no-print bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950">
            آرڈر ٹریکنگ و ترسیلی مراحل (Order Progress)
          </h3>
          <span className={`text-xs px-2.5 py-1 rounded-full border ${statusInfo.color}`}>
            {statusInfo.ur}
          </span>
        </div>

        {/* Milestone Steps */}
        <div className="relative pt-4 pb-2">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 right-0 h-1 bg-brand-gold -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${Math.min(100, ((currentStep - 1) / 4) * 100)}%` }}
          />

          <div className="relative z-10 flex justify-between">
            {steps.map((st, idx) => {
              const isPassed = currentStep >= idx + 1;
              const isCurrent = currentStep === idx + 1;

              return (
                <div key={st.key} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      isPassed
                        ? 'bg-brand-navy-950 text-brand-gold ring-4 ring-brand-gold/30'
                        : 'bg-white border-2 border-gray-300 text-gray-400'
                    }`}
                  >
                    {isPassed ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                  </div>
                  <span
                    className={`text-[11px] font-nastaliq mt-2 font-medium ${
                      isCurrent ? 'text-brand-gold-700 font-bold' : 'text-gray-500'
                    }`}
                  >
                    {st.labelUr}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tracking info if dispatched */}
        {order.tracking_number && (
          <div className="bg-brand-navy-50 p-3.5 rounded-xl border border-brand-gold/30 flex items-center justify-between text-xs mt-3">
            <div>
              <span className="text-gray-500 block">کوریئر سروس:</span>
              <strong className="text-brand-navy-950">{order.courier_name || 'TCS Express'}</strong>
            </div>
            <div>
              <span className="text-gray-500 block">ٹریکنگ نمبر:</span>
              <strong className="font-mono text-brand-gold-700">{order.tracking_number}</strong>
            </div>
          </div>
        )}
      </div>

      {/* Formal Invoice Document Container (Printable) */}
      <div className="invoice-container bg-white p-8 sm:p-12 rounded-2xl border-2 border-brand-gold/30 shadow-card space-y-8">
        {/* Invoice Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b-2 border-brand-gold/30 pb-6">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="relative w-16 h-16 bg-brand-navy-950 rounded-full p-2 border border-brand-gold flex items-center justify-center">
              <Image src="/logo.png" alt="الخلیل پبلشرز" width={48} height={48} className="object-contain" />
            </div>
            <div>
              <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">الخلیل پبلشرز</h1>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-sans">
                Al Khalil Publishers — Islamic Bookstore
              </span>
              <p className="text-xs text-gray-500 mt-0.5">{settings.general.address}</p>
            </div>
          </div>

          <div className="text-center sm:text-left space-y-1 text-xs" dir="ltr">
            <span className="text-sm font-bold text-brand-navy-950 block">OFFICIAL INVOICE</span>
            <div className="font-mono text-base font-bold text-brand-gold-700">
              #{order.order_number}
            </div>
            <div className="text-gray-500">
              Date: {new Date(order.created_at).toLocaleDateString('en-GB')}
            </div>
          </div>
        </div>

        {/* Customer & Order Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs bg-gray-50 p-5 rounded-xl border border-gray-200">
          <div>
            <h3 className="font-bold text-brand-navy-950 mb-2 border-b pb-1">
              خریدار کے کوائف (Customer Information):
            </h3>
            <p><strong>نام:</strong> {order.customer_name}</p>
            <p><strong>رابطہ نمبر:</strong> <span dir="ltr">{order.customer_phone}</span></p>
            <p><strong>واٹس ایپ:</strong> <span dir="ltr">{order.customer_whatsapp || order.customer_phone}</span></p>
            <p><strong>ترسیلی پتہ:</strong> {order.delivery_address}</p>
            <p><strong>شہر / صوبہ:</strong> {order.city}، {order.province}</p>
          </div>

          <div>
            <h3 className="font-bold text-brand-navy-950 mb-2 border-b pb-1">
              آرڈر تفصیلات (Order Details):
            </h3>
            <p><strong>طریقہ ادائیگی:</strong> {methodInfo?.ur || order.payment_method}</p>
            <p><strong>حیثیت ادائیگی:</strong> <span className={`px-2 py-0.5 rounded ${paymentInfo.color}`}>{paymentInfo.ur}</span></p>
            <p><strong>حیثیت آرڈر:</strong> <span className={`px-2 py-0.5 rounded ${statusInfo.color}`}>{statusInfo.ur}</span></p>
            <p><strong>کل وزن:</strong> {order.total_weight_grams} گرام</p>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-brand-navy-950 text-brand-gold border-b-2 border-brand-gold">
                <th className="py-3 px-3">شمار</th>
                <th className="py-3 px-3">نام کتاب مع ایڈیشن</th>
                <th className="py-3 px-3">ناشر</th>
                <th className="py-3 px-3 text-center">تعداد</th>
                <th className="py-3 px-3 text-left">قیمت فی کتاب</th>
                <th className="py-3 px-3 text-left">رعایت</th>
                <th className="py-3 px-3 text-left">میزان (Line Total)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {(order.items || []).map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-3 px-3 text-gray-500">{index + 1}</td>
                  <td className="py-3 px-3">
                    <span className="font-nastaliq text-sm font-bold text-brand-navy-950 block">
                      {item.book_title_ur}
                    </span>
                    <span className="text-[10px] text-gray-500">{item.edition_name}</span>
                  </td>
                  <td className="py-3 px-3 text-gray-600">{item.publisher_name_ur}</td>
                  <td className="py-3 px-3 text-center font-bold">{item.quantity}</td>
                  <td className="py-3 px-3 text-left">روپے {item.unit_regular_price.toLocaleString()}</td>
                  <td className="py-3 px-3 text-left text-emerald-700">
                    {item.unit_discount > 0 ? `روپے ${item.unit_discount.toLocaleString()}` : '—'}
                  </td>
                  <td className="py-3 px-3 text-left font-bold text-brand-navy-950">
                    روپے {item.line_total.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Financial Summary */}
        <div className="flex justify-end pt-4 border-t-2 border-gray-200">
          <div className="w-full sm:w-72 space-y-2 text-xs">
            <div className="flex justify-between text-gray-600">
              <span>اصل قیمت کتب:</span>
              <span>روپے {order.subtotal.toLocaleString()}</span>
            </div>

            {order.book_discounts > 0 && (
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>کتب پر رعایت:</span>
                <span>- روپے {order.book_discounts.toLocaleString()}</span>
              </div>
            )}

            {order.promo_discount > 0 && (
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>پرومو رعایت:</span>
                <span>- روپے {order.promo_discount.toLocaleString()}</span>
              </div>
            )}

            <div className="flex justify-between text-gray-600">
              <span>شپنگ چارجز ({order.city}):</span>
              <span>روپے {order.shipping_charge.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-base font-extrabold text-brand-navy-950 border-t-2 border-brand-gold/40 pt-2">
              <span>کل واجب الاداء رقم:</span>
              <span className="text-brand-gold-700">
                روپے {order.grand_total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Verification / Proof Upload Box (Section 13) */}
        {order.payment_status === 'unpaid' && (
          <div className="no-print bg-amber-50/70 p-6 rounded-2xl border border-amber-300 space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse text-amber-900 font-bold">
              <CreditCard className="w-5 h-5 ml-1.5" />
              <h3 className="font-nastaliq text-base">ادائیگی اور رسید جمع کرانے کا طریقہ</h3>
            </div>

            <p className="text-xs text-amber-900 leading-relaxed font-nastaliq">
              {settings.payment_instructions.instructions_ur}
            </p>

            <form onSubmit={handleProofSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
              <div>
                <label className="font-semibold text-gray-700 block mb-1">
                  ٹرانزیکشن ریفرنس / رسید نمبر:
                </label>
                <input
                  type="text"
                  placeholder="مثلاً: 2837198273"
                  value={txnRef}
                  onChange={(e) => setTxnRef(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-300 text-xs text-right"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">
                  بھیجنے والے کا نام / اکاؤنٹ کا نام:
                </label>
                <input
                  type="text"
                  placeholder="جس نام سے رقم بھیجی گئی..."
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-300 text-xs text-right"
                  required
                />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="bg-brand-navy-950 hover:bg-brand-navy-900 text-brand-gold font-bold px-6 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center"
                >
                  <Upload className="w-4 h-4 ml-2" />
                  <span>ادائیگی کی رسید / ریفرنس تصدیق کے لیے جمع کرائیں</span>
                </button>
              </div>
            </form>

            {proofSubmitted && (
              <p className="text-xs text-emerald-700 font-semibold mt-2">
                ادائیگی کی معلومات موصول ہو گئی ہیں، عملہ تصدیق کے بعد آرڈر روانہ کرے گا۔
              </p>
            )}
          </div>
        )}

        {/* Invoice Footer note */}
        <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-500 font-nastaliq leading-relaxed">
          الخلیل پبلشرز کے علمی ذخیرے پر اعتماد فرمانے کا بے حد شکریہ۔ کسی بھی استفسار کے لیے ہمارے واٹس ایپ نمبر{' '}
          <span dir="ltr" className="font-mono font-bold text-brand-navy-950">{settings.general.whatsapp_number}</span> پر رابطہ فرمائیں۔
        </div>
      </div>
    </div>
  );
}
