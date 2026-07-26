"use client";

import * as React from "react";
import { resumeData } from "@/data";
import { cn } from "@/lib/utils";

export type ResumeCertificationsProps = React.HTMLAttributes<HTMLDivElement>;

export const ResumeCertifications = React.forwardRef<HTMLDivElement, ResumeCertificationsProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id="certifications"
        className={cn("flex flex-col gap-2 scroll-mt-24", className)}
        {...props}
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-primary)]">
          Certifications
        </h2>
        <p className="text-xs font-medium text-[var(--color-text-secondary)] italic">
          {resumeData.certifications}
        </p>
      </section>
    );
  }
);

ResumeCertifications.displayName = "ResumeCertifications";
