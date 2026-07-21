"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";

import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        flex-wrap
        items-center
        gap-3
        pt-4
      "
    >
      <Button
        size="lg"
        className="
          group
          shrink-0
          bg-cyan-400
          text-black
          hover:bg-cyan-300
          hover:shadow-[0_0_35px_rgba(103,232,249,0.35)]
        "
        asChild
      >
        <Link href="#projects">
          View Projects

          <ArrowRight
            className="
              ml-2
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </Button>

      <Button
        size="lg"
        variant="secondary"
        className="group shrink-0"
        asChild
      >
        <Link
          href="/resume/Vaidik-Choudhary-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume

          <Download
            className="
              ml-2
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-y-0.5
            "
          />
        </Link>
      </Button>
    </motion.div>
  );
}