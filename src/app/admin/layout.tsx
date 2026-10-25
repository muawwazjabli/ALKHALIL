'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BookOpen,
  Boxes,
  Truck,
  TicketPercent,
  ShoppingCart,
  BarChart3,
  Settings,
  ShieldCheck,
  LogOut,
  Store,
  FolderTree,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, role, switchRole } = useAuth();

  const navItems = [
    { href: '/admin', labelUr: 'ڈیش بورڈ (Overview)', icon: LayoutDashboard },
    { href: '/admin/books', labelUr: 'کتب و ایڈیشنز (Books)', icon: BookOpen },
    { href: '/admin/categories', labelUr: 'موضوعات (Categories)', icon: FolderTree },
    { href: '/admin/inventory', labelUr: 'اسٹاک و انوینٹری (Stock)', icon: Boxes },
    { href: '/admin/orders', labelUr: 'آرڈرز مینجمنٹ (Orders)', icon: ShoppingCart },
    { href: '/admin/shipping', labelUr: 'شپنگ و ترسیل (Shipping)', icon: Truck },
    { href: '/admin/promo-codes', labelUr: 'پرومو کوڈز (Coupons)', icon: TicketPercent },
    { href: '/admin/reports', labelUr: 'کاروباری رپورٹس (Reports)', icon: BarChart3 },
    { href: '/admin/settings', labelUr: 'اسٹور سیٹنگز (Settings)', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F8] text-[#0F172A] flex flex-col lg:flex-row text-right">
      {/* Admin Sidebar */}
      <aside className="w-full lg:w-64 bg-[#0B132B] text-white flex flex-col justify-between shrink-0 border-l border-brand-gold/30">
        <div>
          {/* Admin Header */}
          <div className="p-5 border-b border-brand-navy-800 flex items-center justify-between">
            <Link href="/admin" className="flex items-center space-x-3 space-x-reverse">
              <div className="w-9 h-9 bg-brand-gold/20 rounded-lg p-1 border border-brand-gold flex items-center justify-center">
                <Image src="/logo.png" alt="الخلیل" width={28} height={28} className="object-contain" />
              </div>
              <div>
                <span className="font-nastaliq text-lg font-bold text-brand-gold-300 block leading-tight">
                  الخلیل ایڈمن
                </span>
                <span className="text-[10px] text-gray-400 font-sans uppercase">
                  Management Portal
                </span>
              </div>
            </Link>

            <Link
              href="/"
              target="_blank"
              title="ویب سائٹ دیکھیں"
              className="text-gray-400 hover:text-brand-gold p-1.5 rounded-lg hover:bg-brand-navy-800"
            >
              <Store className="w-4 h-4" />
            </Link>
          </div>

          {/* User Role Pill */}
          <div className="p-3 mx-4 my-3 bg-brand-navy-900 rounded-xl border border-brand-gold/20 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 space-x-reverse">
              <ShieldCheck className="w-4 h-4 text-brand-gold ml-1.5" />
              <div>
                <span className="text-gray-300 font-semibold block text-[11px]">
                  {user?.profile.full_name || 'Admin'}
                </span>
                <span className="text-brand-gold-300 text-[10px] uppercase font-mono">
                  {role}
                </span>
              </div>
            </div>

            <button
              onClick={() => switchRole(role === 'super_admin' ? 'customer' : 'super_admin')}
              className="text-[10px] text-gray-400 hover:text-white underline"
            >
              کردار بدلیں
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1 text-xs font-medium">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href !== '/admin' && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 space-x-reverse px-3.5 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-brand-gold text-brand-navy-950 font-bold shadow-sm'
                      : 'text-gray-300 hover:bg-brand-navy-800 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ml-2.5 ${isActive ? 'text-brand-navy-950' : 'text-brand-gold'}`} />
                  <span>{item.labelUr}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-brand-navy-800 text-xs text-gray-400 flex items-center justify-between">
          <Link href="/" className="hover:text-brand-gold flex items-center">
            <Store className="w-3.5 h-3.5 ml-1" />
            <span>اسٹور پر واپس جائیں</span>
          </Link>
        </div>
      </aside>

      {/* Main Admin Area */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          {children}
        </div>
      </main>
    </div>
  );
}
