import React from "react";
import SecurityDashboard from "@/components/SecurityDashboard";
import { SECURITY_FEATURES } from "@/lib/data";
import {
  ShieldCheck,
  Lock,
  Eye,
  Key,
  Fingerprint,
  Radio,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Diplomatic Security & Privacy · MegaMercy Apartment Ikoyi",
  description:
    "Comprehensive physical and digital security architecture at MegaMercy Apartment. Biometric locks, 24/7 armed perimeter patrol, and NDPR/GDPR guest confidentiality.",
};

export default function SecurityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-emerald text-xs font-mono tracking-widest text-emerald-400 uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>DIPLOMATIC DEFENSE &amp; DATA PRIVACY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-pearl-100">
          Fortress of Serenity
        </h1>
        <p className="text-sm sm:text-base text-pearl-300 leading-relaxed">
          In an interconnected world, your physical safety and digital discretion are inseparable.
          MegaMercy operates with military-grade rigor, allowing you to conduct diplomacy and
          business with total peace of mind.
        </p>
      </div>

      {/* Interactive HUD Dashboard */}
      <section>
        <SecurityDashboard />
      </section>

      {/* Layered Security Architecture Breakdown */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block">
            DEFENSE IN DEPTH
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-pearl-100">
            Four Layers of Invisible Protection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECURITY_FEATURES.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl glass-panel border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-pearl-100">{item.title}</h3>
                <p className="text-xs sm:text-sm text-pearl-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-pearl-300">
                <span>SYSTEM INTEGRITY</span>
                <span className="text-emerald-400 font-bold">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diplomatic Privacy & NDPR Policy Statement */}
      <section className="p-8 lg:p-12 rounded-3xl bg-obsidian-900/90 border border-white/10 space-y-6">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-gold-400" />
          <h3 className="text-2xl font-serif font-bold text-pearl-100">
            Diplomatic Discretion &amp; NDPR / GDPR Protocols
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-pearl-300 leading-relaxed">
          <div className="p-5 rounded-2xl bg-obsidian-950/60 border border-white/5 space-y-2">
            <h4 className="font-bold text-pearl-100 font-mono text-[11px] uppercase">
              1. Non-Disclosure Commitment
            </h4>
            <p className="text-pearl-400">
              All on-duty hospitality staff, butlers, and drivers are bound by strict non-disclosure
              agreements. We never share guest guest lists or itinerary details with third parties.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-950/60 border border-white/5 space-y-2">
            <h4 className="font-bold text-pearl-100 font-mono text-[11px] uppercase">
              2. Ephemeral Access Credentials
            </h4>
            <p className="text-pearl-400">
              Biometric templates and digital PIN numbers are active strictly for the duration of
              your stay. Cryptographic keys are purged automatically within 15 minutes of checkout.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-obsidian-950/60 border border-white/5 space-y-2">
            <h4 className="font-bold text-pearl-100 font-mono text-[11px] uppercase">
              3. Zero Internal Surveillance
            </h4>
            <p className="text-pearl-400">
              No cameras, microphones, or recording devices are installed anywhere within the
              private quarters of the apartment. Exterior surveillance is confined to perimeters.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
