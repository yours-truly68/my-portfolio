"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { detailedExperiences } from "@/data/experienceData";
import { cn } from "@/lib/utils";

export type ExperienceTimelineOverviewProps = React.HTMLAttributes<HTMLDivElement>;

export const ExperienceTimelineOverview = React.forwardRef<
  HTMLDivElement,
  ExperienceTimelineOverviewProps
>(({ className, ...props }, ref) => {
  const scrollToBlock = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className={cn("py-8 border-b border-black/[0.04] dark:border-white/[0.04] select-none", className)}
      {...props}
    >
      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-brand-primary)] block mb-6">
        Career Journey Overview
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {detailedExperiences.map((exp, idx) => (
          <motion.button
            key={exp.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            onClick={() => scrollToBlock(exp.id)}
            className="group flex flex-col items-start gap-2 p-4 rounded-xl bg-black/[0.015] dark:bg-white/[0.015] border border-black/[0.04] dark:border-white/[0.04] hover:border-[var(--color-brand-primary)]/40 hover:bg-[var(--color-brand-primary)]/5 text-left transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-[0.65rem] font-bold font-mono tracking-wider text-[var(--color-text-muted)]">
                {exp.period}
              </span>
              <span className="text-[0.6rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/10 text-[var(--color-brand-primary)]">
                {exp.badge}
              </span>
            </div>
            <h3 className="text-sm font-extrabold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors leading-tight">
              {exp.role}
            </h3>
            <span className="text-xs font-semibold text-[var(--color-brand-primary)]">
              {exp.company}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
});

ExperienceTimelineOverview.displayName = "ExperienceTimelineOverview";
