"use client";

import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { JournalEntry } from "@/types/journal";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

export interface FeaturedArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  entry: JournalEntry;
}

export const FeaturedArticleCard = React.forwardRef<HTMLDivElement, FeaturedArticleCardProps>(
  ({ className, entry, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex flex-col lg:flex-row items-stretch gap-6 rounded-[24px] bg-[#FAF9F7] dark:bg-[#10131B] border border-black/[0.06] dark:border-white/10 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-xl select-none overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Abstract Editorial Visual Accent */}
        <div className="lg:w-1/3 relative min-h-[180px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/30 via-indigo-950/40 to-slate-900/50 border border-white/10 flex items-center justify-center p-6 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,97,255,0.25)_0%,transparent_70%)] animate-breathe" />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-[0.65rem] font-bold font-mono uppercase tracking-widest text-purple-300">
              FEATURED PIECE
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-2/3 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[0.625rem] font-bold uppercase tracking-wider bg-purple-500/10 text-[var(--color-brand-primary)] border border-purple-500/15">
                {entry.platform} • {entry.published}
              </span>
              <span className="text-xs font-medium text-[var(--color-text-muted)]">
                {entry.readTime}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)] leading-tight tracking-tight group-hover:text-[var(--color-brand-primary)] transition-colors duration-200">
              {entry.title}
            </h3>

            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed font-normal">
              {entry.summary}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-black/[0.04] dark:border-white/[0.04]">
            <div className="flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <Pill key={tag} variant="default" size="sm" className="text-[0.625rem] px-2.5 py-0.5">
                  {tag}
                </Pill>
              ))}
            </div>

            <a
              href={entry.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    );
  }
);

FeaturedArticleCard.displayName = "FeaturedArticleCard";
