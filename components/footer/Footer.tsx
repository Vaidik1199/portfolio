"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FooterBackground from "./FooterBackground";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <FooterBackground />
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.06),transparent_60%)]" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative z-10 py-14 sm:py-16">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link
            href="#hero"
            className="text-3xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-cyan-300 sm:text-4xl"
          >
            Vaidik
            <span className="text-cyan-300">.</span>
          </Link>

          {/* Subtitle */}
          <p className="mt-4 max-w-xl text-center text-[15px] leading-7 text-zinc-400 sm:text-base">
            Passionate about building modern web experiences, AI-powered
            applications, and solving real-world problems through technology.
          </p>

          {/* Social */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/Vaidik1199"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                p-3
                text-zinc-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-cyan-400/10
                hover:text-cyan-300
                hover:shadow-[0_0_25px_rgba(103,232,249,0.15)]
              "
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/vaidikchoudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                p-3
                text-zinc-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-cyan-400/10
                hover:text-cyan-300
                hover:shadow-[0_0_25px_rgba(103,232,249,0.15)]
              "
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Divider */}
          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8">
            <p className="flex flex-wrap items-center justify-center gap-2 text-center text-sm text-zinc-500">
              © {new Date().getFullYear()} Vaidik Choudhary. Built with
              <Heart className="h-4 w-4 fill-cyan-300 text-cyan-300" />
              using Next.js, React & Tailwind CSS.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}