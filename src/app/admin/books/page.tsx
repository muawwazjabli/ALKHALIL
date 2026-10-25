'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plus, Search, Edit3, Trash2, Eye, BookOpen, AlertTriangle } from 'lucide-react';
import { store } from '@/lib/data/store';

export default function AdminBooksListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const books = store.getBooks();
  const categories = store.getCategories();

  const filteredBooks = books.filter((b) => {
    const matchesSearch =
      b.title_ur.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (b.title_en && b.title_en.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCat = selectedCategory ? b.category_id === selectedCategory : true;

    return matchesSearch && matchesCat;
  });

  const handleDelete = (id: string, title: string) => {
    if (confirm(`کیا آپ واقعی کتاب "${title}" کو حذف کرنا چاہتے ہیں؟`)) {
      store.deleteBook(id);
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6 text-right">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
            کتب و اشاعتی فہرست کا انتظام (Books Management)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            کل {books.length} کتب ذخیرہ میں موجود ہیں
          </p>
        </div>

        <Link
          href="/admin/books/new"
          className="bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center shadow transition-colors"
        >
          <Plus className="w-4 h-4 ml-1" />
          <span>نئی کتاب شامل کریں (Add New Book)</span>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-brand-gold/30 shadow-soft flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            placeholder="کتاب کا نام تلاش کریں..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 pr-9 pl-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold text-right"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-gray-50 border border-gray-300 rounded-lg p-2 focus:outline-none"
        >
          <option value="">تمام موضوعات</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name_ur}
            </option>
          ))}
        </select>
      </div>

      {/* Books Table */}
      <div className="bg-white rounded-2xl border border-brand-gold/30 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-brand-navy-950 text-brand-gold border-b-2 border-brand-gold">
                <th className="py-3 px-4">سرورق</th>
                <th className="py-3 px-4">نام کتاب</th>
                <th className="py-3 px-4">موضوع</th>
                <th className="py-3 px-4">مصنف</th>
                <th className="py-3 px-4">ایڈیشنز</th>
                <th className="py-3 px-4">قیمت (PKR)</th>
                <th className="py-3 px-4">موجود اسٹاک</th>
                <th className="py-3 px-4">حیثیت</th>
                <th className="py-3 px-4 text-center">ایکشنز</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredBooks.map((book) => {
                const primaryEd = book.editions?.[0];
                const coverUrl =
                  book.images?.find((i) => i.image_type === 'front_cover')?.image_url ||
                  primaryEd?.cover_image_url ||
                  '/logo.png';

                const totalStock = (book.editions || []).reduce(
                  (sum, e) => sum + e.stock_quantity,
                  0
                );

                return (
                  <tr key={book.id} className="hover:bg-gray-50/80">
                    <td className="py-3 px-4">
                      <div className="relative w-12 h-16 bg-gray-100 rounded overflow-hidden border">
                        <Image src={coverUrl} alt="" fill className="object-cover" />
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <Link
                        href={`/admin/books/${book.id}`}
                        className="font-nastaliq text-base font-bold text-brand-navy-950 hover:text-brand-gold block"
                      >
                        {book.title_ur}
                      </Link>
                      {book.title_en && (
                        <span className="text-[10px] text-gray-400 font-sans block truncate max-w-xs">
                          {book.title_en}
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-4 text-gray-600">
                      {book.category?.name_ur || '—'}
                    </td>

                    <td className="py-3 px-4 font-nastaliq text-brand-navy-950">
                      {book.authors?.[0]?.author.name_ur || '—'}
                    </td>

                    <td className="py-3 px-4 font-semibold text-brand-navy-950">
                      {book.editions?.length || 1} ایڈیشن
                    </td>

                    <td className="py-3 px-4 font-bold text-brand-gold-700">
                      روپے {primaryEd?.final_price.toLocaleString() || '0'}
                    </td>

                    <td className="py-3 px-4">
                      <span
                        className={`font-mono font-bold px-2 py-0.5 rounded text-[11px] ${
                          totalStock === 0
                            ? 'bg-rose-100 text-rose-800'
                            : totalStock <= 10
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {totalStock} نسخے
                      </span>
                    </td>

                    <td className="py-3 px-4">
                      {book.is_published ? (
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded text-[10px]">
                          شائع شدہ
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px]">
                          ڈرافٹ
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center space-x-2 space-x-reverse">
                        <Link
                          href={`/admin/books/${book.id}`}
                          className="p-1.5 text-gray-500 hover:text-brand-navy-950 hover:bg-gray-100 rounded"
                          title="ترمیم کریں"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Link>

                        <Link
                          href={`/books/${book.id}`}
                          target="_blank"
                          className="p-1.5 text-gray-500 hover:text-brand-gold hover:bg-gray-100 rounded"
                          title="ویب سائٹ پر دیکھیں"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>

                        <button
                          onClick={() => handleDelete(book.id, book.title_ur)}
                          className="p-1.5 text-gray-500 hover:text-rose-600 hover:bg-gray-100 rounded"
                          title="حذف کریں"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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
