'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowRight,
  Printer,
  Truck,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  Clock,
  History,
  FileCheck,
  Send,
  Building2,
  XCircle,
} from 'lucide-react';
import { store } from '@/lib/data/store';
import { useAuth } from '@/context/AuthContext';
import {
  ORDER_STATUS_DETAILS,
  PAYMENT_STATUS_DETAILS,
  PAYMENT_METHOD_DETAILS,
} from '@/lib/constants';
import { OrderStatus, PaymentStatus } from '@/types';

export default function AdminOrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params?.id as string;
  const { user } = useAuth();

  const [order, setOrder] = useState(store.getOrderById(orderId));

  // Status transition state
  const [newStatus, setNewStatus] = useState<OrderStatus>(order?.status || 'awaiting_payment');
  const [transitionNotes, setTransitionNotes] = useState('');
  const [courierName, setCourierName] = useState(order?.courier_name || 'TCS Express');
  const [trackingNumber, setTrackingNumber] = useState(order?.tracking_number || '');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!order) {
    return (
      <div className="bg-white p-12 rounded-2xl text-center space-y-4">
        <h2 className="font-nastaliq text-xl font-bold text-brand-navy-950">آرڈر نہیں ملا</h2>
        <Link href="/admin/orders" className="text-xs text-brand-gold font-bold underline">
          آرڈرز کی فہرست پر جائیں
        </Link>
      </div>
    );
  }

  const statusInfo = ORDER_STATUS_DETAILS[order.status];
  const paymentInfo = PAYMENT_STATUS_DETAILS[order.payment_status];
  const methodInfo = PAYMENT_METHOD_DETAILS[order.payment_method];

  const handleUpdateStatus = (e: React.FormEvent) => {
    e.preventDefault();

    const updated = store.updateOrderStatus({
      orderId: order.id,
      newStatus,
      changedBy: user?.email || 'admin-super-1',
      notes: transitionNotes.trim() || undefined,
      courierName: courierName.trim() || undefined,
      trackingNumber: trackingNumber.trim() || undefined,
    });

    if (updated) {
      setOrder({ ...updated });
      setSuccessMessage('آرڈر کی حیثیت کامیابی سے تبدیل کر دی گئی ہے۔');
      setTransitionNotes('');
      setTimeout(() => setSuccessMessage(null), 3000);
    }
  };

  const handleVerifyPayment = () => {
    if (confirm('کیا آپ تصدیق کرتے ہیں کہ رقم موصول ہو چکی ہے اور آرڈر کو Paid مارک کرنا ہے؟')) {
      const updated = store.updatePaymentStatus(order.id, 'paid', user?.email || 'admin');
      if (updated) {
        setOrder({ ...updated });
        setNewStatus('payment_verified');
        setSuccessMessage('ادائیگی تصدیق شدہ اور محفوظ ہو گئی ہے۔');
        setTimeout(() => setSuccessMessage(null), 3000);
      }
    }
  };

  return (
    <div className="space-y-6 text-right">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        <div>
          <div className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500 mb-1">
            <Link href="/admin/orders" className="hover:text-brand-gold">تمام آرڈرز</Link>
            <span>/</span>
            <span className="text-brand-navy-950 font-bold">آرڈر #{order.order_number}</span>
          </div>
          <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
            تفصیلاتِ آرڈر و اسٹیٹس کنٹرول
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/orders/${order.id}`}
            target="_blank"
            className="bg-gray-100 hover:bg-gray-200 text-brand-navy-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center transition-colors"
          >
            <Printer className="w-4 h-4 ml-1.5" />
            <span>گاہک کی رسید ملاحظہ کریں</span>
          </Link>
        </div>
      </div>

      {successMessage && (
        <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-3.5 rounded-xl text-xs flex items-center">
          <CheckCircle2 className="w-4 h-4 ml-2 text-emerald-600" />
          <span>{successMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Order Content & Customer info (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Customer & Address Details Card */}
          <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4 text-xs">
            <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950 border-b pb-2">
              گاہک و ترسیلی پتہ (Customer & Delivery Information)
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-gray-400 block">نام گاہک:</span>
                <strong className="text-brand-navy-950 text-sm font-semibold">{order.customer_name}</strong>
              </div>
              <div>
                <span className="text-gray-400 block">رابطہ فون:</span>
                <strong className="font-mono text-sm" dir="ltr">{order.customer_phone}</strong>
              </div>
              <div>
                <span className="text-gray-400 block">واٹس ایپ نمبر:</span>
                <strong className="font-mono text-sm" dir="ltr">{order.customer_whatsapp || order.customer_phone}</strong>
              </div>
              <div>
                <span className="text-gray-400 block">شہر و صوبہ:</span>
                <strong className="text-brand-navy-950">{order.city} ({order.province})</strong>
              </div>
              <div className="col-span-2">
                <span className="text-gray-400 block">مکمل ترسیلی پتہ:</span>
                <p className="text-brand-navy-950 font-medium bg-gray-50 p-2.5 rounded-lg border">
                  {order.delivery_address}
                </p>
              </div>
              {order.address_instructions && (
                <div className="col-span-2">
                  <span className="text-gray-400 block">اضافی ہدایات:</span>
                  <p className="text-gray-700 italic">{order.address_instructions}</p>
                </div>
              )}
            </div>
          </div>

          {/* Ordered Books Table */}
          <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4 text-xs">
            <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950 border-b pb-2">
              شامل کتب و ایڈیشنز (Order Items)
            </h3>
            <div className="divide-y divide-gray-100">
              {(order.items || []).map((item) => (
                <div key={item.id} className="py-3 flex items-center justify-between">
                  <div>
                    <h4 className="font-nastaliq font-bold text-sm text-brand-navy-950">{item.book_title_ur}</h4>
                    <span className="text-[11px] text-gray-500">
                      {item.edition_name} • {item.publisher_name_ur}
                    </span>
                    <div className="text-[10px] text-gray-400 mt-0.5">
                      وزن: {item.weight_grams} گرام | لاگت خرید: روپے {item.unit_purchase_cost?.toLocaleString()}
                    </div>
                  </div>

                  <div className="text-left">
                    <span className="font-mono font-bold text-brand-navy-950 block">
                      روپے {item.line_total.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-gray-500">
                      {item.quantity} × روپے {item.unit_final_price.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Financial Breakdown */}
            <div className="border-t pt-4 space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>اصل قیمت:</span>
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
                  <span>پرومو کوڈ رعایت:</span>
                  <span>- روپے {order.promo_discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>شپنگ چارجز ({order.city}):</span>
                <span>روپے {order.shipping_charge.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-brand-navy-950 border-t pt-2">
                <span>کل رقم (Grand Total):</span>
                <span className="text-brand-gold-700">روپے {order.grand_total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Payment Proofs Attached by Customer */}
          {order.payment_proofs && order.payment_proofs.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-3 text-xs">
              <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950 border-b pb-2">
                گاہک کی طرف سے جمع شدہ رسید / ثبوت (Uploaded Payment Proof)
              </h3>
              {order.payment_proofs.map((proof) => (
                <div key={proof.id} className="bg-gray-50 p-3 rounded-xl border flex items-center justify-between">
                  <div>
                    <span className="font-semibold block">ریفرنس نمبر: {proof.transaction_reference || '—'}</span>
                    <span className="text-gray-500 text-[11px]">بھیجنے والے کا نام: {proof.sender_name || '—'}</span>
                    <span className="text-gray-400 text-[10px] block mt-0.5 font-mono">
                      {new Date(proof.uploaded_at).toLocaleString('ur-PK')}
                    </span>
                  </div>
                  <a
                    href={proof.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-navy-950 text-brand-gold px-3 py-1 rounded text-xs font-bold"
                  >
                    رسید دیکھیں
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Workflow Transition Controls (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Payment Verification Box */}
          <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4 text-xs">
            <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950 border-b pb-2">
              ادائیگی کی صورتحال (Payment State)
            </h3>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">طریقہ کار:</span>
              <strong>{methodInfo?.ur || order.payment_method}</strong>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">حیثیت:</span>
              <span className={`px-2.5 py-0.5 rounded text-xs font-bold border ${paymentInfo.color}`}>
                {paymentInfo.ur}
              </span>
            </div>

            {order.payment_status !== 'paid' && (
              <button
                type="button"
                onClick={handleVerifyPayment}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl transition-colors shadow flex items-center justify-center space-x-2 space-x-reverse"
              >
                <CheckCircle2 className="w-4 h-4 ml-1.5" />
                <span>ادائیگی کی تصدیق کریں (Mark as Verified / Paid)</span>
              </button>
            )}
          </div>

          {/* Status Transition Control (Section 12) */}
          <form onSubmit={handleUpdateStatus} className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4 text-xs">
            <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950 border-b pb-2">
              آرڈر اسٹیٹس تبدیل فرمائیں (Status Transition)
            </h3>

            <div>
              <label className="font-semibold block mb-1">مطلوبہ نئی حیثیت (New Status):</label>
              <select
                value={newStatus}
                onChange={(e: any) => setNewStatus(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-gray-300 bg-white font-bold text-brand-navy-950"
              >
                <option value="awaiting_payment">1. منتظرِ ادائیگی (Awaiting Payment)</option>
                <option value="payment_verified">2. ادائیگی تصدیق شدہ (Payment Verified)</option>
                <option value="confirmed">3. تصدیق شدہ (Confirmed)</option>
                <option value="packing">4. پیکنگ جاری ہے (Packing)</option>
                <option value="shipped">5. روانہ کر دیا گیا (Shipped)</option>
                <option value="delivered">6. پہنچ گیا - مکمل (Delivered)</option>
                <option value="cancelled">7. منسوخ شدہ (Cancelled - Restores Stock)</option>
              </select>
            </div>

            {/* Courier & Tracking if Shipped */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <label className="font-semibold block mb-1">کوریئر سروس:</label>
                <input
                  type="text"
                  placeholder="TCS / Leopard"
                  value={courierName}
                  onChange={(e) => setCourierName(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-300 text-right"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">ٹریکنگ نمبر:</label>
                <input
                  type="text"
                  placeholder="TCS-12345678"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-300 font-mono text-right"
                />
              </div>
            </div>

            <div>
              <label className="font-semibold block mb-1">تبدیلی پر نوٹ (Audit Note):</label>
              <textarea
                rows={2}
                placeholder="اس تبدیلی کے متعلق نوٹ درج کریں..."
                value={transitionNotes}
                onChange={(e) => setTransitionNotes(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-300 text-right text-xs"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-bold py-2.5 rounded-xl transition-colors shadow flex items-center justify-center"
            >
              <Send className="w-4 h-4 ml-1.5" />
              <span>حیثیت تبدیل کریں (Update Status)</span>
            </button>
          </form>

          {/* Chronological Status History Audit Log */}
          <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-3 text-xs">
            <h3 className="font-nastaliq text-base font-bold text-brand-navy-950 border-b pb-2 flex items-center">
              <History className="w-4 h-4 ml-1.5 text-brand-gold" />
              <span>تاریخچہ و ٹائم لائن (Status History Audit)</span>
            </h3>

            <div className="space-y-3 pt-1">
              {(order.status_history || []).map((sh) => (
                <div key={sh.id} className="border-r-2 border-brand-gold pr-3 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-brand-navy-950 font-nastaliq">
                      {ORDER_STATUS_DETAILS[sh.new_status]?.ur || sh.new_status}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">
                      {new Date(sh.created_at).toLocaleString('ur-PK')}
                    </span>
                  </div>
                  {sh.notes && <p className="text-gray-600 text-[11px]">{sh.notes}</p>}
                  {sh.changed_by && (
                    <span className="text-[10px] text-gray-400 block font-mono">
                      بذریعہ: {sh.changed_by}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
