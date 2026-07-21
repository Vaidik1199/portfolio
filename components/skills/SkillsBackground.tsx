"use client";

import { motion } from "motion/react";

export default function SkillsBackground() {
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
            linear-gradient(to right, rgba(255,255,255,.9) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.9) 1px, transparent 1px)
          `,
          backgroundSize: "68px 68px",
          maskImage:
            "radial-gradient(circle at center, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 60%, transparent 100%)",
        }}
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-32
          sm:-left-40
          top-20
          sm:top-24
          h-[280px]
          w-[280px]
          sm:h-[420px]
          sm:w-[420px]
          rounded-full
          bg-cyan-400/[0.07]
          blur-[100px]
          sm:blur-[150px]
        "
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-36
          sm:-right-44
          bottom-16
          sm:bottom-20
          h-[320px]
          w-[320px]
          sm:h-[460px]
          sm:w-[460px]
          rounded-full
          bg-sky-400/[0.06]
          blur-[120px]
          sm:blur-[170px]
        "
      />

      {/* Center Ambient */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          sm:h-[700px]
          sm:w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.035]
          blur-[140px]
          sm:blur-[190px]
        "
      />

      {/* Floating Particles */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-cyan-300/40"
          style={{
            width: `${2 + (i % 2)}px`,
            height: `${2 + (i % 2)}px`,
            left: `${8 + ((i * 7) % 84)}%`,
            top: `${10 + ((i * 9) % 70)}%`,
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Top Fade */}
      <div
        className="absolute inset-x-0 top-0 h-32 sm:h-44"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,5,0.9), transparent)",
        }}
      />

      {/* Bottom Fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 sm:h-44"
        style={{
          background:
            "linear-gradient(to top, rgba(5,5,5,0.9), transparent)",
        }}
      />
    </div>
  );
}