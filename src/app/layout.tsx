import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';

export const metadata: Metadata = {
  title: 'الخلیل پبلشرز | Al Khalil Publishers — مستند اسلامی کتب و اشاعتی مرکز',
  description: 'الخلیل پبلشرز (Al Khalil Publishers) — قرآنی علوم، تفاسیر، کتب حدیث، فقہ و فتاویٰ، تاریخ اسلام اور درسی کتب کی معیاری طباعت و اشاعت۔ پورے پاکستان میں ہوم ڈیلیوری۔',
  keywords: [
    'الخلیل پبلشرز',
    'Al Khalil Publishers',
    'Islamic Books Pakistan',
    'اردو اسلامی کتب',
    'معارف القرآن',
    'صحیح بخاری',
    'درس نظامی',
    'لاہور اردو بازار کتب',
  ],
  authors: [{ name: 'Al Khalil Publishers' }],
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ur" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FCFBF7] text-[#0F172A] selection:bg-brand-gold selection:text-brand-navy-950 font-sans">
        <AuthProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
