import { personalInfo } from "@/data/portfolioData";

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: personalInfo.email,
    sameAs: [personalInfo.github, personalInfo.linkedin],
    worksFor: {
      "@type": "Organization",
      name: personalInfo.currentEmployer,
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Full Stack Development",
      "Python",
      "TypeScript",
      "Next.js",
      "FastAPI",
      "LLM Workflows",
      "System Design",
    ],
  };
}
