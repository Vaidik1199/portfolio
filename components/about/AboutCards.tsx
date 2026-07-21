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
      "Building modern, scalable and responsive web applications using React, Next.js, TypeScript, Node.js and modern development practices.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Data Science",
    description:
      "Exploring artificial intelligence, machine learning and data-driven solutions while continuously expanding my technical expertise.",
  },
  {
    icon: Rocket,
    title: "Product Building",
    description:
      "I enjoy transforming ideas into polished products with clean architecture, intuitive user experiences and production-ready code.",
  },
  {
    icon: Sparkles,
    title: "Always Learning",
    description:
      "Technology evolves every day, and so do I. I'm constantly learning new tools, frameworks and best practices to become a better engineer.",
  },
];

export default function AboutCards() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-cyan-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {card.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {card.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}