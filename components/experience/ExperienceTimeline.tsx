"use client";

import { motion } from "motion/react";

import { experiences } from "./experience.data";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-cyan-400/40 to-transparent md:block lg:left-5" />

      <div className="space-y-8 sm:space-y-10 lg:space-y-12">
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
            <div className="absolute left-0 top-7 hidden md:flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-xl lg:h-10 lg:w-10">
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(103,232,249,0.9)] lg:h-3 lg:w-3" />
              </div>
            </div>

            {/* Card */}
            <div
              className="
                group
                rounded-2xl
                sm:rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
                sm:p-6
                lg:p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-white/[0.045]
                hover:shadow-[0_0_45px_rgba(103,232,249,0.08)]
              "
            >
              {/* Year */}
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  tracking-wide
                  text-cyan-300
                  sm:px-4
                  sm:text-sm
                "
              >
                {experience.year}
              </span>

              {/* Title */}
              <h3
                className="
                  mt-4
                  text-xl
                  font-bold
                  leading-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-cyan-300
                  sm:text-2xl
                "
              >
                {experience.title}
              </h3>

              {/* Organization */}
              <p
                className="
                  mt-2
                  text-sm
                  font-medium
                  text-zinc-300
                  sm:text-base
                "
              >
                {experience.organization}
              </p>

              {/* Description */}
              <p
                className="
                  mt-5
                  text-[15px]
                  leading-7
                  text-zinc-400
                  sm:text-base
                  sm:leading-8
                "
              >
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}