"use client";

import * as React from "react";
import { ExternalLink, Linkedin } from "lucide-react";
import { JournalEntry } from "@/types/journal";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

export interface LinkedInEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
  entry: JournalEntry;
}

export const LinkedInEmbed = React.forwardRef<HTMLDivElement, LinkedInEmbedProps>(
  ({ className, entry, ...props }, ref) => {
    const [loaded, setLoaded] = React.useState(false);

    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex flex-col gap-4 rounded-[22px] bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 p-4 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg overflow-hidden select-none",
          className
        )}
        {...props}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-3 px-1 pt-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#0077B5]/10 flex items-center justify-center text-[#0077B5]">
              <Linkedin className="w-4 h-4" />
            </div>
            <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
              LinkedIn Post • {entry.published}
            </span>
          </div>

          {entry.url && (
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[var(--color-brand-primary)] hover:underline flex items-center gap-1"
            >
              <span>View Post</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Post Title & Tags */}
        <div className="flex flex-col gap-2 px-1">
          <h3 className="text-base font-bold text-[var(--color-text-primary)] leading-snug">
            {entry.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <Pill key={tag} variant="default" size="sm" className="text-[0.625rem] px-2 py-0.5">
                {tag}
              </Pill>
            ))}
          </div>
        </div>

        {/* Responsive Lazy-Loaded Iframe Container */}
        {entry.embedUrl ? (
          <div className="relative w-full rounded-xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 min-h-[420px]">
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center text-xs text-[var(--color-text-muted)] animate-pulse">
                Loading LinkedIn Embed...
              </div>
            )}
            <iframe
              src={entry.embedUrl}
              title={entry.title}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              className="w-full h-[450px] sm:h-[480px] border-0 rounded-xl"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-purple-500/[0.04] border border-purple-500/10 text-xs text-[var(--color-text-secondary)] leading-relaxed">
            {entry.summary}
          </div>
        )}
      </div>
    );
  }
);

LinkedInEmbed.displayName = "LinkedInEmbed";
