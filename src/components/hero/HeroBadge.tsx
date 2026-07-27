import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface HeroBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export const HeroBadge = React.forwardRef<HTMLDivElement, HeroBadgeProps>(
  ({ className, label = "CURIOUS & CREATIVE", ...props }, ref) => {
    return (
      <div ref={ref} className={cn("inline-flex items-center", className)} {...props}>
        <Badge variant="brand" size="md" dot className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
          {label}
        </Badge>
      </div>
    );
  }
);

HeroBadge.displayName = "HeroBadge";
