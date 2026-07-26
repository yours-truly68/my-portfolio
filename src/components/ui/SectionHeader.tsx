import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  align?: "left" | "center" | "between";
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, eyebrow, title, description, action, align = "between", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-3 mb-8 md:mb-12",
          align === "between" && "sm:flex-row sm:items-end sm:justify-between",
          align === "center" && "text-center items-center",
          className
        )}
        {...props}
      >
        <div className="flex flex-col gap-1.5 max-w-2xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-[var(--font-eyebrow)] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)]" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-[var(--font-heading-xl)] font-bold tracking-tight text-[var(--color-text-primary)]">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-[var(--font-body-md)] text-[var(--color-text-secondary)] mt-1">
              {description}
            </p>
          )}
          {children}
        </div>
        {action && <div className="mt-4 sm:mt-0 shrink-0">{action}</div>}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
