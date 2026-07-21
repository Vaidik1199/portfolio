"use client";

import { motion } from "motion/react";

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.9) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.9) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at center, black 45%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 45%, transparent 100%)",
        }}
      />

      {/* Top Ambient Glow */}
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-[140px]" />

      {/* Left Orb */}
      <motion.div
        animate={{
          x: [0, 45, 0],
          y: [0, -35, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-120px] top-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]"
      />

      {/* Right Orb */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] top-24 h-80 w-80 rounded-full bg-sky-400/8 blur-[120px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-240px] left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]"
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 0.6px, transparent 0.6px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(5,5,5,0.12) 55%, rgba(5,5,5,0.92) 100%)",
        }}
      />
    </div>
  );
}