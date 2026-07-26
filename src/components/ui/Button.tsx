import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[#101010] text-white hover:bg-[#262626] dark:bg-white dark:text-[#101010] dark:hover:bg-slate-100 shadow-sm",
        secondary:
          "bg-black/[0.04] dark:bg-white/10 text-[var(--color-text-primary)] border border-black/[0.06] dark:border-white/15 hover:bg-black/[0.08] dark:hover:bg-white/20 hover:border-black/15 dark:hover:border-white/30 shadow-xs",
        ghost:
          "bg-transparent text-[var(--color-text-primary)] hover:bg-black/5 dark:hover:bg-white/10",
        icon:
          "bg-black/[0.04] dark:bg-white/10 text-[var(--color-text-primary)] border border-black/[0.06] dark:border-white/15 hover:bg-black/[0.08] dark:hover:bg-white/20 rounded-full shadow-xs p-2.5",
        dark:
          "bg-[#0E1015] text-white hover:bg-[#181b28] border border-white/15 shadow-sm",
      },
      size: {
        sm: "h-9 px-3.5 text-xs rounded-lg gap-1.5",
        md: "h-11 px-5 text-sm rounded-xl gap-2",
        lg: "h-13 px-6 text-base rounded-xl gap-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
