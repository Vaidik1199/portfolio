"use client";

import { motion } from "motion/react";

const stats = [
  {
    value: "15+",
    label: "Projects Built",
  },
  {
    value: "20+",
    label: "Technologies",
  },
  {
    value: "300+",
    label: "DSA Problems",
  },
  {
    value: "100%",
    label: "Learning Mindset",
  },
];

export default function AboutStats() {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: index * 0.1,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-colors hover:border-cyan-400/30"
        >
          <h3 className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-5xl font-bold text-transparent">
            {stat.value}
          </h3>

          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-zinc-400 group-hover:text-zinc-300">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}