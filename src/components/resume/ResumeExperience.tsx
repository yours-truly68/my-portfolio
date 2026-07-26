"use client";

import * as React from "react";
import { ExternalLink } from "lucide-react";
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
          Professional Experience
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

              {/* Company & Status/Badge */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[var(--color-text-secondary)]">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-brand-primary)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>{item.company}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[var(--color-brand-primary)] font-bold">{item.company}</span>
                )}

                {item.employmentType && (
                  <>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span>{item.employmentType}</span>
                  </>
                )}

                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[0.625rem] font-bold uppercase tracking-wider bg-purple-500/10 text-[var(--color-brand-primary)] border border-purple-500/15">
                    {item.badge}
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
