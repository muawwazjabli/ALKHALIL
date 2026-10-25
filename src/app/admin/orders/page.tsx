'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Eye, Filter, ShoppingCart, Truck, CheckCircle2 } from 'lucide-react';
import { store } from '@/lib/data/store';
import { ORDER_STATUS_DETAILS, PAYMENT_STATUS_DETAILS } from '@/lib/constants';
import { OrderStatus, PaymentStatus } from '@/types';

export default function AdminOrdersListPage() {
  const [orders, setOrders] = useState(store.getOrders());
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [paymentFilter, setPaymentFilter] = useState<string>('all');

  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.order_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.customer_phone.includes(searchTerm) ||
      o.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' ? true : o.status === statusFilter;
    const matchesPayment = paymentFilter === 'all' ? true : o.payment_status === paymentFilter;

    return matchesSearch && matchesStatus && matchesPayment;
  });

  return (
    <div className="space-y-6 text-right">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
            آرڈرز مینجمنٹ و ترسیلی نگرانی (Orders Management)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            تمام موصولہ آرڈرز، ادائیگی کی تصدیق، پیکنگ اور کوریئر ترسیل کا کنٹرول
          </p>
        </div>

        <div className="text-xs font-semibold text-gray-500">
          کل آرڈرز: <strong className="text-brand-navy-950">{orders.length}</strong>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-brand-gold/30 shadow-soft flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            placeholder="آرڈر نمبر، گاہک، فون یا شہر تلاش کریں..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 pr-9 pl-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold text-right"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>

        <div className="flex items-center gap-3">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-gray-50 border border-gray-300 rounded-lg p-2 focus:outline-none"
          >
            <option value="all">تمام آرڈر کیفیات</option>
            <option value="awaiting_payment">منتظرِ ادائیگی</option>
            <option value="payment_submitted">رسید جمع شدہ</option>
            <option value="payment_verified">ادائیگی تصدیق شدہ</option>
            <option value="confirmed">تصدیق شدہ</option>
            <option value="packing">پیکنگ جاری</option>
            <option value="shipped">روانہ شدہ (کوریئر)</option>
            <option value="delivered">پہنچ گیا (مکمل)</option>
            <option value="cancelled">منسوخ شدہ</option>
          </select>

          {/* Payment Filter */}
          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            className="bg-gray-50 border border-gray-300 rounded-lg p-2 focus:outline-none"
          >
            <option value="all">تمام ادائیگیاں</option>
            <option value="unpaid">غیر ادا شدہ (Unpaid)</option>
            <option value="proof_submitted">رسید جمع شدہ</option>
            <option value="paid">ادا شدہ (Paid)</option>
            <option value="refunded">واپس شدہ</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl border border-brand-gold/30 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-brand-navy-950 text-brand-gold border-b-2 border-brand-gold">
                <th className="py-3 px-4">آرڈر نمبر</th>
                <th className="py-3 px-4">تاریخ</th>
                <th className="py-3 px-4">گاہک کا نام</th>
                <th className="py-3 px-4">رابطہ فون</th>
                <th className="py-3 px-4">شہر</th>
                <th className="py-3 px-4">رقم (PKR)</th>
                <th className="py-3 px-4">حیثیت آرڈر</th>
                <th className="py-3 px-4">ادائیگی</th>
                <th className="py-3 px-4 text-center">ایکشن</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((ord) => {
                  const sInfo = ORDER_STATUS_DETAILS[ord.status];
                  const pInfo = PAYMENT_STATUS_DETAILS[ord.payment_status];

                  return (
                    <tr key={ord.id} className="hover:bg-gray-50/80">
                      <td className="py-3 px-4 font-mono font-bold text-brand-navy-950">
                        #{ord.order_number}
                      </td>
                      <td className="py-3 px-4 text-gray-500 font-mono text-[11px]">
                        {new Date(ord.created_at).toLocaleDateString('ur-PK')}
                      </td>
                      <td className="py-3 px-4 font-semibold text-brand-navy-950">
                        {ord.customer_name}
                      </td>
                      <td className="py-3 px-4 font-mono text-gray-600" dir="ltr">
                        {ord.customer_phone}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {ord.city} ({ord.province})
                      </td>
                      <td className="py-3 px-4 font-bold text-brand-gold-700">
                        روپے {ord.grand_total.toLocaleString()}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${sInfo.color}`}>
                          {sInfo.ur}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${pInfo.color}`}>
                          {pInfo.ur}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Link
                          href={`/admin/orders/${ord.id}`}
                          className="inline-flex items-center bg-brand-navy-950 hover:bg-brand-navy-900 text-brand-gold font-bold px-3 py-1.5 rounded-lg text-xs"
                        >
                          <Eye className="w-3.5 h-3.5 ml-1" />
                          <span>انتظام کریں</span>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-gray-400 font-nastaliq">
                    کوئی آرڈر نہیں ملا۔
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
