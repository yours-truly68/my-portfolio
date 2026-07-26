"use client";

import * as React from "react";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

export interface CategoryFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  categories: string[];
  selectedCategory: string | null;
  selectedPlatform: string | null;
  onSelectCategory: (category: string | null) => void;
  onSelectPlatform: (platform: string | null) => void;
}

export const CategoryFilter = React.forwardRef<HTMLDivElement, CategoryFilterProps>(
  (
    {
      className,
      categories,
      selectedCategory,
      selectedPlatform,
      onSelectCategory,
      onSelectPlatform,
      ...props
    },
    ref
  ) => {
    const platforms = [
      { id: null, label: "All Platforms" },
      { id: "linkedin", label: "LinkedIn Posts" },
      { id: "medium", label: "Medium Articles" },
    ];

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-4 w-full py-4 border-y border-black/[0.04] dark:border-white/[0.04] select-none", className)}
        {...props}
      >
        {/* Platform Tabs Row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {platforms.map((p) => (
              <button
                key={p.label}
                onClick={() => onSelectPlatform(p.id)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer",
                  selectedPlatform === p.id
                    ? "bg-[var(--color-text-primary)] text-[var(--color-bg-canvas)] shadow-xs"
                    : "bg-black/[0.03] dark:bg-white/[0.04] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-black/[0.06] dark:hover:bg-white/[0.08]"
                )}
              >
                {p.label}
              </button>
            ))}
          </div>

          <span className="text-[0.65rem] font-bold font-mono uppercase tracking-widest text-[var(--color-text-muted)]">
            FILTER BY TOPIC
          </span>
        </div>

        {/* Categories Tag Pills Row */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => onSelectCategory(null)}
            className="cursor-pointer"
          >
            <Pill
              variant={selectedCategory === null ? "solid" : "default"}
              size="sm"
              className={cn(
                "text-[0.65rem] font-semibold px-3 py-1 transition-all",
                selectedCategory === null && "bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)]"
              )}
            >
              All Topics
            </Pill>
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(selectedCategory === cat ? null : cat)}
              className="cursor-pointer"
            >
              <Pill
                variant={selectedCategory === cat ? "solid" : "default"}
                size="sm"
                className={cn(
                  "text-[0.65rem] font-semibold px-3 py-1 transition-all",
                  selectedCategory === cat && "bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)]"
                )}
              >
                {cat}
              </Pill>
            </button>
          ))}
        </div>
      </div>
    );
  }
);

CategoryFilter.displayName = "CategoryFilter";
