'use client';

import React, { useState } from 'react';
import {
  Boxes,
  PlusCircle,
  MinusCircle,
  AlertTriangle,
  History,
  X,
  Search,
  Filter,
} from 'lucide-react';
import { store } from '@/lib/data/store';
import { getEditionStockStatus } from '@/lib/calculations';
import { MovementType, BookEdition } from '@/types';

export default function AdminInventoryPage() {
  const books = store.getBooks();
  const [movements, setMovements] = useState(store.getInventoryMovements());
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'editions' | 'movements'>('editions');

  // Adjustment Modal state
  const [selectedEdition, setSelectedEdition] = useState<{
    bookTitle: string;
    edition: BookEdition;
  } | null>(null);

  const [quantityDelta, setQuantityDelta] = useState(1);
  const [adjustmentAction, setAdjustmentAction] = useState<'add' | 'subtract'>('add');
  const [movementType, setMovementType] = useState<MovementType>('restock');
  const [reason, setReason] = useState('');

  // Collect all editions with book info
  const allEditionsWithBooks = books.flatMap((b) =>
    (b.editions || []).map((ed) => ({
      bookId: b.id,
      bookTitle: b.title_ur,
      edition: ed,
    }))
  );

  const filteredEditions = allEditionsWithBooks.filter(
    (item) =>
      item.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.edition.edition_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.edition.publisher?.name_ur.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenAdjust = (bookTitle: string, edition: BookEdition) => {
    setSelectedEdition({ bookTitle, edition });
    setQuantityDelta(5);
    setAdjustmentAction('add');
    setMovementType('restock');
    setReason('نیا اسٹاک گودام میں موصول ہوا۔');
  };

  const handleSaveAdjustment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEdition) return;

    const delta = adjustmentAction === 'add' ? Math.abs(quantityDelta) : -Math.abs(quantityDelta);

    const res = store.adjustStock({
      editionId: selectedEdition.edition.id,
      quantityDelta: delta,
      movementType,
      reason: reason.trim() || 'دستی ایڈجسٹمنٹ',
      userId: 'admin-super-1',
    });

    if (!res.success) {
      alert(res.error || 'اسٹاک ایڈجسٹمنٹ میں خرابی پیش آئی۔');
      return;
    }

    setMovements(store.getInventoryMovements());
    setSelectedEdition(null);
  };

  return (
    <div className="space-y-6 text-right">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
            انوینٹری و اسٹاک مینجمنٹ (Inventory & Stock)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            کتب کے ہر ایڈیشن کا اسٹاک، کم اسٹاک الرٹس اور نقل و حرکت کا آڈٹ ٹریل
          </p>
        </div>

        {/* Tab switch */}
        <div className="bg-gray-200 p-1 rounded-xl flex text-xs font-semibold">
          <button
            onClick={() => setActiveTab('editions')}
            className={`px-4 py-1.5 rounded-lg transition-colors ${
              activeTab === 'editions' ? 'bg-white text-brand-navy-950 shadow' : 'text-gray-600'
            }`}
          >
            موجودہ اسٹاک ({allEditionsWithBooks.length})
          </button>
          <button
            onClick={() => setActiveTab('movements')}
            className={`px-4 py-1.5 rounded-lg transition-colors ${
              activeTab === 'movements' ? 'bg-white text-brand-navy-950 shadow' : 'text-gray-600'
            }`}
          >
            آڈٹ لاگ ({movements.length})
          </button>
        </div>
      </div>

      {activeTab === 'editions' ? (
        <div className="space-y-4">
          {/* Search bar */}
          <div className="relative max-w-sm">
            <input
              type="text"
              placeholder="ایڈیشن یا کتاب تلاش کریں..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 pr-9 pl-3 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-brand-gold text-right"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          <div className="bg-white rounded-2xl border border-brand-gold/30 shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="bg-brand-navy-950 text-brand-gold border-b-2 border-brand-gold">
                    <th className="py-3 px-4">کتاب کا نام</th>
                    <th className="py-3 px-4">ایڈیشن و ناشر</th>
                    <th className="py-3 px-4">لاگت خرید (PKR)</th>
                    <th className="py-3 px-4">فروخت قیمت (PKR)</th>
                    <th className="py-3 px-4">موجود اسٹاک</th>
                    <th className="py-3 px-4">محفوظ اسٹاک (Orders)</th>
                    <th className="py-3 px-4">کم اسٹاک حد</th>
                    <th className="py-3 px-4">حیثیت</th>
                    <th className="py-3 px-4 text-center">ایڈجسٹمنٹ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredEditions.map(({ bookTitle, edition }) => {
                    const stockInfo = getEditionStockStatus(
                      edition.stock_quantity,
                      edition.low_stock_threshold
                    );

                    return (
                      <tr key={edition.id} className="hover:bg-gray-50/80">
                        <td className="py-3 px-4 font-nastaliq text-base font-bold text-brand-navy-950">
                          {bookTitle}
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-semibold block">{edition.edition_name}</span>
                          <span className="text-[10px] text-gray-500 font-nastaliq">
                            {edition.publisher?.name_ur || 'الخلیل پبلشرز'}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono text-gray-600">
                          روپے {edition.purchase_cost.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-brand-navy-950">
                          روپے {edition.final_price.toLocaleString()}
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-mono font-extrabold text-sm text-brand-navy-950">
                            {edition.stock_quantity}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono text-gray-500">
                          {edition.reserved_quantity || 0}
                        </td>
                        <td className="py-3 px-4 font-mono text-gray-500">
                          {edition.low_stock_threshold}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${stockInfo.colorClass}`}>
                            {stockInfo.labelUr}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => handleOpenAdjust(bookTitle, edition)}
                            className="bg-brand-navy-950 hover:bg-brand-navy-900 text-brand-gold font-bold px-3 py-1.5 rounded-lg text-xs"
                          >
                            تبدیل کریں
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        /* Inventory Movements Audit Log (Section 6) */
        <div className="bg-white rounded-2xl border border-brand-gold/30 shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead>
                <tr className="bg-brand-navy-950 text-brand-gold border-b-2 border-brand-gold">
                  <th className="py-3 px-4">تاریخ و وقت</th>
                  <th className="py-3 px-4">ایڈیشن</th>
                  <th className="py-3 px-4">نوعیت تبدیلی</th>
                  <th className="py-3 px-4">مقدار (Delta)</th>
                  <th className="py-3 px-4">سابقہ اسٹاک</th>
                  <th className="py-3 px-4">نیا اسٹاک</th>
                  <th className="py-3 px-4">وجہ و تفصیل</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {movements.length > 0 ? (
                  movements.map((m) => (
                    <tr key={m.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-500 font-mono text-[11px]">
                        {new Date(m.created_at).toLocaleString('ur-PK')}
                      </td>
                      <td className="py-3 px-4 font-semibold text-brand-navy-950">
                        {m.edition?.edition_name || 'ایڈیشن'}
                      </td>
                      <td className="py-3 px-4">
                        <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[10px] font-mono">
                          {m.movement_type}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold">
                        <span className={m.quantity_delta > 0 ? 'text-emerald-700' : 'text-rose-700'}>
                          {m.quantity_delta > 0 ? `+${m.quantity_delta}` : m.quantity_delta}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-gray-500">{m.previous_stock}</td>
                      <td className="py-3 px-4 font-mono font-bold text-brand-navy-950">{m.new_stock}</td>
                      <td className="py-3 px-4 text-gray-600">{m.reason}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-gray-400">
                      ابھی تک کوئی لاگ ریکارڈ موجود نہیں ہے۔
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Manual Stock Adjustment Modal */}
      {selectedEdition && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 text-right shadow-2xl border-2 border-brand-gold/40">
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <h4 className="font-nastaliq text-lg font-bold text-brand-navy-950">دستی اسٹاک ایڈجسٹمنٹ</h4>
                <p className="text-[11px] text-gray-500">{selectedEdition.bookTitle}</p>
              </div>
              <button onClick={() => setSelectedEdition(null)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSaveAdjustment} className="space-y-4 text-xs">
              <div className="bg-gray-50 p-3 rounded-lg border text-xs">
                <span>موجودہ دستیاب اسٹاک: </span>
                <strong className="font-mono text-brand-navy-950">
                  {selectedEdition.edition.stock_quantity} نسخے
                </strong>
              </div>

              <div>
                <label className="font-semibold block mb-1">عمل (Action):</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setAdjustmentAction('add');
                      setMovementType('restock');
                    }}
                    className={`py-2 rounded-lg font-bold border text-xs ${
                      adjustmentAction === 'add'
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-gray-700'
                    }`}
                  >
                    + اسٹاک شامل کریں
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAdjustmentAction('subtract');
                      setMovementType('damage');
                    }}
                    className={`py-2 rounded-lg font-bold border text-xs ${
                      adjustmentAction === 'subtract'
                        ? 'bg-rose-600 text-white border-rose-600'
                        : 'bg-white text-gray-700'
                    }`}
                  >
                    - اسٹاک کم کریں
                  </button>
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">تعداد (Quantity):</label>
                <input
                  type="number"
                  min="1"
                  required
                  value={quantityDelta}
                  onChange={(e) => setQuantityDelta(Math.max(1, Number(e.target.value)))}
                  className="w-full p-2 border rounded-lg text-right font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">وجہ کی قسم (Movement Type):</label>
                <select
                  value={movementType}
                  onChange={(e: any) => setMovementType(e.target.value)}
                  className="w-full p-2 border rounded-lg bg-white"
                >
                  <option value="restock">نیا اسٹاک موصول ہوا (Restock)</option>
                  <option value="damage">متاثرہ یا ضائع شدہ کتب (Damaged)</option>
                  <option value="correction">طبعی شماریاتی درستگی (Correction)</option>
                  <option value="return">واپس شدہ آرڈر (Return)</option>
                  <option value="sale">دستی فروخت (Manual Sale)</option>
                </select>
              </div>

              <div>
                <label className="font-semibold block mb-1">تفصیلی وجہ (Audit Reason):</label>
                <input
                  type="text"
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="مثلاً: پریس سے نیا بنڈل موصول ہوا..."
                  className="w-full p-2 border rounded-lg text-right"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button
                  type="button"
                  onClick={() => setSelectedEdition(null)}
                  className="px-4 py-2 rounded-lg text-xs bg-gray-100 text-gray-700"
                >
                  منسوخ
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg text-xs bg-brand-gold text-brand-navy-950 font-bold"
                >
                  ایڈجسٹمنٹ محفوظ کریں
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
