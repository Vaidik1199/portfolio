import { cn } from "@/lib/cn";
import { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export default function Container({
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}