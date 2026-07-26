"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface HeroActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  onExploreClick?: () => void;
  onResumeClick?: () => void;
}

export const HeroActions = React.forwardRef<HTMLDivElement, HeroActionsProps>(
  ({ className, onExploreClick, onResumeClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap items-center gap-3 pt-2", className)}
        {...props}
      >
        <Button
          variant="primary"
          size="lg"
          className="group font-bold text-[0.7rem] uppercase tracking-wider rounded-xl px-5 h-11 gap-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          onClick={
            onExploreClick ||
            (() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            })
          }
        >
          EXPLORE MY WORK
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>

        {onResumeClick ? (
          <Button
            variant="secondary"
            size="lg"
            className="group font-bold text-[0.7rem] uppercase tracking-wider rounded-xl px-5 h-11 gap-2 bg-[var(--color-bg-card-subtle)] border-[var(--color-border-light)] text-[var(--color-text-primary)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            onClick={onResumeClick}
          >
            VIEW RESUME
            <Download className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </Button>
        ) : (
          <Link href="/resume">
            <Button
              variant="secondary"
              size="lg"
              className="group font-bold text-[0.7rem] uppercase tracking-wider rounded-xl px-5 h-11 gap-2 bg-[var(--color-bg-card-subtle)] border-[var(--color-border-light)] text-[var(--color-text-primary)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              VIEW RESUME
              <Download className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
            </Button>
          </Link>
        )}
      </div>
    );
  },
);

HeroActions.displayName = "HeroActions";
