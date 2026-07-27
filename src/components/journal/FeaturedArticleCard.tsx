"use client";

import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { JournalEntry } from "@/types/journal";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

export interface FeaturedArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  entry: JournalEntry;
}

export const FeaturedArticleCard = React.forwardRef<
  HTMLDivElement,
  FeaturedArticleCardProps
>(({ className, entry, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "group relative flex flex-col justify-between h-full min-h-[440px] rounded-[24px] bg-[#F4F3F1] dark:bg-[#0B0C14] border border-black/[0.06] dark:border-white/10 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-xl select-none overflow-hidden",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-5">
        {/* Abstract Editorial Visual Accent Header */}
        <div className="relative w-full h-[140px] sm:h-[160px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100/90 via-indigo-50/80 to-purple-50/90 dark:from-purple-950/60 dark:via-indigo-950/40 dark:to-slate-900/60 border border-purple-500/15 dark:border-white/10 flex items-center justify-center p-4 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,97,255,0.2)_0%,transparent_70%)] animate-breathe" />
          <div className="relative z-10 flex flex-col items-center gap-1.5">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-[0.625rem] font-bold font-mono uppercase tracking-widest text-purple-700 dark:text-purple-300">
              FEATURED PIECE
            </span>
          </div>
        </div>

        {/* Header Metadata */}
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[0.625rem] font-bold uppercase tracking-wider bg-purple-500/10 text-[var(--color-brand-primary)] border border-purple-500/15">
            {entry.published
              ? `${entry.platform} • ${entry.published}`
              : entry.platform}
          </span>
          <span className="text-xs font-medium text-slate-500 dark:text-white/50">
            {entry.readTime ||
              (entry.platform === "linkedin"
                ? "LinkedIn Post"
                : "Featured Read")}
          </span>
        </div>

        {/* Title & Summary */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight group-hover:text-[var(--color-brand-primary)] transition-colors duration-200">
            {entry.title}
          </h3>
          {entry.summary && (
            <p className="text-xs sm:text-sm text-slate-600 dark:text-white/70 leading-relaxed line-clamp-3 font-normal">
              {entry.summary}
            </p>
          )}
        </div>
      </div>

      {/* Footer Tags & Read Action CTA */}
      <div className="flex flex-col gap-4 pt-4 border-t border-black/[0.05] dark:border-white/[0.05] mt-6">
        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <Pill
                key={tag}
                variant="default"
                size="sm"
                className="text-[0.625rem] px-2.5 py-0.5"
              >
                {tag}
              </Pill>
            ))}
          </div>
        )}

        <a
          href={entry.url || entry.embedUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-[var(--color-brand-primary)] transition-colors pt-1"
        >
          <span>
            {entry.platform === "linkedin"
              ? "View LinkedIn Post"
              : "Read Full Article"}
          </span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
});

FeaturedArticleCard.displayName = "FeaturedArticleCard";
