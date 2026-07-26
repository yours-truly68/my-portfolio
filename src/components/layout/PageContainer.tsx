import * as React from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export type PageContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const PageContainer = React.forwardRef<HTMLDivElement, PageContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full py-4 sm:py-6 lg:py-8", className)} {...props}>
        <Container size="default" className="flex flex-col gap-[var(--space-section-gap)]">
          {children}
        </Container>
      </div>
    );
  }
);

PageContainer.displayName = "PageContainer";
