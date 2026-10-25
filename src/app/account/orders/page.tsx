'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Package, Search, ArrowRight, Eye, Calendar, MapPin, Truck } from 'lucide-react';
import { store } from '@/lib/data/store';
import { useAuth } from '@/context/AuthContext';
import { ORDER_STATUS_DETAILS, PAYMENT_STATUS_DETAILS } from '@/lib/constants';

export default function OrderHistoryPage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const allOrders = store.getOrders().filter(
    (o) => !user || o.user_id === user.id || o.user_id === 'cust-demo-1'
  );

  const filteredOrders = allOrders.filter(
    (o) =>
      o.order_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.customer_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6 text-right">
      <div className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500">
        <Link href="/account" className="hover:text-brand-gold">میرا اکاؤنٹ</Link>
        <span>/</span>
        <span className="text-brand-navy-950 font-bold">آرڈرز کی تاریخ و ترسیل</span>
      </div>

      <div className="border-b border-brand-gold/30 pb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
            میرے تمام آرڈرز (Order History & Tracking)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            اپنے تمام سابقہ و موجودہ آرڈرز کی ترسیلی کیفیت اور رسیدیں ملاحظہ فرمائیں
          </p>
        </div>

        {/* Search */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="آرڈر نمبر تلاش کریں..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 pr-9 pl-3 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-brand-gold text-right"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
        </div>
      </div>

      {filteredOrders.length > 0 ? (
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const statusInfo = ORDER_STATUS_DETAILS[order.status];
            const paymentInfo = PAYMENT_STATUS_DETAILS[order.payment_status];

            return (
              <div
                key={order.id}
                className="bg-white p-5 rounded-2xl border border-brand-gold/30 shadow-soft hover:shadow-card transition-all space-y-4"
              >
                {/* Order Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-3 text-xs">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <span className="font-mono font-bold text-sm text-brand-navy-950">
                      #{order.order_number}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">
                      {new Date(order.created_at).toLocaleDateString('ur-PK')}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className={`px-2.5 py-0.5 rounded-full font-medium border text-[11px] ${statusInfo.color}`}>
                      {statusInfo.ur}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${paymentInfo.color}`}>
                      {paymentInfo.ur}
                    </span>
                  </div>
                </div>

                {/* Items & Shipping summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="md:col-span-2 space-y-1">
                    <span className="text-gray-400 font-medium block">شامل کتب:</span>
                    <div className="space-y-1">
                      {(order.items || []).map((item) => (
                        <div key={item.id} className="text-brand-navy-950 font-nastaliq">
                          • {item.book_title_ur} ({item.edition_name}) × {item.quantity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1 md:text-left">
                    <span className="text-gray-400 font-medium block">کل رقم (Total Amount):</span>
                    <span className="text-lg font-bold text-brand-gold-700 block">
                      روپے {order.grand_total.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-gray-500 block">
                      منزل: {order.city} ({order.province})
                    </span>
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  {order.tracking_number ? (
                    <span className="text-[11px] text-brand-navy-900 font-medium flex items-center">
                      <Truck className="w-3.5 h-3.5 ml-1 text-brand-gold" />
                      ٹریکنگ: <strong className="font-mono mr-1">{order.tracking_number}</strong>
                    </span>
                  ) : (
                    <span className="text-[11px] text-gray-400">
                      کوریئر ترسیل کی تیاری جاری ہے
                    </span>
                  )}

                  <Link
                    href={`/orders/${order.id}`}
                    className="inline-flex items-center bg-brand-navy-950 hover:bg-brand-navy-900 text-brand-gold font-bold px-4 py-1.5 rounded-lg text-xs transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 ml-1" />
                    <span>رسید و مکمل ٹریکنگ دیکھیں</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-2xl border border-dashed border-gray-300 text-center space-y-3">
          <Package className="w-12 h-12 text-gray-400 mx-auto" />
          <h3 className="font-nastaliq text-xl font-bold text-brand-navy-950">کوئی آرڈر نہیں ملا</h3>
          <p className="text-xs text-gray-500">آپ کا کوئی آرڈر موجود نہیں ہے۔</p>
          <Link
            href="/books"
            className="inline-block mt-2 bg-brand-navy-950 text-brand-gold px-5 py-2 rounded-xl text-xs font-bold"
          >
            کتب ملاحظہ فرمائیں
          </Link>
        </div>
      )}
    </div>
  );
}
