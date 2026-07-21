"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}

export default function SkillCard({
  title,
  description,
  icon: Icon,
  skills,
}: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        flex
        min-h-[360px]
        sm:min-h-[390px]
        lg:min-h-[430px]
        flex-col
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

      <div className="relative z-10 flex h-full flex-col">
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
          {title}
        </h3>

        <div className="mt-3 sm:mt-4 h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent opacity-70 transition-all duration-500 group-hover:w-20" />

        <p className="mt-4 sm:mt-5 text-[15px] leading-7 sm:text-base sm:leading-8 text-zinc-400">
          {description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6 sm:pt-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-3
                py-1.5
                text-xs
                sm:px-3.5
                sm:text-sm
                font-medium
                text-zinc-300
                transition-all
                duration-300
                group-hover:border-cyan-400/20
                group-hover:bg-cyan-400/5
                group-hover:text-white
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}