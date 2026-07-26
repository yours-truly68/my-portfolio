import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] disabled:pointer-events-none disabled:opacity-50 active:scale-95 shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-bg-card)] text-[var(--color-text-primary)] border border-[var(--color-border-light)] hover:border-[var(--color-border-medium)] hover:bg-[var(--color-bg-card-subtle)] shadow-[var(--shadow-subtle)]",
        ghost:
          "bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-black/5 dark:hover:bg-white/5",
        dark:
          "bg-[var(--color-bg-card-dark)] text-white hover:bg-[#181b28] border border-white/10 shadow-[var(--shadow-card)]",
        brand:
          "bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-secondary)] shadow-[var(--shadow-glow-brand)]",
      },
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  "aria-label": string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, "aria-label": ariaLabel, ...props }, ref) => {
    return (
      <button
        aria-label={ariaLabel}
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
