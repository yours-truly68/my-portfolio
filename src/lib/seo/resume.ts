import { personalInfo } from "@/data/portfolioData";

export function generateResumeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: personalInfo.name,
      jobTitle: personalInfo.title,
      description: personalInfo.summary,
      hasOccupation: {
        "@type": "Occupation",
        name: personalInfo.title,
        occupationLocation: {
          "@type": "City",
          name: personalInfo.location,
        },
        skills: [
          "Python",
          "TypeScript",
          "Next.js",
          "FastAPI",
          "PostgreSQL",
          "Agentic AI Systems",
        ],
      },
    },
  };
}
