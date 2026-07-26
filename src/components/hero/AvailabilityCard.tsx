"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconButton } from "@/components/ui/IconButton";
import { personalInfo } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export type AvailabilityCardProps = React.HTMLAttributes<HTMLDivElement>;

export const AvailabilityCard = React.forwardRef<
  HTMLDivElement,
  AvailabilityCardProps
>(({ className, ...props }, ref) => {
  return (
    <Card
      ref={ref}
      variant="glass"
      padding="sm"
      className={cn(
        "group bg-white/95 dark:bg-slate-100/95 backdrop-blur-md border border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-4 sm:p-5 flex flex-col gap-2.5 rounded-[20px] transition-all duration-200 hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)]",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[var(--color-status-active)] animate-pulse" />
        <span className="text-[0.675rem] font-semibold text-slate-600 tracking-tight">
          {personalInfo.availabilityStatus}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 pt-1">
        <p className="text-medium font-bold text-slate-900 leading-tight">
          Let&apos;s build something <br />
          <span className="font-serif-italic text-[var(--color-brand-primary)] font-normal">
            extraordinary.
          </span>
        </p>
        <IconButton
          variant="brand"
          size="sm"
          aria-label="Contact Mohammad Razim"
          className="w-8 h-8 rounded-full bg-[#EAE5FF] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white shrink-0 shadow-sm transition-all duration-200 active:scale-95"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </IconButton>
      </div>
    </Card>
  );
});

AvailabilityCard.displayName = "AvailabilityCard";
