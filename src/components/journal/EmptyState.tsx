"use client";

import * as React from "react";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
  title?: string;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      className,
      title = "No Articles Found",
      message = "No published journal entries match your selected criteria yet.",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full flex flex-col items-center justify-center gap-3 py-16 px-6 rounded-2xl border border-dashed border-black/10 dark:border-white/10 text-center select-none",
          className
        )}
        {...props}
      >
        <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[var(--color-text-muted)]">
          <FileText className="w-5 h-5" />
        </div>
        <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
          {title}
        </h4>
        <p className="text-xs text-[var(--color-text-secondary)] max-w-sm">
          {message}
        </p>
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";
