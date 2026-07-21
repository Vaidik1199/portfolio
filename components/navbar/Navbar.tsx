"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
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
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <Container>
        <div className="mt-5 flex h-18 items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,.35)]">
          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-2">
            <Button
              className="hidden lg:inline-flex"
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
      </Container>
    </motion.header>
  );
}