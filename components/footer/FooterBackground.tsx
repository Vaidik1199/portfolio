"use client";

import { motion } from "motion/react";

export default function FooterBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at center, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 60%, transparent 100%)",
        }}
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-0
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.05]
          blur-[140px]
          sm:h-[620px]
          sm:w-[620px]
          sm:blur-[180px]
          lg:h-[760px]
          lg:w-[760px]
          lg:blur-[220px]
        "
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-32
          bottom-0
          h-[250px]
          w-[250px]
          rounded-full
          bg-cyan-400/[0.05]
          blur-[90px]
          sm:h-[360px]
          sm:w-[360px]
          sm:blur-[120px]
          lg:h-[440px]
          lg:w-[440px]
          lg:blur-[150px]
        "
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-36
          top-10
          h-[260px]
          w-[260px]
          rounded-full
          bg-sky-400/[0.05]
          blur-[90px]
          sm:h-[360px]
          sm:w-[360px]
          sm:blur-[120px]
          lg:h-[440px]
          lg:w-[440px]
          lg:blur-[150px]
        "
      />

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-cyan-300/35"
          style={{
            width: `${2 + (i % 2)}px`,
            height: `${2 + (i % 2)}px`,
            left: `${10 + ((i * 9) % 80)}%`,
            top: `${15 + ((i * 7) % 65)}%`,
            filter: "blur(.4px)",
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.75, 0.2],
            scale: [1, 1.25, 1],
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
        className="absolute inset-x-0 top-0 h-32 sm:h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,5,0.95), transparent)",
        }}
      />

      {/* Bottom Fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 sm:h-36"
        style={{
          background:
            "linear-gradient(to top, rgba(5,5,5,0.98), transparent)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 15%, rgba(5,5,5,0.12) 60%, rgba(5,5,5,0.92) 100%)",
        }}
      />
    </div>
  );
}