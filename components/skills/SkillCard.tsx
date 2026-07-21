"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

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
        y: -8,
        transition: {
          duration: 0.25,
        },
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
          {title}
        </h3>

        <p className="mt-3 leading-7 text-zinc-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}