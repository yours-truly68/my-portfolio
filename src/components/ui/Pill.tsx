import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pillVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-medium transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-[rgba(244,244,242,0.9)] text-[var(--color-text-secondary)] border border-[var(--color-border-light)] hover:bg-[var(--color-bg-card-subtle)]",
        solid:
          "bg-[var(--color-bg-card)] text-[var(--color-text-primary)] border border-[var(--color-border-light)] shadow-[var(--shadow-subtle)]",
        dark:
          "bg-[#161824] text-white/80 border border-white/10 hover:border-white/20",
        outline:
          "bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border-medium)]",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[0.7rem]",
        md: "px-3 py-1 text-xs",
        lg: "px-3.5 py-1.5 text-xs font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface PillProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pillVariants> {
  icon?: React.ReactNode;
}

const Pill = React.forwardRef<HTMLSpanElement, PillProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return (
      <span
        className={cn(pillVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </span>
    );
  }
);

Pill.displayName = "Pill";

export { Pill, pillVariants };
