export type JournalPlatform = "linkedin" | "medium" | "hashnode" | "devto" | "article";

export interface JournalEntry {
  id: string;
  slug: string;
  title: string;
  platform: JournalPlatform;
  published: string;
  featured: boolean;
  summary: string;
  tags: string[];
  readTime: string;
  embedUrl?: string;
  url?: string;
  cover?: string;
  content?: string;
}
