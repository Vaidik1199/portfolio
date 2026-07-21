"use client";

import { motion } from "motion/react";

export default function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="max-w-2xl text-base leading-8 text-zinc-400 md:text-lg"
    >
      I'm{" "}
      <span className="font-semibold text-white">
        Vaidik Choudhary
      </span>
      , a Full Stack Developer focused on crafting modern, fast and visually
      exceptional digital experiences. I enjoy transforming ambitious ideas
      into premium products through thoughtful design, clean architecture and
      scalable engineering.
    </motion.p>
  );
}