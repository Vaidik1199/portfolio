"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Vaidik1199",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vaidik-choudhary-a21b40294/",
    icon: FaLinkedinIn,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Vaidik1199/",
    icon: SiLeetcode,
  },
  {
    label: "Email",
    href: "mailto:vaidikhitendrachoudhary@gmail.com",
    icon: Mail,
  },
];

export default function HeroSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.45,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-center gap-2.5 pt-4 sm:gap-3 sm:pt-5"
    >
      {socials.map(({ label, href, icon: Icon }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5 + index * 0.08,
            duration: 0.5,
          }}
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="
              group
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              text-zinc-400
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/30
              hover:bg-cyan-400/10
              hover:text-cyan-300
              hover:shadow-[0_10px_35px_rgba(103,232,249,0.18)]
              sm:h-12
              sm:w-12
              sm:rounded-2xl
            "
          >
            <span
              className="
                pointer-events-none
                absolute
                inset-x-2
                top-1
                h-3
                rounded-full
                bg-gradient-to-b
                from-white/20
                to-transparent
                blur-md
                sm:h-4
              "
            />

            <Icon className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5" />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}