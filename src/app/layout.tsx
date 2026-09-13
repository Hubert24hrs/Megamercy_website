import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
  viewportFit: "cover",
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://magmercy-apartment.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MagMercy Apartment · Luxury Short-Let Penthouse in Ikoyi, Lagos",
    template: "%s · MagMercy Apartment Ikoyi",
  },
  description:
    "Ultra-premium short-let penthouse at 89 Lafiaji St, Dolphin Estate, Ikoyi. 100% uninterrupted generator + solar power, biometric security, 1Gbps fiber Wi-Fi, and dedicated private butler. From ₦350,000/night.",
  keywords: [
    "MagMercy Apartment",
    "Luxury short let Lagos",
    "Ikoyi penthouse short let",
    "Dolphin Estate apartment",
    "Diplomatic apartment Lagos",
    "Executive short let Ikoyi",
    "4K video walkthrough Lagos apartment",
    "Secure short let Nigeria",
  ],
  authors: [{ name: "MagMercy Hospitality" }],
  openGraph: {
    title: "MagMercy Apartment · The Sanctuary of Modern Sovereignty",
    description:
      "Ultra-premium short-let penthouse in Dolphin Estate, Ikoyi, Lagos. 100% uninterrupted power, biometric security, and dedicated private butler. From ₦350,000/night.",
    url: siteUrl,
    siteName: "MagMercy Apartment Ikoyi",
    images: [
      {
        url: "/images/rooms/magmercy_real_1.jpeg",
        width: 1200,
        height: 630,
        alt: "MagMercy Luxury Penthouse in Dolphin Estate, Ikoyi, Lagos",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MagMercy Apartment · Luxury Penthouse in Ikoyi, Lagos",
    description:
      "Ultra-luxury penthouse short-let at 89 Lafiaji St, Dolphin Estate, Ikoyi. 100% power, biometric access, 1Gbps Wi-Fi & private butler.",
    images: ["/images/rooms/magmercy_real_1.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (Schema.org LodgingBusiness)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "MagMercy Apartment",
    description:
      "Ultra-premium futuristic short-let apartment in Ikoyi, Lagos, Nigeria offering diplomatic security and panoramic lagoon views.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "89 Lafiaji Street, Dolphin Estate",
      addressLocality: "Ikoyi",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    telephone: "+2348025666687",
    priceRange: "$$$$",
    currenciesAccepted: "NGN, USD, EUR, GBP",
    paymentAccepted: "Credit Card, Debit Card, Bank Transfer",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "24/7 Uninterrupted Power", value: true },
      { "@type": "LocationFeatureSpecification", name: "Biometric Smart Lock", value: true },
      { "@type": "LocationFeatureSpecification", name: "1Gbps Redundant Fiber Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rooftop Infinity Pool", value: true },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-alabaster-100 text-charcoal-900 antialiased selection:bg-bronze-500 selection:text-white">
        <Navbar />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
        <WhatsAppConcierge />
      </body>
    </html>
  );
}
