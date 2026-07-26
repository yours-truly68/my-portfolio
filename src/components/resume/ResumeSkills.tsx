"use client";

import * as React from "react";
import { resumeData } from "@/data";
import { cn } from "@/lib/utils";

export type ResumeSkillsProps = React.HTMLAttributes<HTMLDivElement>;

export const ResumeSkills = React.forwardRef<HTMLDivElement, ResumeSkillsProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="skills"
        className={cn("flex flex-col gap-4 scroll-mt-24", className)}
        {...props}
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-primary)]">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skillsGrouped.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-1.5 break-inside-avoid">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] border-b border-black/5 dark:border-white/5 pb-1">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-1 text-xs text-[var(--color-text-secondary)] font-medium">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="leading-snug">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
);

ResumeSkills.displayName = "ResumeSkills";
