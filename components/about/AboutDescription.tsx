"use client";

import { motion } from "motion/react";

export default function AboutDescription() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="max-w-3xl space-y-6 text-lg leading-8 text-zinc-400"
    >
      <p>
        I'm <span className="font-semibold text-white">Vaidik Choudhary</span>,
        an AI & Data Science undergraduate and Full Stack Developer passionate
        about building digital products that combine exceptional design with
        solid engineering. I enjoy transforming ideas into fast, scalable and
        user-focused applications.
      </p>

      <p>
        My focus is on modern web technologies like{" "}
        <span className="font-medium text-white">
          React, Next.js, TypeScript, Node.js and MongoDB
        </span>
        , while continuously exploring AI-powered applications and backend
        architecture. I believe great software is more than just writing
        code—it's about solving real problems with thoughtful user experiences.
      </p>

      <p>
        Whether it's developing full-stack applications, experimenting with AI,
        or learning new technologies, I'm always looking for opportunities to
        improve my craft and build products that make a meaningful impact.
      </p>
    </motion.div>
  );
}