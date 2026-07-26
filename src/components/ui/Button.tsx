import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-text-primary)] text-[var(--color-bg-card)] hover:bg-[#1a1a1a] shadow-[var(--shadow-subtle)]",
        secondary:
          "bg-[var(--color-bg-card)] text-[var(--color-text-primary)] border border-[var(--color-border-light)] hover:border-[var(--color-border-medium)] hover:bg-[var(--color-bg-card-subtle)] shadow-[var(--shadow-subtle)]",
        ghost:
          "bg-transparent text-[var(--color-text-primary)] hover:bg-black/5 dark:hover:bg-white/5",
        icon:
          "bg-[var(--color-bg-card)] text-[var(--color-text-primary)] border border-[var(--color-border-light)] rounded-full hover:border-[var(--color-border-medium)] hover:bg-[var(--color-bg-card-subtle)] shadow-[var(--shadow-subtle)] p-2.5",
        dark:
          "bg-[var(--color-bg-card-dark)] text-white hover:bg-[#161824] border border-white/10 shadow-[var(--shadow-card)]",
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
