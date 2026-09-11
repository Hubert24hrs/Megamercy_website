import React from "react";
import IoTSimulator from "@/components/IoTSimulator";
import { AMENITIES } from "@/lib/data";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Wifi,
  Waves,
  UserCheck,
  VolumeX,
  Car,
  Check,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Amenities & Smart Living · MegaMercy Apartment Ikoyi",
  description:
    "Explore the ultra-luxury amenities, triple-redundant power grid, Lutron smart lighting, and 24/7 dedicated butler service at MegaMercy Apartment.",
};

export default function AmenitiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-subtle text-xs font-mono tracking-widest text-gold-400 uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FIVE-STAR HOSPITALITY STANDARDS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-pearl-100">
          Amenities Engineered for Ease
        </h1>
        <p className="text-sm sm:text-base text-pearl-300 leading-relaxed">
          From uninterrupted clean power to a private rooftop infinity pool and personalized butler
          service, MegaMercy provides an ecosystem of continuous luxury.
        </p>
      </div>

      {/* IoT Living Simulator */}
      <section>
        <IoTSimulator />
      </section>

      {/* Categorized Amenities Grid */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block">
            RESIDENCE HIGHLIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-pearl-100">
            Every Detail Anticipated
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl glass-panel border border-white/5 hover:border-gold-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-obsidian-900 border border-gold-500/20 group-hover:border-gold-500/50 flex items-center justify-center text-gold-400 mb-6 transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-pearl-100 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-pearl-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.highlight && (
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{item.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Additional Bespoke VIP Services Banner */}
      <section className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-obsidian-900 via-obsidian-900 to-obsidian-950 border border-gold-500/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block">
            ON-DEMAND BESPOKE SERVICES
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-pearl-100">
            Private Chauffeurs, Yacht Charters &amp; Executive Security
          </h3>
          <p className="text-xs sm:text-sm text-pearl-300 leading-relaxed">
            Our butler service coordinates direct, uninterrupted transfers from Murtala Muhammed
            Airport tarmac, private boat charters departing from Lagos Yacht Club, and armed
            diplomatic protection details upon advance request.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/2348140007890?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20bespoke%20VIP%20services%20for%20an%20upcoming%20stay."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
            >
              <span>Consult VIP Butler Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
