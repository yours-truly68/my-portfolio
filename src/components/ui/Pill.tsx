import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pillVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-black/[0.04] dark:bg-white/10 text-slate-700 dark:text-white/85 border border-black/[0.06] dark:border-white/15 hover:bg-black/[0.08] dark:hover:bg-white/20 hover:border-black/15 dark:hover:border-white/30 hover:text-slate-900 dark:hover:text-white",
        solid:
          "bg-white dark:bg-white/15 text-slate-900 dark:text-white border border-black/10 dark:border-white/20 shadow-xs hover:bg-slate-50 dark:hover:bg-white/25",
        dark:
          "bg-white/10 text-white/85 border border-white/15 hover:bg-white/20 hover:border-white/30 hover:text-white",
        outline:
          "bg-transparent text-slate-700 dark:text-white/75 border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[0.675rem]",
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
