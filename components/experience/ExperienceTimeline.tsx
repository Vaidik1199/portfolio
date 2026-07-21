"use client";

import { motion } from "motion/react";

import { experiences } from "./experience.data";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Vertical Line */}
      <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500 via-violet-400/40 to-transparent md:block" />

      <div className="space-y-10">
        {experiences.map((experience, index) => (
          <motion.div
            key={`${experience.title}-${index}`}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative md:pl-16"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-6 hidden md:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/10 backdrop-blur-xl">
                <div className="h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.9)]" />
              </div>
            </div>

            {/* Card */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-[0_0_40px_rgba(167,139,250,0.08)]">
              <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-300">
                {experience.year}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-white transition-colors group-hover:text-violet-300">
                {experience.title}
              </h3>

              <p className="mt-2 font-medium text-zinc-300">
                {experience.organization}
              </p>

              <p className="mt-5 leading-7 text-zinc-400">
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}