"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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
                    "group relative flex flex-col pl-5 transition-all duration-200 ease-out",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] rounded-sm",
                    active
                      ? "text-[var(--color-text-primary)] font-semibold"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]",
                  )}
                >
                  {/* Smooth Sliding Active Indicator Bar using layoutId */}
                  {active && (
                    <motion.span
                      layoutId="sidebarActiveLine"
                      className="absolute left-0 top-0 h-full w-[2px] bg-[var(--color-brand-primary)] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {!active && (
                    <span className="absolute left-0 top-0 h-full w-px bg-transparent group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors duration-200" />
                  )}

                  {/* Number */}
                  <span
                    className={cn(
                      "text-[10px] tracking-[0.35em] uppercase transition-opacity duration-200",
                      active
                        ? "opacity-100 font-bold"
                        : "opacity-40 group-hover:opacity-75",
                    )}
                  >
                    {item.number}
                  </span>

                  {/* Label */}
                  <span
                    className={cn(
                      "text-[14px] font-medium tracking-[0.08em] transition-transform duration-200",
                      active ? "translate-x-0" : "group-hover:translate-x-1.5",
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
