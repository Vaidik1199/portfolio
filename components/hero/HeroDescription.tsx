"use client";

import { motion } from "motion/react";

export default function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        max-w-2xl
        text-[15px]
        leading-7
        tracking-[0.01em]
        text-zinc-400
        sm:text-base
        sm:leading-8
        md:text-[17px]
        md:leading-8
        lg:text-lg
        lg:leading-9
      "
    >
      I'm{" "}
      <span className="font-semibold text-white">
        Vaidik Choudhary
      </span>
      , a{" "}
      <span className="font-medium text-cyan-300">
        Full Stack Developer
      </span>{" "}
      focused on crafting modern, fast, and visually exceptional digital
      experiences. I enjoy transforming ambitious ideas into premium products
      through thoughtful design, clean architecture, and scalable engineering.
    </motion.p>
  );
}