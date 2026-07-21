"use client";

import { motion } from "motion/react";

export default function ProjectsBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base Background */}
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
          x: [-20, 20, -20],
          y: [-10, 15, -10],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-32
          sm:-left-40
          lg:-left-[180px]
          top-28
          sm:top-36
          lg:top-40
          h-[260px]
          w-[260px]
          sm:h-[340px]
          sm:w-[340px]
          lg:h-[420px]
          lg:w-[420px]
          rounded-full
          bg-cyan-400/10
          blur-[90px]
          sm:blur-[110px]
          lg:blur-[140px]
        "
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [15, -15, 15],
          y: [10, -20, 10],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-32
          sm:-right-40
          lg:-right-[180px]
          bottom-16
          sm:bottom-20
          h-[240px]
          w-[240px]
          sm:h-[320px]
          sm:w-[320px]
          lg:h-[380px]
          lg:w-[380px]
          rounded-full
          bg-cyan-300/8
          blur-[85px]
          sm:blur-[110px]
          lg:blur-[130px]
        "
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-cyan-300/30"
          style={{
            left: `${10 + i * 11}%`,
            top: `${15 + (i % 4) * 18}%`,
          }}
          animate={{
            y: [-12, 12, -12],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-32 sm:h-36 lg:h-40 bg-gradient-to-b from-[#050505] to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-36 lg:h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}