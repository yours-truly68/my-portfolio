import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("text-[var(--color-text-primary)]", {
  variants: {
    variant: {
      body: "text-[var(--font-body-md)] leading-[var(--line-height-normal)]",
      "body-lg": "text-[var(--font-body-lg)] leading-[var(--line-height-relaxed)]",
      caption: "text-[var(--font-caption)] leading-[var(--line-height-normal)] text-[var(--color-text-muted)]",
      muted: "text-[var(--font-body-sm)] leading-[var(--line-height-normal)] text-[var(--color-text-secondary)]",
      small: "text-[var(--font-body-sm)] leading-[var(--line-height-normal)]",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TextTag = "p" | "span" | "div" | "label" | "caption" | "small";

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: TextTag;
  textBalance?: boolean;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, as = "p", textBalance = false, children, ...props }, ref) => {
    const Component = as as React.ElementType;

    return (
      <Component
        ref={ref}
        className={cn(textVariants({ variant }), textBalance && "text-balance", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

export { Text, textVariants };
