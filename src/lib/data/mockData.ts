import {
  Category,
  Author,
  Publisher,
  Book,
  ShippingRate,
  PromoCode,
  Order,
  SiteSettings,
} from '@/types';

export const INITIAL_CATEGORIES: Category[] = [
  {
    "id": "c-1",
    "name_ur": "قرآن مجید",
    "name_en": "Holy Quran",
    "slug": "quran-kareem",
    "description_ur": "قرآن کریم کے خوبصورت نسخے، تجویدی و لفظی ترجمہ اور قرآنی سورتیں",
    "sort_order": 1,
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "c-2",
    "name_ur": "تفاسیر",
    "name_en": "Tafseer",
    "slug": "tafseer",
    "description_ur": "مستند اور جامع تفاسیر قرآن مع حواشی و فوائد",
    "sort_order": 2,
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "c-3",
    "name_ur": "حدیث شریف",
    "name_en": "Hadith",
    "slug": "hadith",
    "description_ur": "صحاح ستہ، شروح حدیث اور منتخب احادیث کے مجموعات",
    "sort_order": 3,
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "c-4",
    "name_ur": "فقہ و فتاویٰ",
    "name_en": "Fiqh & Fatawa",
    "slug": "fiqh-fatawa",
    "description_ur": "فقہی مسائل، بنیادی احکام، جدید مسائل اور فتاویٰ کے مجموعے",
    "sort_order": 4,
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "c-5",
    "name_ur": "عقائد و کلام",
    "name_en": "Aqeedah",
    "slug": "aqeedah",
    "description_ur": "اہل سنت والجماعت کے مستند عقائد اور تقابل ادیان",
    "sort_order": 5,
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "c-6",
    "name_ur": "سیرت النبی ﷺ",
    "name_en": "Seerat-un-Nabi",
    "slug": "seerat-un-nabi",
    "description_ur": "سید المرسلین حضرت محمد مصطفیٰ ﷺ کی حیات طیبہ اور شمائل نبوی",
    "sort_order": 6,
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "c-7",
    "name_ur": "تاریخ اسلام",
    "name_en": "Islamic History",
    "slug": "islamic-history",
    "description_ur": "خلافت راشدہ اور تاریخ اسلام کے درخشاں ادوار",
    "sort_order": 7,
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "c-8",
    "name_ur": "عربی کتب",
    "name_en": "Arabic Books",
    "slug": "arabic-books",
    "description_ur": "کتب تراث، تفاسیر و احادیث مع شروح عربی و متون",
    "sort_order": 8,
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "c-9",
    "name_ur": "دینی نصاب",
    "name_en": "Dars-e-Nizami",
    "slug": "dars-e-nizami",
    "description_ur": "درس نظامی و وفاق المدارس کے نصابی کتب و شروحات",
    "sort_order": 9,
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "c-10",
    "name_ur": "بچوں کی اسلامی کتب",
    "name_en": "Children Islamic Books",
    "slug": "children-islamic",
    "description_ur": "بچوں کی اسلامی تربیت، دعائیں اور دلچسپ سچی کہانیاں",
    "sort_order": 10,
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "c-11",
    "name_ur": "اصلاح و تربیت",
    "name_en": "Self Rectification",
    "slug": "islah-o-tarbiyat",
    "description_ur": "تصوف، تزکیہ نفس اور اخلاقی تربیت",
    "sort_order": 11,
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "c-12",
    "name_ur": "لغات و قواعد",
    "name_en": "Dictionaries & Grammar",
    "slug": "dictionaries-grammar",
    "description_ur": "عربی، اردو، فارسی لغات اور صرف و نحو کے اصول",
    "sort_order": 12,
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  }
];

export const INITIAL_PUBLISHERS: Publisher[] = [
  {
    "id": "pub-alkhalil",
    "name_ur": "الخلیل پبلشرز",
    "name_en": "Al Khalil Publishers",
    "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
    "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "pub-maarif",
    "name_ur": "مکتبۃ معارف القرآن (دار العلوم کراچی)",
    "name_en": "Maktaba Maariful Quran",
    "description": "دار العلوم کراچی کی مستند علمی و تفسیری مطبوعات",
    "contact_info": "کورنگی کراچی",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "pub-bushra",
    "name_ur": "مکتبۃ البشریٰ",
    "name_en": "Maktabatul Bushra",
    "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
    "contact_info": "کراچی، پاکستان",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "pub-darussalam",
    "name_ur": "دار السلام پبلیکیشنز",
    "name_en": "Darussalam Publications",
    "description": "عالمی سطح پر معروف اسلامی اشاعتی ادارہ",
    "contact_info": "لاہور، پاکستان",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "pub-taj",
    "name_ur": "تاج کمپنی لمیٹڈ",
    "name_en": "Taj Company Limited",
    "description": "برصغیر میں قرآن مجید کی اشاعت کا قدیم و معتبر ترین ادارہ",
    "contact_info": "انارکلی، لاہور",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "pub-qadimi",
    "name_ur": "قدیمی کتب خانہ",
    "name_en": "Qadimi Kutub Khana",
    "description": "درس نظامی کی قدیم عربی و اردو کتب کا مرکز",
    "contact_info": "آرام باغ روڈ، کراچی",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "pub-zamzam",
    "name_ur": "زمزم پبلشرز",
    "name_en": "Zam Zam Publishers",
    "description": "کتب احادیث اور عربی شروحات کا ممتاز اشاعتی ادارہ",
    "contact_info": "اردو بازار، کراچی",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "pub-dar-kutub",
    "name_ur": "دار الکتب العلمیہ بیروت",
    "name_en": "Dar Al-Kotob Al-Ilmiyah Beirut",
    "description": "عالم اسلام میں عربی تراث و مصادر کی عظیم بین الاقوامی اشاعت گاہ",
    "contact_info": "بیروت، لبنان",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  }
];

export const INITIAL_AUTHORS: Author[] = [
  {
    "id": "auth-taqi",
    "name_ur": "شیخ الاسلام مفتی محمد تقی عثمانی",
    "name_en": "Mufti Muhammad Taqi Usmani",
    "bio_ur": "معروف عالم دین، نائب صدر دار العلوم کراچی و سابق جج شرعی اپیلٹ بینچ سپریم کورٹ آف پاکستان",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-shafi",
    "name_ur": "مفتی اعظم مفتی محمد شفیع عثمانیؒ",
    "name_en": "Mufti Muhammad Shafi Usmani",
    "bio_ur": "بانی دار العلوم کراچی، سابق مفتی اعظم دار العلوم دیوبند و مصنف تفسیر معارف القرآن",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-bukhari",
    "name_ur": "امام محمد بن اسماعیل بخاریؒ",
    "name_en": "Imam Muhammad Al-Bukhari",
    "bio_ur": "امیر المومنین فی الحدیث اور مصنف الجامع الصحیح (صحیح بخاری شریف)",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-muslim",
    "name_ur": "امام مسلم بن الحجاج النیشابوریؒ",
    "name_en": "Imam Muslim ibn al-Hajjaj",
    "bio_ur": "عظیم محدث، امام و مصنف صحیح مسلم شریف",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-abudawood",
    "name_ur": "امام ابو داود سلیمان بن اشعث سجستانیؒ",
    "name_en": "Imam Abu Dawood",
    "bio_ur": "امام الحدیث اور مصنف سنن ابی داود شریف",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-tirmidhi",
    "name_ur": "امام ابو عیسیٰ محمد بن عیسیٰ ترمذیؒ",
    "name_en": "Imam Al-Tirmidhi",
    "bio_ur": "امام الحدیث، مصنف جامع الترمذی و شمائل نبویہ",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-nasai",
    "name_ur": "امام احمد بن شعیب نسائیؒ",
    "name_en": "Imam Al-Nasa'i",
    "bio_ur": "امام جلیل، مصنف سنن نسائی شریف (المجتبیٰ)",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-ibnmajah",
    "name_ur": "امام محمد بن یزید ابن ماجہ قزوینیؒ",
    "name_en": "Imam Ibn Majah",
    "bio_ur": "عظیم محدث اور مصنف سنن ابن ماجہ شریف",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-malik",
    "name_ur": "امام دار الہجرۃ مالک بن انسؒ",
    "name_en": "Imam Malik ibn Anas",
    "bio_ur": "امام مدینہ منورہ اور مصنف موطا امام مالک",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-nawawi",
    "name_ur": "امام محیی الدین یحییٰ بن شرف نوویؒ",
    "name_en": "Imam Yahya ibn Sharaf al-Nawawi",
    "bio_ur": "عظیم فقیہ و محدث، مصنف ریاض الصالحین، اربعین نووی و شرح مسلم",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-ibnhajar",
    "name_ur": "حافظ احمد بن علی ابن حجر عسقلانیؒ",
    "name_en": "Hafiz Ibn Hajar al-Asqalani",
    "bio_ur": "خاتمۃ الحفاظ، شارح صحیح بخاری (فتح الباری) و مصنف بلوغ المرام",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-tabari",
    "name_ur": "امام ابو جعفر محمد بن جریر طبریؒ",
    "name_en": "Imam Ibn Jarir al-Tabari",
    "bio_ur": "امام المفسرین و المؤرخین، مصنف جامع البیان و تاریخ طبری",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-ibnkathir",
    "name_ur": "عماد الدین اسماعیل بن عمر ابن کثیرؒ",
    "name_en": "Imam Ibn Kathir",
    "bio_ur": "جلیل القدر مفسر و مورخ، مصنف تفسیر ابن کثیر و البدایہ والنہایہ",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-qurtubi",
    "name_ur": "امام ابو عبد اللہ محمد بن احمد قرطبیؒ",
    "name_en": "Imam Al-Qurtubi",
    "bio_ur": "مفسر کبیر اور مصنف الجامع لاحکام القرآن (تفسیر قرطبی)",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-suyuti",
    "name_ur": "علامہ جلال الدین عبد الرحمن سیوطیؒ",
    "name_en": "Jalal al-Din al-Suyuti",
    "bio_ur": "کثیر التصانیف امام، مفسر و مصنف الاتقان فی علوم القرآن و تفسیر جلالین",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-marghinani",
    "name_ur": "علامہ برہان الدین علی بن ابی بکر مرغینانیؒ",
    "name_en": "Burhan al-Din al-Marghinani",
    "bio_ur": "عظیم فقیہ حنفی اور مصنف کتاب الہدایۃ فی شرح بدایۃ المبتدی",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-nasafi",
    "name_ur": "امام ابو البرکات عبد اللہ بن احمد نسفیؒ",
    "name_en": "Imam Al-Nasafi",
    "bio_ur": "صاحب مدارک التنزیل، کنز الدقائق و المنار فی اصول الفقہ",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-ibnabidin",
    "name_ur": "علامہ سید محمد امین ابن عابدین شامیؒ",
    "name_en": "Ibn Abidin al-Shami",
    "bio_ur": "محقق حنفی اور مصنف رد المحتار علی الدر المختار (فتاویٰ شامی)",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-kasani",
    "name_ur": "امام علاء الدین ابو بکر بن مسعود کاسانیؒ",
    "name_en": "Ala al-Din al-Kasani",
    "bio_ur": "ملک العلماء اور مصنف کتاب بدائع الصنائع فی ترتیب الشرائع",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-quduri",
    "name_ur": "امام ابو الحسین احمد بن محمد قدوریؒ",
    "name_en": "Imam Al-Quduri",
    "bio_ur": "فقیہ عراق اور مصنف المتن المعتمد مختصر القدوری",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-shurunbulali",
    "name_ur": "علامہ حسن بن عمار شرنبلالیؒ",
    "name_en": "Hasan al-Shurunbulali",
    "bio_ur": "فقیہ حنفی اور مصنف نور الایضاح و مراقی الفلاح",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-ibnhisham",
    "name_ur": "امام جمال الدین عبد اللہ بن یوسف ابن ہشام انصاریؒ",
    "name_en": "Ibn Hisham al-Ansari",
    "bio_ur": "امام النحو العربی، مصنف قطر الندیٰ و مغنی اللبیب",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-ibnmalik",
    "name_ur": "امام محمد بن عبد اللہ ابن مالک اندلسیؒ",
    "name_en": "Ibn Malik al-Andalusi",
    "bio_ur": "عظیم نحوی و لغوی، ناظم منظومۃ الفیۃ ابن مالک فی النحو",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-ibnaqil",
    "name_ur": "قاضی عبد اللہ بن عبد الرحمن ابن عقیلؒ",
    "name_en": "Ibn Aqil",
    "bio_ur": "شارح الفیہ ابن مالک اور جلیل القدر عالم لغت و نحو",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-charthawali",
    "name_ur": "مولانا مشتاق احمد چرتھاولیؒ",
    "name_en": "Maulana Mushtaq Ahmad Charthawali",
    "bio_ur": "استاذ العلوم النحویہ، مصنف تسہیل النحو و تسہیل الصرف",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-kairanwi",
    "name_ur": "مولانا وحید الزمان قاسمی کیرانویؒ",
    "name_en": "Maulana Wahid-uz-Zaman Kairanawi",
    "bio_ur": "استاذ دار العلوم دیوبند اور مصنف القاموس الوحید عربی اردو لغت",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-bilyawi",
    "name_ur": "مولانا عبد الحفیظ بلیاویؒ",
    "name_en": "Maulana Abdul Hafeez Bilyawi",
    "bio_ur": "جامع القوامیس اور مصنف مصباح اللغات",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-firozabadi",
    "name_ur": "علامہ مجد الدین محمد بن یعقوب فیروز آبادیؒ",
    "name_en": "Al-Fairuzabadi",
    "bio_ur": "امام اللغۃ العربیۃ، صاحب القاموس المحیط",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-ibnmanzur",
    "name_ur": "علامہ ابو الفضل جمال الدین ابن منظور افریقیؒ",
    "name_en": "Ibn Manzur",
    "bio_ur": "لغوی اعظم اور مصنف لسان العرب (15 جلدیں)",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-thanvi",
    "name_ur": "حکیم الامت مولانا اشرف علی تھانویؒ",
    "name_en": "Maulana Ashraf Ali Thanvi",
    "bio_ur": "مجدد الملت، مصنف تفسیر بیان القرآن، بہشتی زیور اور مناجات مقبول",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-ahmadraza",
    "name_ur": "امام احمد رضا خان قادری بریلویؒ",
    "name_en": "Imam Ahmad Raza Khan",
    "bio_ur": "عظیم فقیہ، مترجم کنز الایمان اور مصنف فتاویٰ رضویہ (30 جلدیں)",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-kifayatullah",
    "name_ur": "مفتی اعظم مفتی کفایت اللہ دہلویؒ",
    "name_en": "Mufti Kifayatullah Dehlawi",
    "bio_ur": "فقیہ الہند، مصنف کفایت المفتی اور کتاب تعلیم الاسلام",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-ludhianvi-rashid",
    "name_ur": "مفتی رشید احمد لدھیانویؒ",
    "name_en": "Mufti Rasheed Ahmad Ludhianvi",
    "bio_ur": "بانی دار الافتاء والارشاد کراچی اور مصنف احسن الفتاویٰ",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-ludhianvi-yusuf",
    "name_ur": "مولانا محمد یوسف لدھیانوی شہیدؒ",
    "name_en": "Maulana Muhammad Yousuf Ludhianvi",
    "bio_ur": "فاضل محقق، داعی اور مصنف آپ کے مسائل اور ان کا حل (10 جلدیں)",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-ghazali",
    "name_ur": "حجۃ الاسلام امام ابو حامد محمد بن محمد غزالیؒ",
    "name_en": "Imam Abu Hamid Al-Ghazali",
    "bio_ur": "عظیم مجدد، فقیہ و مصلح، مصنف احیاء علوم الدین و کیمیائے سعادت",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-nadwi",
    "name_ur": "مولانا سید ابو الحسن علی حسنی ندویؒ",
    "name_en": "Maulana Abul Hasan Ali Nadwi",
    "bio_ur": "عظیم مفکر اسلام، داعی و مصنف قصص النبیین و ماذا خسر العالم بانحطاط المسلمین",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-kandhlawi",
    "name_ur": "مولانا محمد ادریس کاندھلویؒ",
    "name_en": "Maulana Muhammad Idris Kandhlawi",
    "bio_ur": "شیخ الحدیث و التفسیر، مصنف سیرت مصطفیٰ ﷺ و التعلیق الصبیح",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-mubarakpuri",
    "name_ur": "مولانا صفی الرحمن مبارکپوریؒ",
    "name_en": "Maulana Safi-ur-Rahman Mubarakpuri",
    "bio_ur": "بین الاقوامی سیرت نگار اور مصنف سیرت الرحیق المختوم",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-shibli",
    "name_ur": "علامہ شبلی نعمانی و سید سلیمان ندویؒ",
    "name_en": "Allama Shibli Nomani & Sulaiman Nadwi",
    "bio_ur": "مصنفین سیرت النبی ﷺ (7 جلدیں)",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-tabrizi",
    "name_ur": "علامہ ولی الدین محمد بن عبد اللہ خطیب تبریزیؒ",
    "name_en": "Al-Khatib al-Tabrizi",
    "bio_ur": "جامع الحدیث اور مصنف مشکوٰۃ المصابیح",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-jassas",
    "name_ur": "امام ابو بکر احمد بن علی رازی جصاصؒ",
    "name_en": "Imam Abu Bakr al-Jassas",
    "bio_ur": "فقیہ حنفی اور مصنف احکام القرآن (3 جلدیں)",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-zuheili",
    "name_ur": "ڈاکٹر وہبہ مصطفیٰ زحیلیؒ",
    "name_en": "Dr. Wahbah al-Zuhayli",
    "bio_ur": "عصر حاضر کے عظیم فقیہ شام اور مصنف الفقہ الاسلامی وادلتہ (10 جلدیں)",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-darimi",
    "name_ur": "امام عبد اللہ بن عبد الرحمن دارمیؒ",
    "name_en": "Imam Al-Darimi",
    "bio_ur": "عظیم محدث اور مصنف سنن دارمی",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-mundhiri",
    "name_ur": "حافظ عبد العظیم بن عبد القوی منذریؒ",
    "name_en": "Hafiz Al-Mundhiri",
    "bio_ur": "محدث جلیل اور مصنف کتاب الترغیب والترہیب",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  },
  {
    "id": "auth-nomani",
    "name_ur": "مولانا محمد منظور نعمانیؒ",
    "name_en": "Maulana Muhammad Manzoor Nomani",
    "bio_ur": "فاضل مدبر اور مصنف معارف الحدیث (4 جلدیں)",
    "is_active": true,
    "created_at": "2026-10-25T08:13:52.885Z"
  }
];

export const INITIAL_BOOKS: Book[] = [
  {
    "id": "book-quran-taj-16",
    "title_ur": "قرآن مجید ۱۶ سطری (تاج کمپنی)",
    "title_en": "Holy Quran 16 Lines (Taj Company Classic)",
    "subtitle_ur": "حفظ و تلاوت کے لیے برصغیر کا مقبول ترین اور واضح ترین رسم الخط",
    "category_id": "c-1",
    "description_ur": "تاج کمپنی لمیٹڈ کا تاریخی اور معتبر ترین سولہ سطری قرآن مجید۔ حفاظ کرام کے لیے نہایت موزوں جس میں ہر صفحہ آیت کے اختتام پر ختم ہوتا ہے (آیت معطوفہ و غیر معطوفہ کی مکمل رعایت)۔ موٹے اور جلی نقوش، خوبصورت ایرانی و لاہوری قرطاس پر دیدہ زیب طباعت۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد ہارڈ بیک (Hardcover Rexine)",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 1,
    "pages_count": 548,
    "publication_year": 2024,
    "isbn": "978-969-564-001-5",
    "sku": "AK-QR-001",
    "tags": [
      "قرآن مجید",
      "16 سطری",
      "تاج کمپنی",
      "حفظ قرآن"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3120,
    "created_at": "2026-10-25T08:13:52.882Z",
    "updated_at": "2026-10-25T08:13:52.882Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-quran-taj-16-front",
        "book_id": "book-quran-taj-16",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.882Z"
      },
      {
        "id": "img-book-quran-taj-16-gallery",
        "book_id": "book-quran-taj-16",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.882Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-quran-taj-16-1",
        "book_id": "book-quran-taj-16",
        "publisher_id": "pub-taj",
        "publisher": {
          "id": "pub-taj",
          "name_ur": "تاج کمپنی لمیٹڈ",
          "name_en": "Taj Company Limited",
          "description": "برصغیر میں قرآن مجید کی اشاعت کا قدیم و معتبر ترین ادارہ",
          "contact_info": "انارکلی، لاہور",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "تاج کمپنی اوریجنل مجالد (فینسی گولڈن کور)",
        "volumes": 1,
        "binding_type": "ہارڈ بیک لیدر نما",
        "printing_type": "دو رنگہ آرٹ پیپر",
        "purchase_cost": 850,
        "regular_price": 1400,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1260,
        "weight_grams": 950,
        "stock_quantity": 45,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-QR-001-TAJ",
        "barcode": "89640001000",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.882Z",
        "updated_at": "2026-10-25T08:13:52.882Z"
      },
      {
        "id": "ed-book-quran-taj-16-2",
        "book_id": "book-quran-taj-16",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پریمیم ایڈیشن مع تجویدی علامات",
        "volumes": 1,
        "binding_type": "تجلید فاخرہ مع ریگزین باکس",
        "printing_type": "چار رنگہ امپورٹڈ قرطاس",
        "purchase_cost": 1100,
        "regular_price": 1800,
        "discount_type": "percentage",
        "discount_value": 15,
        "final_price": 1530,
        "weight_grams": 1050,
        "stock_quantity": 30,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-QR-001-ALKHALIL",
        "barcode": "89640001001",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.882Z",
        "updated_at": "2026-10-25T08:13:52.882Z"
      }
    ]
  },
  {
    "id": "book-quran-madina-15",
    "title_ur": "مصحف مدینہ منورہ ۱۵ سطری (رسم عثمانی)",
    "title_en": "Mushaf Madinah 15 Lines (Uthmani Script)",
    "subtitle_ur": "مجمع الملک فہد مدینہ منورہ کے مطبع کے مطابق عالمی معیار کا نسخہ",
    "category_id": "c-1",
    "description_ur": "خادم الحرمین الشریفین مجمع الملک فہد لطباعۃ المصحف الشریف مدینہ منورہ کے اصلی رسم عثمانی پر مبنی 15 سطری نفیس مصحف۔ ہر صفحہ آیت کے اختتام پر مکمل ہوتا ہے۔ نفاست، صحتِ متن اور بین الاقوامی طباعتی معیار کا بہترین شاہکار۔",
    "language": "عربی (Arabic)",
    "binding_type": "تجلید فاخرہ شامی",
    "printing_type": "دو رنگہ طباعت فاخرہ",
    "total_volumes": 1,
    "pages_count": 604,
    "publication_year": 2024,
    "isbn": "978-969-564-002-2",
    "sku": "AK-QR-002",
    "tags": [
      "مصحف مدینہ",
      "15 سطری",
      "رسم عثمانی",
      "مدینہ منورہ"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 2450,
    "created_at": "2026-10-25T08:13:52.882Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-quran-madina-15-front",
        "book_id": "book-quran-madina-15",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-quran-madina-15-gallery",
        "book_id": "book-quran-madina-15",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-quran-madina-15-1",
        "book_id": "book-quran-madina-15",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پاکٹ و میڈیم سائز ایڈیشن",
        "volumes": 1,
        "binding_type": "تجلید فاخرہ مع نشان بند",
        "printing_type": "دو رنگہ کریم پیپر",
        "purchase_cost": 900,
        "regular_price": 1500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1350,
        "weight_grams": 850,
        "stock_quantity": 35,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-QR-002-ALKHALIL",
        "barcode": "89640001010",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.882Z",
        "updated_at": "2026-10-25T08:13:52.882Z"
      },
      {
        "id": "ed-book-quran-madina-15-2",
        "book_id": "book-quran-madina-15",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ مدنی طرز نفیس",
        "volumes": 1,
        "binding_type": "ہارڈ باؤنڈ کلاسک",
        "printing_type": "اعلیٰ کوالٹی مونو پیپر",
        "purchase_cost": 1000,
        "regular_price": 1650,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1485,
        "weight_grams": 900,
        "stock_quantity": 22,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-QR-002-BUSHRA",
        "barcode": "89640001011",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.882Z",
        "updated_at": "2026-10-25T08:13:52.882Z"
      }
    ]
  },
  {
    "id": "book-quran-tajweedi-color",
    "title_ur": "قرآن مجید تجویدی رنگین (قواعد تجوید مع رنگین اشارات)",
    "title_en": "Color Coded Tajweed Quran",
    "subtitle_ur": "مخارج اور احکام تجوید کے رنگین اشارات کے ساتھ آسان ترتیل",
    "category_id": "c-1",
    "description_ur": "تجوید کے قواعد مثلاً غنہ، اخفاء، ادغام، اقلاب اور مدات کو مختلف رنگوں سے واضح کیا گیا ہے تاکہ ہر عام و خاص تلاوت کے دوران قواعد تجوید کی صحت مند رعایت کر سکے۔ نیچے حاشیے پر رنگوں کی مکمل رہنمائی اور مخارج کے نقشہ جات بھی شامل ہیں۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فینسی کشن کور",
    "printing_type": "ملٹی کلر دیدہ زیب طباعت",
    "total_volumes": 1,
    "pages_count": 620,
    "publication_year": 2024,
    "isbn": "978-969-564-003-9",
    "sku": "AK-QR-003",
    "tags": [
      "تجویدی قرآن",
      "رنگین قرآن",
      "قواعد تجوید"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1890,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-quran-tajweedi-color-front",
        "book_id": "book-quran-tajweedi-color",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-quran-tajweedi-color-gallery",
        "book_id": "book-quran-tajweedi-color",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-quran-tajweedi-color-1",
        "book_id": "book-quran-tajweedi-color",
        "publisher_id": "pub-darussalam",
        "publisher": {
          "id": "pub-darussalam",
          "name_ur": "دار السلام پبلیکیشنز",
          "name_en": "Darussalam Publications",
          "description": "عالمی سطح پر معروف اسلامی اشاعتی ادارہ",
          "contact_info": "لاہور، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار السلام تجویدی کلر ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک کشن کور",
        "printing_type": "فور کلر امپورٹڈ لیمینیشن",
        "purchase_cost": 1400,
        "regular_price": 2200,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1980,
        "weight_grams": 1200,
        "stock_quantity": 25,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-QR-003-DARUSSALAM",
        "barcode": "89640001020",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-aasan-tarjuma-quran",
    "title_ur": "آسان ترجمہ قرآن مع مختصر حواشی (۳ جلدیں)",
    "title_en": "Aasan Tarjuma Quran (3 Volumes) - Mufti Taqi Usmani",
    "subtitle_ur": "شیخ الاسلام مفتی محمد تقی عثمانی کا عصر حاضر کا سب سے معتبر اور سلیس ترجمہ",
    "category_id": "c-1",
    "description_ur": "شیخ الاسلام مفتی محمد تقی عثمانی دامت برکاتہم کا ترجمہ قرآن دور جدید کا مقبول ترین ترجمہ ہے۔ زبان اتنی سلیس اور دلنشین ہے کہ ہر عام قاری بھی آسانی سے مفہوم سمجھ لیتا ہے۔ حواشی میں ضروری تفسیری نکات، ربط آیات اور معترضین کے شکوک کے مسکت جوابات فراہم کیے گئے ہیں۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد فینسی ہارڈ بائنڈنگ",
    "printing_type": "چار رنگہ (Four Color Art Paper)",
    "total_volumes": 3,
    "pages_count": 1850,
    "publication_year": 2024,
    "isbn": "978-969-564-205-0",
    "sku": "AK-TQ-002",
    "tags": [
      "ترجمہ قرآن",
      "مفتی تقی عثمانی",
      "آسان ترجمہ",
      "قرآن مجید"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3840,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-taqi",
          "name_ur": "شیخ الاسلام مفتی محمد تقی عثمانی",
          "name_en": "Mufti Muhammad Taqi Usmani",
          "bio_ur": "معروف عالم دین، نائب صدر دار العلوم کراچی و سابق جج شرعی اپیلٹ بینچ سپریم کورٹ آف پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-aasan-tarjuma-quran-front",
        "book_id": "book-aasan-tarjuma-quran",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-aasan-tarjuma-quran-gallery",
        "book_id": "book-aasan-tarjuma-quran",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-aasan-tarjuma-quran-1",
        "book_id": "book-aasan-tarjuma-quran",
        "publisher_id": "pub-maarif",
        "publisher": {
          "id": "pub-maarif",
          "name_ur": "مکتبۃ معارف القرآن (دار العلوم کراچی)",
          "name_en": "Maktaba Maariful Quran",
          "description": "دار العلوم کراچی کی مستند علمی و تفسیری مطبوعات",
          "contact_info": "کورنگی کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ معارف القرآن (3 جلدیں فینسی باکس)",
        "volumes": 3,
        "binding_type": "مجالد نفیس گولڈن بارڈر",
        "printing_type": "دو رنگہ اعلیٰ معیار",
        "purchase_cost": 2600,
        "regular_price": 4200,
        "discount_type": "percentage",
        "discount_value": 12,
        "final_price": 3696,
        "weight_grams": 3400,
        "stock_quantity": 28,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TQ-002-MAARIF",
        "barcode": "89640001030",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "ed-book-aasan-tarjuma-quran-2",
        "book_id": "book-aasan-tarjuma-quran",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز لگژری ایڈیشن (3 جلدیں)",
        "volumes": 3,
        "binding_type": "مجالد چمڑہ نما گولڈن ایمبوسنگ",
        "printing_type": "چار رنگہ آرٹ پیپر",
        "purchase_cost": 3200,
        "regular_price": 4950,
        "discount_type": "percentage",
        "discount_value": 15,
        "final_price": 4208,
        "weight_grams": 3600,
        "stock_quantity": 20,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TQ-002-ALKHALIL",
        "barcode": "89640001031",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-tarjuma-jalandhari",
    "title_ur": "ترجمہ قرآن مجید - مولانا فتح محمد جالندھری",
    "title_en": "Quran Urdu Translation - Maulana Fateh Muhammad Jalandhari",
    "subtitle_ur": "اردو زبان کا مستند، کلاسیکی اور فصیح و بلیغ ترجمہ",
    "category_id": "c-1",
    "description_ur": "مولانا فتح محمد جالندھری کا ترجمہ برصغیر پاک و ہند کے مستند ترین تراجم میں شمار ہوتا ہے۔ اسلوب سادگی، متانت اور ادبیت کا حسین امتزاج ہے۔ لفظی صحت کے ساتھ ساتھ زبان کا بہاؤ اس قدر قدرتی ہے کہ پڑھتے ہوئے مفہوم دل پر اثر انداز ہوتا ہے۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد کلاسک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 720,
    "publication_year": 2023,
    "isbn": "978-969-564-004-6",
    "sku": "AK-QR-004",
    "tags": [
      "ترجمہ جالندھری",
      "فتح محمد جالندھری",
      "اردو ترجمہ قرآن"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1540,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-tarjuma-jalandhari-front",
        "book_id": "book-tarjuma-jalandhari",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-tarjuma-jalandhari-gallery",
        "book_id": "book-tarjuma-jalandhari",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-tarjuma-jalandhari-1",
        "book_id": "book-tarjuma-jalandhari",
        "publisher_id": "pub-taj",
        "publisher": {
          "id": "pub-taj",
          "name_ur": "تاج کمپنی لمیٹڈ",
          "name_en": "Taj Company Limited",
          "description": "برصغیر میں قرآن مجید کی اشاعت کا قدیم و معتبر ترین ادارہ",
          "contact_info": "انارکلی، لاہور",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "تاج کمپنی اسٹینڈرڈ مجالد ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک",
        "printing_type": "دو رنگہ طباعت",
        "purchase_cost": 800,
        "regular_price": 1350,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1215,
        "weight_grams": 1100,
        "stock_quantity": 35,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-QR-004-TAJ",
        "barcode": "89640001040",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-kanz-ul-iman",
    "title_ur": "کنز الایمان فی ترجمۃ القرآن مع خزائن العرفان",
    "title_en": "Kanz-ul-Iman with Khazain-ul-Irfan",
    "subtitle_ur": "امام احمد رضا خان بریلوی کا پروقار ترجمہ مع حاشیہ صدر الافاضل نعیم الدین مراد آبادی",
    "category_id": "c-1",
    "description_ur": "اعلیٰ حضرت امام احمد رضا خان قادری بریلویؒ کا مشہور زمانہ اور عقیدت و محبت سے لبریز ترجمہ کنز الایمان، جس کے حواشی خزائن العرفان صدر الافاضل علامہ نعیم الدین مراد آبادیؒ نے تحریر کیے۔ مقام رسالت، تعظیم انبیاء اور عقائد اہل سنت کا دلائل کے ساتھ اثبات۔",
    "language": "عربی مع اردو ترجمہ و حاشیہ",
    "binding_type": "مجالد فینسی ہارڈ بائنڈنگ",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 1,
    "pages_count": 980,
    "publication_year": 2024,
    "isbn": "978-969-564-005-3",
    "sku": "AK-QR-005",
    "tags": [
      "کنز الایمان",
      "احمد رضا خان",
      "خزائن العرفان",
      "اہل سنت"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1720,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-ahmadraza",
          "name_ur": "امام احمد رضا خان قادری بریلویؒ",
          "name_en": "Imam Ahmad Raza Khan",
          "bio_ur": "عظیم فقیہ، مترجم کنز الایمان اور مصنف فتاویٰ رضویہ (30 جلدیں)",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-kanz-ul-iman-front",
        "book_id": "book-kanz-ul-iman",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-kanz-ul-iman-gallery",
        "book_id": "book-kanz-ul-iman",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-kanz-ul-iman-1",
        "book_id": "book-kanz-ul-iman",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس مجالد ایڈیشن",
        "volumes": 1,
        "binding_type": "مجالد چمڑہ نما گولڈن",
        "printing_type": "دو رنگہ نفیس کاغذ",
        "purchase_cost": 1300,
        "regular_price": 2100,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1890,
        "weight_grams": 1450,
        "stock_quantity": 24,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-QR-005-ALKHALIL",
        "barcode": "89640001050",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-maarif-ul-quran",
    "title_ur": "تفسیر معارف القرآن (۸ جلدیں مکمل سیٹ)",
    "title_en": "Tafseer Maarif-ul-Quran (8 Volumes Complete Set)",
    "subtitle_ur": "مفتی اعظم پاکستان مفتی محمد شفیع عثمانیؒ کا شاہکار تفسیری ذخیرہ",
    "category_id": "c-2",
    "description_ur": "تفسیر معارف القرآن اردو زبان میں لکھی گئی تفاسیر میں سب سے زیادہ نافع اور مقبول عام تفسیر ہے۔ اس میں نہ صرف آیات قرآنی کا عام فہم خلاصہ پیش کیا گیا ہے بلکہ ہر آیت سے فقہی احکام، اخلاقی رہنمائی، باطنی تزکیہ اور جدید دور کے مسائل کا حل قرآن و سنت کی روشنی میں پیش کیا گیا ہے۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد نفیس (8 جلدیں کلاسک ہارڈ بیک)",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 8,
    "pages_count": 5800,
    "publication_year": 2024,
    "isbn": "978-969-564-101-2",
    "sku": "AK-TF-001",
    "tags": [
      "تفسیر",
      "معارف القرآن",
      "مفتی شفیع",
      "مکمل سیٹ",
      "دار العلوم کراچی"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 4200,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-shafi",
          "name_ur": "مفتی اعظم مفتی محمد شفیع عثمانیؒ",
          "name_en": "Mufti Muhammad Shafi Usmani",
          "bio_ur": "بانی دار العلوم کراچی، سابق مفتی اعظم دار العلوم دیوبند و مصنف تفسیر معارف القرآن",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-maarif-ul-quran-front",
        "book_id": "book-maarif-ul-quran",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-maarif-ul-quran-gallery",
        "book_id": "book-maarif-ul-quran",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-maarif-ul-quran-1",
        "book_id": "book-maarif-ul-quran",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل نفیس ایڈیشن (8 جلدیں مع گولڈن باکس)",
        "volumes": 8,
        "binding_type": "مجالد چمڑہ نما گولڈن ایمبوسنگ",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 11000,
        "regular_price": 16500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 14850,
        "weight_grams": 9500,
        "stock_quantity": 24,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TF-001-ALKHALIL",
        "barcode": "89640001060",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "ed-book-maarif-ul-quran-2",
        "book_id": "book-maarif-ul-quran",
        "publisher_id": "pub-maarif",
        "publisher": {
          "id": "pub-maarif",
          "name_ur": "مکتبۃ معارف القرآن (دار العلوم کراچی)",
          "name_en": "Maktaba Maariful Quran",
          "description": "دار العلوم کراچی کی مستند علمی و تفسیری مطبوعات",
          "contact_info": "کورنگی کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ معارف القرآن دار العلوم کراچی (8 جلدیں)",
        "volumes": 8,
        "binding_type": "مجالد ہارڈ بیک کلاسک",
        "printing_type": "یک رنگہ سفید کاغذ",
        "purchase_cost": 9500,
        "regular_price": 14000,
        "discount_type": "percentage",
        "discount_value": 5,
        "final_price": 13300,
        "weight_grams": 9200,
        "stock_quantity": 12,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TF-001-MAARIF",
        "barcode": "89640001061",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-tafseer-ibn-kathir-urdu",
    "title_ur": "تفسیر ابن کثیر اردو (۵ جلدیں مکمل)",
    "title_en": "Tafseer Ibn Kathir Urdu (5 Volumes Complete)",
    "subtitle_ur": "تفسیر بالماثور کا مستند ترین علمی شاہکار اردو ترجمہ",
    "category_id": "c-2",
    "description_ur": "علامہ عماد الدین ابن کثیرؒ کی شہرہ آفاق تفسیر جس میں قرآن کی تفسیر قرآن سے، پھر احادیث نبویہ اور آثار صحابہ و تابعین سے کی گئی ہے۔ ضعیف و موضوع اسرائیلی روایات کی نفی کر کے خالص صحیح روایات کا انتخاب کیا گیا ہے۔ طلبہ و علماء کے لیے ناگزیر علمی مرجع۔",
    "language": "عربی مع اردو ترجمہ و تحقیق",
    "binding_type": "مجالد نفیس ہارڈ بیک",
    "printing_type": "دو رنگہ اعلیٰ طباعت",
    "total_volumes": 5,
    "pages_count": 4200,
    "publication_year": 2024,
    "isbn": "978-969-564-102-9",
    "sku": "AK-TF-002",
    "tags": [
      "تفسیر ابن کثیر",
      "ابن کثیر",
      "تفسیر بالماثور",
      "اردو تفسیر"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3100,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-ibnkathir",
          "name_ur": "عماد الدین اسماعیل بن عمر ابن کثیرؒ",
          "name_en": "Imam Ibn Kathir",
          "bio_ur": "جلیل القدر مفسر و مورخ، مصنف تفسیر ابن کثیر و البدایہ والنہایہ",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-tafseer-ibn-kathir-urdu-front",
        "book_id": "book-tafseer-ibn-kathir-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-tafseer-ibn-kathir-urdu-gallery",
        "book_id": "book-tafseer-ibn-kathir-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-tafseer-ibn-kathir-urdu-1",
        "book_id": "book-tafseer-ibn-kathir-urdu",
        "publisher_id": "pub-darussalam",
        "publisher": {
          "id": "pub-darussalam",
          "name_ur": "دار السلام پبلیکیشنز",
          "name_en": "Darussalam Publications",
          "description": "عالمی سطح پر معروف اسلامی اشاعتی ادارہ",
          "contact_info": "لاہور، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار السلام پبلیکیشنز ایڈیشن (5 جلدیں تخریج شدہ)",
        "volumes": 5,
        "binding_type": "ہارڈ بیک فاخر",
        "printing_type": "دو رنگہ کریم پیپر",
        "purchase_cost": 7500,
        "regular_price": 11500,
        "discount_type": "percentage",
        "discount_value": 12,
        "final_price": 10120,
        "weight_grams": 6500,
        "stock_quantity": 18,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TF-002-DARUSSALAM",
        "barcode": "89640001070",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "ed-book-tafseer-ibn-kathir-urdu-2",
        "book_id": "book-tafseer-ibn-kathir-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز مجالد سیٹ",
        "volumes": 5,
        "binding_type": "مجالد نفیس گولڈن",
        "printing_type": "دو رنگہ سفید کاغذ",
        "purchase_cost": 6800,
        "regular_price": 10500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 9450,
        "weight_grams": 6300,
        "stock_quantity": 22,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TF-002-ALKHALIL",
        "barcode": "89640001071",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-bayan-ul-quran",
    "title_ur": "تفسیر بیان القرآن (۳ جلدیں)",
    "title_en": "Tafseer Bayan-ul-Quran (3 Volumes) - Maulana Ashraf Ali Thanvi",
    "subtitle_ur": "حکیم الامت مولانا اشرف علی تھانویؒ کی جامع علمی، کلامی و نحوی تفسیر",
    "category_id": "c-2",
    "description_ur": "حکیم الامت مجدد الملت مولانا اشرف علی تھانویؒ کی گراں قدر تفسیر جس میں ربط آیات، معانی قرآنی کے لطائف، فقہی نکات اور علم کلام و تصوف کے باریک مسائل کو نہایت اختصار اور جامعیت سے حل کیا گیا ہے۔ علماء اور اساتذہ کے لیے رہنما تفسیر۔",
    "language": "اردو مع عربی حواشی",
    "binding_type": "مجالد ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 3,
    "pages_count": 2400,
    "publication_year": 2023,
    "isbn": "978-969-564-103-6",
    "sku": "AK-TF-003",
    "tags": [
      "بیان القرآن",
      "اشرف علی تھانوی",
      "تفسیر",
      "تھانوی"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1980,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-thanvi",
          "name_ur": "حکیم الامت مولانا اشرف علی تھانویؒ",
          "name_en": "Maulana Ashraf Ali Thanvi",
          "bio_ur": "مجدد الملت، مصنف تفسیر بیان القرآن، بہشتی زیور اور مناجات مقبول",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-bayan-ul-quran-front",
        "book_id": "book-bayan-ul-quran",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-bayan-ul-quran-gallery",
        "book_id": "book-bayan-ul-quran",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-bayan-ul-quran-1",
        "book_id": "book-bayan-ul-quran",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس مجالد ایڈیشن (3 جلدیں)",
        "volumes": 3,
        "binding_type": "مجالد ریگزین گولڈن",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 3600,
        "regular_price": 5500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 4950,
        "weight_grams": 3800,
        "stock_quantity": 16,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TF-003-ALKHALIL",
        "barcode": "89640001080",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-tafseer-jalalayn-arabi",
    "title_ur": "تفسیر الجلالین مع حاشیۃ الجمل والکمالین",
    "title_en": "Tafseer al-Jalalayn with Hashiyah al-Jamal & Kamallayn",
    "subtitle_ur": "درس نظامی کے نصاب میں شامل مستند ترین عربی تفسیر مع شروحات",
    "category_id": "c-2",
    "description_ur": "جلال الدین محلی اور جلال الدین سیوطی رحمہما اللہ کی جامع اور مختصر ترین عربی تفسیر جو صدیوں سے عالم اسلام کے تمام مدارس و جامعات میں داخل درس ہے۔ الفاظ کے اعراب، نحوی و صرفی ترکیب اور معانی کا دقیق بیان اس کا خاصہ ہے۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر",
    "printing_type": "دو رنگہ بیروتی انداز",
    "total_volumes": 2,
    "pages_count": 1250,
    "publication_year": 2024,
    "isbn": "978-969-564-104-3",
    "sku": "AK-TF-004",
    "tags": [
      "تفسیر جلالین",
      "سیوطی",
      "درس نظامی",
      "عربی تفسیر"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2150,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-suyuti",
          "name_ur": "علامہ جلال الدین عبد الرحمن سیوطیؒ",
          "name_en": "Jalal al-Din al-Suyuti",
          "bio_ur": "کثیر التصانیف امام، مفسر و مصنف الاتقان فی علوم القرآن و تفسیر جلالین",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-tafseer-jalalayn-arabi-front",
        "book_id": "book-tafseer-jalalayn-arabi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-tafseer-jalalayn-arabi-gallery",
        "book_id": "book-tafseer-jalalayn-arabi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-tafseer-jalalayn-arabi-1",
        "book_id": "book-tafseer-jalalayn-arabi",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ جدید کمپیوٹرائزڈ اعراب شدہ ایڈیشن",
        "volumes": 2,
        "binding_type": "ہارڈ بیک فاخر",
        "printing_type": "دو رنگہ طباعت",
        "purchase_cost": 2100,
        "regular_price": 3200,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 2880,
        "weight_grams": 2300,
        "stock_quantity": 30,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TF-004-BUSHRA",
        "barcode": "89640001090",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "ed-book-tafseer-jalalayn-arabi-2",
        "book_id": "book-tafseer-jalalayn-arabi",
        "publisher_id": "pub-qadimi",
        "publisher": {
          "id": "pub-qadimi",
          "name_ur": "قدیمی کتب خانہ",
          "name_en": "Qadimi Kutub Khana",
          "description": "درس نظامی کی قدیم عربی و اردو کتب کا مرکز",
          "contact_info": "آرام باغ روڈ، کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "قدیمی کتب خانہ کلاسک حواشی ایڈیشن",
        "volumes": 2,
        "binding_type": "ہارڈ بائنڈنگ",
        "printing_type": "یک رنگہ سفید",
        "purchase_cost": 1600,
        "regular_price": 2500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 2250,
        "weight_grams": 2200,
        "stock_quantity": 20,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TF-004-QADIMI",
        "barcode": "89640001091",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-tafseer-qurtubi-urdu",
    "title_ur": "تفسیر قرطبی (الجامع لاحکام القرآن) - ۱۰ جلدیں",
    "title_en": "Tafseer al-Qurtubi Urdu Translation (10 Volumes)",
    "subtitle_ur": "امام قرطبی کی فقہی، نحوی اور احکام سے متعلق بے نظیر تفسیر",
    "category_id": "c-2",
    "description_ur": "امام ابو عبد اللہ محمد بن احمد قرطبی مالکیؒ کی شہرۂ آفاق تفسیر جو آیات احکام کی تشریح میں دنیا کی بے مثل کتاب ہے۔ اس میں نہ صرف فقہی احکام و دلائل کا محاکمہ کیا گیا ہے بلکہ لغوی، اعرابی اور تفسیری ابحاث کو کمال درجے تک پہنچایا گیا ہے۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد نفیس ہارڈ بیک (10 جلدیں)",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 10,
    "pages_count": 8500,
    "publication_year": 2023,
    "isbn": "978-969-564-105-0",
    "sku": "AK-TF-005",
    "tags": [
      "تفسیر قرطبی",
      "امام قرطبی",
      "احکام القرآن",
      "فقہی تفسیر"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1450,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-qurtubi",
          "name_ur": "امام ابو عبد اللہ محمد بن احمد قرطبیؒ",
          "name_en": "Imam Al-Qurtubi",
          "bio_ur": "مفسر کبیر اور مصنف الجامع لاحکام القرآن (تفسیر قرطبی)",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-tafseer-qurtubi-urdu-front",
        "book_id": "book-tafseer-qurtubi-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-tafseer-qurtubi-urdu-gallery",
        "book_id": "book-tafseer-qurtubi-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-tafseer-qurtubi-urdu-1",
        "book_id": "book-tafseer-qurtubi-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز مکمل 10 جلدیں باکس ایڈیشن",
        "volumes": 10,
        "binding_type": "مجالد چمڑہ نما گولڈن ایمبوسنگ",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 14000,
        "regular_price": 22000,
        "discount_type": "percentage",
        "discount_value": 12,
        "final_price": 19360,
        "weight_grams": 12500,
        "stock_quantity": 10,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TF-005-ALKHALIL",
        "barcode": "89640001100",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-tafseer-tabari-urdu",
    "title_ur": "تفسیر طبری (جامع البیان عن تاویل آی القرآن) - ۸ جلدیں",
    "title_en": "Tafseer al-Tabari Urdu (8 Volumes Complete)",
    "subtitle_ur": "امام ابو جعفر محمد بن جریر طبریؒ کی ام التفاسیر",
    "category_id": "c-2",
    "description_ur": "تمام تفاسیر بالماثور کا سرچشمہ اور اولین مستند ترین مرجع۔ امام طبریؒ نے اس میں صحابہ و تابعین کے اقوال، لغات عرب، قراءات اور ناسخ و منسوخ کے دلائل کو مکمل اسناد کے ساتھ جمع فرمایا ہے۔ اہل علم کے لیے قیمتی سرمایہ۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک (8 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 8,
    "pages_count": 6800,
    "publication_year": 2023,
    "isbn": "978-969-564-106-7",
    "sku": "AK-TF-006",
    "tags": [
      "تفسیر طبری",
      "امام طبری",
      "جامع البیان",
      "ام التفاسیر"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1280,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-tabari",
          "name_ur": "امام ابو جعفر محمد بن جریر طبریؒ",
          "name_en": "Imam Ibn Jarir al-Tabari",
          "bio_ur": "امام المفسرین و المؤرخین، مصنف جامع البیان و تاریخ طبری",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-tafseer-tabari-urdu-front",
        "book_id": "book-tafseer-tabari-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-tafseer-tabari-urdu-gallery",
        "book_id": "book-tafseer-tabari-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-tafseer-tabari-urdu-1",
        "book_id": "book-tafseer-tabari-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس 8 جلدیں سیٹ",
        "volumes": 8,
        "binding_type": "مجالد ہارڈ بیک",
        "printing_type": "دو رنگہ معیاری قرطاس",
        "purchase_cost": 12500,
        "regular_price": 18500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 16650,
        "weight_grams": 10200,
        "stock_quantity": 8,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TF-006-ALKHALIL",
        "barcode": "89640001110",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-tafseer-baidawi",
    "title_ur": "انوار التنزیل و اسرار التاویل (تفسیر بیضاوی) - ۲ جلدیں",
    "title_en": "Anwar al-Tanzil wa Asrar al-Tawil (Tafseer Baidawi)",
    "subtitle_ur": "امام ناصر الدین بیضاوی شیرازیؒ کی بلاغت، نحو اور اعجاز پر مشتمل عربی تفسیر",
    "category_id": "c-2",
    "description_ur": "تفسیر بیضاوی کلامی و نحوی اور بلاغی اعجاز قرآنی کے اثبات میں امتیازی شان رکھتی ہے۔ امام بیضاوی نے زمخشری کے کشاف سے معتزلی آراء نکال کر خالص اہل سنت کے موافق اصولوں پر قرآن کی ادبی اور معنوی بلاغت کو بے نقاب کیا ہے۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر شامی",
    "printing_type": "دو رنگہ بیروتی طباعت",
    "total_volumes": 2,
    "pages_count": 1420,
    "publication_year": 2024,
    "isbn": "978-969-564-107-4",
    "sku": "AK-TF-007",
    "tags": [
      "تفسیر بیضاوی",
      "امام بیضاوی",
      "بلاغت",
      "درس نظامی"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 980,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-tafseer-baidawi-front",
        "book_id": "book-tafseer-baidawi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1507842229452-73595690b275?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-tafseer-baidawi-gallery",
        "book_id": "book-tafseer-baidawi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-tafseer-baidawi-1",
        "book_id": "book-tafseer-baidawi",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی کمپیوٹرائزڈ ایڈیشن",
        "volumes": 2,
        "binding_type": "ہارڈ بیک فاخر",
        "printing_type": "دو رنگہ اعلیٰ معیار",
        "purchase_cost": 2400,
        "regular_price": 3800,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 3420,
        "weight_grams": 2500,
        "stock_quantity": 18,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TF-007-BUSHRA",
        "barcode": "89640001120",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1507842229452-73595690b275?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-itqan-fi-uloom-il-quran",
    "title_ur": "الاتقان فی علوم القرآن - علامہ جلال الدین سیوطی (۲ جلدیں)",
    "title_en": "Al-Itqan fi Uloom al-Quran - Imam Jalaluddin al-Suyuti",
    "subtitle_ur": "علوم قرآن پر لکھی گئی عالم اسلام کی سب سے جامع اور مستند ترین کتاب",
    "category_id": "c-1",
    "description_ur": "علامہ جلال الدین سیوطیؒ کی شہرہ آفاق کتاب جس میں علوم قرآن کی 80 انواع (وحی، نزول، جمع و تدوین، مکی و مدنی، ناسخ و منسوخ، اعجاز، قراءات، محکم و متشابہ) کا محققانہ اور سیر حاصل جائزہ لیا گیا ہے۔ قرآنی علوم کے ہر محقق کی بنیادی ضرورت۔",
    "language": "عربی مع اردو ترجمہ و حواشی",
    "binding_type": "مجالد ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 2,
    "pages_count": 1350,
    "publication_year": 2023,
    "isbn": "978-969-564-108-1",
    "sku": "AK-UQ-001",
    "tags": [
      "الاتقان",
      "سیوطی",
      "علوم القرآن",
      "قرآنی علوم"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1670,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-suyuti",
          "name_ur": "علامہ جلال الدین عبد الرحمن سیوطیؒ",
          "name_en": "Jalal al-Din al-Suyuti",
          "bio_ur": "کثیر التصانیف امام، مفسر و مصنف الاتقان فی علوم القرآن و تفسیر جلالین",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-itqan-fi-uloom-il-quran-front",
        "book_id": "book-itqan-fi-uloom-il-quran",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-itqan-fi-uloom-il-quran-gallery",
        "book_id": "book-itqan-fi-uloom-il-quran",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-itqan-fi-uloom-il-quran-1",
        "book_id": "book-itqan-fi-uloom-il-quran",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس اردو ترجمہ ایڈیشن (2 جلدیں)",
        "volumes": 2,
        "binding_type": "مجالد فاخر",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 2400,
        "regular_price": 3800,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 3420,
        "weight_grams": 2400,
        "stock_quantity": 20,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-UQ-001-ALKHALIL",
        "barcode": "89640001130",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-uloom-ul-quran-taqi",
    "title_ur": "علوم القرآن - شیخ الاسلام مفتی محمد تقی عثمانی",
    "title_en": "Uloom-ul-Quran - Mufti Muhammad Taqi Usmani",
    "subtitle_ur": "وحی، تاریخ تدوین قرآن، قراءات اور مستشرقین کے شبہات کا مسکت رد",
    "category_id": "c-1",
    "description_ur": "شیخ الاسلام مفتی محمد تقی عثمانی دامت برکاتہم کی یہ کتاب معارف القرآن کے مقدمے کی بنیاد پر لکھی گئی ہے۔ اس میں وحی کی حقیقت، تاریخ نزول و حفاظت قرآن، سبعہ احرف، قراءات اور مستشرقین کے اٹھائے گئے فکری اور تاریخی فتنوں کا محققانہ جواب دیا گیا ہے۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک",
    "printing_type": "یک رنگہ سفید",
    "total_volumes": 1,
    "pages_count": 520,
    "publication_year": 2024,
    "isbn": "978-969-564-109-8",
    "sku": "AK-UQ-002",
    "tags": [
      "علوم القرآن",
      "مفتی تقی عثمانی",
      "وحی",
      "حفاظت قرآن"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 2950,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-taqi",
          "name_ur": "شیخ الاسلام مفتی محمد تقی عثمانی",
          "name_en": "Mufti Muhammad Taqi Usmani",
          "bio_ur": "معروف عالم دین، نائب صدر دار العلوم کراچی و سابق جج شرعی اپیلٹ بینچ سپریم کورٹ آف پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-uloom-ul-quran-taqi-front",
        "book_id": "book-uloom-ul-quran-taqi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-uloom-ul-quran-taqi-gallery",
        "book_id": "book-uloom-ul-quran-taqi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-uloom-ul-quran-taqi-1",
        "book_id": "book-uloom-ul-quran-taqi",
        "publisher_id": "pub-maarif",
        "publisher": {
          "id": "pub-maarif",
          "name_ur": "مکتبۃ معارف القرآن (دار العلوم کراچی)",
          "name_en": "Maktaba Maariful Quran",
          "description": "دار العلوم کراچی کی مستند علمی و تفسیری مطبوعات",
          "contact_info": "کورنگی کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ معارف القرآن دار العلوم کراچی",
        "volumes": 1,
        "binding_type": "ہارڈ بیک کلاسک",
        "printing_type": "اعلیٰ سفید کاغذ",
        "purchase_cost": 650,
        "regular_price": 1050,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 945,
        "weight_grams": 750,
        "stock_quantity": 40,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-UQ-002-MAARIF",
        "barcode": "89640001140",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-ahkam-ul-quran-jassas",
    "title_ur": "احکام القرآن للجصاص - امام ابو بکر رازی جصاصؒ (۳ جلدیں)",
    "title_en": "Ahkam al-Quran by Imam al-Jassas (3 Volumes)",
    "subtitle_ur": "فقہ حنفی کے دلائل قرآنی اور تفسیری استنباط کا معتمد ترین ماخذ",
    "category_id": "c-2",
    "description_ur": "امام ابو بکر احمد بن علی رازی جصاص حنفیؒ کی بے مثل تفسیری تصنیف جس میں قرآن کریم کی فقہی آیات سے حنفی مسلک کے استدلالات کو احادیث، لغت اور اصول فقہ کی روشنی میں ثابت کیا گیا ہے۔ ائمہ اربعہ کے درمیان فقہی مناظرات کے لیے سنگ میل۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر شامی",
    "printing_type": "دو رنگہ بیروتی طباعت",
    "total_volumes": 3,
    "pages_count": 1980,
    "publication_year": 2023,
    "isbn": "978-969-564-110-4",
    "sku": "AK-TF-008",
    "tags": [
      "احکام القرآن",
      "جصاص",
      "فقہ حنفی",
      "استنباط"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1120,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-jassas",
          "name_ur": "امام ابو بکر احمد بن علی رازی جصاصؒ",
          "name_en": "Imam Abu Bakr al-Jassas",
          "bio_ur": "فقیہ حنفی اور مصنف احکام القرآن (3 جلدیں)",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-ahkam-ul-quran-jassas-front",
        "book_id": "book-ahkam-ul-quran-jassas",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-ahkam-ul-quran-jassas-gallery",
        "book_id": "book-ahkam-ul-quran-jassas",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-ahkam-ul-quran-jassas-1",
        "book_id": "book-ahkam-ul-quran-jassas",
        "publisher_id": "pub-qadimi",
        "publisher": {
          "id": "pub-qadimi",
          "name_ur": "قدیمی کتب خانہ",
          "name_en": "Qadimi Kutub Khana",
          "description": "درس نظامی کی قدیم عربی و اردو کتب کا مرکز",
          "contact_info": "آرام باغ روڈ، کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "قدیمی کتب خانہ کراچی ایڈیشن (3 جلدیں)",
        "volumes": 3,
        "binding_type": "ہارڈ بیک مجالد",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 3200,
        "regular_price": 4800,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 4320,
        "weight_grams": 3500,
        "stock_quantity": 14,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TF-008-QADIMI",
        "barcode": "89640001150",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-tibyan-fi-adab-hamalatil-quran",
    "title_ur": "التبیان فی آداب حملۃ القرآن - امام محیی الدین نوویؒ",
    "title_en": "Al-Tibyan fi Adab Hamalat al-Quran - Imam al-Nawawi",
    "subtitle_ur": "تلاوت قرآن کے باطنی و ظاہری آداب اور حفاظ و قراء کے لیے سنہری ہدایات",
    "category_id": "c-1",
    "description_ur": "امام نوویؒ کی روحانی اور تربیتی تصنیف جس میں قرآن کے پڑھنے، پڑھانے، حفظ کرنے، تلاوت کے آداب، تعظیم مصحف، مسنون اوقات اور قراء و علماء کے اوصاف کا احادیث نبویہ اور اسلاف کے معمولات کی روشنی میں بیان ہے۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "ہارڈ بیک پیپر نما",
    "printing_type": "یک رنگہ سفید",
    "total_volumes": 1,
    "pages_count": 240,
    "publication_year": 2024,
    "isbn": "978-969-564-111-1",
    "sku": "AK-QR-006",
    "tags": [
      "التبیان",
      "امام نووی",
      "آداب تلاوت",
      "حفاظ"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1350,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-nawawi",
          "name_ur": "امام محیی الدین یحییٰ بن شرف نوویؒ",
          "name_en": "Imam Yahya ibn Sharaf al-Nawawi",
          "bio_ur": "عظیم فقیہ و محدث، مصنف ریاض الصالحین، اربعین نووی و شرح مسلم",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-tibyan-fi-adab-hamalatil-quran-front",
        "book_id": "book-tibyan-fi-adab-hamalatil-quran",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-tibyan-fi-adab-hamalatil-quran-gallery",
        "book_id": "book-tibyan-fi-adab-hamalatil-quran",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-tibyan-fi-adab-hamalatil-quran-1",
        "book_id": "book-tibyan-fi-adab-hamalatil-quran",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز دیدہ زیب ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک نفیس",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 380,
        "regular_price": 650,
        "discount_type": "percentage",
        "discount_value": 15,
        "final_price": 553,
        "weight_grams": 420,
        "stock_quantity": 35,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-QR-006-ALKHALIL",
        "barcode": "89640001160",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-mufassal-fi-qiraat-sabah",
    "title_ur": "المفصل فی القراءات السبع والتجوید",
    "title_en": "Al-Mufassal fi al-Qiraat al-Sab'ah & Tajweed",
    "subtitle_ur": "سبعہ متواترہ قراءات، اصول شاطبیہ اور فن تجوید کا مستند انسائیکلوپیڈیا",
    "category_id": "c-1",
    "description_ur": "قراءات سبعہ اور علم تجوید کے دقیق قواعد پر مشتمل ضخیم اور جامع کتاب۔ اس میں قراء سبعہ (نافع، ابن کثیر، ابو عمرو، ابن عامر، عاصم، حمزہ، کسائی) کے اصول و فرش الحروف کو نقشہ جات اور جدولوں کی صورت میں پیش کیا گیا ہے۔",
    "language": "عربی و اردو",
    "binding_type": "مجالد فاخر ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 650,
    "publication_year": 2023,
    "isbn": "978-969-564-112-8",
    "sku": "AK-QR-007",
    "tags": [
      "قراءات سبعہ",
      "شاطبیہ",
      "تجوید",
      "قراءات"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 890,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-mufassal-fi-qiraat-sabah-front",
        "book_id": "book-mufassal-fi-qiraat-sabah",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-mufassal-fi-qiraat-sabah-gallery",
        "book_id": "book-mufassal-fi-qiraat-sabah",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-mufassal-fi-qiraat-sabah-1",
        "book_id": "book-mufassal-fi-qiraat-sabah",
        "publisher_id": "pub-zamzam",
        "publisher": {
          "id": "pub-zamzam",
          "name_ur": "زمزم پبلشرز",
          "name_en": "Zam Zam Publishers",
          "description": "کتب احادیث اور عربی شروحات کا ممتاز اشاعتی ادارہ",
          "contact_info": "اردو بازار، کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "زمزم پبلشرز کراچی ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک مجالد",
        "printing_type": "دو رنگہ سفید کاغذ",
        "purchase_cost": 1100,
        "regular_price": 1750,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1575,
        "weight_grams": 1050,
        "stock_quantity": 18,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-QR-007-ZAMZAM",
        "barcode": "89640001170",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-bukhari-sharif-urdu-set",
    "title_ur": "صحیح البخاری شریف اردو (۳ جلدیں مکمل سیٹ مع تخریج)",
    "title_en": "Sahih Al-Bukhari Urdu (3 Volumes Complete Set)",
    "subtitle_ur": "اصح الکتب بعد کتاب اللہ کا معتبر ترین اردو ترجمہ و تشریح",
    "category_id": "c-3",
    "description_ur": "امیر المومنین فی الحدیث امام محمد بن اسماعیل بخاریؒ کی مایہ ناز تصنیف الجامع الصحیح۔ سلیس اردو ترجمہ، تشریح تراجم ابواب، فقہی استنباط اور احادیث کے شواہد و متابعات کی کامل وضاحت۔ برصغیر کے ممتاز علمائے حدیث کی نظرثانی شدہ طباعت۔",
    "language": "عربی مع اردو ترجمہ و تشریح",
    "binding_type": "مجالد نفیس ہارڈ بیک (3 جلدیں)",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 3,
    "pages_count": 3100,
    "publication_year": 2024,
    "isbn": "978-969-564-201-2",
    "sku": "AK-HD-001",
    "tags": [
      "صحیح بخاری",
      "امام بخاری",
      "صحاح ستہ",
      "حدیث شریف",
      "مکمل سیٹ"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 4800,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-bukhari",
          "name_ur": "امام محمد بن اسماعیل بخاریؒ",
          "name_en": "Imam Muhammad Al-Bukhari",
          "bio_ur": "امیر المومنین فی الحدیث اور مصنف الجامع الصحیح (صحیح بخاری شریف)",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-bukhari-sharif-urdu-set-front",
        "book_id": "book-bukhari-sharif-urdu-set",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-bukhari-sharif-urdu-set-gallery",
        "book_id": "book-bukhari-sharif-urdu-set",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-bukhari-sharif-urdu-set-1",
        "book_id": "book-bukhari-sharif-urdu-set",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل نفیس مجالد ایڈیشن (3 جلدیں گولڈن کور)",
        "volumes": 3,
        "binding_type": "مجالد چمڑہ نما گولڈن ایمبوسنگ",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 4500,
        "regular_price": 6800,
        "discount_type": "percentage",
        "discount_value": 12,
        "final_price": 5984,
        "weight_grams": 4800,
        "stock_quantity": 35,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-001-ALKHALIL",
        "barcode": "89640001180",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "ed-book-bukhari-sharif-urdu-set-2",
        "book_id": "book-bukhari-sharif-urdu-set",
        "publisher_id": "pub-darussalam",
        "publisher": {
          "id": "pub-darussalam",
          "name_ur": "دار السلام پبلیکیشنز",
          "name_en": "Darussalam Publications",
          "description": "عالمی سطح پر معروف اسلامی اشاعتی ادارہ",
          "contact_info": "لاہور، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار السلام تحقیق و تخریج شدہ ایڈیشن (3 جلدیں)",
        "volumes": 3,
        "binding_type": "ہارڈ بیک فاخر",
        "printing_type": "دو رنگہ کریم پیپر",
        "purchase_cost": 5200,
        "regular_price": 7800,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 7020,
        "weight_grams": 5100,
        "stock_quantity": 20,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-001-DARUSSALAM",
        "barcode": "89640001181",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-sahih-muslim-urdu",
    "title_ur": "صحیح مسلم شریف اردو مع مختصر شرح (۳ جلدیں)",
    "title_en": "Sahih Muslim Urdu with Brief Commentary (3 Volumes)",
    "subtitle_ur": "امام مسلم بن الحجاج النیشابوریؒ کی حسن ترتیب اور صحت اسناد کا لازوال نمونہ",
    "category_id": "c-3",
    "description_ur": "صحیح بخاری کے بعد امت مسلمہ کا متفقہ دوسرا صحیح ترین حدیثی مجموعہ۔ امام مسلمؒ کی بے مثال فنی ترتیب جس میں ہر حدیث کی جملہ اسناد اور متون ایک ہی مقام پر یکجا ملتے ہیں۔ اردو زبان میں تشریح کے ساتھ نادر اور مکمل ایڈیشن۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک (3 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 3,
    "pages_count": 2950,
    "publication_year": 2024,
    "isbn": "978-969-564-202-9",
    "sku": "AK-HD-002",
    "tags": [
      "صحیح مسلم",
      "امام مسلم",
      "صحاح ستہ",
      "حدیث نبوی"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3650,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-muslim",
          "name_ur": "امام مسلم بن الحجاج النیشابوریؒ",
          "name_en": "Imam Muslim ibn al-Hajjaj",
          "bio_ur": "عظیم محدث، امام و مصنف صحیح مسلم شریف",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-sahih-muslim-urdu-front",
        "book_id": "book-sahih-muslim-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-sahih-muslim-urdu-gallery",
        "book_id": "book-sahih-muslim-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-sahih-muslim-urdu-1",
        "book_id": "book-sahih-muslim-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس سیٹ (3 جلدیں)",
        "volumes": 3,
        "binding_type": "مجالد ہارڈ بیک",
        "printing_type": "دو رنگہ معیاری کاغذ",
        "purchase_cost": 4200,
        "regular_price": 6400,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 5760,
        "weight_grams": 4600,
        "stock_quantity": 26,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-002-ALKHALIL",
        "barcode": "89640001190",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "ed-book-sahih-muslim-urdu-2",
        "book_id": "book-sahih-muslim-urdu",
        "publisher_id": "pub-darussalam",
        "publisher": {
          "id": "pub-darussalam",
          "name_ur": "دار السلام پبلیکیشنز",
          "name_en": "Darussalam Publications",
          "description": "عالمی سطح پر معروف اسلامی اشاعتی ادارہ",
          "contact_info": "لاہور، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار السلام تخریج شدہ ایڈیشن",
        "volumes": 3,
        "binding_type": "ہارڈ بیک فاخر",
        "printing_type": "دو رنگہ کریم پیپر",
        "purchase_cost": 4800,
        "regular_price": 7200,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 6480,
        "weight_grams": 4700,
        "stock_quantity": 18,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-002-DARUSSALAM",
        "barcode": "89640001191",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-sunan-abu-dawood-urdu",
    "title_ur": "سنن ابی داود شریف اردو (۳ جلدیں)",
    "title_en": "Sunan Abu Dawood Urdu Translation (3 Volumes)",
    "subtitle_ur": "احادیث احکام کا سب سے جامع اور اہم ترین ذخیرہ مع فوائد فقہیہ",
    "category_id": "c-3",
    "description_ur": "امام ابو داود سجستانیؒ کی شہرہ آفاق کتاب جو احادیث احکام کی تدوین میں صحاح ستہ کا سب سے مستند ستون ہے۔ فقہاء کرام کے استدلال کا بنیادی محور۔ احادیث کی سندی حیثیت، علل اور فقہی مذاہب کی ترجیحات اردو حواشی میں درج کی گئی ہیں۔",
    "language": "عربی مع اردو ترجمہ و حواشی",
    "binding_type": "مجالد ہارڈ بیک (3 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 3,
    "pages_count": 2700,
    "publication_year": 2023,
    "isbn": "978-969-564-203-6",
    "sku": "AK-HD-003",
    "tags": [
      "سنن ابی داود",
      "ابو داود",
      "احادیث احکام",
      "صحاح ستہ"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2200,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-abudawood",
          "name_ur": "امام ابو داود سلیمان بن اشعث سجستانیؒ",
          "name_en": "Imam Abu Dawood",
          "bio_ur": "امام الحدیث اور مصنف سنن ابی داود شریف",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-sunan-abu-dawood-urdu-front",
        "book_id": "book-sunan-abu-dawood-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-sunan-abu-dawood-urdu-gallery",
        "book_id": "book-sunan-abu-dawood-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-sunan-abu-dawood-urdu-1",
        "book_id": "book-sunan-abu-dawood-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز 3 جلدیں ایڈیشن",
        "volumes": 3,
        "binding_type": "مجالد ہارڈ بیک ریگزین",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 3800,
        "regular_price": 5800,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 5220,
        "weight_grams": 4200,
        "stock_quantity": 22,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-003-ALKHALIL",
        "barcode": "89640001200",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-jami-tirmidhi-urdu",
    "title_ur": "جامع الترمذی شریف اردو مع ابواب الفقہ (۲ جلدیں)",
    "title_en": "Jami at-Tirmidhi Urdu Translation (2 Volumes)",
    "subtitle_ur": "مذاہب فقہاء کے اقوال، تصحیح و تضعیف اور شمائل کا نایاب مجموعہ",
    "category_id": "c-3",
    "description_ur": "امام ابو عیسیٰ ترمذیؒ کی کتاب جس کی خصوصیت یہ ہے کہ ہر حدیث کے بعد ائمہ فقہ (ابوحنیفہ، شافعی، مالک، احمد، ثوری وغیرہ) کے مذاہب اور حدیث کے درجۂ صحت (صحیح، حسن، غریب) کا فیصلہ بیان کیا گیا ہے۔ تقابل فقہ اور حدیث کے طلبہ کے لیے ناگزیر۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک (2 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 2,
    "pages_count": 2150,
    "publication_year": 2024,
    "isbn": "978-969-564-204-3",
    "sku": "AK-HD-004",
    "tags": [
      "جامع ترمذی",
      "ترمذی شریف",
      "صحاح ستہ",
      "مذاہب فقہاء"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3100,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-tirmidhi",
          "name_ur": "امام ابو عیسیٰ محمد بن عیسیٰ ترمذیؒ",
          "name_en": "Imam Al-Tirmidhi",
          "bio_ur": "امام الحدیث، مصنف جامع الترمذی و شمائل نبویہ",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-jami-tirmidhi-urdu-front",
        "book_id": "book-jami-tirmidhi-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-jami-tirmidhi-urdu-gallery",
        "book_id": "book-jami-tirmidhi-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-jami-tirmidhi-urdu-1",
        "book_id": "book-jami-tirmidhi-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس مجالد سیٹ (2 جلدیں)",
        "volumes": 2,
        "binding_type": "مجالد ہارڈ بیک",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 3100,
        "regular_price": 4700,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 4230,
        "weight_grams": 3300,
        "stock_quantity": 25,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-004-ALKHALIL",
        "barcode": "89640001210",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-sunan-nasai-urdu",
    "title_ur": "سنن النسائی شریف اردو (المجتبیٰ) - ۲ جلدیں",
    "title_en": "Sunan an-Nasa'i Urdu Translation (2 Volumes)",
    "subtitle_ur": "دقت نظر، علل حدیث اور شرائط صحت میں بخاری کے قریب ترین سنن",
    "category_id": "c-3",
    "description_ur": "امام احمد بن شعیب نسائیؒ کی سنن مجتبیٰ جس میں راویوں کی باریک ترین جرح و تعدیل اور اسناد کے خفیف اختلافات کو غیر معمولی عرق ریزی سے واضح کیا گیا ہے۔ اردو ترجمہ سلیس اور تراجم ابواب کی مطابقت کے ساتھ مرتب کیا گیا ہے۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک (2 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 2,
    "pages_count": 1950,
    "publication_year": 2023,
    "isbn": "978-969-564-205-0",
    "sku": "AK-HD-005",
    "tags": [
      "سنن نسائی",
      "امام نسائی",
      "صحاح ستہ",
      "علل حدیث"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1850,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-nasai",
          "name_ur": "امام احمد بن شعیب نسائیؒ",
          "name_en": "Imam Al-Nasa'i",
          "bio_ur": "امام جلیل، مصنف سنن نسائی شریف (المجتبیٰ)",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-sunan-nasai-urdu-front",
        "book_id": "book-sunan-nasai-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-sunan-nasai-urdu-gallery",
        "book_id": "book-sunan-nasai-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-sunan-nasai-urdu-1",
        "book_id": "book-sunan-nasai-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز مجالد سیٹ (2 جلدیں)",
        "volumes": 2,
        "binding_type": "ہارڈ بیک فاخر",
        "printing_type": "دو رنگہ سفید کاغذ",
        "purchase_cost": 2900,
        "regular_price": 4400,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 3960,
        "weight_grams": 3100,
        "stock_quantity": 20,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-005-ALKHALIL",
        "barcode": "89640001220",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-sunan-ibn-majah-urdu",
    "title_ur": "سنن ابن ماجہ شریف اردو مع تشریح (۲ جلدیں)",
    "title_en": "Sunan Ibn Majah Urdu Translation (2 Volumes)",
    "subtitle_ur": "صحاح ستہ کا چھٹا رکن اور حسن ترتیب و ندرت روایات کا بہترین مرجع",
    "category_id": "c-3",
    "description_ur": "امام محمد بن یزید ابن ماجہ قزوینیؒ کی کتاب جس میں دیگر صحاح ستہ کے مقابلے میں کئی ایسے احکام و ابواب کی روایات موجود ہیں جو زوائد کہلاتی ہیں۔ عمدہ ترتیب، سلیس اردو ترجمہ اور مختصر حواشی کے ساتھ اشاعت۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک (2 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 2,
    "pages_count": 1800,
    "publication_year": 2023,
    "isbn": "978-969-564-206-7",
    "sku": "AK-HD-006",
    "tags": [
      "سنن ابن ماجہ",
      "ابن ماجہ",
      "صحاح ستہ"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1650,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-ibnmajah",
          "name_ur": "امام محمد بن یزید ابن ماجہ قزوینیؒ",
          "name_en": "Imam Ibn Majah",
          "bio_ur": "عظیم محدث اور مصنف سنن ابن ماجہ شریف",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-sunan-ibn-majah-urdu-front",
        "book_id": "book-sunan-ibn-majah-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-sunan-ibn-majah-urdu-gallery",
        "book_id": "book-sunan-ibn-majah-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-sunan-ibn-majah-urdu-1",
        "book_id": "book-sunan-ibn-majah-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز کلاسک سیٹ (2 جلدیں)",
        "volumes": 2,
        "binding_type": "ہارڈ بیک ریگزین",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 2700,
        "regular_price": 4100,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 3690,
        "weight_grams": 2900,
        "stock_quantity": 22,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-006-ALKHALIL",
        "barcode": "89640001230",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-muwatta-imam-malik-urdu",
    "title_ur": "موطا امام مالک مع کشف المغطیٰ اردو (۲ جلدیں)",
    "title_en": "Muwatta Imam Malik Urdu with Commentary (2 Volumes)",
    "subtitle_ur": "مدینہ منورہ کے فقہ و حدیث کا سب سے قدیم اور اولین مستند مجموعہ",
    "category_id": "c-3",
    "description_ur": "سیدنا امام مالک بن انسؒ کی وہ تاریخی تصنیف جسے امام شافعیؒ نے فرمایا کہ روئے زمین پر کتاب اللہ کے بعد موطا مالک سے زیادہ صحیح کوئی کتاب نہیں۔ روایات یحییٰ بن یحییٰ اللیثی اور امام محمد بن الحسن الشیبانی کی تلخیص اردو ترجمہ کے ساتھ۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک (2 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 2,
    "pages_count": 1400,
    "publication_year": 2024,
    "isbn": "978-969-564-207-4",
    "sku": "AK-HD-007",
    "tags": [
      "موطا امام مالک",
      "امام مالک",
      "اہل مدینہ",
      "حدیث شریف"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1950,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-malik",
          "name_ur": "امام دار الہجرۃ مالک بن انسؒ",
          "name_en": "Imam Malik ibn Anas",
          "bio_ur": "امام مدینہ منورہ اور مصنف موطا امام مالک",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-muwatta-imam-malik-urdu-front",
        "book_id": "book-muwatta-imam-malik-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-muwatta-imam-malik-urdu-gallery",
        "book_id": "book-muwatta-imam-malik-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-muwatta-imam-malik-urdu-1",
        "book_id": "book-muwatta-imam-malik-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس 2 جلدیں سیٹ",
        "volumes": 2,
        "binding_type": "مجالد ہارڈ بیک",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 2400,
        "regular_price": 3700,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 3330,
        "weight_grams": 2400,
        "stock_quantity": 25,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-007-ALKHALIL",
        "barcode": "89640001240",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-mishkat-ul-masabih-urdu",
    "title_ur": "مشکوٰۃ المصابیح اردو مع مظاہر حق جدید (۳ جلدیں)",
    "title_en": "Mishkat al-Masabih Urdu with Mazahir-e-Haq (3 Volumes)",
    "subtitle_ur": "درس نظامی کی مرکزی کتاب حدیث مع مشہور ترین اردو شرح",
    "category_id": "c-3",
    "description_ur": "علامہ ولی الدین خطیب تبریزیؒ کی مایہ ناز تالیف جس میں تمام کتب احادیث کی مستند روایات کو ابواب وار ترتیب دیا گیا ہے۔ نواب قطب الدین دہلوی کی مستند شرح مظاہر حق کی جدید کمپیوٹرائزڈ تسہیل کے ساتھ مکمل 3 ضخیم جلدیں۔",
    "language": "عربی مع اردو مفصل شرح",
    "binding_type": "مجالد ہارڈ بیک (3 جلدیں)",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 3,
    "pages_count": 3400,
    "publication_year": 2024,
    "isbn": "978-969-564-208-1",
    "sku": "AK-HD-008",
    "tags": [
      "مشکوۃ المصابیح",
      "مظاہر حق",
      "درس نظامی",
      "حدیث شرح"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3400,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-tabrizi",
          "name_ur": "علامہ ولی الدین محمد بن عبد اللہ خطیب تبریزیؒ",
          "name_en": "Al-Khatib al-Tabrizi",
          "bio_ur": "جامع الحدیث اور مصنف مشکوٰۃ المصابیح",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-mishkat-ul-masabih-urdu-front",
        "book_id": "book-mishkat-ul-masabih-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-mishkat-ul-masabih-urdu-gallery",
        "book_id": "book-mishkat-ul-masabih-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-mishkat-ul-masabih-urdu-1",
        "book_id": "book-mishkat-ul-masabih-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز مظاہر حق جدید (3 جلدیں مکمل)",
        "volumes": 3,
        "binding_type": "مجالد چمڑہ نما گولڈن",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 4800,
        "regular_price": 7500,
        "discount_type": "percentage",
        "discount_value": 12,
        "final_price": 6600,
        "weight_grams": 5200,
        "stock_quantity": 28,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-008-ALKHALIL",
        "barcode": "89640001250",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "ed-book-mishkat-ul-masabih-urdu-2",
        "book_id": "book-mishkat-ul-masabih-urdu",
        "publisher_id": "pub-qadimi",
        "publisher": {
          "id": "pub-qadimi",
          "name_ur": "قدیمی کتب خانہ",
          "name_en": "Qadimi Kutub Khana",
          "description": "درس نظامی کی قدیم عربی و اردو کتب کا مرکز",
          "contact_info": "آرام باغ روڈ، کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "قدیمی کتب خانہ اسٹینڈرڈ سیٹ",
        "volumes": 3,
        "binding_type": "ہارڈ بیک کلاسک",
        "printing_type": "یک رنگہ سفید",
        "purchase_cost": 4000,
        "regular_price": 6200,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 5580,
        "weight_grams": 4900,
        "stock_quantity": 15,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-008-QADIMI",
        "barcode": "89640001251",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-riyadh-us-saliheen-urdu",
    "title_ur": "ریاض الصالحین اردو مع تشریح و تخریج",
    "title_en": "Riyad-us-Saliheen Urdu Commentary & Takhreej",
    "subtitle_ur": "امام نوویؒ کا اخلاق، اعمال اور مسنون معمولات پر مبنی مقبول ترین مجموعہ",
    "category_id": "c-3",
    "description_ur": "امام یحییٰ بن شرف نوویؒ کا مرتب کردہ اخلاق، حسن معاشرت، صدق، صبر، اخلاص اور باطنی تقویٰ پر مشتمل وہ الہامی انتخاب جو دنیا کے ہر مسلمان گھرانے اور مسجد کی زینت ہے۔ اردو ترجمہ و جدید فوائد کے ساتھ۔",
    "language": "عربی مع اردو ترجمہ و تشریح",
    "binding_type": "مجالد فاخر ہارڈ بیک",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 1,
    "pages_count": 980,
    "publication_year": 2024,
    "isbn": "978-969-564-209-8",
    "sku": "AK-HD-009",
    "tags": [
      "ریاض الصالحین",
      "امام نووی",
      "اخلاق و آداب",
      "حدیث"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3890,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-nawawi",
          "name_ur": "امام محیی الدین یحییٰ بن شرف نوویؒ",
          "name_en": "Imam Yahya ibn Sharaf al-Nawawi",
          "bio_ur": "عظیم فقیہ و محدث، مصنف ریاض الصالحین، اربعین نووی و شرح مسلم",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-riyadh-us-saliheen-urdu-front",
        "book_id": "book-riyadh-us-saliheen-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-riyadh-us-saliheen-urdu-gallery",
        "book_id": "book-riyadh-us-saliheen-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-riyadh-us-saliheen-urdu-1",
        "book_id": "book-riyadh-us-saliheen-urdu",
        "publisher_id": "pub-darussalam",
        "publisher": {
          "id": "pub-darussalam",
          "name_ur": "دار السلام پبلیکیشنز",
          "name_en": "Darussalam Publications",
          "description": "عالمی سطح پر معروف اسلامی اشاعتی ادارہ",
          "contact_info": "لاہور، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار السلام تخریج شدہ مجالد سنگل والیم",
        "volumes": 1,
        "binding_type": "ہارڈ بیک کشن کور",
        "printing_type": "دو رنگہ کریم پیپر",
        "purchase_cost": 1600,
        "regular_price": 2500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 2250,
        "weight_grams": 1600,
        "stock_quantity": 40,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-009-DARUSSALAM",
        "barcode": "89640001260",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "ed-book-riyadh-us-saliheen-urdu-2",
        "book_id": "book-riyadh-us-saliheen-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس ایڈیشن مع دعائیں",
        "volumes": 1,
        "binding_type": "مجالد ریگزین گولڈن",
        "printing_type": "دو رنگہ سفید کاغذ",
        "purchase_cost": 1400,
        "regular_price": 2200,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1980,
        "weight_grams": 1500,
        "stock_quantity": 32,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-009-ALKHALIL",
        "barcode": "89640001261",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-fath-ul-bari-arabi",
    "title_ur": "فتح الباری شرح صحیح البخاری - حافظ ابن حجر عسقلانی (۱۵ جلدیں)",
    "title_en": "Fath al-Bari Sharh Sahih al-Bukhari (15 Volumes Arabic)",
    "subtitle_ur": "صحیح بخاری کی اعظم ترین شرح اور علوم حدیث کا بحر بیکراں",
    "category_id": "c-3",
    "description_ur": "شیخ الاسلام حافظ ابن حجر عسقلانیؒ کی وہ تاریخی شرح جس کے متعلق علمائے اسلام نے فرمایا: \"لا ہجرۃ بعد الفتح\" (فتح الباری کے بعد کسی دوسری شرح کی ضرورت باقی نہ رہی)۔ اسناد، لغات، فقہ اور حدیث کا عظیم الشان ذخیرہ۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر شامی (15 جلدیں)",
    "printing_type": "دو رنگہ بیروتی طباعت اعلیٰ",
    "total_volumes": 15,
    "pages_count": 11500,
    "publication_year": 2023,
    "isbn": "978-969-564-210-4",
    "sku": "AK-HD-010",
    "tags": [
      "فتح الباری",
      "ابن حجر عسقلانی",
      "شرح صحیح بخاری",
      "عربی کتب"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 2400,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-ibnhajar",
          "name_ur": "حافظ احمد بن علی ابن حجر عسقلانیؒ",
          "name_en": "Hafiz Ibn Hajar al-Asqalani",
          "bio_ur": "خاتمۃ الحفاظ، شارح صحیح بخاری (فتح الباری) و مصنف بلوغ المرام",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-fath-ul-bari-arabi-front",
        "book_id": "book-fath-ul-bari-arabi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-fath-ul-bari-arabi-gallery",
        "book_id": "book-fath-ul-bari-arabi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-fath-ul-bari-arabi-1",
        "book_id": "book-fath-ul-bari-arabi",
        "publisher_id": "pub-dar-kutub",
        "publisher": {
          "id": "pub-dar-kutub",
          "name_ur": "دار الکتب العلمیہ بیروت",
          "name_en": "Dar Al-Kotob Al-Ilmiyah Beirut",
          "description": "عالم اسلام میں عربی تراث و مصادر کی عظیم بین الاقوامی اشاعت گاہ",
          "contact_info": "بیروت، لبنان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار الکتب العلمیہ بیروت اصل درآمد شدہ ایڈیشن (15 جلدیں)",
        "volumes": 15,
        "binding_type": "مجالد فاخر لیدر لک",
        "printing_type": "دو رنگہ امپورٹڈ قرطاس شام",
        "purchase_cost": 26000,
        "regular_price": 38000,
        "discount_type": "percentage",
        "discount_value": 8,
        "final_price": 34960,
        "weight_grams": 18500,
        "stock_quantity": 6,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-010-DAR-KUTUB",
        "barcode": "89640001270",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "ed-book-fath-ul-bari-arabi-2",
        "book_id": "book-fath-ul-bari-arabi",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز لوکل امپورٹ کوالٹی (15 جلدیں)",
        "volumes": 15,
        "binding_type": "مجالد ہارڈ بیک گولڈن",
        "printing_type": "دو رنگہ سفید کاغذ",
        "purchase_cost": 19000,
        "regular_price": 29000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 26100,
        "weight_grams": 17500,
        "stock_quantity": 8,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-010-ALKHALIL",
        "barcode": "89640001271",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-umdat-ul-qari-arabi",
    "title_ur": "عمدۃ القاری شرح صحیح البخاری - علامہ بدر الدین عینی (۲۵ جلدیں)",
    "title_en": "Umdat al-Qari Sharh Sahih al-Bukhari - Badr al-Din al-Ayni",
    "subtitle_ur": "فقہ حنفی کے دلائل، لغوی تحقیق اور معانی احادیث کی مفصل ترین شرح",
    "category_id": "c-3",
    "description_ur": "علامہ بدر الدین عینی حنفیؒ کی عظیم الشان مبسوط شرح بخاری جس میں انہوں نے ہر حدیث پر بیس بیس مباحث (اعراب، لغت، رجال، معانی، فقہی استنباط، ائمہ کے مذاہب) قائم کیے۔ حنفی نقطہ نظر سے بخاری کی سب سے بلند پایہ شرح۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر (25 جلدیں)",
    "printing_type": "دو رنگہ بیروتی طباعت",
    "total_volumes": 25,
    "pages_count": 16800,
    "publication_year": 2023,
    "isbn": "978-969-564-211-1",
    "sku": "AK-HD-011",
    "tags": [
      "عمدۃ القاری",
      "علامہ عینی",
      "فقہ حنفی",
      "شرح بخاری"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1480,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-umdat-ul-qari-arabi-front",
        "book_id": "book-umdat-ul-qari-arabi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-umdat-ul-qari-arabi-gallery",
        "book_id": "book-umdat-ul-qari-arabi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-umdat-ul-qari-arabi-1",
        "book_id": "book-umdat-ul-qari-arabi",
        "publisher_id": "pub-dar-kutub",
        "publisher": {
          "id": "pub-dar-kutub",
          "name_ur": "دار الکتب العلمیہ بیروت",
          "name_en": "Dar Al-Kotob Al-Ilmiyah Beirut",
          "description": "عالم اسلام میں عربی تراث و مصادر کی عظیم بین الاقوامی اشاعت گاہ",
          "contact_info": "بیروت، لبنان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار الکتب العلمیہ بیروت ایڈیشن (25 جلدیں)",
        "volumes": 25,
        "binding_type": "مجالد فاخر چمڑہ نما",
        "printing_type": "دو رنگہ بیروتی قرطاس",
        "purchase_cost": 38000,
        "regular_price": 55000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 49500,
        "weight_grams": 29000,
        "stock_quantity": 4,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-011-DAR-KUTUB",
        "barcode": "89640001280",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-sharh-sahih-muslim-nawawi",
    "title_ur": "شرح صحیح مسلم للنووی (المنہاج) - ۸ جلدیں",
    "title_en": "Sharh Sahih Muslim by Imam al-Nawawi (Al-Minhaj)",
    "subtitle_ur": "امام نوویؒ کی صحیح مسلم پر متفقہ اور مستند ترین عربی شرح",
    "category_id": "c-3",
    "description_ur": "امام محیی الدین یحییٰ بن شرف نوویؒ کی وہ لازوال شرح جس نے صحیح مسلم کے مضامین، رجال اور فقہی دقائق کو نکھار دیا۔ مقدمہ مسلم کے تفصیلی قواعد اور احادیث کے شواہد پر سیر حاصل بحث۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر (8 جلدیں)",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 8,
    "pages_count": 4800,
    "publication_year": 2024,
    "isbn": "978-969-564-212-8",
    "sku": "AK-HD-012",
    "tags": [
      "شرح مسلم",
      "امام نووی",
      "المنہاج",
      "عربی شرح"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1720,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-nawawi",
          "name_ur": "امام محیی الدین یحییٰ بن شرف نوویؒ",
          "name_en": "Imam Yahya ibn Sharaf al-Nawawi",
          "bio_ur": "عظیم فقیہ و محدث، مصنف ریاض الصالحین، اربعین نووی و شرح مسلم",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-sharh-sahih-muslim-nawawi-front",
        "book_id": "book-sharh-sahih-muslim-nawawi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-sharh-sahih-muslim-nawawi-gallery",
        "book_id": "book-sharh-sahih-muslim-nawawi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-sharh-sahih-muslim-nawawi-1",
        "book_id": "book-sharh-sahih-muslim-nawawi",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی کمپیوٹرائزڈ ایڈیشن (8 جلدیں)",
        "volumes": 8,
        "binding_type": "ہارڈ بیک فاخر",
        "printing_type": "دو رنگہ اعلیٰ معیار",
        "purchase_cost": 8500,
        "regular_price": 13000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 11700,
        "weight_grams": 8500,
        "stock_quantity": 14,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-012-BUSHRA",
        "barcode": "89640001290",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-fath-ul-mulhim",
    "title_ur": "فتح الملہم بشرح صحیح مسلم - علامہ شبیر احمد و مفتی تقی عثمانی (۱۲ جلدیں)",
    "title_en": "Fath al-Mulhim bi Sharh Sahih Muslim (12 Volumes)",
    "subtitle_ur": "برصغیر پاک و ہند کے علمائے دیوبند کا عالم اسلام کے لیے عظیم علمی تحفہ",
    "category_id": "c-3",
    "description_ur": "شیخ الاسلام علامہ شبیر احمد عثمانیؒ کی شروع کردہ اور شیخ الاسلام مفتی محمد تقی عثمانی دامت برکاتہم کی تکملہ کردہ عظیم عربی شرح۔ جدید معاشی و سائنسی مسائل پر احادیث نبویہ کی منطبق تشریح جس کی تعریف پوری دنیا کے عرب علماء نے کی۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر ہارڈ بیک (12 جلدیں)",
    "printing_type": "دو رنگہ اعلیٰ طباعت",
    "total_volumes": 12,
    "pages_count": 8200,
    "publication_year": 2024,
    "isbn": "978-969-564-213-5",
    "sku": "AK-HD-013",
    "tags": [
      "فتح الملہم",
      "تکملہ فتح الملہم",
      "مفتی تقی عثمانی",
      "شبیر احمد عثمانی"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3100,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-taqi",
          "name_ur": "شیخ الاسلام مفتی محمد تقی عثمانی",
          "name_en": "Mufti Muhammad Taqi Usmani",
          "bio_ur": "معروف عالم دین، نائب صدر دار العلوم کراچی و سابق جج شرعی اپیلٹ بینچ سپریم کورٹ آف پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-fath-ul-mulhim-front",
        "book_id": "book-fath-ul-mulhim",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-fath-ul-mulhim-gallery",
        "book_id": "book-fath-ul-mulhim",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-fath-ul-mulhim-1",
        "book_id": "book-fath-ul-mulhim",
        "publisher_id": "pub-maarif",
        "publisher": {
          "id": "pub-maarif",
          "name_ur": "مکتبۃ معارف القرآن (دار العلوم کراچی)",
          "name_en": "Maktaba Maariful Quran",
          "description": "دار العلوم کراچی کی مستند علمی و تفسیری مطبوعات",
          "contact_info": "کورنگی کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ معارف القرآن دار العلوم کراچی (12 جلدیں)",
        "volumes": 12,
        "binding_type": "مجالد ریگزین گولڈن ایمبوسنگ",
        "printing_type": "دو رنگہ اعلیٰ کریم پیپر",
        "purchase_cost": 16000,
        "regular_price": 24000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 21600,
        "weight_grams": 14000,
        "stock_quantity": 12,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-013-MAARIF",
        "barcode": "89640001300",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-shamail-tirmidhi-urdu",
    "title_ur": "شمائل ترمذی مع خصائل نبوی اردو - شیخ الحدیث مولانا زکریا کاندھلویؒ",
    "title_en": "Shamail-e-Tirmidhi with Khasail-e-Nabawi Urdu",
    "subtitle_ur": "حبیب خدا حضرت محمد مصطفیٰ ﷺ کے حسن و جمال، اخلاق و عادات کی مستند تصویر",
    "category_id": "c-3",
    "description_ur": "امام ابو عیسیٰ ترمذیؒ کی الشمائل المحمدیۃ جس پر شیخ الحدیث حضرت مولانا محمد زکریا کاندھلویؒ نے محبت اور عشق رسول سے لبریز شرح تحریر فرمائی۔ سرکار دو عالم ﷺ کی صورت و سیرت، رفتار و گفتار، نشست و برخاست اور معمولات کا دلکش بیان۔",
    "language": "عربی مع اردو شرح",
    "binding_type": "مجالد ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 540,
    "publication_year": 2024,
    "isbn": "978-969-564-214-2",
    "sku": "AK-HD-014",
    "tags": [
      "شمائل ترمذی",
      "خصائل نبوی",
      "سیرت نبوی",
      "اخلاق نبی"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3500,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-tirmidhi",
          "name_ur": "امام ابو عیسیٰ محمد بن عیسیٰ ترمذیؒ",
          "name_en": "Imam Al-Tirmidhi",
          "bio_ur": "امام الحدیث، مصنف جامع الترمذی و شمائل نبویہ",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-shamail-tirmidhi-urdu-front",
        "book_id": "book-shamail-tirmidhi-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-shamail-tirmidhi-urdu-gallery",
        "book_id": "book-shamail-tirmidhi-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-shamail-tirmidhi-urdu-1",
        "book_id": "book-shamail-tirmidhi-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس مجالد ایڈیشن",
        "volumes": 1,
        "binding_type": "مجالد چمڑہ نما گولڈن",
        "printing_type": "دو رنگہ نفیس کاغذ",
        "purchase_cost": 750,
        "regular_price": 1250,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1125,
        "weight_grams": 850,
        "stock_quantity": 40,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-014-ALKHALIL",
        "barcode": "89640001310",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-bulugh-al-maram-urdu",
    "title_ur": "بلوغ المرام من ادلۃ الاحکام مع سبل السلام اردو",
    "title_en": "Bulugh al-Maram with Subul al-Salam Urdu",
    "subtitle_ur": "حافظ ابن حجر عسقلانی کا احادیث احکام کا مستند ترین نصابی انتخاب",
    "category_id": "c-3",
    "description_ur": "احادیث احکام کا وہ مختصر اور جامع ترین مجموعہ جس میں حافظ ابن حجرؒ نے طہارت، صلاۃ، زکاۃ، صوم، حج، بیوع اور حدود وغیرہ کے شرعی احکام پر وارد احادیث کو سندی حکم کے ساتھ جمع فرمایا ہے۔ اردو حواشی کے ساتھ۔",
    "language": "عربی مع اردو ترجمہ و تشریح",
    "binding_type": "مجالد ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 680,
    "publication_year": 2023,
    "isbn": "978-969-564-215-9",
    "sku": "AK-HD-015",
    "tags": [
      "بلوغ المرام",
      "ابن حجر",
      "احادیث احکام",
      "سبل السلام"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2100,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-ibnhajar",
          "name_ur": "حافظ احمد بن علی ابن حجر عسقلانیؒ",
          "name_en": "Hafiz Ibn Hajar al-Asqalani",
          "bio_ur": "خاتمۃ الحفاظ، شارح صحیح بخاری (فتح الباری) و مصنف بلوغ المرام",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-bulugh-al-maram-urdu-front",
        "book_id": "book-bulugh-al-maram-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-bulugh-al-maram-urdu-gallery",
        "book_id": "book-bulugh-al-maram-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-bulugh-al-maram-urdu-1",
        "book_id": "book-bulugh-al-maram-urdu",
        "publisher_id": "pub-darussalam",
        "publisher": {
          "id": "pub-darussalam",
          "name_ur": "دار السلام پبلیکیشنز",
          "name_en": "Darussalam Publications",
          "description": "عالمی سطح پر معروف اسلامی اشاعتی ادارہ",
          "contact_info": "لاہور، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار السلام تحقیق و تخریج شدہ ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک فاخر",
        "printing_type": "دو رنگہ کریم پیپر",
        "purchase_cost": 1100,
        "regular_price": 1800,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1620,
        "weight_grams": 1100,
        "stock_quantity": 30,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-015-DARUSSALAM",
        "barcode": "89640001320",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-musnad-imam-azam",
    "title_ur": "مسند امام اعظم ابو حنیفہؒ مع اردو شرح و تخریج",
    "title_en": "Musnad Imam al-A'zam Abu Hanifah Urdu",
    "subtitle_ur": "سیدنا امام اعظم ابو حنیفہ نعمان بن ثابتؒ کی مرویات حدیث کا مستند مجموعہ",
    "category_id": "c-3",
    "description_ur": "تابعین کے دور کے عظیم امام، امام اعظم ابو حنیفہؒ کی وہ احادیث جنہیں آپ نے صحابہ کرام و کبار تابعین سے براہ راست روایت فرمایا۔ امام ابوالوفاء افغانی اور ملا علی قاریؒ کے حواشی کے ساتھ مدلل اردو ترجمہ۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 720,
    "publication_year": 2024,
    "isbn": "978-969-564-216-6",
    "sku": "AK-HD-016",
    "tags": [
      "مسند امام اعظم",
      "ابو حنیفہ",
      "حنفی حدیث",
      "مرویات"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1840,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-musnad-imam-azam-front",
        "book_id": "book-musnad-imam-azam",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1507842229452-73595690b275?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-musnad-imam-azam-gallery",
        "book_id": "book-musnad-imam-azam",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-musnad-imam-azam-1",
        "book_id": "book-musnad-imam-azam",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس مجالد ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک ریگزین",
        "printing_type": "دو رنگہ سفید کاغذ",
        "purchase_cost": 1200,
        "regular_price": 1950,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1755,
        "weight_grams": 1250,
        "stock_quantity": 25,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-016-ALKHALIL",
        "barcode": "89640001330",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1507842229452-73595690b275?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-nukhbat-ul-fikar-urdu",
    "title_ur": "نخبۃ الفکر مع نزہۃ النظر فی توضبح نخبۃ الفکر اردو",
    "title_en": "Nukhbat al-Fikar with Nuzhat al-Nazar Urdu",
    "subtitle_ur": "اصول حدیث و مصطلح الحدیث کی مسلمہ بنیاد اور اساسی درسی متن",
    "category_id": "c-3",
    "description_ur": "حافظ ابن حجر عسقلانیؒ کی علم اصول حدیث میں وہ معجز نما کتاب جس کے بعد متاخرین کے تمام اصول اسی کے گرد گھومتے ہیں۔ صحیح، ضعیف، متواتر، احاد، مرسل، معضل، منقطع اور جرح و تعدیل کے تمام مباحث سلیس اردو شرح میں۔",
    "language": "عربی مع اردو شرح",
    "binding_type": "ہارڈ بیک نفیس",
    "printing_type": "یک رنگہ سفید",
    "total_volumes": 1,
    "pages_count": 280,
    "publication_year": 2024,
    "isbn": "978-969-564-217-3",
    "sku": "AK-HD-017",
    "tags": [
      "نخبۃ الفکر",
      "اصول حدیث",
      "نزہۃ النظر",
      "درس نظامی"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1750,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-ibnhajar",
          "name_ur": "حافظ احمد بن علی ابن حجر عسقلانیؒ",
          "name_en": "Hafiz Ibn Hajar al-Asqalani",
          "bio_ur": "خاتمۃ الحفاظ، شارح صحیح بخاری (فتح الباری) و مصنف بلوغ المرام",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-nukhbat-ul-fikar-urdu-front",
        "book_id": "book-nukhbat-ul-fikar-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-nukhbat-ul-fikar-urdu-gallery",
        "book_id": "book-nukhbat-ul-fikar-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-nukhbat-ul-fikar-urdu-1",
        "book_id": "book-nukhbat-ul-fikar-urdu",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی درسی ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بائنڈنگ",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 450,
        "regular_price": 750,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 675,
        "weight_grams": 480,
        "stock_quantity": 35,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-017-BUSHRA",
        "barcode": "89640001340",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-taysir-mustalah-al-hadith",
    "title_ur": "تیسیر مصطلح الحدیث - ڈاکٹر محمود طحان (اردو ترجمہ)",
    "title_en": "Taysir Mustalah al-Hadith - Dr. Mahmood al-Tahhan Urdu",
    "subtitle_ur": "اصول حدیث کا عصر حاضر کا سب سے آسان، منظم اور جدید نصابی شاہکار",
    "category_id": "c-3",
    "description_ur": "ڈاکٹر محمود طحانؒ کی کتاب جس نے اصول حدیث کی پیچیدہ اصطلاحات کو نہایت آسان تعریفات، مثالوں اور عناوین میں پیش کیا۔ جدید عربی و اسلامی جامعات میں متفقہ نصاب کے طور پر پڑھائی جانے والی کتاب کا بہترین اردو ترجمہ۔",
    "language": "اردو (Urdu)",
    "binding_type": "ہارڈ بیک نفیس",
    "printing_type": "یک رنگہ سفید",
    "total_volumes": 1,
    "pages_count": 320,
    "publication_year": 2023,
    "isbn": "978-969-564-218-0",
    "sku": "AK-HD-018",
    "tags": [
      "تیسیر مصطلح الحدیث",
      "محمود طحان",
      "اصول حدیث"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1980,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-taysir-mustalah-al-hadith-front",
        "book_id": "book-taysir-mustalah-al-hadith",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-taysir-mustalah-al-hadith-gallery",
        "book_id": "book-taysir-mustalah-al-hadith",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-taysir-mustalah-al-hadith-1",
        "book_id": "book-taysir-mustalah-al-hadith",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز جدید ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک پیپر",
        "printing_type": "سفید اعلیٰ کاغذ",
        "purchase_cost": 500,
        "regular_price": 850,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 765,
        "weight_grams": 520,
        "stock_quantity": 30,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-018-ALKHALIL",
        "barcode": "89640001350",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-sunan-al-darimi-urdu",
    "title_ur": "سنن دارمی شریف اردو (۲ جلدیں مکمل)",
    "title_en": "Sunan al-Darimi Urdu Translation (2 Volumes)",
    "subtitle_ur": "امام عبد اللہ بن عبد الرحمن دارمیؒ کی عالی اسناد احادیث کا نفیس مجموعہ",
    "category_id": "c-3",
    "description_ur": "سنن دارمی ائمہ حدیث کے نزدیک بلند پایہ مقام رکھتی ہے۔ اس کا مقدمہ اتباع سنت، طلب علم کی فضیلت اور فتویٰ نویسی کے احتیاطی اصولوں پر مشتمل ہے۔ احادیث ثلاثیات اور عالی اسناد کا گراں قدر انتخاب۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک (2 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 2,
    "pages_count": 1650,
    "publication_year": 2024,
    "isbn": "978-969-564-219-7",
    "sku": "AK-HD-019",
    "tags": [
      "سنن دارمی",
      "امام دارمی",
      "حدیث شریف"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1420,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-darimi",
          "name_ur": "امام عبد اللہ بن عبد الرحمن دارمیؒ",
          "name_en": "Imam Al-Darimi",
          "bio_ur": "عظیم محدث اور مصنف سنن دارمی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-sunan-al-darimi-urdu-front",
        "book_id": "book-sunan-al-darimi-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-sunan-al-darimi-urdu-gallery",
        "book_id": "book-sunan-al-darimi-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-sunan-al-darimi-urdu-1",
        "book_id": "book-sunan-al-darimi-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز 2 جلدیں ایڈیشن",
        "volumes": 2,
        "binding_type": "مجالد ہارڈ بیک",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 2600,
        "regular_price": 4000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 3600,
        "weight_grams": 2700,
        "stock_quantity": 18,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-019-ALKHALIL",
        "barcode": "89640001360",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-at-targhib-wat-tarhib-urdu",
    "title_ur": "الترغیب والترہیب اردو مع تحقیق و تخریج (۴ جلدیں)",
    "title_en": "Al-Targhib wa al-Tarhib Urdu (4 Volumes Complete)",
    "subtitle_ur": "حافظ عبد العظیم منذریؒ کا عبادات، اخلاق اور وعظ پر مشتمل جامع انسائیکلوپیڈیا",
    "category_id": "c-3",
    "description_ur": "نیکیوں کے فضائل اور ترغیبات اور گناہوں کے نقصانات و وعیدوں پر مشتمل احادیث نبویہ کا عظیم ذخیرہ۔ خطباء، واعظین اور ہر مسلمان کے لیے دینی و روحانی جذبہ بیدار کرنے والی بے مثال تصنیف۔ مکمل تخریج شدہ اردو ترجمہ۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک (4 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 4,
    "pages_count": 3200,
    "publication_year": 2023,
    "isbn": "978-969-564-220-3",
    "sku": "AK-HD-020",
    "tags": [
      "الترغیب والترہیب",
      "حافظ منذری",
      "فضائل اعمال",
      "وعظ"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2280,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-mundhiri",
          "name_ur": "حافظ عبد العظیم بن عبد القوی منذریؒ",
          "name_en": "Hafiz Al-Mundhiri",
          "bio_ur": "محدث جلیل اور مصنف کتاب الترغیب والترہیب",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-at-targhib-wat-tarhib-urdu-front",
        "book_id": "book-at-targhib-wat-tarhib-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-at-targhib-wat-tarhib-urdu-gallery",
        "book_id": "book-at-targhib-wat-tarhib-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-at-targhib-wat-tarhib-urdu-1",
        "book_id": "book-at-targhib-wat-tarhib-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز 4 جلدیں سیٹ",
        "volumes": 4,
        "binding_type": "مجالد ہارڈ بیک ریگزین",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 5400,
        "regular_price": 8500,
        "discount_type": "percentage",
        "discount_value": 12,
        "final_price": 7480,
        "weight_grams": 5600,
        "stock_quantity": 15,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-020-ALKHALIL",
        "barcode": "89640001370",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-maarif-ul-hadith",
    "title_ur": "معارف الحدیث - مولانا محمد منظور نعمانیؒ (۴ جلدیں)",
    "title_en": "Maarif-ul-Hadith - Maulana Muhammad Manzoor Nomani (4 Volumes)",
    "subtitle_ur": "روزمرہ زندگی کے لیے احادیث نبویہ کا فہم و بصیرت سے بھرپور سلیس بیان",
    "category_id": "c-3",
    "description_ur": "مولانا محمد منظور نعمانیؒ کی گراں قدر کتاب جس میں انہوں نے منتخب احادیث نبویہ کی تشریح اس انداز میں فرمائی کہ قاری کے دل میں سنت نبوی کی عظمت اور عمل کا سچا جذبہ پیدا ہوتا ہے۔ دینی و دعوتی حلقوں میں یکساں مقبول۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک (4 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 4,
    "pages_count": 2600,
    "publication_year": 2024,
    "isbn": "978-969-564-221-0",
    "sku": "AK-HD-021",
    "tags": [
      "معارف الحدیث",
      "منظور نعمانی",
      "سنت نبوی",
      "اردو حدیث"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 2900,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-nomani",
          "name_ur": "مولانا محمد منظور نعمانیؒ",
          "name_en": "Maulana Muhammad Manzoor Nomani",
          "bio_ur": "فاضل مدبر اور مصنف معارف الحدیث (4 جلدیں)",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-maarif-ul-hadith-front",
        "book_id": "book-maarif-ul-hadith",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-maarif-ul-hadith-gallery",
        "book_id": "book-maarif-ul-hadith",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-maarif-ul-hadith-1",
        "book_id": "book-maarif-ul-hadith",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس مجالد سیٹ (4 جلدیں)",
        "volumes": 4,
        "binding_type": "مجالد ہارڈ بیک گولڈن",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 4200,
        "regular_price": 6500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 5850,
        "weight_grams": 4300,
        "stock_quantity": 24,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-021-ALKHALIL",
        "barcode": "89640001380",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-al-jami-al-saghir-suyuti",
    "title_ur": "الجامع الصغیر من احادیث البشیر النذیر - علامہ جلال الدین سیوطی (۲ جلدیں)",
    "title_en": "Al-Jami al-Saghir - Jalal al-Din al-Suyuti (2 Volumes)",
    "subtitle_ur": "حروف تہجی کی ترتیب پر دس ہزار مختصر اور جامع احادیث کا انسائیکلوپیڈیا",
    "category_id": "c-3",
    "description_ur": "علامہ سیوطیؒ نے احادیث قولیہ کو حروف ہجائی کی ترتیب پر جمع فرما کر ہر حدیث کی تخریج اور صحت و ضعف کی علامات درج فرمائیں۔ تحقیق و افتاء کے لیے انتہائی سہل ترین کتاب۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک (2 جلدیں)",
    "printing_type": "دو رنگہ بیروتی انداز",
    "total_volumes": 2,
    "pages_count": 1550,
    "publication_year": 2023,
    "isbn": "978-969-564-222-7",
    "sku": "AK-HD-022",
    "tags": [
      "الجامع الصغیر",
      "سیوطی",
      "احادیث نبویہ"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1350,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-suyuti",
          "name_ur": "علامہ جلال الدین عبد الرحمن سیوطیؒ",
          "name_en": "Jalal al-Din al-Suyuti",
          "bio_ur": "کثیر التصانیف امام، مفسر و مصنف الاتقان فی علوم القرآن و تفسیر جلالین",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-al-jami-al-saghir-suyuti-front",
        "book_id": "book-al-jami-al-saghir-suyuti",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-al-jami-al-saghir-suyuti-gallery",
        "book_id": "book-al-jami-al-saghir-suyuti",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-al-jami-al-saghir-suyuti-1",
        "book_id": "book-al-jami-al-saghir-suyuti",
        "publisher_id": "pub-zamzam",
        "publisher": {
          "id": "pub-zamzam",
          "name_ur": "زمزم پبلشرز",
          "name_en": "Zam Zam Publishers",
          "description": "کتب احادیث اور عربی شروحات کا ممتاز اشاعتی ادارہ",
          "contact_info": "اردو بازار، کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "زمزم پبلشرز کراچی ایڈیشن (2 جلدیں)",
        "volumes": 2,
        "binding_type": "ہارڈ بیک مجالد",
        "printing_type": "دو رنگہ سفید کاغذ",
        "purchase_cost": 2600,
        "regular_price": 4200,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 3780,
        "weight_grams": 2700,
        "stock_quantity": 16,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-022-ZAMZAM",
        "barcode": "89640001390",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-tahawi-sharh-maani-al-athar",
    "title_ur": "شرح معانی الآثار (طحاوی شریف) - امام ابو جعفر طحاویؒ (۴ جلدیں)",
    "title_en": "Sharh Ma'ani al-Athar (Tahawi Sharif) - 4 Volumes",
    "subtitle_ur": "فقہ حنفی کے احادیث سے استدلال، ناسخ و منسوخ اور تطبیق روایات کی بنیاد",
    "category_id": "c-3",
    "description_ur": "محدث و فقیہ امت امام ابو جعفر احمد بن محمد طحاویؒ کی مایہ ناز تصنیف جس میں بظاہر متعارض احادیث کے درمیان تطبیق اور ترجیح کے اصولوں کو فقہی بصیرت کے ساتھ واضح کیا گیا ہے۔ دورۂ حدیث کا لازمی نصاب۔",
    "language": "عربی مع اردو حواشی",
    "binding_type": "مجالد ہارڈ بیک (4 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 4,
    "pages_count": 3100,
    "publication_year": 2024,
    "isbn": "978-969-564-223-4",
    "sku": "AK-HD-023",
    "tags": [
      "طحاوی شریف",
      "شرح معانی الآثار",
      "امام طحاوی",
      "درس نظامی"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2150,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-tahawi-sharh-maani-al-athar-front",
        "book_id": "book-tahawi-sharh-maani-al-athar",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-tahawi-sharh-maani-al-athar-gallery",
        "book_id": "book-tahawi-sharh-maani-al-athar",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-tahawi-sharh-maani-al-athar-1",
        "book_id": "book-tahawi-sharh-maani-al-athar",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی کمپیوٹرائزڈ ایڈیشن (4 جلدیں)",
        "volumes": 4,
        "binding_type": "مجالد فاخر ہارڈ بائنڈنگ",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 5200,
        "regular_price": 8000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 7200,
        "weight_grams": 5400,
        "stock_quantity": 20,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-023-BUSHRA",
        "barcode": "89640001400",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-arbaeen-nawawi-urdu",
    "title_ur": "الاربعین النووئیۃ مع اردو شرح تحفۃ المتقین",
    "title_en": "Al-Arba'een al-Nawawiyyah with Urdu Commentary",
    "subtitle_ur": "دین اسلام کے بنیادی ارکان و اصول پر مشتمل چالیس جامع ترین احادیث",
    "category_id": "c-3",
    "description_ur": "امام نوویؒ کی منتخب کردہ چالیس ایسی احادیث جن پر اسلام کی بنیاد اور اسلامی قوانین کا دارومدار ہے۔ حفظ کرنے کے لیے آسان، سلیس اردو ترجمہ اور ہر حدیث سے مستنبط ہونے والے روزمرہ کے فوائد پر مشتمل کتاب۔",
    "language": "عربی مع اردو ترجمہ و شرح",
    "binding_type": "پیپر بیک نفیس",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 160,
    "publication_year": 2024,
    "isbn": "978-969-564-224-1",
    "sku": "AK-HD-024",
    "tags": [
      "اربعین نووی",
      "امام نووی",
      "چالیس احادیث"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2400,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-nawawi",
          "name_ur": "امام محیی الدین یحییٰ بن شرف نوویؒ",
          "name_en": "Imam Yahya ibn Sharaf al-Nawawi",
          "bio_ur": "عظیم فقیہ و محدث، مصنف ریاض الصالحین، اربعین نووی و شرح مسلم",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-arbaeen-nawawi-urdu-front",
        "book_id": "book-arbaeen-nawawi-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-arbaeen-nawawi-urdu-gallery",
        "book_id": "book-arbaeen-nawawi-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-arbaeen-nawawi-urdu-1",
        "book_id": "book-arbaeen-nawawi-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز دیدہ زیب ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ پیپر لیمینیشن",
        "printing_type": "دو رنگہ اعلیٰ معیار",
        "purchase_cost": 250,
        "regular_price": 450,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 405,
        "weight_grams": 260,
        "stock_quantity": 60,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HD-024-ALKHALIL",
        "barcode": "89640001410",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-al-hidayah-marghinani",
    "title_ur": "الہدایۃ فی شرح بدایۃ المبتدی - علامہ برہان الدین مرغینانی (۴ جلدیں)",
    "title_en": "Al-Hidayah fi Sharh Bidayat al-Mubtadi (4 Volumes)",
    "subtitle_ur": "فقہ حنفی کا سب سے معتمد اور فقہی دلائل و مناظرات کا مستند ترین درسی شاہکار",
    "category_id": "c-4",
    "description_ur": "علامہ برہان الدین علی بن ابی بکر مرغینانیؒ کی وہ لازوال تصنیف جس کے بارے میں کہا گیا: \"ان الہدایۃ کالقرآن قد نسخت ما صنفوا قبلہا فی الشرع من کتب\"۔ فقہ حنفی کے فروعی مسائل کو کتاب و سنت اور قیاس جلی سے ثابت کرنے والی کتاب۔ درس نظامی کی موقوف علیہ کتاب۔",
    "language": "عربی مع حواشی و شروحات",
    "binding_type": "مجالد ہارڈ بیک (4 جلدیں)",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 4,
    "pages_count": 2800,
    "publication_year": 2024,
    "isbn": "978-969-564-301-9",
    "sku": "AK-FQ-001",
    "tags": [
      "الہدایہ",
      "مرغینانی",
      "فقہ حنفی",
      "درس نظامی",
      "دلائل فقہ"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 4200,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-marghinani",
          "name_ur": "علامہ برہان الدین علی بن ابی بکر مرغینانیؒ",
          "name_en": "Burhan al-Din al-Marghinani",
          "bio_ur": "عظیم فقیہ حنفی اور مصنف کتاب الہدایۃ فی شرح بدایۃ المبتدی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-al-hidayah-marghinani-front",
        "book_id": "book-al-hidayah-marghinani",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-al-hidayah-marghinani-gallery",
        "book_id": "book-al-hidayah-marghinani",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-al-hidayah-marghinani-1",
        "book_id": "book-al-hidayah-marghinani",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی کمپیوٹرائزڈ ایڈیشن مع حواشی جدیدہ (4 جلدیں)",
        "volumes": 4,
        "binding_type": "مجالد فاخر ہارڈ بیک",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 5800,
        "regular_price": 8800,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 7920,
        "weight_grams": 6200,
        "stock_quantity": 30,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-001-BUSHRA",
        "barcode": "89640001420",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "ed-book-al-hidayah-marghinani-2",
        "book_id": "book-al-hidayah-marghinani",
        "publisher_id": "pub-qadimi",
        "publisher": {
          "id": "pub-qadimi",
          "name_ur": "قدیمی کتب خانہ",
          "name_en": "Qadimi Kutub Khana",
          "description": "درس نظامی کی قدیم عربی و اردو کتب کا مرکز",
          "contact_info": "آرام باغ روڈ، کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "قدیمی کتب خانہ کلاسک حاشیہ ایڈیشن",
        "volumes": 4,
        "binding_type": "ہارڈ بیک ریگزین",
        "printing_type": "یک رنگہ سفید",
        "purchase_cost": 4400,
        "regular_price": 6800,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 6120,
        "weight_grams": 5900,
        "stock_quantity": 18,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-001-QADIMI",
        "barcode": "89640001421",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-radd-al-muhtar-shami",
    "title_ur": "رد المحتار علی الدر المختار (فتاویٰ شامی) - علامہ ابن عابدین (۱۲ جلدیں)",
    "title_en": "Radd al-Muhtar ala al-Durr al-Mukhtar (Fatawa Shami) - 12 Volumes",
    "subtitle_ur": "متاخرین فقہائے احناف کا حتمی، راجح اور فتوے کا معتمد ترین ماخذ",
    "category_id": "c-4",
    "description_ur": "خاتمۃ المحققین علامہ سید محمد امین ابن عابدین شامیؒ کی وہ بے نظیر فقہی تالیف جو عالم اسلام کے تمام دار الافتاء کا بنیادی مرجع ہے۔ جزئیات فقہیہ کی چھان بین، روایات ساقطہ کی اصلاح اور مفتی بہ اقوال کی نشاندہی اس کتاب کا امتیازی وصف ہے۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر شامی (12 جلدیں)",
    "printing_type": "دو رنگہ بیروتی طباعت",
    "total_volumes": 12,
    "pages_count": 9800,
    "publication_year": 2023,
    "isbn": "978-969-564-302-6",
    "sku": "AK-FQ-002",
    "tags": [
      "فتاویٰ شامی",
      "رد المحتار",
      "ابن عابدین",
      "دار الافتاء",
      "فقہ حنفی"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3600,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-ibnabidin",
          "name_ur": "علامہ سید محمد امین ابن عابدین شامیؒ",
          "name_en": "Ibn Abidin al-Shami",
          "bio_ur": "محقق حنفی اور مصنف رد المحتار علی الدر المختار (فتاویٰ شامی)",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-radd-al-muhtar-shami-front",
        "book_id": "book-radd-al-muhtar-shami",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-radd-al-muhtar-shami-gallery",
        "book_id": "book-radd-al-muhtar-shami",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-radd-al-muhtar-shami-1",
        "book_id": "book-radd-al-muhtar-shami",
        "publisher_id": "pub-dar-kutub",
        "publisher": {
          "id": "pub-dar-kutub",
          "name_ur": "دار الکتب العلمیہ بیروت",
          "name_en": "Dar Al-Kotob Al-Ilmiyah Beirut",
          "description": "عالم اسلام میں عربی تراث و مصادر کی عظیم بین الاقوامی اشاعت گاہ",
          "contact_info": "بیروت، لبنان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار الکتب العلمیہ بیروت اصلی ایڈیشن (12 جلدیں)",
        "volumes": 12,
        "binding_type": "مجالد فاخر چمڑہ نما",
        "printing_type": "دو رنگہ اعلیٰ امپورٹڈ قرطاس",
        "purchase_cost": 24000,
        "regular_price": 35000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 31500,
        "weight_grams": 16500,
        "stock_quantity": 8,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-002-DAR-KUTUB",
        "barcode": "89640001430",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "ed-book-radd-al-muhtar-shami-2",
        "book_id": "book-radd-al-muhtar-shami",
        "publisher_id": "pub-qadimi",
        "publisher": {
          "id": "pub-qadimi",
          "name_ur": "قدیمی کتب خانہ",
          "name_en": "Qadimi Kutub Khana",
          "description": "درس نظامی کی قدیم عربی و اردو کتب کا مرکز",
          "contact_info": "آرام باغ روڈ، کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "قدیمی کتب خانہ کراچی ایڈیشن (12 جلدیں)",
        "volumes": 12,
        "binding_type": "ہارڈ بیک کلاسک",
        "printing_type": "یک رنگہ سفید کاغذ",
        "purchase_cost": 16500,
        "regular_price": 25000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 22500,
        "weight_grams": 15200,
        "stock_quantity": 12,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-002-QADIMI",
        "barcode": "89640001431",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-fatawa-alamgiri-urdu",
    "title_ur": "فتاویٰ عالمگیری اردو (الفتاویٰ الہندیۃ) - ۶ جلدیں مکمل",
    "title_en": "Fatawa Alamgiri Urdu (Al-Fatawa al-Hindiyyah) - 6 Volumes",
    "subtitle_ur": "سلطان اورنگزیب عالمگیرؒ کے دور میں علماء ہند کا تیار کردہ اسلامی دستور و قانون",
    "category_id": "c-4",
    "description_ur": "پانچ سو جلیل القدر فقہاء کی محنت سے تیار کردہ فقہ حنفی کا عظیم الشان قانونی ذخیرہ۔ عبادات، معاملات، قضاء، جنایات اور نکاح و طلاق کے ہر مسئلے کا راجح و مفتی بہ حل نہایت منظم انداز میں درج ہے۔ مکمل اردو ترجمہ۔",
    "language": "عربی مع اردو مکمل ترجمہ",
    "binding_type": "مجالد ہارڈ بیک (6 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 6,
    "pages_count": 5400,
    "publication_year": 2024,
    "isbn": "978-969-564-303-3",
    "sku": "AK-FQ-003",
    "tags": [
      "فتاویٰ عالمگیری",
      "فتاویٰ ہندیہ",
      "اورنگزیب عالمگیر",
      "فقہ حنفی"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3100,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-fatawa-alamgiri-urdu-front",
        "book_id": "book-fatawa-alamgiri-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-fatawa-alamgiri-urdu-gallery",
        "book_id": "book-fatawa-alamgiri-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-fatawa-alamgiri-urdu-1",
        "book_id": "book-fatawa-alamgiri-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس 6 جلدیں سیٹ (باکس پیک)",
        "volumes": 6,
        "binding_type": "مجالد چمڑہ نما گولڈن",
        "printing_type": "دو رنگہ معیاری قرطاس",
        "purchase_cost": 9200,
        "regular_price": 14500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 13050,
        "weight_grams": 9800,
        "stock_quantity": 16,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-003-ALKHALIL",
        "barcode": "89640001440",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-badai-as-sanai-kasani",
    "title_ur": "بدائع الصنائع فی ترتیب الشرائع - علامہ علاء الدین کاسانی (۱۰ جلدیں)",
    "title_en": "Bada'i al-Sana'i fi Tartib al-Shara'i - Al-Kasani (10 Volumes)",
    "subtitle_ur": "منطقی تقسیم، جامع حسن ترتیب اور فقہ حنفی کی سب سے منظم کتاب",
    "category_id": "c-4",
    "description_ur": "ملک العلماء امام علاء الدین کاسانی حنفیؒ کی بے مثل کتاب جس میں انہوں نے تحفۃ الفقہاء کی شرح میں فقہ کی ایسی لاجواب اور منطقی درجہ بندی فرمائی کہ اس دور کے فقہاء دنگ رہ گئے۔ استدلال اور حسن ترتیب کا شاہکار۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر (10 جلدیں)",
    "printing_type": "دو رنگہ بیروتی انداز",
    "total_volumes": 10,
    "pages_count": 7200,
    "publication_year": 2023,
    "isbn": "978-969-564-304-0",
    "sku": "AK-FQ-004",
    "tags": [
      "بدائع الصنائع",
      "امام کاسانی",
      "فقہ حنفی",
      "عربی کتب"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1850,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-kasani",
          "name_ur": "امام علاء الدین ابو بکر بن مسعود کاسانیؒ",
          "name_en": "Ala al-Din al-Kasani",
          "bio_ur": "ملک العلماء اور مصنف کتاب بدائع الصنائع فی ترتیب الشرائع",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-badai-as-sanai-kasani-front",
        "book_id": "book-badai-as-sanai-kasani",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-badai-as-sanai-kasani-gallery",
        "book_id": "book-badai-as-sanai-kasani",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-badai-as-sanai-kasani-1",
        "book_id": "book-badai-as-sanai-kasani",
        "publisher_id": "pub-dar-kutub",
        "publisher": {
          "id": "pub-dar-kutub",
          "name_ur": "دار الکتب العلمیہ بیروت",
          "name_en": "Dar Al-Kotob Al-Ilmiyah Beirut",
          "description": "عالم اسلام میں عربی تراث و مصادر کی عظیم بین الاقوامی اشاعت گاہ",
          "contact_info": "بیروت، لبنان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار الکتب العلمیہ بیروت ایڈیشن (10 جلدیں)",
        "volumes": 10,
        "binding_type": "مجالد فاخر",
        "printing_type": "دو رنگہ اعلیٰ معیار",
        "purchase_cost": 18500,
        "regular_price": 28000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 25200,
        "weight_grams": 13500,
        "stock_quantity": 6,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-004-DAR-KUTUB",
        "barcode": "89640001450",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-mukhtasar-al-quduri",
    "title_ur": "مختصر القدوری مع اردو تسہیل و تشریح",
    "title_en": "Mukhtasar al-Quduri with Urdu Translation & Notes",
    "subtitle_ur": "فقہ حنفی کا بنیادی اور معتمد ترین نصابی متن (المتن المعتمد فی المذہب)",
    "category_id": "c-4",
    "description_ur": "امام ابو الحسین احمد بن محمد قدوریؒ کی صدیوں سے مستعمل وہ بنیادی کتاب جس کے بارے میں کہا گیا کہ جس نے قدوری کو سمجھ لیا اس نے فقہ کا بڑا حصہ پا لیا۔ درس نظامی کے ابتدائی درجات کے لیے سلیس زبان اور تفہیمی سوال و جواب کے ساتھ۔",
    "language": "عربی مع اردو ترجمہ و تسہیل",
    "binding_type": "ہارڈ بیک نفیس",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 480,
    "publication_year": 2024,
    "isbn": "978-969-564-305-7",
    "sku": "AK-FQ-005",
    "tags": [
      "قدوری",
      "مختصر القدوری",
      "درس نظامی",
      "فقہ حنفی"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3200,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-quduri",
          "name_ur": "امام ابو الحسین احمد بن محمد قدوریؒ",
          "name_en": "Imam Al-Quduri",
          "bio_ur": "فقیہ عراق اور مصنف المتن المعتمد مختصر القدوری",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-mukhtasar-al-quduri-front",
        "book_id": "book-mukhtasar-al-quduri",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-mukhtasar-al-quduri-gallery",
        "book_id": "book-mukhtasar-al-quduri",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-mukhtasar-al-quduri-1",
        "book_id": "book-mukhtasar-al-quduri",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی کمپیوٹرائزڈ ایڈیشن مع عناوین",
        "volumes": 1,
        "binding_type": "ہارڈ بیک مجالد",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 650,
        "regular_price": 1050,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 945,
        "weight_grams": 750,
        "stock_quantity": 45,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-005-BUSHRA",
        "barcode": "89640001460",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-nur-al-idah",
    "title_ur": "نور الایضاح مع مراقی الفلاح اردو شرح",
    "title_en": "Nur al-Idah with Maraqi al-Falah Urdu",
    "subtitle_ur": "طہارت، نماز اور روزے کے بنیادی مسائل کا فقہ حنفی کے مطابق جامع گلدستہ",
    "category_id": "c-4",
    "description_ur": "علامہ حسن بن عمار شرنبلالیؒ کا وہ مقبول زمانہ متن جو عبادات کی صحت و فساد کے احکام کا احاطہ کرتا ہے۔ وضو، غسل، تیمم، نماز، سجدہ سہو، جنازہ اور صوم کے تمام لازمی احکام اردو میں واضح تشریح کے ساتھ۔",
    "language": "عربی مع اردو ترجمہ و تشریح",
    "binding_type": "ہارڈ بیک نفیس",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 520,
    "publication_year": 2024,
    "isbn": "978-969-564-306-4",
    "sku": "AK-FQ-006",
    "tags": [
      "نور الایضاح",
      "مراقی الفلاح",
      "شرنبلالی",
      "عبادات"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2400,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-shurunbulali",
          "name_ur": "علامہ حسن بن عمار شرنبلالیؒ",
          "name_en": "Hasan al-Shurunbulali",
          "bio_ur": "فقیہ حنفی اور مصنف نور الایضاح و مراقی الفلاح",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-nur-al-idah-front",
        "book_id": "book-nur-al-idah",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-nur-al-idah-gallery",
        "book_id": "book-nur-al-idah",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-nur-al-idah-1",
        "book_id": "book-nur-al-idah",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی جدید ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک فاخر",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 700,
        "regular_price": 1150,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1035,
        "weight_grams": 780,
        "stock_quantity": 35,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-006-BUSHRA",
        "barcode": "89640001470",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-kanz-ud-daqaiq",
    "title_ur": "کنز الدقائق مع اردو شرح تسہیل الحقائق",
    "title_en": "Kanz al-Daqaiq with Urdu Commentary",
    "subtitle_ur": "امام ابو البرکات نسفیؒ کا ایجاز و اختصار اور بلاغت کا معجزہ متن فقہ",
    "category_id": "c-4",
    "description_ur": "امام عبد اللہ بن احمد نسفیؒ کا وہ معرکۃ الآراء متن جس میں سمندر کو کوزے میں بند کیا گیا ہے۔ ہر لفظ اور قید سے متعدد فقہی احکام نکلتے ہیں۔ درس نظامی کے طلبہ کے لیے مفید اردو تشریح اور علامات ترجیح کے ساتھ۔",
    "language": "عربی مع اردو شرح",
    "binding_type": "مجالد ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 620,
    "publication_year": 2023,
    "isbn": "978-969-564-307-1",
    "sku": "AK-FQ-007",
    "tags": [
      "کنز الدقائق",
      "امام نسفی",
      "درس نظامی",
      "متن فقہ"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2100,
    "created_at": "2026-10-25T08:13:52.883Z",
    "updated_at": "2026-10-25T08:13:52.883Z",
    "authors": [
      {
        "author": {
          "id": "auth-nasafi",
          "name_ur": "امام ابو البرکات عبد اللہ بن احمد نسفیؒ",
          "name_en": "Imam Al-Nasafi",
          "bio_ur": "صاحب مدارک التنزیل، کنز الدقائق و المنار فی اصول الفقہ",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-kanz-ud-daqaiq-front",
        "book_id": "book-kanz-ud-daqaiq",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.883Z"
      },
      {
        "id": "img-book-kanz-ud-daqaiq-gallery",
        "book_id": "book-kanz-ud-daqaiq",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.883Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-kanz-ud-daqaiq-1",
        "book_id": "book-kanz-ud-daqaiq",
        "publisher_id": "pub-qadimi",
        "publisher": {
          "id": "pub-qadimi",
          "name_ur": "قدیمی کتب خانہ",
          "name_en": "Qadimi Kutub Khana",
          "description": "درس نظامی کی قدیم عربی و اردو کتب کا مرکز",
          "contact_info": "آرام باغ روڈ، کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "قدیمی کتب خانہ کراچی ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک کلاسک",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 850,
        "regular_price": 1350,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1215,
        "weight_grams": 920,
        "stock_quantity": 28,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-007-QADIMI",
        "barcode": "89640001480",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.883Z",
        "updated_at": "2026-10-25T08:13:52.883Z"
      }
    ]
  },
  {
    "id": "book-fatawa-razawiyyah-complete",
    "title_ur": "الفتاویٰ الرضویۃ - امام احمد رضا خان قادری بریلویؒ (۳۰ جلدیں)",
    "title_en": "Al-Fatawa al-Razawiyyah (30 Volumes Complete Set)",
    "subtitle_ur": "برصغیر پاک و ہند کے فتاویٰ کا عظیم ترین، مبسوط اور ضخیم ترین علمی انسائیکلوپیڈیا",
    "category_id": "c-4",
    "description_ur": "اعلیٰ حضرت امام احمد رضا خان بریلویؒ کے فقہی رسائل اور فتاویٰ کا 30 جلدوں پر مشتمل بحر ناپیدا کنار۔ ریاضی، فلکیات، منطق اور فقہ حنفی کے نایاب ترین جزئیات و نصوص کے حوالے سے لیس۔ تحقیقی اداروں کے لیے بیش بہا خزانہ۔",
    "language": "عربی و اردو",
    "binding_type": "مجالد فاخر ہارڈ بیک (30 جلدیں)",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 30,
    "pages_count": 21500,
    "publication_year": 2023,
    "isbn": "978-969-564-308-8",
    "sku": "AK-FQ-008",
    "tags": [
      "فتاویٰ رضویہ",
      "احمد رضا خان",
      "اہل سنت",
      "فتاویٰ",
      "مکمل سیٹ"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3100,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-ahmadraza",
          "name_ur": "امام احمد رضا خان قادری بریلویؒ",
          "name_en": "Imam Ahmad Raza Khan",
          "bio_ur": "عظیم فقیہ، مترجم کنز الایمان اور مصنف فتاویٰ رضویہ (30 جلدیں)",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-fatawa-razawiyyah-complete-front",
        "book_id": "book-fatawa-razawiyyah-complete",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-fatawa-razawiyyah-complete-gallery",
        "book_id": "book-fatawa-razawiyyah-complete",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-fatawa-razawiyyah-complete-1",
        "book_id": "book-fatawa-razawiyyah-complete",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس 30 جلدیں مکمل ایڈیشن",
        "volumes": 30,
        "binding_type": "مجالد چمڑہ نما گولڈن ایمبوسنگ",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 48000,
        "regular_price": 69000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 62100,
        "weight_grams": 38000,
        "stock_quantity": 5,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-008-ALKHALIL",
        "barcode": "89640001490",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-fatawa-usmani",
    "title_ur": "فتاویٰ عثمانی - شیخ الاسلام مفتی محمد تقی عثمانی (۴ جلدیں)",
    "title_en": "Fatawa Usmani - Mufti Muhammad Taqi Usmani (4 Volumes)",
    "subtitle_ur": "دار العلوم کراچی کے دار الافتاء کے مستند، معتدل اور تحقیقی فتاویٰ کا مجموعہ",
    "category_id": "c-4",
    "description_ur": "شیخ الاسلام مفتی محمد تقی عثمانی دامت برکاتہم کے وہ فتاویٰ جو دار العلوم کراچی کے دار الافتاء سے جاری ہوئے۔ عبادات، معاملات، بینکنگ، شیئرز، جدید تجارتی معاہدات اور خاندانی تنازعات کا شریعت اسلامی کی روشنی میں دلنشین حل۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک (4 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 4,
    "pages_count": 2600,
    "publication_year": 2024,
    "isbn": "978-969-564-309-5",
    "sku": "AK-FQ-009",
    "tags": [
      "فتاویٰ عثمانی",
      "مفتی تقی عثمانی",
      "دار العلوم کراچی",
      "جدید مسائل"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3900,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-taqi",
          "name_ur": "شیخ الاسلام مفتی محمد تقی عثمانی",
          "name_en": "Mufti Muhammad Taqi Usmani",
          "bio_ur": "معروف عالم دین، نائب صدر دار العلوم کراچی و سابق جج شرعی اپیلٹ بینچ سپریم کورٹ آف پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-fatawa-usmani-front",
        "book_id": "book-fatawa-usmani",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-fatawa-usmani-gallery",
        "book_id": "book-fatawa-usmani",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-fatawa-usmani-1",
        "book_id": "book-fatawa-usmani",
        "publisher_id": "pub-maarif",
        "publisher": {
          "id": "pub-maarif",
          "name_ur": "مکتبۃ معارف القرآن (دار العلوم کراچی)",
          "name_en": "Maktaba Maariful Quran",
          "description": "دار العلوم کراچی کی مستند علمی و تفسیری مطبوعات",
          "contact_info": "کورنگی کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ معارف القرآن دار العلوم کراچی (4 جلدیں مکمل)",
        "volumes": 4,
        "binding_type": "مجالد ہارڈ بیک ریگزین",
        "printing_type": "سفید اعلیٰ کاغذ",
        "purchase_cost": 4500,
        "regular_price": 6800,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 6120,
        "weight_grams": 4800,
        "stock_quantity": 24,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-009-MAARIF",
        "barcode": "89640001500",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-ahsan-ul-fatawa",
    "title_ur": "احسن الفتاویٰ - مفتی رشید احمد لدھیانویؒ (۱۰ جلدیں)",
    "title_en": "Ahsan-ul-Fatawa - Mufti Rasheed Ahmad Ludhianvi (10 Volumes)",
    "subtitle_ur": "تحقیق مسائل، حلِ اشکالات اور فقہی استحضار کا مایہ ناز شاہکار",
    "category_id": "c-4",
    "description_ur": "بانی دار الافتاء والارشاد کراچی مفتی رشید احمد لدھیانویؒ کے فتاویٰ کا دس جلدوں پر مشتمل مجموعہ۔ باریک بینی، دقت نظر اور اصول فقہ کی تطبیق میں یہ فتاویٰ امتیازی مقام رکھتے ہیں۔ ہر مسئلے کے لیے کتب متون و شروح کے وافر مراجع۔",
    "language": "اردو مع عربی نصوص",
    "binding_type": "مجالد ہارڈ بیک (10 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 10,
    "pages_count": 6400,
    "publication_year": 2023,
    "isbn": "978-969-564-310-1",
    "sku": "AK-FQ-010",
    "tags": [
      "احسن الفتاویٰ",
      "مفتی رشید احمد",
      "دار الافتاء",
      "فتاویٰ"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2200,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-ludhianvi-rashid",
          "name_ur": "مفتی رشید احمد لدھیانویؒ",
          "name_en": "Mufti Rasheed Ahmad Ludhianvi",
          "bio_ur": "بانی دار الافتاء والارشاد کراچی اور مصنف احسن الفتاویٰ",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-ahsan-ul-fatawa-front",
        "book_id": "book-ahsan-ul-fatawa",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-ahsan-ul-fatawa-gallery",
        "book_id": "book-ahsan-ul-fatawa",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-ahsan-ul-fatawa-1",
        "book_id": "book-ahsan-ul-fatawa",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز 10 جلدیں سیٹ",
        "volumes": 10,
        "binding_type": "مجالد ہارڈ بیک",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 13500,
        "regular_price": 21000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 18900,
        "weight_grams": 12000,
        "stock_quantity": 10,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-010-ALKHALIL",
        "barcode": "89640001510",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-bahishti-zewar-complete",
    "title_ur": "بہشتی زیور مکمل مع بہشتی گوہر - حکیم الامت مولانا اشرف علی تھانویؒ",
    "title_en": "Bahishti Zewar Complete - Maulana Ashraf Ali Thanvi",
    "subtitle_ur": "مسلمان عورتوں اور مردوں کے لیے عقائد، احکام، فرائض اور گھریلو زندگی کا دستور",
    "category_id": "c-4",
    "description_ur": "برصغیر پاک و ہند کے ہر گھر کی زینت، جس نے کروڑوں مسلمانوں کو طہارت، نماز، روزہ، زکوٰۃ، حج، اخلاق اور باہمی معاملات سکھائے۔ دس حصوں پر مشتمل مکمل تصنیف جس میں خواتین اور مرد حضرات کے جملہ ضروری مسائل کو سلیس انداز میں بیان کیا گیا ہے۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک فینسی",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 1,
    "pages_count": 890,
    "publication_year": 2024,
    "isbn": "978-969-564-311-8",
    "sku": "AK-FQ-011",
    "tags": [
      "بہشتی زیور",
      "اشرف علی تھانوی",
      "بہشتی گوہر",
      "عورتوں کے مسائل"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 4500,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-thanvi",
          "name_ur": "حکیم الامت مولانا اشرف علی تھانویؒ",
          "name_en": "Maulana Ashraf Ali Thanvi",
          "bio_ur": "مجدد الملت، مصنف تفسیر بیان القرآن، بہشتی زیور اور مناجات مقبول",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-bahishti-zewar-complete-front",
        "book_id": "book-bahishti-zewar-complete",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-bahishti-zewar-complete-gallery",
        "book_id": "book-bahishti-zewar-complete",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-bahishti-zewar-complete-1",
        "book_id": "book-bahishti-zewar-complete",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز گولڈن فینسی ایڈیشن مع بہشتی گوہر",
        "volumes": 1,
        "binding_type": "مجالد چمڑہ نما گولڈن",
        "printing_type": "دو رنگہ نفیس کاغذ",
        "purchase_cost": 1100,
        "regular_price": 1750,
        "discount_type": "percentage",
        "discount_value": 15,
        "final_price": 1488,
        "weight_grams": 1350,
        "stock_quantity": 50,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-011-ALKHALIL",
        "barcode": "89640001520",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-taleem-ul-islam",
    "title_ur": "تعلیم الاسلام (چاروں حصے مکمل) - مفتی کفایت اللہ دہلویؒ",
    "title_en": "Taleem-ul-Islam (All 4 Parts Complete) - Mufti Kifayatullah",
    "subtitle_ur": "سوالاً و جواباً آسان ترین انداز میں اسلامی عقائد، عبادات اور بنیادی احکام",
    "category_id": "c-4",
    "description_ur": "مفتی اعظم ہند مفتی کفایت اللہ دہلویؒ کا ابتدائی دینی تعلیم کے لیے وہ تاریخی اور لازوال رسالہ جس سے دنیا بھر کے لاکھوں بچوں اور نو مسلموں نے دین سیکھا۔ چاروں حصے سوال و جواب کی آسان ترتیب کے ساتھ یکجا۔",
    "language": "اردو (Urdu)",
    "binding_type": "پیپر بیک مجلد",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 220,
    "publication_year": 2024,
    "isbn": "978-969-564-312-5",
    "sku": "AK-FQ-012",
    "tags": [
      "تعلیم الاسلام",
      "مفتی کفایت اللہ",
      "بنیادی دینی تعلیم",
      "سوال و جواب"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2800,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-kifayatullah",
          "name_ur": "مفتی اعظم مفتی کفایت اللہ دہلویؒ",
          "name_en": "Mufti Kifayatullah Dehlawi",
          "bio_ur": "فقیہ الہند، مصنف کفایت المفتی اور کتاب تعلیم الاسلام",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-taleem-ul-islam-front",
        "book_id": "book-taleem-ul-islam",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-taleem-ul-islam-gallery",
        "book_id": "book-taleem-ul-islam",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-taleem-ul-islam-1",
        "book_id": "book-taleem-ul-islam",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس کمپیوٹرائزڈ ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ پیپر کور",
        "printing_type": "دو رنگہ طباعت",
        "purchase_cost": 220,
        "regular_price": 380,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 342,
        "weight_grams": 260,
        "stock_quantity": 80,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-012-ALKHALIL",
        "barcode": "89640001530",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-kifayat-ul-mufti",
    "title_ur": "کفایت المفتی - مفتی کفایت اللہ دہلویؒ (۹ جلدیں)",
    "title_en": "Kifayat al-Mufti - Mufti Kifayatullah Dehlawi (9 Volumes)",
    "subtitle_ur": "سیاسی، معاشرتی، کلامی اور فقہی احکام پر مشتمل تاریخی فتاویٰ",
    "category_id": "c-4",
    "description_ur": "فقیہ الہند مفتی کفایت اللہ دہلویؒ کے نصف صدی کے فتاویٰ کا مرتب مجموعہ جسے مولانا حفیظ الرحمن واصف نے نو جلدوں میں ابواب وار مدون کیا۔ تحریک آزادی، جدید انشورنس اور برطانوی ہند کے فقہی مسائل کا مدلل تجزیہ۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک (9 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 9,
    "pages_count": 5200,
    "publication_year": 2023,
    "isbn": "978-969-564-313-2",
    "sku": "AK-FQ-013",
    "tags": [
      "کفایت المفتی",
      "مفتی کفایت اللہ",
      "فتاویٰ",
      "تاریخ ہند"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1450,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-kifayatullah",
          "name_ur": "مفتی اعظم مفتی کفایت اللہ دہلویؒ",
          "name_en": "Mufti Kifayatullah Dehlawi",
          "bio_ur": "فقیہ الہند، مصنف کفایت المفتی اور کتاب تعلیم الاسلام",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-kifayat-ul-mufti-front",
        "book_id": "book-kifayat-ul-mufti",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1507842229452-73595690b275?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-kifayat-ul-mufti-gallery",
        "book_id": "book-kifayat-ul-mufti",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-kifayat-ul-mufti-1",
        "book_id": "book-kifayat-ul-mufti",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز 9 جلدیں سیٹ",
        "volumes": 9,
        "binding_type": "مجالد ہارڈ بیک",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 11500,
        "regular_price": 18000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 16200,
        "weight_grams": 10500,
        "stock_quantity": 8,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-013-ALKHALIL",
        "barcode": "89640001540",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1507842229452-73595690b275?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-usool-ash-shashi",
    "title_ur": "اصول الشاشی مع اردو تسہیل و تشریح احسن الحواشی",
    "title_en": "Usool ash-Shashi with Urdu Commentary",
    "subtitle_ur": "اصول فقہ حنفی کا سب سے بنیادی اور پہلا درسی متن مع آسان تشریح",
    "category_id": "c-4",
    "description_ur": "امام نظام الدین اسحاق شاشیؒ کا لکھا ہوا اصول فقہ کا بنیادی متن جس میں خاص، عام، مشترک، مؤول، حقیقت، مجاز، صریح، کنایہ، امر، نہی اور قیاس کے قوانین کو انتہائی لطیف مثالوں سے سمجھایا گیا ہے۔ درس نظامی کا پہلا زینہ۔",
    "language": "عربی مع اردو شرح",
    "binding_type": "ہارڈ بیک نفیس",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 260,
    "publication_year": 2024,
    "isbn": "978-969-564-314-9",
    "sku": "AK-FQ-014",
    "tags": [
      "اصول الشاشی",
      "اصول فقہ",
      "درس نظامی",
      "احسن الحواشی"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2600,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-usool-ash-shashi-front",
        "book_id": "book-usool-ash-shashi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-usool-ash-shashi-gallery",
        "book_id": "book-usool-ash-shashi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-usool-ash-shashi-1",
        "book_id": "book-usool-ash-shashi",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی کمپیوٹرائزڈ ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ باؤنڈ",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 400,
        "regular_price": 700,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 630,
        "weight_grams": 420,
        "stock_quantity": 40,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-014-BUSHRA",
        "barcode": "89640001550",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-nur-al-anwar-manar",
    "title_ur": "نور الانوار فی شرح المنار - ملا جیونؒ مع اردو تسہیل",
    "title_en": "Nur al-Anwar fi Sharh al-Manar - Mulla Jeewan Urdu",
    "subtitle_ur": "امام نسفی کے المنار کی مشہور ترین شرح اور اصول فقہ کی جامع ترین درسی کتاب",
    "category_id": "c-4",
    "description_ur": "استاذ الہند شیخ احمد ملا جیون امیٹھویؒ کی وہ تاریخی تصنیف جو صدیوں سے درس نظامی میں داخل درس ہے۔ اصول الشاشی کے بعد طلبہ کو اصول استنباط کی گہرائیوں اور دقیق فنی ابحاث سے روشناس کراتی ہے۔ اردو خلاصہ کے ساتھ۔",
    "language": "عربی مع اردو حواشی",
    "binding_type": "مجالد ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 620,
    "publication_year": 2024,
    "isbn": "978-969-564-315-6",
    "sku": "AK-FQ-015",
    "tags": [
      "نور الانوار",
      "ملا جیون",
      "المنار",
      "اصول فقہ"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2300,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-nur-al-anwar-manar-front",
        "book_id": "book-nur-al-anwar-manar",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-nur-al-anwar-manar-gallery",
        "book_id": "book-nur-al-anwar-manar",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-nur-al-anwar-manar-1",
        "book_id": "book-nur-al-anwar-manar",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی اعلیٰ ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک مجالد",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 950,
        "regular_price": 1550,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1395,
        "weight_grams": 1000,
        "stock_quantity": 30,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-015-BUSHRA",
        "barcode": "89640001560",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-al-fiqh-al-islami-wa-adillatuhu",
    "title_ur": "الفقہ الاسلامی وادلتہ - ڈاکٹر وہبہ زحیلی (۱۰ جلدیں)",
    "title_en": "Al-Fiqh al-Islami wa Adillatuhu - Dr. Wahbah al-Zuhayli (10 Volumes)",
    "subtitle_ur": "عصر حاضر میں ائمہ اربعہ کے فقہی مذاہب اور جدید سائنسی و معاشی مسائل کا جامع انسائیکلوپیڈیا",
    "category_id": "c-4",
    "description_ur": "علامہ ڈاکٹر وہبہ مصطفیٰ زحیلی دمشقیؒ کی وہ عالمی شاہکار کتاب جس نے فقہ مقارن (موازنہ مذاہب) کو جدید اسلوب میں دنیا کے سامنے پیش کیا۔ حنفی، مالکی، شافعی اور حنبلی دلائل کے ساتھ بیمہ، شیئرز، مصنوعی اعضاء اور جدید میڈیکل مسائل کے فیصلے شامل ہیں۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر شامی (10 جلدیں)",
    "printing_type": "دو رنگہ بیروتی طباعت اعلیٰ",
    "total_volumes": 10,
    "pages_count": 8100,
    "publication_year": 2023,
    "isbn": "978-969-564-316-3",
    "sku": "AK-FQ-016",
    "tags": [
      "الفقہ الاسلامی وادلتہ",
      "وہبہ زحیلی",
      "فقہ مقارن",
      "جدید مسائل"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 2750,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-zuheili",
          "name_ur": "ڈاکٹر وہبہ مصطفیٰ زحیلیؒ",
          "name_en": "Dr. Wahbah al-Zuhayli",
          "bio_ur": "عصر حاضر کے عظیم فقیہ شام اور مصنف الفقہ الاسلامی وادلتہ (10 جلدیں)",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-al-fiqh-al-islami-wa-adillatuhu-front",
        "book_id": "book-al-fiqh-al-islami-wa-adillatuhu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-al-fiqh-al-islami-wa-adillatuhu-gallery",
        "book_id": "book-al-fiqh-al-islami-wa-adillatuhu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-al-fiqh-al-islami-wa-adillatuhu-1",
        "book_id": "book-al-fiqh-al-islami-wa-adillatuhu",
        "publisher_id": "pub-dar-kutub",
        "publisher": {
          "id": "pub-dar-kutub",
          "name_ur": "دار الکتب العلمیہ بیروت",
          "name_en": "Dar Al-Kotob Al-Ilmiyah Beirut",
          "description": "عالم اسلام میں عربی تراث و مصادر کی عظیم بین الاقوامی اشاعت گاہ",
          "contact_info": "بیروت، لبنان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار الکتب العلمیہ بیروت اصلی ایڈیشن (10 جلدیں)",
        "volumes": 10,
        "binding_type": "مجالد فاخر لیدر لک",
        "printing_type": "دو رنگہ بیروتی قرطاس",
        "purchase_cost": 22000,
        "regular_price": 32000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 28800,
        "weight_grams": 14800,
        "stock_quantity": 6,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-016-DAR-KUTUB",
        "barcode": "89640001570",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-al-fiqh-ala-al-madhahib-al-arbaah",
    "title_ur": "الفقہ علی المذاہب الاربعۃ - علامہ عبد الرحمن جزیری (۵ جلدیں)",
    "title_en": "Al-Fiqh ala al-Madhahib al-Arba'ah - Abd al-Rahman al-Jaziri (5 Vols)",
    "subtitle_ur": "چاروں فقہی ائمہ (حنفی، شافعی، مالکی، حنبلی) کے مسائل کا تقابلی اور منظم بیان",
    "category_id": "c-4",
    "description_ur": "جامعہ ازہر مصر کے کبار علماء کے زیر اہتمام تیار کردہ موازنہ فقہ کی مشہور ترین کتاب۔ پہلے متفقہ مسئلہ ذکر کیا جاتا ہے پھر چاروں ائمہ کے فروعی اختلافات کو واضح عناوین میں الگ الگ بیان کیا جاتا ہے۔ فقہی بصیرت کے لیے گراں قدر تصنیف۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر (5 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 5,
    "pages_count": 4100,
    "publication_year": 2024,
    "isbn": "978-969-564-317-0",
    "sku": "AK-FQ-017",
    "tags": [
      "المذاہب الاربعۃ",
      "عبد الرحمن جزیری",
      "مذاہب اربعہ",
      "فقہ مقارن"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1950,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-al-fiqh-ala-al-madhahib-al-arbaah-front",
        "book_id": "book-al-fiqh-ala-al-madhahib-al-arbaah",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-al-fiqh-ala-al-madhahib-al-arbaah-gallery",
        "book_id": "book-al-fiqh-ala-al-madhahib-al-arbaah",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-al-fiqh-ala-al-madhahib-al-arbaah-1",
        "book_id": "book-al-fiqh-ala-al-madhahib-al-arbaah",
        "publisher_id": "pub-dar-kutub",
        "publisher": {
          "id": "pub-dar-kutub",
          "name_ur": "دار الکتب العلمیہ بیروت",
          "name_en": "Dar Al-Kotob Al-Ilmiyah Beirut",
          "description": "عالم اسلام میں عربی تراث و مصادر کی عظیم بین الاقوامی اشاعت گاہ",
          "contact_info": "بیروت، لبنان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار الکتب العلمیہ بیروت ایڈیشن (5 جلدیں)",
        "volumes": 5,
        "binding_type": "مجالد ہارڈ بیک فاخر",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 11000,
        "regular_price": 16500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 14850,
        "weight_grams": 7200,
        "stock_quantity": 8,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-017-DAR-KUTUB",
        "barcode": "89640001580",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-fiqh-al-buyu-taqi",
    "title_ur": "فقہ البیوع علی المذاہب الاربعۃ - شیخ الاسلام مفتی محمد تقی عثمانی (۲ جلدیں)",
    "title_en": "Fiqh al-Buyu ala al-Madhahib al-Arba'ah - Mufti Taqi Usmani (2 Vols)",
    "subtitle_ur": "عالم اسلام میں جدید بینکاری، اسٹاک مارکیٹ اور ڈیجیٹل تجارت کا سب سے بڑا فقہی ریفرنس",
    "category_id": "c-4",
    "description_ur": "شیخ الاسلام مفتی محمد تقی عثمانی دامت برکاتہم کی وہ تاریخ ساز عربی تصنیف جس نے اسلامی معاشیات و مالیات کے بین الاقوامی قوانین کی بنیاد رکھی۔ روایتی بیوع، مرابحہ، مضاربہ، اجارہ سے لے کر سیکیورٹیز اور کرنسی ٹریڈنگ کا فقہی محاکمہ۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر ہارڈ بیک (2 جلدیں)",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 2,
    "pages_count": 1280,
    "publication_year": 2024,
    "isbn": "978-969-564-318-7",
    "sku": "AK-FQ-018",
    "tags": [
      "فقہ البیوع",
      "مفتی تقی عثمانی",
      "اسلامی بینکاری",
      "تجارت"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3600,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-taqi",
          "name_ur": "شیخ الاسلام مفتی محمد تقی عثمانی",
          "name_en": "Mufti Muhammad Taqi Usmani",
          "bio_ur": "معروف عالم دین، نائب صدر دار العلوم کراچی و سابق جج شرعی اپیلٹ بینچ سپریم کورٹ آف پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-fiqh-al-buyu-taqi-front",
        "book_id": "book-fiqh-al-buyu-taqi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-fiqh-al-buyu-taqi-gallery",
        "book_id": "book-fiqh-al-buyu-taqi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-fiqh-al-buyu-taqi-1",
        "book_id": "book-fiqh-al-buyu-taqi",
        "publisher_id": "pub-maarif",
        "publisher": {
          "id": "pub-maarif",
          "name_ur": "مکتبۃ معارف القرآن (دار العلوم کراچی)",
          "name_en": "Maktaba Maariful Quran",
          "description": "دار العلوم کراچی کی مستند علمی و تفسیری مطبوعات",
          "contact_info": "کورنگی کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ معارف القرآن دار العلوم کراچی (2 جلدیں)",
        "volumes": 2,
        "binding_type": "مجالد چمڑہ نما گولڈن",
        "printing_type": "دو رنگہ اعلیٰ کریم پیپر",
        "purchase_cost": 2900,
        "regular_price": 4400,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 3960,
        "weight_grams": 3100,
        "stock_quantity": 25,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-018-MAARIF",
        "barcode": "89640001590",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-islam-aur-jadeed-maashi-masail",
    "title_ur": "اسلام اور جدید معاشی مسائل - مفتی محمد تقی عثمانی (۸ جلدیں)",
    "title_en": "Islam aur Jadeed Ma'ashi Masail - Mufti Taqi Usmani (8 Volumes)",
    "subtitle_ur": "سود، بینکاری، انشورنس، ٹیکس، کریڈٹ کارڈ اور زکوٰۃ کا مکمل معاشی حل",
    "category_id": "c-4",
    "description_ur": "مفتی تقی عثمانی صاحب کے نصف صدی کے وہ علمی و تحقیقی مقالات و خطبات جنہوں نے پاکستان اور دنیا بھر میں غیر سودی معیشت کی راہیں ہموار کیں۔ بینکنگ، شریعت کونسلوں کے فیصلے اور حکومتی قوانین کے اسلامی تقاضوں کا مفصل بیان۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک (8 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 8,
    "pages_count": 3600,
    "publication_year": 2023,
    "isbn": "978-969-564-319-4",
    "sku": "AK-FQ-019",
    "tags": [
      "جدید معاشی مسائل",
      "مفتی تقی عثمانی",
      "غیر سودی بینکاری",
      "اسلامی معاشیات"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2450,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-taqi",
          "name_ur": "شیخ الاسلام مفتی محمد تقی عثمانی",
          "name_en": "Mufti Muhammad Taqi Usmani",
          "bio_ur": "معروف عالم دین، نائب صدر دار العلوم کراچی و سابق جج شرعی اپیلٹ بینچ سپریم کورٹ آف پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-islam-aur-jadeed-maashi-masail-front",
        "book_id": "book-islam-aur-jadeed-maashi-masail",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-islam-aur-jadeed-maashi-masail-gallery",
        "book_id": "book-islam-aur-jadeed-maashi-masail",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-islam-aur-jadeed-maashi-masail-1",
        "book_id": "book-islam-aur-jadeed-maashi-masail",
        "publisher_id": "pub-maarif",
        "publisher": {
          "id": "pub-maarif",
          "name_ur": "مکتبۃ معارف القرآن (دار العلوم کراچی)",
          "name_en": "Maktaba Maariful Quran",
          "description": "دار العلوم کراچی کی مستند علمی و تفسیری مطبوعات",
          "contact_info": "کورنگی کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ معارف القرآن ایڈیشن (8 جلدیں)",
        "volumes": 8,
        "binding_type": "مجالد ہارڈ بیک",
        "printing_type": "سفید کاغذ",
        "purchase_cost": 7200,
        "regular_price": 10800,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 9720,
        "weight_grams": 7600,
        "stock_quantity": 16,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-019-MAARIF",
        "barcode": "89640001600",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-aap-kay-masail-aur-unka-hal",
    "title_ur": "آپ کے مسائل اور ان کا حل - مولانا محمد یوسف لدھیانوی شہیدؒ (۱۰ جلدیں)",
    "title_en": "Aap Kay Masail aur Unka Hal (10 Volumes Complete)",
    "subtitle_ur": "عوامی، معاشرتی، خاندانی اور فقہی سوالات کا دلنشین، مدلل اور مستند جواب",
    "category_id": "c-4",
    "description_ur": "جنگ اخبار کے تاریخی کالم \"آپ کے مسائل اور ان کا حل\" میں روزانہ پوچھے جانے والے ہزارہا سوالات کا دس جلدوں پر مشتمل انسائیکلوپیڈیا۔ مولانا محمد یوسف لدھیانویؒ کا قلم نرمی، حکمت اور شرعی براہین سے بھرپور ہے۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک (10 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 10,
    "pages_count": 5600,
    "publication_year": 2024,
    "isbn": "978-969-564-320-0",
    "sku": "AK-FQ-020",
    "tags": [
      "آپ کے مسائل",
      "یوسف لدھیانوی",
      "فتاویٰ",
      "مسائل و حل"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3800,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-ludhianvi-yusuf",
          "name_ur": "مولانا محمد یوسف لدھیانوی شہیدؒ",
          "name_en": "Maulana Muhammad Yousuf Ludhianvi",
          "bio_ur": "فاضل محقق، داعی اور مصنف آپ کے مسائل اور ان کا حل (10 جلدیں)",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-aap-kay-masail-aur-unka-hal-front",
        "book_id": "book-aap-kay-masail-aur-unka-hal",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-aap-kay-masail-aur-unka-hal-gallery",
        "book_id": "book-aap-kay-masail-aur-unka-hal",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-aap-kay-masail-aur-unka-hal-1",
        "book_id": "book-aap-kay-masail-aur-unka-hal",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس 10 جلدیں سیٹ",
        "volumes": 10,
        "binding_type": "مجالد ریگزین گولڈن",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 11000,
        "regular_price": 17000,
        "discount_type": "percentage",
        "discount_value": 12,
        "final_price": 14960,
        "weight_grams": 11500,
        "stock_quantity": 20,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-020-ALKHALIL",
        "barcode": "89640001610",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-qawaid-ul-fiqh-ameem",
    "title_ur": "قواعد الفقہ - مفتی محمد عمیم الاحسان المجددیؒ",
    "title_en": "Qawaid al-Fiqh - Mufti Ameem al-Ihsan",
    "subtitle_ur": "فقہ اسلامی کے ہمہ گیر کلیات و قواعد کا مستند اور منظم مجموعہ",
    "category_id": "c-4",
    "description_ur": "فقہی قواعد (القواعد الفقہیۃ) اور اصطلاحات کا وہ لغت نما مجموعہ جو قاضیوں، مفتیوں اور طلبہ کو ہزاروں فروعی مسائل کو چند بنیادی کلیات کے تحت جمع کرنے کی ملکہ عطا کرتا ہے۔ الامور بمقاصدہا، الیقین لا یزول بالشک اور الضرر یزال جیسے اصولوں کی شرح۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 580,
    "publication_year": 2023,
    "isbn": "978-969-564-321-7",
    "sku": "AK-FQ-021",
    "tags": [
      "قواعد الفقہ",
      "عمیم الاحسان",
      "اصول فقہ",
      "کلیات"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1650,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-qawaid-ul-fiqh-ameem-front",
        "book_id": "book-qawaid-ul-fiqh-ameem",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-qawaid-ul-fiqh-ameem-gallery",
        "book_id": "book-qawaid-ul-fiqh-ameem",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-qawaid-ul-fiqh-ameem-1",
        "book_id": "book-qawaid-ul-fiqh-ameem",
        "publisher_id": "pub-qadimi",
        "publisher": {
          "id": "pub-qadimi",
          "name_ur": "قدیمی کتب خانہ",
          "name_en": "Qadimi Kutub Khana",
          "description": "درس نظامی کی قدیم عربی و اردو کتب کا مرکز",
          "contact_info": "آرام باغ روڈ، کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "قدیمی کتب خانہ کراچی ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک مجالد",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 750,
        "regular_price": 1200,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1080,
        "weight_grams": 850,
        "stock_quantity": 25,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-021-QADIMI",
        "barcode": "89640001620",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-ahkam-uz-zabaeh-taqi",
    "title_ur": "احکام الذبائح - شیخ الاسلام مفتی محمد تقی عثمانی",
    "title_en": "Ahkam al-Zaba'ih - Mufti Muhammad Taqi Usmani",
    "subtitle_ur": "میکانیکی ذبیحہ، اہل کتاب کے ذبائح اور حلال گوشت کے عالمی اصول و ضوابط",
    "category_id": "c-4",
    "description_ur": "جدید مشینی سلاٹر ہاؤسز، غیر مسلم ممالک میں حلال گوشت کی درآمدات اور برآمدات اور جدید سائنسی طریقوں کے ذریعے جانوروں کو ذبح کرنے پر مفتی تقی عثمانی صاحب کی چشم کشا اور تحقیقی تصنیف۔ پوری دنیا کے حلال سرٹیفائرز کے لیے رہبر کتاب۔",
    "language": "اردو (Urdu)",
    "binding_type": "ہارڈ بیک نفیس",
    "printing_type": "یک رنگہ سفید",
    "total_volumes": 1,
    "pages_count": 220,
    "publication_year": 2024,
    "isbn": "978-969-564-322-4",
    "sku": "AK-FQ-022",
    "tags": [
      "احکام الذبائح",
      "حلال گوشت",
      "مفتی تقی عثمانی",
      "مشینی ذبیحہ"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2100,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-taqi",
          "name_ur": "شیخ الاسلام مفتی محمد تقی عثمانی",
          "name_en": "Mufti Muhammad Taqi Usmani",
          "bio_ur": "معروف عالم دین، نائب صدر دار العلوم کراچی و سابق جج شرعی اپیلٹ بینچ سپریم کورٹ آف پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-ahkam-uz-zabaeh-taqi-front",
        "book_id": "book-ahkam-uz-zabaeh-taqi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-ahkam-uz-zabaeh-taqi-gallery",
        "book_id": "book-ahkam-uz-zabaeh-taqi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-ahkam-uz-zabaeh-taqi-1",
        "book_id": "book-ahkam-uz-zabaeh-taqi",
        "publisher_id": "pub-maarif",
        "publisher": {
          "id": "pub-maarif",
          "name_ur": "مکتبۃ معارف القرآن (دار العلوم کراچی)",
          "name_en": "Maktaba Maariful Quran",
          "description": "دار العلوم کراچی کی مستند علمی و تفسیری مطبوعات",
          "contact_info": "کورنگی کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ معارف القرآن ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ پیپر نفیس",
        "printing_type": "سفید کاغذ",
        "purchase_cost": 320,
        "regular_price": 550,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 495,
        "weight_grams": 380,
        "stock_quantity": 40,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-022-MAARIF",
        "barcode": "89640001630",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-qanoon-e-wirasat-shafi",
    "title_ur": "قانون وراثت و اسلامی وصیت - مفتی محمد شفیع عثمانیؒ",
    "title_en": "Qanoon-e-Wirasat wa Islami Wasiyat - Mufti Shafi Usmani",
    "subtitle_ur": "علم الفرائض کے پیچیدہ اصول اور تقسیم ترکہ کے ریاضیاتی طریقے آسان انداز میں",
    "category_id": "c-4",
    "description_ur": "مفتی اعظم مفتی محمد شفیع عثمانیؒ کی وہ کتاب جس نے علم فرائض (وراثت) کے قواعد، ذوی الفروض، عصبات اور ذوی الارحام کے حصوں اور مناسخہ کے حساب کو ایسے آسان جدولوں اور مثالوں سے سمجھایا کہ ہر عام شخص بھی وراثت کی تقسیم کر سکتا ہے۔",
    "language": "اردو (Urdu)",
    "binding_type": "ہارڈ بیک نفیس",
    "printing_type": "یک رنگہ سفید",
    "total_volumes": 1,
    "pages_count": 280,
    "publication_year": 2024,
    "isbn": "978-969-564-323-1",
    "sku": "AK-FQ-023",
    "tags": [
      "قانون وراثت",
      "مفتی شفیع",
      "علم الفرائض",
      "تقسیم ترکہ"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1750,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-shafi",
          "name_ur": "مفتی اعظم مفتی محمد شفیع عثمانیؒ",
          "name_en": "Mufti Muhammad Shafi Usmani",
          "bio_ur": "بانی دار العلوم کراچی، سابق مفتی اعظم دار العلوم دیوبند و مصنف تفسیر معارف القرآن",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-qanoon-e-wirasat-shafi-front",
        "book_id": "book-qanoon-e-wirasat-shafi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-qanoon-e-wirasat-shafi-gallery",
        "book_id": "book-qanoon-e-wirasat-shafi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-qanoon-e-wirasat-shafi-1",
        "book_id": "book-qanoon-e-wirasat-shafi",
        "publisher_id": "pub-maarif",
        "publisher": {
          "id": "pub-maarif",
          "name_ur": "مکتبۃ معارف القرآن (دار العلوم کراچی)",
          "name_en": "Maktaba Maariful Quran",
          "description": "دار العلوم کراچی کی مستند علمی و تفسیری مطبوعات",
          "contact_info": "کورنگی کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ معارف القرآن دار العلوم کراچی",
        "volumes": 1,
        "binding_type": "ہارڈ بیک نفیس",
        "printing_type": "سفید کاغذ",
        "purchase_cost": 380,
        "regular_price": 620,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 558,
        "weight_grams": 420,
        "stock_quantity": 35,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-023-MAARIF",
        "barcode": "89640001640",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-al-mabsut-sarakhsi",
    "title_ur": "المبسوط للسرخسی - امام شمس الائمہ محمد بن احمد سرخسیؒ (۳۰ جلدیں)",
    "title_en": "Al-Mabsut by Imam al-Sarakhsi (30 Volumes Arabic)",
    "subtitle_ur": "فقہ حنفی کی سب سے عظیم، وسیع اور فقہی تعلیلات سے لبریز کلاسک انسائیکلوپیڈیا",
    "category_id": "c-4",
    "description_ur": "شمس الائمہ امام سرخسیؒ نے جب اوزجند کے قید خانے کے کنویں میں قید تھے، اپنے شاگردوں کو زبانی املاء کروا کر یہ 30 ضخیم جلدیں تیار کروائیں۔ ہر مسئلے کی علت اور عقل و نقل سے حکمتیں بیان فرمائیں۔ دنیا کے تمام محققین کے لیے حیرت انگیز شاہکار۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر (30 جلدیں)",
    "printing_type": "دو رنگہ بیروتی طباعت",
    "total_volumes": 30,
    "pages_count": 19500,
    "publication_year": 2023,
    "isbn": "978-969-564-324-8",
    "sku": "AK-FQ-024",
    "tags": [
      "المبسوط",
      "امام سرخسی",
      "فقہ حنفی",
      "املاء سرخسی"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1300,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-al-mabsut-sarakhsi-front",
        "book_id": "book-al-mabsut-sarakhsi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-al-mabsut-sarakhsi-gallery",
        "book_id": "book-al-mabsut-sarakhsi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-al-mabsut-sarakhsi-1",
        "book_id": "book-al-mabsut-sarakhsi",
        "publisher_id": "pub-dar-kutub",
        "publisher": {
          "id": "pub-dar-kutub",
          "name_ur": "دار الکتب العلمیہ بیروت",
          "name_en": "Dar Al-Kotob Al-Ilmiyah Beirut",
          "description": "عالم اسلام میں عربی تراث و مصادر کی عظیم بین الاقوامی اشاعت گاہ",
          "contact_info": "بیروت، لبنان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار الکتب العلمیہ بیروت اصلی درآمد شدہ سیٹ (30 جلدیں)",
        "volumes": 30,
        "binding_type": "مجالد فاخر شامی لیدر",
        "printing_type": "دو رنگہ بیروتی قرطاس",
        "purchase_cost": 45000,
        "regular_price": 65000,
        "discount_type": "percentage",
        "discount_value": 8,
        "final_price": 59800,
        "weight_grams": 35000,
        "stock_quantity": 3,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-024-DAR-KUTUB",
        "barcode": "89640001650",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-fatawa-rahimiyyah",
    "title_ur": "فتاویٰ رحیمیہ - مفتی سید عبد الرحیم لاجپوریؒ (۱۰ جلدیں)",
    "title_en": "Fatawa Rahimiyyah - Mufti Abdur Rahim Lajpuri (10 Volumes)",
    "subtitle_ur": "گجرات و ہندوستان کے نامور مفتی اعظم کے معتدل، مستند اور عام فہم فتاویٰ",
    "category_id": "c-4",
    "description_ur": "مفتی سید عبد الرحیم لاجپوریؒ کے فتاویٰ کا دس جلدوں کا مقبول ذخیرہ۔ زبان انتہائی سادہ، سلیس اور ہر خاص و عام کی فہم کے مطابق ہے۔ حنفی مسلک کے مطابق عبادات، معاشرت اور رسوم و رواج کی تردید پر مفصل فیصلے شامل ہیں۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک (10 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 10,
    "pages_count": 5800,
    "publication_year": 2023,
    "isbn": "978-969-564-325-5",
    "sku": "AK-FQ-025",
    "tags": [
      "فتاویٰ رحیمیہ",
      "عبد الرحیم لاجپوری",
      "فتاویٰ",
      "حنفی"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1550,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-fatawa-rahimiyyah-front",
        "book_id": "book-fatawa-rahimiyyah",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-fatawa-rahimiyyah-gallery",
        "book_id": "book-fatawa-rahimiyyah",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-fatawa-rahimiyyah-1",
        "book_id": "book-fatawa-rahimiyyah",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز 10 جلدیں سیٹ",
        "volumes": 10,
        "binding_type": "مجالد ہارڈ بیک",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 12000,
        "regular_price": 18500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 16650,
        "weight_grams": 11800,
        "stock_quantity": 12,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-025-ALKHALIL",
        "barcode": "89640001660",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-fatawa-darul-uloom-deoband",
    "title_ur": "فتاویٰ دار العلوم دیوبند (عزیز الفتاویٰ) - مفتی عزیز الرحمن عثمانیؒ",
    "title_en": "Fatawa Darul Uloom Deoband (Aziz-ul-Fatawa) - Complete",
    "subtitle_ur": "دار العلوم دیوبند کے اولین مفتی اعظم کے فتاویٰ کا تاریخی اور مستند ترین مرجع",
    "category_id": "c-4",
    "description_ur": "دار العلوم دیوبند کے پہلے مفتی اعظم حضرت مولانا مفتی عزیز الرحمن عثمانیؒ کے وہ تاریخی فتاویٰ جنہیں دار العلوم دیوبند کی مستند سند حاصل ہے۔ فقہ حنفی کے نصوص اور برصغیر کے مسلمانوں کے روزمرہ پیش آمدہ فقہی مسائل کا حل۔",
    "language": "اردو مع عربی حوالے",
    "binding_type": "مجالد ہارڈ بیک (6 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 6,
    "pages_count": 4200,
    "publication_year": 2024,
    "isbn": "978-969-564-326-2",
    "sku": "AK-FQ-026",
    "tags": [
      "فتاویٰ دار العلوم دیوبند",
      "عزیز الفتاویٰ",
      "دیوبند",
      "فتاویٰ"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2350,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-fatawa-darul-uloom-deoband-front",
        "book_id": "book-fatawa-darul-uloom-deoband",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-fatawa-darul-uloom-deoband-gallery",
        "book_id": "book-fatawa-darul-uloom-deoband",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-fatawa-darul-uloom-deoband-1",
        "book_id": "book-fatawa-darul-uloom-deoband",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز 6 جلدیں سیٹ",
        "volumes": 6,
        "binding_type": "مجالد ہارڈ بیک ریگزین",
        "printing_type": "دو رنگہ سفید کاغذ",
        "purchase_cost": 7800,
        "regular_price": 12000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 10800,
        "weight_grams": 7800,
        "stock_quantity": 15,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-FQ-026-ALKHALIL",
        "barcode": "89640001670",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-hidayat-un-nahw",
    "title_ur": "الہدایۃ فی النحو مع اردو تسہیل و تشریح الکواکب الدریہ",
    "title_en": "Hidayat-un-Nahw with Urdu Commentary (Dars-e-Nizami)",
    "subtitle_ur": "نحو عربی کا مسلمہ بنیادی اور معتمد درسی متن مع آسان سوال و جواب",
    "category_id": "c-12",
    "description_ur": "شیخ سراج الدین عثمان چشتیؒ کی وہ شہرہ آفاق کتاب جو درس نظامی کے ابتدائی سالوں میں عربی گرائمر کی تفہیم کے لیے ریڑھ کی ہڈی کی حیثیت رکھتی ہے۔ اسم، فعل، حرف، معرب، مبنی، مرفوعات، منصوبات اور مجرورات کے جملہ قواعد سلیس مثالوں سے مزین۔",
    "language": "عربی مع اردو شرح",
    "binding_type": "ہارڈ بیک نفیس",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 280,
    "publication_year": 2024,
    "isbn": "978-969-564-401-6",
    "sku": "AK-GR-001",
    "tags": [
      "ہدایۃ النحو",
      "علم النحو",
      "درس نظامی",
      "عربی گرائمر"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3600,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-hidayat-un-nahw-front",
        "book_id": "book-hidayat-un-nahw",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-hidayat-un-nahw-gallery",
        "book_id": "book-hidayat-un-nahw",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-hidayat-un-nahw-1",
        "book_id": "book-hidayat-un-nahw",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی کمپیوٹرائزڈ اعراب شدہ ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک مجالد",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 450,
        "regular_price": 750,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 675,
        "weight_grams": 480,
        "stock_quantity": 50,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-001-BUSHRA",
        "barcode": "89640001680",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "ed-book-hidayat-un-nahw-2",
        "book_id": "book-hidayat-un-nahw",
        "publisher_id": "pub-qadimi",
        "publisher": {
          "id": "pub-qadimi",
          "name_ur": "قدیمی کتب خانہ",
          "name_en": "Qadimi Kutub Khana",
          "description": "درس نظامی کی قدیم عربی و اردو کتب کا مرکز",
          "contact_info": "آرام باغ روڈ، کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "قدیمی کتب خانہ کلاسک ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ پیپر",
        "printing_type": "سفید کاغذ",
        "purchase_cost": 320,
        "regular_price": 550,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 495,
        "weight_grams": 450,
        "stock_quantity": 35,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-001-QADIMI",
        "barcode": "89640001681",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-al-kafiyah-ibn-hajib",
    "title_ur": "الکافیۃ فی النحو - علامہ ابن الحاجب مالکیؒ مع حل ابیات",
    "title_en": "Al-Kafiyah fi al-Nahw - Ibn al-Hajib with Urdu Notes",
    "subtitle_ur": "عربی نحو کا وہ تاریخی متن جس پر سیکڑوں شروح لکھی گئیں",
    "category_id": "c-12",
    "description_ur": "امام جمال الدین ابو عمرو عثمان بن عمر معروف بہ ابن الحاجب مالکی نحویؒ کا لازوال متن کافیہ۔ نحو عربی کے قوانین کو جامع ترین عبارات اور ضوابط میں قلمبند کیا گیا۔ تمام عربی شواہد اور اعراب کی مکمل توضیح کے ساتھ۔",
    "language": "عربی مع اردو شواہد",
    "binding_type": "ہارڈ بیک نفیس",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 240,
    "publication_year": 2024,
    "isbn": "978-969-564-402-3",
    "sku": "AK-GR-002",
    "tags": [
      "الکافیہ",
      "ابن الحاجب",
      "نحو عربی",
      "درس نظامی"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2200,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-al-kafiyah-ibn-hajib-front",
        "book_id": "book-al-kafiyah-ibn-hajib",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-al-kafiyah-ibn-hajib-gallery",
        "book_id": "book-al-kafiyah-ibn-hajib",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-al-kafiyah-ibn-hajib-1",
        "book_id": "book-al-kafiyah-ibn-hajib",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی کمپیوٹرائزڈ ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک",
        "printing_type": "دو رنگہ اعلیٰ معیار",
        "purchase_cost": 400,
        "regular_price": 680,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 612,
        "weight_grams": 420,
        "stock_quantity": 40,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-002-BUSHRA",
        "barcode": "89640001690",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-sharh-ibn-aqil-complete",
    "title_ur": "شرح ابن عقیل علی الفیۃ ابن مالک (۲ جلدیں مکمل مع تحقیق)",
    "title_en": "Sharh Ibn Aqil ala Alfiyyat Ibn Malik (2 Volumes Complete)",
    "subtitle_ur": "الفیہ ابن مالک کی سب سے زیادہ پڑھی جانے والی معتمد اور سلیس عربی شرح",
    "category_id": "c-12",
    "description_ur": "قاضی عبد اللہ بن عبد الرحمن ابن عقیلؒ کی وہ شرح جس نے ابن مالک کے ایک ہزار اشعار پر مشتمل الفیہ کے پیچیدہ نحوی اور صرفی مسائل کو پانی کی طرح رواں کر دیا۔ عالم اسلام کی تمام دینی و عصری جامعات میں عربی لٹریچر کا لازمی نصاب۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر ہارڈ بیک (2 جلدیں)",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 2,
    "pages_count": 1150,
    "publication_year": 2024,
    "isbn": "978-969-564-403-0",
    "sku": "AK-GR-003",
    "tags": [
      "شرح ابن عقیل",
      "الفیہ ابن مالک",
      "نحو و صرف",
      "عربی گرائمر"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3100,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-ibnaqil",
          "name_ur": "قاضی عبد اللہ بن عبد الرحمن ابن عقیلؒ",
          "name_en": "Ibn Aqil",
          "bio_ur": "شارح الفیہ ابن مالک اور جلیل القدر عالم لغت و نحو",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-sharh-ibn-aqil-complete-front",
        "book_id": "book-sharh-ibn-aqil-complete",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-sharh-ibn-aqil-complete-gallery",
        "book_id": "book-sharh-ibn-aqil-complete",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-sharh-ibn-aqil-complete-1",
        "book_id": "book-sharh-ibn-aqil-complete",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ جدید ایڈیشن مع اعراب اشعار (2 جلدیں)",
        "volumes": 2,
        "binding_type": "مجالد ہارڈ بیک فاخر",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 1800,
        "regular_price": 2900,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 2610,
        "weight_grams": 2100,
        "stock_quantity": 25,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-003-BUSHRA",
        "barcode": "89640001700",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "ed-book-sharh-ibn-aqil-complete-2",
        "book_id": "book-sharh-ibn-aqil-complete",
        "publisher_id": "pub-dar-kutub",
        "publisher": {
          "id": "pub-dar-kutub",
          "name_ur": "دار الکتب العلمیہ بیروت",
          "name_en": "Dar Al-Kotob Al-Ilmiyah Beirut",
          "description": "عالم اسلام میں عربی تراث و مصادر کی عظیم بین الاقوامی اشاعت گاہ",
          "contact_info": "بیروت، لبنان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار الکتب العلمیہ بیروت اصلی ایڈیشن",
        "volumes": 2,
        "binding_type": "مجالد فاخر شامی",
        "printing_type": "دو رنگہ امپورٹڈ قرطاس",
        "purchase_cost": 2600,
        "regular_price": 3900,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 3510,
        "weight_grams": 2200,
        "stock_quantity": 12,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-003-DAR-KUTUB",
        "barcode": "89640001701",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-qatr-un-nada-ibn-hisham",
    "title_ur": "قطر الندیٰ وبل الصدیٰ - امام ابن ہشام انصاریؒ مع شرح اردو",
    "title_en": "Qatr an-Nada wa Bal as-Sada - Ibn Hisham Ansari Urdu",
    "subtitle_ur": "نحوی تراکیب، اعراب القرآن اور کلام عرب کے قواعد کا جامع اور مستند گلدستہ",
    "category_id": "c-12",
    "description_ur": "امام النحو جمال الدین ابن ہشام انصاریؒ کی وہ بے نظیر تصنیف جو طالب علم کو نحو کی ابتدائی کتب سے کبار مراجع کی طرف منتقل کرتی ہے۔ آیات قرآنیہ اور فصیح اشعار سے مدلل اعراب کا محاکمہ۔ جدید تفہیمی حواشی کے ساتھ۔",
    "language": "عربی مع اردو ترجمہ و شواہد",
    "binding_type": "ہارڈ بیک نفیس",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 420,
    "publication_year": 2024,
    "isbn": "978-969-564-404-7",
    "sku": "AK-GR-004",
    "tags": [
      "قطر الندی",
      "ابن ہشام",
      "اعراب القرآن",
      "نحو"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2400,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-ibnhisham",
          "name_ur": "امام جمال الدین عبد اللہ بن یوسف ابن ہشام انصاریؒ",
          "name_en": "Ibn Hisham al-Ansari",
          "bio_ur": "امام النحو العربی، مصنف قطر الندیٰ و مغنی اللبیب",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-qatr-un-nada-ibn-hisham-front",
        "book_id": "book-qatr-un-nada-ibn-hisham",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-qatr-un-nada-ibn-hisham-gallery",
        "book_id": "book-qatr-un-nada-ibn-hisham",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-qatr-un-nada-ibn-hisham-1",
        "book_id": "book-qatr-un-nada-ibn-hisham",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی کمپیوٹرائزڈ ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک مجالد",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 650,
        "regular_price": 1050,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 945,
        "weight_grams": 680,
        "stock_quantity": 30,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-004-BUSHRA",
        "barcode": "89640001710",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-mughni-al-labeeb-ibn-hisham",
    "title_ur": "مغنی اللبیب عن کتب الاعاریب - امام ابن ہشام انصاریؒ (۲ جلدیں)",
    "title_en": "Mughni al-Labib an Kutub al-A'areeb (2 Volumes Arabic)",
    "subtitle_ur": "قرآنی اعراب، حروف معانی اور جملوں کی ساخت کا عظیم الشان نحوی انسائیکلوپیڈیا",
    "category_id": "c-12",
    "description_ur": "علامہ ابن ہشامؒ کی وہ کتاب جس کے بارے میں علامہ ابن خلدونؒ نے فرمایا کہ اس کتاب کے بعد مصر میں نحو ختم ہو گئی۔ حروف کے تفصیلی معانی، جملوں کے اعرابی احکام اور اعراب میں کی جانے والی فاش غلطیوں کا تفصیلی علاج۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر (2 جلدیں)",
    "printing_type": "دو رنگہ بیروتی طباعت",
    "total_volumes": 2,
    "pages_count": 1380,
    "publication_year": 2023,
    "isbn": "978-969-564-405-4",
    "sku": "AK-GR-005",
    "tags": [
      "مغنی اللبیب",
      "ابن ہشام",
      "حروف معانی",
      "اعراب القرآن"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1850,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-ibnhisham",
          "name_ur": "امام جمال الدین عبد اللہ بن یوسف ابن ہشام انصاریؒ",
          "name_en": "Ibn Hisham al-Ansari",
          "bio_ur": "امام النحو العربی، مصنف قطر الندیٰ و مغنی اللبیب",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-mughni-al-labeeb-ibn-hisham-front",
        "book_id": "book-mughni-al-labeeb-ibn-hisham",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-mughni-al-labeeb-ibn-hisham-gallery",
        "book_id": "book-mughni-al-labeeb-ibn-hisham",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-mughni-al-labeeb-ibn-hisham-1",
        "book_id": "book-mughni-al-labeeb-ibn-hisham",
        "publisher_id": "pub-dar-kutub",
        "publisher": {
          "id": "pub-dar-kutub",
          "name_ur": "دار الکتب العلمیہ بیروت",
          "name_en": "Dar Al-Kotob Al-Ilmiyah Beirut",
          "description": "عالم اسلام میں عربی تراث و مصادر کی عظیم بین الاقوامی اشاعت گاہ",
          "contact_info": "بیروت، لبنان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار الکتب العلمیہ بیروت ایڈیشن (2 جلدیں)",
        "volumes": 2,
        "binding_type": "مجالد فاخر شامی",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 3200,
        "regular_price": 4800,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 4320,
        "weight_grams": 2600,
        "stock_quantity": 10,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-005-DAR-KUTUB",
        "barcode": "89640001720",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-tasheel-un-nahw",
    "title_ur": "تسہیل النحو مع سوالات و مشقیں - مولانا مشتاق احمد چرتھاولیؒ",
    "title_en": "Tasheel-un-Nahw with Exercises - Maulana Mushtaq Charthawali",
    "subtitle_ur": "ابتدائی طلبہ کے لیے اردو زبان میں علم نحو کی سب سے آسان اور کامیاب نصابی کتاب",
    "category_id": "c-12",
    "description_ur": "مولانا مشتاق احمد چرتھاولیؒ کی یہ کتاب برصغیر کے تقریباً ہر مدرسے میں سال اول کے طلبہ کو پڑھائی جاتی ہے۔ آسان زبان، دلنشین امثلہ، روزمرہ بول چال کی عربی مثالیں اور ہر سبق کے آخر میں تفہیمی تمرینات اس کتاب کو ممتاز بناتی ہیں۔",
    "language": "اردو و عربی",
    "binding_type": "پیپر بیک مجلد",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 180,
    "publication_year": 2024,
    "isbn": "978-969-564-406-1",
    "sku": "AK-GR-006",
    "tags": [
      "تسہیل النحو",
      "مشتاق چرتھاولی",
      "نحو کی مشقیں",
      "ابتدائی نحو"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 4200,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-charthawali",
          "name_ur": "مولانا مشتاق احمد چرتھاولیؒ",
          "name_en": "Maulana Mushtaq Ahmad Charthawali",
          "bio_ur": "استاذ العلوم النحویہ، مصنف تسہیل النحو و تسہیل الصرف",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-tasheel-un-nahw-front",
        "book_id": "book-tasheel-un-nahw",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-tasheel-un-nahw-gallery",
        "book_id": "book-tasheel-un-nahw",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-tasheel-un-nahw-1",
        "book_id": "book-tasheel-un-nahw",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز جدید کمپیوٹرائزڈ کلر ایڈیشن مع حل شدہ مشقیں",
        "volumes": 1,
        "binding_type": "ہارڈ پیپر لیمینیشن",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 200,
        "regular_price": 350,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 315,
        "weight_grams": 240,
        "stock_quantity": 90,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-006-ALKHALIL",
        "barcode": "89640001730",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-tasheel-us-sarf",
    "title_ur": "تسہیل الصرف مع گردانیں اور تمرینات - مولانا مشتاق احمد چرتھاولیؒ",
    "title_en": "Tasheel-us-Sarf with Verb Conjugations - Maulana Mushtaq Charthawali",
    "subtitle_ur": "کلمات کے صیغے، ابواب ثلاثی و رباعی اور گردانوں کی جامع و آسان مشقیں",
    "category_id": "c-12",
    "description_ur": "علم صرف کے پیچیدہ قواعد اور تعلیلات کو سلیس اردو میں پیش کرنے والی مقبول ترین کتاب۔ ماضی، مضارع، امر، نہی کی تمام گردانیں، اسم فاعل، اسم مفعول اور ہفت اقسام کی تفہیم جدولوں (Charts) کی مدد سے آسان بنائی گئی ہے۔",
    "language": "اردو و عربی",
    "binding_type": "پیپر بیک مجلد",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 190,
    "publication_year": 2024,
    "isbn": "978-969-564-407-8",
    "sku": "AK-GR-007",
    "tags": [
      "تسہیل الصرف",
      "علم الصرف",
      "گردانیں",
      "ابواب ثلاثی"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3950,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-charthawali",
          "name_ur": "مولانا مشتاق احمد چرتھاولیؒ",
          "name_en": "Maulana Mushtaq Ahmad Charthawali",
          "bio_ur": "استاذ العلوم النحویہ، مصنف تسہیل النحو و تسہیل الصرف",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-tasheel-us-sarf-front",
        "book_id": "book-tasheel-us-sarf",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-tasheel-us-sarf-gallery",
        "book_id": "book-tasheel-us-sarf",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-tasheel-us-sarf-1",
        "book_id": "book-tasheel-us-sarf",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس کمپیوٹرائزڈ ایڈیشن مع ٹیبلز",
        "volumes": 1,
        "binding_type": "ہارڈ پیپر نفیس",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 200,
        "regular_price": 350,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 315,
        "weight_grams": 250,
        "stock_quantity": 85,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-007-ALKHALIL",
        "barcode": "89640001740",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-mizan-us-sarf-wa-munsheib",
    "title_ur": "میزان الصرف و منشعب مع قواعد الصرف و پند نامہ",
    "title_en": "Meezan-us-Sarf wa Munshe'ib with Rules of Sarf",
    "subtitle_ur": "عربی گردانوں اور صیغوں کی شناخت کا قدیم و آزمودہ روایتی مجموعہ",
    "category_id": "c-12",
    "description_ur": "درس نظامی کی وہ تاریخی اساسی کتاب جس سے اسلاف نے عربی زبان کے ابواب اور گردانوں کا آغاز کیا۔ صحیح، مثال، اجوف، ناقص، لفیف اور مضاعف کے ابواب کی مفصل گردانیں اور فارسی و اردو میں بنیادی قواعد کا ذخیرہ۔",
    "language": "فارسی، عربی و اردو",
    "binding_type": "پیپر بیک مجلد",
    "printing_type": "یک رنگہ سفید",
    "total_volumes": 1,
    "pages_count": 140,
    "publication_year": 2024,
    "isbn": "978-969-564-408-5",
    "sku": "AK-GR-008",
    "tags": [
      "میزان الصرف",
      "منشعب",
      "گردانیں",
      "درس نظامی"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2600,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-mizan-us-sarf-wa-munsheib-front",
        "book_id": "book-mizan-us-sarf-wa-munsheib",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1507842229452-73595690b275?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-mizan-us-sarf-wa-munsheib-gallery",
        "book_id": "book-mizan-us-sarf-wa-munsheib",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-mizan-us-sarf-wa-munsheib-1",
        "book_id": "book-mizan-us-sarf-wa-munsheib",
        "publisher_id": "pub-qadimi",
        "publisher": {
          "id": "pub-qadimi",
          "name_ur": "قدیمی کتب خانہ",
          "name_en": "Qadimi Kutub Khana",
          "description": "درس نظامی کی قدیم عربی و اردو کتب کا مرکز",
          "contact_info": "آرام باغ روڈ، کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "قدیمی کتب خانہ کراچی کمپیوٹرائزڈ ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ پیپر",
        "printing_type": "سفید کاغذ",
        "purchase_cost": 160,
        "regular_price": 280,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 252,
        "weight_grams": 180,
        "stock_quantity": 70,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-008-QADIMI",
        "barcode": "89640001750",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1507842229452-73595690b275?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-ilm-us-seeghah",
    "title_ur": "علم الصیغہ مع اردو شرح تسہیل الصیغہ - مفتی عنایت احمد کاکورویؒ",
    "title_en": "Ilm-us-Seeghah with Urdu Commentary - Mufti Inayat Ahmad",
    "subtitle_ur": "قوانینِ تعلیلات صرفیہ اور گردانوں کے معلّل صیغوں کا نادر روزگار متن",
    "category_id": "c-12",
    "description_ur": "مفتی عنایت احمد کاکورویؒ کی علم صرف میں وہ لازوال تصنیف جس نے قال، باع، خاف، غزا، رمی اور دعوا جیسے پیچیدہ حروف علت والے صیغوں کے تغیرات اور قوانین تعلیل کو ایسے ریاضیاتی اصولوں میں پرو دیا کہ طالب علم کبھی مغالطے کا شکار نہیں ہوتا۔",
    "language": "عربی و اردو",
    "binding_type": "ہارڈ بیک نفیس",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 320,
    "publication_year": 2024,
    "isbn": "978-969-564-409-2",
    "sku": "AK-GR-009",
    "tags": [
      "علم الصیغہ",
      "تعلیلات صرفیہ",
      "قوانین صرف",
      "درس نظامی"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2850,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-ilm-us-seeghah-front",
        "book_id": "book-ilm-us-seeghah",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-ilm-us-seeghah-gallery",
        "book_id": "book-ilm-us-seeghah",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-ilm-us-seeghah-1",
        "book_id": "book-ilm-us-seeghah",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی کمپیوٹرائزڈ ایڈیشن مع قواعد تعلیل",
        "volumes": 1,
        "binding_type": "ہارڈ بیک مجالد",
        "printing_type": "دو رنگہ اعلیٰ معیار",
        "purchase_cost": 500,
        "regular_price": 850,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 765,
        "weight_grams": 520,
        "stock_quantity": 35,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-009-BUSHRA",
        "barcode": "89640001760",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-an-nahw-al-wadih-complete",
    "title_ur": "النحو الواضح فی قواعد اللغۃ العربیۃ (ابتدائی و ثانوی ۶ اجزاء مکمل)",
    "title_en": "Al-Nahw al-Wadih by Ali al-Jarim & Mustafa Amin (6 Parts Complete)",
    "subtitle_ur": "جدید استقرائی انداز، لاجواب مثالوں اور عملی مشقوں پر مبنی دنیا کی بہترین کتابِ نحو",
    "category_id": "c-12",
    "description_ur": "علی الجارم اور مصطفیٰ امین کی وہ عالمی شاہکار کتاب جس نے روایتی خشک گرائمر کی جگہ سائنسی و جدید تعلیمی انداز اختیار کیا۔ پہلے مثالیں دی جاتی ہیں، پھر طالب علم خود سوچ کر قاعدہ اخذ کرتا ہے۔ مدارس اور یونیورسٹیز دونوں کے لیے یکساں مفید۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد ہارڈ بیک (3 مجلدات میں 6 حصے مکمل)",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 3,
    "pages_count": 1450,
    "publication_year": 2024,
    "isbn": "978-969-564-410-8",
    "sku": "AK-GR-010",
    "tags": [
      "النحو الواضح",
      "علی الجارم",
      "عربی گرائمر",
      "جدید عربی"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3700,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-an-nahw-al-wadih-complete-front",
        "book_id": "book-an-nahw-al-wadih-complete",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-an-nahw-al-wadih-complete-gallery",
        "book_id": "book-an-nahw-al-wadih-complete",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-an-nahw-al-wadih-complete-1",
        "book_id": "book-an-nahw-al-wadih-complete",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز 3 جلدیں مکمل ایڈیشن (باکس پیک)",
        "volumes": 3,
        "binding_type": "مجالد ہارڈ بیک فاخر",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 2900,
        "regular_price": 4500,
        "discount_type": "percentage",
        "discount_value": 12,
        "final_price": 3960,
        "weight_grams": 3100,
        "stock_quantity": 25,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-010-ALKHALIL",
        "barcode": "89640001770",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-duroos-ul-lughah-al-arabiyyah",
    "title_ur": "دروس اللغۃ العربیۃ لغیر الناطقین بہا (مدینہ عربک کورس ۴ اجزاء)",
    "title_en": "Duroos al-Lughah al-Arabiyyah (Madinah Arabic Course 4 Parts)",
    "subtitle_ur": "ڈاکٹر وی عبد الرحیم کا جامعہ اسلامیہ مدینہ منورہ کا عالمی شہرت یافتہ کورس",
    "category_id": "c-12",
    "description_ur": "عالم اسلام کی ممتاز ترین یونیورسٹی \"الجامعۃ الاسلامیۃ بالمدینۃ المنورۃ\" کا وہ تسلیم شدہ نصاب جس سے دنیا بھر کے غیر عربوں کو براہ راست عربی بولنا، پڑھنا اور لکھنا سکھایا جاتا ہے۔ رنگین تصاویر، مکالمات اور قرآنی آیات کی عملی مشقوں سے مزین۔",
    "language": "عربی مع اردو نوٹس",
    "binding_type": "ہارڈ بیک فاخر (4 اجزاء مکمل)",
    "printing_type": "چار رنگہ آرٹ پیپر (Full Color)",
    "total_volumes": 2,
    "pages_count": 780,
    "publication_year": 2024,
    "isbn": "978-969-564-411-5",
    "sku": "AK-GR-011",
    "tags": [
      "دروس اللغۃ",
      "مدینہ کورس",
      "ڈاکٹر عبد الرحیم",
      "بول چال عربی"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 4100,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-duroos-ul-lughah-al-arabiyyah-front",
        "book_id": "book-duroos-ul-lughah-al-arabiyyah",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-duroos-ul-lughah-al-arabiyyah-gallery",
        "book_id": "book-duroos-ul-lughah-al-arabiyyah",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-duroos-ul-lughah-al-arabiyyah-1",
        "book_id": "book-duroos-ul-lughah-al-arabiyyah",
        "publisher_id": "pub-darussalam",
        "publisher": {
          "id": "pub-darussalam",
          "name_ur": "دار السلام پبلیکیشنز",
          "name_en": "Darussalam Publications",
          "description": "عالمی سطح پر معروف اسلامی اشاعتی ادارہ",
          "contact_info": "لاہور، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار السلام پبلیکیشنز فور کلر ایڈیشن (4 حصے 2 جلدوں میں)",
        "volumes": 2,
        "binding_type": "ہارڈ بیک لیمینیشن",
        "printing_type": "چار رنگہ امپورٹڈ قرطاس",
        "purchase_cost": 2200,
        "regular_price": 3500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 3150,
        "weight_grams": 2200,
        "stock_quantity": 35,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-011-DARUSSALAM",
        "barcode": "89640001780",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-sharah-mulla-jami",
    "title_ur": "الفوائد الضیائیۃ (شرح ملا جامی علی الکافیۃ) مع حواشی جدیدہ",
    "title_en": "Al-Fawaid al-Diya'iyyah (Sharh Mulla Jami) - 2 Volumes",
    "subtitle_ur": "مولانا نور الدین عبد الرحمن جامیؒ کی نحو کی عظیم فلسفیانہ اور فنی درسی شرح",
    "category_id": "c-12",
    "description_ur": "عظیم صوفی شاعر اور محقق نحوی علامہ نور الدین جامیؒ نے اپنے فرزند ضیاء الدین کے لیے کافیہ کی یہ شرح قلمبند فرمائی۔ علم نحو کی باریک ترین گتھیاں، منطقی حدود اور فلسفیانہ استدلالات اس کتاب کا خاصہ ہیں۔ درس نظامی کے دورۂ حدیث سے قبل پڑھائی جاتی ہے۔",
    "language": "عربی مع حواشی",
    "binding_type": "مجالد ہارڈ بیک (2 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 2,
    "pages_count": 1100,
    "publication_year": 2023,
    "isbn": "978-969-564-412-2",
    "sku": "AK-GR-012",
    "tags": [
      "شرح جامی",
      "ملا جامی",
      "الفوائد الضیائیہ",
      "درس نظامی"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1780,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-sharah-mulla-jami-front",
        "book_id": "book-sharah-mulla-jami",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-sharah-mulla-jami-gallery",
        "book_id": "book-sharah-mulla-jami",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-sharah-mulla-jami-1",
        "book_id": "book-sharah-mulla-jami",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی کمپیوٹرائزڈ ایڈیشن مع کشف النامی",
        "volumes": 2,
        "binding_type": "مجالد ہارڈ بیک",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 1900,
        "regular_price": 3000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 2700,
        "weight_grams": 2200,
        "stock_quantity": 20,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-012-BUSHRA",
        "barcode": "89640001790",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-awamil-un-nahw-jurjani",
    "title_ur": "العوامل المائۃ النحویۃ - شیخ عبد القاہر جرجانی مع اردو شرح",
    "title_en": "Al-Awamil al-Mi'ah by Sheikh Abdul Qahir al-Jurjani",
    "subtitle_ur": "عربی کلمات پر اثر انداز ہونے والے سو عوامل کا بنیادی منظوم و منثور متن",
    "category_id": "c-12",
    "description_ur": "شیخ عبد القاہر جرجانیؒ کی وہ مختصر اور پرتاثیر تالیف جس میں اعراب دینے والے 100 عوامل (لفظی، قیاسی، معنوی) کو نہایت دلنشین انداز میں یکجا کیا گیا۔ عامل اور معمول کے باہمی تعلق کو سمجھنے کے لیے سنگ بنیاد۔",
    "language": "عربی مع اردو ترجمہ و شرح",
    "binding_type": "پیپر بیک نفیس",
    "printing_type": "یک رنگہ سفید",
    "total_volumes": 1,
    "pages_count": 120,
    "publication_year": 2024,
    "isbn": "978-969-564-413-9",
    "sku": "AK-GR-013",
    "tags": [
      "عوامل النحو",
      "عبد القاہر جرجانی",
      "عوامل جرجانی",
      "سو عوامل"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1950,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-awamil-un-nahw-jurjani-front",
        "book_id": "book-awamil-un-nahw-jurjani",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-awamil-un-nahw-jurjani-gallery",
        "book_id": "book-awamil-un-nahw-jurjani",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-awamil-un-nahw-jurjani-1",
        "book_id": "book-awamil-un-nahw-jurjani",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس کمپیوٹرائزڈ ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ پیپر",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 150,
        "regular_price": 260,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 234,
        "weight_grams": 160,
        "stock_quantity": 60,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-013-ALKHALIL",
        "barcode": "89640001800",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-al-qamoos-ul-muheet",
    "title_ur": "القاموس المحیط - علامہ مجد الدین فیروز آبادیؒ (۴ جلدیں عربی)",
    "title_en": "Al-Qamus al-Muhit - Al-Fairuzabadi (4 Volumes Arabic)",
    "subtitle_ur": "عربی زبان و ادب کی سب سے مشہور اور جامع ترین ام اللغات",
    "category_id": "c-12",
    "description_ur": "علامہ فیروز آبادی شیرازیؒ کی وہ عظیم عربی لغت جس کے نام پر عربی اور اردو میں ہر ڈکشنری کو \"قاموس\" کہا جانے لگا۔ ساٹھ ہزار سے زائد مفردات، اشتقاقات اور کلام عرب کے فصیح ترین استعمالات پر مشتمل مایہ ناز علمی اثاثہ۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر شامی (4 جلدیں)",
    "printing_type": "دو رنگہ بیروتی طباعت اعلیٰ",
    "total_volumes": 4,
    "pages_count": 3600,
    "publication_year": 2023,
    "isbn": "978-969-564-414-6",
    "sku": "AK-DC-001",
    "tags": [
      "القاموس المحیط",
      "فیروز آبادی",
      "عربی لغت",
      "ام اللغات"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1600,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-firozabadi",
          "name_ur": "علامہ مجد الدین محمد بن یعقوب فیروز آبادیؒ",
          "name_en": "Al-Fairuzabadi",
          "bio_ur": "امام اللغۃ العربیۃ، صاحب القاموس المحیط",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-al-qamoos-ul-muheet-front",
        "book_id": "book-al-qamoos-ul-muheet",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-al-qamoos-ul-muheet-gallery",
        "book_id": "book-al-qamoos-ul-muheet",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-al-qamoos-ul-muheet-1",
        "book_id": "book-al-qamoos-ul-muheet",
        "publisher_id": "pub-dar-kutub",
        "publisher": {
          "id": "pub-dar-kutub",
          "name_ur": "دار الکتب العلمیہ بیروت",
          "name_en": "Dar Al-Kotob Al-Ilmiyah Beirut",
          "description": "عالم اسلام میں عربی تراث و مصادر کی عظیم بین الاقوامی اشاعت گاہ",
          "contact_info": "بیروت، لبنان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار الکتب العلمیہ بیروت اصلی ایڈیشن (4 جلدیں)",
        "volumes": 4,
        "binding_type": "مجالد فاخر چمڑہ نما",
        "printing_type": "دو رنگہ امپورٹڈ قرطاس",
        "purchase_cost": 8500,
        "regular_price": 13000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 11700,
        "weight_grams": 6200,
        "stock_quantity": 8,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-DC-001-DAR-KUTUB",
        "barcode": "89640001810",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-lisan-ul-arab-complete",
    "title_ur": "لسان العرب - علامہ ابن منظور افریقیؒ (۱۵ جلدیں مکمل بیروت ایڈیشن)",
    "title_en": "Lisan al-Arab - Ibn Manzur (15 Volumes Complete Beirut)",
    "subtitle_ur": "عالم اسلام میں عربی زبان کا سب سے بڑا، معتمد ترین اور ضخیم ترین لغوی ذخیرہ",
    "category_id": "c-12",
    "description_ur": "امام ابن منظور افریقیؒ نے تہذیب اللغۃ، المحکم، الصحاح، حواشی ابن بری اور النہایۃ فی غریب الحدیث کا خلاصہ جمع فرما کر لسان العرب تیار فرمائی۔ اسی ہزار جڑوں (Roots) اور لاکھوں امثلہ و شواہد پر مشتمل عربی زبان کا تاج محل۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر شامی (15 جلدیں)",
    "printing_type": "دو رنگہ بیروتی طباعت",
    "total_volumes": 15,
    "pages_count": 12500,
    "publication_year": 2023,
    "isbn": "978-969-564-415-3",
    "sku": "AK-DC-002",
    "tags": [
      "لسان العرب",
      "ابن منظور",
      "عربی لغت",
      "تراث اللغۃ"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 2300,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-ibnmanzur",
          "name_ur": "علامہ ابو الفضل جمال الدین ابن منظور افریقیؒ",
          "name_en": "Ibn Manzur",
          "bio_ur": "لغوی اعظم اور مصنف لسان العرب (15 جلدیں)",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-lisan-ul-arab-complete-front",
        "book_id": "book-lisan-ul-arab-complete",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-lisan-ul-arab-complete-gallery",
        "book_id": "book-lisan-ul-arab-complete",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-lisan-ul-arab-complete-1",
        "book_id": "book-lisan-ul-arab-complete",
        "publisher_id": "pub-dar-kutub",
        "publisher": {
          "id": "pub-dar-kutub",
          "name_ur": "دار الکتب العلمیہ بیروت",
          "name_en": "Dar Al-Kotob Al-Ilmiyah Beirut",
          "description": "عالم اسلام میں عربی تراث و مصادر کی عظیم بین الاقوامی اشاعت گاہ",
          "contact_info": "بیروت، لبنان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار الکتب العلمیہ بیروت اصلی درآمد شدہ ایڈیشن (15 جلدیں)",
        "volumes": 15,
        "binding_type": "مجالد فاخر شامی لیدر لک",
        "printing_type": "دو رنگہ امپورٹڈ بیروتی قرطاس",
        "purchase_cost": 32000,
        "regular_price": 46000,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 41400,
        "weight_grams": 24000,
        "stock_quantity": 4,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-DC-002-DAR-KUTUB",
        "barcode": "89640001820",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-al-qamoos-ul-waheed",
    "title_ur": "القاموس الوحید (عربی اردو جدید جامع لغت) - مولانا وحید الزمان کیرانویؒ",
    "title_en": "Al-Qamus al-Waheed (Arabic-Urdu Dictionary) - 1500+ Pages",
    "subtitle_ur": "برصغیر پاک و ہند کی سب سے زیادہ مستعمل اور مستند ترین عربی اردو ڈکشنری",
    "category_id": "c-12",
    "description_ur": "استاذ دار العلوم دیوبند مولانا وحید الزمان قاسمی کیرانویؒ کی مرتب کردہ یہ لغت دینی مدارس، کالجوں اور جامعات کے طلبہ کے لیے ناگزیر رہنما ہے۔ قدیم کلاسیکی الفاظ کے ساتھ ساتھ جدید تکنیکی، سائنسی اور بین الاقوامی اصطلاحات کا احاطہ۔",
    "language": "عربی و اردو",
    "binding_type": "مجالد فینسی ہارڈ بائنڈنگ",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 1,
    "pages_count": 1580,
    "publication_year": 2024,
    "isbn": "978-969-564-416-0",
    "sku": "AK-DC-003",
    "tags": [
      "القاموس الوحید",
      "وحید الزمان کیرانوی",
      "عربی اردو لغت",
      "ڈکشنری"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 4800,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-kairanwi",
          "name_ur": "مولانا وحید الزمان قاسمی کیرانویؒ",
          "name_en": "Maulana Wahid-uz-Zaman Kairanawi",
          "bio_ur": "استاذ دار العلوم دیوبند اور مصنف القاموس الوحید عربی اردو لغت",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-al-qamoos-ul-waheed-front",
        "book_id": "book-al-qamoos-ul-waheed",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-al-qamoos-ul-waheed-gallery",
        "book_id": "book-al-qamoos-ul-waheed",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-al-qamoos-ul-waheed-1",
        "book_id": "book-al-qamoos-ul-waheed",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس لارج سائز ایڈیشن مع انڈیکس کٹ",
        "volumes": 1,
        "binding_type": "مجالد چمڑہ نما گولڈن بارڈر",
        "printing_type": "دو رنگہ نفیس امپورٹڈ کاغذ",
        "purchase_cost": 2100,
        "regular_price": 3400,
        "discount_type": "percentage",
        "discount_value": 12,
        "final_price": 2992,
        "weight_grams": 2300,
        "stock_quantity": 45,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-DC-003-ALKHALIL",
        "barcode": "89640001830",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-misbah-ul-lughat",
    "title_ur": "مصباح اللغات (عربی اردو جامع لغت) - مولانا عبد الحفیظ بلیاویؒ",
    "title_en": "Misbah-ul-Lughat (Arabic Urdu Dictionary) - Maulana Bilyawi",
    "subtitle_ur": "قرآن، حدیث، فقہ اور ادبی کتب کے پچاس ہزار سے زائد کلمات کا مفہوم",
    "category_id": "c-12",
    "description_ur": "برصغیر کے مدارس میں نصف صدی سے مقبول ترین عربی اردو لغت۔ الفاظ کو حروف اصلیہ (مادہ) کے تحت نہایت سلیقے سے ترتیب دیا گیا ہے اور ہر لفظ کے باب، مصدر اور کثیر الاستعمال محاورات کو وضاحت کے ساتھ نقل کیا گیا ہے۔",
    "language": "عربی و اردو",
    "binding_type": "مجالد ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 1040,
    "publication_year": 2024,
    "isbn": "978-969-564-417-7",
    "sku": "AK-DC-004",
    "tags": [
      "مصباح اللغات",
      "عبد الحفیظ بلیاوی",
      "عربی لغت",
      "دینی مدارس"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 3200,
    "created_at": "2026-10-25T08:13:52.884Z",
    "updated_at": "2026-10-25T08:13:52.884Z",
    "authors": [
      {
        "author": {
          "id": "auth-bilyawi",
          "name_ur": "مولانا عبد الحفیظ بلیاویؒ",
          "name_en": "Maulana Abdul Hafeez Bilyawi",
          "bio_ur": "جامع القوامیس اور مصنف مصباح اللغات",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-misbah-ul-lughat-front",
        "book_id": "book-misbah-ul-lughat",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.884Z"
      },
      {
        "id": "img-book-misbah-ul-lughat-gallery",
        "book_id": "book-misbah-ul-lughat",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.884Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-misbah-ul-lughat-1",
        "book_id": "book-misbah-ul-lughat",
        "publisher_id": "pub-qadimi",
        "publisher": {
          "id": "pub-qadimi",
          "name_ur": "قدیمی کتب خانہ",
          "name_en": "Qadimi Kutub Khana",
          "description": "درس نظامی کی قدیم عربی و اردو کتب کا مرکز",
          "contact_info": "آرام باغ روڈ، کراچی",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "قدیمی کتب خانہ کراچی نیا ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک مجالد",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 1400,
        "regular_price": 2300,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 2070,
        "weight_grams": 1650,
        "stock_quantity": 30,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-DC-004-QADIMI",
        "barcode": "89640001840",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.884Z",
        "updated_at": "2026-10-25T08:13:52.884Z"
      }
    ]
  },
  {
    "id": "book-lughat-ul-quran-nomani",
    "title_ur": "لغات القرآن - مولانا عبد الرشید نعمانیؒ (۶ جلدیں مکمل)",
    "title_en": "Lughat-ul-Quran - Maulana Abdur Rasheed Nomani (6 Volumes)",
    "subtitle_ur": "قرآن کریم کے ہر لفظ کی صرفی، نحوی اور لغوی تحقیق کا نادر علمی ذخیرہ",
    "category_id": "c-12",
    "description_ur": "مولانا عبد الرشید نعمانیؒ کی وہ تاریخی تصنیف جس میں قرآن مجید کے تمام کلمات کو حروف ہجا کے تحت لا کر ان کے مادے، اشتقاق، لغوی معنی، مختلف آیات میں استعمال اور نحوی اعراب کو کھول کر بیان کیا گیا۔ علوم قرآن کے ہر طالب علم کے لیے بیش بہا تحفہ۔",
    "language": "اردو و عربی",
    "binding_type": "مجالد ہارڈ بیک (6 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 6,
    "pages_count": 3800,
    "publication_year": 2023,
    "isbn": "978-969-564-418-4",
    "sku": "AK-DC-005",
    "tags": [
      "لغات القرآن",
      "عبد الرشید نعمانی",
      "قرآنی الفاظ",
      "تحقیق لغت"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2100,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-lughat-ul-quran-nomani-front",
        "book_id": "book-lughat-ul-quran-nomani",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-lughat-ul-quran-nomani-gallery",
        "book_id": "book-lughat-ul-quran-nomani",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-lughat-ul-quran-nomani-1",
        "book_id": "book-lughat-ul-quran-nomani",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز 6 جلدیں سیٹ",
        "volumes": 6,
        "binding_type": "مجالد ہارڈ بیک",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 6500,
        "regular_price": 10500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 9450,
        "weight_grams": 6800,
        "stock_quantity": 14,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-DC-005-ALKHALIL",
        "barcode": "89640001850",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-feroz-ul-lughat-urdu-jami",
    "title_ur": "فیروز اللغات اردو جامع (جدید ایڈیشن) - مولوی فیروز الدین",
    "title_en": "Feroz-ul-Lughat Urdu Jami (New Modern Edition)",
    "subtitle_ur": "اردو زبان کی سب سے بڑی اور سب سے معتبر ڈکشنری مع تلفظ و محاورات",
    "category_id": "c-12",
    "description_ur": "اردو زبان کا ایک لاکھ پچیس ہزار سے زائد قدیم و جدید الفاظ، مرکبات، محاورات، ضرب الامثال اور سائنسی و ادبی اصطلاحات پر مشتمل جامع ترین انسائیکلوپیڈیا۔ صحیح اعراب، املاء اور سند کے ساتھ اشاعت۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک لارج",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 1,
    "pages_count": 1480,
    "publication_year": 2024,
    "isbn": "978-969-564-419-1",
    "sku": "AK-DC-006",
    "tags": [
      "فیروز اللغات",
      "اردو ڈکشنری",
      "اردو لغت",
      "فیروز الدین"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 3500,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-feroz-ul-lughat-urdu-jami-front",
        "book_id": "book-feroz-ul-lughat-urdu-jami",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-feroz-ul-lughat-urdu-jami-gallery",
        "book_id": "book-feroz-ul-lughat-urdu-jami",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-feroz-ul-lughat-urdu-jami-1",
        "book_id": "book-feroz-ul-lughat-urdu-jami",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز لگژری ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک گولڈن",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 1600,
        "regular_price": 2600,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 2340,
        "weight_grams": 2100,
        "stock_quantity": 35,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-DC-006-ALKHALIL",
        "barcode": "89640001860",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-al-mufassal-zamakhshari",
    "title_ur": "المفصل فی صنعۃ الاعراب - علامہ جار اللہ زمخشری مع شرح ابن یعیش",
    "title_en": "Al-Mufassal fi San'at al-I'rab - Al-Zamakhshari (2 Volumes)",
    "subtitle_ur": "عربی نحو و بلاغت کی وہ کتاب جسے امام ابن ہشام اور سیبویہ کا خلاصہ کہا گیا",
    "category_id": "c-12",
    "description_ur": "علامہ محمود بن عمر زمخشری کی وہ شاندار نحوی کتاب جو اسم، فعل، حرف اور مشترک مباحث کی لاجواب تقسیم پر مبنی ہے۔ امام موفق الدین ابن یعیش کی مبسوط شرح کے ساتھ عربی لٹریچر کے محققین کے لیے ناگزیر۔",
    "language": "عربی (Arabic)",
    "binding_type": "مجالد فاخر (2 جلدیں)",
    "printing_type": "دو رنگہ بیروتی طباعت",
    "total_volumes": 2,
    "pages_count": 1240,
    "publication_year": 2023,
    "isbn": "978-969-564-420-7",
    "sku": "AK-GR-014",
    "tags": [
      "المفصل",
      "زمخشری",
      "ابن یعیش",
      "نحو عربی"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1250,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-al-mufassal-zamakhshari-front",
        "book_id": "book-al-mufassal-zamakhshari",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-al-mufassal-zamakhshari-gallery",
        "book_id": "book-al-mufassal-zamakhshari",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-al-mufassal-zamakhshari-1",
        "book_id": "book-al-mufassal-zamakhshari",
        "publisher_id": "pub-dar-kutub",
        "publisher": {
          "id": "pub-dar-kutub",
          "name_ur": "دار الکتب العلمیہ بیروت",
          "name_en": "Dar Al-Kotob Al-Ilmiyah Beirut",
          "description": "عالم اسلام میں عربی تراث و مصادر کی عظیم بین الاقوامی اشاعت گاہ",
          "contact_info": "بیروت، لبنان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار الکتب العلمیہ بیروت ایڈیشن (2 جلدیں)",
        "volumes": 2,
        "binding_type": "مجالد فاخر",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 3100,
        "regular_price": 4700,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 4230,
        "weight_grams": 2400,
        "stock_quantity": 8,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-014-DAR-KUTUB",
        "barcode": "89640001870",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-shudoor-az-zahab-ibn-hisham",
    "title_ur": "شذور الذہب فی معرفۃ کلام العرب - امام ابن ہشام انصاریؒ",
    "title_en": "Shudoor al-Dhahab fi Ma'rifat Kalam al-Arab - Ibn Hisham",
    "subtitle_ur": "نحوی استدلال اور کلام عرب کی باریکیوں کا سنہری علمی مجموعہ",
    "category_id": "c-12",
    "description_ur": "ابن ہشام انصاریؒ نے قطر الندیٰ کے بعد شذور الذہب تحریر فرمائی جس میں نحو کے مشکل ترین مقامات کو عربی اشعار اور قرآنی قراءات کی روشنی میں حل کیا گیا ہے۔ اعلیٰ درجات کے طلبہ کے لیے مفید ترین کتاب۔",
    "language": "عربی مع اردو حواشی",
    "binding_type": "ہارڈ بیک نفیس",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 460,
    "publication_year": 2024,
    "isbn": "978-969-564-421-4",
    "sku": "AK-GR-015",
    "tags": [
      "شذور الذہب",
      "ابن ہشام",
      "نحو عربی",
      "کلام عرب"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1550,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [
      {
        "author": {
          "id": "auth-ibnhisham",
          "name_ur": "امام جمال الدین عبد اللہ بن یوسف ابن ہشام انصاریؒ",
          "name_en": "Ibn Hisham al-Ansari",
          "bio_ur": "امام النحو العربی، مصنف قطر الندیٰ و مغنی اللبیب",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-shudoor-az-zahab-ibn-hisham-front",
        "book_id": "book-shudoor-az-zahab-ibn-hisham",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-shudoor-az-zahab-ibn-hisham-gallery",
        "book_id": "book-shudoor-az-zahab-ibn-hisham",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-shudoor-az-zahab-ibn-hisham-1",
        "book_id": "book-shudoor-az-zahab-ibn-hisham",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کراچی کمپیوٹرائزڈ ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک مجالد",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 650,
        "regular_price": 1100,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 990,
        "weight_grams": 720,
        "stock_quantity": 22,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-GR-015-BUSHRA",
        "barcode": "89640001880",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-al-munjid-fil-lughah",
    "title_ur": "المنجد فی اللغۃ والاعلام (عربی اردو ایڈیشن جدید)",
    "title_en": "Al-Munjid fil Lughah wal A'laam (Arabic Urdu Edition)",
    "subtitle_ur": "تصاویر، نقشہ جات اور تاریخی شخصیات کے تعارف سے مزین عالمی لغت",
    "category_id": "c-12",
    "description_ur": "المنجد عالم عرب کی وہ معتبر لغت ہے جس میں ہر لفظ کے ساتھ تصویری خاکے، سائنسی وضاحتیں اور عرب تاریخ کے مشہور مقامات و اعلام کے حالات درج ہیں۔ اردو ترجمہ کے ساتھ دیدہ زیب طباعت۔",
    "language": "عربی و اردو",
    "binding_type": "مجالد فاخر ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت اعلیٰ",
    "total_volumes": 1,
    "pages_count": 1420,
    "publication_year": 2024,
    "isbn": "978-969-564-422-1",
    "sku": "AK-DC-007",
    "tags": [
      "المنجد",
      "عربی لغت",
      "ڈکشنری",
      "اعلام التاریخ"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2450,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-al-munjid-fil-lughah-front",
        "book_id": "book-al-munjid-fil-lughah",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-al-munjid-fil-lughah-gallery",
        "book_id": "book-al-munjid-fil-lughah",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-al-munjid-fil-lughah-1",
        "book_id": "book-al-munjid-fil-lughah",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس مجالد لارج ایڈیشن",
        "volumes": 1,
        "binding_type": "مجالد چمڑہ نما گولڈن",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 2200,
        "regular_price": 3600,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 3240,
        "weight_grams": 2200,
        "stock_quantity": 30,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-DC-007-ALKHALIL",
        "barcode": "89640001890",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-seerat-e-mustafa-kandhlawi",
    "title_ur": "سیرت مصطفیٰ ﷺ - مولانا محمد ادریس کاندھلویؒ (۳ جلدیں)",
    "title_en": "Seerat-e-Mustafa ﷺ - Maulana Muhammad Idris Kandhlawi (3 Vols)",
    "subtitle_ur": "صحیح اور مستند احادیث و روایات کی روشنی میں لکھی گئی بے مثل سیرت نبوی",
    "category_id": "c-6",
    "description_ur": "شیخ الحدیث والتفسیر حضرت مولانا محمد ادریس کاندھلویؒ کی وہ تاریخی تصنیف جس نے باطل شبہات اور ضعیف روایات کا پردہ چاک کر کے سنت اور سیرتِ نبوی کے پاکیزہ نقوش کو اجاگر کیا۔ فصاحت و بلاغت اور ادب و احترام کا بے نظیر نمونہ۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک (3 جلدیں)",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 3,
    "pages_count": 2150,
    "publication_year": 2024,
    "isbn": "978-969-564-501-3",
    "sku": "AK-SR-001",
    "tags": [
      "سیرت مصطفی",
      "ادریس کاندھلوی",
      "سیرت النبی",
      "سیرت نبوی"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3600,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [
      {
        "author": {
          "id": "auth-kandhlawi",
          "name_ur": "مولانا محمد ادریس کاندھلویؒ",
          "name_en": "Maulana Muhammad Idris Kandhlawi",
          "bio_ur": "شیخ الحدیث و التفسیر، مصنف سیرت مصطفیٰ ﷺ و التعلیق الصبیح",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-seerat-e-mustafa-kandhlawi-front",
        "book_id": "book-seerat-e-mustafa-kandhlawi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-seerat-e-mustafa-kandhlawi-gallery",
        "book_id": "book-seerat-e-mustafa-kandhlawi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-seerat-e-mustafa-kandhlawi-1",
        "book_id": "book-seerat-e-mustafa-kandhlawi",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس 3 جلدیں سیٹ (باکس پیک)",
        "volumes": 3,
        "binding_type": "مجالد چمڑہ نما گولڈن",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 3600,
        "regular_price": 5500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 4950,
        "weight_grams": 3800,
        "stock_quantity": 25,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-SR-001-ALKHALIL",
        "barcode": "89640001900",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-ar-raheeq-ul-makhtum",
    "title_ur": "الرحیق المختوم (مہر بند امرت) - مولانا صفی الرحمن مبارکپوریؒ",
    "title_en": "Ar-Raheeq Al-Makhtum (The Sealed Nectar) - Safi-ur-Rahman Mubarakpuri",
    "subtitle_ur": "رابطہ عالم اسلامی کے بین الاقوامی مقابلہ سیرت میں دنیا بھر میں اول انعام یافتہ کتاب",
    "category_id": "c-6",
    "description_ur": "سیرت النبی ﷺ پر عالم اسلام کی سب سے زیادہ پڑھی جانے والی اور درجنوں زبانوں میں ترجمہ ہونے والی کتاب۔ سیرت کے تمام ادوار مکی اور مدنی زندگی کے تاریخی اور دعوتی پہلوؤں کا مدلل اور دلنشین احاطہ۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد فاخر ہارڈ بیک",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 1,
    "pages_count": 720,
    "publication_year": 2024,
    "isbn": "978-969-564-502-0",
    "sku": "AK-SR-002",
    "tags": [
      "الرحیق المختوم",
      "صفی الرحمن مبارکپوری",
      "مقابلہ سیرت",
      "سیرت نبوی"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 4900,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [
      {
        "author": {
          "id": "auth-mubarakpuri",
          "name_ur": "مولانا صفی الرحمن مبارکپوریؒ",
          "name_en": "Maulana Safi-ur-Rahman Mubarakpuri",
          "bio_ur": "بین الاقوامی سیرت نگار اور مصنف سیرت الرحیق المختوم",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-ar-raheeq-ul-makhtum-front",
        "book_id": "book-ar-raheeq-ul-makhtum",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-ar-raheeq-ul-makhtum-gallery",
        "book_id": "book-ar-raheeq-ul-makhtum",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-ar-raheeq-ul-makhtum-1",
        "book_id": "book-ar-raheeq-ul-makhtum",
        "publisher_id": "pub-darussalam",
        "publisher": {
          "id": "pub-darussalam",
          "name_ur": "دار السلام پبلیکیشنز",
          "name_en": "Darussalam Publications",
          "description": "عالمی سطح پر معروف اسلامی اشاعتی ادارہ",
          "contact_info": "لاہور، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "دار السلام پبلیکیشنز اوریجنل فینسی ایڈیشن مع نقشہ جات",
        "volumes": 1,
        "binding_type": "ہارڈ بیک کشن کور گولڈن",
        "printing_type": "چار رنگہ امپورٹڈ قرطاس",
        "purchase_cost": 1400,
        "regular_price": 2200,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1980,
        "weight_grams": 1250,
        "stock_quantity": 45,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-SR-002-DARUSSALAM",
        "barcode": "89640001910",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "ed-book-ar-raheeq-ul-makhtum-2",
        "book_id": "book-ar-raheeq-ul-makhtum",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز پاکٹ و میڈیم سائز ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بائنڈنگ",
        "printing_type": "دو رنگہ سفید کاغذ",
        "purchase_cost": 950,
        "regular_price": 1550,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1395,
        "weight_grams": 980,
        "stock_quantity": 30,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-SR-002-ALKHALIL",
        "barcode": "89640001911",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-seerat-un-nabi-shibli-sulaiman",
    "title_ur": "سیرت النبی ﷺ - علامہ شبلی نعمانی و سید سلیمان ندویؒ (۷ جلدیں)",
    "title_en": "Seerat-un-Nabi ﷺ - Shibli Nomani & Sulaiman Nadwi (7 Volumes)",
    "subtitle_ur": "اردو زبان میں سیرت کا عظیم ترین تحقیقی، فلسفیانہ اور تاریخی انسائیکلوپیڈیا",
    "category_id": "c-6",
    "description_ur": "دار المصنفین اعظم گڑھ کا شاہکار۔ علامہ شبلی نعمانیؒ کی بنیاد اور سید سلیمان ندویؒ کی تکمیل کردہ یہ سات جلدیں رسول اکرم ﷺ کی نبوت، معجزات، اخلاق، سیاسی فتوحات اور نظام حکومت کے دلائل عقلیہ و نقلیہ کا لازوال مرقع ہیں۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک (7 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 7,
    "pages_count": 4800,
    "publication_year": 2023,
    "isbn": "978-969-564-503-7",
    "sku": "AK-SR-003",
    "tags": [
      "سیرت النبی",
      "شبلی نعمانی",
      "سلیمان ندوی",
      "دار المصنفین"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2400,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [
      {
        "author": {
          "id": "auth-shibli",
          "name_ur": "علامہ شبلی نعمانی و سید سلیمان ندویؒ",
          "name_en": "Allama Shibli Nomani & Sulaiman Nadwi",
          "bio_ur": "مصنفین سیرت النبی ﷺ (7 جلدیں)",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-seerat-un-nabi-shibli-sulaiman-front",
        "book_id": "book-seerat-un-nabi-shibli-sulaiman",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-seerat-un-nabi-shibli-sulaiman-gallery",
        "book_id": "book-seerat-un-nabi-shibli-sulaiman",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-seerat-un-nabi-shibli-sulaiman-1",
        "book_id": "book-seerat-un-nabi-shibli-sulaiman",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس 7 جلدیں سیٹ",
        "volumes": 7,
        "binding_type": "مجالد ہارڈ بیک",
        "printing_type": "دو رنگہ اعلیٰ کاغذ",
        "purchase_cost": 8500,
        "regular_price": 13500,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 12150,
        "weight_grams": 8500,
        "stock_quantity": 12,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-SR-003-ALKHALIL",
        "barcode": "89640001920",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-nabi-e-rahmat-nadwi",
    "title_ur": "نبی رحمت ﷺ - مولانا سید ابو الحسن علی ندویؒ",
    "title_en": "Nabi-e-Rahmat ﷺ - Maulana Abul Hasan Ali Nadwi",
    "subtitle_ur": "سید المرسلین ﷺ کی حیات طیبہ کا اثر انگیز، ادبی اور روحانی مرقع",
    "category_id": "c-6",
    "description_ur": "عظیم داعی اسلام مولانا سید ابو الحسن علی ندویؒ کا قلم جب سیرت لکھتا ہے تو دلوں کی کایا پلٹ دیتا ہے۔ جاہلیت کے اندھیروں سے انسانیت کو نکال کر نور توحید تک لانے کی داستان۔ دور جدید کے نوجوانوں کے لیے مشعل راہ۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 580,
    "publication_year": 2024,
    "isbn": "978-969-564-504-4",
    "sku": "AK-SR-004",
    "tags": [
      "نبی رحمت",
      "ابو الحسن علی ندوی",
      "سیرت النبی",
      "دعوت"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2200,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [
      {
        "author": {
          "id": "auth-nadwi",
          "name_ur": "مولانا سید ابو الحسن علی حسنی ندویؒ",
          "name_en": "Maulana Abul Hasan Ali Nadwi",
          "bio_ur": "عظیم مفکر اسلام، داعی و مصنف قصص النبیین و ماذا خسر العالم بانحطاط المسلمین",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-nabi-e-rahmat-nadwi-front",
        "book_id": "book-nabi-e-rahmat-nadwi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-nabi-e-rahmat-nadwi-gallery",
        "book_id": "book-nabi-e-rahmat-nadwi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-nabi-e-rahmat-nadwi-1",
        "book_id": "book-nabi-e-rahmat-nadwi",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس ایڈیشن",
        "volumes": 1,
        "binding_type": "مجالد چمڑہ نما گولڈن",
        "printing_type": "دو رنگہ سفید کاغذ",
        "purchase_cost": 800,
        "regular_price": 1350,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 1215,
        "weight_grams": 880,
        "stock_quantity": 35,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-SR-004-ALKHALIL",
        "barcode": "89640001930",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-tareekh-e-islam-najeebabadi",
    "title_ur": "تاریخ اسلام - مولانا اکبر شاہ خان نجیب آبادیؒ (۴ جلدیں)",
    "title_en": "Tareekh-e-Islam - Akbar Shah Najeebabadi (4 Volumes)",
    "subtitle_ur": "عہد رسالت، خلافت راشدہ، بنو امیہ، بنو عباس اور سقوط بغداد کی مکمل تاریخ",
    "category_id": "c-7",
    "description_ur": "اردو زبان میں اسلام کی تاریخ پر سب سے زیادہ مستند، متوازن اور مقبول عام کتاب۔ بغیر کسی تعصب کے اسلاف کے کارناموں، فتوحات اسلامی اور تاریخ کے نشیب و فراز کا سبق آموز اور غیر جانبدارانہ جائزہ۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک (4 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 4,
    "pages_count": 2600,
    "publication_year": 2024,
    "isbn": "978-969-564-505-1",
    "sku": "AK-HI-001",
    "tags": [
      "تاریخ اسلام",
      "اکبر شاہ نجیب آبادی",
      "خلافت راشدہ",
      "بنو امیہ"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3100,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-tareekh-e-islam-najeebabadi-front",
        "book_id": "book-tareekh-e-islam-najeebabadi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-tareekh-e-islam-najeebabadi-gallery",
        "book_id": "book-tareekh-e-islam-najeebabadi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-tareekh-e-islam-najeebabadi-1",
        "book_id": "book-tareekh-e-islam-najeebabadi",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس 4 جلدیں سیٹ",
        "volumes": 4,
        "binding_type": "مجالد ہارڈ بیک ریگزین",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 4500,
        "regular_price": 7200,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 6480,
        "weight_grams": 4800,
        "stock_quantity": 20,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HI-001-ALKHALIL",
        "barcode": "89640001940",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-al-bidayah-wan-nihayah-urdu",
    "title_ur": "البدایہ والنہایہ اردو (تاریخ ابن کثیر) - حافظ عماد الدین ابن کثیر (۱۴ جلدیں)",
    "title_en": "Al-Bidayah wan-Nihayah Urdu (Tarikh Ibn Kathir) - 14 Volumes",
    "subtitle_ur": "تخلیق کائنات، انبیاء کے قصص، تاریخ اسلام اور علامات قیامت کا عظیم ترین ذخیرہ",
    "category_id": "c-7",
    "description_ur": "حافظ ابن کثیرؒ کی وہ بے مثل تاریخ جو عرش و کرسی، لوح و قلم اور فرشتوں کی پیدائش سے شروع ہو کر حضرت آدمؑ تا خاتم النبیین ﷺ، پھر خلافت راشدہ اور صدیوں کی اسلامی تاریخ سے گزرتی ہوئی فتنوں، یاجوج ماجوج، دجال، نزول عیسیٰؑ اور قیامت کے مناظر پر ختم ہوتی ہے۔",
    "language": "عربی مع اردو ترجمہ مکمل",
    "binding_type": "مجالد ہارڈ بیک (14 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 14,
    "pages_count": 10500,
    "publication_year": 2023,
    "isbn": "978-969-564-506-8",
    "sku": "AK-HI-002",
    "tags": [
      "البدایہ والنہایہ",
      "تاریخ ابن کثیر",
      "ابن کثیر",
      "علامات قیامت"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3400,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [
      {
        "author": {
          "id": "auth-ibnkathir",
          "name_ur": "عماد الدین اسماعیل بن عمر ابن کثیرؒ",
          "name_en": "Imam Ibn Kathir",
          "bio_ur": "جلیل القدر مفسر و مورخ، مصنف تفسیر ابن کثیر و البدایہ والنہایہ",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-al-bidayah-wan-nihayah-urdu-front",
        "book_id": "book-al-bidayah-wan-nihayah-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-al-bidayah-wan-nihayah-urdu-gallery",
        "book_id": "book-al-bidayah-wan-nihayah-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-al-bidayah-wan-nihayah-urdu-1",
        "book_id": "book-al-bidayah-wan-nihayah-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز 14 جلدیں مکمل باکس سیٹ",
        "volumes": 14,
        "binding_type": "مجالد چمڑہ نما گولڈن ایمبوسنگ",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 18500,
        "regular_price": 28000,
        "discount_type": "percentage",
        "discount_value": 12,
        "final_price": 24640,
        "weight_grams": 16500,
        "stock_quantity": 8,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HI-002-ALKHALIL",
        "barcode": "89640001950",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-tarikh-al-umam-wal-mulook-tabari",
    "title_ur": "تاریخ طبری اردو (تاریخ الامم والملوک) - امام ابن جریر طبریؒ (۸ جلدیں)",
    "title_en": "Tarikh al-Tabari Urdu (Tarikh al-Umam wal-Muluk) - 8 Volumes",
    "subtitle_ur": "اسلامی تاریخ کا اوّلین اور سب سے بڑا مستند ترین ماخذ و مرجع",
    "category_id": "c-7",
    "description_ur": "امام المورخین ابو جعفر محمد بن جریر طبریؒ کی عظیم الشان تاریخ جس کی بنیاد پر بعد کے تمام مورخین (ابن کثیر، ابن الاثیر، ابن خلدون) نے اپنی تاریخیں مرتب کیں۔ صحابہ کرام کے دور کے تمام واقعات و روایات کا مکمل اسناد کے ساتھ بیان۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک (8 جلدیں)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 8,
    "pages_count": 6200,
    "publication_year": 2023,
    "isbn": "978-969-564-507-5",
    "sku": "AK-HI-003",
    "tags": [
      "تاریخ طبری",
      "امام طبری",
      "تاریخ الامم والملوک",
      "ام التواریخ"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1650,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [
      {
        "author": {
          "id": "auth-tabari",
          "name_ur": "امام ابو جعفر محمد بن جریر طبریؒ",
          "name_en": "Imam Ibn Jarir al-Tabari",
          "bio_ur": "امام المفسرین و المؤرخین، مصنف جامع البیان و تاریخ طبری",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-tarikh-al-umam-wal-mulook-tabari-front",
        "book_id": "book-tarikh-al-umam-wal-mulook-tabari",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1507842229452-73595690b275?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-tarikh-al-umam-wal-mulook-tabari-gallery",
        "book_id": "book-tarikh-al-umam-wal-mulook-tabari",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-tarikh-al-umam-wal-mulook-tabari-1",
        "book_id": "book-tarikh-al-umam-wal-mulook-tabari",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز 8 جلدیں سیٹ",
        "volumes": 8,
        "binding_type": "مجالد ہارڈ بیک",
        "printing_type": "دو رنگہ کاغذ",
        "purchase_cost": 11000,
        "regular_price": 16800,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 15120,
        "weight_grams": 10200,
        "stock_quantity": 10,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-HI-003-ALKHALIL",
        "barcode": "89640001960",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1507842229452-73595690b275?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-ihya-uloom-id-deen-ghazali",
    "title_ur": "احیاء علوم الدین مع مذاق العارفین اردو - امام ابو حامد غزالیؒ (۴ جلدیں)",
    "title_en": "Ihya Uloom-ud-Deen Urdu (Mazaq-ul-Arifeen) - Imam Ghazali (4 Vols)",
    "subtitle_ur": "تزکیہ نفس، باطنی امراض کا علاج اور اخلاق حسنہ کا لازوال روحانی ذخیرہ",
    "category_id": "c-11",
    "description_ur": "حجۃ الاسلام امام غزالیؒ کی وہ زندہ جاوید کتاب جس کے متعلق ائمہ نے فرمایا: \"کاد الاحیاء ان یکون قرآناً\" (قریب تھا کہ احیاء علوم الدین قرآن کا درجہ پا لیتی)۔ عبادات کے باطنی اسرار، عادات، مہلکات اور منجیات کے تفصیلی ابواب اردو میں۔",
    "language": "عربی مع اردو ترجمہ و تشریح",
    "binding_type": "مجالد ہارڈ بیک (4 جلدیں)",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 4,
    "pages_count": 3100,
    "publication_year": 2024,
    "isbn": "978-969-564-508-2",
    "sku": "AK-TZ-001",
    "tags": [
      "احیاء علوم الدین",
      "امام غزالی",
      "تزکیہ نفس",
      "تصوف و اخلاق"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3800,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [
      {
        "author": {
          "id": "auth-ghazali",
          "name_ur": "حجۃ الاسلام امام ابو حامد محمد بن محمد غزالیؒ",
          "name_en": "Imam Abu Hamid Al-Ghazali",
          "bio_ur": "عظیم مجدد، فقیہ و مصلح، مصنف احیاء علوم الدین و کیمیائے سعادت",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-ihya-uloom-id-deen-ghazali-front",
        "book_id": "book-ihya-uloom-id-deen-ghazali",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-ihya-uloom-id-deen-ghazali-gallery",
        "book_id": "book-ihya-uloom-id-deen-ghazali",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-ihya-uloom-id-deen-ghazali-1",
        "book_id": "book-ihya-uloom-id-deen-ghazali",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس 4 جلدیں سیٹ",
        "volumes": 4,
        "binding_type": "مجالد چمڑہ نما گولڈن",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 5200,
        "regular_price": 8200,
        "discount_type": "percentage",
        "discount_value": 12,
        "final_price": 7216,
        "weight_grams": 5400,
        "stock_quantity": 22,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TZ-001-ALKHALIL",
        "barcode": "89640001970",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-keemiya-e-saadat-ghazali",
    "title_ur": "کیمیائے سعادت - حجۃ الاسلام امام ابو حامد محمد بن محمد غزالیؒ",
    "title_en": "Keemiya-e-Sa'adat - Imam Abu Hamid Al-Ghazali Urdu",
    "subtitle_ur": "معرفت نفس، معرفت حق، اخلاص اور نجات اخروی کی اکسیر کتاب",
    "category_id": "c-11",
    "description_ur": "امام غزالیؒ نے احیاء علوم الدین کا خلاصہ عام فہم زبان میں کیمیائے سعادت کے نام سے تحریر فرمایا۔ انسان اپنے نفس کو کیسے پہچانے، اللہ تعالیٰ کی معرفت کیسے حاصل کرے، دنیا کی حقیقت کیا ہے اور آخرت کی تیاری کیسی ہونی چاہیے، اس کا دلنشین بیان۔",
    "language": "فارسی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک فینسی",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 820,
    "publication_year": 2024,
    "isbn": "978-969-564-509-9",
    "sku": "AK-TZ-002",
    "tags": [
      "کیمیائے سعادت",
      "امام غزالی",
      "معرفت نفس",
      "روحانیت"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 4100,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [
      {
        "author": {
          "id": "auth-ghazali",
          "name_ur": "حجۃ الاسلام امام ابو حامد محمد بن محمد غزالیؒ",
          "name_en": "Imam Abu Hamid Al-Ghazali",
          "bio_ur": "عظیم مجدد، فقیہ و مصلح، مصنف احیاء علوم الدین و کیمیائے سعادت",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-keemiya-e-saadat-ghazali-front",
        "book_id": "book-keemiya-e-saadat-ghazali",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-keemiya-e-saadat-ghazali-gallery",
        "book_id": "book-keemiya-e-saadat-ghazali",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-keemiya-e-saadat-ghazali-1",
        "book_id": "book-keemiya-e-saadat-ghazali",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز گولڈن ایڈیشن",
        "volumes": 1,
        "binding_type": "مجالد ریگزین گولڈن",
        "printing_type": "دو رنگہ نفیس کاغذ",
        "purchase_cost": 1100,
        "regular_price": 1800,
        "discount_type": "percentage",
        "discount_value": 15,
        "final_price": 1530,
        "weight_grams": 1250,
        "stock_quantity": 40,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TZ-002-ALKHALIL",
        "barcode": "89640001980",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-munajat-e-maqbool-thanvi",
    "title_ur": "مناجات مقبول مع حزب الاعظم اردو ترجمہ - مولانا اشرف علی تھانویؒ",
    "title_en": "Munajat-e-Maqbool with Hizb-ul-Azam Urdu Translation",
    "subtitle_ur": "قرآن و سنت کی مسنون، برکت والی اور قبول ہونے والی دعاؤں کا ہفتہ وار مجموعہ",
    "category_id": "c-11",
    "description_ur": "حکیم الامت مجدد الملت مولانا اشرف علی تھانویؒ کا روزمرہ پڑھنے کے لیے تیار کردہ دعاؤں کا مبارک مجموعہ جس میں سات منزلیں ہیں تاکہ روزانہ ایک منزل پڑھی جا سکے۔ ساتھ ملا علی قاریؒ کا حزب الاعظم بھی شامل ہے۔ با برکت اور پر تاثیر۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "ہارڈ بیک پاکٹ سائز گولڈن",
    "printing_type": "دو رنگہ نفیس طباعت",
    "total_volumes": 1,
    "pages_count": 220,
    "publication_year": 2024,
    "isbn": "978-969-564-510-5",
    "sku": "AK-TZ-003",
    "tags": [
      "مناجات مقبول",
      "حزب الاعظم",
      "اشرف علی تھانوی",
      "مسنون دعائیں"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 3200,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [
      {
        "author": {
          "id": "auth-thanvi",
          "name_ur": "حکیم الامت مولانا اشرف علی تھانویؒ",
          "name_en": "Maulana Ashraf Ali Thanvi",
          "bio_ur": "مجدد الملت، مصنف تفسیر بیان القرآن، بہشتی زیور اور مناجات مقبول",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-munajat-e-maqbool-thanvi-front",
        "book_id": "book-munajat-e-maqbool-thanvi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-munajat-e-maqbool-thanvi-gallery",
        "book_id": "book-munajat-e-maqbool-thanvi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-munajat-e-maqbool-thanvi-1",
        "book_id": "book-munajat-e-maqbool-thanvi",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز پاکٹ فینسی گولڈن ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک کشن کور",
        "printing_type": "دو رنگہ قرطاس",
        "purchase_cost": 280,
        "regular_price": 480,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 432,
        "weight_grams": 220,
        "stock_quantity": 65,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TZ-003-ALKHALIL",
        "barcode": "89640001990",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-al-hisn-al-haseen-urdu",
    "title_ur": "الحصن الحصین من کلام سید المرسلین مع اردو ترجمہ و شرح",
    "title_en": "Al-Hisn al-Haseen with Urdu Translation - Imam Ibn al-Jazari",
    "subtitle_ur": "ہر دکھ درد، مصیبت اور دشمن کے شر سے حفاظت کے لیے مسنون دعاؤں کا قلعہ",
    "category_id": "c-11",
    "description_ur": "شیخ القراء امام شمس الدین محمد بن الجزریؒ کی وہ الہامی کتاب جو فتنۂ تاتار اور مصائب کے دوران لکھی گئی اور امت کے لیے ڈھال ثابت ہوئی۔ صبح و شام، سفر و حضر اور ہر حاجت کے وقت کی صحیح و ثابت شدہ مسنون دعاؤں کا ذخیرہ۔",
    "language": "عربی مع اردو ترجمہ",
    "binding_type": "مجالد ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 380,
    "publication_year": 2024,
    "isbn": "978-969-564-511-2",
    "sku": "AK-TZ-004",
    "tags": [
      "الحصن الحصین",
      "ابن الجزری",
      "حفاظت کی دعائیں",
      "مسنون دعائیں"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2600,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-al-hisn-al-haseen-urdu-front",
        "book_id": "book-al-hisn-al-haseen-urdu",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-al-hisn-al-haseen-urdu-gallery",
        "book_id": "book-al-hisn-al-haseen-urdu",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-al-hisn-al-haseen-urdu-1",
        "book_id": "book-al-hisn-al-haseen-urdu",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک ریگزین",
        "printing_type": "دو رنگہ سفید کاغذ",
        "purchase_cost": 450,
        "regular_price": 750,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 675,
        "weight_grams": 480,
        "stock_quantity": 45,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TZ-004-ALKHALIL",
        "barcode": "89640002000",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-qasas-un-nabiyeen-nadwi",
    "title_ur": "قصص النبیین للاطفال (۱ تا ۵ اجزاء مکمل) - مولانا سید ابو الحسن علی ندویؒ",
    "title_en": "Qasas un-Nabiyyeen lil-Atfal (Parts 1-5 Complete) - Nadwi",
    "subtitle_ur": "بچوں کے لیے عربی اور اردو میں انبیاء کرام کے دلکش، پرتاثیر اور سچے واقعات",
    "category_id": "c-10",
    "description_ur": "مولانا سید ابو الحسن علی ندویؒ نے یہ کتاب اپنے بھتیجے کے لیے لکھی تھی جو آج پوری دنیا کے مدارس اور اسلامی سکولوں کے بچوں کا پسندیدہ نصاب بن چکی ہے۔ حضرت ابراہیمؑ سے لے کر سرور کونین ﷺ تک تمام انبیاء کی جدوجہد کی دلنشین داستان۔",
    "language": "عربی و اردو",
    "binding_type": "مجالد ہارڈ بیک نفیس (5 اجزاء مکمل)",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 420,
    "publication_year": 2024,
    "isbn": "978-969-564-512-9",
    "sku": "AK-KD-001",
    "tags": [
      "قصص النبیین",
      "ابو الحسن علی ندوی",
      "بچوں کی کہانیاں",
      "انبیاء کے واقعات"
    ],
    "is_featured": true,
    "is_published": true,
    "views_count": 3900,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [
      {
        "author": {
          "id": "auth-nadwi",
          "name_ur": "مولانا سید ابو الحسن علی حسنی ندویؒ",
          "name_en": "Maulana Abul Hasan Ali Nadwi",
          "bio_ur": "عظیم مفکر اسلام، داعی و مصنف قصص النبیین و ماذا خسر العالم بانحطاط المسلمین",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-qasas-un-nabiyeen-nadwi-front",
        "book_id": "book-qasas-un-nabiyeen-nadwi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-qasas-un-nabiyeen-nadwi-gallery",
        "book_id": "book-qasas-un-nabiyeen-nadwi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-qasas-un-nabiyeen-nadwi-1",
        "book_id": "book-qasas-un-nabiyeen-nadwi",
        "publisher_id": "pub-bushra",
        "publisher": {
          "id": "pub-bushra",
          "name_ur": "مکتبۃ البشریٰ",
          "name_en": "Maktabatul Bushra",
          "description": "عربی درسی کتب و متون کی عالمی سطح پر دیدہ زیب طباعت",
          "contact_info": "کراچی، پاکستان",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "مکتبۃ البشریٰ کمپیوٹرائزڈ ایڈیشن مع اعراب مکمل",
        "volumes": 1,
        "binding_type": "ہارڈ بیک فاخر",
        "printing_type": "دو رنگہ اعلیٰ قرطاس",
        "purchase_cost": 650,
        "regular_price": 1100,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 990,
        "weight_grams": 680,
        "stock_quantity": 50,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-KD-001-BUSHRA",
        "barcode": "89640002010",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-pyare-nabi-ki-pyari-batein-kids",
    "title_ur": "پیارے نبی کی پیاری کہانیاں اور اخلاق - الخلیل کڈز سیریز",
    "title_en": "Stories of the Beloved Prophet for Kids (Full Color Illustrated)",
    "subtitle_ur": "بچوں کی تربیت کے لیے رنگین تصاویر، دلکش لے آؤٹ اور سبق آموز سچی کہانیاں",
    "category_id": "c-10",
    "description_ur": "الخلیل پبلشرز کی خصوصی کڈز سیریز۔ ننھے بچوں کو سیرت رسول ﷺ سے روشناس کرانے کے لیے چار رنگہ شاندار تصویری خاکوں اور سلیس زبان میں کہانیاں۔ سچائی، امانت، بڑوں کا ادب اور جانوروں پر شفقت کے واقعات۔",
    "language": "اردو (Urdu)",
    "binding_type": "ہارڈ بیک کشن کور (لارج سائز)",
    "printing_type": "چار رنگہ آرٹ پیپر (Full Color Art Paper)",
    "total_volumes": 1,
    "pages_count": 160,
    "publication_year": 2024,
    "isbn": "978-969-564-513-6",
    "sku": "AK-KD-002",
    "tags": [
      "بچوں کی اسلامی کتب",
      "الخلیل کڈز",
      "سیرت کہانیاں",
      "رنگین کتاب"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 3100,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-pyare-nabi-ki-pyari-batein-kids-front",
        "book_id": "book-pyare-nabi-ki-pyari-batein-kids",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-pyare-nabi-ki-pyari-batein-kids-gallery",
        "book_id": "book-pyare-nabi-ki-pyari-batein-kids",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-pyare-nabi-ki-pyari-batein-kids-1",
        "book_id": "book-pyare-nabi-ki-pyari-batein-kids",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز فل کلر آرٹ ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ کور کشن لیمینیشن",
        "printing_type": "چار رنگہ گلاسی آرٹ پیپر",
        "purchase_cost": 550,
        "regular_price": 950,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 855,
        "weight_grams": 580,
        "stock_quantity": 60,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-KD-002-ALKHALIL",
        "barcode": "89640002020",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-islami-tarbiyat-e-atfal",
    "title_ur": "اسلامی عقائد، دعائیں اور روزمرہ آداب برائے اطفال",
    "title_en": "Islamic Beliefs, Duas & Manners for Children (Illustrated)",
    "subtitle_ur": "کھانے پینے، سونے جاگنے کی مسنون دعائیں اور بنیادی کلمے مع رنگین تصاویر",
    "category_id": "c-10",
    "description_ur": "چھوٹے بچوں کے لیے روزمرہ کی مسنون دعائیں، چھ کلمے، نماز کے ارکان اور اسلامی اخلاقیات سکھانے والی تصویری رنگین کتاب۔ بچوں کی دینی بنیاد مضبوط کرنے کے لیے ہر والدین کا پہلا انتخاب۔",
    "language": "اردو و عربی",
    "binding_type": "ہارڈ پیپر لیمینیشن",
    "printing_type": "چار رنگہ نفیس طباعت",
    "total_volumes": 1,
    "pages_count": 120,
    "publication_year": 2024,
    "isbn": "978-969-564-514-3",
    "sku": "AK-KD-003",
    "tags": [
      "اسلامی تربیت",
      "بچوں کی دعائیں",
      "چھ کلمے",
      "رنگین تصویریں"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 2750,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [],
    "images": [
      {
        "id": "img-book-islami-tarbiyat-e-atfal-front",
        "book_id": "book-islami-tarbiyat-e-atfal",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-islami-tarbiyat-e-atfal-gallery",
        "book_id": "book-islami-tarbiyat-e-atfal",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-islami-tarbiyat-e-atfal-1",
        "book_id": "book-islami-tarbiyat-e-atfal",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز کڈز ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ پیپر کور",
        "printing_type": "چار رنگہ اعلیٰ معیار",
        "purchase_cost": 350,
        "regular_price": 600,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 540,
        "weight_grams": 350,
        "stock_quantity": 75,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-KD-003-ALKHALIL",
        "barcode": "89640002030",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  },
  {
    "id": "book-arwah-e-salasa-thanvi",
    "title_ur": "ارواح ثلاثہ (حکایات اولیاء) - مولانا امیر شاہ خان مع حواشی مولانا اشرف علی تھانویؒ",
    "title_en": "Arwah-e-Salasa (Hikayat-e-Auliya) with Notes by Thanvi",
    "subtitle_ur": "علمائے دیوبند، مشائخ ہند اور اکابرین کے دلچسپ، سبق آموز اور نایاب احوال",
    "category_id": "c-11",
    "description_ur": "مولانا محمد امیر شاہ خانؒ کی جمع کردہ اور حکیم الامت مولانا اشرف علی تھانویؒ کی تصحیح شدہ وہ کتاب جس میں حضرت شاہ عبد العزیز، مولانا محمد قاسم نانوتوی اور مولانا رشید احمد گنگوہیؒ جیسے مشائخ کے تاریخی واقعات اور حکایات درج ہیں۔ علم و عمل کا خزانہ۔",
    "language": "اردو (Urdu)",
    "binding_type": "مجالد ہارڈ بیک",
    "printing_type": "دو رنگہ طباعت",
    "total_volumes": 1,
    "pages_count": 480,
    "publication_year": 2024,
    "isbn": "978-969-564-515-0",
    "sku": "AK-TZ-005",
    "tags": [
      "ارواح ثلاثہ",
      "حکایات اولیاء",
      "اکابرین دیوبند",
      "اشرف علی تھانوی"
    ],
    "is_featured": false,
    "is_published": true,
    "views_count": 1950,
    "created_at": "2026-10-25T08:13:52.885Z",
    "updated_at": "2026-10-25T08:13:52.885Z",
    "authors": [
      {
        "author": {
          "id": "auth-thanvi",
          "name_ur": "حکیم الامت مولانا اشرف علی تھانویؒ",
          "name_en": "Maulana Ashraf Ali Thanvi",
          "bio_ur": "مجدد الملت، مصنف تفسیر بیان القرآن، بہشتی زیور اور مناجات مقبول",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "role": "author"
      }
    ],
    "images": [
      {
        "id": "img-book-arwah-e-salasa-thanvi-front",
        "book_id": "book-arwah-e-salasa-thanvi",
        "image_type": "front_cover",
        "image_url": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
        "sort_order": 1,
        "created_at": "2026-10-25T08:13:52.885Z"
      },
      {
        "id": "img-book-arwah-e-salasa-thanvi-gallery",
        "book_id": "book-arwah-e-salasa-thanvi",
        "image_type": "gallery",
        "image_url": "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
        "sort_order": 2,
        "created_at": "2026-10-25T08:13:52.885Z"
      }
    ],
    "editions": [
      {
        "id": "ed-book-arwah-e-salasa-thanvi-1",
        "book_id": "book-arwah-e-salasa-thanvi",
        "publisher_id": "pub-alkhalil",
        "publisher": {
          "id": "pub-alkhalil",
          "name_ur": "الخلیل پبلشرز",
          "name_en": "Al Khalil Publishers",
          "description": "معیاری اشاعت، نفیس طباعت اور اسلامی علمی ذخائر کا امین ادارہ",
          "contact_info": "اردو بازار، لاہور | info@alkhalilpublishers.com",
          "is_active": true,
          "created_at": "2026-01-01T00:00:00.000Z"
        },
        "edition_name": "الخلیل پبلشرز نفیس ایڈیشن",
        "volumes": 1,
        "binding_type": "ہارڈ بیک ریگزین",
        "printing_type": "دو رنگہ سفید کاغذ",
        "purchase_cost": 650,
        "regular_price": 1050,
        "discount_type": "percentage",
        "discount_value": 10,
        "final_price": 945,
        "weight_grams": 700,
        "stock_quantity": 30,
        "reserved_quantity": 0,
        "low_stock_threshold": 10,
        "sku": "AK-TZ-005-ALKHALIL",
        "barcode": "89640002040",
        "is_active": true,
        "cover_image_url": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
        "created_at": "2026-10-25T08:13:52.885Z",
        "updated_at": "2026-10-25T08:13:52.885Z"
      }
    ]
  }
];

export const INITIAL_SHIPPING_RATES: ShippingRate[] = [
  {
    id: 'sr-lahore-local',
    zone_id: 'z-punjab',
    city: 'Lahore',
    shipping_method: 'لاہور لوکل ڈیلیوری',
    base_charge: 150,
    included_weight_grams: 1000,
    extra_charge_per_kg: 50,
    weight_increment_grams: 1000,
    free_shipping_threshold: 4000,
    is_active: true,
  },
  {
    id: 'sr-punjab-default',
    zone_id: 'z-punjab',
    city: null,
    shipping_method: 'معیاری کوریئر سروس (پنجاب)',
    base_charge: 220,
    included_weight_grams: 1000,
    extra_charge_per_kg: 70,
    weight_increment_grams: 1000,
    free_shipping_threshold: 5000,
    is_active: true,
  },
  {
    id: 'sr-karachi',
    zone_id: 'z-sindh',
    city: 'Karachi',
    shipping_method: 'کراچی ایکسپریس کوریئر',
    base_charge: 250,
    included_weight_grams: 1000,
    extra_charge_per_kg: 80,
    weight_increment_grams: 1000,
    free_shipping_threshold: 6000,
    is_active: true,
  },
  {
    id: 'sr-sindh-default',
    zone_id: 'z-sindh',
    city: null,
    shipping_method: 'معیاری کوریئر سروس (سندھ)',
    base_charge: 260,
    included_weight_grams: 1000,
    extra_charge_per_kg: 80,
    weight_increment_grams: 1000,
    free_shipping_threshold: 6000,
    is_active: true,
  },
  {
    id: 'sr-kpk-default',
    zone_id: 'z-kpk',
    city: null,
    shipping_method: 'معیاری کوریئر سروس (خیبر پختونخوا)',
    base_charge: 260,
    included_weight_grams: 1000,
    extra_charge_per_kg: 80,
    weight_increment_grams: 1000,
    free_shipping_threshold: 6000,
    is_active: true,
  },
  {
    id: 'sr-balochistan-default',
    zone_id: 'z-balochistan',
    city: null,
    shipping_method: 'معیاری کوریئر سروس (بلوچستان)',
    base_charge: 300,
    included_weight_grams: 1000,
    extra_charge_per_kg: 120,
    weight_increment_grams: 1000,
    free_shipping_threshold: 7000,
    is_active: true,
  },
  {
    id: 'sr-islamabad',
    zone_id: 'z-ict',
    city: 'Islamabad',
    shipping_method: 'اسلام آباد کوریئر سروس',
    base_charge: 200,
    included_weight_grams: 1000,
    extra_charge_per_kg: 80,
    weight_increment_grams: 1000,
    free_shipping_threshold: 5000,
    is_active: true,
  },
];

export const INITIAL_PROMO_CODES: PromoCode[] = [
  {
    id: 'promo-bismillah',
    code: 'BISMILLAH',
    description: 'نئی شروعات پر خصوصی تعارفی 10 فیصد رعایت',
    discount_type: 'percentage',
    discount_value: 10,
    min_order_amount: 1500,
    max_discount_amount: 500,
    start_date: new Date(Date.now() - 86400000 * 5).toISOString(),
    expiry_date: new Date(Date.now() + 86400000 * 90).toISOString(),
    usage_limit: 500,
    times_used: 18,
    is_active: true,
  },
  {
    id: 'promo-talib-e-ilm',
    code: 'TALIB',
    description: 'طلبہ دینی مدارس کے لیے 200 روپے کی فکسڈ رعایت',
    discount_type: 'fixed',
    discount_value: 200,
    min_order_amount: 2000,
    start_date: new Date(Date.now() - 86400000).toISOString(),
    expiry_date: new Date(Date.now() + 86400000 * 60).toISOString(),
    usage_limit: 100,
    times_used: 5,
    is_active: true,
  },
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord-1001',
    order_number: 'AK-2026-1001',
    user_id: 'cust-demo-1',
    status: 'delivered',
    payment_status: 'paid',
    payment_method: 'bank_transfer',
    subtotal: 16500,
    book_discounts: 1650,
    promo_discount: 500,
    promo_code_id: 'promo-bismillah',
    total_weight_grams: 9500,
    shipping_charge: 220,
    grand_total: 14570,
    customer_name: 'محمد عثمان غنی',
    customer_phone: '03001234567',
    customer_whatsapp: '03001234567',
    province: 'Punjab',
    city: 'لاہور',
    delivery_address: 'مکان نمبر 45، گلی نمبر 3، علامہ اقبال ٹاؤن، لاہور',
    courier_name: 'TCS Express',
    tracking_number: 'TCS-992817263',
    dispatch_date: new Date(Date.now() - 86400000 * 3).toISOString(),
    estimated_delivery: new Date(Date.now() - 86400000 * 1).toISOString(),
    customer_notes: 'براہ کرم ترسیل سے قبل فون فرما لیں۔',
    created_at: new Date(Date.now() - 86400000 * 4).toISOString(),
    updated_at: new Date().toISOString(),
    items: [
      {
        id: 'oi-1',
        order_id: 'ord-1001',
        edition_id: 'ed-book-maarif-ul-quran-1',
        book_id: 'book-maarif-ul-quran',
        book_title_ur: 'تفسیر معارف القرآن (۸ جلدیں مکمل سیٹ)',
        publisher_name_ur: 'الخلیل پبلشرز',
        edition_name: 'الخلیل نفیس ایڈیشن (8 جلدیں مع گولڈن باکس)',
        quantity: 1,
        unit_purchase_cost: 11000,
        unit_regular_price: 16500,
        unit_discount: 1650,
        unit_final_price: 14850,
        line_total: 14850,
        weight_grams: 9500,
      },
    ],
    status_history: [
      {
        id: 'sh-1',
        order_id: 'ord-1001',
        previous_status: null,
        new_status: 'awaiting_payment',
        changed_by: null,
        notes: 'آرڈر ویب سائٹ پر درج ہوا۔',
        created_at: new Date(Date.now() - 86400000 * 4).toISOString(),
      },
      {
        id: 'sh-2',
        order_id: 'ord-1001',
        previous_status: 'awaiting_payment',
        new_status: 'payment_verified',
        changed_by: 'admin-1',
        notes: 'میزان بینک ٹرانسفر تصدیق شدہ۔',
        created_at: new Date(Date.now() - 86400000 * 3.5).toISOString(),
      },
      {
        id: 'sh-3',
        order_id: 'ord-1001',
        previous_status: 'payment_verified',
        new_status: 'packing',
        changed_by: 'admin-1',
        notes: 'کتب پیک کر کے کوریئر کے حوالے کی جا رہی ہیں۔',
        created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
      },
      {
        id: 'sh-4',
        order_id: 'ord-1001',
        previous_status: 'packing',
        new_status: 'shipped',
        changed_by: 'admin-1',
        notes: 'ٹی سی ایس ٹریکنگ نمبر TCS-992817263',
        created_at: new Date(Date.now() - 86400000 * 2.5).toISOString(),
      },
      {
        id: 'sh-5',
        order_id: 'ord-1001',
        previous_status: 'shipped',
        new_status: 'delivered',
        changed_by: 'admin-1',
        notes: 'گاہک کو پارسل موصول ہو گیا۔ شکریہ۔',
        created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
      },
    ],
  },
  {
    id: 'ord-1002',
    order_number: 'AK-2026-1002',
    user_id: 'cust-demo-2',
    status: 'awaiting_payment',
    payment_status: 'unpaid',
    payment_method: 'easypaisa',
    subtotal: 4200,
    book_discounts: 504,
    promo_discount: 0,
    total_weight_grams: 3400,
    shipping_charge: 260,
    grand_total: 3956,
    customer_name: 'حافظ عبد الرحمن',
    customer_phone: '03129876543',
    customer_whatsapp: '03129876543',
    province: 'Sindh',
    city: 'کراچی',
    delivery_address: 'جامعہ دار العلوم کراچی، کورنگی، کراچی',
    created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
    updated_at: new Date().toISOString(),
    items: [
      {
        id: 'oi-2',
        order_id: 'ord-1002',
        edition_id: 'ed-book-aasan-tarjuma-quran-1',
        book_id: 'book-aasan-tarjuma-quran',
        book_title_ur: 'آسان ترجمہ قرآن مع مختصر حواشی (۳ جلدیں)',
        publisher_name_ur: 'مکتبۃ معارف القرآن (دار العلوم کراچی)',
        edition_name: 'مکتبۃ معارف القرآن (3 جلدیں فینسی باکس)',
        quantity: 1,
        unit_purchase_cost: 2600,
        unit_regular_price: 4200,
        unit_discount: 504,
        unit_final_price: 3696,
        line_total: 3696,
        weight_grams: 3400,
      },
    ],
  },
];

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  general: {
    store_name_ur: 'الخلیل پبلشرز',
    store_name_en: 'Al Khalil Publishers',
    tagline_ur: 'اسلامی کتب، تفاسیر، احادیث اور درسی کتب کا معتبر اشاعتی مرکز',
    whatsapp_number: '923001234567',
    phone_number: '+92 42 37123456',
    email: 'info@alkhalilpublishers.com',
    address: 'اردو بازار، لاہور، پاکستان',
    default_currency: 'PKR',
    default_low_stock_threshold: 10,
  },
  payment_instructions: {
    bank_name: 'میزان بینک لمیٹڈ (Meezan Bank)',
    account_title: 'Al Khalil Publishers',
    account_number: '01010101010101',
    iban: 'PK36MEZN0001010101010101',
    easypaisa_title: 'Al Khalil Publishers',
    easypaisa_number: '03001234567',
    jazzcash_title: 'Al Khalil Publishers',
    jazzcash_number: '03001234567',
    instructions_ur: 'آرڈر مکمل کرنے کے بعد اپنی رقم مذکورہ بینک اکاؤنٹ، ایزی پیسہ یا جاز کیش میں جمع کروائیں اور اسکرین شاٹ/رسید پورٹل پر یا واٹس ایپ پر ارسال فرمائیں۔',
  },
};
