'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center space-y-4 text-right">
      <div className="w-20 h-20 bg-brand-gold/15 text-brand-gold rounded-full flex items-center justify-center mx-auto">
        <BookOpen className="w-10 h-10" />
      </div>
      <h1 className="font-nastaliq text-4xl font-bold text-brand-navy-950">
        404 — صفحہ دستیاب نہیں ہے
      </h1>
      <p className="text-xs text-gray-500 font-nastaliq">
        آپ جس صفحے یا کتاب کی تلاش میں ہیں وہ حذف کر دیا گیا ہے یا اس کا ربط درست نہیں ہے۔
      </p>
      <div className="pt-2 text-center">
        <Link
          href="/"
          className="inline-flex items-center bg-brand-navy-950 hover:bg-brand-navy-900 text-brand-gold font-bold px-6 py-2.5 rounded-xl text-xs transition-colors shadow"
        >
          <span>صفحہ اول پر واپس جائیں (Home)</span>
          <ArrowLeft className="w-4 h-4 mr-2" />
        </Link>
      </div>
    </div>
  );
}
