export type CurrencyCode = "NGN" | "USD" | "GBP" | "EUR";

export interface CurrencyRate {
  code: CurrencyCode;
  symbol: string;
  rateToUSD: number; // 1 USD = X Currency
  format: (amount: number) => string;
}

export interface AmenityItem {
  id: string;
  title: string;
  category: "Security" | "Wellness" | "Smart Living" | "Hospitality" | "Business" | "Infrastructure";
  description: string;
  iconName: string;
  highlight?: string;
}

export interface RoomSpec {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  dimensions: string;
  capacity: string;
  bedType: string;
  keyFeatures: string[];
  imageUrl: string;
  videoUrl?: string;
  panoramaUrl?: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  title: string;
  country: string;
  flag: string;
  rating: number;
  date: string;
  quote: string;
  verifiedStay: boolean;
  avatarUrl: string;
}

export interface SecurityFeature {
  id: string;
  title: string;
  category: "Physical" | "Biometric" | "Digital & Privacy" | "Infrastructure";
  description: string;
  status: "Active" | "24/7 Monitored" | "Encrypted" | "Redundant";
  badge: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  currency: CurrencyCode;
  selectedAddOns: string[];
  promoCode: string;
}
