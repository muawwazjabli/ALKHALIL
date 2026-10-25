'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { store } from '@/lib/data/store';

export default function WhatsAppButton() {
  const settings = store.getSiteSettings();
  const whatsappNumber = settings.general.whatsapp_number;
  const defaultMsg = encodeURIComponent('السلام علیکم! مجھے الخلیل پبلشرز سے کتب کے آرڈر اور دستیابی کے متعلق معلومات درکار ہیں۔');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="واٹس ایپ پر رابطہ کریں"
      className="whatsapp-float-btn fixed bottom-6 left-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 border-2 border-white group"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-xs mr-0 group-hover:mr-2">
        واٹس ایپ رابطہ
      </span>
    </a>
  );
}
