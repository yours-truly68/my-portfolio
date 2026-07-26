"use client";

import * as React from "react";
import { educationData } from "@/data";
import { cn } from "@/lib/utils";

export type ResumeEducationProps = React.HTMLAttributes<HTMLDivElement>;

export const ResumeEducation = React.forwardRef<HTMLDivElement, ResumeEducationProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="education"
        className={cn("flex flex-col gap-4 scroll-mt-24", className)}
        {...props}
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-primary)]">
          Education & Academic Background
        </h2>

        <div className="flex flex-col gap-4">
          {educationData.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-0.5 break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  {item.institution}
                </h3>
                <span className="text-xs font-semibold text-[var(--color-brand-primary)] font-mono">
                  {item.grade}
                </span>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-secondary)]">
                {item.degree}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
);

ResumeEducation.displayName = "ResumeEducation";
