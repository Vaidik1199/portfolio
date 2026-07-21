import { Sparkles } from "lucide-react";

import Badge from "@/components/ui/Badge";

export default function HeroBadge() {
  return (
    <Badge
      className="
        mt-5
        sm:mt-6
        lg:mt-8
        group
        w-fit
        gap-2
        rounded-full
        border-cyan-400/20
        bg-cyan-400/5
        px-3
        py-1.5
        sm:px-4
        sm:py-2
        text-cyan-200
        shadow-[0_0_25px_rgba(103,232,249,0.08)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-300/30
        hover:bg-cyan-400/10
        hover:shadow-[0_0_35px_rgba(103,232,249,0.15)]
      "
    >
      <Sparkles
        className="
          h-3
          w-3
          sm:h-3.5
          sm:w-3.5
          fill-cyan-300
          text-cyan-300
          transition-transform
          duration-300
          group-hover:rotate-12
          group-hover:scale-110
        "
      />

      <span className="text-[11px] sm:text-xs font-medium tracking-[0.06em] sm:tracking-[0.08em]">
        Available for Internships & Freelance
      </span>
    </Badge>
  );
}