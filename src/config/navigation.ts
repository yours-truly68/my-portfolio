export interface NavItem {
  id: string;
  number: string;
  label: string;
  href: string;
  type: "anchor" | "page";
}

export const siteNavigation: NavItem[] = [
  { id: "home", number: "01", label: "Home", href: "/", type: "anchor" },
  { id: "projects", number: "02", label: "Projects", href: "/#projects", type: "anchor" },
  { id: "journal", number: "03", label: "Journal", href: "/#journal", type: "anchor" },
  { id: "experience", number: "04", label: "Experience", href: "/experience", type: "page" },
  { id: "principles", number: "05", label: "Principles", href: "/#principles", type: "anchor" },
  { id: "contact", number: "06", label: "Contact", href: "/#contact", type: "anchor" },
  { id: "resume", number: "07", label: "Resume", href: "/resume", type: "page" },
];

export const resumeNavigation = [
  { id: "summary", label: "Summary" },
  { id: "highlights", label: "Highlights" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
] as const;
