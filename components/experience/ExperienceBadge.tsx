import { BriefcaseBusiness } from "lucide-react";

import Badge from "@/components/ui/Badge";

export default function ExperienceBadge() {
  return (
    <Badge
      className="
        group
        w-fit
        gap-2
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/5
        px-3
        py-1.5
        sm:px-4
        sm:py-2
        text-cyan-200
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-300/35
        hover:bg-cyan-400/10
        hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
      "
    >
      <BriefcaseBusiness
        className="
          h-3
          w-3
          sm:h-3.5
          sm:w-3.5
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.18em]">
        Experience & Journey
      </span>
    </Badge>
  );
}