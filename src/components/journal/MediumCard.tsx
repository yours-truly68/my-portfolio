"use client";

import * as React from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { JournalEntry } from "@/types/journal";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

export interface MediumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  entry: JournalEntry;
}

export const MediumCard = React.forwardRef<HTMLDivElement, MediumCardProps>(
  ({ className, entry, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex flex-col justify-between rounded-[22px] bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-lg select-none",
          className
        )}
        {...props}
      >
        <div className="flex flex-col gap-4">
          {/* Header Metadata */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 dark:bg-emerald-400/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                Medium Article • {entry.published}
              </span>
            </div>

            <span className="text-[0.65rem] font-medium text-[var(--color-text-muted)]">
              {entry.readTime}
            </span>
          </div>

          {/* Title & Summary */}
          <div className="flex flex-col gap-2 pt-1">
            <h3 className="text-xl font-extrabold text-[var(--color-text-primary)] leading-tight tracking-tight group-hover:text-[var(--color-brand-primary)] transition-colors duration-200">
              {entry.title}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 font-normal">
              {entry.summary}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {entry.tags.map((tag) => (
              <Pill key={tag} variant="default" size="sm" className="text-[0.625rem] px-2.5 py-0.5">
                {tag}
              </Pill>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="pt-6 border-t border-black/[0.04] dark:border-white/[0.04] mt-6">
          <a
            href={entry.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors"
          >
            <span>Read on Medium</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    );
  }
);

MediumCard.displayName = "MediumCard";
