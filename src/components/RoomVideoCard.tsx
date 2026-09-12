"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, ShieldCheck, CheckCircle2, ChevronRight, Video } from "lucide-react";
import { RoomSpec } from "@/lib/types";

interface RoomVideoCardProps {
  room: RoomSpec;
  isReversed?: boolean;
}

export default function RoomVideoCard({ room, isReversed = false }: RoomVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 lg:p-8 rounded-3xl bg-white/90 border border-charcoal-900/10 shadow-xl backdrop-blur-sm transition-all hover:border-gold-500/40`}
    >
      {/* Video / Visual Media Container (7 cols) */}
      <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
        <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-charcoal-950 border border-gold-500/30 shadow-2xl group">
          {room.videoUrl ? (
            <video
              ref={videoRef}
              src={room.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />
          ) : (
            <img
              src={room.imageUrl}
              alt={room.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          )}

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-charcoal-950/30 pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-900/90 border border-gold-500/40 text-gold-400 text-[10px] font-mono font-bold tracking-wider backdrop-blur-md shadow-lg pointer-events-auto">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>VERIFIED REAL ON-SITE FOOTAGE</span>
            </div>

            <div className="px-3 py-1 rounded-full bg-white/90 border border-charcoal-900/15 text-[11px] font-mono text-charcoal-900 font-bold shadow-md">
              {room.dimensions}
            </div>
          </div>

          {/* Bottom Video Controls HUD */}
          {room.videoUrl && (
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 pointer-events-auto">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-9 h-9 rounded-full bg-charcoal-900/90 hover:bg-gold-500 text-gold-400 hover:text-charcoal-950 border border-gold-500/40 flex items-center justify-center transition-all backdrop-blur-md shadow-lg"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 translate-x-0.5" />}
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="w-9 h-9 rounded-full bg-charcoal-900/90 hover:bg-gold-500 text-gold-400 hover:text-charcoal-950 border border-gold-500/40 flex items-center justify-center transition-all backdrop-blur-md shadow-lg"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>1080p 60FPS</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleFullscreen}
                className="w-9 h-9 rounded-full bg-charcoal-900/90 hover:bg-gold-500 text-gold-400 hover:text-charcoal-950 border border-gold-500/40 flex items-center justify-center transition-all backdrop-blur-md shadow-lg"
                aria-label="Toggle Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Specifications & Copy Column (5 cols) */}
      <div className={`lg:col-span-5 space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100 border border-gold-500/30 text-[11px] font-mono text-bronze-700 font-bold uppercase tracking-wider mb-2">
            <Video className="w-3 h-3 text-bronze-600" />
            <span>{room.capacity} · {room.bedType}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-black text-charcoal-950">
            {room.name}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-bronze-700 font-semibold mt-1">
            {room.subtitle}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans">
          {room.description}
        </p>

        <div className="space-y-2.5 pt-3 border-t border-charcoal-900/10">
          <span className="text-[10px] font-mono text-charcoal-500 uppercase tracking-widest block font-bold">
            ARCHITECTURAL SPECIFICATIONS
          </span>
          {room.keyFeatures.map((feat, fidx) => (
            <div key={fidx} className="flex items-start gap-2.5 text-xs text-charcoal-800">
              <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href="/booking"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-charcoal-950 font-black text-xs uppercase tracking-wider hover:opacity-95 transition-opacity shadow-lg shadow-gold-500/20"
          >
            <span>Reserve Residence</span>
            <ChevronRight className="w-4 h-4" />
          </a>
          <span className="text-[11px] font-mono text-charcoal-500">
            89 Lafiaji St · Dolphin Estate
          </span>
        </div>
      </div>
    </div>
  );
}
