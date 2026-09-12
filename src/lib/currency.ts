import { CurrencyCode } from "./types";

export const CURRENCY_CONFIG: Record<
  CurrencyCode,
  { symbol: string; rateFromUSD: number; label: string }
> = {
  NGN: { symbol: "₦", rateFromUSD: 1600, label: "NGN (₦)" },
  USD: { symbol: "$", rateFromUSD: 1, label: "USD ($)" },
  GBP: { symbol: "£", rateFromUSD: 0.78, label: "GBP (£)" },
  EUR: { symbol: "€", rateFromUSD: 0.92, label: "EUR (€)" },
};

// Base luxury penthouse rate in NGN (350,000 NGN / night)
export const BASE_NIGHTLY_RATE_NGN = 350000;
// Base price in USD per night (~$220 USD)
export const BASE_NIGHTLY_RATE_USD = Math.round(BASE_NIGHTLY_RATE_NGN / 1600);

// Reservation Policies
export const MIN_STAY_NIGHTS = 2;
export const CAUTION_DEPOSIT_NGN = 100000; // Refundable security bond
export const CAUTION_DEPOSIT_USD = Math.round(CAUTION_DEPOSIT_NGN / 1600);

// Long stay discounts
export const LONG_STAY_DISCOUNTS = {
  WEEKLY_DISCOUNT_PERCENT: 10, // 7+ nights (10% off)
  MONTHLY_DISCOUNT_PERCENT: 20, // 30+ nights (20% off)
};

export function convertFromUSD(amountUSD: number, targetCurrency: CurrencyCode): number {
  const rate = CURRENCY_CONFIG[targetCurrency]?.rateFromUSD ?? 1;
  return Math.round(amountUSD * rate);
}

export function convertFromNGN(amountNGN: number, targetCurrency: CurrencyCode): number {
  if (targetCurrency === "NGN") return amountNGN;
  const amountUSD = amountNGN / CURRENCY_CONFIG.NGN.rateFromUSD;
  return convertFromUSD(amountUSD, targetCurrency);
}

export function formatPrice(amountUSD: number, currency: CurrencyCode): string {
  const converted = convertFromUSD(amountUSD, currency);
  const symbol = CURRENCY_CONFIG[currency]?.symbol ?? "$";

  if (currency === "NGN") {
    return `${symbol}${converted.toLocaleString("en-NG")}`;
  } else if (currency === "GBP") {
    return `${symbol}${converted.toLocaleString("en-GB")}`;
  } else if (currency === "EUR") {
    return `${symbol}${converted.toLocaleString("de-DE")}`;
  }
  return `${symbol}${converted.toLocaleString("en-US")}`;
}

export function formatPriceNGN(amountNGN: number, currency: CurrencyCode): string {
  if (currency === "NGN") {
    return `₦${amountNGN.toLocaleString("en-NG")}`;
  }
  const amountUSD = amountNGN / CURRENCY_CONFIG.NGN.rateFromUSD;
  return formatPrice(amountUSD, currency);
}
