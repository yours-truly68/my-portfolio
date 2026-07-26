"use client";

import * as React from "react";
import { experienceTechSummary } from "@/data/experienceData";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

export type ExperienceTechMatrixProps = React.HTMLAttributes<HTMLDivElement>;

export const ExperienceTechMatrix = React.forwardRef<
  HTMLDivElement,
  ExperienceTechMatrixProps
>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("py-12 border-b border-black/[0.04] dark:border-white/[0.04] select-none", className)}
      {...props}
    >
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-brand-primary)] block mb-1">
            Technologies & Domain Summary
          </span>
          <h2 className="text-2xl font-extrabold text-[var(--color-text-primary)]">
            Applied Engineering Toolkit
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experienceTechSummary.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-3 p-5 rounded-2xl bg-black/[0.015] dark:bg-white/[0.015] border border-black/[0.04] dark:border-white/[0.04]"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Pill key={item} variant="default" size="sm" className="text-[0.65rem] font-medium px-2.5 py-0.5">
                    {item}
                  </Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ExperienceTechMatrix.displayName = "ExperienceTechMatrix";
