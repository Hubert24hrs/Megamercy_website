import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";

export const metadata: Metadata = {
  title: "MegaMercy Apartment · Luxury Short-Let Penthouse in Ikoyi, Lagos",
  description:
    "Ultra-premium, futuristic short-let apartment in prime Ikoyi, Lagos. 3,400 sq.ft of curated modernist luxury, panoramic Lagos Lagoon views, and 24/7 diplomatic fortress security.",
  keywords: [
    "MegaMercy Apartment",
    "Luxury short let Lagos",
    "Ikoyi penthouse short let",
    "Diplomatic apartment Lagos",
    "Executive apartment Ikoyi",
    "3D virtual tour Lagos apartment",
    "Secure short let Nigeria",
  ],
  authors: [{ name: "MegaMercy Hospitality" }],
  openGraph: {
    title: "MegaMercy Apartment · The Sanctuary of Modern Sovereignty",
    description:
      "Ultra-premium, futuristic short-let apartment in Ikoyi, Lagos. 24/7 uninterrupted power, biometric security, and dedicated private butler.",
    url: "https://megamercyapartment.com",
    siteName: "MegaMercy Apartment",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "MegaMercy Luxury Penthouse Ikoyi Lagos",
      },
    ],
    locale: "en_US",
    type: "website",
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
    name: "MegaMercy Apartment",
    description:
      "Ultra-premium futuristic short-let apartment in Ikoyi, Lagos, Nigeria offering diplomatic security and panoramic lagoon views.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bourdillon Road",
      addressLocality: "Ikoyi",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    telephone: "+2348140007890",
    priceRange: "$$$$",
    currenciesAccepted: "USD, NGN, GBP, EUR",
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
