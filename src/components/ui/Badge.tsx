import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-medium transition-colors rounded-full",
  {
    variants: {
      variant: {
        brand:
          "bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)]/20",
        success:
          "bg-[var(--color-status-active-bg)] text-[var(--color-status-active)] border border-[var(--color-status-active)]/20",
        neutral:
          "bg-[var(--color-bg-card-subtle)] text-[var(--color-text-secondary)] border border-[var(--color-border-light)]",
        dark:
          "bg-[var(--color-bg-card-dark)] text-white/90 border border-white/10",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[0.7rem]",
        md: "px-3 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, dot, children, ...props }, ref) => {
    return (
      <span
        className={cn(badgeVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full shrink-0",
              variant === "success" && "bg-[var(--color-status-active)] animate-pulse",
              variant === "brand" && "bg-[var(--color-brand-primary)]",
              variant === "neutral" && "bg-[var(--color-text-muted)]",
              variant === "dark" && "bg-emerald-400 animate-pulse"
            )}
          />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
