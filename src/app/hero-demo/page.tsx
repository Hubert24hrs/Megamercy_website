import { Hero09 } from "@/components/ui/hero-09";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero 09 Component | MagMercy Apartment",
  description: "Bespoke executive hero component for MagMercy Apartment.",
};

export default function HeroDemoPage() {
  return (
    <main className="min-h-screen pt-12 pb-24">
      <Hero09
        title="Reserve Your Sanctuary"
        titleLine2="in Ikoyi, Lagos."
        description="A private 3,400 sq.ft penthouse engineered for visiting dignitaries, diplomatic delegations, and executive boards."
        searchPlaceholder="Search suites, amenities, or security protocols..."
        searchButtonText="Explore"
        heroImage="/images/rooms/magmercy_real_1.jpeg"
        heroAlt="MagMercy Residence Architecture"
        bottomTitle="Engineered for"
        bottomTitleLine2="absolute peace."
        bottomText="Triple-redundant power, German acoustic glazing, and 24/7 dedicated butler service in Dolphin Estate, Ikoyi."
        animation="subtle"
      />
    </main>
  );
}
