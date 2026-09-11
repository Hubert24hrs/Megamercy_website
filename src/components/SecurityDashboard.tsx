"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Zap,
  Lock,
  Eye,
  Fingerprint,
  Radio,
  Server,
  Key,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function SecurityDashboard() {
  const [biometricScanning, setBiometricScanning] = useState(false);
  const [biometricUnlocked, setBiometricUnlocked] = useState(false);

  const handleScan = () => {
    setBiometricScanning(true);
    setTimeout(() => {
      setBiometricScanning(false);
      setBiometricUnlocked(true);
      setTimeout(() => {
        setBiometricUnlocked(false);
      }, 4000);
    }, 1500);
  };

  return (
    <div className="w-full rounded-3xl glass-panel p-6 lg:p-8 border border-emerald-600/30 shadow-xl bg-white/95 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header HUD Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-charcoal-900/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-500/30 text-emerald-700 flex items-center justify-center shadow-sm">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>DEFENSE SYSTEM: ACTIVE &amp; SECURE</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-bold text-charcoal-900">
              Fortress Command &amp; Power Telemetry
            </h3>
          </div>
        </div>

        <div className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/30 text-xs font-mono text-emerald-800 font-semibold shadow-sm">
          STATUS: THREAT LEVEL ZERO · ALL SYSTEMS NOMINAL
        </div>
      </div>

      {/* Grid of Security Sensors & Systems */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {/* Card 1: 100% Uninterrupted Power */}
        <div className="p-4 rounded-2xl bg-sand-50/80 border border-charcoal-900/10 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-bronze-700 flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 font-bold">
              ONLINE
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-charcoal-500 font-medium">TRIPLE POWER GRID</span>
            <h4 className="text-sm font-bold text-charcoal-900 mt-0.5">230V / 50Hz Stable</h4>
            <p className="text-[11px] text-charcoal-600 mt-1">
              Industrial Stamford Generator + Lithium Solar Inverter. Zero flicker ATS.
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-charcoal-900/5 flex items-center justify-between text-[10px] font-mono text-bronze-700 font-semibold">
            <span>UPTIME: 100.0%</span>
            <span>BACKUP: 72H RESERVE</span>
          </div>
        </div>

        {/* Card 2: Biometric Access */}
        <div className="p-4 rounded-2xl bg-sand-50/80 border border-charcoal-900/10 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Fingerprint className="w-4 h-4" />
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 font-bold">
              AES-256
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-charcoal-500 font-medium">KEYLESS ENTRY</span>
            <h4 className="text-sm font-bold text-charcoal-900 mt-0.5">Biometric &amp; Dynamic PIN</h4>
            <p className="text-[11px] text-charcoal-600 mt-1">
              Unique encrypted access codes generated per stay. Purged upon checkout.
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-charcoal-900/5 flex items-center justify-between text-[10px] font-mono text-emerald-800 font-semibold">
            <span>NO SHARED KEYS</span>
            <span>TAMPER PROOF</span>
          </div>
        </div>

        {/* Card 3: 24/7 CCTV Perimeter */}
        <div className="p-4 rounded-2xl bg-sand-50/80 border border-charcoal-900/10 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Eye className="w-4 h-4" />
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 font-bold">
              16 CAMERAS
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-charcoal-500 font-medium">EXTERIOR SURVEILLANCE</span>
            <h4 className="text-sm font-bold text-charcoal-900 mt-0.5">Perimeter Matrix Only</h4>
            <p className="text-[11px] text-charcoal-600 mt-1">
              Zero internal cameras. Total privacy inside living quarters guaranteed.
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-charcoal-900/5 flex items-center justify-between text-[10px] font-mono text-emerald-800 font-semibold">
            <span>THERMAL SENSORS</span>
            <span>ZERO BLINDSPOTS</span>
          </div>
        </div>

        {/* Card 4: Gated Estate Protocol */}
        <div className="p-4 rounded-2xl bg-sand-50/80 border border-charcoal-900/10 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-bronze-700 flex items-center justify-center">
              <Radio className="w-4 h-4" />
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 font-bold">
              STATIONED
            </span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-charcoal-500 font-medium">PHYSICAL SECURITY</span>
            <h4 className="text-sm font-bold text-charcoal-900 mt-0.5">Armed Guard Gatehouse</h4>
            <p className="text-[11px] text-charcoal-600 mt-1">
              Private uniformed security team with visitor pre-registration and rapid escort.
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-charcoal-900/5 flex items-center justify-between text-[10px] font-mono text-bronze-700 font-semibold">
            <span>IKOYI PATROL</span>
            <span>RESPONSE: &lt; 2 MINS</span>
          </div>
        </div>
      </div>

      {/* Interactive Biometric Lock Simulator */}
      <div className="mt-6 p-6 rounded-2xl bg-sand-50 border border-emerald-600/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div
            onClick={handleScan}
            className={`w-14 h-14 rounded-2xl border cursor-pointer transition-all flex items-center justify-center ${
              biometricUnlocked
                ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/30"
                : biometricScanning
                ? "bg-amber-100 text-bronze-700 border-bronze-400 animate-pulse"
                : "bg-white text-charcoal-800 border-charcoal-900/15 hover:border-emerald-600 hover:text-emerald-700 shadow-sm"
            }`}
          >
            {biometricUnlocked ? (
              <CheckCircle2 className="w-7 h-7" />
            ) : (
              <Fingerprint className="w-7 h-7" />
            )}
          </div>
          <div>
            <h5 className="text-sm font-bold text-charcoal-900">
              {biometricUnlocked
                ? "ACCESS GRANTED · SUITE UNLOCKED"
                : biometricScanning
                ? "SCANNING BIOMETRIC SIGNATURE..."
                : "Interactive Biometric Simulator"}
            </h5>
            <p className="text-xs text-charcoal-600 mt-0.5">
              {biometricUnlocked
                ? "Keyless access granted. Discretion protocol active."
                : "Tap fingerprint icon to simulate touchless smart-entry authentication."}
            </p>
          </div>
        </div>

        <button
          onClick={handleScan}
          disabled={biometricScanning}
          className="px-5 py-2.5 rounded-xl bg-white border border-emerald-600/40 text-emerald-800 text-xs font-mono uppercase tracking-wider hover:bg-emerald-50 transition-colors shrink-0 font-semibold shadow-sm"
        >
          {biometricScanning ? "Authenticating..." : "Test Lock Simulation"}
        </button>
      </div>
    </div>
  );
}
