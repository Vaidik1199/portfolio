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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center md:h-[430px] md:w-[430px]"
    >
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[90px]" />

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-3 rounded-full border border-cyan-400/20 border-dashed"
      />

      {/* Floating Ring */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-8 rounded-full border border-white/10"
      />

      {/* Image */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 overflow-hidden rounded-full border border-white/15 bg-white/5 p-3 shadow-[0_25px_80px_rgba(0,255,255,.18)] backdrop-blur-xl"
      >
        <Image
          src="/images/profile.jpeg"
          alt="Vaidik Choudhary"
          width={340}
          height={340}
          priority
          className="rounded-full object-cover"
        />
      </motion.div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-8 h-36 w-36 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute -top-8 -right-6 h-28 w-28 rounded-full bg-blue-500/15 blur-3xl" />
    </motion.div>
  );
}