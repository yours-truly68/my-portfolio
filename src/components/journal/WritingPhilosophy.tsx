"use client";

import * as React from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export type WritingPhilosophyProps = React.HTMLAttributes<HTMLDivElement>;

export const WritingPhilosophy = React.forwardRef<HTMLDivElement, WritingPhilosophyProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full rounded-[24px] bg-[#FAF9F7] dark:bg-[#10131B] border border-black/[0.06] dark:border-white/10 p-8 sm:p-12 select-none overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-[var(--color-brand-primary)]">
            <Quote className="w-5 h-5 opacity-80" />
            <span className="text-[0.65rem] font-bold font-mono uppercase tracking-widest">
              WRITING PHILOSOPHY
            </span>
          </div>

          <blockquote className="text-xl sm:text-2xl font-medium text-[var(--color-text-primary)] leading-relaxed tracking-tight">
            “I don&apos;t write to appear knowledgeable. I write to organize my thoughts, document my engineering learning, and leave behind resources that make someone else&apos;s journey a little easier.”
          </blockquote>

          <span className="text-xs font-semibold text-[var(--color-text-secondary)] tracking-tight pt-2">
            — Mohammad Razim
          </span>
        </div>
      </div>
    );
  }
);

WritingPhilosophy.displayName = "WritingPhilosophy";
