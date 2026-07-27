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

  // Shared
  tags?: string[];
}

export const journalEntries: JournalEntry[] = [
  // -----------------------------
  // LINKEDIN
  // -----------------------------

  {
    id: "7478122985254477824",
    platform: "linkedin",
    title: "LinkedIn Post 01",
    featured: true,
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7478122985254477824",
  },

  {
    id: "7478627499766153216",
    platform: "linkedin",
    title: "LinkedIn Post 02",
    featured: true,
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7478627499766153216",
  },

  {
    id: "7479430275907829760",
    platform: "linkedin",
    title: "LinkedIn Post 03",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7479430275907829760?collapsed=1",
  },

  {
    id: "7479788706715934720",
    platform: "linkedin",
    title: "LinkedIn Post 04",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7479788706715934720",
  },

  {
    id: "7481678035956723712",
    platform: "linkedin",
    title: "LinkedIn Post 05",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7481678035956723712",
  },

  {
    id: "7483121335804633088",
    platform: "linkedin",
    title: "LinkedIn Post 06",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7483121335804633088",
  },

  {
    id: "7483178604147777536",
    platform: "linkedin",
    title: "LinkedIn Post 07",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7483178604147777536",
  },

  {
    id: "7483921145466040322",
    platform: "linkedin",
    title: "LinkedIn Post 08",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7483921145466040322",
  },

  // -----------------------------
  // MEDIUM
  // -----------------------------

  {
    id: "rope-geometry-of-memory",
    platform: "medium",
    title:
      "The Geometry of Memory: How Rotary Position Embeddings Scaled LLMs from 4k to 1 Million Tokens",

    summary:
      "An intuitive exploration of Rotary Position Embeddings (RoPE), explaining how geometric rotations enable Transformers to scale from a few thousand tokens to context windows measured in millions.",

    url: "https://medium.com/@mohammadrazim880/the-geometry-of-memory-how-rotary-position-embeddings-scaled-llms-from-4k-to-1-million-tokens-f3c64f2b04e9?sharedUserId=mohammadrazim880",

    readTime: "6 min",

    featured: true,

    tags: ["LLMs", "Transformers", "RoPE", "AI", "Deep Learning"],
  },

  {
    id: "acid-properties",
    platform: "medium",

    title: "Acid Properties Beyond What's Generally Discussed and Taught",

    summary:
      "A broader look at acid chemistry that goes beyond introductory concepts, exploring lesser-known properties and developing intuition through deeper scientific discussion.",

    url: "https://medium.com/@mohammadrazim880/acid-properties-beyond-whats-generally-discussed-and-taught-b408f7d6c95f?sharedUserId=mohammadrazim880",

    readTime: "8 min",

    featured: false,

    tags: ["Chemistry", "Science", "Education"],
  },
];
