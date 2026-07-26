"use client";

import * as React from "react";
import { professionalExperience } from "@/data";
import { cn } from "@/lib/utils";

export type ResumeExperienceProps = React.HTMLAttributes<HTMLDivElement>;

export const ResumeExperience = React.forwardRef<HTMLDivElement, ResumeExperienceProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="experience"
        className={cn("flex flex-col gap-6 scroll-mt-24", className)}
        {...props}
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-primary)]">
          Work Experience
        </h2>

        <div className="flex flex-col gap-8">
          {professionalExperience.map((item, idx) => (
            <article key={idx} className="flex flex-col gap-2.5 break-inside-avoid">
              {/* Role Title Dominant Header */}
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h3 className="text-base sm:text-lg font-extrabold text-[var(--color-text-primary)]">
                  {item.role}
                </h3>
                <span className="text-xs font-semibold text-[var(--color-text-muted)] font-mono">
                  {item.period}
                </span>
              </div>

              {/* Company & Status */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-brand-primary)] font-bold">{item.company}</span>
                {item.employmentType && (
                  <>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span>{item.employmentType}</span>
                  </>
                )}
                {item.status && (
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wider",
                      item.status === "Current"
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : "bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    )}
                  >
                    {item.status}
                  </span>
                )}
              </div>

              {/* Bullet Highlights */}
              <ul className="flex flex-col gap-1.5 pt-1 text-xs sm:text-sm text-[var(--color-text-secondary)]">
                {item.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    );
  }
);

ResumeExperience.displayName = "ResumeExperience";
