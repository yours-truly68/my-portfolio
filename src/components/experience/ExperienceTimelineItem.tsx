"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ExperienceTimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  date: string;
  role: string;
  company: string;
  description: string;
  dotColor?: "purple" | "blue" | "green";
  isLast?: boolean;
}

export const ExperienceTimelineItem = React.forwardRef<HTMLDivElement, ExperienceTimelineItemProps>(
  ({ className, date, role, company, description, dotColor = "purple", isLast = false, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("group relative flex gap-6 pb-10 lg:pb-12 select-none", isLast && "pb-0", className)} {...props}>
        {/* Vertical Timeline Connector Line & Dot */}
        <div className="flex flex-col items-center">
          <div
            className={cn(
              "w-2.5 h-2.5 rounded-full shrink-0 z-10 mt-1.5 transition-transform duration-200 group-hover:scale-125",
              dotColor === "purple" && "bg-[var(--color-brand-primary)] shadow-[0_0_8px_rgba(123,97,255,0.4)]",
              dotColor === "blue" && "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]",
              dotColor === "green" && "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"
            )}
          />
          {!isLast && <div className="w-[1px] h-full bg-black/[0.05] dark:bg-white/[0.05] -mt-1 group-hover:bg-[var(--color-brand-primary)]/20 transition-colors duration-200" />}
        </div>

        {/* Milestone Content */}
        <div className="flex flex-col gap-1.5 pr-10 transition-transform duration-200 ease-out group-hover:translate-x-1">
          <span className="text-[0.65rem] font-bold tracking-widest text-[var(--color-text-muted)] opacity-70 group-hover:opacity-100 uppercase transition-opacity">
            {date}
          </span>
          <h4 className="text-[1.05rem] font-bold text-[var(--color-text-primary)] leading-snug">
            {company} — <span className="font-semibold text-[var(--color-text-secondary)]">{role}</span>
          </h4>
          <p className="text-xs leading-relaxed text-[var(--color-text-secondary)] opacity-85 group-hover:opacity-100 mt-0.5 transition-opacity">
            {description}
          </p>
        </div>
      </div>
    );
  }
);

ExperienceTimelineItem.displayName = "ExperienceTimelineItem";
