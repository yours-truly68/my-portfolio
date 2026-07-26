import * as React from "react";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";

export type HeroHeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export const HeroHeading = React.forwardRef<HTMLHeadingElement, HeroHeadingProps>(
  ({ className, ...props }, ref) => {
    return (
      <Heading
        ref={ref}
        variant="display"
        className={cn(
          "text-[clamp(3.25rem,5.5vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-[var(--color-text-primary)] max-w-2xl",
          className
        )}
        {...props}
      >
        Building <br />
        intelligent <br />
        systems <br />
        <span className="font-serif-italic text-[var(--color-brand-primary)] font-normal">that scale.</span>
      </Heading>
    );
  }
);

HeroHeading.displayName = "HeroHeading";
