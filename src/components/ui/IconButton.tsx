import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] disabled:pointer-events-none disabled:opacity-50 active:scale-95 shrink-0 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-black/[0.04] dark:bg-white/10 text-[var(--color-text-primary)] border border-black/[0.06] dark:border-white/15 hover:bg-black/[0.08] dark:hover:bg-white/20 hover:border-black/15 dark:hover:border-white/30 shadow-xs",
        ghost:
          "bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-black/5 dark:hover:bg-white/10",
        dark:
          "bg-[#0E1015] text-white hover:bg-[#181b28] border border-white/15 shadow-sm",
        brand:
          "bg-[var(--color-brand-primary)] text-white hover:bg-[#6E52F3] shadow-xs",
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
