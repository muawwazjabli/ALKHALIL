'use client';

import React, { useState } from 'react';
import { Truck, Plus, Edit3, Trash2, X, CheckCircle2 } from 'lucide-react';
import { store } from '@/lib/data/store';
import { ShippingRate } from '@/types';
import { PAKISTAN_PROVINCES } from '@/lib/constants';

export default function AdminShippingPage() {
  const [rates, setRates] = useState<ShippingRate[]>(store.getShippingRates());
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [province, setProvince] = useState('Punjab');
  const [city, setCity] = useState('');
  const [shippingMethod, setShippingMethod] = useState('معیاری کوریئر سروس (TCS / Leopard)');
  const [baseCharge, setBaseCharge] = useState(200);
  const [includedWeight, setIncludedWeight] = useState(1000);
  const [extraPerKg, setExtraPerKg] = useState(80);
  const [freeThreshold, setFreeThreshold] = useState<number | undefined>(5000);

  const handleOpenAdd = () => {
    setEditingId(null);
    setCity('');
    setBaseCharge(220);
    setIncludedWeight(1000);
    setExtraPerKg(90);
    setFreeThreshold(5000);
    setShowModal(true);
  };

  const handleOpenEdit = (rate: ShippingRate) => {
    setEditingId(rate.id);
    setCity(rate.city || '');
    setShippingMethod(rate.shipping_method);
    setBaseCharge(rate.base_charge);
    setIncludedWeight(rate.included_weight_grams);
    setExtraPerKg(rate.extra_charge_per_kg);
    setFreeThreshold(rate.free_shipping_threshold);
    setShowModal(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const newRate: ShippingRate = {
      id: editingId || `sr-${Date.now()}`,
      zone_id: `z-${province.toLowerCase()}`,
      city: city.trim() || null,
      shipping_method: shippingMethod.trim(),
      base_charge: Number(baseCharge),
      included_weight_grams: Number(includedWeight),
      extra_charge_per_kg: Number(extraPerKg),
      weight_increment_grams: 1000,
      free_shipping_threshold: freeThreshold ? Number(freeThreshold) : undefined,
      is_active: true,
    };

    let updatedRates = [...rates];
    if (editingId) {
      updatedRates = updatedRates.map((r) => (r.id === editingId ? newRate : r));
    } else {
      updatedRates.unshift(newRate);
    }

    setRates(updatedRates);
    setShowModal(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('کیا آپ اس شپنگ ریٹ کو حذف کرنا چاہتے ہیں؟')) {
      setRates(rates.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="space-y-6 text-right">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
            شپنگ و کوریئر چارجز کا انتظام (Shipping Rules)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            صوبہ اور شہر کے لحاظ سے ابتدائی وزن، چارجز اور اضافی فی کلو ریٹ مقرر فرمائیں
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center shadow"
        >
          <Plus className="w-4 h-4 ml-1" />
          <span>نیا شپنگ ریٹ مقرر کریں (Add Rate)</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-brand-gold/30 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-brand-navy-950 text-brand-gold border-b-2 border-brand-gold">
                <th className="py-3 px-4">شہر / صوبہ</th>
                <th className="py-3 px-4">طریقہ ترسیل</th>
                <th className="py-3 px-4">بنیادی چارجز (Base)</th>
                <th className="py-3 px-4">شامل وزن (Base Wt)</th>
                <th className="py-3 px-4">اضافی چارجز فی کلو</th>
                <th className="py-3 px-4">مفت ترسیل کی حد</th>
                <th className="py-3 px-4 text-center">ایکشن</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rates.map((rate) => (
                <tr key={rate.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-bold text-brand-navy-950">
                    {rate.city ? `${rate.city} (مخصوص شہر)` : 'صوبائی ڈیفالٹ ریٹ'}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{rate.shipping_method}</td>
                  <td className="py-3 px-4 font-bold font-mono text-brand-gold-700">
                    روپے {rate.base_charge.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 font-mono">{rate.included_weight_grams} گرام</td>
                  <td className="py-3 px-4 font-mono text-gray-700">
                    + روپے {rate.extra_charge_per_kg} / کلو
                  </td>
                  <td className="py-3 px-4">
                    {rate.free_shipping_threshold ? (
                      <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-mono font-bold">
                        روپے {rate.free_shipping_threshold.toLocaleString()} پر فری
                      </span>
                    ) : (
                      '—'
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center space-x-2 space-x-reverse">
                      <button
                        onClick={() => handleOpenEdit(rate)}
                        className="p-1.5 text-gray-600 hover:text-brand-navy-950 rounded"
                        title="ترمیم"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(rate.id)}
                        className="p-1.5 text-gray-600 hover:text-rose-600 rounded"
                        title="حذف"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 text-right shadow-2xl border-2 border-brand-gold/40">
            <div className="flex items-center justify-between border-b pb-2">
              <h4 className="font-nastaliq text-lg font-bold text-brand-navy-950">
                {editingId ? 'شپنگ ریٹ میں ترمیم' : 'نیا شپنگ ریٹ درج کریں'}
              </h4>
              <button onClick={() => setShowModal(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold block mb-1">صوبہ:</label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="w-full p-2 border rounded-lg bg-white"
                >
                  {PAKISTAN_PROVINCES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name_ur}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-semibold block mb-1">مخصوص شہر (خالی چھوڑنے پر صوبائی ریٹ لاگو ہوگا):</label>
                <input
                  type="text"
                  placeholder="مثلاً: لاہور / کراچی"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-2 border rounded-lg text-right"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">کوریئر طریقہ کار:</label>
                <input
                  type="text"
                  required
                  value={shippingMethod}
                  onChange={(e) => setShippingMethod(e.target.value)}
                  className="w-full p-2 border rounded-lg text-right"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold block mb-1">بنیادی کرایہ (PKR):</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={baseCharge}
                    onChange={(e) => setBaseCharge(Number(e.target.value))}
                    className="w-full p-2 border rounded-lg text-right font-mono"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">شامل وزن (گرام):</label>
                  <input
                    type="number"
                    min="100"
                    required
                    value={includedWeight}
                    onChange={(e) => setIncludedWeight(Number(e.target.value))}
                    className="w-full p-2 border rounded-lg text-right font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold block mb-1">اضافی فی کلو چارجز (PKR):</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={extraPerKg}
                    onChange={(e) => setExtraPerKg(Number(e.target.value))}
                    className="w-full p-2 border rounded-lg text-right font-mono"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">مفت ترسیل کی حد (PKR):</label>
                  <input
                    type="number"
                    value={freeThreshold || ''}
                    onChange={(e) => setFreeThreshold(e.target.value ? Number(e.target.value) : undefined)}
                    placeholder="مثلاً: 5000"
                    className="w-full p-2 border rounded-lg text-right font-mono"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg text-xs bg-gray-100 text-gray-700"
                >
                  منسوخ
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-xs bg-brand-gold text-brand-navy-950 font-bold"
                >
                  ریٹ محفوظ کریں
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
