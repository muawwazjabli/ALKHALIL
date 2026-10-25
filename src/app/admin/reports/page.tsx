'use client';

import React, { useState } from 'react';
import {
  BarChart3,
  Download,
  Calendar,
  TrendingUp,
  DollarSign,
  Package,
  Layers,
  Building,
} from 'lucide-react';
import { store } from '@/lib/data/store';

export default function AdminReportsPage() {
  const [timeframe, setTimeframe] = useState<'all' | 'month' | 'week'>('all');

  const orders = store.getOrders();
  const books = store.getBooks();
  const publishers = store.getPublishers();

  // Metrics calculation
  const activeOrders = orders.filter((o) => o.status !== 'cancelled');
  const totalSalesRevenue = activeOrders.reduce((sum, o) => sum + o.grand_total, 0);
  const totalBookDiscounts = activeOrders.reduce((sum, o) => sum + o.book_discounts, 0);
  const totalPromoDiscounts = activeOrders.reduce((sum, o) => sum + o.promo_discount, 0);
  const totalShippingCollected = activeOrders.reduce((sum, o) => sum + o.shipping_charge, 0);

  // Purchase cost & gross margin calculation
  const totalPurchaseCost = activeOrders.reduce((sum, o) => {
    const orderCost = (o.items || []).reduce(
      (iSum, item) => iSum + (item.unit_purchase_cost || 0) * item.quantity,
      0
    );
    return sum + orderCost;
  }, 0);

  const grossProfit = totalSalesRevenue - totalShippingCollected - totalPurchaseCost;
  const grossMarginPercentage =
    totalSalesRevenue > 0 ? Math.round((grossProfit / (totalSalesRevenue - totalShippingCollected)) * 100) : 0;

  // Inventory valuation
  const inventoryValueAtCost = books.reduce((sum, b) => {
    const bookCost = (b.editions || []).reduce(
      (eSum, ed) => eSum + ed.purchase_cost * ed.stock_quantity,
      0
    );
    return sum + bookCost;
  }, 0);

  const inventoryValueAtRetail = books.reduce((sum, b) => {
    const bookRetail = (b.editions || []).reduce(
      (eSum, ed) => eSum + ed.final_price * ed.stock_quantity,
      0
    );
    return sum + bookRetail;
  }, 0);

  // Export CSV
  const handleExportCSV = () => {
    const headers = [
      'Order Number',
      'Date',
      'Customer Name',
      'Phone',
      'City',
      'Subtotal PKR',
      'Book Discounts PKR',
      'Promo Discount PKR',
      'Shipping Charge PKR',
      'Grand Total PKR',
      'Status',
      'Payment Status',
    ];

    const rows = orders.map((o) => [
      o.order_number,
      new Date(o.created_at).toLocaleDateString('en-GB'),
      `"${o.customer_name}"`,
      o.customer_phone,
      `"${o.city}"`,
      o.subtotal,
      o.book_discounts,
      o.promo_discount,
      o.shipping_charge,
      o.grand_total,
      o.status,
      o.payment_status,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,\uFEFF' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `alkhalil_orders_report_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 text-right">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
            مالی و کاروباری رپورٹس (Business & Financial Reports)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            فروخت، مجموعی منافع کا تخمینہ، ترسیلی چارجز اور انوینٹری مالیت
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="bg-brand-navy-950 hover:bg-brand-navy-900 text-brand-gold font-bold px-4 py-2.5 rounded-xl text-xs flex items-center shadow transition-colors"
        >
          <Download className="w-4 h-4 ml-1.5" />
          <span>رپورٹ ڈاؤنلوڈ کریں (Export CSV)</span>
        </button>
      </div>

      {/* Financial Health Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-brand-gold/30 shadow-soft space-y-1">
          <span className="text-xs text-gray-500 font-semibold block">مجموعی فروخت (Total Revenue)</span>
          <div className="text-2xl font-extrabold text-brand-navy-950">
            روپے {totalSalesRevenue.toLocaleString()}
          </div>
          <span className="text-[11px] text-emerald-600 block">منسوخ شدہ آرڈرز کے علاوہ</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-brand-gold/30 shadow-soft space-y-1">
          <span className="text-xs text-gray-500 font-semibold block">لاگتِ کتب (Purchase Cost)</span>
          <div className="text-2xl font-extrabold text-gray-800">
            روپے {totalPurchaseCost.toLocaleString()}
          </div>
          <span className="text-[11px] text-gray-400 block">فروخت شدہ کتب کی اصل لاگت</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-brand-gold/30 shadow-soft space-y-1">
          <span className="text-xs text-gray-500 font-semibold block">مجموعی منافع مارجن (Gross Profit)</span>
          <div className="text-2xl font-extrabold text-emerald-700">
            روپے {grossProfit.toLocaleString()}
          </div>
          <span className="text-[11px] text-emerald-600 font-bold block font-mono">
            {grossMarginPercentage}% مارجن
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-brand-gold/30 shadow-soft space-y-1">
          <span className="text-xs text-gray-500 font-semibold block">مجموعی رعایتیں (Discounts Given)</span>
          <div className="text-2xl font-extrabold text-rose-700">
            روپے {(totalBookDiscounts + totalPromoDiscounts).toLocaleString()}
          </div>
          <span className="text-[11px] text-gray-400 block">
            کتب: {totalBookDiscounts.toLocaleString()} | پرومو: {totalPromoDiscounts.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Inventory Valuation Card */}
      <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4">
        <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950 border-b pb-2">
          موجودہ گودام انوینٹری کی مالیت (Inventory Valuation)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
          <div className="bg-gray-50 p-4 rounded-xl border space-y-1">
            <span className="text-gray-500 font-semibold block">لاگت کے اعتبار سے کل اسٹاک مالیت (At Purchase Cost):</span>
            <div className="text-2xl font-bold font-mono text-brand-navy-950">
              روپے {inventoryValueAtCost.toLocaleString()}
            </div>
            <p className="text-[11px] text-gray-400">گودام میں موجود تمام کتب کی خریداری لاگت</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl border space-y-1">
            <span className="text-gray-500 font-semibold block">فروخت کی متوقع مالیت (At Retail Value):</span>
            <div className="text-2xl font-bold font-mono text-brand-gold-700">
              روپے {inventoryValueAtRetail.toLocaleString()}
            </div>
            <p className="text-[11px] text-gray-400">تمام موجودہ اسٹاک کی رعایتی فروخت قیمت</p>
          </div>
        </div>
      </div>

      {/* Publisher-wise Sales Breakdown */}
      <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4">
        <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950 border-b pb-2">
          اشاعتی اداروں کی فروخت کا تناسب (Publisher Sales Share)
        </h3>

        <div className="space-y-3">
          {publishers.map((pub) => {
            const pubSales = activeOrders.reduce((sum, o) => {
              const pItems = (o.items || []).filter(
                (i) => i.publisher_name_ur.includes(pub.name_ur) || i.publisher_name_ur.includes('الخلیل')
              );
              return sum + pItems.reduce((s, it) => s + it.line_total, 0);
            }, 0);

            const percentage =
              totalSalesRevenue > 0 ? Math.min(100, Math.round((pubSales / totalSalesRevenue) * 100)) : 0;

            return (
              <div key={pub.id} className="space-y-1 text-xs">
                <div className="flex justify-between font-semibold">
                  <span className="font-nastaliq text-sm text-brand-navy-950">{pub.name_ur}</span>
                  <span className="font-mono text-brand-navy-950">
                    روپے {pubSales.toLocaleString()} ({percentage}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-gold rounded-full" style={{ width: `${percentage}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
