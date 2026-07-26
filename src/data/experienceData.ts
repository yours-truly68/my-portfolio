/* ==========================================================================
   DEDICATED EXPERIENCE DATA & CASE STUDIES
   Source of Truth for /experience Route
   ========================================================================== */

export interface DetailedExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  employmentType: string;
  badge: string;
  link?: string;
  overview: string;
  responsibilities: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  impact: string[];
  technologies: string[];
}

export const detailedExperiences: DetailedExperienceItem[] = [
  {
    id: "fortune-group",
    role: "Software Development Intern",
    company: "Fortune Group",
    period: "July 2026 — Present",
    employmentType: "Internship",
    badge: "Current",
    overview:
      "Working on production-grade full-stack systems and internal AI tools that enhance engineering workflows and streamline data-driven operations across teams.",
    responsibilities: [
      "Building full-stack web applications and internal software tooling using Next.js, FastAPI, and PostgreSQL.",
      "Developing AI-powered assistant features and automated workflow pipelines.",
      "Collaborating with cross-functional engineering teams to implement scalable backend endpoints and maintainable frontend interfaces.",
      "Contributing to code reviews, API contract designs, and system architecture planning.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Integrating AI-driven workflows into legacy internal operations required low latency and reliable data processing.",
        solution:
          "Engineered asynchronous FastAPI endpoints with background task queues and streaming responses, reducing perceived latency for end users.",
      },
    ],
    impact: [
      "Accelerated internal task execution for operational teams.",
      "Improved code consistency and reduced deployment friction across full-stack features.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "AI Agents",
    ],
  },
  {
    id: "sri-sai-tours",

    role: "Freelance Framer Website Architect & Designer",

    company: "Sri Sai Tours",

    period: "2025",

    employmentType: "Client Project",

    badge: "Framer Project",

    link: "https://srisaitours.in",

    overview:
      "Designed and delivered the complete digital experience for a regional travel agency using Framer, focusing on information architecture, responsive design, SEO, CRM integration, animations, and customer engagement.",

    responsibilities: [
      "Designed the complete website architecture and user journey using Framer.",

      "Worked directly with stakeholders to understand business requirements and convert them into an intuitive customer experience.",

      "Implemented responsive layouts, smooth interactions, and production-ready animations.",

      "Integrated CRM workflows, chatbot support, and enquiry capture forms.",

      "Optimized on-page SEO, accessibility, and overall website performance.",

      "Managed publishing, domain configuration, and post-launch iterations.",
    ],

    challengesAndSolutions: [
      {
        challenge:
          "Creating a modern travel website that remained easy to manage while providing a premium customer experience.",

        solution:
          "Designed a scalable Framer architecture with reusable sections, optimized navigation, SEO best practices, integrated CRM workflows, and chatbot support.",
      },
    ],

    impact: [
      "Delivered a complete production-ready website from concept to launch.",

      "Created a modern digital presence focused on improving customer enquiries and business credibility.",
    ],

    technologies: [
      "Framer",

      "CMS",

      "SEO",

      "Responsive Design",

      "CRM Integration",

      "Chatbot Integration",

      "Interaction Design",

      "Animation Design",
    ],
  },
  {
    id: "peri-pair-trading",

    role: "UI/UX Designer & Design System Contributor",

    company: "Peri Pair Trading",

    period: "2025",

    employmentType: "Client Project",

    badge: "Product Design",

    overview:
      "Designed modern financial product experiences in Figma, focusing on interface design, user experience optimisation, information architecture, and contributing to a scalable design system for a trading platform.",

    responsibilities: [
      "Designed responsive dashboard and financial platform interfaces in Figma.",

      "Created intuitive user journeys and information architecture for complex trading workflows.",

      "Contributed reusable UI components and patterns to the product's design system.",

      "Refined typography, spacing, colour hierarchy, and interaction patterns to improve consistency.",

      "Collaborated with stakeholders to translate business requirements into user-centred design solutions.",

      "Produced developer-ready design specifications and component documentation.",
    ],

    challengesAndSolutions: [
      {
        challenge:
          "Presenting complex financial information without overwhelming users while maintaining consistency across the platform.",

        solution:
          "Established a structured design system with reusable components, consistent visual hierarchy, and simplified interaction flows, making complex trading interfaces easier to navigate.",
      },
    ],

    impact: [
      "Improved visual consistency through reusable design system components.",

      "Enhanced usability by simplifying financial workflows and strengthening information hierarchy.",

      "Delivered scalable UI foundations that supported future product development.",
    ],

    technologies: [
      "Figma",

      "Design Systems",

      "Component Libraries",

      "Design Tokens",

      "Information Architecture",

      "Interaction Design",

      "Prototyping",

      "User Experience Design",
    ],
  },
  {
    id: "tech-trade-solutions",
    role: "UI Engineer & Design System Contributor",
    company: "Tech Trade Solutions Limited",
    period: "2024 — 2025",
    employmentType: "Professional Collaboration",
    badge: "Design System",
    overview:
      "Contributed to building and scaling the enterprise design system, bridging the gap between product design and engineering across multiple core platforms.",
    responsibilities: [
      "Authored accessible, reusable React component primitives following strict design tokens.",
      "Standardized typography scales, spacing units, dark mode color palettes, and animation curves.",
      "Created comprehensive Storybook documentation and component guidelines for development teams.",
      "Worked closely with UI/UX designers to translate Figma tokens into production code.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Inconsistent UI implementations across products caused styling regressions and duplicate code.",
        solution:
          "Architected a centralized component library with utility-first Tailwind tokens and rigid prop types, cutting duplicate CSS by over 50%.",
      },
    ],
    impact: [
      "Standardized visual identity across multiple web applications.",
      "Reduced feature development time for downstream engineering teams by providing ready-to-use accessible components.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Design Systems",
      "Figma Tokens",
      "Storybook",
    ],
  },
  {
    id: "dflix",
    role: "Frontend Developer & UI/UX Intern",
    company: "Dflix",
    period: "2024 — January 2026",
    employmentType: "Internship",
    badge: "Product Design",
    overview:
      "Led user research, interaction design, and frontend implementation for a Web3 movie review and discovery platform.",
    responsibilities: [
      "Conducted user interviews, wireframing, and user flow mapping for movie review features.",
      "Developed responsive production frontend components using React and Web3 API integrations.",
      "Built user profile management, rating flows, and dynamic catalog discovery views.",
      "Iterated rapidly based on quantitative user metrics and qualitative testing feedback.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Complex Web3 wallet authentication confused non-technical users looking to read and post reviews.",
        solution:
          "Redesigned the onboarding flow to support seamless guest browsing with progressive wallet connecting only when performing on-chain interactions.",
      },
    ],
    impact: [
      "Improved user onboarding retention by simplifying wallet connections.",
      "Shipped 20+ production UI components powering the primary media discovery engine.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Figma",
      "UI/UX Research",
      "Web3 Integration",
    ],
  },
];

export const experienceTechSummary = [
  {
    category: "Design & UX",
    items: [
      "Figma",
      "Framer",
      "Information Architecture",
      "User Experience",
      "Interaction Design",
      "Responsive Design",
    ],
  },

  {
    category: "Website Delivery",
    items: [
      "CMS",
      "SEO",
      "CRM Integration",
      "Chatbot Integration",
      "Performance Optimization",
      "Accessibility",
    ],
  },

  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
  },

  {
    category: "AI & Software Engineering",
    items: ["Python", "FastAPI", "AI Agents", "LangChain", "RAG", "PostgreSQL"],
  },
];
