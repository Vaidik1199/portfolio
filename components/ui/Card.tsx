import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement>;
export default function Card({
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-[22px]
        transition-all
        duration-500
        ease-out

        shadow-[0_20px_60px_rgba(0,0,0,0.35)]

        hover:-translate-y-1
        hover:border-cyan-400/20
        hover:bg-white/[0.05]
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        `,
        className
      )}
      {...props}
    >
      {/* Top Reflection */}
      <div
        className="
        pointer-events-none
        absolute
        inset-x-8
        top-0
        h-12
        rounded-full
        bg-gradient-to-b
        from-white/20
        via-white/5
        to-transparent
        blur-xl
      "
      />

      {/* Inner Border */}
      <div
        className="
        pointer-events-none
        absolute
        inset-[1px]
        rounded-[23px]
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

      {/* Hover Glow */}
      <div
        className="
        pointer-events-none
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.08),transparent_70%)]
      "
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}