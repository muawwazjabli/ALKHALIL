'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { store } from '@/lib/data/store';
import BookForm from '@/components/admin/BookForm';

export default function EditBookPage() {
  const params = useParams();
  const bookId = params?.id as string;
  const book = store.getBookById(bookId);

  if (!book) {
    return (
      <div className="bg-white p-12 rounded-2xl text-center space-y-4">
        <h2 className="font-nastaliq text-xl font-bold text-brand-navy-950">کتاب نہیں ملی</h2>
        <Link href="/admin/books" className="text-xs text-brand-gold font-bold underline">
          کتب کی فہرست پر جائیں
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-right">
      <div className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500">
        <Link href="/admin/books" className="hover:text-brand-gold">کتب کا انتظام</Link>
        <span>/</span>
        <span className="text-brand-navy-950 font-bold">{book.title_ur}</span>
      </div>

      <BookForm initialBook={book} />
    </div>
  );
}
