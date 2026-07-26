import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface HeroBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export const HeroBadge = React.forwardRef<HTMLDivElement, HeroBadgeProps>(
  ({ className, label = "FULL STACK AI ENGINEER", ...props }, ref) => {
    return (
      <div ref={ref} className={cn("inline-flex items-center", className)} {...props}>
        <Badge variant="brand" size="md" dot className="px-3.5 py-1 text-xs font-semibold tracking-wider uppercase">
          {label}
        </Badge>
      </div>
    );
  }
);

HeroBadge.displayName = "HeroBadge";
