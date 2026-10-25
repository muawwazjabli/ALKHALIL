import { OrderStatus, PaymentStatus, PaymentMethod } from '@/types';

export const PAKISTAN_PROVINCES = [
  { id: 'Punjab', name_ur: 'پنجاب', name_en: 'Punjab' },
  { id: 'Sindh', name_ur: 'سندھ', name_en: 'Sindh' },
  { id: 'Khyber Pakhtunkhwa', name_ur: 'خیبر پختونخوا', name_en: 'Khyber Pakhtunkhwa' },
  { id: 'Balochistan', name_ur: 'بلوچستان', name_en: 'Balochistan' },
  { id: 'Islamabad', name_ur: 'وفاقی دارالحکومت اسلام آباد', name_en: 'Islamabad Capital Territory' },
  { id: 'Azad Jammu and Kashmir', name_ur: 'آزاد جموں و کشمیر', name_en: 'Azad Jammu & Kashmir' },
  { id: 'Gilgit-Baltistan', name_ur: 'گلگت بلتستان', name_en: 'Gilgit-Baltistan' },
];

export const MAJOR_CITIES: Record<string, { name_ur: string; name_en: string }[]> = {
  Punjab: [
    { name_ur: 'لاہور', name_en: 'Lahore' },
    { name_ur: 'راولپنڈی', name_en: 'Rawalpindi' },
    { name_ur: 'فیصل آباد', name_en: 'Faisalabad' },
    { name_ur: 'ملتان', name_en: 'Multan' },
    { name_ur: 'گوجرانوالہ', name_en: 'Gujranwala' },
    { name_ur: 'سیالکوٹ', name_en: 'Sialkot' },
    { name_ur: 'بہاولپور', name_en: 'Bahawalpur' },
    { name_ur: 'سرگودھا', name_en: 'Sargodha' },
    { name_ur: 'دیگر شہر', name_en: 'Other Cities' },
  ],
  Sindh: [
    { name_ur: 'کراچی', name_en: 'Karachi' },
    { name_ur: 'حیدرآباد', name_en: 'Hyderabad' },
    { name_ur: 'سکھر', name_en: 'Sukkur' },
    { name_ur: 'لاڑکانہ', name_en: 'Larkana' },
    { name_ur: 'میرپور خاص', name_en: 'Mirpur Khas' },
    { name_ur: 'دیگر شہر', name_en: 'Other Cities' },
  ],
  'Khyber Pakhtunkhwa': [
    { name_ur: 'پشاور', name_en: 'Peshawar' },
    { name_ur: 'مردان', name_en: 'Mardan' },
    { name_ur: 'ایبٹ آباد', name_en: 'Abbottabad' },
    { name_ur: 'سوات', name_en: 'Swat' },
    { name_ur: 'ڈیرہ اسماعیل خان', name_en: 'Dera Ismail Khan' },
    { name_ur: 'دیگر شہر', name_en: 'Other Cities' },
  ],
  Balochistan: [
    { name_ur: 'کوئٹہ', name_en: 'Quetta' },
    { name_ur: 'گوادر', name_en: 'Gwadar' },
    { name_ur: 'خضدار', name_en: 'Khuzdar' },
    { name_ur: 'تربت', name_en: 'Turbat' },
    { name_ur: 'دیگر شہر', name_en: 'Other Cities' },
  ],
  Islamabad: [
    { name_ur: 'اسلام آباد', name_en: 'Islamabad' },
  ],
  'Azad Jammu and Kashmir': [
    { name_ur: 'مظفر آباد', name_en: 'Muzaffarabad' },
    { name_ur: 'میرپور', name_en: 'Mirpur' },
    { name_ur: 'راولاکوٹ', name_en: 'Rawalakot' },
    { name_ur: 'دیگر شہر', name_en: 'Other Cities' },
  ],
  'Gilgit-Baltistan': [
    { name_ur: 'گلگت', name_en: 'Gilgit' },
    { name_ur: 'سکردو', name_en: 'Skardu' },
    { name_ur: 'دیگر شہر', name_en: 'Other Cities' },
  ],
};

export const ORDER_STATUS_DETAILS: Record<OrderStatus, { ur: string; en: string; color: string; step: number }> = {
  awaiting_payment: { ur: 'منتظرِ ادائیگی', en: 'Awaiting Payment', color: 'bg-amber-100 text-amber-800 border-amber-300', step: 1 },
  payment_submitted: { ur: 'ادائیگی کی رسید جمع شدہ', en: 'Payment Submitted', color: 'bg-blue-100 text-blue-800 border-blue-300', step: 1 },
  payment_verified: { ur: 'ادائیگی کی تصدیق ہو گئی', en: 'Payment Verified', color: 'bg-emerald-100 text-emerald-800 border-emerald-300', step: 2 },
  confirmed: { ur: 'آرڈر تصدیق شدہ', en: 'Confirmed', color: 'bg-indigo-100 text-indigo-800 border-indigo-300', step: 2 },
  packing: { ur: 'پیکنگ جاری ہے', en: 'Packing', color: 'bg-purple-100 text-purple-800 border-purple-300', step: 3 },
  shipped: { ur: 'روانہ کر دیا گیا (بذریعہ کوریئر)', en: 'Shipped', color: 'bg-cyan-100 text-cyan-800 border-cyan-300', step: 4 },
  delivered: { ur: 'پہنچ گیا (مکمل)', en: 'Delivered', color: 'bg-green-100 text-green-800 border-green-300', step: 5 },
  cancelled: { ur: 'منسوخ شدہ', en: 'Cancelled', color: 'bg-rose-100 text-rose-800 border-rose-300', step: 0 },
  returned: { ur: 'واپس شدہ', en: 'Returned', color: 'bg-gray-100 text-gray-800 border-gray-300', step: 0 },
};

export const PAYMENT_STATUS_DETAILS: Record<PaymentStatus, { ur: string; en: string; color: string }> = {
  unpaid: { ur: 'غیر ادا شدہ', en: 'Unpaid', color: 'bg-red-50 text-red-700 border-red-200' },
  proof_submitted: { ur: 'رسید جمع شدہ', en: 'Proof Submitted', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  under_verification: { ur: 'زیرِ تصدیق', en: 'Under Verification', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  paid: { ur: 'ادا شدہ', en: 'Paid', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  refunded: { ur: 'واپس شدہ', en: 'Refunded', color: 'bg-gray-50 text-gray-700 border-gray-200' },
};

export const PAYMENT_METHOD_DETAILS: Record<PaymentMethod, { ur: string; en: string; icon: string }> = {
  bank_transfer: { ur: 'بینک ٹرانسفر (میزان بینک)', en: 'Bank Transfer (Meezan Bank)', icon: 'Building2' },
  easypaisa: { ur: 'ایزی پیسہ (Easypaisa)', en: 'Easypaisa', icon: 'Smartphone' },
  jazzcash: { ur: 'جاز کیش (JazzCash)', en: 'JazzCash', icon: 'PhoneCall' },
  cash_on_delivery: { ur: 'کیش آن ڈیلیوری (COD)', en: 'Cash on Delivery', icon: 'Truck' },
};

export const STOCK_STATUS_DETAILS = {
  in_stock: { ur: 'دستیاب ہے', en: 'In Stock', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  low_stock: { ur: 'اسٹاک کم ہے', en: 'Low Stock', color: 'text-amber-700 bg-amber-50 border-amber-200' },
  out_of_stock: { ur: 'اسٹاک ختم ہو گیا', en: 'Out of Stock', color: 'text-rose-700 bg-rose-50 border-rose-200' },
};
