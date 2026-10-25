'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Book, BookEdition, PromoCode, ShippingRate } from '@/types';
import { store } from '@/lib/data/store';
import {
  calculateOrderShipping,
  validateAndApplyPromoCode,
  calculateOrderSummary,
} from '@/lib/calculations';

interface CartContextType {
  items: CartItem[];
  addToCart: (book: Book, edition: BookEdition, quantity?: number) => { success: boolean; message: string };
  updateQuantity: (editionId: string, quantity: number) => { success: boolean; message?: string };
  removeFromCart: (editionId: string) => void;
  clearCart: () => void;
  totalItemsCount: number;
  totalWeightGrams: number;
  regularSubtotal: number;
  finalSubtotal: number;
  bookDiscounts: number;
  promoCode: PromoCode | null;
  promoDiscount: number;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  province: string;
  city: string;
  setDestination: (province: string, city: string) => void;
  shippingCharge: number;
  shippingError?: string;
  shippingRateApplied: ShippingRate | null;
  grandTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState<PromoCode | null>(null);
  const [province, setProvince] = useState<string>('Punjab');
  const [city, setCity] = useState<string>('Lahore');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('ak_cart_items');
      if (savedCart) setItems(JSON.parse(savedCart));

      const savedPromo = localStorage.getItem('ak_cart_promo');
      if (savedPromo) setPromoCode(JSON.parse(savedPromo));

      const savedProv = localStorage.getItem('ak_cart_prov');
      if (savedProv) setProvince(savedProv);

      const savedCity = localStorage.getItem('ak_cart_city');
      if (savedCity) setCity(savedCity);
    } catch (e) {
      console.warn('Error loading cart from localStorage', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('ak_cart_items', JSON.stringify(items));
      if (promoCode) {
        localStorage.setItem('ak_cart_promo', JSON.stringify(promoCode));
      } else {
        localStorage.removeItem('ak_cart_promo');
      }
      localStorage.setItem('ak_cart_prov', province);
      localStorage.setItem('ak_cart_city', city);
    } catch (e) {
      console.warn('Error saving cart to localStorage', e);
    }
  }, [items, promoCode, province, city, isLoaded]);

  const addToCart = (book: Book, edition: BookEdition, quantity: number = 1) => {
    const availableStock = edition.stock_quantity;
    if (availableStock <= 0) {
      return { success: false, message: 'معذرت! یہ کتاب فی الوقت دستیاب نہیں ہے۔' };
    }

    const existingIndex = items.findIndex((i) => i.edition_id === edition.id);
    let newItems = [...items];

    if (existingIndex > -1) {
      const currentQty = newItems[existingIndex].quantity;
      const requestedQty = currentQty + quantity;

      if (requestedQty > availableStock) {
        return {
          success: false,
          message: `اسٹاک میں صرف ${availableStock} کتب دستیاب ہیں۔ آپ پہلے ہی ${currentQty} شامل کر چکے ہیں۔`,
        };
      }

      newItems[existingIndex].quantity = requestedQty;
      newItems[existingIndex].line_total = requestedQty * edition.final_price;
    } else {
      if (quantity > availableStock) {
        return {
          success: false,
          message: `اسٹاک میں صرف ${availableStock} کتب دستیاب ہیں۔`,
        };
      }

      newItems.push({
        id: `ci-${Date.now()}-${edition.id}`,
        edition_id: edition.id,
        edition,
        book,
        quantity,
        line_total: quantity * edition.final_price,
        weight_grams: edition.weight_grams,
      });
    }

    setItems(newItems);
    return { success: true, message: `"${book.title_ur}" کارٹ میں شامل کر دی گئی ہے۔` };
  };

  const updateQuantity = (editionId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(editionId);
      return { success: true };
    }

    const targetItem = items.find((i) => i.edition_id === editionId);
    if (!targetItem) return { success: false };

    const availableStock = targetItem.edition.stock_quantity;
    if (quantity > availableStock) {
      return {
        success: false,
        message: `معذرت! زیادہ سے زیادہ صرف ${availableStock} نسخے دستیاب ہیں۔`,
      };
    }

    const newItems = items.map((item) => {
      if (item.edition_id === editionId) {
        return {
          ...item,
          quantity,
          line_total: quantity * item.edition.final_price,
        };
      }
      return item;
    });

    setItems(newItems);
    return { success: true };
  };

  const removeFromCart = (editionId: string) => {
    setItems(items.filter((i) => i.edition_id !== editionId));
  };

  const clearCart = () => {
    setItems([]);
    setPromoCode(null);
  };

  const applyPromoCode = (code: string) => {
    const promo = store.getPromoByCode(code);
    if (!promo) {
      return { success: false, message: 'یہ پرومو کوڈ درست نہیں ہے۔' };
    }

    const currentSubtotal = items.reduce((sum, item) => sum + item.line_total, 0);
    const res = validateAndApplyPromoCode(promo, currentSubtotal);
    if (!res.isValid) {
      return { success: false, message: res.errorMessage || 'پرومو کوڈ قابل قبول نہیں ہے۔' };
    }

    setPromoCode(promo);
    return { success: true, message: `پرومو کوڈ لاگو ہو گیا! رعایت: روپے ${res.discountAmount.toLocaleString()}` };
  };

  const removePromoCode = () => {
    setPromoCode(null);
  };

  const setDestination = (p: string, c: string) => {
    setProvince(p);
    setCity(c);
  };

  // Shipping Calculation
  const rates = store.getShippingRates();
  const shippingCalculation = calculateOrderShipping(
    items.map((i) => ({ weight_grams: i.edition.weight_grams, quantity: i.quantity })),
    province,
    city,
    rates
  );

  const shippingCharge = shippingCalculation.shippingCharge;
  const shippingError = shippingCalculation.error;
  const shippingRateApplied = shippingCalculation.rateApplied;

  // Order Summary Calculation
  const summary = calculateOrderSummary({
    items,
    promoCode,
    shippingCharge,
  });

  const totalItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItemsCount,
        totalWeightGrams: summary.totalWeightGrams,
        regularSubtotal: summary.regularSubtotal,
        finalSubtotal: summary.finalSubtotal,
        bookDiscounts: summary.bookDiscounts,
        promoCode,
        promoDiscount: summary.promoDiscount,
        applyPromoCode,
        removePromoCode,
        province,
        city,
        setDestination,
        shippingCharge,
        shippingError,
        shippingRateApplied,
        grandTotal: summary.grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
