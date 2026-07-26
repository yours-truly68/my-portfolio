"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/lib/utils";

export type AvailabilityCardProps = React.HTMLAttributes<HTMLDivElement>;

export const AvailabilityCard = React.forwardRef<HTMLDivElement, AvailabilityCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        variant="glass"
        padding="sm"
        className={cn(
          "bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-white/80 dark:border-white/10 shadow-[0_12px_32px_-8px_rgba(18,18,18,0.06)] p-4 flex flex-col gap-2 rounded-[var(--radius-2xl)]",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--color-status-active)] animate-pulse" />
          <span className="text-[0.7rem] font-semibold text-[var(--color-text-secondary)] tracking-wide">
            Available for work
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 pt-1">
          <p className="text-sm font-bold text-[var(--color-text-primary)] leading-tight">
            Let&apos;s build something <br />
            <span className="font-serif-italic text-[var(--color-brand-primary)] font-normal">extraordinary.</span>
          </p>
          <IconButton
            variant="brand"
            size="sm"
            aria-label="Contact Mohammad Razim"
            className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-secondary)] shrink-0 shadow-md"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </IconButton>
        </div>
      </Card>
    );
  }
);

AvailabilityCard.displayName = "AvailabilityCard";
