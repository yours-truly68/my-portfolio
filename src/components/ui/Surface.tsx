import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const surfaceVariants = cva("transition-all duration-200", {
  variants: {
    elevation: {
      base: "bg-[var(--surface-base)]",
      card: "bg-[var(--surface-card)] border border-[var(--color-border-light)] shadow-[var(--shadow-card)]",
      raised: "bg-[var(--surface-raised)] border border-[var(--color-border-light)] shadow-[var(--shadow-card-hover)]",
      floating: "bg-[var(--surface-floating)] backdrop-blur-[var(--blur-md)] border border-[var(--color-border-light)] shadow-[var(--shadow-elevated)]",
      overlay: "bg-[var(--surface-overlay)] backdrop-blur-[var(--blur-sm)]",
      dark: "bg-[var(--surface-dark)] text-white border border-[var(--color-border-dark)]",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-[var(--radius-sm)]",
      md: "rounded-[var(--radius-md)]",
      lg: "rounded-[var(--radius-lg)]",
      xl: "rounded-[var(--radius-xl)]",
      "2xl": "rounded-[var(--radius-2xl)]",
      "3xl": "rounded-[var(--radius-3xl)]",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    elevation: "card",
    radius: "2xl",
  },
});

export interface SurfaceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof surfaceVariants> {}

const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, elevation, radius, ...props }, ref) => {
    return (
      <div
        className={cn(surfaceVariants({ elevation, radius, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Surface.displayName = "Surface";

export { Surface, surfaceVariants };
