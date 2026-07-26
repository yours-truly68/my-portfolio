"use client";

import * as React from "react";
import { Sparkles, Rocket, RefreshCw, Heart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { PrincipleItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export interface PrincipleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  principle: PrincipleItem;
}

export function getPrincipleIcon(iconName: PrincipleItem["iconName"]) {
  switch (iconName) {
    case "clarity":
      return <Sparkles className="w-4 h-4 text-[var(--color-brand-primary)]" />;
    case "ship":
      return <Rocket className="w-4 h-4 text-blue-500" />;
    case "iterate":
      return <RefreshCw className="w-4 h-4 text-purple-500" />;
    case "share":
    default:
      return <Heart className="w-4 h-4 text-rose-500" />;
  }
}

export const PrincipleCard = React.forwardRef<HTMLDivElement, PrincipleCardProps>(
  ({ className, principle, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        variant="default"
        padding="none"
        className={cn(
          "group flex flex-col gap-3 rounded-[20px] bg-[#F9F8F6] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] p-5 sm:p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--color-brand-primary)]/20 hover:shadow-[0_12px_28px_-6px_rgba(18,18,18,0.05)] select-none h-full justify-between",
          className
        )}
        {...props}
      >
        {/* Minimal Icon Box with subtle rotation */}
        <div className="w-8 h-8 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.04] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
          {getPrincipleIcon(principle.iconName)}
        </div>

        {/* Title & Short Supporting Sentence */}
        <div className="flex flex-col gap-1.5 pt-1">
          <h4 className="text-base font-bold text-[var(--color-text-primary)] leading-snug transition-colors duration-200 group-hover:text-[var(--color-brand-primary)]">
            {principle.title}
          </h4>
          <p className="text-xs leading-relaxed text-[var(--color-text-secondary)] opacity-85 group-hover:opacity-100 transition-opacity duration-200">
            {principle.description}
          </p>
        </div>
      </Card>
    );
  }
);

PrincipleCard.displayName = "PrincipleCard";
