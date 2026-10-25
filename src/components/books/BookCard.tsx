'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Book } from '@/types';
import { getEditionStockStatus } from '@/lib/calculations';
import { BookOpen, Tag } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const editions = book.editions || [];
  const primaryEdition = editions[0];

  // Calculate lowest and highest prices
  const prices = editions.map((e) => e.final_price);
  const regularPrices = editions.map((e) => e.regular_price);
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 0;
  const maxDiscount = editions.length
    ? Math.max(
        ...editions.map((e) =>
          e.discount_type === 'percentage'
            ? e.discount_value
            : Math.round(((e.regular_price - e.final_price) / e.regular_price) * 100)
        )
      )
    : 0;

  // Stock status across editions
  const totalStock = editions.reduce((sum, e) => sum + e.stock_quantity, 0);
  const stockInfo = getEditionStockStatus(
    totalStock,
    primaryEdition?.low_stock_threshold || 10
  );

  const coverUrl =
    book.images?.find((img) => img.image_type === 'front_cover')?.image_url ||
    primaryEdition?.cover_image_url ||
    '/logo.png';

  const authorName =
    book.authors && book.authors.length > 0
      ? book.authors[0].author.name_ur
      : 'مصنف نامعلوم';

  return (
    <div className="group bg-white rounded-xl border border-brand-gold/30 hover:border-brand-gold shadow-soft hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden text-right">
      {/* Cover Image & Badges */}
      <Link href={`/books/${book.id}`} className="relative aspect-[3/4] bg-brand-navy-50/50 overflow-hidden block">
        <Image
          src={coverUrl}
          alt={book.title_ur}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Discount Badge */}
        {maxDiscount > 0 && (
          <div className="absolute top-2.5 right-2.5 bg-rose-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow flex items-center">
            <Tag className="w-3 h-3 ml-1" />
            <span>{maxDiscount}% رعایت</span>
          </div>
        )}

        {/* Stock Status Badge */}
        <div
          className={`absolute bottom-2.5 right-2.5 text-[11px] font-medium px-2 py-0.5 rounded shadow-sm border ${stockInfo.colorClass}`}
        >
          {stockInfo.labelUr}
        </div>

        {/* Editions count badge */}
        {editions.length > 1 && (
          <div className="absolute top-2.5 left-2.5 bg-brand-navy-900/80 text-brand-gold text-[10px] font-semibold px-2 py-0.5 rounded border border-brand-gold/40">
            {editions.length} ایڈیشنز
          </div>
        )}
      </Link>

      {/* Book Information */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Pill */}
          {book.category && (
            <span className="text-[11px] text-brand-gold-600 font-semibold mb-1 block">
              {book.category.name_ur}
            </span>
          )}

          {/* Title */}
          <Link href={`/books/${book.id}`}>
            <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950 group-hover:text-brand-gold-700 transition-colors line-clamp-1 leading-snug">
              {book.title_ur}
            </h3>
          </Link>

          {/* Author */}
          <p className="text-xs text-gray-500 mt-1 line-clamp-1 flex items-center">
            <BookOpen className="w-3 h-3 ml-1 text-gray-400 shrink-0" />
            <span>{authorName}</span>
          </p>
        </div>

        {/* Price & Action */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div className="text-base font-bold text-brand-navy-900">
              {prices.length > 1 && minPrice !== maxPrice ? (
                <span>
                  روپے {minPrice.toLocaleString()} - {maxPrice.toLocaleString()}
                </span>
              ) : (
                <span>روپے {minPrice.toLocaleString()}</span>
              )}
            </div>

            {/* Original price strikethrough if discounted */}
            {maxDiscount > 0 && regularPrices.length > 0 && (
              <span className="text-xs text-gray-400 line-through block">
                روپے {Math.max(...regularPrices).toLocaleString()}
              </span>
            )}
          </div>

          <Link
            href={`/books/${book.id}`}
            className="bg-brand-navy-900 hover:bg-brand-navy-800 text-brand-gold text-xs font-semibold px-3 py-1.5 rounded-lg border border-brand-gold/40 hover:border-brand-gold transition-colors"
          >
            تفصیلات دیکھیں
          </Link>
        </div>
      </div>
    </div>
  );
}
