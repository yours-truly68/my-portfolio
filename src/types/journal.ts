export type JournalPlatform = "linkedin" | "medium";

export interface JournalEntry {
  id: string;
  platform: JournalPlatform;
  title: string;
  featured?: boolean;

  // LinkedIn
  embedUrl?: string;

  // Medium
  url?: string;
  summary?: string;
  readTime?: string;

  // Shared / Metadata
  tags?: string[];
  published?: string;
  slug?: string;
  cover?: string;
  content?: string;
}

