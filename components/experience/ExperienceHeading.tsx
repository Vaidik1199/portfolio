"use client";

import { motion } from "motion/react";

export default function ExperienceHeading() {
  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
      >
        My
        <span className="bg-gradient-to-r from-violet-300 via-white to-violet-400 bg-clip-text text-transparent">
          {" "}
          Journey
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          delay: 0.15,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-3xl text-lg leading-8 text-zinc-400"
      >
        Every step has been an opportunity to learn, build, and grow. From
        pursuing Artificial Intelligence and Data Science to creating
        full-stack applications and AI-powered solutions, my journey is driven
        by curiosity, continuous improvement, and solving real-world problems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
        className="h-px w-28 origin-left bg-gradient-to-r from-violet-400 via-violet-300/60 to-transparent"
      />
    </div>
  );
}