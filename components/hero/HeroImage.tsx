"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.25,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center md:h-[400px] md:w-[400px]"
    >
      {/* Main Ambient Glow */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/15 blur-[120px]" />

      {/* Secondary Glow */}
      <div className="absolute h-64 w-64 rounded-full bg-cyan-300/10 blur-[70px]" />

      {/* Soft Inner Light */}
      <div className="absolute h-[310px] w-[310px] rounded-full bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent" />

      {/* Animated Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <svg
          viewBox="0 0 420 420"
          className="h-full w-full"
        >
          <circle
            cx="210"
            cy="210"
            r="188"
            fill="none"
            stroke="rgba(103,232,249,.12)"
            strokeWidth="1.2"
            strokeDasharray="8 12"
          />
        </svg>
      </motion.div>

      {/* Orbit Arc */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <svg
          viewBox="0 0 420 420"
          className="h-full w-full"
        >
          <path
            d="
              M210 22
              A188 188 0 0 1 380 180
            "
            fill="none"
            stroke="rgba(103,232,249,.55)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="
              M45 250
              A188 188 0 0 0 170 396
            "
            fill="none"
            stroke="rgba(255,255,255,.18)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Orbiting Particle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <div className="absolute left-1/2 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,.9)]" />
      </motion.div>

      {/* Orbiting Particle */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <div className="absolute bottom-6 right-10 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,.8)]" />
      </motion.div>

      {/* Glass Ring */}
      <div className="absolute inset-5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm" />

      {/* Profile Image */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.03,
        }}
        className="
          group
          relative
          z-20
          overflow-hidden
          rounded-full
          border
          border-white/15
          bg-white/[0.04]
          p-3
          backdrop-blur-xl
          shadow-[0_35px_100px_rgba(0,0,0,.45),0_0_60px_rgba(103,232,249,.18)]
        "
      >
        {/* Glass Reflection */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-10
            top-2
            h-14
            rounded-full
            bg-gradient-to-b
            from-white/35
            via-white/10
            to-transparent
            blur-xl
          "
        />

        <Image
          src="/images/profile.jpeg"
          alt="Vaidik Choudhary"
          width={340}
          height={340}
          priority
          className="rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
                {/* Image Border Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full border border-cyan-300/10" />
      </motion.div>

      {/* Dotted Halo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-12px]"
      >
        <svg
          viewBox="0 0 440 440"
          className="h-full w-full"
        >
          <circle
            cx="220"
            cy="220"
            r="205"
            fill="none"
            stroke="rgba(255,255,255,.18)"
            strokeWidth="2"
            strokeDasharray="2 12"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Floating Accent 1 */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-5 top-16"
      >
        <div className="h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,.9)]" />
      </motion.div>

      {/* Floating Accent 2 */}
      <motion.div
        animate={{
          y: [0, 16, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-8 top-28"
      >
        <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,.85)]" />
      </motion.div>

      {/* Floating Accent 3 */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-14 left-12"
      >
        <div className="h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(103,232,249,.8)]" />
      </motion.div>

      {/* Floating Accent 4 */}
      <motion.div
        animate={{
          y: [0, 14, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10"
      >
        <div className="h-3 w-3 rounded-full bg-cyan-300/80 shadow-[0_0_20px_rgba(103,232,249,.9)]" />
      </motion.div>

      {/* Top Ambient Blur */}
      <div className="absolute -top-10 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />

      {/* Bottom Ambient Blur */}
      <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />

      {/* Left Ambient Blur */}
      <div className="absolute left-0 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[70px]" />

      {/* Right Ambient Blur */}
      <div className="absolute right-0 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[70px]" />
    </motion.div>
  );
}