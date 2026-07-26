"use client";

import * as React from "react";
import { JournalEntry } from "@/types/journal";
import { LinkedInEmbed } from "./LinkedInEmbed";
import { MediumCard } from "./MediumCard";
import { EmptyState } from "./EmptyState";
import { cn } from "@/lib/utils";

export interface JournalGridProps extends React.HTMLAttributes<HTMLDivElement> {
  entries: JournalEntry[];
}

export const JournalGrid = React.forwardRef<HTMLDivElement, JournalGridProps>(
  ({ className, entries, ...props }, ref) => {
    if (entries.length === 0) {
      return <EmptyState />;
    }

    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full select-none", className)}
        {...props}
      >
        {entries.map((entry) => {
          if (entry.platform === "linkedin") {
            return <LinkedInEmbed key={entry.id} entry={entry} />;
          }
          return <MediumCard key={entry.id} entry={entry} />;
        })}
      </div>
    );
  }
);

JournalGrid.displayName = "JournalGrid";
