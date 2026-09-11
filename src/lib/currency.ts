import { CurrencyCode } from "./types";

export const CURRENCY_CONFIG: Record<
  CurrencyCode,
  { symbol: string; rateFromUSD: number; label: string }
> = {
  USD: { symbol: "$", rateFromUSD: 1, label: "USD ($)" },
  NGN: { symbol: "₦", rateFromUSD: 1620, label: "NGN (₦)" },
  GBP: { symbol: "£", rateFromUSD: 0.78, label: "GBP (£)" },
  EUR: { symbol: "€", rateFromUSD: 0.92, label: "EUR (€)" },
};

// Base price in USD per night
export const BASE_NIGHTLY_RATE_USD = 450;

export function convertFromUSD(amountUSD: number, targetCurrency: CurrencyCode): number {
  const rate = CURRENCY_CONFIG[targetCurrency]?.rateFromUSD ?? 1;
  return Math.round(amountUSD * rate);
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
