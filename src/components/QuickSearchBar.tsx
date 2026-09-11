"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Users, Eye, Search, ArrowRight } from "lucide-react";

// Helper to calculate dynamic ISO date offsets
function getOffsetDateString(daysOffset: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  return d.toISOString().split("T")[0];
}

export default function QuickSearchBar() {
  const router = useRouter();
  const [arrival, setArrival] = useState(() => getOffsetDateString(1));
  const [departure, setDeparture] = useState(() => getOffsetDateString(5));
  const [selectedView, setSelectedView] = useState("any");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  const todayStr = new Date().toISOString().split("T")[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      checkin: arrival,
      checkout: departure,
      view: selectedView,
      adults: adults,
      children: children,
    }).toString();
    router.push(`/booking?${query}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 -mt-6 relative z-30">
      <div className="bg-white/98 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-charcoal-900/15 shadow-xl shadow-coastal-navy/10 p-3 sm:p-5">
        {/* Top small label bar */}
        <div className="flex items-center justify-between pb-3 px-2 border-b border-charcoal-900/10 mb-3 text-[11px] font-mono tracking-wider uppercase text-charcoal-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-coastal-blue animate-pulse" />
            <span className="font-bold text-charcoal-900">IKOYI WATERFRONT RESERVATION DESK</span>
            <span className="hidden sm:inline text-charcoal-400">·</span>
            <span className="hidden sm:inline text-bronze-600">DIRECT EMBASSY &amp; EXECUTIVE RATES</span>
          </div>
          <div className="text-coastal-blue font-semibold hidden md:block">
            BEST RATE GUARANTEED
          </div>
        </div>

        {/* Horizontal Form Row */}
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 items-end"
        >
          {/* Arrival Date */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-charcoal-700 font-bold flex items-center gap-1">
              <Calendar className="w-3 h-3 text-coastal-blue" />
              <span>Arrival:</span>
            </label>
            <input
              type="date"
              min={todayStr}
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-sand-50 border border-charcoal-900/20 text-xs font-mono font-medium text-charcoal-900 focus:outline-none focus:border-coastal-blue transition-colors shadow-inner"
              required
            />
          </div>

          {/* Departure Date */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-charcoal-700 font-bold flex items-center gap-1">
              <Calendar className="w-3 h-3 text-coastal-blue" />
              <span>Departure:</span>
            </label>
            <input
              type="date"
              min={arrival || todayStr}
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-sand-50 border border-charcoal-900/20 text-xs font-mono font-medium text-charcoal-900 focus:outline-none focus:border-coastal-blue transition-colors shadow-inner"
              required
            />
          </div>

          {/* View / Suite Selection */}
          <div className="space-y-1 col-span-2 sm:col-span-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-charcoal-700 font-bold flex items-center gap-1">
              <Eye className="w-3 h-3 text-coastal-blue" />
              <span>View / Category:</span>
            </label>
            <select
              value={selectedView}
              onChange={(e) => setSelectedView(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-sand-50 border border-charcoal-900/20 text-xs font-medium text-charcoal-900 focus:outline-none focus:border-coastal-blue transition-colors shadow-inner"
            >
              <option value="any">Any View</option>
              <option value="lagoon-front">Lagoon Front View</option>
              <option value="lagoon-partial">Lagoon Partial View</option>
              <option value="penthouse">Sovereign Penthouse</option>
              <option value="diplomatic">Diplomatic 3-Bed Suite</option>
              <option value="double-unit">Adjoining Double Suite</option>
            </select>
          </div>

          {/* Adults */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-charcoal-700 font-bold flex items-center gap-1">
              <Users className="w-3 h-3 text-coastal-blue" />
              <span>Adults:</span>
            </label>
            <select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-sand-50 border border-charcoal-900/20 text-xs font-mono font-medium text-charcoal-900 focus:outline-none focus:border-coastal-blue transition-colors shadow-inner"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n.toString()}>
                  {n} {n === 1 ? "Adult" : "Adults"}
                </option>
              ))}
            </select>
          </div>

          {/* Kids / Delegation */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-charcoal-700 font-bold flex items-center gap-1">
              <Users className="w-3 h-3 text-coastal-blue" />
              <span>Kids:</span>
            </label>
            <select
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-sand-50 border border-charcoal-900/20 text-xs font-mono font-medium text-charcoal-900 focus:outline-none focus:border-coastal-blue transition-colors shadow-inner"
            >
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n.toString()}>
                  {n} {n === 1 ? "Child" : "Children"}
                </option>
              ))}
            </select>
          </div>

          {/* Action Button: SEARCH CONDOS / SUITES */}
          <div className="col-span-2 sm:col-span-1">
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-coastal-blue hover:bg-coastal-blue-hover text-white font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-coastal-blue/30 flex items-center justify-center gap-1.5 h-[42px] hover:-translate-y-0.5"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search Suites</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
