"use client";

import { motion } from "motion/react";

export default function AboutBackground() {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 overflow-hidden"
        >
            {/* Soft Grid */}
            <div
                className="absolute inset-0 opacity-[0.045]"
                style={{
                    backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,.9) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,.9) 1px, transparent 1px)
    `,
                    backgroundSize: "72px 72px",
                    maskImage:
                        "radial-gradient(circle at center, black 55%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(circle at center, black 55%, transparent 100%)",
                }}
            />

            {/* Left Glow */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
          absolute
          -left-40
          top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-400/8
          blur-[130px]
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
          -right-44
          bottom-24
          h-[440px]
          w-[440px]
          rounded-full
          bg-sky-400/7
          blur-[140px]
        "
            />

            {/* Center Ambient */}
            <div
                className="
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.04]
          blur-[180px]
        "
            />

            {/* Small Floating Glow */}
            <motion.div
                animate={{
                    y: [0, -18, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
          absolute
          left-1/3
          top-1/4
          h-32
          w-32
          rounded-full
          bg-white/[0.03]
          blur-3xl
        "
            />

            {/* Top Fade */}
            <div
                className="absolute inset-x-0 top-0 h-40"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(5,5,5,0.85), transparent)",
                }}
            />

            {/* Bottom Fade */}
            <div
                className="absolute inset-x-0 bottom-0 h-40"
                style={{
                    background:
                        "linear-gradient(to top, rgba(5,5,5,0.9), transparent)",
                }}
            />
        </div>
    );
}