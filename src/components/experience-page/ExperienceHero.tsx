"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export type ExperienceHeroProps = React.HTMLAttributes<HTMLDivElement>;

export const ExperienceHero = React.forwardRef<HTMLDivElement, ExperienceHeroProps>(
  ({ className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "relative flex flex-col gap-5 py-8 sm:py-12 border-b border-black/[0.04] dark:border-white/[0.04] select-none",
          className
        )}
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2"
        >
          <Badge variant="brand" size="sm" className="text-[0.65rem] font-bold tracking-wider uppercase px-3 py-1">
            PROFESSIONAL EXPERIENCE
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-text-primary)] leading-[1.1] max-w-4xl"
        >
          Building products, solving problems, and{" "}
          <span className="font-serif-italic font-normal text-[var(--color-brand-primary)]">
            growing
          </span>{" "}
          through every opportunity.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl pt-1"
        >
          A curated collection of software internships, freelance engagements, client work, design systems, and full-stack engineering experiences that shape how I design and build software today.
        </motion.p>
      </header>
    );
  }
);

ExperienceHero.displayName = "ExperienceHero";
