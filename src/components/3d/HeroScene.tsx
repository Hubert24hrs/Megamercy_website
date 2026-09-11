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
    scene.fog = new THREE.FogExp2(0x08090c, 0.04);

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || 700;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 4, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(renderer.domElement);

    // Group for the entire architectural model
    const architectureGroup = new THREE.Group();
    scene.add(architectureGroup);

    // Modernist Penthouse Pavilion Geometry
    // Base Plinth / Terrace
    const plinthGeo = new THREE.BoxGeometry(10, 0.4, 8);
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x0f1118,
      roughness: 0.2,
      metalness: 0.8,
    });
    const plinth = new THREE.Mesh(plinthGeo, darkMat);
    plinth.position.y = -0.2;
    architectureGroup.add(plinth);

    // Glass walls / Pavilion enclosure
    const glassGeo = new THREE.BoxGeometry(8, 3.2, 6);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x1a2130,
      transmission: 0.85,
      opacity: 0.7,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
      reflectivity: 0.8,
    });
    const glassBox = new THREE.Mesh(glassGeo, glassMat);
    glassBox.position.y = 1.6;
    architectureGroup.add(glassBox);

    // Roof Slab with Cantilever
    const roofGeo = new THREE.BoxGeometry(9.4, 0.3, 7.4);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.25,
    });
    const roof = new THREE.Mesh(roofGeo, goldMat);
    roof.position.y = 3.35;
    architectureGroup.add(roof);

    // Interior Warm Core
    const coreGeo = new THREE.BoxGeometry(4, 2.8, 3);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x221808,
      roughness: 0.4,
      metalness: 0.5,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.set(-1, 1.4, 0);
    architectureGroup.add(core);

    // Geometric accent columns
    const colGeo = new THREE.CylinderGeometry(0.08, 0.08, 3.2, 16);
    for (let x = -3.8; x <= 3.8; x += 3.8) {
      for (let z = -2.8; z <= 2.8; z += 2.8) {
        const col = new THREE.Mesh(colGeo, goldMat);
        col.position.set(x, 1.6, z);
        architectureGroup.add(col);
      }
    }

    // Floating Golden Luxury Accent Orbs
    const orbsGroup = new THREE.Group();
    const orbGeo = new THREE.IcosahedronGeometry(0.35, 2);
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      emissive: 0x8c711c,
      emissiveIntensity: 0.4,
      metalness: 0.9,
      roughness: 0.1,
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
      color: 0xf3e5ab,
      size: 0.06,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0a101d, 1.5);
    scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xf5e6b3, 40, 20);
    goldPointLight.position.set(0, 3, 2);
    scene.add(goldPointLight);

    const emeraldAccentLight = new THREE.DirectionalLight(0x00c48c, 1.8);
    emeraldAccentLight.position.set(-8, 10, -5);
    scene.add(emeraldAccentLight);

    const keyLight = new THREE.DirectionalLight(0xfff4e0, 2.5);
    keyLight.position.set(10, 12, 10);
    scene.add(keyLight);

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
    <div className="relative w-full h-[640px] md:h-[760px] lg:h-[840px] overflow-hidden rounded-3xl bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 border border-gold-500/15 shadow-2xl">
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
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />
        </div>
      )}

      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/60" />
      <div className="absolute inset-0 pointer-events-none bg-radial-glow" />

      {/* Top Telemetry & Viewport Switchers */}
      <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 z-20 pointer-events-auto">
        <div className="flex items-center gap-3 px-4 py-2 rounded-full glass-panel-subtle text-xs font-mono tracking-wider text-gold-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>3D SPATIAL MODEL · IKOYI PENTHOUSE RESIDENCE</span>
        </div>

        {/* Camera Views */}
        <div className="hidden sm:flex items-center gap-2 p-1.5 rounded-2xl glass-panel text-xs text-pearl-300">
          <button
            onClick={() => setActiveView("aerial")}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              activeView === "aerial"
                ? "bg-gold-500 text-obsidian-950 font-semibold shadow-lg shadow-gold-500/20"
                : "hover:text-gold-300"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Aerial Vista</span>
          </button>
          <button
            onClick={() => setActiveView("penthouse")}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              activeView === "penthouse"
                ? "bg-gold-500 text-obsidian-950 font-semibold shadow-lg shadow-gold-500/20"
                : "hover:text-gold-300"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Penthouse Core</span>
          </button>
          <button
            onClick={() => setActiveView("horizon")}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              activeView === "horizon"
                ? "bg-gold-500 text-obsidian-950 font-semibold shadow-lg shadow-gold-500/20"
                : "hover:text-gold-300"
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Fortress Perimeter</span>
          </button>
        </div>
      </div>

      {/* Bottom Floating Hotspot HUD */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 z-20 pointer-events-none">
        <div className="p-5 rounded-2xl glass-panel max-w-md pointer-events-auto backdrop-blur-xl border border-gold-500/20">
          <div className="flex items-center gap-2 text-xs font-mono text-gold-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPATIAL HIGHLIGHT</span>
          </div>
          <h4 className="text-lg font-serif font-bold text-pearl-100">
            {activeView === "aerial" && "Cantilevered Penthouse Terrace"}
            {activeView === "penthouse" && "Acoustic Living Pavilion"}
            {activeView === "horizon" && "Diplomatic Perimeter & Lagoon"}
          </h4>
          <p className="text-xs text-pearl-400 mt-1 leading-relaxed">
            {activeView === "aerial" &&
              "Seamless integration of outdoor private lounging with panoramic vistas of the Lagos Lagoon, Bourdillon corridor, and Atlantic horizon."}
            {activeView === "penthouse" &&
              "Triple-glazed acoustic shielding, Bang & Olufsen spatial audio matrix, and custom Italian marble millwork."}
            {activeView === "horizon" &&
              "Protected by 24/7 armed gated estate protocol, biometric access encryption, and redundant power infrastructure."}
          </p>
        </div>

        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="px-4 py-2.5 rounded-2xl glass-panel-emerald text-xs font-mono text-emerald-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>FPS: 60 · REALTIME SHADERS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
