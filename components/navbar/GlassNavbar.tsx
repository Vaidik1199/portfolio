"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

import GlassOverlay from "./GlassOverlay";

interface GlassNavbarProps {
  children: ReactNode;
  className?: string;
}

export default function GlassNavbar({
  children,
  className,
}: GlassNavbarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={cn(
        "relative isolate overflow-hidden rounded-[32px]",
        className
      )}
    >
      {/* Main Glass */}
      <div
        className="
          absolute inset-0
          rounded-[32px]
          border border-white/10
          bg-black/30
          backdrop-blur-[34px]
          backdrop-saturate-[220%]
          shadow-[0_20px_60px_rgba(0,0,0,0.45),0_2px_10px_rgba(255,255,255,0.04)]
        "
      />

      {/* Top Reflection */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-8
          top-[2px]
          h-10
          rounded-full
          bg-gradient-to-b
          from-white/30
          via-white/10
          to-transparent
          blur-xl
        "
      />

      {/* Bottom Shadow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-8
          bottom-0
          h-12
          rounded-full
          bg-black/25
          blur-2xl
        "
      />

      {/* Overlay Effects */}
      <GlassOverlay />

      {/* Inner Border */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[1px]
          rounded-[31px]
          border
          border-white/5
        "
      />

      {/* Noise Texture */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.05]
          mix-blend-overlay
          [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
          [background-size:8px_8px]
        "
      />

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </motion.div>
  );
}