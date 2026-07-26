"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type JournalHeroProps = React.HTMLAttributes<HTMLDivElement>;

export const JournalHero = React.forwardRef<HTMLDivElement, JournalHeroProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-6 max-w-3xl pb-10 select-none", className)}
        {...props}
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
          <span className="text-xs font-bold font-mono uppercase tracking-widest text-[var(--color-brand-primary)]">
            JOURNAL & ENGINEERING WRITING
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-text-primary)] leading-[1.05]">
          Writing about engineering,{" "}
          <br className="hidden sm:inline" />
          design, AI,{" "}
          <span className="font-serif-italic text-[#7B61FF] font-normal">
            and lessons along the way.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-normal max-w-2xl pt-2">
          I enjoy documenting what I build, the mistakes I make, and the engineering lessons I learn while working across AI agents, design systems, full-stack systems, and product architecture.
        </p>
      </div>
    );
  }
);

JournalHero.displayName = "JournalHero";
