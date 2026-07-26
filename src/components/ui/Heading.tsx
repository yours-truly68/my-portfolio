import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-bold text-[var(--color-text-primary)]", {
  variants: {
    variant: {
      display:
        "text-[var(--font-display-xl)] leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tightest)]",
      h1:
        "text-[var(--font-display-lg)] leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tightest)]",
      h2:
        "text-[var(--font-heading-xl)] leading-[var(--line-height-snug)] tracking-[var(--letter-spacing-tight)]",
      h3:
        "text-[var(--font-heading-lg)] leading-[var(--line-height-snug)] tracking-[var(--letter-spacing-tight)]",
      h4:
        "text-[var(--font-heading-md)] leading-[var(--line-height-normal)] tracking-normal",
      eyebrow:
        "text-[var(--font-eyebrow)] uppercase tracking-[var(--letter-spacing-widest)] font-semibold text-[var(--color-text-muted)]",
    },
  },
  defaultVariants: {
    variant: "h2",
  },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingTag;
  italicAccent?: boolean;
  gradientText?: boolean;
  textBalance?: boolean;
}

const tagMap: Record<NonNullable<VariantProps<typeof headingVariants>["variant"]>, HeadingTag> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  eyebrow: "p",
};

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      variant = "h2",
      as,
      italicAccent = false,
      gradientText = false,
      textBalance = false,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || tagMap[variant || "h2"] || "h2";

    return (
      <Component
        ref={ref}
        className={cn(
          headingVariants({ variant }),
          italicAccent && "font-serif-italic",
          gradientText && "gradient-text",
          textBalance && "text-balance",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
