"use client";

import { motion } from "motion/react";

export default function HeroHeading() {
  return (
    <div className="space-y-4 sm:space-y-5 lg:space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          max-w-5xl
          text-4xl
          font-extrabold
          leading-[0.95]
          tracking-[-0.05em]
          text-white
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-8xl
        "
      >
        Building{" "}
        <span
          className="
            bg-gradient-to-r
            from-cyan-300
            via-white
            to-cyan-400
            bg-clip-text
            text-transparent
          "
        >
          Digital Products
        </span>{" "}
        That People Love to Use.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.9,
          ease: "easeOut",
        }}
        className="
          relative
          h-px
          w-24
          sm:w-32
          md:w-36
          lg:w-40
          origin-left
          overflow-hidden
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-cyan-300/70
          to-transparent
        "
      >
        <motion.div
          animate={{
            x: ["-120%", "120%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-y-0
            w-16
            bg-gradient-to-r
            from-transparent
            via-white/70
            to-transparent
            blur-sm
          "
        />
      </motion.div>
    </div>
  );
}