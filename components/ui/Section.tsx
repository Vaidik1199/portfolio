import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import Container from "./Container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  containerClassName?: string;
};

export default function Section({
  id,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-24 md:py-32", className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}