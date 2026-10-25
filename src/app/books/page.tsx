'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Filter, Search, SlidersHorizontal, BookOpen, X, RefreshCw } from 'lucide-react';
import { store } from '@/lib/data/store';
import BookCard from '@/components/books/BookCard';

export default function BooksPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const initialSearch = searchParams.get('search') || '';
  const initialPublisher = searchParams.get('publisher') || '';
  const initialAuthor = searchParams.get('author') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPublisher, setSelectedPublisher] = useState(initialPublisher);
  const [selectedAuthor, setSelectedAuthor] = useState(initialAuthor);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState<'newest' | 'price_asc' | 'price_desc' | 'popular'>('newest');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = store.getCategories();
  const publishers = store.getPublishers();
  const authors = store.getAuthors();

  // Active category object
  const activeCategory = selectedCategory
    ? categories.find((c) => c.id === selectedCategory)
    : null;

  // Filtered books
  const filteredBooks = useMemo(() => {
    return store.getBooks({
      categoryId: selectedCategory || undefined,
      publisherId: selectedPublisher || undefined,
      authorId: selectedAuthor || undefined,
      searchQuery: searchQuery || undefined,
      sortBy,
      inStockOnly,
    });
  }, [selectedCategory, selectedPublisher, selectedAuthor, searchQuery, sortBy, inStockOnly]);

  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedPublisher('');
    setSelectedAuthor('');
    setSearchQuery('');
    setInStockOnly(false);
    setSortBy('newest');
  };

  const hasActiveFilters =
    Boolean(selectedCategory) ||
    Boolean(selectedPublisher) ||
    Boolean(selectedAuthor) ||
    Boolean(searchQuery) ||
    inStockOnly;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-brand-navy-950 to-brand-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-brand-gold/30 shadow-card mb-8 text-right">
        <h1 className="font-nastaliq text-3xl sm:text-4xl font-bold text-brand-gold-300">
          {activeCategory ? activeCategory.name_ur : 'کتب خانہ و اشاعتی فہرست'}
        </h1>
        <p className="font-nastaliq text-sm sm:text-base text-gray-300 mt-2 max-w-3xl leading-relaxed">
          {activeCategory?.description_ur ||
            'الخلیل پبلشرز کے علمی ذخیرے سے قرآن، تفاسیر، کتب حدیث، فقہی احکام، تاریخ اور درس نظامی کی تمام کتب کا جائزہ لیں۔'}
        </p>

        {/* Search within catalog */}
        <div className="mt-6 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="کتاب کا نام، مصنف یا موضوع تلاش فرمائیں..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pr-10 pl-4 rounded-xl bg-brand-navy-800 text-white placeholder-gray-400 border border-brand-gold/40 text-sm focus:outline-none focus:border-brand-gold text-right"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block w-72 shrink-0 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-brand-gold/30 shadow-soft sticky top-28 space-y-6 text-right">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center space-x-2 space-x-reverse font-bold text-brand-navy-950">
                <Filter className="w-4 h-4 text-brand-gold ml-1.5" />
                <span>فلٹرز (Filters)</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-rose-600 hover:text-rose-700 flex items-center font-medium"
                >
                  <RefreshCw className="w-3 h-3 ml-1" />
                  <span>صاف کریں</span>
                </button>
              )}
            </div>

            {/* In stock only toggle */}
            <div>
              <label className="flex items-center space-x-2 space-x-reverse cursor-pointer text-xs font-semibold text-brand-navy-950">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded border-gray-300 text-brand-gold focus:ring-brand-gold w-4 h-4"
                />
                <span>صرف دستیاب کتب (In Stock Only)</span>
              </label>
            </div>

            {/* Categories filter */}
            <div>
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                موضوعات (Categories)
              </h4>
              <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`w-full text-right px-2.5 py-1.5 rounded-lg text-xs transition-colors block ${
                    selectedCategory === ''
                      ? 'bg-brand-gold text-brand-navy-950 font-bold'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  تمام موضوعات
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`w-full text-right px-2.5 py-1.5 rounded-lg text-xs transition-colors block ${
                      selectedCategory === c.id
                        ? 'bg-brand-gold text-brand-navy-950 font-bold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {c.name_ur}
                  </button>
                ))}
              </div>
            </div>

            {/* Publishers filter */}
            <div>
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                ناشرین (Publishers)
              </h4>
              <div className="space-y-1 max-h-44 overflow-y-auto pr-1">
                <button
                  onClick={() => setSelectedPublisher('')}
                  className={`w-full text-right px-2.5 py-1.5 rounded-lg text-xs transition-colors block ${
                    selectedPublisher === ''
                      ? 'bg-brand-gold text-brand-navy-950 font-bold'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  تمام ناشرین
                </button>
                {publishers.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPublisher(p.id)}
                    className={`w-full text-right px-2.5 py-1.5 rounded-lg text-xs transition-colors block ${
                      selectedPublisher === p.id
                        ? 'bg-brand-gold text-brand-navy-950 font-bold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {p.name_ur}
                  </button>
                ))}
              </div>
            </div>

            {/* Authors filter */}
            <div>
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                مصنفین (Authors)
              </h4>
              <div className="space-y-1 max-h-44 overflow-y-auto pr-1">
                <button
                  onClick={() => setSelectedAuthor('')}
                  className={`w-full text-right px-2.5 py-1.5 rounded-lg text-xs transition-colors block ${
                    selectedAuthor === ''
                      ? 'bg-brand-gold text-brand-navy-950 font-bold'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  تمام مصنفین
                </button>
                {authors.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setSelectedAuthor(a.id)}
                    className={`w-full text-right px-2.5 py-1.5 rounded-lg text-xs transition-colors block ${
                      selectedAuthor === a.id
                        ? 'bg-brand-gold text-brand-navy-950 font-bold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {a.name_ur}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Products Grid Area */}
        <main className="flex-1">
          {/* Top Bar: Count & Sorting */}
          <div className="bg-white p-4 rounded-xl border border-brand-gold/30 shadow-soft mb-6 flex flex-wrap items-center justify-between gap-4 text-right">
            <div className="text-xs text-gray-600">
              کل <span className="font-bold text-brand-navy-950">{filteredBooks.length}</span> کتب دستیاب ہیں
            </div>

            <div className="flex items-center space-x-3 space-x-reverse">
              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center bg-brand-navy-900 text-brand-gold px-3 py-1.5 rounded-lg text-xs font-medium"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 ml-1" />
                <span>فلٹرز</span>
              </button>

              {/* Sort by dropdown */}
              <div className="flex items-center space-x-2 space-x-reverse text-xs">
                <span className="text-gray-500">ترتیب:</span>
                <select
                  value={sortBy}
                  onChange={(e: any) => setSortBy(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-lg py-1.5 px-3 text-xs text-brand-navy-950 focus:outline-none focus:border-brand-gold"
                >
                  <option value="newest">تازہ ترین (Newest)</option>
                  <option value="popular">مقبولیت (Popularity)</option>
                  <option value="price_asc">قیمت: کم سے زیادہ (Price: Low to High)</option>
                  <option value="price_desc">قیمت: زیادہ سے کم (Price: High to Low)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Books Grid */}
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-xl border border-dashed border-gray-300 text-center space-y-3">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto" />
              <h3 className="font-nastaliq text-xl font-bold text-brand-navy-950">کوئی کتاب نہیں ملی</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                آپ کے منتخب کردہ فلٹرز یا تلاش کے مطابق کوئی نتیجہ دستیاب نہیں ہے۔ براہ کرم فلٹرز تبدیل فرمائیں۔
              </p>
              <button
                onClick={resetFilters}
                className="mt-2 bg-brand-navy-900 text-brand-gold px-4 py-2 rounded-lg text-xs font-bold"
              >
                تمام فلٹرز ختم کریں
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Drawer Filters Modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="w-80 bg-white h-full p-6 overflow-y-auto space-y-6 text-right">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-base text-brand-navy-950">فلٹرز</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* In stock */}
            <label className="flex items-center space-x-2 space-x-reverse cursor-pointer text-xs font-semibold">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded border-gray-300 text-brand-gold focus:ring-brand-gold w-4 h-4"
              />
              <span>صرف دستیاب کتب</span>
            </label>

            {/* Categories */}
            <div>
              <h4 className="text-xs font-bold text-gray-700 mb-2">موضوعات</h4>
              <div className="space-y-1 max-h-48 overflow-y-auto">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`w-full text-right p-1.5 rounded text-xs ${
                    selectedCategory === '' ? 'bg-brand-gold text-brand-navy-950 font-bold' : ''
                  }`}
                >
                  تمام موضوعات
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`w-full text-right p-1.5 rounded text-xs ${
                      selectedCategory === c.id ? 'bg-brand-gold text-brand-navy-950 font-bold' : ''
                    }`}
                  >
                    {c.name_ur}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-brand-navy-950 text-brand-gold font-bold py-2.5 rounded-xl text-xs"
            >
              فلٹرز لاگو کریں
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
