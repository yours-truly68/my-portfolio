"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ExperiencePhilosophyProps = React.HTMLAttributes<HTMLDivElement>;

export const ExperiencePhilosophy = React.forwardRef<
  HTMLDivElement,
  ExperiencePhilosophyProps
>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("py-12 border-b border-black/[0.04] dark:border-white/[0.04] select-none", className)}
      {...props}
    >
      <div className="flex flex-col gap-4 max-w-3xl">
        <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-brand-primary)] block">
          Professional Philosophy
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)] leading-snug">
          Engineering is about end-to-end ownership, rapid execution, and building systems that endure.
        </h2>
        <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
          Whether designing a high-frequency trading dashboard, launching a full-stack client travel portal, establishing design system primitives, or architecting event-driven AI agents—I focus on clarity, performance, user empathy, and clean software architecture.
        </p>
      </div>
    </section>
  );
});

ExperiencePhilosophy.displayName = "ExperiencePhilosophy";
