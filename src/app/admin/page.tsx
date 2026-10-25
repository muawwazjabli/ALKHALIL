'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  ShoppingCart,
  Clock,
  CheckCircle2,
  Package,
  Truck,
  XCircle,
  AlertTriangle,
  BookOpen,
  DollarSign,
  ArrowRight,
  Eye,
  Plus,
} from 'lucide-react';
import { store } from '@/lib/data/store';
import { ORDER_STATUS_DETAILS, PAYMENT_STATUS_DETAILS } from '@/lib/constants';

export default function AdminDashboardPage() {
  const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'week' | 'month'>('all');

  const orders = store.getOrders();
  const books = store.getBooks();

  // Calculate Editions & Stock Health
  const allEditions = books.flatMap((b) => b.editions || []);
  const lowStockEditions = allEditions.filter(
    (e) => e.stock_quantity > 0 && e.stock_quantity <= e.low_stock_threshold
  );
  const outOfStockEditions = allEditions.filter((e) => e.stock_quantity <= 0);

  // Filter orders by date
  const now = new Date();
  const filteredOrders = orders.filter((o) => {
    if (dateFilter === 'all') return true;
    const orderDate = new Date(o.created_at);
    if (dateFilter === 'today') {
      return orderDate.toDateString() === now.toDateString();
    }
    if (dateFilter === 'week') {
      const weekAgo = new Date(now.getTime() - 7 * 86400000);
      return orderDate >= weekAgo;
    }
    if (dateFilter === 'month') {
      const monthAgo = new Date(now.getTime() - 30 * 86400000);
      return orderDate >= monthAgo;
    }
    return true;
  });

  // Financial metrics
  const totalSalesRevenue = filteredOrders
    .filter((o) => o.status !== 'cancelled')
    .reduce((sum, o) => sum + o.grand_total, 0);

  const totalShippingCollected = filteredOrders
    .filter((o) => o.status !== 'cancelled')
    .reduce((sum, o) => sum + o.shipping_charge, 0);

  const totalDiscountsGiven = filteredOrders
    .filter((o) => o.status !== 'cancelled')
    .reduce((sum, o) => sum + o.book_discounts + o.promo_discount, 0);

  // Status counts
  const countAwaitingPayment = filteredOrders.filter((o) => o.status === 'awaiting_payment').length;
  const countPaid = filteredOrders.filter((o) => o.payment_status === 'paid').length;
  const countPacking = filteredOrders.filter((o) => o.status === 'packing').length;
  const countShipped = filteredOrders.filter((o) => o.status === 'shipped').length;
  const countDelivered = filteredOrders.filter((o) => o.status === 'delivered').length;
  const countCancelled = filteredOrders.filter((o) => o.status === 'cancelled').length;

  return (
    <div className="space-y-8 text-right">
      {/* Top Banner & Quick Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5">
        <div>
          <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
            کاروباری جائزہ و ڈیش بورڈ (Business Overview)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            الخلیل پبلشرز کے روزانہ آرڈرز، فروخت، آمدن اور انوینٹری کی کارکردگی
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Date Filter */}
          <select
            value={dateFilter}
            onChange={(e: any) => setDateFilter(e.target.value)}
            className="bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs font-medium focus:outline-none focus:border-brand-gold text-right"
          >
            <option value="all">تمام ریکارڈز (All Time)</option>
            <option value="today">آج کے ریکارڈز (Today)</option>
            <option value="week">گزشتہ 7 ایام (Past 7 Days)</option>
            <option value="month">اس ماہ (This Month)</option>
          </select>

          <Link
            href="/admin/books/new"
            className="bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center shadow transition-colors"
          >
            <Plus className="w-4 h-4 ml-1" />
            <span>نئی کتاب شامل کریں</span>
          </Link>
        </div>
      </div>

      {/* Primary KPI Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Sales */}
        <div className="bg-white p-5 rounded-2xl border border-brand-gold/30 shadow-soft space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
            <span>کل آمدنی (Gross Revenue)</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-brand-navy-950">
            روپے {totalSalesRevenue.toLocaleString()}
          </div>
          <p className="text-[11px] text-gray-400">
            منسوخ شدہ آرڈرز کے علاوہ کل وصول شدہ
          </p>
        </div>

        {/* Total Orders */}
        <div className="bg-white p-5 rounded-2xl border border-brand-gold/30 shadow-soft space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
            <span>کل موصولہ آرڈرز (Total Orders)</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShoppingCart className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-brand-navy-950">
            {filteredOrders.length}
          </div>
          <p className="text-[11px] text-gray-400">
            {countAwaitingPayment} آرڈرز منتظر ادائیگی ہیں
          </p>
        </div>

        {/* Total Books & Editions */}
        <div className="bg-white p-5 rounded-2xl border border-brand-gold/30 shadow-soft space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
            <span>کتب و ایڈیشنز (Catalog Titles)</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-brand-navy-950">
            {books.length} کتب <span className="text-xs font-normal text-gray-500">({allEditions.length} ایڈیشنز)</span>
          </div>
          <p className="text-[11px] text-gray-400">
            شائع شدہ مستند اسلامی ذخیرہ
          </p>
        </div>

        {/* Shipping Revenue */}
        <div className="bg-white p-5 rounded-2xl border border-brand-gold/30 shadow-soft space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
            <span>شپنگ چارجز (Shipping Collected)</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Truck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-brand-navy-950">
            روپے {totalShippingCollected.toLocaleString()}
          </div>
          <p className="text-[11px] text-gray-400">
            رعایت دی گئی: روپے {totalDiscountsGiven.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Order Status Funnel Pipeline */}
      <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-soft space-y-4">
        <h2 className="font-nastaliq text-lg font-bold text-brand-navy-950 border-b pb-3">
          آرڈر فلو اور ترسیلی کیفیت (Fulfillment Pipeline)
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl">
            <span className="text-[11px] text-amber-800 font-semibold block">منتظرِ ادائیگی</span>
            <span className="text-2xl font-bold text-amber-900 mt-1 block">{countAwaitingPayment}</span>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
            <span className="text-[11px] text-emerald-800 font-semibold block">تصدیق شدہ ادائیگی</span>
            <span className="text-2xl font-bold text-emerald-900 mt-1 block">{countPaid}</span>
          </div>

          <div className="bg-purple-50 border border-purple-200 p-3 rounded-xl">
            <span className="text-[11px] text-purple-800 font-semibold block">پیکنگ جاری ہے</span>
            <span className="text-2xl font-bold text-purple-900 mt-1 block">{countPacking}</span>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 p-3 rounded-xl">
            <span className="text-[11px] text-cyan-800 font-semibold block">روانہ شدہ (کوریئر)</span>
            <span className="text-2xl font-bold text-cyan-900 mt-1 block">{countShipped}</span>
          </div>

          <div className="bg-green-50 border border-green-200 p-3 rounded-xl">
            <span className="text-[11px] text-green-800 font-semibold block">پہنچ گیا (مکمل)</span>
            <span className="text-2xl font-bold text-green-900 mt-1 block">{countDelivered}</span>
          </div>

          <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl">
            <span className="text-[11px] text-rose-800 font-semibold block">منسوخ شدہ</span>
            <span className="text-2xl font-bold text-rose-900 mt-1 block">{countCancelled}</span>
          </div>
        </div>
      </div>

      {/* Inventory Alerts (Section 6 Requirement) */}
      {(lowStockEditions.length > 0 || outOfStockEditions.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Low Stock Alert */}
          {lowStockEditions.length > 0 && (
            <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-300 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 space-x-reverse text-amber-900 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4 ml-1.5 text-amber-600" />
                  <span>کم اسٹاک کی کتب ({lowStockEditions.length})</span>
                </div>
                <Link href="/admin/inventory" className="text-[11px] text-amber-800 underline font-semibold">
                  انوینٹری دیکھیں →
                </Link>
              </div>

              <div className="space-y-2">
                {lowStockEditions.slice(0, 3).map((ed) => (
                  <div key={ed.id} className="bg-white p-2.5 rounded-lg border border-amber-200 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-nastaliq font-bold text-brand-navy-950 block">{ed.edition_name}</span>
                      <span className="text-[10px] text-gray-500">{ed.publisher?.name_ur || 'الخلیل پبلشرز'}</span>
                    </div>
                    <span className="text-amber-700 font-bold bg-amber-100 px-2 py-0.5 rounded">
                      باقی: {ed.stock_quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Out of Stock Alert */}
          {outOfStockEditions.length > 0 && (
            <div className="bg-rose-50/70 p-5 rounded-2xl border border-rose-300 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 space-x-reverse text-rose-900 font-bold text-xs">
                  <XCircle className="w-4 h-4 ml-1.5 text-rose-600" />
                  <span>اسٹاک ختم شدہ کتب ({outOfStockEditions.length})</span>
                </div>
                <Link href="/admin/inventory" className="text-[11px] text-rose-800 underline font-semibold">
                  اسٹاک شامل کریں →
                </Link>
              </div>

              <div className="space-y-2">
                {outOfStockEditions.slice(0, 3).map((ed) => (
                  <div key={ed.id} className="bg-white p-2.5 rounded-lg border border-rose-200 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-nastaliq font-bold text-brand-navy-950 block">{ed.edition_name}</span>
                      <span className="text-[10px] text-gray-500">{ed.publisher?.name_ur || 'الخلیل پبلشرز'}</span>
                    </div>
                    <span className="text-rose-700 font-bold bg-rose-100 px-2 py-0.5 rounded">
                      ختم (0)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Recent Orders Table */}
      <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4">
        <div className="flex items-center justify-between border-b pb-3">
          <h2 className="font-nastaliq text-xl font-bold text-brand-navy-950">
            حالیہ آرڈرز کی فہرست (Recent Orders)
          </h2>
          <Link
            href="/admin/orders"
            className="text-xs text-brand-gold-700 hover:text-brand-gold-800 font-semibold"
          >
            تمام آرڈرز کا انتظام کریں →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-gray-50 text-gray-700 border-b">
                <th className="py-2.5 px-3">آرڈر نمبر</th>
                <th className="py-2.5 px-3">گاہک کا نام</th>
                <th className="py-2.5 px-3">شہر / صوبہ</th>
                <th className="py-2.5 px-3">کتب کی تعداد</th>
                <th className="py-2.5 px-3">رقم (PKR)</th>
                <th className="py-2.5 px-3">حیثیت آرڈر</th>
                <th className="py-2.5 px-3">حیثیت ادائیگی</th>
                <th className="py-2.5 px-3 text-center">ایکشن</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.slice(0, 5).map((ord) => {
                const sInfo = ORDER_STATUS_DETAILS[ord.status];
                const pInfo = PAYMENT_STATUS_DETAILS[ord.payment_status];

                return (
                  <tr key={ord.id} className="hover:bg-gray-50/70">
                    <td className="py-3 px-3 font-mono font-bold text-brand-navy-950">
                      #{ord.order_number}
                    </td>
                    <td className="py-3 px-3 font-semibold text-brand-navy-950">
                      {ord.customer_name}
                    </td>
                    <td className="py-3 px-3 text-gray-500">
                      {ord.city} ({ord.province})
                    </td>
                    <td className="py-3 px-3 text-gray-700">
                      {ord.items?.length || 1} کتب
                    </td>
                    <td className="py-3 px-3 font-bold text-brand-gold-700">
                      روپے {ord.grand_total.toLocaleString()}
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${sInfo.color}`}>
                        {sInfo.ur}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${pInfo.color}`}>
                        {pInfo.ur}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <Link
                        href={`/admin/orders/${ord.id}`}
                        className="inline-flex items-center bg-brand-navy-950 hover:bg-brand-navy-900 text-brand-gold font-bold px-3 py-1 rounded text-xs"
                      >
                        <Eye className="w-3.5 h-3.5 ml-1" />
                        <span>تفصیل</span>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
