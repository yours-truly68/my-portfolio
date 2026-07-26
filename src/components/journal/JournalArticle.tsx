"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { JournalArticleItem } from "@/data/portfolioData";
import { JournalEntry } from "@/types/journal";
import { cn } from "@/lib/utils";

export interface JournalArticleProps extends React.HTMLAttributes<HTMLDivElement> {
  article: JournalArticleItem | JournalEntry;
}

export const JournalArticle = React.forwardRef<HTMLDivElement, JournalArticleProps>(
  ({ className, article, ...props }, ref) => {
    const title = article.title;
    const date = "published" in article ? article.published : article.date;
    const readTime = article.readTime;
    const isDraft = "isDraft" in article ? article.isDraft : false;

    return (
      <div
        ref={ref}
        onClick={() => {
          if ("url" in article && article.url) {
            window.open(article.url, "_blank");
          } else {
            window.location.href = "/journal";
          }
        }}
        className={cn(
          "group flex items-center justify-between gap-4 py-6 sm:py-7 border-b border-black/[0.04] dark:border-white/[0.04] transition-all duration-200 hover:bg-black/[0.01] dark:hover:bg-white/[0.01] px-2 rounded-xl select-none cursor-pointer",
          className
        )}
        {...props}
      >
        {/* Title First, Metadata Second */}
        <div className="flex flex-col gap-1.5 max-w-md transition-transform duration-200 ease-out group-hover:translate-x-1">
          <h4 className="text-base sm:text-[1.05rem] font-bold tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors leading-snug">
            {title}
          </h4>
          <div className="flex items-center gap-2 text-[0.65rem] font-bold tracking-widest text-[var(--color-text-muted)] opacity-70 group-hover:opacity-100 uppercase transition-opacity">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
            {isDraft && (
              <span className="ml-1 px-1.5 py-0.2 rounded bg-amber-100/70 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-semibold text-[0.6rem]">
                DRAFT
              </span>
            )}
          </div>
        </div>

        {/* Right Minimal Supporting Icon / Arrow */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-center shrink-0 group-hover:border-[var(--color-brand-primary)]/40 group-hover:bg-[var(--color-brand-primary)]/5 transition-all duration-200">
          <ArrowRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-brand-primary)] transition-all duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    );
  }
);

JournalArticle.displayName = "JournalArticle";
