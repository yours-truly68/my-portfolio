import * as React from "react";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export interface HeroDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export const HeroDescription = React.forwardRef<HTMLDivElement, HeroDescriptionProps>(
  (
    {
      className,
      text = "I design and engineer AI systems, developer tools and digital products that solve real problems.",
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-4 max-w-lg", className)} {...props}>
        <div className="w-12 h-[2px] bg-[var(--color-text-primary)] opacity-20 rounded-full" />
        <Text variant="body-lg" className="text-[var(--color-text-secondary)] leading-relaxed">
          {text}
        </Text>
      </div>
    );
  }
);

HeroDescription.displayName = "HeroDescription";
