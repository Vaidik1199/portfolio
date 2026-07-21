"use client";

import { motion } from "motion/react";

export default function SkillsHeading() {
  return (
    <div className="space-y-5 sm:space-y-6 lg:space-y-8">
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
          text-3xl
          font-bold
          leading-[1.1]
          tracking-tight
          text-white
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
        "
      >
        Technologies I Use to{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-400 bg-clip-text text-transparent">
          Build Modern
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Digital Products
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          delay: 0.15,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          max-w-3xl
          text-[15px]
          leading-7
          text-zinc-400
          sm:text-base
          sm:leading-8
          lg:text-lg
        "
      >
        My toolkit focuses on building fast, scalable, and production-ready
        applications—from beautiful frontends to robust backends, databases,
        AI integrations, and modern development workflows.
      </motion.p>

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
          w-24
          sm:w-28
          lg:w-32
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