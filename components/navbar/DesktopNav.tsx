"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { navLinks } from "./nav-links";

export default function DesktopNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.55,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <nav
      aria-label="Primary"
      className=" hidden
        items-center
        gap-1
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-1
        backdrop-blur-2xl
        shadow-inner
        lg:flex
      "
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "relative overflow-hidden rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300",
            activeSection === link.href
              ? "text-white"
              : "text-zinc-400 hover:text-white hover:-translate-y-0.5"
          )}
        >
          {activeSection === link.href && (
            <motion.span
              layoutId="active-nav"
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
              }}
              className="
                absolute
                inset-0
                rounded-xl
                border
                border-cyan-400/20
                bg-cyan-400/10
                shadow-[0_0_18px_rgba(103,232,249,.12)]
              "
            />
          )}

          <span className="relative z-10">
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}