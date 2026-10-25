'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingCart,
  CheckCircle2,
  AlertCircle,
  Truck,
  ShieldCheck,
  Scale,
  Layers,
  BookOpen,
  Calendar,
  Barcode,
  Share2,
  ChevronLeft,
  ArrowRight,
  Phone,
  Tag,
} from 'lucide-react';
import { store } from '@/lib/data/store';
import { useCart } from '@/context/CartContext';
import { getEditionStockStatus } from '@/lib/calculations';
import BookCard from '@/components/books/BookCard';

export default function BookDetailPage() {
  const params = useParams();
  const router = useRouter();
  const bookId = params?.id as string;
  const { addToCart } = useCart();

  const book = store.getBookById(bookId);

  // If book not found
  if (!book) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="font-nastaliq text-2xl font-bold text-brand-navy-950">مطلوبہ کتاب دستیاب نہیں ہے</h1>
        <p className="text-xs text-gray-500 mt-2">یہ کتاب فہرست سے ہٹا دی گئی ہے یا اس کا ربط درست نہیں ہے۔</p>
        <button
          onClick={() => router.push('/books')}
          className="mt-6 bg-brand-navy-900 text-brand-gold px-6 py-2.5 rounded-xl text-xs font-bold"
        >
          تمام کتب کی فہرست پر جائیں
        </button>
      </div>
    );
  }

  const editions = book.editions || [];
  const [selectedEditionId, setSelectedEditionId] = useState(
    editions[0]?.id || ''
  );
  const selectedEdition =
    editions.find((e) => e.id === selectedEditionId) || editions[0];

  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const images = book.images && book.images.length > 0
    ? book.images
    : [
        {
          id: 'def-1',
          book_id: book.id,
          image_type: 'front_cover' as const,
          image_url: selectedEdition?.cover_image_url || '/logo.png',
          sort_order: 1,
          created_at: '',
        },
      ];

  const stockInfo = selectedEdition
    ? getEditionStockStatus(selectedEdition.stock_quantity, selectedEdition.low_stock_threshold)
    : { status: 'out_of_stock', labelUr: 'اسٹاک ختم ہو گیا', labelEn: 'Out of Stock', colorClass: '', isPurchasable: false };

  const handleAddToCart = () => {
    if (!selectedEdition) return;
    const res = addToCart(book, selectedEdition, quantity);
    setToastMessage(res.message);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const relatedBooks = store
    .getBooks({ categoryId: book.category_id || undefined })
    .filter((b) => b.id !== book.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12 text-right">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-brand-navy-950 text-white border-2 border-brand-gold px-6 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 space-x-reverse animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-brand-gold ml-2 shrink-0" />
          <span className="font-nastaliq text-sm font-semibold">{toastMessage}</span>
          <button
            onClick={() => router.push('/cart')}
            className="mr-3 bg-brand-gold text-brand-navy-950 px-3 py-1 rounded-lg text-xs font-bold"
          >
            ٹوکری دیکھیں
          </button>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500 font-medium">
        <a href="/" className="hover:text-brand-gold">صفحہ اول</a>
        <span>/</span>
        <a href="/books" className="hover:text-brand-gold">کتب</a>
        {book.category && (
          <>
            <span>/</span>
            <a href={`/books?category=${book.category.id}`} className="hover:text-brand-gold">
              {book.category.name_ur}
            </a>
          </>
        )}
        <span>/</span>
        <span className="text-brand-navy-900 font-bold truncate max-w-xs">{book.title_ur}</span>
      </nav>

      {/* Main Product Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Images Column (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Main Large Image */}
          <div className="relative aspect-[3/4] bg-white rounded-2xl border-2 border-brand-gold/30 shadow-card overflow-hidden">
            <Image
              src={images[activeImageIndex]?.image_url || '/logo.png'}
              alt={book.title_ur}
              fill
              priority
              className="object-cover"
            />
            {/* Stock status badge overlay */}
            <div className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow border ${stockInfo.colorClass}`}>
              {stockInfo.labelUr}
            </div>

            {/* Discount Badge */}
            {selectedEdition && selectedEdition.discount_value > 0 && (
              <div className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow flex items-center">
                <Tag className="w-3.5 h-3.5 ml-1" />
                <span>
                  {selectedEdition.discount_type === 'percentage'
                    ? `${selectedEdition.discount_value}% رعایت`
                    : `روپے ${selectedEdition.discount_value} رعایت`}
                </span>
              </div>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-24 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    activeImageIndex === idx
                      ? 'border-brand-gold scale-105 shadow-sm'
                      : 'border-gray-200 hover:border-brand-gold/50 opacity-70'
                  }`}
                >
                  <Image src={img.image_url} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Book Details & Edition Switcher (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            {/* Category */}
            {book.category && (
              <span className="text-xs font-bold text-brand-gold-600 uppercase tracking-wider block mb-1">
                {book.category.name_ur}
              </span>
            )}

            {/* Main Title */}
            <h1 className="font-nastaliq text-3xl sm:text-4xl font-bold text-brand-navy-950 leading-tight">
              {book.title_ur}
            </h1>

            {/* English Title / Subtitle */}
            {(book.title_en || book.subtitle_ur) && (
              <p className="text-xs text-gray-500 mt-1 font-sans">
                {book.title_en} {book.subtitle_ur && `— ${book.subtitle_ur}`}
              </p>
            )}

            {/* Authors */}
            {book.authors && book.authors.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-700">
                <span className="font-semibold text-brand-navy-900">مصنف:</span>
                {book.authors.map((ba) => (
                  <span key={ba.author.id} className="bg-gray-100 px-2.5 py-0.5 rounded font-nastaliq text-brand-navy-950">
                    {ba.author.name_ur}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Publisher & Edition Selector Box (Section 3C Requirement) */}
          <div className="bg-brand-navy-50/60 p-5 rounded-2xl border border-brand-gold/40 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-brand-navy-950 uppercase tracking-wider">
                دستیاب ناشرین و ایڈیشنز (Select Publisher & Edition)
              </h3>
              <span className="text-[11px] text-gray-500">
                {editions.length} مختلف ایڈیشنز موجود ہیں
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {editions.map((ed) => {
                const isSelected = ed.id === selectedEditionId;
                const edStock = getEditionStockStatus(ed.stock_quantity, ed.low_stock_threshold);

                return (
                  <button
                    key={ed.id}
                    onClick={() => {
                      setSelectedEditionId(ed.id);
                      setQuantity(1);
                    }}
                    className={`p-3.5 rounded-xl border text-right transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-brand-gold shadow-md ring-2 ring-brand-gold/30'
                        : 'bg-white/80 border-gray-200 hover:border-brand-gold/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-brand-navy-950 mb-1">
                        <span className="font-nastaliq text-sm">{ed.publisher?.name_ur || 'معیاری اشاعت'}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${edStock.colorClass}`}>
                          {edStock.labelUr}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600 line-clamp-1">{ed.edition_name}</p>
                      <div className="text-[11px] text-gray-400 mt-1 flex gap-2">
                        <span>{ed.volumes} جلد</span>
                        <span>•</span>
                        <span>{ed.weight_grams} گرام</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm font-bold text-brand-navy-900">
                        روپے {ed.final_price.toLocaleString()}
                      </span>
                      {ed.final_price < ed.regular_price && (
                        <span className="text-[11px] text-gray-400 line-through">
                          روپے {ed.regular_price.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing & Stock Details for Selected Edition */}
          {selectedEdition && (
            <div className="space-y-4">
              <div className="flex items-baseline space-x-4 space-x-reverse">
                <span className="text-3xl font-extrabold text-brand-navy-950">
                  روپے {selectedEdition.final_price.toLocaleString()}
                </span>
                {selectedEdition.final_price < selectedEdition.regular_price && (
                  <>
                    <span className="text-base text-gray-400 line-through">
                      روپے {selectedEdition.regular_price.toLocaleString()}
                    </span>
                    <span className="bg-rose-100 text-rose-700 text-xs font-bold px-2 py-0.5 rounded">
                      بچت: روپے {(selectedEdition.regular_price - selectedEdition.final_price).toLocaleString()}
                    </span>
                  </>
                )}
              </div>

              {/* Quantity selector and Add to Cart */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Quantity */}
                <div className="flex items-center border border-gray-300 rounded-xl bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1 || !stockInfo.isPurchasable}
                    className="px-3.5 py-2.5 text-gray-600 hover:bg-gray-100 disabled:opacity-40"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm font-bold text-brand-navy-950 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(selectedEdition.stock_quantity, quantity + 1))}
                    disabled={quantity >= selectedEdition.stock_quantity || !stockInfo.isPurchasable}
                    className="px-3.5 py-2.5 text-gray-600 hover:bg-gray-100 disabled:opacity-40"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCart}
                  disabled={!stockInfo.isPurchasable}
                  className="flex-1 bg-brand-gold hover:bg-brand-gold-400 disabled:bg-gray-200 disabled:text-gray-400 text-brand-navy-950 font-bold px-6 py-3 rounded-xl transition-all shadow-gold flex items-center justify-center space-x-2 space-x-reverse text-sm"
                >
                  <ShoppingCart className="w-5 h-5 ml-2" />
                  <span>
                    {stockInfo.isPurchasable ? 'ٹوکری میں شامل کریں (Add to Cart)' : 'دستیاب نہیں ہے'}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Book Specifications Grid */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-gray-700 border-b pb-2 uppercase tracking-wider">
              کتاب کی خصوصیات و تفصیلات (Book Specifications)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-gray-400 block">جلدیں:</span>
                <span className="font-semibold text-brand-navy-950">{selectedEdition?.volumes || book.total_volumes} جلد</span>
              </div>
              <div>
                <span className="text-gray-400 block">زبان:</span>
                <span className="font-semibold text-brand-navy-950">{book.language}</span>
              </div>
              <div>
                <span className="text-gray-400 block">بائنڈنگ:</span>
                <span className="font-semibold text-brand-navy-950">{selectedEdition?.binding_type || book.binding_type}</span>
              </div>
              <div>
                <span className="text-gray-400 block">طباعت:</span>
                <span className="font-semibold text-brand-navy-950">{selectedEdition?.printing_type || book.printing_type}</span>
              </div>
              <div>
                <span className="text-gray-400 block">وزن (Weight):</span>
                <span className="font-semibold text-brand-navy-950">{selectedEdition?.weight_grams || 500} گرام</span>
              </div>
              <div>
                <span className="text-gray-400 block">شمارہ / SKU:</span>
                <span className="font-mono font-semibold text-brand-navy-950">{selectedEdition?.sku || book.sku || 'AK-BOOK'}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-brand-navy-950">تفصیل کتاب (Description):</h3>
            <p className="font-nastaliq text-sm text-gray-700 leading-relaxed text-justify whitespace-pre-line bg-white p-5 rounded-2xl border border-gray-100 shadow-soft">
              {book.description_ur || 'اس کتاب کے متعلق تفصیلی معلومات جلد فراہم کی جائیں گی۔'}
            </p>
          </div>
        </div>
      </div>

      {/* Related Books */}
      {relatedBooks.length > 0 && (
        <div className="pt-8 border-t border-brand-gold/30">
          <h2 className="font-nastaliq text-2xl font-bold text-brand-navy-950 mb-6">
            اسی موضوع سے متعلق دیگر کتب
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedBooks.map((rb) => (
              <BookCard key={rb.id} book={rb} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
