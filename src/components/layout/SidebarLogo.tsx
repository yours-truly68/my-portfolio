"use client";

import * as React from "react";
import Link from "next/link";
import { useSplash } from "@/components/ui/SplashScreen";
import { cn } from "@/lib/utils";

export interface SidebarLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
}

export const SidebarLogo = React.forwardRef<HTMLDivElement, SidebarLogoProps>(
  ({ className, href = "/", ...props }, ref) => {
    const { triggerSplash } = useSplash();

    return (
      <div ref={ref} className={cn("px-4 py-6", className)} {...props}>
        <Link
          href={href}
          onClick={() => {
            triggerSplash();
          }}
          className="inline-flex items-center gap-1 hover:opacity-90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] rounded-lg select-none group"
        >
          {/* MR Text in Dynamic Theme Color (Pitch Black in Light Mode, Pure White in Dark Mode) */}
          <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-[var(--color-text-primary)] font-sans transition-colors duration-200">
            MR
          </span>

          {/* Signature Purple Dot */}
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] bg-[#7B61FF] inline-block mb-1 group-hover:scale-110 transition-transform duration-200" />
        </Link>
      </div>
    );
  }
);

SidebarLogo.displayName = "SidebarLogo";
