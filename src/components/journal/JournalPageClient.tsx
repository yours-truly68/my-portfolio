"use client";

import * as React from "react";
import { JournalEntry } from "@/types/journal";
import { JournalHero } from "./JournalHero";
import { FeaturedArticleCard } from "./FeaturedArticleCard";
import { CategoryFilter } from "./CategoryFilter";
import { JournalGrid } from "./JournalGrid";
import { WritingPhilosophy } from "./WritingPhilosophy";

export interface JournalPageClientProps {
  initialEntries: JournalEntry[];
  categories: string[];
}

export function JournalPageClient({ initialEntries, categories }: JournalPageClientProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = React.useState<string | null>(null);

  // Featured entries
  const featuredEntries = initialEntries.filter((e) => e.featured);

  // Filtered entries computed directly
  const filteredEntries = initialEntries.filter((entry) => {
    if (selectedPlatform && entry.platform !== selectedPlatform) {
      return false;
    }
    if (selectedCategory && !entry.tags.includes(selectedCategory)) {
      return false;
    }
    return true;
  });

  const linkedinEntries = filteredEntries.filter((e) => e.platform === "linkedin");
  const mediumEntries = filteredEntries.filter((e) => e.platform === "medium");

  return (
    <div className="w-full flex flex-col gap-12 select-none">
      {/* Editorial Hero */}
      <JournalHero />

      {/* Featured Writing Section (2-Column Grid to avoid scrolling doom) */}
      {featuredEntries.length > 0 && !selectedCategory && !selectedPlatform && (
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-[0.65rem] font-bold font-mono uppercase tracking-widest text-[var(--color-brand-primary)]">
              SELECTED ESSAYS & CASE STUDIES
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {featuredEntries.map((entry) => (
              <FeaturedArticleCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      )}

      {/* Category & Platform Filter Bar */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        selectedPlatform={selectedPlatform}
        onSelectCategory={setSelectedCategory}
        onSelectPlatform={setSelectedPlatform}
      />

      {/* Articles Presentation Grid */}
      <section className="flex flex-col gap-8">
        {selectedPlatform === "linkedin" ? (
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-extrabold text-[var(--color-text-primary)]">
              LinkedIn Writing
            </h2>
            <JournalGrid entries={linkedinEntries} />
          </div>
        ) : selectedPlatform === "medium" ? (
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-extrabold text-[var(--color-text-primary)]">
              Medium Articles
            </h2>
            <JournalGrid entries={mediumEntries} />
          </div>
        ) : (
          <JournalGrid entries={filteredEntries} />
        )}
      </section>

      {/* Writing Philosophy Footer Card */}
      <section className="pt-6">
        <WritingPhilosophy />
      </section>
    </div>
  );
}
