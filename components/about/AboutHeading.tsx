"use client";

import { motion } from "motion/react";

export default function AboutHeading() {
  return (
    <div className="space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          max-w-4xl
          text-4xl
          font-bold
          leading-[1.08]
          tracking-tight
          text-white
          sm:text-5xl
          lg:text-6xl
        "
      >
        Turning Ideas Into{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-400 bg-clip-text text-transparent">
          Beautiful &
          <br />
          Scalable Software
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          h-px
          w-32
          origin-left
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-cyan-300
          to-transparent
        "
      />
    </div>
  );
}