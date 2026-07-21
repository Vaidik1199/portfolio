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
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/12 blur-[120px]" />

      {/* Left Orb */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-120px] top-40 h-80 w-80 rounded-full bg-cyan-400/12 blur-[110px]"
      />

      {/* Right Orb */}
      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] top-28 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]"
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
        className="absolute bottom-[-220px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]"
      />

      {/* Radial Fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(9,9,11,0.15) 55%, rgba(9,9,11,0.85) 100%)",
        }}
      />
    </div>
  );
}