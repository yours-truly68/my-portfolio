import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavItem {
  id: string;
  number: string;
  label: string;
  href: string;
}

export const defaultNavItems: NavItem[] = [
  { id: "home", number: "01", label: "HOME", href: "#home" },
  { id: "projects", number: "02", label: "PROJECTS", href: "#projects" },
  { id: "journal", number: "03", label: "JOURNAL", href: "#journal" },
  { id: "experience", number: "04", label: "EXPERIENCE", href: "#experience" },
  { id: "principles", number: "05", label: "PRINCIPLES", href: "#principles" },
  { id: "contact", number: "06", label: "CONTACT", href: "#contact" },
];

export interface SidebarNavigationProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
  activeId?: string;
}

export const SidebarNavigation = React.forwardRef<HTMLElement, SidebarNavigationProps>(
  ({ className, items = defaultNavItems, activeId = "home", ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Main Navigation"
        className={cn("flex flex-col gap-2 my-auto px-4", className)}
        {...props}
      >
        <ul className="flex flex-col gap-3">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={cn(
                    "group flex flex-col gap-0.5 text-[0.7rem] font-bold tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] rounded-sm py-1",
                    isActive
                      ? "text-[var(--color-brand-primary)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="flex items-center gap-1.5">
                    {item.number}
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)]" />
                    )}
                  </span>
                  <span className="uppercase">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
);

SidebarNavigation.displayName = "SidebarNavigation";
