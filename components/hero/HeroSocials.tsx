"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Mail } from "lucide-react";

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
    label: "Email",
    href: "mailto:vaidikhitendrachoudhary@gmail.com",
    icon: Mail,
  },
];

export default function HeroSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-center gap-3 pt-6"
    >
      {socials.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
        >
          <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
        </Link>
      ))}
    </motion.div>
  );
}