import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface SidebarLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
}

export const SidebarLogo = React.forwardRef<HTMLDivElement, SidebarLogoProps>(
  ({ className, href = "/", ...props }, ref) => {
    return (
      <div ref={ref} className={cn("px-4 py-6", className)} {...props}>
        <Link
          href={href}
          className="inline-block text-2xl font-extrabold tracking-tight text-[var(--color-text-primary)] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] rounded-md"
        >
          MR<span className="text-[var(--color-brand-primary)]">.</span>
        </Link>
      </div>
    );
  }
);

SidebarLogo.displayName = "SidebarLogo";
