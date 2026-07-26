"use client";

import * as React from "react";
import { ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import { DetailedExperienceItem } from "@/data/experienceData";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

export interface ExperienceDetailBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  experience: DetailedExperienceItem;
  isEven?: boolean;
}

export const ExperienceDetailBlock = React.forwardRef<
  HTMLDivElement,
  ExperienceDetailBlockProps
>(({ className, experience, isEven = false, ...props }, ref) => {
  return (
    <article
      ref={ref}
      id={experience.id}
      className={cn(
        "relative py-12 border-b border-black/[0.04] dark:border-white/[0.04] scroll-mt-24 select-none",
        className
      )}
      {...props}
    >
      <div className={cn("flex flex-col gap-8", isEven && "lg:flex-row-reverse")}>
        {/* Main Content Column */}
        <div className="flex flex-col gap-6 w-full">
          {/* Header Metadata */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[var(--color-text-muted)] uppercase">
                {experience.period} • {experience.employmentType}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wider bg-purple-500/10 text-[var(--color-brand-primary)] border border-purple-500/15">
                {experience.badge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)] tracking-tight">
              {experience.role}
            </h2>

            <div className="flex items-center gap-2 text-base font-bold text-[var(--color-brand-primary)]">
              <span>{experience.company}</span>
              {experience.link && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline text-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{experience.link.replace("https://", "")}</span>
                </a>
              )}
            </div>
          </div>

          {/* Overview */}
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed font-normal">
            {experience.overview}
          </p>

          {/* Case Study Breakdown: Responsibilities & Impact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Responsibilities */}
            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-black/[0.015] dark:bg-white/[0.015] border border-black/[0.04] dark:border-white/[0.04]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                Key Responsibilities & Ownership
              </h3>
              <ul className="flex flex-col gap-2">
                {experience.responsibilities.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    <span className="text-[var(--color-brand-primary)] font-bold mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-black/[0.015] dark:bg-white/[0.015] border border-black/[0.04] dark:border-white/[0.04]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                Measurable Impact & Outcomes
              </h3>
              <ul className="flex flex-col gap-2">
                {experience.impact.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenges & Technical Solutions */}
          {experience.challengesAndSolutions.length > 0 && (
            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-purple-500/[0.03] border border-purple-500/15">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-primary)]">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Engineering Challenge & Technical Solution</span>
              </div>
              {experience.challengesAndSolutions.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 text-xs leading-relaxed">
                  <p className="font-semibold text-[var(--color-text-primary)]">
                    Challenge: <span className="font-normal text-[var(--color-text-secondary)]">{item.challenge}</span>
                  </p>
                  <p className="font-semibold text-[var(--color-brand-primary)]">
                    Solution: <span className="font-normal text-[var(--color-text-secondary)]">{item.solution}</span>
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-text-muted)] mr-1">
              Tech Stack:
            </span>
            {experience.technologies.map((tech) => (
              <Pill key={tech} variant="default" size="sm" className="text-[0.65rem] font-medium px-2.5 py-0.5">
                {tech}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
});

ExperienceDetailBlock.displayName = "ExperienceDetailBlock";
