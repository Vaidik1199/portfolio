import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export default function Container({
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        `
        mx-auto
        w-full
        max-w-7xl
        px-4
        sm:px-5
        md:px-6
        lg:px-8
        xl:px-10
        2xl:px-12
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}