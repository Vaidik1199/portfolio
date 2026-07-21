import { Sparkles } from "lucide-react";

import Badge from "@/components/ui/Badge";

export default function HeroBadge() {
  return (
    <Badge className="w-fit gap-2 rounded-full border-cyan-400/15 bg-cyan-400/5 px-4 py-2 text-cyan-200 backdrop-blur-xl">
      <Sparkles className="h-3.5 w-3.5 fill-cyan-300 text-cyan-300" />

      <span className="text-xs font-medium tracking-wide">
        Available for Internships & Freelance
      </span>
    </Badge>
  );
}