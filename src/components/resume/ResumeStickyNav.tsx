"use client";

import * as React from "react";
import { resumeNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export type ResumeStickyNavProps = React.HTMLAttributes<HTMLElement>;

export const ResumeStickyNav = React.forwardRef<HTMLElement, ResumeStickyNavProps>(
  ({ className, ...props }, ref) => {
    const [activeId, setActiveId] = React.useState<string>("summary");

    React.useEffect(() => {
      const handleScroll = () => {
        const anchor = window.innerHeight * 0.3;
        let closest = "summary";
        let minDistance = Number.POSITIVE_INFINITY;

        for (const item of resumeNavigation) {
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            const distance = Math.abs(rect.top - anchor);
            if (distance < minDistance) {
              closest = item.id;
              minDistance = distance;
            }
          }
        }
        setActiveId(closest);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <nav
        ref={ref}
        aria-label="Table of Contents"
        className={cn(
          "hidden xl:flex flex-col gap-2 sticky top-28 h-fit py-4 border-l border-black/5 dark:border-white/5 pl-4 no-print select-none",
          className
        )}
        {...props}
      >
        <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
          Contents
        </span>

        {resumeNavigation.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "text-left text-xs font-semibold tracking-wide transition-all py-0.5",
                isActive
                  ? "text-[var(--color-brand-primary)] translate-x-1"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    );
  }
);

ResumeStickyNav.displayName = "ResumeStickyNav";
