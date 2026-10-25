'use client';

import React, { useState } from 'react';
import { Settings, Save, CheckCircle2, Building2, Phone, Mail, MapPin } from 'lucide-react';
import { store } from '@/lib/data/store';
import { SiteSettings } from '@/types';

export default function AdminSettingsPage() {
  const currentSettings = store.getSiteSettings();

  const [storeNameUr, setStoreNameUr] = useState(currentSettings.general.store_name_ur);
  const [storeNameEn, setStoreNameEn] = useState(currentSettings.general.store_name_en);
  const [whatsappNumber, setWhatsappNumber] = useState(currentSettings.general.whatsapp_number);
  const [phoneNumber, setPhoneNumber] = useState(currentSettings.general.phone_number);
  const [email, setEmail] = useState(currentSettings.general.email);
  const [address, setAddress] = useState(currentSettings.general.address);
  const [lowStockThreshold, setLowStockThreshold] = useState(
    currentSettings.general.default_low_stock_threshold || 10
  );

  // Payment settings
  const [bankName, setBankName] = useState(currentSettings.payment_instructions.bank_name);
  const [accountTitle, setAccountTitle] = useState(currentSettings.payment_instructions.account_title);
  const [accountNumber, setAccountNumber] = useState(currentSettings.payment_instructions.account_number);
  const [iban, setIban] = useState(currentSettings.payment_instructions.iban);
  const [easypaisaTitle, setEasypaisaTitle] = useState(currentSettings.payment_instructions.easypaisa_title);
  const [easypaisaNumber, setEasypaisaNumber] = useState(currentSettings.payment_instructions.easypaisa_number);
  const [jazzcashTitle, setJazzcashTitle] = useState(currentSettings.payment_instructions.jazzcash_title);
  const [jazzcashNumber, setJazzcashNumber] = useState(currentSettings.payment_instructions.jazzcash_number);
  const [instructionsUr, setInstructionsUr] = useState(currentSettings.payment_instructions.instructions_ur);

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();

    store.updateSiteSettings({
      general: {
        store_name_ur: storeNameUr.trim(),
        store_name_en: storeNameEn.trim(),
        tagline_ur: currentSettings.general.tagline_ur,
        whatsapp_number: whatsappNumber.trim(),
        phone_number: phoneNumber.trim(),
        email: email.trim(),
        address: address.trim(),
        default_currency: 'PKR',
        default_low_stock_threshold: Number(lowStockThreshold),
      },
      payment_instructions: {
        bank_name: bankName.trim(),
        account_title: accountTitle.trim(),
        account_number: accountNumber.trim(),
        iban: iban.trim(),
        easypaisa_title: easypaisaTitle.trim(),
        easypaisa_number: easypaisaNumber.trim(),
        jazzcash_title: jazzcashTitle.trim(),
        jazzcash_number: jazzcashNumber.trim(),
        instructions_ur: instructionsUr.trim(),
      },
    });

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSaveSettings} className="space-y-6 text-right">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="font-nastaliq text-3xl font-bold text-brand-navy-950">
            اسٹور سیٹنگز و ترتیبات (Store Settings)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            برانڈ معلومات، واٹس ایپ نمبر، بینک اکاؤنٹس اور ڈیفالٹ حدیں
          </p>
        </div>

        <button
          type="submit"
          className="bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-bold px-6 py-2.5 rounded-xl text-xs flex items-center shadow transition-colors"
        >
          <Save className="w-4 h-4 ml-1.5" />
          <span>سیٹنگز محفوظ فرمائیں (Save Settings)</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-3.5 rounded-xl text-xs flex items-center">
          <CheckCircle2 className="w-4 h-4 ml-2 text-emerald-600" />
          <span>تمام سیٹنگز اور اکاؤنٹس کامیابی کے ساتھ اپ ڈیٹ ہو گئے ہیں۔</span>
        </div>
      )}

      {/* Brand & Profile Section */}
      <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4">
        <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950 border-b pb-2">
          1. برانڈ و رابطہ معلومات (Brand & Contacts)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="font-semibold block mb-1">اسٹور کا نام (اردو):</label>
            <input
              type="text"
              required
              value={storeNameUr}
              onChange={(e) => setStoreNameUr(e.target.value)}
              className="w-full p-2.5 border rounded-lg text-right font-nastaliq text-base"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">اسٹور کا نام (English):</label>
            <input
              type="text"
              required
              value={storeNameEn}
              onChange={(e) => setStoreNameEn(e.target.value)}
              className="w-full p-2.5 border rounded-lg text-left font-sans"
              dir="ltr"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">واٹس ایپ آرڈر نمبر (بین الاقوامی فارمیٹ):</label>
            <input
              type="text"
              required
              placeholder="923001234567"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              className="w-full p-2.5 border rounded-lg text-left font-mono"
              dir="ltr"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">فون نمبر برائے رابطہ:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2.5 border rounded-lg text-left font-mono"
              dir="ltr"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">ای میل ایڈریس:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 border rounded-lg text-left font-mono"
              dir="ltr"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">ڈیفالٹ کم اسٹاک الرٹ حد (Low Stock Alert):</label>
            <input
              type="number"
              min="1"
              value={lowStockThreshold}
              onChange={(e) => setLowStockThreshold(Number(e.target.value))}
              className="w-full p-2.5 border rounded-lg text-right font-mono"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="font-semibold block mb-1">دفتر و گودام کا پتہ (Store Physical Address):</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2.5 border rounded-lg text-right"
            />
          </div>
        </div>
      </div>

      {/* Payment Accounts & Instructions (Section 13) */}
      <div className="bg-white p-6 rounded-2xl border border-brand-gold/30 shadow-card space-y-4">
        <h3 className="font-nastaliq text-lg font-bold text-brand-navy-950 border-b pb-2">
          2. بینک و موبائل اکاؤنٹس کی تفصیلات (Payment Accounts Configuration)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div>
            <label className="font-semibold block mb-1">بینک کا نام:</label>
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full p-2 border rounded-lg text-right"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">اکاؤنٹ ٹائٹل (Title):</label>
            <input
              type="text"
              value={accountTitle}
              onChange={(e) => setAccountTitle(e.target.value)}
              className="w-full p-2 border rounded-lg text-right"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">اکاؤنٹ نمبر:</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full p-2 border rounded-lg text-left font-mono"
              dir="ltr"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">IBAN نمبر:</label>
            <input
              type="text"
              value={iban}
              onChange={(e) => setIban(e.target.value)}
              className="w-full p-2 border rounded-lg text-left font-mono"
              dir="ltr"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">ایزی پیسہ عنوان:</label>
            <input
              type="text"
              value={easypaisaTitle}
              onChange={(e) => setEasypaisaTitle(e.target.value)}
              className="w-full p-2 border rounded-lg text-right"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">ایزی پیسہ نمبر:</label>
            <input
              type="text"
              value={easypaisaNumber}
              onChange={(e) => setEasypaisaNumber(e.target.value)}
              className="w-full p-2 border rounded-lg text-left font-mono"
              dir="ltr"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">جاز کیش عنوان:</label>
            <input
              type="text"
              value={jazzcashTitle}
              onChange={(e) => setJazzcashTitle(e.target.value)}
              className="w-full p-2 border rounded-lg text-right"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">جاز کیش نمبر:</label>
            <input
              type="text"
              value={jazzcashNumber}
              onChange={(e) => setJazzcashNumber(e.target.value)}
              className="w-full p-2 border rounded-lg text-left font-mono"
              dir="ltr"
            />
          </div>

          <div className="sm:col-span-4">
            <label className="font-semibold block mb-1">گاہک کے لیے ادائیگی کی ہدایات (Instructions):</label>
            <textarea
              rows={2}
              value={instructionsUr}
              onChange={(e) => setInstructionsUr(e.target.value)}
              className="w-full p-2.5 border rounded-lg text-right font-nastaliq text-xs"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
