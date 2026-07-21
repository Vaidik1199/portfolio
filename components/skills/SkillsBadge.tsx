"use client";

import { motion } from "motion/react";
import { CodeXml } from "lucide-react";

import Badge from "@/components/ui/Badge";

export default function SkillsBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Badge
        className="
          group
          w-fit
          gap-2
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-400/5
          px-4
          py-2
          text-cyan-200
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-300/35
          hover:bg-cyan-400/10
          hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
        "
      >
        <CodeXml className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />

        <span className="text-xs font-semibold uppercase tracking-[0.18em]">
          Skills & Technologies
        </span>
      </Badge>
    </motion.div>
  );
}