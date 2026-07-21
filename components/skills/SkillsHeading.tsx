"use client";

import { motion } from "motion/react";

export default function SkillsHeading() {
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
        className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
      >
        Technologies I Use to
        <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-400 bg-clip-text text-transparent">
          {" "}
          Build Modern
          <br />
          Digital Products
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
        className="max-w-2xl text-lg leading-8 text-zinc-400"
      >
        My toolkit focuses on building fast, scalable and production-ready
        applications—from beautiful frontends to powerful backends, databases,
        AI integrations and modern developer workflows.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
        className="h-px w-28 origin-left bg-gradient-to-r from-cyan-400 via-cyan-300/60 to-transparent"
      />
    </div>
  );
}