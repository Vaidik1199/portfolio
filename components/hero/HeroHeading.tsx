"use client";
import { motion } from "motion/react";

export default function HeroHeading() {
  return (
    <div className="space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Building
        <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-400 bg-clip-text text-transparent">
          {" "}
          Digital Products{" "}
        </span>
        That People Love to Use.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{
          delay: 0.25,
          duration: 0.8,
        }}
        className="h-px w-32 origin-left bg-gradient-to-r from-cyan-400 via-cyan-300/60 to-transparent"
      />
    </div>
  );
}