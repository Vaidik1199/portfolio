"use client";

import { motion } from "motion/react";

export default function ContactBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at center, black 58%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 58%, transparent 100%)",
        }}
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-36
          top-20
          h-[280px]
          w-[280px]
          rounded-full
          bg-cyan-400/[0.08]
          blur-[100px]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[140px]
          lg:h-[520px]
          lg:w-[520px]
          lg:blur-[170px]
        "
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-40
          bottom-0
          h-[260px]
          w-[260px]
          rounded-full
          bg-sky-400/[0.08]
          blur-[95px]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[140px]
          lg:h-[520px]
          lg:w-[520px]
          lg:blur-[170px]
        "
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.04]
          blur-[150px]
          sm:h-[650px]
          sm:w-[650px]
          sm:blur-[190px]
          lg:h-[820px]
          lg:w-[820px]
          lg:blur-[240px]
        "
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-cyan-300/40"
          style={{
            width: `${2 + (i % 2)}px`,
            height: `${2 + (i % 2)}px`,
            left: `${8 + ((i * 8) % 84)}%`,
            top: `${10 + ((i * 7) % 76)}%`,
            filter: "blur(.4px)",
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Top Fade */}
      <div
        className="absolute inset-x-0 top-0 h-36"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,5,.96), transparent)",
        }}
      />

      {/* Bottom Fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-36"
        style={{
          background:
            "linear-gradient(to top, rgba(5,5,5,.96), transparent)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 12%, rgba(5,5,5,.12) 60%, rgba(5,5,5,.92) 100%)",
        }}
      />
    </div>
  );
}