'use client';

import React, { useState } from 'react';
import { Plus, Edit3, Trash2, FolderTree, X } from 'lucide-react';
import { store } from '@/lib/data/store';
import { Category } from '@/types';

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState(store.getCategories());
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [nameUr, setNameUr] = useState('');
  const [nameEn, setNameEn] = useState('');
  const [slug, setSlug] = useState('');
  const [descUr, setDescUr] = useState('');
  const [sortOrder, setSortOrder] = useState(1);

  const handleOpenAdd = () => {
    setEditingId(null);
    setNameUr('');
    setNameEn('');
    setSlug('');
    setDescUr('');
    setSortOrder(categories.length + 1);
    setShowModal(true);
  };

  const handleOpenEdit = (cat: Category) => {
    setEditingId(cat.id);
    setNameUr(cat.name_ur);
    setNameEn(cat.name_en || '');
    setSlug(cat.slug);
    setDescUr(cat.description_ur || '');
    setSortOrder(cat.sort_order);
    setShowModal(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameUr.trim() || !slug.trim()) return;

    if (editingId) {
      store.updateCategory(editingId, {
        name_ur: nameUr.trim(),
        name_en: nameEn.trim(),
        slug: slug.trim(),
        description_ur: descUr.trim(),
        sort_order: Number(sortOrder),
      });
    } else {
      store.addCategory({
        name_ur: nameUr.trim(),
        name_en: nameEn.trim(),
        slug: slug.trim(),
        description_ur: descUr.trim(),
        sort_order: Number(sortOrder),
        is_active: true,
      });
    }

    setCategories(store.getCategories());
    setShowModal(false);
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`کیا آپ موضوع "${name}" کو حذف کرنا چاہتے ہیں؟`)) {
      store.deleteCategory(id);
      setCategories(store.getCategories());
    }
  };

  return (
    <div className="space-y-6 text-right">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
            موضوعات و زمرہ جات (Categories Management)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            کتب کے تمام شعبہ جات کا اندراج، ترتیب اور انتظام
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center shadow"
        >
          <Plus className="w-4 h-4 ml-1" />
          <span>نیا موضوع شامل کریں (Add Category)</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-brand-gold/30 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-brand-navy-950 text-brand-gold border-b-2 border-brand-gold">
                <th className="py-3 px-4">ترتیب</th>
                <th className="py-3 px-4">نام (اردو)</th>
                <th className="py-3 px-4">English Name</th>
                <th className="py-3 px-4">Slug</th>
                <th className="py-3 px-4">تفصیل</th>
                <th className="py-3 px-4 text-center">ایکشن</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono font-bold text-gray-500">{cat.sort_order}</td>
                  <td className="py-3 px-4 font-nastaliq text-base font-bold text-brand-navy-950">
                    {cat.name_ur}
                  </td>
                  <td className="py-3 px-4 text-gray-600 font-sans">{cat.name_en || '—'}</td>
                  <td className="py-3 px-4 font-mono text-gray-500 text-[11px]">{cat.slug}</td>
                  <td className="py-3 px-4 text-gray-500 line-clamp-1 max-w-xs">{cat.description_ur || '—'}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center space-x-2 space-x-reverse">
                      <button
                        onClick={() => handleOpenEdit(cat)}
                        className="p-1.5 text-gray-600 hover:text-brand-navy-950 hover:bg-gray-100 rounded"
                        title="ترمیم"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(cat.id, cat.name_ur)}
                        className="p-1.5 text-gray-600 hover:text-rose-600 hover:bg-gray-100 rounded"
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
                {editingId ? 'موضوع میں ترمیم' : 'نیا موضوع درج کریں'}
              </h4>
              <button onClick={() => setShowModal(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold block mb-1">موضوع کا نام اردو میں:</label>
                <input
                  type="text"
                  required
                  value={nameUr}
                  onChange={(e) => {
                    setNameUr(e.target.value);
                    if (!editingId && !slug) {
                      setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'));
                    }
                  }}
                  className="w-full p-2 border rounded-lg text-right font-nastaliq text-base"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">نام انگریزی میں (English):</label>
                <input
                  type="text"
                  value={nameEn}
                  onChange={(e) => setNameEn(e.target.value)}
                  className="w-full p-2 border rounded-lg text-left"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">URL Slug:</label>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full p-2 border rounded-lg text-left font-mono"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">ترتیب نمبر (Sort Order):</label>
                <input
                  type="number"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(Number(e.target.value))}
                  className="w-full p-2 border rounded-lg text-right font-mono"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">مختصر تعارف:</label>
                <textarea
                  rows={2}
                  value={descUr}
                  onChange={(e) => setDescUr(e.target.value)}
                  className="w-full p-2 border rounded-lg text-right font-nastaliq text-xs"
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
                  محفوظ کریں
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
