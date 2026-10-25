'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Save,
  Plus,
  Trash2,
  Building,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  X,
  HelpCircle,
} from 'lucide-react';
import { store } from '@/lib/data/store';
import { Book, BookEdition, DiscountType } from '@/types';
import { calculateEditionFinalPrice } from '@/lib/calculations';

interface BookFormProps {
  initialBook?: Book;
}

export default function BookForm({ initialBook }: BookFormProps) {
  const router = useRouter();
  const isEditing = Boolean(initialBook);

  const categories = store.getCategories();
  const [publishers, setPublishers] = useState(store.getPublishers());
  const authors = store.getAuthors();

  // Basic info states
  const [titleUr, setTitleUr] = useState(initialBook?.title_ur || '');
  const [titleEn, setTitleEn] = useState(initialBook?.title_en || '');
  const [subtitleUr, setSubtitleUr] = useState(initialBook?.subtitle_ur || '');
  const [categoryId, setCategoryId] = useState(initialBook?.category_id || categories[0]?.id || '');
  const [selectedAuthorId, setSelectedAuthorId] = useState(
    initialBook?.authors?.[0]?.author.id || authors[0]?.id || ''
  );
  const [descriptionUr, setDescriptionUr] = useState(initialBook?.description_ur || '');
  const [language, setLanguage] = useState(initialBook?.language || 'اردو (Urdu)');
  const [bindingType, setBindingType] = useState(initialBook?.binding_type || 'مجالد (Hardback)');
  const [printingType, setPrintingType] = useState(initialBook?.printing_type || 'دو رنگہ (Two Color)');
  const [totalVolumes, setTotalVolumes] = useState(initialBook?.total_volumes || 1);
  const [pagesCount, setPagesCount] = useState<number | undefined>(initialBook?.pages_count);
  const [publicationYear, setPublicationYear] = useState<number | undefined>(initialBook?.publication_year || 2024);
  const [isbn, setIsbn] = useState(initialBook?.isbn || '');
  const [sku, setSku] = useState(initialBook?.sku || '');
  const [tagsString, setTagsString] = useState((initialBook?.tags || []).join('، '));
  const [isFeatured, setIsFeatured] = useState(initialBook?.is_featured ?? false);
  const [isPublished, setIsPublished] = useState(initialBook?.is_published ?? true);

  // Cover image
  const [coverImageUrl, setCoverImageUrl] = useState(
    initialBook?.images?.find((i) => i.image_type === 'front_cover')?.image_url ||
    initialBook?.editions?.[0]?.cover_image_url ||
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop'
  );

  // Multiple Editions state (Section 5)
  const defaultEditions: Partial<BookEdition>[] = initialBook?.editions?.length
    ? initialBook.editions
    : [
        {
          id: `ed-${Date.now()}`,
          publisher_id: publishers[0]?.id || '',
          edition_name: 'معیاری ایڈیشن (Standard Edition)',
          volumes: 1,
          binding_type: 'مجالد (Hardback)',
          printing_type: 'دو رنگہ (Two Color)',
          purchase_cost: 800,
          regular_price: 1200,
          discount_type: 'percentage' as DiscountType,
          discount_value: 10,
          final_price: 1080,
          weight_grams: 650,
          stock_quantity: 25,
          low_stock_threshold: 10,
          reserved_quantity: 0,
          is_active: true,
          sku: 'AK-ED-01',
        },
      ];

  const [editions, setEditions] = useState<Partial<BookEdition>[]>(defaultEditions);

  // Quick Add Publisher Modal state
  const [showAddPublisherModal, setShowAddPublisherModal] = useState(false);
  const [newPubNameUr, setNewPubNameUr] = useState('');
  const [newPubNameEn, setNewPubNameEn] = useState('');

  const [formError, setFormError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Handle edition changes
  const handleEditionChange = (index: number, field: keyof BookEdition, value: any) => {
    const updated = [...editions];
    const ed = { ...updated[index], [field]: value };

    // Auto-calculate final price on price/discount changes
    if (field === 'regular_price' || field === 'discount_type' || field === 'discount_value') {
      const regPrice = field === 'regular_price' ? Number(value) : (ed.regular_price || 0);
      const discType = field === 'discount_type' ? (value as DiscountType) : (ed.discount_type || 'percentage');
      const discVal = field === 'discount_value' ? Number(value) : (ed.discount_value || 0);

      const { finalPrice } = calculateEditionFinalPrice(regPrice, discType, discVal);
      ed.final_price = finalPrice;
    }

    updated[index] = ed;
    setEditions(updated);
  };

  const handleAddEdition = () => {
    const newEd: Partial<BookEdition> = {
      id: `ed-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      publisher_id: publishers[0]?.id || '',
      edition_name: `ایڈیشن نمبر ${editions.length + 1}`,
      volumes: totalVolumes,
      binding_type: bindingType,
      printing_type: printingType,
      purchase_cost: 500,
      regular_price: 800,
      discount_type: 'percentage',
      discount_value: 0,
      final_price: 800,
      weight_grams: 500,
      stock_quantity: 20,
      low_stock_threshold: 10,
      reserved_quantity: 0,
      is_active: true,
      sku: `AK-ED-0${editions.length + 1}`,
    };
    setEditions([...editions, newEd]);
  };

  const handleRemoveEdition = (index: number) => {
    if (editions.length <= 1) {
      alert('کم از کم ایک ایڈیشن ہونا ضروری ہے۔');
      return;
    }
    setEditions(editions.filter((_, i) => i !== index));
  };

  // Quick add publisher handler
  const handleSaveNewPublisher = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPubNameUr.trim()) return;

    const created = store.addPublisher({
      name_ur: newPubNameUr.trim(),
      name_en: newPubNameEn.trim(),
      is_active: true,
    });

    setPublishers(store.getPublishers());
    setShowAddPublisherModal(false);
    setNewPubNameUr('');
    setNewPubNameEn('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!titleUr.trim()) {
      setFormError('کتاب کا اردو نام درج فرمائیں۔');
      return;
    }

    if (editions.length === 0) {
      setFormError('کم از کم ایک ایڈیشن یا ناشر کی تفصیل درکار ہے۔');
      return;
    }

    setIsSaving(true);

    try {
      const selectedAuthorObj = authors.find((a) => a.id === selectedAuthorId);
      const parsedTags = tagsString
        .split(/[،,]/)
        .map((t) => t.trim())
        .filter(Boolean);

      const bookPayload: Partial<Book> & { title_ur: string } = {
        id: initialBook?.id,
        title_ur: titleUr.trim(),
        title_en: titleEn.trim() || undefined,
        subtitle_ur: subtitleUr.trim() || undefined,
        category_id: categoryId,
        description_ur: descriptionUr.trim(),
        language,
        binding_type: bindingType,
        printing_type: printingType,
        total_volumes: Number(totalVolumes),
        pages_count: pagesCount ? Number(pagesCount) : undefined,
        publication_year: publicationYear ? Number(publicationYear) : undefined,
        isbn: isbn.trim() || undefined,
        sku: sku.trim() || undefined,
        tags: parsedTags,
        is_featured: isFeatured,
        is_published: isPublished,
        authors: selectedAuthorObj
          ? [{ author: selectedAuthorObj, role: 'author' }]
          : [],
        images: [
          {
            id: `img-${Date.now()}`,
            book_id: initialBook?.id || '',
            image_type: 'front_cover',
            image_url: coverImageUrl.trim(),
            sort_order: 1,
            created_at: new Date().toISOString(),
          },
        ],
        editions: editions as BookEdition[],
      };

      store.saveBook(bookPayload);
      router.push('/admin/books');
    } catch (err: any) {
      setFormError(err?.message || 'کتاب محفوظ کرنے میں خرابی پیش آئی۔');
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-right">
      {formError && (
        <div className="bg-rose-50 border border-rose-300 text-rose-800 p-4 rounded-xl flex items-center space-x-2 space-x-reverse text-xs">
          <AlertCircle className="w-5 h-5 ml-2 text-rose-600 shrink-0" />
          <span>{formError}</span>
        </div>
      )}

      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        <div>
          <h2 className="font-nastaliq text-2xl font-bold text-brand-navy-950">
            {initialBook ? `کتاب میں ترمیم: ${initialBook.title_ur}` : 'نئی کتاب کا اندراج (Add Book)'}
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            کتاب کی بنیادی معلومات، ناشرین، قیمتیں اور اسٹاک ایڈیشنز درج فرمائیں
          </p>
        </div>

        <button
          type="submit"
          disabled={isSaving}
          className="bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-bold px-6 py-2.5 rounded-xl text-xs flex items-center shadow transition-colors"
        >
          <Save className="w-4 h-4 ml-1.5" />
          <span>{isSaving ? 'محفوظ ہو رہا ہے...' : 'کتاب محفوظ فرمائیں (Save Book)'}</span>
        </button>
      </div>

      {/* Basic Book Details (Section 5) */}
      <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4">
        <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950 border-b pb-2">
          1. کتاب کی بنیادی معلومات (Basic Book Information)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="sm:col-span-2">
            <label className="font-semibold text-gray-700 block mb-1">
              کتاب کا نام اردو میں (Book Title Urdu) <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              required
              value={titleUr}
              onChange={(e) => setTitleUr(e.target.value)}
              placeholder="مثلاً: تفسیر معارف القرآن..."
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold text-right font-nastaliq text-base"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 block mb-1">
              کتاب کا انگریزی نام (English Title)
            </label>
            <input
              type="text"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
              placeholder="Tafseer Maarif-ul-Quran"
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold text-left font-sans"
              dir="ltr"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 block mb-1">
              ذیلی عنوان (Subtitle)
            </label>
            <input
              type="text"
              value={subtitleUr}
              onChange={(e) => setSubtitleUr(e.target.value)}
              placeholder="مختصر و سلیس اردو ترجمہ و تشریح"
              className="w-full p-2.5 rounded-lg border border-gray-300 text-right"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 block mb-1">
              موضوع / زمرہ (Category) <span className="text-rose-600">*</span>
            </label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-gray-300 bg-white"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name_ur} ({c.name_en})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-semibold text-gray-700 block mb-1">
              مصنف (Author) <span className="text-rose-600">*</span>
            </label>
            <select
              value={selectedAuthorId}
              onChange={(e) => setSelectedAuthorId(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-gray-300 bg-white"
            >
              {authors.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name_ur}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-semibold text-gray-700 block mb-1">زبان (Language)</label>
            <input
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-gray-300 text-right"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 block mb-1">کل جلدیں (Volumes)</label>
            <input
              type="number"
              min="1"
              value={totalVolumes}
              onChange={(e) => setTotalVolumes(Number(e.target.value))}
              className="w-full p-2.5 rounded-lg border border-gray-300 text-right"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 block mb-1">بائنڈنگ کی قسم (Binding)</label>
            <input
              type="text"
              value={bindingType}
              onChange={(e) => setBindingType(e.target.value)}
              placeholder="مجالد ہارڈ بیک / پیپر بیک"
              className="w-full p-2.5 rounded-lg border border-gray-300 text-right"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 block mb-1">طباعت کی قسم (Printing)</label>
            <input
              type="text"
              value={printingType}
              onChange={(e) => setPrintingType(e.target.value)}
              placeholder="دو رنگہ / چار رنگہ آرٹ پیپر"
              className="w-full p-2.5 rounded-lg border border-gray-300 text-right"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 block mb-1">صفحات کی تعداد (Pages)</label>
            <input
              type="number"
              value={pagesCount || ''}
              onChange={(e) => setPagesCount(e.target.value ? Number(e.target.value) : undefined)}
              className="w-full p-2.5 rounded-lg border border-gray-300 text-right"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 block mb-1">سال اشاعت (Year)</label>
            <input
              type="number"
              value={publicationYear || ''}
              onChange={(e) => setPublicationYear(e.target.value ? Number(e.target.value) : undefined)}
              className="w-full p-2.5 rounded-lg border border-gray-300 text-right"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 block mb-1">شمارہ / کوڈ (SKU / Code)</label>
            <input
              type="text"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              placeholder="AK-BOOK-001"
              className="w-full p-2.5 rounded-lg border border-gray-300 text-right font-mono"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="font-semibold text-gray-700 block mb-1">
              تلاش کے ٹیگز (Search Tags) — قومہ سے الگ کریں
            </label>
            <input
              type="text"
              value={tagsString}
              onChange={(e) => setTagsString(e.target.value)}
              placeholder="تفسیر، قرآن، فقہ، مفتی تقی عثمانی"
              className="w-full p-2.5 rounded-lg border border-gray-300 text-right"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="font-semibold text-gray-700 block mb-1">
              سرورق کی تصویر کا ربط (Cover Image URL / Storage Path)
            </label>
            <input
              type="url"
              value={coverImageUrl}
              onChange={(e) => setCoverImageUrl(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-gray-300 text-left font-mono text-xs"
              dir="ltr"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="font-semibold text-gray-700 block mb-1">
              کتاب کی مفصل تفصیل (Detailed Description)
            </label>
            <textarea
              rows={4}
              value={descriptionUr}
              onChange={(e) => setDescriptionUr(e.target.value)}
              placeholder="کتاب کا موضوع، علمی اہمیت، مفسر/مصنف کا تعارف اور خصوصیات درج فرمائیں..."
              className="w-full p-2.5 rounded-lg border border-gray-300 text-right font-nastaliq text-sm"
            />
          </div>

          <div className="flex items-center space-x-4 space-x-reverse pt-2">
            <label className="flex items-center space-x-2 space-x-reverse cursor-pointer font-semibold text-brand-navy-950">
              <input
                type="checkbox"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
                className="rounded border-gray-300 text-brand-gold focus:ring-brand-gold w-4 h-4 ml-1"
              />
              <span>نمایاں کتاب (Featured on Homepage)</span>
            </label>

            <label className="flex items-center space-x-2 space-x-reverse cursor-pointer font-semibold text-brand-navy-950">
              <input
                type="checkbox"
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
                className="rounded border-gray-300 text-brand-gold focus:ring-brand-gold w-4 h-4 ml-1"
              />
              <span>شائع شدہ (Published in Store)</span>
            </label>
          </div>
        </div>
      </div>

      {/* Multiple Publishers & Editions Section (Section 5 Requirement) */}
      <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-3">
          <div>
            <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950">
              2. مختلف ناشرین و ایڈیشنز (Multi-Publisher Editions)
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              ایک ہی کتاب کے مختلف اشاعتی اداروں کے ایڈیشنز، قیمتیں، وزن اور اسٹاک کا انتظام
            </p>
          </div>

          <div className="flex items-center space-x-2 space-x-reverse">
            <button
              type="button"
              onClick={() => setShowAddPublisherModal(true)}
              className="bg-gray-100 hover:bg-gray-200 text-brand-navy-950 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center border"
            >
              <Building className="w-3.5 h-3.5 ml-1 text-brand-gold" />
              <span>نیا ناشر شامل کریں</span>
            </button>

            <button
              type="button"
              onClick={handleAddEdition}
              className="bg-brand-navy-950 hover:bg-brand-navy-900 text-brand-gold font-bold px-3 py-1.5 rounded-lg text-xs flex items-center"
            >
              <Plus className="w-3.5 h-3.5 ml-1" />
              <span>مزید ایڈیشن شامل کریں</span>
            </button>
          </div>
        </div>

        {/* Editions Cards */}
        <div className="space-y-6">
          {editions.map((ed, idx) => (
            <div
              key={ed.id || idx}
              className="bg-brand-navy-50/50 p-5 rounded-2xl border-2 border-brand-gold/40 space-y-4 text-xs"
            >
              <div className="flex items-center justify-between border-b border-brand-gold/20 pb-2">
                <span className="font-bold text-brand-navy-950 text-sm">
                  ایڈیشن #{idx + 1}: {ed.edition_name || 'نیا ایڈیشن'}
                </span>
                {editions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveEdition(idx)}
                    className="text-rose-600 hover:text-rose-800 text-xs flex items-center font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5 ml-1" />
                    <span>حذف کریں</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Publisher */}
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">ناشر (Publisher):</label>
                  <select
                    value={ed.publisher_id}
                    onChange={(e) => handleEditionChange(idx, 'publisher_id', e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 bg-white"
                  >
                    {publishers.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name_ur}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Edition Name */}
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">ایڈیشن کا نام:</label>
                  <input
                    type="text"
                    value={ed.edition_name}
                    onChange={(e) => handleEditionChange(idx, 'edition_name', e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 text-right"
                  />
                </div>

                {/* Purchase Cost (Admin only) */}
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">
                    خریداری لاگت (Purchase Cost PKR):
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={ed.purchase_cost}
                    onChange={(e) => handleEditionChange(idx, 'purchase_cost', Number(e.target.value))}
                    className="w-full p-2 rounded-lg border border-gray-300 text-right font-mono"
                  />
                </div>

                {/* Regular Selling Price */}
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">
                    فروخت کی اصل قیمت (Regular Price PKR):
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={ed.regular_price}
                    onChange={(e) => handleEditionChange(idx, 'regular_price', Number(e.target.value))}
                    className="w-full p-2 rounded-lg border border-gray-300 text-right font-mono font-bold"
                  />
                </div>

                {/* Discount Type */}
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">رعایت کی قسم:</label>
                  <select
                    value={ed.discount_type}
                    onChange={(e) => handleEditionChange(idx, 'discount_type', e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 bg-white"
                  >
                    <option value="percentage">فیصد (Percentage %)</option>
                    <option value="fixed">مقررہ رقم (Fixed PKR)</option>
                  </select>
                </div>

                {/* Discount Value */}
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">رعایت کی مقدار:</label>
                  <input
                    type="number"
                    min="0"
                    value={ed.discount_value}
                    onChange={(e) => handleEditionChange(idx, 'discount_value', Number(e.target.value))}
                    className="w-full p-2 rounded-lg border border-gray-300 text-right font-mono"
                  />
                </div>

                {/* Auto Calculated Final Price */}
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">
                    حتمی رعایتی قیمت (Final Price PKR):
                  </label>
                  <div className="w-full p-2 rounded-lg bg-emerald-50 border border-emerald-300 font-bold text-emerald-800 text-sm">
                    روپے {ed.final_price?.toLocaleString()}
                  </div>
                </div>

                {/* Weight in grams */}
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">وزن گرام میں (Weight Grams):</label>
                  <input
                    type="number"
                    min="1"
                    value={ed.weight_grams}
                    onChange={(e) => handleEditionChange(idx, 'weight_grams', Number(e.target.value))}
                    className="w-full p-2 rounded-lg border border-gray-300 text-right font-mono"
                  />
                </div>

                {/* Stock Quantity */}
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">موجود اسٹاک (Stock Qty):</label>
                  <input
                    type="number"
                    min="0"
                    value={ed.stock_quantity}
                    onChange={(e) => handleEditionChange(idx, 'stock_quantity', Number(e.target.value))}
                    className="w-full p-2 rounded-lg border border-gray-300 text-right font-mono font-bold"
                  />
                </div>

                {/* Low Stock Threshold */}
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">کم اسٹاک حد (Low Threshold):</label>
                  <input
                    type="number"
                    min="1"
                    value={ed.low_stock_threshold || 10}
                    onChange={(e) => handleEditionChange(idx, 'low_stock_threshold', Number(e.target.value))}
                    className="w-full p-2 rounded-lg border border-gray-300 text-right font-mono"
                  />
                </div>

                {/* SKU */}
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">ایڈیشن SKU:</label>
                  <input
                    type="text"
                    value={ed.sku || ''}
                    onChange={(e) => handleEditionChange(idx, 'sku', e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 text-right font-mono"
                  />
                </div>

                {/* Active Toggle */}
                <div className="flex items-center pt-5">
                  <label className="flex items-center space-x-2 space-x-reverse cursor-pointer font-semibold text-gray-800">
                    <input
                      type="checkbox"
                      checked={ed.is_active}
                      onChange={(e) => handleEditionChange(idx, 'is_active', e.target.checked)}
                      className="rounded text-brand-gold focus:ring-brand-gold w-4 h-4 ml-1"
                    />
                    <span>فعال برائے فروخت (Active)</span>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Add Publisher Modal */}
      {showAddPublisherModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 text-right shadow-2xl border-2 border-brand-gold/40">
            <div className="flex items-center justify-between border-b pb-2">
              <h4 className="font-nastaliq text-lg font-bold text-brand-navy-950">نیا ناشر شامل کریں</h4>
              <button type="button" onClick={() => setShowAddPublisherModal(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-semibold block mb-1">ناشر کا نام اردو میں:</label>
                <input
                  type="text"
                  required
                  placeholder="مثلاً: دار العلوم کراچی..."
                  value={newPubNameUr}
                  onChange={(e) => setNewPubNameUr(e.target.value)}
                  className="w-full p-2 border rounded-lg text-right"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">ناشر کا نام انگریزی میں:</label>
                <input
                  type="text"
                  placeholder="Maktaba Maariful Quran"
                  value={newPubNameEn}
                  onChange={(e) => setNewPubNameEn(e.target.value)}
                  className="w-full p-2 border rounded-lg text-left"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddPublisherModal(false)}
                className="px-4 py-2 rounded-lg text-xs bg-gray-100 text-gray-700"
              >
                منسوخ
              </button>
              <button
                type="button"
                onClick={handleSaveNewPublisher}
                className="px-4 py-2 rounded-lg text-xs bg-brand-gold text-brand-navy-950 font-bold"
              >
                ناشر محفوظ کریں
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
