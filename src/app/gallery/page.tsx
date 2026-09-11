"use client";

import React, { useState } from "react";
import { Sparkles, Eye, Maximize2 } from "lucide-react";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const images = [
    {
      title: "Grand Living Pavilion",
      category: "interior",
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Sovereign Master En-Suite",
      category: "interior",
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Diplomatic Suite & Desk",
      category: "interior",
      url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Calacatta Gold Chef's Kitchen",
      category: "interior",
      url: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Sunset Over Lagos Lagoon",
      category: "exterior",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Penthouse Infinity Pool at Night",
      category: "wellness",
      url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Nero Marquina Marble Soaking Tub",
      category: "interior",
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Private Horizon Balcony Loungers",
      category: "exterior",
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const filtered = filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-100 border border-bronze-400/30 text-xs font-mono tracking-widest text-bronze-700 uppercase font-semibold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CURATED 4K VISUAL ARCHIVES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-charcoal-900">
          The Gallery of Sovereign Living
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
          High-definition photography capturing the subtle interplay of light, Italian craftsmanship,
          and tranquil lagoon vistas at MegaMercy.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {[
            { id: "all", label: "All Collections" },
            { id: "interior", label: "Interior Sanctuaries" },
            { id: "exterior", label: "Skyline & Lagoon" },
            { id: "wellness", label: "Pool & Wellness" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                filter === tab.id
                  ? "bg-bronze-500 text-white font-bold shadow-md shadow-bronze-500/20"
                  : "bg-sand-100 text-charcoal-700 hover:bg-sand-200 hover:text-charcoal-900 border border-charcoal-900/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="group relative rounded-3xl overflow-hidden aspect-[4/3] border border-bronze-400/30 shadow-lg bg-sand-100"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-[10px] font-mono text-bronze-300 uppercase tracking-widest font-semibold">
                {item.category}
              </span>
              <h4 className="text-lg font-serif font-bold text-white mt-1">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
