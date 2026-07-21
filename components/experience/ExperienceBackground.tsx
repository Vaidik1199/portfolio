"use client";

import { motion } from "motion/react";

export default function ExperienceBackground() {
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
            "radial-gradient(circle at center, black 58%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 58%, transparent 100%)",
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
          lg:-left-52
          top-24
          sm:top-32
          lg:top-40
          h-[260px]
          w-[260px]
          sm:h-[360px]
          sm:w-[360px]
          lg:h-[460px]
          lg:w-[460px]
          rounded-full
          bg-cyan-400/[0.08]
          blur-[90px]
          sm:blur-[120px]
          lg:blur-[150px]
        "
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-32
          sm:-right-40
          lg:-right-56
          bottom-20
          h-[260px]
          w-[260px]
          sm:h-[360px]
          sm:w-[360px]
          lg:h-[430px]
          lg:w-[430px]
          rounded-full
          bg-sky-400/[0.07]
          blur-[90px]
          sm:blur-[120px]
          lg:blur-[145px]
        "
      />

      {/* Center Ambient */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
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
          sm:h-[620px]
          sm:w-[620px]
          lg:h-[760px]
          lg:w-[760px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.035]
          blur-[140px]
          sm:blur-[180px]
          lg:blur-[220px]
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
            left: `${8 + ((i * 9) % 84)}%`,
            top: `${12 + ((i * 8) % 72)}%`,
            filter: "blur(.4px)",
          }}
          animate={{
            y: [0, -16, 0],
            opacity: [0.2, 0.75, 0.2],
            scale: [1, 1.2, 1],
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
        className="absolute inset-x-0 bottom-0 h-32 sm:h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(5,5,5,0.95), transparent)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 10%, rgba(5,5,5,0.12) 60%, rgba(5,5,5,0.92) 100%)",
        }}
      />
    </div>
  );
}