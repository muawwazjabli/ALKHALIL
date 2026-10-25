'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BookForm from '@/components/admin/BookForm';

export default function NewBookPage() {
  return (
    <div className="space-y-6 text-right">
      <div className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500">
        <Link href="/admin/books" className="hover:text-brand-gold">کتب کا انتظام</Link>
        <span>/</span>
        <span className="text-brand-navy-950 font-bold">نئی کتاب کا اندراج</span>
      </div>

      <BookForm />
    </div>
  );
}
