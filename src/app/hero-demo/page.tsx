import { Hero09 } from "@/components/ui/hero-09";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero 09 Component Demo | MegaMercy Apartment",
  description: "Demonstration of the integrated Hero09 shadcn component.",
};

export default function HeroDemoPage() {
  return (
    <main className="min-h-screen pt-12 pb-24">
      <Hero09
        title="Find the perfect"
        titleLine2="block for your app."
        description="Production-ready UI blocks built with React, Tailwind, and shadcn."
        searchPlaceholder="Search blocks and components"
        searchButtonText="Search"
        heroImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
        heroAlt="Modern minimalist luxury architecture"
        bottomTitle="Blocks"
        bottomTitleLine2="crafted with purpose."
        bottomText="A curated library where clean design, accessibility, and copy-paste code come together."
        animation="subtle"
      />
    </main>
  );
}
