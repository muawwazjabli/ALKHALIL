'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Search,
  ShoppingCart,
  User,
  ShieldAlert,
  Phone,
  Menu,
  X,
  BookOpen,
  Bookmark,
  ChevronDown,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { store } from '@/lib/data/store';

export default function Header() {
  const router = useRouter();
  const { totalItemsCount } = useCart();
  const { user, isAdmin, role, switchRole } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const categories = store.getCategories().slice(0, 7);
  const settings = store.getSiteSettings();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/books?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B132B] text-white shadow-card border-b border-brand-gold/30">
      {/* Top Banner */}
      <div className="bg-[#060A17] text-brand-gold-200 text-xs py-1.5 px-4 border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-3 space-x-reverse">
            <span className="font-nastaliq text-sm">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</span>
            <span className="hidden md:inline text-brand-gold-300/60">•</span>
            <span className="hidden md:inline text-gray-300">
              اسلامی کتب، تفاسیر و احادیث کا معتمد علمی اشاعتی ادارہ
            </span>
          </div>

          <div className="flex items-center space-x-4 space-x-reverse text-xs">
            {/* Quick WhatsApp Link */}
            <a
              href={`https://wa.me/${settings.general.whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 ml-1" />
              <span>واٹس ایپ آرڈر: {settings.general.whatsapp_number}</span>
            </a>

            {/* Role Switcher Pill for paired testing */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="bg-brand-navy-700 hover:bg-brand-navy-600 text-brand-gold-200 px-2 py-0.5 rounded text-[11px] flex items-center border border-brand-gold/40"
              >
                <span>کردار: {role === 'super_admin' ? 'Super Admin' : role === 'customer' ? 'Customer' : role}</span>
                <ChevronDown className="w-3 h-3 mr-1" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute left-0 mt-1 w-44 bg-brand-navy-900 border border-brand-gold/40 rounded shadow-xl py-1 text-xs z-50">
                  <button
                    onClick={() => { switchRole('customer'); setRoleDropdownOpen(false); }}
                    className="w-full text-right px-3 py-1.5 hover:bg-brand-navy-800 text-gray-200 block"
                  >
                    عام گاہک (Customer)
                  </button>
                  <button
                    onClick={() => { switchRole('super_admin'); setRoleDropdownOpen(false); }}
                    className="w-full text-right px-3 py-1.5 hover:bg-brand-navy-800 text-amber-300 font-semibold block"
                  >
                    مدیر اعلیٰ (Super Admin)
                  </button>
                  <button
                    onClick={() => { switchRole('inventory_manager'); setRoleDropdownOpen(false); }}
                    className="w-full text-right px-3 py-1.5 hover:bg-brand-navy-800 text-blue-300 block"
                  >
                    انوینٹری منیجر (Inventory)
                  </button>
                  <button
                    onClick={() => { switchRole('order_manager'); setRoleDropdownOpen(false); }}
                    className="w-full text-right px-3 py-1.5 hover:bg-brand-navy-800 text-green-300 block"
                  >
                    آرڈر منیجر (Orders)
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center space-x-3 space-x-reverse group shrink-0">
            <div className="relative w-12 h-12 bg-white/10 rounded-full p-1 border border-brand-gold/50 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="الخلیل پبلشرز لوگو"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-nastaliq text-2xl font-bold text-brand-gold-300 group-hover:text-brand-gold-200 transition-colors tracking-wide leading-tight">
                الخلیل پبلشرز
              </span>
              <span className="text-[11px] text-gray-300 tracking-wider uppercase font-sans">
                Al Khalil Publishers
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="کتاب کا نام، مصنف، ناشر یا موضوع تلاش فرمائیں..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 pr-10 pl-4 rounded-full bg-brand-navy-800/90 text-white placeholder-gray-400 border border-brand-gold/40 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold text-sm shadow-inner text-right"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-gold hover:text-brand-gold-300 transition-colors"
                aria-label="تلاش کریں"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 space-x-reverse shrink-0">
            {/* Admin Dashboard Pill if Admin */}
            {isAdmin && (
              <Link
                href="/admin"
                className="hidden lg:flex items-center bg-brand-gold hover:bg-brand-gold-600 text-brand-navy-950 font-bold px-3 py-1.5 rounded-lg text-xs transition-colors shadow-sm"
              >
                <ShieldAlert className="w-4 h-4 ml-1.5 text-brand-navy-900" />
                <span>ایڈمن ڈیش بورڈ</span>
              </Link>
            )}

            {/* Account / Login */}
            <Link
              href="/account"
              className="flex items-center text-gray-200 hover:text-brand-gold transition-colors p-2 rounded-lg hover:bg-brand-navy-800"
              title="میرا اکاؤنٹ"
            >
              <User className="w-5 h-5 ml-1.5 text-brand-gold" />
              <span className="hidden sm:inline text-xs font-medium">
                {user ? user.profile.full_name.split(' ')[0] : 'لاگ ان'}
              </span>
            </Link>

            {/* Cart Link with Badge */}
            <Link
              href="/cart"
              className="relative flex items-center bg-brand-navy-800 hover:bg-brand-navy-700 text-white px-3.5 py-2 rounded-full border border-brand-gold/40 transition-colors group"
              title="خریداری کی ٹوکری"
            >
              <ShoppingCart className="w-5 h-5 text-brand-gold group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline mr-2 text-xs font-medium text-gray-200">ٹوکری</span>
              {totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -left-1.5 bg-brand-gold text-brand-navy-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {totalItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2"
              aria-label="موبائل مینو کھولیں"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="mt-3 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="کتاب کا نام، مصنف یا موضوع تلاش کریں..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 pr-10 pl-4 rounded-lg bg-brand-navy-800 text-white placeholder-gray-400 border border-brand-gold/40 text-sm text-right"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-gold"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Navigation Links Bar */}
      <nav className="bg-brand-navy-900/90 border-t border-brand-navy-700/60 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-medium">
          <div className="flex items-center space-x-1 space-x-reverse py-2 overflow-x-auto scrollbar-none">
            <Link
              href="/books"
              className="px-3 py-1.5 rounded hover:bg-brand-navy-800 text-brand-gold hover:text-brand-gold-200 transition-colors flex items-center font-semibold"
            >
              <BookOpen className="w-3.5 h-3.5 ml-1" />
              <span>تمام کتب (All Books)</span>
            </Link>

            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/books?category=${cat.id}`}
                className="px-3 py-1.5 rounded hover:bg-brand-navy-800 text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                {cat.name_ur}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3 space-x-reverse py-2 shrink-0">
            <Link
              href="/account/orders"
              className="text-gray-300 hover:text-brand-gold transition-colors flex items-center"
            >
              <Bookmark className="w-3.5 h-3.5 ml-1 text-brand-gold" />
              <span>آرڈر ٹریکنگ (Track Order)</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-navy-950 border-t border-brand-gold/30 px-4 py-4 space-y-3">
          <Link
            href="/books"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-brand-gold font-bold py-1.5 border-b border-brand-navy-800"
          >
            تمام کتب دیکھیں
          </Link>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/books?category=${cat.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-gray-300 hover:text-brand-gold py-1"
              >
                {cat.name_ur}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-brand-navy-800 space-y-2">
            {isAdmin && (
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-brand-gold text-brand-navy-950 font-bold py-2 rounded text-xs"
              >
                ایڈمن پورٹل پر جائیں
              </Link>
            )}
            <Link
              href="/account/orders"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs text-gray-300 py-1"
            >
              اپنے آرڈرز اور ترسیل چیک کریں
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
