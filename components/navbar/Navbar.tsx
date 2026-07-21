"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import DesktopNav from "./DesktopNav";
import GlassNavbar from "./GlassNavbar";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest < 40) {
      setHidden(false);
      return;
    }

    setHidden(latest > previous);
  });

  return (
    <motion.header
      initial={{
        y: -120,
        opacity: 0,
        scale: 0.94,
      }}
      animate={{
        y: hidden ? -130 : 0,
        opacity: hidden ? 0.96 : 1,
        scale: hidden ? 0.985 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 24,
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <Container>
        <GlassNavbar className="mt-5">
          <div className="flex h-18 items-center justify-between px-5">
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
      </Container>
    </motion.header>
  );
}