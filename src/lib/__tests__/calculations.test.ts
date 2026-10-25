import { describe, it, expect } from 'vitest';
import {
  calculateEditionFinalPrice,
  getEditionStockStatus,
  calculateOrderShipping,
  validateAndApplyPromoCode,
  calculateOrderSummary,
} from '../calculations';
import { ShippingRate, PromoCode, CartItem } from '@/types';

describe('Financial & Price Calculations', () => {
  it('calculates percentage discounts accurately in whole PKR', () => {
    // 15% discount on Rs. 2,000 -> Rs. 300 discount -> Rs. 1,700 final
    const res = calculateEditionFinalPrice(2000, 'percentage', 15);
    expect(res.discountAmount).toBe(300);
    expect(res.finalPrice).toBe(1700);
  });

  it('calculates fixed amount discounts accurately in whole PKR', () => {
    // Rs. 250 discount on Rs. 1,500 -> Rs. 1,250 final
    const res = calculateEditionFinalPrice(1500, 'fixed', 250);
    expect(res.discountAmount).toBe(250);
    expect(res.finalPrice).toBe(1250);
  });

  it('caps percentage discount at 100% and never returns negative price', () => {
    const res = calculateEditionFinalPrice(1000, 'percentage', 120);
    expect(res.discountAmount).toBe(1000);
    expect(res.finalPrice).toBe(0);
  });

  it('caps fixed discount at regular price and never returns negative price', () => {
    const res = calculateEditionFinalPrice(800, 'fixed', 1200);
    expect(res.discountAmount).toBe(800);
    expect(res.finalPrice).toBe(0);
  });

  it('handles zero discount correctly', () => {
    const res = calculateEditionFinalPrice(1200, 'percentage', 0);
    expect(res.discountAmount).toBe(0);
    expect(res.finalPrice).toBe(1200);
  });
});

describe('Stock Status Classification', () => {
  it('marks stock > threshold as In Stock with Urdu label', () => {
    const res = getEditionStockStatus(25, 10);
    expect(res.status).toBe('in_stock');
    expect(res.labelUr).toBe('دستیاب ہے');
    expect(res.isPurchasable).toBe(true);
  });

  it('marks stock <= threshold as Low Stock with Urdu label', () => {
    const res = getEditionStockStatus(8, 10);
    expect(res.status).toBe('low_stock');
    expect(res.labelUr).toBe('اسٹاک کم ہے');
    expect(res.isPurchasable).toBe(true);
  });

  it('marks 0 stock as Out of Stock and disables purchasing', () => {
    const res = getEditionStockStatus(0, 10);
    expect(res.status).toBe('out_of_stock');
    expect(res.labelUr).toBe('اسٹاک ختم ہو گیا');
    expect(res.isPurchasable).toBe(false);
  });
});

describe('Weight-Based Shipping Calculations', () => {
  const sampleRates: ShippingRate[] = [
    {
      id: 'rate-punjab',
      zone_id: 'z-punjab',
      city: null, // Province default
      shipping_method: 'Standard TCS',
      base_charge: 200,
      included_weight_grams: 1000,
      extra_charge_per_kg: 80,
      weight_increment_grams: 1000,
      is_active: true,
    },
    {
      id: 'rate-lahore',
      zone_id: 'z-punjab',
      city: 'Lahore', // City specific
      shipping_method: 'Lahore Express',
      base_charge: 150,
      included_weight_grams: 1000,
      extra_charge_per_kg: 60,
      weight_increment_grams: 1000,
      is_active: true,
    },
  ];

  it('charges base rate when total weight is within included weight', () => {
    // 2 books of 400g = 800g <= 1000g base in Punjab
    const items = [{ weight_grams: 400, quantity: 2 }];
    const res = calculateOrderShipping(items, 'Punjab', 'Multan', sampleRates);

    expect(res.totalWeightGrams).toBe(800);
    expect(res.shippingCharge).toBe(200);
    expect(res.rateApplied?.id).toBe('rate-punjab');
  });

  it('charges additional increment per started kilogram beyond included weight', () => {
    // Book A: 500g * 2 = 1000g
    // Book B: 800g * 1 = 800g
    // Total = 1800g. Included = 1000g. Extra = 800g (1 extra started kg).
    // Charge = 200 + 80 = 280 PKR.
    const items = [
      { weight_grams: 500, quantity: 2 },
      { weight_grams: 800, quantity: 1 },
    ];
    const res = calculateOrderShipping(items, 'Punjab', 'Faisalabad', sampleRates);

    expect(res.totalWeightGrams).toBe(1800);
    expect(res.shippingCharge).toBe(280);
  });

  it('prioritizes city-specific rate over province rate', () => {
    // For Lahore, base charge is 150 PKR
    const items = [{ weight_grams: 600, quantity: 1 }];
    const res = calculateOrderShipping(items, 'Punjab', 'Lahore', sampleRates);

    expect(res.shippingCharge).toBe(150);
    expect(res.rateApplied?.city).toBe('Lahore');
  });

  it('adds packaging weight to total order weight', () => {
    const items = [{ weight_grams: 900, quantity: 1 }];
    // 900g books + 200g packaging = 1100g -> exceeds 1000g -> charges 1 extra unit
    const res = calculateOrderShipping(items, 'Punjab', 'Rawalpindi', sampleRates, 200);

    expect(res.bookWeightGrams).toBe(900);
    expect(res.packagingWeightGrams).toBe(200);
    expect(res.totalWeightGrams).toBe(1100);
    expect(res.shippingCharge).toBe(280); // 200 base + 80 extra
  });
});

describe('Promo Code Rules & Validation', () => {
  const basePromo: PromoCode = {
    id: 'promo-1',
    code: 'BISMILLAH10',
    discount_type: 'percentage',
    discount_value: 10,
    min_order_amount: 1500,
    max_discount_amount: 500,
    start_date: new Date(Date.now() - 86400000).toISOString(), // started yesterday
    expiry_date: new Date(Date.now() + 86400000 * 30).toISOString(), // expires in 30 days
    usage_limit: 100,
    times_used: 12,
    is_active: true,
  };

  it('applies percentage promo code with valid order amount', () => {
    // 10% off Rs. 2,000 = Rs. 200
    const res = validateAndApplyPromoCode(basePromo, 2000);
    expect(res.isValid).toBe(true);
    expect(res.discountAmount).toBe(200);
  });

  it('respects maximum discount cap', () => {
    // 10% off Rs. 10,000 = Rs. 1,000, but capped at Rs. 500
    const res = validateAndApplyPromoCode(basePromo, 10000);
    expect(res.isValid).toBe(true);
    expect(res.discountAmount).toBe(500);
  });

  it('rejects promo code if order amount is below minimum spend', () => {
    const res = validateAndApplyPromoCode(basePromo, 1200);
    expect(res.isValid).toBe(false);
    expect(res.discountAmount).toBe(0);
    expect(res.errorMessage).toContain('1,500');
  });

  it('rejects expired promo code', () => {
    const expiredPromo: PromoCode = {
      ...basePromo,
      expiry_date: new Date(Date.now() - 1000).toISOString(),
    };
    const res = validateAndApplyPromoCode(expiredPromo, 2500);
    expect(res.isValid).toBe(false);
    expect(res.errorMessage).toContain('زائد المیعاد');
  });

  it('rejects promo code whose usage limit has been exhausted', () => {
    const exhaustedPromo: PromoCode = {
      ...basePromo,
      usage_limit: 50,
      times_used: 50,
    };
    const res = validateAndApplyPromoCode(exhaustedPromo, 2500);
    expect(res.isValid).toBe(false);
    expect(res.errorMessage).toContain('استعمال کی حد');
  });
});

describe('Full Order Bill Pipeline', () => {
  it('correctly calculates order financials with book discounts, promo and shipping', () => {
    const mockItems: CartItem[] = [
      {
        id: 'ci-1',
        edition_id: 'ed-1',
        quantity: 2,
        line_total: 1800,
        weight_grams: 600,
        book: {
          id: 'b-1',
          title_ur: 'معارف القرآن',
          language: 'Urdu',
          binding_type: 'Hardback',
          printing_type: 'Two Color',
          total_volumes: 8,
          tags: [],
          is_featured: true,
          is_published: true,
          views_count: 50,
          created_at: '',
          updated_at: '',
        },
        edition: {
          id: 'ed-1',
          book_id: 'b-1',
          publisher_id: 'p-1',
          edition_name: 'معیاری ایڈیشن',
          volumes: 8,
          binding_type: 'Hardback',
          printing_type: 'Two Color',
          purchase_cost: 600,
          regular_price: 1000,
          discount_type: 'percentage',
          discount_value: 10,
          final_price: 900,
          weight_grams: 600,
          stock_quantity: 20,
          reserved_quantity: 0,
          low_stock_threshold: 5,
          is_active: true,
          created_at: '',
          updated_at: '',
        },
      },
    ];

    const promo: PromoCode = {
      id: 'p-test',
      code: 'WELCOME',
      discount_type: 'fixed',
      discount_value: 100,
      min_order_amount: 1000,
      start_date: new Date(Date.now() - 1000).toISOString(),
      times_used: 0,
      is_active: true,
    };

    const summary = calculateOrderSummary({
      items: mockItems,
      promoCode: promo,
      shippingCharge: 200,
    });

    // 2 copies * 1000 regular = 2000
    expect(summary.regularSubtotal).toBe(2000);
    // 2 copies * 900 final = 1800
    expect(summary.finalSubtotal).toBe(1800);
    // Book discount = 2000 - 1800 = 200
    expect(summary.bookDiscounts).toBe(200);
    // Promo discount = 100
    expect(summary.promoDiscount).toBe(100);
    // Shipping = 200
    expect(summary.shippingCharge).toBe(200);
    // Grand Total = 1800 - 100 + 200 = 1900
    expect(summary.grandTotal).toBe(1900);
    // Total weight = 2 * 600g = 1200g
    expect(summary.totalWeightGrams).toBe(1200);
  });
});
