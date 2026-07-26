"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { JournalArticle } from "./JournalArticle";
import { journalArticles } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export type JournalSectionProps = React.HTMLAttributes<HTMLDivElement>;

export const JournalSection = React.forwardRef<HTMLDivElement, JournalSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-8 select-none", className)} {...props}>
        {/* Miniature Hero Style Heading */}
        <SectionHeader
          eyebrow="JOURNAL"
          title={
            <span className="text-3xl sm:text-4xl font-bold leading-[1.08] tracking-tight block">
              Ideas, <br />
              notes and <br />
              <span className="font-serif-italic text-[var(--color-brand-primary)] font-normal">thoughts.</span>
            </span>
          }
          action={
            <Button
              variant="ghost"
              size="sm"
              className="text-[0.7rem] font-bold tracking-wider uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] gap-1.5 p-0 hover:bg-transparent"
              onClick={() => window.open("https://github.com/yours-truly68", "_blank")}
            >
              BROWSE ALL
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          }
        />

        {/* Magazine Index Article List */}
        <div className="flex flex-col divide-y divide-black/[0.04] dark:divide-white/[0.04] border-t border-black/[0.04] dark:border-white/[0.04] pt-1">
          {journalArticles.map((article) => (
            <JournalArticle key={article.id} article={article} />
          ))}
        </div>
      </div>
    );
  }
);

JournalSection.displayName = "JournalSection";
