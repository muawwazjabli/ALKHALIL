'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Sparkles,
  Award,
  Layers,
  ArrowLeft,
  Search,
  CheckCircle2,
  Building,
  UserCheck,
} from 'lucide-react';
import { store } from '@/lib/data/store';
import BookCard from '@/components/books/BookCard';

export default function HomePage() {
  const categories = store.getCategories();
  const featuredBooks = store.getFeaturedBooks();
  const allBooks = store.getBooks();
  const publishers = store.getPublishers();
  const authors = store.getAuthors();

  // Bestsellers sorted by views count & orders
  const bestSellers = [...allBooks].sort((a, b) => b.views_count - a.views_count).slice(0, 4);

  // Discounted books
  const discountedBooks = allBooks
    .filter((b) => b.editions?.some((e) => e.discount_value > 0))
    .slice(0, 4);

  // New arrivals
  const newArrivals = [...allBooks]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 4);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#060A17] text-white py-16 sm:py-24 border-b border-brand-gold/30 overflow-hidden">
        {/* Subtle Islamic geometric background overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <div className="lg:w-3/5 space-y-6 text-center lg:text-right">
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-brand-gold/15 border border-brand-gold/40 px-3.5 py-1.5 rounded-full text-brand-gold-300 text-xs font-medium">
              <Sparkles className="w-4 h-4 ml-1.5 text-brand-gold" />
              <span>مستند اشاعت اور نفیس طباعت کا امین ادارہ</span>
            </div>

            <h1 className="font-nastaliq text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              علم و حکمت اور دینی علوم کا <br />
              <span className="text-brand-gold-300 underline decoration-brand-gold/40 decoration-4 underline-offset-8">
                معتبر اشاعتی مرکز
              </span>
            </h1>

            <p className="font-nastaliq text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              الخلیل پبلشرز کے پلیٹ فارم سے قرآن مجید، مستند تفاسیر، صحاح ستہ احادیث، فقہ اسلامی اور درس نظامی کی معیاری کتب اب باآسانی پورے پاکستان میں گھر بیٹھے منگوائیں۔
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/books"
                className="bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-bold px-6 py-3 rounded-xl transition-all shadow-gold flex items-center text-sm"
              >
                <span>کتب کا جائزہ لیں (Explore Books)</span>
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Link>

              <Link
                href="/books?category=c-2"
                className="bg-brand-navy-800 hover:bg-brand-navy-700 text-white font-medium px-5 py-3 rounded-xl border border-brand-gold/40 hover:border-brand-gold transition-colors text-sm"
              >
                تفاسیر و قرآنی کتب
              </Link>
            </div>

            {/* Features checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 text-xs text-gray-300">
              <div className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 ml-1.5" />
                <span>مستند تصدیق شدہ متون</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 ml-1.5" />
                <span>پورے پاکستان میں ہوم ڈیلیوری</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 ml-1.5" />
                <span>واٹس ایپ آرڈر کی سہولت</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative w-72 sm:w-80 aspect-[3/4] bg-gradient-to-tr from-brand-navy-800 to-brand-navy-700 rounded-2xl p-4 shadow-2xl border-2 border-brand-gold/40 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop"
                  alt="تفسیر معارف القرآن"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-right">
                  <span className="text-brand-gold-300 text-xs font-semibold">خصوصی اشاعت</span>
                  <h4 className="font-nastaliq text-xl font-bold text-white leading-snug">تفسیر معارف القرآن (8 جلدیں)</h4>
                  <p className="text-[11px] text-gray-300">مفتی اعظم مفتی محمد شفیع عثمانیؒ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8 border-b border-brand-gold/30 pb-3">
          <div>
            <h2 className="font-nastaliq text-2xl sm:text-3xl font-bold text-brand-navy-950">
              منتخب موضوعات و شعبہ جات
            </h2>
            <p className="text-xs text-gray-600 mt-1">
              اپنی پسند کے اسلامی اور تعلیمی موضوع کے مطابق کتب تلاش فرمائیں
            </p>
          </div>
          <Link
            href="/books"
            className="text-xs font-semibold text-brand-gold-700 hover:text-brand-gold-800 flex items-center"
          >
            <span>تمام موضوعات</span>
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/books?category=${category.id}`}
              className="group bg-white hover:bg-brand-navy-950 p-4 rounded-xl border border-brand-gold/30 hover:border-brand-gold shadow-soft hover:shadow-card transition-all text-center flex flex-col items-center justify-center space-y-2"
            >
              <div className="w-12 h-12 rounded-full bg-brand-gold/15 group-hover:bg-brand-gold/30 flex items-center justify-center text-brand-gold transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-nastaliq text-base font-bold text-brand-navy-950 group-hover:text-brand-gold transition-colors">
                {category.name_ur}
              </h3>
              <span className="text-[10px] text-gray-400 group-hover:text-gray-300 font-sans">
                {category.name_en}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Books (شاہکار کتب) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8 border-b border-brand-gold/30 pb-3">
          <div>
            <div className="flex items-center space-x-2 space-x-reverse text-brand-gold-600 text-xs font-semibold mb-1">
              <Award className="w-4 h-4 ml-1" />
              <span>خصوصی انتخاب</span>
            </div>
            <h2 className="font-nastaliq text-2xl sm:text-3xl font-bold text-brand-navy-950">
              نمایاں اور شاہکار کتب
            </h2>
          </div>
          <Link
            href="/books"
            className="text-xs font-semibold text-brand-gold-700 hover:text-brand-gold-800 flex items-center"
          >
            <span>مزید کتب</span>
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
          </Link>
        </div>

        {featuredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 font-nastaliq text-base">فی الوقت کوئی نمایاں کتب موجود نہیں ہیں۔</p>
          </div>
        )}
      </section>

      {/* Discounted / Special Offers (خصوصی رعایت) */}
      {discountedBooks.length > 0 && (
        <section className="bg-brand-navy-900 py-12 border-y border-brand-gold/30 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-8 border-b border-brand-gold/30 pb-3">
              <div>
                <span className="text-xs text-rose-400 font-semibold mb-1 block">محدود مدت کے لیے</span>
                <h2 className="font-nastaliq text-2xl sm:text-3xl font-bold text-brand-gold-300">
                  خصوصی رعایتی کتب (Special Offers)
                </h2>
              </div>
              <Link
                href="/books"
                className="text-xs font-semibold text-brand-gold-200 hover:text-white flex items-center"
              >
                <span>تمام رعایتیں دیکھیں</span>
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {discountedBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Best Sellers (سب سے زیادہ پسندیدہ کتب) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8 border-b border-brand-gold/30 pb-3">
          <div>
            <div className="flex items-center space-x-2 space-x-reverse text-brand-gold-600 text-xs font-semibold mb-1">
              <Sparkles className="w-4 h-4 ml-1" />
              <span>قارئین کا انتخاب</span>
            </div>
            <h2 className="font-nastaliq text-2xl sm:text-3xl font-bold text-brand-navy-950">
              زیادہ فروخت ہونے والی کتب (Best Sellers)
            </h2>
          </div>
          <Link
            href="/books"
            className="text-xs font-semibold text-brand-gold-700 hover:text-brand-gold-800 flex items-center"
          >
            <span>مکمل فہرست</span>
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellers.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Publishers & Authors Spotlight */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Publishers Spotlight */}
          <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-soft">
            <div className="flex items-center space-x-2 space-x-reverse text-brand-gold-600 mb-4 pb-2 border-b border-gray-100">
              <Building className="w-5 h-5 ml-2" />
              <h3 className="font-nastaliq text-xl font-bold text-brand-navy-950">معروف اسلامی اشاعتی ادارے</h3>
            </div>
            <div className="space-y-3">
              {publishers.map((pub) => (
                <Link
                  key={pub.id}
                  href={`/books?publisher=${pub.id}`}
                  className="p-3 rounded-xl hover:bg-brand-navy-50 border border-transparent hover:border-brand-gold/30 transition-all flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-nastaliq font-bold text-brand-navy-950 text-base">{pub.name_ur}</h4>
                    <span className="text-[11px] text-gray-500 font-sans">{pub.name_en}</span>
                  </div>
                  <span className="text-xs text-brand-gold-700 font-semibold flex items-center">
                    کتب دیکھیں <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Authors Spotlight */}
          <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-soft">
            <div className="flex items-center space-x-2 space-x-reverse text-brand-gold-600 mb-4 pb-2 border-b border-gray-100">
              <UserCheck className="w-5 h-5 ml-2" />
              <h3 className="font-nastaliq text-xl font-bold text-brand-navy-950">معتبر مصنفین و ائمہ کرام</h3>
            </div>
            <div className="space-y-3">
              {authors.map((auth) => (
                <Link
                  key={auth.id}
                  href={`/books?author=${auth.id}`}
                  className="p-3 rounded-xl hover:bg-brand-navy-50 border border-transparent hover:border-brand-gold/30 transition-all flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-nastaliq font-bold text-brand-navy-950 text-base">{auth.name_ur}</h4>
                    <p className="text-[11px] text-gray-500 line-clamp-1">{auth.bio_ur}</p>
                  </div>
                  <span className="text-xs text-brand-gold-700 font-semibold flex items-center shrink-0 mr-3">
                    کتب دیکھیں <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
