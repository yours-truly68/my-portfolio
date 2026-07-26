"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type HeroTechStackProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
};

export const HeroTechStack = React.forwardRef<HTMLDivElement, HeroTechStackProps>(
  ({ className, label = "TRUSTED BY SYSTEMS & TEAMS", ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-2.5 pt-6 sm:pt-8 select-none", className)} {...props}>
        <span className="text-[0.65rem] font-extrabold tracking-widest text-[var(--color-text-muted)] uppercase">
          {label}
        </span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-[var(--color-text-primary)]">
          <span className="inline-flex items-center gap-1.5 transition-all duration-180 hover:scale-105 hover:text-[var(--color-brand-primary)] cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-teal-500 shadow-xs" />
            FastAPI
          </span>
          <span className="inline-flex items-center gap-1.5 transition-all duration-180 hover:scale-105 hover:text-[var(--color-brand-primary)] cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-blue-600 shadow-xs" />
            PostgreSQL
          </span>
          <span className="inline-flex items-center gap-1.5 transition-all duration-180 hover:scale-105 hover:text-[var(--color-brand-primary)] cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white shadow-xs" />
            Next.js
          </span>
          <span className="inline-flex items-center gap-1.5 transition-all duration-180 hover:scale-105 hover:text-[var(--color-brand-primary)] cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-xs" />
            TypeScript
          </span>
          <span className="inline-flex items-center gap-1.5 transition-all duration-180 hover:scale-105 hover:text-[var(--color-brand-primary)] cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-xs" />
            Tailwind CSS
          </span>
        </div>
      </div>
    );
  }
);

HeroTechStack.displayName = "HeroTechStack";
