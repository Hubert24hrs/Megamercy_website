"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Compass, Eye, Shield } from "lucide-react";

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeView, setActiveView] = useState<"aerial" | "penthouse" | "horizon">("aerial");
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Detect WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setIsWebGLSupported(false);
        setLoading(false);
        return;
      }
    } catch {
      setIsWebGLSupported(false);
      setLoading(false);
      return;
    }

    if (!containerRef.current) return;

    // Setup Three.js Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf4f1ea, 0.025);

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || 700;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 4, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(renderer.domElement);

    // Group for the entire architectural model
    const architectureGroup = new THREE.Group();
    scene.add(architectureGroup);

    // Modernist Penthouse Pavilion Geometry - Luminous Materials
    // Base Plinth / Terrace: Honed French Limestone
    const plinthGeo = new THREE.BoxGeometry(10, 0.4, 8);
    const limestoneMat = new THREE.MeshStandardMaterial({
      color: 0xefece4,
      roughness: 0.5,
      metalness: 0.1,
    });
    const plinth = new THREE.Mesh(plinthGeo, limestoneMat);
    plinth.position.y = -0.2;
    architectureGroup.add(plinth);

    // Glass walls / Pavilion enclosure: High-transmittance Crystal Glass
    const glassGeo = new THREE.BoxGeometry(8, 3.2, 6);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.92,
      opacity: 0.35,
      transparent: true,
      roughness: 0.05,
      ior: 1.52,
      reflectivity: 0.9,
    });
    const glassBox = new THREE.Mesh(glassGeo, glassMat);
    glassBox.position.y = 1.6;
    architectureGroup.add(glassBox);

    // Roof Slab with Cantilever: Champagne Bronze
    const roofGeo = new THREE.BoxGeometry(9.4, 0.3, 7.4);
    const bronzeMat = new THREE.MeshStandardMaterial({
      color: 0xc5a880,
      metalness: 0.75,
      roughness: 0.25,
    });
    const roof = new THREE.Mesh(roofGeo, bronzeMat);
    roof.position.y = 3.35;
    architectureGroup.add(roof);

    // Interior Warm Core: Smoked French Oak
    const coreGeo = new THREE.BoxGeometry(4, 2.8, 3);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xd6cbb8,
      roughness: 0.7,
      metalness: 0.15,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.set(-1, 1.4, 0);
    architectureGroup.add(core);

    // Geometric accent columns: Polished Champagne Bronze
    const colGeo = new THREE.CylinderGeometry(0.08, 0.08, 3.2, 16);
    for (let x = -3.8; x <= 3.8; x += 3.8) {
      for (let z = -2.8; z <= 2.8; z += 2.8) {
        const col = new THREE.Mesh(colGeo, bronzeMat);
        col.position.set(x, 1.6, z);
        architectureGroup.add(col);
      }
    }

    // Floating Golden Luxury Accent Orbs
    const orbsGroup = new THREE.Group();
    const orbGeo = new THREE.IcosahedronGeometry(0.35, 2);
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0xc5a880,
      emissive: 0x6e5229,
      emissiveIntensity: 0.25,
      metalness: 0.85,
      roughness: 0.2,
    });

    const orbs: THREE.Mesh[] = [];
    for (let i = 0; i < 6; i++) {
      const orb = new THREE.Mesh(orbGeo, orbMat);
      const angle = (i / 6) * Math.PI * 2;
      const radius = 5.5 + (i % 2) * 1.5;
      orb.position.set(Math.cos(angle) * radius, 1.5 + Math.sin(i) * 1.2, Math.sin(angle) * radius);
      orbsGroup.add(orb);
      orbs.push(orb);
    }
    scene.add(orbsGroup);

    // Ambient floating dust particles
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = Math.random() * 8;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xb38f5c,
      size: 0.045,
      transparent: true,
      opacity: 0.45,
      blending: THREE.NormalBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Daylight Lighting
    const ambientLight = new THREE.AmbientLight(0xf7f5f0, 2.2);
    scene.add(ambientLight);

    const sunKeyLight = new THREE.DirectionalLight(0xfffaee, 3.2);
    sunKeyLight.position.set(12, 16, 10);
    scene.add(sunKeyLight);

    const lagoonFillLight = new THREE.DirectionalLight(0xe0f2fe, 1.4);
    lagoonFillLight.position.set(-10, 8, -6);
    scene.add(lagoonFillLight);

    const interiorWarmLight = new THREE.PointLight(0xffeedb, 25, 12);
    interiorWarmLight.position.set(0, 2.5, 1);
    scene.add(interiorWarmLight);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);
    setLoading(false);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle rotation of the pavilion
      architectureGroup.rotation.y = elapsedTime * 0.04;

      // Orbiting decorative luxury orbs
      orbsGroup.rotation.y = -elapsedTime * 0.08;
      orbs.forEach((orb, idx) => {
        orb.position.y += Math.sin(elapsedTime * 2 + idx) * 0.003;
      });

      // Subtle particle float
      particles.rotation.y = elapsedTime * 0.015;

      // Mouse Parallax smoothing
      targetX = mouseX * 1.5;
      targetY = -mouseY * 0.8;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (4 + targetY - camera.position.y) * 0.05;
      camera.lookAt(0, 1.5, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] sm:h-[580px] md:h-[680px] lg:h-[780px] overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-b from-sky-50/60 via-sand-50/80 to-sand-100 border border-bronze-400/25 shadow-xl">
      {/* 3D Canvas Mount */}
      {isWebGLSupported ? (
        <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />
      ) : (
        /* Graceful 2D/CSS Fallback for low-power devices */
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-alabaster-100 via-transparent to-transparent" />
        </div>
      )}

      {/* Atmospheric Soft Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-alabaster-100/40 via-transparent to-transparent" />

      {/* Top Telemetry & Viewport Switchers */}
      <div className="absolute top-3 left-3 right-3 sm:top-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 sm:gap-4 z-20 pointer-events-auto">
        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel text-[10px] sm:text-xs font-mono tracking-wider text-charcoal-800 font-semibold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <span className="truncate">3D SPATIAL MODEL · IKOYI PENTHOUSE</span>
        </div>

        {/* Camera Views */}
        <div className="flex items-center gap-1 sm:gap-2 p-1 rounded-xl sm:rounded-2xl glass-panel text-[10px] sm:text-xs text-charcoal-700 shadow-sm overflow-x-auto">
          <button
            onClick={() => setActiveView("aerial")}
            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 ${
              activeView === "aerial"
                ? "bg-bronze-500 text-white font-bold shadow-md shadow-bronze-500/20"
                : "hover:text-bronze-600"
            }`}
          >
            <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Aerial</span>
          </button>
          <button
            onClick={() => setActiveView("penthouse")}
            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 ${
              activeView === "penthouse"
                ? "bg-bronze-500 text-white font-bold shadow-md shadow-bronze-500/20"
                : "hover:text-bronze-600"
            }`}
          >
            <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Core</span>
          </button>
          <button
            onClick={() => setActiveView("horizon")}
            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 ${
              activeView === "horizon"
                ? "bg-bronze-500 text-white font-bold shadow-md shadow-bronze-500/20"
                : "hover:text-bronze-600"
            }`}
          >
            <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Perimeter</span>
          </button>
        </div>
      </div>

      {/* Bottom Floating Hotspot HUD */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-2 sm:gap-4 z-20 pointer-events-none">
        <div className="p-3.5 sm:p-5 rounded-2xl glass-panel max-w-md pointer-events-auto backdrop-blur-xl border border-bronze-400/30 shadow-lg">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-bronze-600 mb-0.5 sm:mb-1 font-semibold">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-bronze-500" />
            <span>SPATIAL HIGHLIGHT</span>
          </div>
          <h4 className="text-sm sm:text-lg font-serif font-bold text-charcoal-900">
            {activeView === "aerial" && "Cantilevered Penthouse Terrace"}
            {activeView === "penthouse" && "Acoustic Living Pavilion"}
            {activeView === "horizon" && "Diplomatic Perimeter & Lagoon"}
          </h4>
          <p className="text-[11px] sm:text-xs text-charcoal-600 mt-1 leading-relaxed line-clamp-2 sm:line-clamp-none">
            {activeView === "aerial" &&
              "Direct transition between interior living volume and the private open-air terrace overlooking Five Cowries Creek and the Atlantic horizon."}
            {activeView === "penthouse" &&
              "Triple-glazed acoustic shielding, Bang & Olufsen spatial audio matrix, and custom Italian marble millwork."}
            {activeView === "horizon" &&
              "Protected by 24/7 armed gated estate protocol, biometric access encryption, and redundant power infrastructure."}
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-3 pointer-events-auto">
          <div className="px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl glass-panel-emerald text-[10px] sm:text-xs font-mono text-emerald-800 font-semibold flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>FPS: 60 · REALTIME</span>
          </div>
        </div>
      </div>
    </div>
  );
}
