import fs from "fs";
import path from "path";
import { JournalEntry, JournalPlatform } from "@/types/journal";

/**
 * Helper to recursively discover all .mdx and .md files under a directory
 */
function getFilesRecursively(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else if (file.endsWith(".mdx") || file.endsWith(".md")) {
      // Exclude TEMPLATE files
      if (!file.includes("TEMPLATE")) {
        results.push(filePath);
      }
    }
  }
  return results;
}

/**
 * Robust Zero-Dependency Frontmatter Parser
 */
function parseFrontmatter(fileContent: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;
  const match = frontmatterRegex.exec(fileContent.trim());

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const rawYaml = match[1];
  const content = match[2] || "";
  const data: Record<string, any> = {};

  const lines = rawYaml.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const colonIndex = trimmed.indexOf(":");
    if (colonIndex === -1) continue;

    const key = trimmed.slice(0, colonIndex).trim();
    let value = trimmed.slice(colonIndex + 1).trim();

    // Remove quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    // Handle Booleans
    if (value === "true") {
      data[key] = true;
    } else if (value === "false") {
      data[key] = false;
    } else if (value.startsWith("[") && value.endsWith("]")) {
      // Handle simple inline arrays: ["AI", "RAG"]
      const arrayContent = value.slice(1, -1).trim();
      if (!arrayContent) {
        data[key] = [];
      } else {
        data[key] = arrayContent
          .split(",")
          .map((item) => item.trim().replace(/^['"]|['"]$/g, ""))
          .filter(Boolean);
      }
    } else {
      data[key] = value;
    }
  }

  return { data, content };
}

/**
 * Formats a raw slug into Title Case for fallback title generation
 */
function titleCaseFromSlug(slug: string): string {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Main Loader: Reads and returns all strongly typed Journal entries from /content/journal
 */
export function getAllJournalEntries(): JournalEntry[] {
  const journalDir = path.join(process.cwd(), "content", "journal");
  const filePaths = getFilesRecursively(journalDir);

  const entries: JournalEntry[] = filePaths.map((filePath) => {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = parseFrontmatter(fileContent);

    const relativePath = path.relative(journalDir, filePath);
    const slug = path.basename(filePath, path.extname(filePath));

    // Determine platform from frontmatter or parent directory
    let platform: JournalPlatform = "article";
    if (data.platform) {
      platform = data.platform.toLowerCase() as JournalPlatform;
    } else if (relativePath.includes("linkedin")) {
      platform = "linkedin";
    } else if (relativePath.includes("medium")) {
      platform = "medium";
    }

    // Title fallback
    const title =
      data.title && data.title.trim() !== ""
        ? data.title
        : titleCaseFromSlug(slug);

    // Published date fallback
    const published = data.published || "2025-05-01";

    // Summary fallback
    const summary =
      data.summary && data.summary.trim() !== ""
        ? data.summary
        : `Engineering insights and notes on ${title.toLowerCase()}.`;

    // Tags fallback
    const tags = Array.isArray(data.tags) && data.tags.length > 0
      ? data.tags
      : ["Engineering", "AI"];

    // Embed and URLs
    const embedUrl = data.embed || undefined;
    const url = data.url || (embedUrl ? embedUrl : undefined);

    return {
      id: slug,
      slug,
      title,
      platform,
      published,
      featured: Boolean(data.featured),
      summary,
      tags,
      readTime: data.readTime || "5 min read",
      embedUrl,
      url,
      cover: data.cover || undefined,
      content,
    };
  });

  // Sort by date published descending
  return entries.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
}

/**
 * Get top featured journal entries
 */
export function getFeaturedJournalEntries(): JournalEntry[] {
  const all = getAllJournalEntries();
  const featured = all.filter((entry) => entry.featured);
  return featured.length > 0 ? featured : all.slice(0, 3);
}

/**
 * Get journal entries by platform
 */
export function getJournalEntriesByPlatform(platform: JournalPlatform): JournalEntry[] {
  return getAllJournalEntries().filter((entry) => entry.platform === platform);
}

/**
 * Get unique categories/tags across all articles
 */
export function getJournalCategories(): string[] {
  const all = getAllJournalEntries();
  const categorySet = new Set<string>();

  all.forEach((entry) => {
    entry.tags.forEach((tag) => categorySet.add(tag));
  });

  return Array.from(categorySet);
}
