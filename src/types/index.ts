export type AppRole = 'super_admin' | 'inventory_manager' | 'order_manager' | 'customer';

export interface Profile {
  id: string;
  full_name: string;
  phone: string | null;
  whatsapp: string | null;
  province: string | null;
  city: string | null;
  address: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserRole {
  id: string;
  user_id: string;
  role: AppRole;
  created_at: string;
}

export interface Address {
  id: string;
  user_id: string;
  title: string;
  recipient_name: string;
  phone: string;
  whatsapp?: string;
  province: string;
  city: string;
  street_address: string;
  postal_code?: string;
  is_default: boolean;
  created_at: string;
}

export interface Category {
  id: string;
  name_ur: string;
  name_en?: string;
  slug: string;
  description_ur?: string;
  parent_id?: string | null;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  children?: Category[];
}

export interface Author {
  id: string;
  name_ur: string;
  name_en?: string;
  bio_ur?: string;
  is_active: boolean;
  created_at: string;
}

export interface Publisher {
  id: string;
  name_ur: string;
  name_en?: string;
  description?: string;
  contact_info?: string;
  is_active: boolean;
  created_at: string;
}

export type DiscountType = 'percentage' | 'fixed';

export interface BookEdition {
  id: string;
  book_id: string;
  publisher_id: string;
  publisher?: Publisher;
  edition_name: string;
  volumes: number;
  binding_type: string;
  printing_type: string;
  purchase_cost: number; // in PKR
  regular_price: number; // in PKR
  discount_type: DiscountType;
  discount_value: number; // percentage (0-100) or PKR amount
  final_price: number; // in PKR
  weight_grams: number; // in grams
  stock_quantity: number;
  reserved_quantity: number;
  low_stock_threshold: number;
  sku?: string;
  barcode?: string;
  is_active: boolean;
  cover_image_url?: string;
  created_at: string;
  updated_at: string;
}

export type ImageType = 'front_cover' | 'back_cover' | 'gallery' | 'sample_page';

export interface BookImage {
  id: string;
  book_id: string;
  edition_id?: string | null;
  image_type: ImageType;
  image_url: string;
  sort_order: number;
  created_at: string;
}

export interface Book {
  id: string;
  title_ur: string;
  title_en?: string;
  subtitle_ur?: string;
  category_id?: string | null;
  category?: Category;
  subcategory_id?: string | null;
  description_ur?: string;
  language: string;
  binding_type: string;
  printing_type: string;
  total_volumes: number;
  pages_count?: number;
  publication_year?: number;
  isbn?: string;
  sku?: string;
  tags: string[];
  is_featured: boolean;
  is_published: boolean;
  views_count: number;
  created_at: string;
  updated_at: string;
  authors?: {
    author: Author;
    role: 'author' | 'translator' | 'editor' | 'compiler';
  }[];
  editions?: BookEdition[];
  images?: BookImage[];
}

export type MovementType =
  | 'restock'
  | 'sale'
  | 'reservation'
  | 'cancellation_release'
  | 'damage'
  | 'correction'
  | 'return';

export interface InventoryMovement {
  id: string;
  edition_id: string;
  edition?: BookEdition;
  movement_type: MovementType;
  quantity_delta: number;
  previous_stock: number;
  new_stock: number;
  reason: string;
  reference_order_id?: string | null;
  created_by?: string | null;
  created_at: string;
}

export interface CartItem {
  id: string;
  edition_id: string;
  edition: BookEdition;
  book: Book;
  quantity: number;
  line_total: number;
  weight_grams: number;
}

export interface ShippingZone {
  id: string;
  name: string;
  province: string;
  is_active: boolean;
}

export interface ShippingRate {
  id: string;
  zone_id?: string;
  city?: string | null;
  shipping_method: string;
  base_charge: number; // in PKR
  included_weight_grams: number; // e.g. 1000
  extra_charge_per_kg: number; // in PKR
  weight_increment_grams: number; // e.g. 1000
  min_charge?: number;
  max_charge?: number;
  free_shipping_threshold?: number;
  is_active: boolean;
}

export interface PromoCode {
  id: string;
  code: string;
  description?: string;
  discount_type: DiscountType;
  discount_value: number;
  min_order_amount?: number;
  max_discount_amount?: number;
  start_date: string;
  expiry_date?: string | null;
  usage_limit?: number | null;
  per_customer_limit?: number;
  times_used: number;
  is_active: boolean;
}

export type OrderStatus =
  | 'awaiting_payment'
  | 'payment_submitted'
  | 'payment_verified'
  | 'confirmed'
  | 'packing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'returned';

export type PaymentStatus =
  | 'unpaid'
  | 'proof_submitted'
  | 'under_verification'
  | 'paid'
  | 'refunded';

export type PaymentMethod =
  | 'bank_transfer'
  | 'easypaisa'
  | 'jazzcash'
  | 'cash_on_delivery';

export interface OrderItem {
  id: string;
  order_id: string;
  edition_id?: string;
  book_id?: string;
  book_title_ur: string;
  publisher_name_ur: string;
  edition_name: string;
  quantity: number;
  unit_purchase_cost: number;
  unit_regular_price: number;
  unit_discount: number;
  unit_final_price: number;
  line_total: number;
  weight_grams: number;
}

export interface OrderStatusHistory {
  id: string;
  order_id: string;
  previous_status?: OrderStatus | null;
  new_status: OrderStatus;
  changed_by?: string | null;
  notes?: string | null;
  created_at: string;
}

export interface Order {
  id: string;
  order_number: string;
  user_id?: string | null;
  status: OrderStatus;
  payment_status: PaymentStatus;
  payment_method: PaymentMethod;
  subtotal: number;
  book_discounts: number;
  promo_discount: number;
  promo_code_id?: string | null;
  total_weight_grams: number;
  shipping_charge: number;
  grand_total: number;
  customer_name: string;
  customer_phone: string;
  customer_whatsapp?: string;
  province: string;
  city: string;
  delivery_address: string;
  address_instructions?: string;
  courier_name?: string;
  tracking_number?: string;
  dispatch_date?: string | null;
  estimated_delivery?: string | null;
  internal_notes?: string;
  customer_notes?: string;
  created_at: string;
  updated_at: string;
  items?: OrderItem[];
  status_history?: OrderStatusHistory[];
  payment_proofs?: PaymentProof[];
}

export interface PaymentProof {
  id: string;
  order_id: string;
  file_url: string;
  transaction_reference?: string;
  sender_name?: string;
  sender_account?: string;
  notes?: string;
  uploaded_at: string;
}

export interface SiteSettings {
  general: {
    store_name_ur: string;
    store_name_en: string;
    tagline_ur: string;
    whatsapp_number: string;
    phone_number: string;
    email: string;
    address: string;
    default_currency: string;
    default_low_stock_threshold: number;
  };
  payment_instructions: {
    bank_name: string;
    account_title: string;
    account_number: string;
    iban: string;
    easypaisa_title: string;
    easypaisa_number: string;
    jazzcash_title: string;
    jazzcash_number: string;
    instructions_ur: string;
  };
}
