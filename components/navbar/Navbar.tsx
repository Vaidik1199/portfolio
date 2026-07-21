"use client";

import { motion } from "motion/react";

import Button from "@/components/ui/Button";

import DesktopNav from "./DesktopNav";
import GlassNavbar from "./GlassNavbar";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-6 z-50 flex justify-center px-4"
    >
      <div className="w-full max-w-7xl">
        <GlassNavbar>
          <div className="flex h-18 items-center justify-between px-6">
            <Logo />

            <DesktopNav />

            <div className="flex items-center gap-2">
              <Button
                className="
                  hidden
                  lg:inline-flex
                  transition-all
                  duration-500
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(103,232,249,.30)]
                "
                onClick={() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's Talk
              </Button>

              <MobileNav />
            </div>
          </div>
        </GlassNavbar>
      </div>
    </motion.header>
  );
}