import * as React from "react";
import { cn } from "@/lib/utils";

export type HeroTechStackProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
};

export const HeroTechStack = React.forwardRef<HTMLDivElement, HeroTechStackProps>(
  ({ className, label = "TRUSTED BY SYSTEMS & TEAMS", ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-2.5 pt-6 sm:pt-8", className)} {...props}>
        <span className="text-[0.65rem] font-extrabold tracking-widest text-[var(--color-text-muted)] uppercase">
          {label}
        </span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-[var(--color-text-primary)]">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            FastAPI
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            PostgreSQL
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            Next.js
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            TypeScript
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Tailwind CSS
          </span>
        </div>
      </div>
    );
  }
);

HeroTechStack.displayName = "HeroTechStack";
