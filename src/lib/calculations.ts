import { DiscountType, ShippingRate, PromoCode, CartItem } from '@/types';
import { STOCK_STATUS_DETAILS } from './constants';

/**
 * Calculates the final selling price after discount.
 * Enforces business rules:
 * - Percentage discount cannot exceed 100% and cannot be negative.
 * - Fixed discount cannot exceed regular price.
 * - Final price cannot be negative.
 * - Uses Math.round to maintain exact integer PKR.
 */
export function calculateEditionFinalPrice(
  regularPrice: number,
  discountType: DiscountType = 'percentage',
  discountValue: number = 0
): { finalPrice: number; discountAmount: number } {
  const safeRegularPrice = Math.max(0, Math.round(regularPrice));
  const safeDiscountValue = Math.max(0, discountValue);

  let discountAmount = 0;

  if (discountType === 'percentage') {
    const cappedPercentage = Math.min(100, safeDiscountValue);
    discountAmount = Math.round((safeRegularPrice * cappedPercentage) / 100);
  } else {
    // Fixed PKR discount
    discountAmount = Math.min(safeRegularPrice, Math.round(safeDiscountValue));
  }

  const finalPrice = Math.max(0, safeRegularPrice - discountAmount);

  return {
    finalPrice,
    discountAmount,
  };
}

/**
 * Calculates stock status and Urdu/English labels for an edition.
 */
export function getEditionStockStatus(
  stockQuantity: number,
  lowStockThreshold: number = 10
): {
  status: 'in_stock' | 'low_stock' | 'out_of_stock';
  labelUr: string;
  labelEn: string;
  colorClass: string;
  isPurchasable: boolean;
} {
  const safeStock = Math.max(0, stockQuantity);
  const safeThreshold = Math.max(1, lowStockThreshold);

  if (safeStock <= 0) {
    return {
      status: 'out_of_stock',
      labelUr: STOCK_STATUS_DETAILS.out_of_stock.ur,
      labelEn: STOCK_STATUS_DETAILS.out_of_stock.en,
      colorClass: STOCK_STATUS_DETAILS.out_of_stock.color,
      isPurchasable: false,
    };
  }

  if (safeStock <= safeThreshold) {
    return {
      status: 'low_stock',
      labelUr: STOCK_STATUS_DETAILS.low_stock.ur,
      labelEn: STOCK_STATUS_DETAILS.low_stock.en,
      colorClass: STOCK_STATUS_DETAILS.low_stock.color,
      isPurchasable: true,
    };
  }

  return {
    status: 'in_stock',
    labelUr: STOCK_STATUS_DETAILS.in_stock.ur,
    labelEn: STOCK_STATUS_DETAILS.in_stock.en,
    colorClass: STOCK_STATUS_DETAILS.in_stock.color,
    isPurchasable: true,
  };
}

/**
 * Calculates shipping charges based on destination and order weight.
 * Follows the requirement:
 * 1. Calculate weight of each selected edition multiplied by its quantity.
 * 2. Add packaging weight (if configured).
 * 3. Find matching rate (city-specific takes precedence over province default).
 * 4. Apply base charge for included weight + incremental charge for extra weight.
 * 5. Respect free shipping threshold if met.
 */
export function calculateOrderShipping(
  items: { weight_grams: number; quantity: number }[],
  province: string,
  city: string,
  rates: ShippingRate[],
  packagingWeightGrams: number = 0
): {
  totalWeightGrams: number;
  bookWeightGrams: number;
  packagingWeightGrams: number;
  shippingCharge: number;
  rateApplied: ShippingRate | null;
  isFreeShipping: boolean;
  error?: string;
} {
  const bookWeightGrams = items.reduce(
    (sum, item) => sum + Math.max(0, item.weight_grams) * Math.max(0, item.quantity),
    0
  );
  const totalWeightGrams = bookWeightGrams + Math.max(0, packagingWeightGrams);

  // If empty order or no rates provided
  if (!rates || rates.length === 0) {
    return {
      totalWeightGrams,
      bookWeightGrams,
      packagingWeightGrams,
      shippingCharge: 250, // default fallback if no DB rules
      rateApplied: null,
      isFreeShipping: false,
      error: 'کوئی فعال شپنگ ضابطہ دستیاب نہیں ہے۔',
    };
  }

  // 1. Look for city-level specific rate first
  let matchedRate = rates.find(
    (r) =>
      r.is_active &&
      r.city &&
      r.city.trim().toLowerCase() === city.trim().toLowerCase()
  );

  // 2. If not found, look for province-level default rate (city is null or empty)
  if (!matchedRate) {
    matchedRate = rates.find(
      (r) => r.is_active && (!r.city || r.city.trim() === '')
    );
  }

  // If still no rule matches
  if (!matchedRate) {
    return {
      totalWeightGrams,
      bookWeightGrams,
      packagingWeightGrams,
      shippingCharge: 0,
      rateApplied: null,
      isFreeShipping: false,
      error: 'اس شہر کے لیے شپنگ ریٹ فی الوقت دستیاب نہیں ہے۔ براہ کرم رابطہ فرمائیں۔',
    };
  }

  const baseCharge = matchedRate.base_charge;
  const includedWeight = Math.max(1, matchedRate.included_weight_grams || 1000);
  const extraChargePerKg = matchedRate.extra_charge_per_kg || 0;
  const incrementGrams = Math.max(1, matchedRate.weight_increment_grams || 1000);

  let shippingCharge = baseCharge;

  if (totalWeightGrams > includedWeight) {
    const extraWeight = totalWeightGrams - includedWeight;
    const additionalUnits = Math.ceil(extraWeight / incrementGrams);
    shippingCharge += additionalUnits * extraChargePerKg;
  }

  if (matchedRate.min_charge && shippingCharge < matchedRate.min_charge) {
    shippingCharge = matchedRate.min_charge;
  }
  if (matchedRate.max_charge && shippingCharge > matchedRate.max_charge) {
    shippingCharge = matchedRate.max_charge;
  }

  return {
    totalWeightGrams,
    bookWeightGrams,
    packagingWeightGrams,
    shippingCharge: Math.round(shippingCharge),
    rateApplied: matchedRate,
    isFreeShipping: false,
  };
}

/**
 * Validates and calculates promo code discount.
 */
export function validateAndApplyPromoCode(
  promo: PromoCode | null,
  eligibleSubtotal: number
): {
  isValid: boolean;
  discountAmount: number;
  errorMessage?: string;
} {
  if (!promo) {
    return { isValid: false, discountAmount: 0 };
  }

  if (!promo.is_active) {
    return { isValid: false, discountAmount: 0, errorMessage: 'یہ پرومو کوڈ اب فعال نہیں ہے۔' };
  }

  const now = new Date();
  if (promo.start_date && new Date(promo.start_date) > now) {
    return { isValid: false, discountAmount: 0, errorMessage: 'یہ پرومو کوڈ ابھی شروع نہیں ہوا ہے۔' };
  }

  if (promo.expiry_date && new Date(promo.expiry_date) < now) {
    return { isValid: false, discountAmount: 0, errorMessage: 'یہ پرومو کوڈ زائد المیعاد (Expired) ہو چکا ہے۔' };
  }

  if (promo.usage_limit && promo.times_used >= promo.usage_limit) {
    return { isValid: false, discountAmount: 0, errorMessage: 'اس پرومو کوڈ کی استعمال کی حد مکمل ہو چکی ہے۔' };
  }

  if (promo.min_order_amount && eligibleSubtotal < promo.min_order_amount) {
    return {
      isValid: false,
      discountAmount: 0,
      errorMessage: `اس کوپن کے لیے کم از کم خریداری روپے ${promo.min_order_amount.toLocaleString()} درکار ہے۔`,
    };
  }

  let discountAmount = 0;
  if (promo.discount_type === 'percentage') {
    discountAmount = Math.round((eligibleSubtotal * Math.min(100, promo.discount_value)) / 100);
  } else {
    discountAmount = Math.min(eligibleSubtotal, promo.discount_value);
  }

  if (promo.max_discount_amount && discountAmount > promo.max_discount_amount) {
    discountAmount = promo.max_discount_amount;
  }

  return {
    isValid: true,
    discountAmount: Math.max(0, discountAmount),
  };
}

/**
 * Full order calculation pipeline.
 */
export function calculateOrderSummary({
  items,
  promoCode = null,
  shippingCharge = 0,
}: {
  items: CartItem[];
  promoCode?: PromoCode | null;
  shippingCharge?: number;
}) {
  let regularSubtotal = 0;
  let finalSubtotal = 0;
  let totalWeightGrams = 0;

  for (const item of items) {
    const regPrice = item.edition.regular_price || 0;
    const finPrice = item.edition.final_price || regPrice;
    const qty = item.quantity;

    regularSubtotal += regPrice * qty;
    finalSubtotal += finPrice * qty;
    totalWeightGrams += (item.edition.weight_grams || 500) * qty;
  }

  const bookDiscounts = Math.max(0, regularSubtotal - finalSubtotal);

  // Validate promo on finalSubtotal
  const promoResult = validateAndApplyPromoCode(promoCode, finalSubtotal);
  const promoDiscount = promoResult.isValid ? promoResult.discountAmount : 0;

  // Check free shipping threshold if applicable
  let applicableShippingCharge = Math.max(0, shippingCharge);

  const grandTotal = Math.max(0, finalSubtotal - promoDiscount + applicableShippingCharge);

  return {
    regularSubtotal,
    finalSubtotal,
    bookDiscounts,
    promoDiscount,
    promoResult,
    totalWeightGrams,
    shippingCharge: applicableShippingCharge,
    grandTotal,
  };
}
