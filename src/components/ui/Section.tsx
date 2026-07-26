import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full relative", {
  variants: {
    spacing: {
      default: "py-[var(--space-section-gap)]",
      sm: "py-[var(--space-section-sm)]",
      md: "py-[var(--space-section-md)]",
      lg: "py-[var(--space-section-lg)]",
      none: "py-0",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, ...props }, ref) => {
    return (
      <section
        className={cn(sectionVariants({ spacing, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";

export { Section, sectionVariants };
