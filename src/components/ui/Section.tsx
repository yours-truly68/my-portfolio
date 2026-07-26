"use client";

import * as React from "react";
import { motion } from "framer-motion";
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
  ({ className, spacing, children, ...props }, ref) => {
    return (
      <section
        className={cn(sectionVariants({ spacing, className }))}
        ref={ref}
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {children}
        </motion.div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section, sectionVariants };
