import {
  Book,
  Category,
  Publisher,
  Author,
  ShippingRate,
  PromoCode,
  Order,
  OrderStatus,
  PaymentStatus,
  SiteSettings,
  MovementType,
  InventoryMovement,
  BookEdition,
} from '@/types';
import {
  INITIAL_BOOKS,
  INITIAL_CATEGORIES,
  INITIAL_PUBLISHERS,
  INITIAL_AUTHORS,
  INITIAL_SHIPPING_RATES,
  INITIAL_PROMO_CODES,
  INITIAL_ORDERS,
  INITIAL_SITE_SETTINGS,
} from './mockData';
import { calculateEditionFinalPrice } from '../calculations';

class BookstoreStore {
  private books: Book[] = INITIAL_BOOKS;
  private categories: Category[] = INITIAL_CATEGORIES;
  private publishers: Publisher[] = INITIAL_PUBLISHERS;
  private authors: Author[] = INITIAL_AUTHORS;
  private shippingRates: ShippingRate[] = INITIAL_SHIPPING_RATES;
  private promoCodes: PromoCode[] = INITIAL_PROMO_CODES;
  private orders: Order[] = INITIAL_ORDERS;
  private settings: SiteSettings = INITIAL_SITE_SETTINGS;
  private inventoryMovements: InventoryMovement[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private isClient(): boolean {
    return typeof window !== 'undefined';
  }

  private loadFromStorage() {
    if (!this.isClient()) return;
    try {
      const savedBooks = localStorage.getItem('ak_books');
      if (savedBooks) this.books = JSON.parse(savedBooks);

      const savedCats = localStorage.getItem('ak_categories');
      if (savedCats) this.categories = JSON.parse(savedCats);

      const savedPubs = localStorage.getItem('ak_publishers');
      if (savedPubs) this.publishers = JSON.parse(savedPubs);

      const savedAuthors = localStorage.getItem('ak_authors');
      if (savedAuthors) this.authors = JSON.parse(savedAuthors);

      const savedOrders = localStorage.getItem('ak_orders');
      if (savedOrders) this.orders = JSON.parse(savedOrders);

      const savedSettings = localStorage.getItem('ak_settings');
      if (savedSettings) this.settings = JSON.parse(savedSettings);

      const savedShipping = localStorage.getItem('ak_shipping');
      if (savedShipping) this.shippingRates = JSON.parse(savedShipping);

      const savedPromos = localStorage.getItem('ak_promos');
      if (savedPromos) this.promoCodes = JSON.parse(savedPromos);

      const savedMovements = localStorage.getItem('ak_movements');
      if (savedMovements) this.inventoryMovements = JSON.parse(savedMovements);
    } catch (e) {
      console.warn('Failed to load local storage state:', e);
    }
  }

  private saveToStorage() {
    if (!this.isClient()) return;
    try {
      localStorage.setItem('ak_books', JSON.stringify(this.books));
      localStorage.setItem('ak_categories', JSON.stringify(this.categories));
      localStorage.setItem('ak_publishers', JSON.stringify(this.publishers));
      localStorage.setItem('ak_authors', JSON.stringify(this.authors));
      localStorage.setItem('ak_orders', JSON.stringify(this.orders));
      localStorage.setItem('ak_settings', JSON.stringify(this.settings));
      localStorage.setItem('ak_shipping', JSON.stringify(this.shippingRates));
      localStorage.setItem('ak_promos', JSON.stringify(this.promoCodes));
      localStorage.setItem('ak_movements', JSON.stringify(this.inventoryMovements));
    } catch (e) {
      console.warn('Failed to persist local storage state:', e);
    }
  }

  // --- Catalog Queries ---
  public getBooks({
    categoryId,
    searchQuery,
    publisherId,
    authorId,
    sortBy = 'newest',
    inStockOnly = false,
  }: {
    categoryId?: string;
    searchQuery?: string;
    publisherId?: string;
    authorId?: string;
    sortBy?: 'newest' | 'price_asc' | 'price_desc' | 'popular';
    inStockOnly?: boolean;
  } = {}): Book[] {
    let result = [...this.books].filter((b) => b.is_published);

    if (categoryId) {
      result = result.filter(
        (b) => b.category_id === categoryId || b.subcategory_id === categoryId
      );
    }

    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (b) =>
          b.title_ur.toLowerCase().includes(q) ||
          (b.title_en && b.title_en.toLowerCase().includes(q)) ||
          b.tags.some((t) => t.toLowerCase().includes(q)) ||
          b.authors?.some((a) => a.author.name_ur.toLowerCase().includes(q)) ||
          b.editions?.some((e) => e.publisher?.name_ur.toLowerCase().includes(q))
      );
    }

    if (publisherId) {
      result = result.filter((b) =>
        b.editions?.some((e) => e.publisher_id === publisherId)
      );
    }

    if (authorId) {
      result = result.filter((b) =>
        b.authors?.some((a) => a.author.id === authorId)
      );
    }

    if (inStockOnly) {
      result = result.filter((b) =>
        b.editions?.some((e) => e.stock_quantity > 0)
      );
    }

    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    } else if (sortBy === 'popular') {
      result.sort((a, b) => (b.views_count || 0) - (a.views_count || 0));
    } else if (sortBy === 'price_asc') {
      result.sort((a, b) => {
        const minA = Math.min(...(a.editions?.map((e) => e.final_price) || [0]));
        const minB = Math.min(...(b.editions?.map((e) => e.final_price) || [0]));
        return minA - minB;
      });
    } else if (sortBy === 'price_desc') {
      result.sort((a, b) => {
        const maxA = Math.max(...(a.editions?.map((e) => e.final_price) || [0]));
        const maxB = Math.max(...(b.editions?.map((e) => e.final_price) || [0]));
        return maxB - maxA;
      });
    }

    return result;
  }

  public getBookById(id: string): Book | undefined {
    return this.books.find((b) => b.id === id);
  }

  public getFeaturedBooks(): Book[] {
    return this.books.filter((b) => b.is_featured && b.is_published);
  }

  public getCategories(): Category[] {
    return [...this.categories].sort((a, b) => a.sort_order - b.sort_order);
  }

  public getCategoryBySlug(slug: string): Category | undefined {
    return this.categories.find((c) => c.slug === slug);
  }

  public getPublishers(): Publisher[] {
    return [...this.publishers];
  }

  public getAuthors(): Author[] {
    return [...this.authors];
  }

  public getShippingRates(): ShippingRate[] {
    return [...this.shippingRates];
  }

  public getPromoCodes(): PromoCode[] {
    return [...this.promoCodes];
  }

  public getPromoByCode(code: string): PromoCode | undefined {
    return this.promoCodes.find(
      (p) => p.code.trim().toUpperCase() === code.trim().toUpperCase()
    );
  }

  public getOrders(): Order[] {
    return [...this.orders].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  public getOrderById(id: string): Order | undefined {
    return this.orders.find((o) => o.id === id || o.order_number === id);
  }

  public getSiteSettings(): SiteSettings {
    return this.settings;
  }

  public getInventoryMovements(editionId?: string): InventoryMovement[] {
    if (editionId) {
      return this.inventoryMovements.filter((m) => m.edition_id === editionId);
    }
    return [...this.inventoryMovements].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  // --- Admin Mutations ---

  public updateSiteSettings(newSettings: Partial<SiteSettings>) {
    this.settings = {
      ...this.settings,
      ...newSettings,
      general: { ...this.settings.general, ...(newSettings.general || {}) },
      payment_instructions: {
        ...this.settings.payment_instructions,
        ...(newSettings.payment_instructions || {}),
      },
    };
    this.saveToStorage();
    return this.settings;
  }

  public addCategory(cat: Omit<Category, 'id' | 'created_at'>): Category {
    const newCat: Category = {
      ...cat,
      id: `c-${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    this.categories.push(newCat);
    this.saveToStorage();
    return newCat;
  }

  public updateCategory(id: string, updates: Partial<Category>): Category | null {
    const idx = this.categories.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    this.categories[idx] = { ...this.categories[idx], ...updates };
    this.saveToStorage();
    return this.categories[idx];
  }

  public deleteCategory(id: string): boolean {
    const initialLen = this.categories.length;
    this.categories = this.categories.filter((c) => c.id !== id);
    this.saveToStorage();
    return this.categories.length < initialLen;
  }

  public addPublisher(pub: Omit<Publisher, 'id' | 'created_at'>): Publisher {
    const newPub: Publisher = {
      ...pub,
      id: `pub-${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    this.publishers.push(newPub);
    this.saveToStorage();
    return newPub;
  }

  public addAuthor(auth: Omit<Author, 'id' | 'created_at'>): Author {
    const newAuth: Author = {
      ...auth,
      id: `auth-${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    this.authors.push(newAuth);
    this.saveToStorage();
    return newAuth;
  }

  public saveBook(book: Partial<Book> & { title_ur: string }): Book {
    const isNew = !book.id;
    const bookId = book.id || `book-${Date.now()}`;

    // Ensure editions have computed final_price
    const formattedEditions = (book.editions || []).map((ed) => {
      const { finalPrice } = calculateEditionFinalPrice(
        ed.regular_price,
        ed.discount_type || 'percentage',
        ed.discount_value || 0
      );
      const pub = this.publishers.find((p) => p.id === ed.publisher_id);
      return {
        ...ed,
        id: ed.id || `ed-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        book_id: bookId,
        final_price: finalPrice,
        publisher: pub,
        reserved_quantity: ed.reserved_quantity || 0,
        low_stock_threshold: ed.low_stock_threshold || 10,
        created_at: ed.created_at || new Date().toISOString(),
        updated_at: new Date().toISOString(),
      } as BookEdition;
    });

    const category = this.categories.find((c) => c.id === book.category_id);

    const fullBook: Book = {
      id: bookId,
      title_ur: book.title_ur,
      title_en: book.title_en || '',
      subtitle_ur: book.subtitle_ur || '',
      category_id: book.category_id || null,
      category: category,
      subcategory_id: book.subcategory_id || null,
      description_ur: book.description_ur || '',
      language: book.language || 'اردو (Urdu)',
      binding_type: book.binding_type || 'مجالد (Hardback)',
      printing_type: book.printing_type || 'دو رنگہ (Two Color)',
      total_volumes: book.total_volumes || 1,
      pages_count: book.pages_count,
      publication_year: book.publication_year,
      isbn: book.isbn,
      sku: book.sku,
      tags: book.tags || [],
      is_featured: book.is_featured ?? false,
      is_published: book.is_published ?? true,
      views_count: book.views_count || 0,
      created_at: book.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
      authors: book.authors || [],
      images: book.images || [],
      editions: formattedEditions,
    };

    if (isNew) {
      this.books.unshift(fullBook);
    } else {
      const idx = this.books.findIndex((b) => b.id === bookId);
      if (idx !== -1) {
        this.books[idx] = fullBook;
      } else {
        this.books.unshift(fullBook);
      }
    }

    this.saveToStorage();
    return fullBook;
  }

  public deleteBook(id: string): boolean {
    const len = this.books.length;
    this.books = this.books.filter((b) => b.id !== id);
    this.saveToStorage();
    return this.books.length < len;
  }

  public adjustStock({
    editionId,
    quantityDelta,
    movementType,
    reason,
    userId,
  }: {
    editionId: string;
    quantityDelta: number;
    movementType: MovementType;
    reason: string;
    userId?: string;
  }): { success: boolean; newStock: number; error?: string } {
    let targetEdition: BookEdition | undefined;
    for (const b of this.books) {
      if (b.editions) {
        const found = b.editions.find((e) => e.id === editionId);
        if (found) {
          targetEdition = found;
          break;
        }
      }
    }

    if (!targetEdition) {
      return { success: false, newStock: 0, error: 'ایڈیشن نہیں ملا۔' };
    }

    const prevStock = targetEdition.stock_quantity;
    const newStock = prevStock + quantityDelta;

    if (newStock < 0) {
      return {
        success: false,
        newStock: prevStock,
        error: `اسٹاک منفی نہیں ہو سکتا۔ موجودہ: ${prevStock}، مطلوبہ کمی: ${Math.abs(quantityDelta)}`,
      };
    }

    targetEdition.stock_quantity = newStock;
    targetEdition.updated_at = new Date().toISOString();

    const movement: InventoryMovement = {
      id: `mov-${Date.now()}`,
      edition_id: editionId,
      edition: targetEdition,
      movement_type: movementType,
      quantity_delta: quantityDelta,
      previous_stock: prevStock,
      new_stock: newStock,
      reason,
      created_by: userId,
      created_at: new Date().toISOString(),
    };

    this.inventoryMovements.unshift(movement);
    this.saveToStorage();

    return { success: true, newStock };
  }

  public placeOrder(
    orderData: Omit<
      Order,
      'id' | 'order_number' | 'created_at' | 'updated_at' | 'status' | 'payment_status'
    >
  ): Order {
    const orderNumber = `AK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const orderId = `ord-${Date.now()}`;

    // Concurrency / Stock reservation:
    // Deduct available stock and reserve it safely
    for (const item of orderData.items || []) {
      if (item.edition_id) {
        this.adjustStock({
          editionId: item.edition_id,
          quantityDelta: -item.quantity,
          movementType: 'sale',
          reason: `آرڈر درج ہوا: ${orderNumber}`,
          userId: orderData.user_id || undefined,
        });

        // Add to reserved stock
        for (const b of this.books) {
          const ed = b.editions?.find((e) => e.id === item.edition_id);
          if (ed) {
            ed.reserved_quantity = (ed.reserved_quantity || 0) + item.quantity;
          }
        }
      }
    }

    // Increment promo usage if used
    if (orderData.promo_code_id) {
      const p = this.promoCodes.find((x) => x.id === orderData.promo_code_id);
      if (p) p.times_used += 1;
    }

    const newOrder: Order = {
      ...orderData,
      id: orderId,
      order_number: orderNumber,
      status: 'awaiting_payment',
      payment_status: 'unpaid',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      status_history: [
        {
          id: `sh-${Date.now()}`,
          order_id: orderId,
          previous_status: null,
          new_status: 'awaiting_payment',
          notes: 'آرڈر کامیابی کے ساتھ محفوظ کیا گیا۔',
          created_at: new Date().toISOString(),
        },
      ],
    };

    this.orders.unshift(newOrder);
    this.saveToStorage();
    return newOrder;
  }

  public updateOrderStatus({
    orderId,
    newStatus,
    changedBy,
    notes,
    courierName,
    trackingNumber,
  }: {
    orderId: string;
    newStatus: OrderStatus;
    changedBy?: string;
    notes?: string;
    courierName?: string;
    trackingNumber?: string;
  }): Order | null {
    const order = this.orders.find((o) => o.id === orderId);
    if (!order) return null;

    const prevStatus = order.status;

    // Cancellation: restore stock and clear reservation
    if (newStatus === 'cancelled' && prevStatus !== 'cancelled') {
      for (const item of order.items || []) {
        if (item.edition_id) {
          this.adjustStock({
            editionId: item.edition_id,
            quantityDelta: item.quantity,
            movementType: 'cancellation_release',
            reason: `آرڈر منسوخ ہونے پر اسٹاک بحال ہوا: ${order.order_number}`,
            userId: changedBy,
          });

          for (const b of this.books) {
            const ed = b.editions?.find((e) => e.id === item.edition_id);
            if (ed) {
              ed.reserved_quantity = Math.max(0, (ed.reserved_quantity || 0) - item.quantity);
            }
          }
        }
      }
    }

    // Delivery: clear reservation
    if (newStatus === 'delivered' && prevStatus !== 'delivered') {
      for (const item of order.items || []) {
        if (item.edition_id) {
          for (const b of this.books) {
            const ed = b.editions?.find((e) => e.id === item.edition_id);
            if (ed) {
              ed.reserved_quantity = Math.max(0, (ed.reserved_quantity || 0) - item.quantity);
            }
          }
        }
      }
    }

    order.status = newStatus;
    if (courierName) order.courier_name = courierName;
    if (trackingNumber) order.tracking_number = trackingNumber;
    order.updated_at = new Date().toISOString();

    if (!order.status_history) order.status_history = [];
    order.status_history.push({
      id: `sh-${Date.now()}`,
      order_id: order.id,
      previous_status: prevStatus,
      new_status: newStatus,
      changed_by: changedBy,
      notes: notes || `حیثیت تبدیل کی گئی: ${newStatus}`,
      created_at: new Date().toISOString(),
    });

    this.saveToStorage();
    return order;
  }

  public updatePaymentStatus(orderId: string, paymentStatus: PaymentStatus, verifiedBy?: string): Order | null {
    const order = this.orders.find((o) => o.id === orderId);
    if (!order) return null;

    order.payment_status = paymentStatus;
    if (paymentStatus === 'paid') {
      order.status = 'payment_verified';
      order.status_history?.push({
        id: `sh-${Date.now()}`,
        order_id: order.id,
        previous_status: order.status,
        new_status: 'payment_verified',
        changed_by: verifiedBy,
        notes: 'ادائیگی کی جانچ مکمل۔ تصدیق شدہ۔',
        created_at: new Date().toISOString(),
      });
    }
    order.updated_at = new Date().toISOString();
    this.saveToStorage();
    return order;
  }

  public addPaymentProof(orderId: string, proof: { file_url: string; transaction_reference?: string; sender_name?: string }): Order | null {
    const order = this.orders.find((o) => o.id === orderId);
    if (!order) return null;

    if (!order.payment_proofs) order.payment_proofs = [];
    order.payment_proofs.push({
      id: `pp-${Date.now()}`,
      order_id: orderId,
      file_url: proof.file_url,
      transaction_reference: proof.transaction_reference,
      sender_name: proof.sender_name,
      uploaded_at: new Date().toISOString(),
    });

    order.payment_status = 'proof_submitted';
    order.status = 'payment_submitted';
    order.updated_at = new Date().toISOString();
    this.saveToStorage();
    return order;
  }
}

// Global Singleton
export const store = new BookstoreStore();
