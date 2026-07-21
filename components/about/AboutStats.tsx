"use client";

import { motion } from "motion/react";

const stats = [
  {
    value: "5+",
    label: "Projects",
  },
  {
    value: "20+",
    label: "Technologies",
  },
  {
    value: "100+",
    label: "DSA Problems",
  },
  {
    value: "100%",
    label: "Commitment",
  },
];

export default function AboutStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-10 sm:mt-12 lg:mt-14"
    >
      <div
        className="
          grid
          grid-cols-2
          gap-6
          border-y
          border-white/8
          py-6
          sm:py-8
          md:grid-cols-4
        "
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.45,
            }}
            whileHover={{ y: -2 }}
            className="group text-center"
          >
            <h3
              className="
                bg-gradient-to-r
                from-cyan-300
                via-white
                to-cyan-400
                bg-clip-text
                text-2xl
                font-bold
                tracking-tight
                text-transparent
                transition-transform
                duration-300
                group-hover:scale-105
                sm:text-3xl
                md:text-4xl
              "
            >
              {stat.value}
            </h3>

            <p
              className="
                mt-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-zinc-500
                transition-colors
                duration-300
                group-hover:text-zinc-300
                sm:text-[11px]
                sm:tracking-[0.22em]
              "
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}