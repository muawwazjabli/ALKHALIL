'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Package, MapPin, Phone, Shield, Edit3, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { store } from '@/lib/data/store';
import { PAKISTAN_PROVINCES, MAJOR_CITIES } from '@/lib/constants';

export default function AccountPage() {
  const { user, updateProfile, role, switchRole } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  const [fullName, setFullName] = useState(user?.profile.full_name || '');
  const [phone, setPhone] = useState(user?.profile.phone || '');
  const [whatsapp, setWhatsapp] = useState(user?.profile.whatsapp || '');
  const [province, setProvince] = useState(user?.profile.province || 'Punjab');
  const [city, setCity] = useState(user?.profile.city || 'لاہور');
  const [address, setAddress] = useState(user?.profile.address || '');

  const userOrders = store.getOrders().filter((o) => !user || o.user_id === user.id || o.user_id === 'cust-demo-1');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      full_name: fullName.trim(),
      phone: phone.trim(),
      whatsapp: whatsapp.trim(),
      province,
      city,
      address: address.trim(),
    });
    setIsEditing(false);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  const citiesForProvince = MAJOR_CITIES[province] || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 text-right">
      <div className="border-b border-brand-gold/30 pb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
            میرا اکاؤنٹ و کوائف (My Account)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            اپنی ذاتی معلومات، پتے اور سابقہ آرڈرز کا ریکارڈ ملاحظہ فرمائیں
          </p>
        </div>

        <Link
          href="/account/orders"
          className="flex items-center bg-brand-navy-950 hover:bg-brand-navy-900 text-brand-gold px-4 py-2 rounded-xl text-xs font-bold shadow"
        >
          <Package className="w-4 h-4 ml-1.5" />
          <span>میرے آرڈرز دیکھیں ({userOrders.length})</span>
        </Link>
      </div>

      {savedMessage && (
        <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-3.5 rounded-xl text-xs flex items-center">
          <CheckCircle2 className="w-4 h-4 ml-2 text-emerald-600" />
          <span>آپ کے کوائف کامیابی کے ساتھ محفوظ ہو گئے ہیں۔</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-soft text-center space-y-4">
            <div className="w-20 h-20 bg-brand-navy-950 text-brand-gold rounded-full flex items-center justify-center mx-auto text-2xl font-bold border-2 border-brand-gold">
              {user ? user.profile.full_name[0] : 'ع'}
            </div>

            <div>
              <h3 className="font-nastaliq text-xl font-bold text-brand-navy-950">
                {user?.profile.full_name || 'مہمان گاہک'}
              </h3>
              <p className="text-xs text-gray-400 font-sans">{user?.email}</p>
            </div>

            <div className="pt-2 border-t text-xs text-gray-600 space-y-2 text-right">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">فون نمبر:</span>
                <span dir="ltr">{user?.profile.phone || '—'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">واٹس ایپ:</span>
                <span dir="ltr">{user?.profile.whatsapp || '—'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">شہر / صوبہ:</span>
                <span>{user?.profile.city} ({user?.profile.province})</span>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-brand-navy-950 text-xs font-semibold py-2 rounded-xl transition-colors flex items-center justify-center"
            >
              <Edit3 className="w-3.5 h-3.5 ml-1.5" />
              <span>{isEditing ? 'منسوخ کریں' : 'کوائف تبدیل کریں'}</span>
            </button>
          </div>
        </div>

        {/* Profile Edit Form or Recent Orders (2 Cols) */}
        <div className="md:col-span-2 space-y-6">
          {isEditing ? (
            <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-soft space-y-4">
              <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950 border-b pb-2">
                ذاتی کوائف میں ترمیم فرمائیں
              </h3>
              <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">پورا نام:</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-gray-300 text-right"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-gray-700 block mb-1">فون نمبر:</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-gray-300 text-right"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 block mb-1">واٹس ایپ نمبر:</label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-gray-300 text-right"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-gray-700 block mb-1">صوبہ:</label>
                    <select
                      value={province}
                      onChange={(e) => {
                        const newP = e.target.value;
                        const newC = MAJOR_CITIES[newP] || [];
                        setProvince(newP);
                        setCity(newC[0]?.name_ur || 'لاہور');
                      }}
                      className="w-full p-2.5 rounded-lg border border-gray-300 bg-white"
                    >
                      {PAKISTAN_PROVINCES.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name_ur}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 block mb-1">شہر:</label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-gray-300 bg-white"
                    >
                      {citiesForProvince.map((c) => (
                        <option key={c.name_en} value={c.name_ur}>
                          {c.name_ur}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-gray-700 block mb-1">ترسیلی پتہ:</label>
                  <textarea
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-gray-300 text-right text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-bold px-6 py-2.5 rounded-xl transition-colors shadow"
                >
                  تبدیلیاں محفوظ کریں
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-soft space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950">
                  حالیہ آرڈرز (Recent Orders)
                </h3>
                <Link
                  href="/account/orders"
                  className="text-xs text-brand-gold-700 font-semibold hover:underline flex items-center"
                >
                  <span>تمام آرڈرز ملاحظہ فرمائیں</span>
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                </Link>
              </div>

              {userOrders.length > 0 ? (
                <div className="space-y-3">
                  {userOrders.slice(0, 3).map((ord) => (
                    <div
                      key={ord.id}
                      className="p-4 rounded-xl border border-gray-200 hover:border-brand-gold/40 transition-colors flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-mono font-bold text-brand-navy-950">#{ord.order_number}</div>
                        <div className="text-gray-400 text-[11px] mt-0.5">
                          {new Date(ord.created_at).toLocaleDateString('ur-PK')} • {ord.items?.length || 1} کتب
                        </div>
                      </div>

                      <div className="text-left">
                        <span className="font-bold text-brand-gold-700 block text-sm">
                          روپے {ord.grand_total.toLocaleString()}
                        </span>
                        <Link
                          href={`/orders/${ord.id}`}
                          className="text-[11px] text-brand-navy-900 font-semibold hover:underline"
                        >
                          تفصیلات و رسید →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-400 py-6 text-center font-nastaliq">
                  ابھی تک کوئی آرڈر درج نہیں کیا گیا۔
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
