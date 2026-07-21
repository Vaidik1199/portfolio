import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
inline-flex
items-center
justify-center
whitespace-nowrap
rounded-xl
font-medium
select-none
transition-all
duration-300
ease-out
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-cyan-400/40
focus-visible:ring-offset-2
focus-visible:ring-offset-[#050505]
disabled:pointer-events-none
disabled:opacity-50
active:scale-[0.97]
hover:-translate-y-0.5
`,
  {
    variants: {
      variant: {
        default: `
bg-white
text-black
shadow-sm
hover:bg-zinc-100
hover:shadow-[0_8px_30px_rgba(255,255,255,0.22)]
`,

        secondary: `
border
border-white/10
bg-white/[0.04]
text-white
backdrop-blur-xl
hover:border-cyan-400/30
hover:bg-cyan-400/10
hover:shadow-[0_0_24px_rgba(103,232,249,0.18)]
`,

        outline: `
border
border-white/15
text-white
hover:border-cyan-400/40
hover:bg-white/5
`,

        ghost: `
text-white
hover:bg-white/5
hover:text-cyan-300
`,
      },

      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-5",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;