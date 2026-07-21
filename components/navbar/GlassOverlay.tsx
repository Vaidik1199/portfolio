"use client";

import { motion } from "motion/react";

export default function GlassOverlay() {
  return (
    <>
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[32px] overflow-hidden">
        <motion.div
          animate={{
            x: ["-30%", "30%", "-30%"],
            y: ["-15%", "10%", "-15%"],
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
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-300/10
            blur-[120px]
          "
        />
      </div>

      {/* Moving Reflection */}
      <motion.div
        animate={{
          x: ["-120%", "140%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
        className="
          pointer-events-none
          absolute
          top-[-60%]
          h-[220%]
          w-32
          rotate-[18deg]
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
          blur-2xl
          opacity-60
        "
      />

      {/* Edge Light */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[32px]
          ring-1
          ring-cyan-300/15
        "
      />

      {/* Inner Glass Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[32px]
          bg-gradient-to-b
          from-white/8
          via-transparent
          to-black/10
        "
      />
    </>
  );
}