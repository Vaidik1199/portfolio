import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export default function Badge({
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        px-3.5
        py-1.5
        text-xs
        font-medium
        tracking-wide
        text-zinc-300
        backdrop-blur-xl
        transition-all
        duration-300
        ease-out

        shadow-[0_4px_18px_rgba(0,0,0,0.18)]

        hover:-translate-y-0.5
        hover:border-cyan-400/30
        hover:bg-cyan-400/10
        hover:text-white
        hover:shadow-[0_0_18px_rgba(103,232,249,0.18)]
        `,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}