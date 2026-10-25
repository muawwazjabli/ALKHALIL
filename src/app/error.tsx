'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center space-y-4 text-right">
      <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h2 className="font-nastaliq text-2xl font-bold text-brand-navy-950">
        تکنیکی خرابی پیش آئی ہے
      </h2>
      <p className="text-xs text-gray-500 font-nastaliq">
        معذرت! سرور سے رابطہ کے دوران غیر متوقع خرابی واقع ہوئی۔
      </p>
      <div className="pt-2 flex justify-center gap-3">
        <button
          onClick={() => reset()}
          className="bg-brand-navy-950 text-brand-gold font-bold px-5 py-2.5 rounded-xl text-xs flex items-center shadow"
        >
          <RefreshCw className="w-3.5 h-3.5 ml-1.5" />
          <span>دوبارہ کوشش کریں (Retry)</span>
        </button>
        <Link
          href="/"
          className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-xl text-xs font-semibold"
        >
          صفحہ اول
        </Link>
      </div>
    </div>
  );
}
