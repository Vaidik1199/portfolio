"use client";

import Link from "next/link";

import { cn } from "@/lib/cn";

import { navLinks } from "./nav-links";

export default function DesktopNav() {
  return (
    <nav
      aria-label="Primary"
      className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1 backdrop-blur-2xl lg:flex"
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "relative rounded-xl px-4 py-2 text-sm font-medium text-zinc-400",
            "transition-all duration-300",
            "hover:bg-white/5 hover:text-white"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}