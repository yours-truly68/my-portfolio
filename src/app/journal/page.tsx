import { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { JournalPageClient } from "@/components/journal/JournalPageClient";
import { getAllJournalEntries, getJournalCategories } from "@/lib/journal/journalLoader";

export const metadata: Metadata = {
  title: "Journal & Engineering Writing — Mohammad Razim",
  description:
    "Engineering insights, AI architecture breakdowns, design system notes, and technical articles by Mohammad Razim.",
  openGraph: {
    title: "Journal & Engineering Writing — Mohammad Razim",
    description:
      "Engineering insights, AI architecture breakdowns, design system notes, and technical articles by Mohammad Razim.",
    url: "https://mohammadrazim.dev/journal",
    type: "website",
  },
};

export default function JournalPage() {
  const entries = getAllJournalEntries();
  const categories = getJournalCategories();

  return (
    <MainLayout>
      <div className="w-full max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
        <JournalPageClient initialEntries={entries} categories={categories} />
      </div>
    </MainLayout>
  );
}
