"use client";

import { motion } from "motion/react";

export default function AboutDescription() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        max-w-3xl
        space-y-6
        text-base
        leading-8
        text-zinc-400
        sm:text-lg
      "
    >
      <p>
        I'm{" "}
        <span className="font-semibold text-white">
          Vaidik Choudhary
        </span>
        , an{" "}
        <span className="font-medium text-cyan-300">
          AI & Data Science undergraduate
        </span>{" "}
        and{" "}
        <span className="font-medium text-cyan-300">
          Full Stack Developer
        </span>{" "}
        passionate about building digital products that combine beautiful
        design with scalable engineering. I enjoy transforming ideas into fast,
        intuitive, and impactful web experiences.
      </p>

      <p>
        My primary stack includes{" "}
        <span className="font-medium text-white">
          React, Next.js, TypeScript, Node.js, Express, MongoDB, and Tailwind
          CSS
        </span>
        . Alongside modern web development, I'm actively exploring{" "}
        <span className="font-medium text-white">
          Artificial Intelligence, backend architecture,
        </span>{" "}
        and creating products that solve real-world problems with clean,
        maintainable code.
      </p>

      <p>
        I'm constantly learning, experimenting, and improving my craft—whether
        it's building full-stack applications, integrating AI into products, or
        refining user experiences. My goal is simple: to create software that
        people genuinely enjoy using.
      </p>
    </motion.div>
  );
}