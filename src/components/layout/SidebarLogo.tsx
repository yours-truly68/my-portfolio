import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
          className="inline-flex items-center hover:opacity-90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] rounded-lg select-none"
        >
          {/* Logo Black for Light mode (Scaled 2x) */}
          <Image
            src="/Logo Black.png"
            alt="Mohammad Razim Logo"
            width={160}
            height={64}
            priority
            className="dark:hidden h-12 sm:h-14 w-auto object-contain"
          />
          {/* Logo White for Dark mode (Scaled 2x) */}
          <Image
            src="/Logo White.png"
            alt="Mohammad Razim Logo"
            width={160}
            height={64}
            priority
            className="hidden dark:block h-12 sm:h-14 w-auto object-contain"
          />
        </Link>
      </div>
    );
  }
);

SidebarLogo.displayName = "SidebarLogo";
