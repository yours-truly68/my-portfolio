"use client";

import * as React from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExperienceTimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  date: string;
  role: string;
  company: string;
  description: string;
  badge?: string;
  link?: string;
  dotColor?: "purple" | "blue" | "green";
  isLast?: boolean;
}

export const ExperienceTimelineItem = React.forwardRef<HTMLDivElement, ExperienceTimelineItemProps>(
  ({ className, date, role, company, description, badge, link, dotColor = "purple", isLast = false, ...props }, ref) => {
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
        <div className="flex flex-col gap-1.5 pr-2 sm:pr-8 w-full transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
          {/* Header Row: Role + Dates */}
          <div className="flex flex-wrap items-baseline justify-between gap-1">
            <h4 className="text-[1.05rem] font-extrabold text-[var(--color-text-primary)] leading-snug transition-colors duration-200 group-hover:text-[var(--color-brand-primary)]">
              {role}
            </h4>
            <span className="text-[0.65rem] font-bold font-mono tracking-widest text-[var(--color-text-muted)] opacity-70 group-hover:opacity-100 uppercase transition-opacity">
              {date}
            </span>
          </div>

          {/* Company + Badge Row */}
          <div className="flex items-center gap-2 text-xs font-semibold">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-brand-primary)] hover:underline inline-flex items-center gap-1"
              >
                <span>{company}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-[var(--color-brand-primary)]">{company}</span>
            )}

            {badge && (
              <span className="px-2 py-0.5 rounded-full text-[0.625rem] font-bold uppercase tracking-wider bg-purple-500/10 text-[var(--color-brand-primary)] border border-purple-500/15 transition-transform duration-200 group-hover:scale-105">
                {badge}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-xs leading-relaxed text-[var(--color-text-secondary)] opacity-85 group-hover:opacity-100 mt-0.5 transition-opacity">
            {description}
          </p>
        </div>
      </div>
    );
  }
);

ExperienceTimelineItem.displayName = "ExperienceTimelineItem";
