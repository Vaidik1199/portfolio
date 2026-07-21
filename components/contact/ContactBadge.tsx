import { Mail } from "lucide-react";

import Badge from "@/components/ui/Badge";

export default function ContactBadge() {
  return (
    <Badge className="w-fit gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-200 backdrop-blur-xl">
      <Mail className="h-3.5 w-3.5" />

      <span className="text-xs font-medium tracking-wide">
        Contact Me
      </span>
    </Badge>
  );
}