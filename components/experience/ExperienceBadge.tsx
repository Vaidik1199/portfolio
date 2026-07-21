import { BriefcaseBusiness } from "lucide-react";

import Badge from "@/components/ui/Badge";

export default function ExperienceBadge() {
  return (
    <Badge className="w-fit gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-violet-200 backdrop-blur-xl">
      <BriefcaseBusiness className="h-3.5 w-3.5" />

      <span className="text-xs font-medium tracking-wide">
        Experience & Journey
      </span>
    </Badge>
  );
}