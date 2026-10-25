'use client';

import React, { useState } from 'react';
import { TicketPercent, Plus, Edit3, Trash2, X, CheckCircle2 } from 'lucide-react';
import { store } from '@/lib/data/store';
import { PromoCode, DiscountType } from '@/types';

export default function AdminPromoCodesPage() {
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>(store.getPromoCodes());
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [discountType, setDiscountType] = useState<DiscountType>('percentage');
  const [discountValue, setDiscountValue] = useState(10);
  const [minOrder, setMinOrder] = useState<number | undefined>(1500);
  const [maxDiscount, setMaxDiscount] = useState<number | undefined>(500);
  const [usageLimit, setUsageLimit] = useState<number | undefined>(100);

  const handleOpenAdd = () => {
    setEditingId(null);
    setCode('');
    setDescription('');
    setDiscountType('percentage');
    setDiscountValue(10);
    setMinOrder(1500);
    setMaxDiscount(500);
    setUsageLimit(100);
    setShowModal(true);
  };

  const handleOpenEdit = (p: PromoCode) => {
    setEditingId(p.id);
    setCode(p.code);
    setDescription(p.description || '');
    setDiscountType(p.discount_type);
    setDiscountValue(p.discount_value);
    setMinOrder(p.min_order_amount);
    setMaxDiscount(p.max_discount_amount);
    setUsageLimit(p.usage_limit || undefined);
    setShowModal(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    const newPromo: PromoCode = {
      id: editingId || `promo-${Date.now()}`,
      code: code.trim().toUpperCase(),
      description: description.trim(),
      discount_type: discountType,
      discount_value: Number(discountValue),
      min_order_amount: minOrder ? Number(minOrder) : 0,
      max_discount_amount: maxDiscount ? Number(maxDiscount) : undefined,
      usage_limit: usageLimit ? Number(usageLimit) : undefined,
      times_used: editingId ? promoCodes.find((p) => p.id === editingId)?.times_used || 0 : 0,
      start_date: new Date().toISOString(),
      is_active: true,
    };

    let updated = [...promoCodes];
    if (editingId) {
      updated = updated.map((p) => (p.id === editingId ? newPromo : p));
    } else {
      updated.unshift(newPromo);
    }

    setPromoCodes(updated);
    setShowModal(false);
  };

  const handleToggleActive = (id: string) => {
    const updated = promoCodes.map((p) => (p.id === id ? { ...p, is_active: !p.is_active } : p));
    setPromoCodes(updated);
  };

  return (
    <div className="space-y-6 text-right">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
            پرومو کوڈز و رعایت کا انتظام (Promo Codes Engine)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            کوپن کوڈز، فیصدی و فکسڈ رعایت، کم از کم خریداری اور زیادہ سے زیادہ رعایت کی حد
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center shadow"
        >
          <Plus className="w-4 h-4 ml-1" />
          <span>نیا پرومو کوڈ بنائیں (Create Promo)</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-brand-gold/30 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-brand-navy-950 text-brand-gold border-b-2 border-brand-gold">
                <th className="py-3 px-4">کوڈ (Promo Code)</th>
                <th className="py-3 px-4">تفصیل</th>
                <th className="py-3 px-4">رعایت کی مقدار</th>
                <th className="py-3 px-4">کم از کم خریداری (Min Spend)</th>
                <th className="py-3 px-4">زیادہ سے زیادہ رعایت</th>
                <th className="py-3 px-4">استعمال کی تعداد</th>
                <th className="py-3 px-4">حیثیت</th>
                <th className="py-3 px-4 text-center">ایکشن</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {promoCodes.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono font-extrabold text-sm text-brand-navy-950">
                    {p.code}
                  </td>
                  <td className="py-3 px-4 font-nastaliq text-xs text-gray-700">{p.description || '—'}</td>
                  <td className="py-3 px-4 font-bold text-emerald-700 font-mono">
                    {p.discount_type === 'percentage' ? `${p.discount_value}%` : `روپے ${p.discount_value}`}
                  </td>
                  <td className="py-3 px-4 font-mono text-gray-600">
                    روپے {p.min_order_amount?.toLocaleString() || '0'}
                  </td>
                  <td className="py-3 px-4 font-mono text-gray-600">
                    {p.max_discount_amount ? `روپے ${p.max_discount_amount.toLocaleString()}` : 'لامحدود'}
                  </td>
                  <td className="py-3 px-4 font-mono">
                    {p.times_used} / {p.usage_limit || '∞'}
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleToggleActive(p.id)}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        p.is_active ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {p.is_active ? 'فعال' : 'غیر فعال'}
                    </button>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleOpenEdit(p)}
                      className="p-1.5 text-gray-600 hover:text-brand-navy-950"
                      title="ترمیم"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
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
                {editingId ? 'پرومو کوڈ میں ترمیم' : 'نیا پرومو کوڈ بنائیں'}
              </h4>
              <button onClick={() => setShowModal(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold block mb-1">کوپن کوڈ (حروفِ تہجی و اعداد):</label>
                <input
                  type="text"
                  required
                  placeholder="BISMILLAH10"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  className="w-full p-2 border rounded-lg uppercase font-mono font-bold text-right"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">تفصیل:</label>
                <input
                  type="text"
                  placeholder="خصوصی تعارفی رعایت..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border rounded-lg text-right"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold block mb-1">رعایت کی قسم:</label>
                  <select
                    value={discountType}
                    onChange={(e: any) => setDiscountType(e.target.value)}
                    className="w-full p-2 border rounded-lg bg-white"
                  >
                    <option value="percentage">فیصد (Percentage %)</option>
                    <option value="fixed">مقررہ رقم (Fixed PKR)</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold block mb-1">مقدار (Value):</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={discountValue}
                    onChange={(e) => setDiscountValue(Number(e.target.value))}
                    className="w-full p-2 border rounded-lg text-right font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold block mb-1">کم از کم خریداری (PKR):</label>
                  <input
                    type="number"
                    value={minOrder || ''}
                    onChange={(e) => setMinOrder(e.target.value ? Number(e.target.value) : undefined)}
                    className="w-full p-2 border rounded-lg text-right font-mono"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">زیادہ سے زیادہ رعایت (PKR):</label>
                  <input
                    type="number"
                    value={maxDiscount || ''}
                    onChange={(e) => setMaxDiscount(e.target.value ? Number(e.target.value) : undefined)}
                    className="w-full p-2 border rounded-lg text-right font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">کل استعمال کی حد (Total Usage Cap):</label>
                <input
                  type="number"
                  value={usageLimit || ''}
                  onChange={(e) => setUsageLimit(e.target.value ? Number(e.target.value) : undefined)}
                  className="w-full p-2 border rounded-lg text-right font-mono"
                />
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
                  کوڈ محفوظ کریں
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
