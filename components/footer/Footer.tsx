"use client";

import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link
            href="#hero"
            className="text-3xl font-bold tracking-tight text-white transition-colors hover:text-cyan-300"
          >
            Vaidik<span className="text-cyan-300">.</span>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/vaidikchoudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-zinc-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(103,232,249,0.15)]"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/vaidikchoudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-zinc-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(103,232,249,0.15)]"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Bottom */}
          <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
            <p className="flex items-center gap-2 text-center md:text-left">
              © {new Date().getFullYear()} Vaidik Choudhary. Built with
              <Heart className="h-4 w-4 fill-cyan-300 text-cyan-300" />
              using Next.js & Tailwind CSS.
            </p>

            <a
              href="#hero"
              className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              Back to Top
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}