"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";
import { ArrowUpRight, GitBranch } from "lucide-react";

import { Project } from "./projects.data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />

        {project.featured && (
          <span className="absolute left-5 top-5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-xl">
            Featured
          </span>
        )}
      </div>

      <div className="space-y-6 p-7">
        <div>
          <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
            {project.title}
          </h3>

          <p className="mt-3 leading-7 text-zinc-400">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Link
            href={project.github}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </Link>

          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}