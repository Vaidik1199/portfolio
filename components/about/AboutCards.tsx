"use client";

import {
  BrainCircuit,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const cards = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building fast, scalable, and responsive web applications using React, Next.js, TypeScript, Node.js, and modern engineering practices.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Data Science",
    description:
      "Exploring Artificial Intelligence, Machine Learning, and data-driven solutions while continuously expanding my technical expertise.",
  },
  {
    icon: Rocket,
    title: "Product Building",
    description:
      "Transforming ideas into polished digital products with clean architecture, intuitive experiences, and production-ready code.",
  },
  {
    icon: Sparkles,
    title: "Always Learning",
    description:
      "Technology evolves every day, and so do I. I enjoy learning new frameworks, tools, and best practices to become a better engineer.",
  },
];

export default function AboutCards() {
  return (
    <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:mt-16 lg:gap-7">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: index * 0.12,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -6,
              scale: 1.015,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              sm:rounded-3xl
              border
              border-white/10
              bg-white/[0.035]
              p-6
              sm:p-7
              lg:p-8
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:border-cyan-400/30
              hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]
            "
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent" />
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            {/* Top Accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div
                className="
                  flex
                  h-14
                  w-14
                  sm:h-16
                  sm:w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  text-cyan-300
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:border-cyan-300/40
                  group-hover:bg-cyan-400/15
                  group-hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
                "
              >
                <Icon className="h-7 w-7 sm:h-8 sm:w-8 transition-colors duration-500 group-hover:text-cyan-200" />
              </div>

              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-semibold tracking-tight text-white">
                {card.title}
              </h3>

              <div className="mt-3 sm:mt-4 h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent opacity-70 transition-all duration-500 group-hover:w-20" />

              <p className="mt-4 sm:mt-5 text-[15px] leading-7 sm:text-base sm:leading-8 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                {card.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}