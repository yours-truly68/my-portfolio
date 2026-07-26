"use client";

import * as React from "react";
import { personalInfo } from "@/data";
import { cn } from "@/lib/utils";

export type ResumeSummaryProps = React.HTMLAttributes<HTMLDivElement>;

export const ResumeSummary = React.forwardRef<HTMLDivElement, ResumeSummaryProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="summary"
        className={cn("flex flex-col gap-2 scroll-mt-24", className)}
        {...props}
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-primary)]">
          Professional Summary
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-secondary)] font-normal">
          {personalInfo.summary}
        </p>
      </section>
    );
  }
);

ResumeSummary.displayName = "ResumeSummary";
