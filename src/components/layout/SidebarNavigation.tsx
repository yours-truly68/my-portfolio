"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNavigation, NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

export interface SidebarNavigationProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
  activeId?: string;
}

export const SidebarNavigation = React.forwardRef<
  HTMLElement,
  SidebarNavigationProps
>(
  (
    { className, items = siteNavigation, activeId = "home", ...props },
    ref,
  ) => {
    const pathname = usePathname();

    const handleAnchorClick = (
      e: React.MouseEvent<HTMLAnchorElement>,
      item: NavItem
    ) => {
      // If we are on homepage and clicking an anchor, smooth scroll locally
      if (pathname === "/" && item.type === "anchor") {
        if (item.id === "home") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(item.id);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    return (
      <nav
        ref={ref}
        aria-label="Primary Global Navigation"
        className={cn("w-44", className)}
        {...props}
      >
        <ul className="flex flex-col gap-8">
          {items.map((item) => {
            const active = activeId === item.id;

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative flex flex-col pl-5 transition-all duration-300 ease-out",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] rounded-sm",
                    active
                      ? "text-[#101010] dark:text-white"
                      : "text-[#5E5E5E] dark:text-slate-400 hover:text-[#101010]"
                  )}
                >
                  {/* Left Active Line */}
                  <span
                    className={cn(
                      "absolute left-0 top-0 h-full w-px transition-all duration-300",
                      active
                        ? "bg-[var(--color-brand-primary)]"
                        : "bg-transparent group-hover:bg-[#ECE9E6]",
                    )}
                  />

                  {/* Number */}
                  <span
                    className={cn(
                      "text-[10px] tracking-[0.35em] uppercase font-mono transition-opacity duration-300",
                      active
                        ? "text-[#101010] dark:text-white font-bold"
                        : "text-[#B8B8B8] font-normal group-hover:text-[#5E5E5E]",
                    )}
                  >
                    {item.number}
                  </span>

                  {/* Label */}
                  <span
                    className={cn(
                      "text-[14px] font-medium tracking-[0.08em] transition-transform duration-300",
                      active ? "translate-x-0 font-semibold" : "group-hover:translate-x-1",
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  },
);

SidebarNavigation.displayName = "SidebarNavigation";
