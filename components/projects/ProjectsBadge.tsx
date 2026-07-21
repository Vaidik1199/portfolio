import { FolderGit2 } from "lucide-react";

import Badge from "@/components/ui/Badge";

export default function ProjectsBadge() {
  return (
    <Badge className="w-fit gap-2 rounded-full border-cyan-400/15 bg-cyan-400/5 px-4 py-2 text-cyan-200 backdrop-blur-xl">
      <FolderGit2 className="h-3.5 w-3.5" />

      <span className="text-xs font-medium tracking-wide">
        Featured Projects
      </span>
    </Badge>
  );
}