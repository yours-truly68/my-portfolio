import { journalEntries, JournalEntry, JournalPlatform } from "@/content/journal/journalData";

/**
 * Main Loader: Returns all strongly typed Journal entries from journalData.ts
 */
export function getAllJournalEntries(): JournalEntry[] {
  return journalEntries;
}

/**
 * Get top featured journal entries
 */
export function getFeaturedJournalEntries(): JournalEntry[] {
  const featured = journalEntries.filter((entry) => entry.featured);
  return featured.length > 0 ? featured : journalEntries.slice(0, 3);
}

/**
 * Get journal entries by platform
 */
export function getJournalEntriesByPlatform(platform: JournalPlatform): JournalEntry[] {
  return journalEntries.filter((entry) => entry.platform === platform);
}

/**
 * Get unique categories/tags across all articles
 */
export function getJournalCategories(): string[] {
  const categorySet = new Set<string>();

  journalEntries.forEach((entry) => {
    if (entry.tags && Array.isArray(entry.tags)) {
      entry.tags.forEach((tag) => categorySet.add(tag));
    }
  });

  return Array.from(categorySet);
}

