"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import { navLinks } from "./nav-links";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        aria-label="Toggle navigation"
        className="lg:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </Button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
              }}
              className="
                fixed
                right-0
                top-0
                z-50
                flex
                h-dvh
                w-[85vw]
                max-w-[340px]
                flex-col
                border-l
                border-white/10
                bg-[#080808]/95
                p-6
                backdrop-blur-3xl
                lg:hidden
              "
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="text-base font-semibold tracking-wide text-white">
                  Navigation
                </span>

                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} />
                </Button>
              </div>

              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="
                      rounded-xl
                      px-4
                      py-3
                      text-base
                      font-medium
                      text-zinc-300
                      transition-all
                      duration-300
                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}