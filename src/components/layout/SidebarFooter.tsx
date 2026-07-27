"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, FileText, Sun, Moon } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/lib/utils";

export type SidebarFooterProps = React.HTMLAttributes<HTMLDivElement>;

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const themeListeners = new Set<() => void>();

function getThemeSnapshot(): "light" | "dark" {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("portfolio-theme") as "light" | "dark";
    if (saved) return saved;
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  }
  return "dark";
}

function getServerThemeSnapshot(): "light" | "dark" {
  return "dark";
}

function subscribeTheme(callback: () => void) {
  themeListeners.add(callback);
  return () => themeListeners.delete(callback);
}

export function setThemeState(nextTheme: "light" | "dark") {
  localStorage.setItem("portfolio-theme", nextTheme);
  if (nextTheme === "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
  }
  themeListeners.forEach((listener) => listener());
}

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  SidebarFooterProps
>(({ className, ...props }, ref) => {
  const theme = React.useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  React.useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as "light" | "dark";
    if (saved) {
      setThemeState(saved);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setThemeState(nextTheme);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-4 px-4 py-6 mt-auto border-t border-[var(--color-border-light)] select-none",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <IconButton
          variant="ghost"
          size="sm"
          aria-label="GitHub Profile"
          onClick={() =>
            window.open("https://github.com/yours-truly68", "_blank")
          }
          className="transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <GithubIcon />
        </IconButton>
        <IconButton
          variant="ghost"
          size="sm"
          aria-label="LinkedIn Profile"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/mohammadrazim880/",
              "_blank"
            )
          }
          className="transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <LinkedinIcon />
        </IconButton>
        <IconButton
          variant="ghost"
          size="sm"
          aria-label="Send Email"
          onClick={() =>
            (window.location.href = "mailto:mohammedrazim880@gmail.com")
          }
          className="transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <Mail className="w-4 h-4" />
        </IconButton>
        <Link href="/resume">
          <IconButton
            variant="ghost"
            size="sm"
            aria-label="View Professional Profile & Resume"
            className="transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            <FileText className="w-4 h-4" />
          </IconButton>
        </Link>
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          suppressHydrationWarning
          className="group inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[var(--color-bg-card-subtle)] border border-[var(--color-border-light)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)]"
        >
          <Sun
            suppressHydrationWarning
            className={cn(
              "w-3.5 h-3.5 transition-all duration-300 group-hover:rotate-45",
              theme === "light"
                ? "text-[var(--color-brand-primary)] scale-110"
                : "opacity-40"
            )}
          />
          <Moon
            suppressHydrationWarning
            className={cn(
              "w-3.5 h-3.5 transition-all duration-300 group-hover:-rotate-12",
              theme === "dark"
                ? "text-[var(--color-brand-primary)] scale-110"
                : "opacity-40"
            )}
          />
        </button>
      </div>
    </div>
  );
});

SidebarFooter.displayName = "SidebarFooter";
