"use client";

import * as React from "react";
import { resumeData } from "@/data";
import { cn } from "@/lib/utils";

export type ResumeHighlightsProps = React.HTMLAttributes<HTMLDivElement>;

export const ResumeHighlights = React.forwardRef<HTMLDivElement, ResumeHighlightsProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="highlights"
        className={cn("flex flex-col gap-3 scroll-mt-24", className)}
        {...props}
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-primary)]">
          Selected Highlights
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-[var(--color-text-secondary)]">
          {resumeData.resumeHighlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[var(--color-brand-primary)] font-bold shrink-0 mt-0.5">•</span>
              <span className="leading-relaxed font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
);

ResumeHighlights.displayName = "ResumeHighlights";
