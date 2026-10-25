'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Truck, ShieldCheck, BookCheck, Clock } from 'lucide-react';
import { store } from '@/lib/data/store';

export default function Footer() {
  const settings = store.getSiteSettings();
  const categories = store.getCategories().slice(0, 6);

  return (
    <footer className="bg-brand-navy-950 text-gray-300 border-t-2 border-brand-gold/40 mt-16 text-right">
      {/* Value Proposition Highlights Banner */}
      <div className="border-b border-brand-navy-800 bg-brand-navy-900/60 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-right">
          <div className="flex items-center space-x-3 space-x-reverse justify-center sm:justify-start">
            <div className="w-11 h-11 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/30">
              <BookCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">مستند علمی اشاعت</h4>
              <p className="text-xs text-gray-400">معتبر علماء و اسلاف کی تصدیق شدہ کتب</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 space-x-reverse justify-center sm:justify-start">
            <div className="w-11 h-11 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/30">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">پورے پاکستان میں ترسیل</h4>
              <p className="text-xs text-gray-400">محفوظ پیکنگ اور تیز رفتار کوریئر سروس</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 space-x-reverse justify-center sm:justify-start">
            <div className="w-11 h-11 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">محفوظ ادائیگیاں</h4>
              <p className="text-xs text-gray-400">بینک ٹرانسفر، ایزی پیسہ، جاز کیش</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 space-x-reverse justify-center sm:justify-start">
            <div className="w-11 h-11 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/30">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">واٹس ایپ معاونت</h4>
              <p className="text-xs text-gray-400">آرڈر اور کتب کی معلومات کے لیے رہنمائی</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-white/10 rounded-full p-1 border border-brand-gold/50 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="الخلیل پبلشرز"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-nastaliq text-2xl font-bold text-brand-gold-300">الخلیل پبلشرز</h3>
                <span className="text-[11px] text-gray-400 uppercase font-sans tracking-widest">
                  Al Khalil Publishers
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-nastaliq text-justify">
              الخلیل پبلشرز قرآنی علوم، تفاسیر، کتب حدیث، فقہ و فتاویٰ، تاریخ اسلام اور دینی نصاب کی نفیس اور معیاری اشاعت کا مستند نام ہے۔ ہمارا مقصد صحیح دینی علوم کو امت مسلمہ تک خوبصورت طباعت کے ساتھ پہنچانا ہے۔
            </p>

            <div className="pt-2 text-xs text-brand-gold-200">
              <span className="inline-block px-2.5 py-1 rounded bg-brand-navy-900 border border-brand-gold/30">
                لاہور • کراچی • اسلام آباد • کوئٹہ • پشاور
              </span>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-brand-gold font-bold text-sm mb-4 border-b border-brand-gold/30 pb-2">
              اہم موضوعات و شعبہ جات
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/books?category=${c.id}`}
                    className="hover:text-brand-gold transition-colors block py-0.5"
                  >
                    • {c.name_ur} ({c.name_en})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support & Links */}
          <div>
            <h4 className="text-brand-gold font-bold text-sm mb-4 border-b border-brand-gold/30 pb-2">
              خدمات و رہنمائی
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/books" className="hover:text-brand-gold transition-colors block">
                  • کتب کی مکمل فہرست (All Books)
                </Link>
              </li>
              <li>
                <Link href="/account/orders" className="hover:text-brand-gold transition-colors block">
                  • اپنے آرڈر کی ترسیل چیک کریں (Track Order)
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-brand-gold transition-colors block">
                  • خریداری کی ٹوکری (Shopping Cart)
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-brand-gold transition-colors block">
                  • صارف اکاؤنٹ و پتے (My Account)
                </Link>
              </li>
              <li>
                <span className="text-gray-400 block pt-1">
                  • شروعاتی پرومو کوڈ: <span className="text-brand-gold font-mono font-bold">BISMILLAH</span> (10% رعایت)
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-brand-gold font-bold text-sm mb-4 border-b border-brand-gold/30 pb-2">
              رابطہ و معلومات
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2 space-x-reverse">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5 ml-1.5" />
                <span>{settings.general.address}</span>
              </li>

              <li className="flex items-center space-x-2 space-x-reverse">
                <Phone className="w-4 h-4 text-brand-gold shrink-0 ml-1.5" />
                <span dir="ltr">{settings.general.phone_number}</span>
              </li>

              <li className="flex items-center space-x-2 space-x-reverse">
                <Mail className="w-4 h-4 text-brand-gold shrink-0 ml-1.5" />
                <span dir="ltr">{settings.general.email}</span>
              </li>

              <li className="pt-2">
                <a
                  href={`https://wa.me/${settings.general.whatsapp_number}?text=${encodeURIComponent('السلام علیکم! مجھے الخلیل پبلشرز سے کتب کی خریداری کے بارے میں معلومات حاصل کرنی ہیں۔')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-2 rounded-lg text-xs transition-colors shadow"
                >
                  <Phone className="w-4 h-4 ml-1.5" />
                  <span>براہ راست واٹس ایپ پر رابطہ فرمائیں</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-brand-navy-800 text-center text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} الخلیل پبلشرز (Al Khalil Publishers) — جملہ حقوق بحق ناشر محفوظ ہیں۔</p>
          <div className="flex items-center space-x-4 space-x-reverse text-gray-400 text-xs">
            <span>کرنسی: پاکستانی روپیہ (PKR)</span>
            <span>•</span>
            <span>طبع و اشاعت: پاکستان</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
