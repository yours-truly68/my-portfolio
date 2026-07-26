import * as React from "react";
import { cn } from "@/lib/utils";

export type MainContentProps = React.HTMLAttributes<HTMLDivElement>;

export const MainContent = React.forwardRef<HTMLDivElement, MainContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(
          "min-h-screen w-full lg:pl-[var(--sidebar-width)] flex flex-col transition-all",
          className
        )}
        {...props}
      >
        {children}
      </main>
    );
  }
);

MainContent.displayName = "MainContent";
