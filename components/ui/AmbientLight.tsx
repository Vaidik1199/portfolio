"use client";

import { motion } from "motion/react";

export default function AmbientLight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Top Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          left-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.07]
          blur-[140px]
        "
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-180px]
          top-1/3
          h-80
          w-80
          rounded-full
          bg-cyan-400/[0.05]
          blur-[120px]
        "
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-180px]
          top-1/2
          h-96
          w-96
          rounded-full
          bg-sky-400/[0.05]
          blur-[140px]
        "
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-220px]
          left-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.05]
          blur-[150px]
        "
      />
    </div>
  );
}