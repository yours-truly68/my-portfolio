/* ==========================================================================
   AUTHORITATIVE PORTFOLIO DATA
   Source of Truth: src/assets/Mohammad_Razim_Professional_CV.pdf & Curated Career Journey
   ========================================================================== */

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  summary: string;
  currentRole: string;
  currentEmployer: string;
  availabilityStatus: string;
  terminalAvailability: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  employmentType?: string;
  status?: "Current" | "Completed";
  badge?: string;
  link?: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  highlights: string[];
  status?: string;
  darkCard?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  grade: string;
}

export const personalInfo: PersonalInfo = {
  name: "Mohammad Razim",
  title: "Full-Stack AI Engineer",
  location: "Bangalore, India",
  email: "mohammedrazim880@gmail.com",
  github: "https://github.com/yours-truly68",
  linkedin: "https://www.linkedin.com/in/mohammadrazim880/",
  summary:
    "Software Engineer specializing in Full-Stack AI applications using Python, TypeScript, FastAPI, and Next.js. Experienced in building production-grade AI systems, developer tooling, Retrieval-Augmented Generation (RAG) pipelines, and scalable backend services with modern software architecture, distributed systems, and LLM frameworks.",
  currentRole: "Software Development Intern",
  currentEmployer: "Fortune Group",
  availabilityStatus: "Software Development Intern @ Fortune Group",
  terminalAvailability:
    "Currently Software Development Intern at Fortune Group. Open to impactful engineering opportunities and collaborations.",
};

export const technicalSkills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C"],
  },
  {
    category: "Frontend",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Redux-toolkit",
      "shadcn/ui",
    ],
  },
  {
    category: "Backend",
    skills: [
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "WebSockets",
      "BunJS",
    ],
  },
  {
    category: "Databases & ORMs",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Pinecone",
      "SQLAlchemy",
      "Prisma",
      "Mongoose",
    ],
  },
  {
    category: "AI & LLMs",
    skills: ["OpenAI SDK", "LangChain", "LangGraph", "RAG", "MCP", "AI Agents"],
  },
  {
    category: "Tools & Concepts",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "Postman",
      "System Design",
      "Distributed Systems",
      "Event-Driven Architecture",
      "RBAC",
    ],
  },
];

export const professionalExperience: ExperienceItem[] = [
  {
    company: "Fortune Group",
    role: "Software Development Intern",
    period: "July 2026 — Present",
    employmentType: "Internship",
    status: "Current",
    badge: "Current",
    highlights: [
      "Building production-grade full-stack applications.",
      "Developing AI-powered internal tools and engineering workflows.",
      "Collaborating with cross-functional engineering teams.",
      "Contributing to scalable software architecture and modern development practices.",
    ],
  },
  {
    company: "Sri Sai Tours",
    role: "Freelance Full-Stack Developer",
    period: "2025",
    badge: "Client Project",
    link: "https://srisaitours.in",
    highlights: [
      "Designed, developed, and deployed the complete website for a travel agency.",
      "Worked directly with stakeholders to understand business requirements.",
      "Improved user journeys and booking experience.",
      "Managed deployment, maintenance, and iterative improvements.",
    ],
  },
  {
    company: "Peri Pair Trading",
    role: "Frontend Engineer",
    period: "2025",
    badge: "Trading Platform",
    highlights: [
      "Built modern dashboards and trading interfaces.",
      "Developed reusable frontend components.",
      "Designed analytical workflows for traders.",
      "Focused on usability, performance, and information hierarchy.",
    ],
  },
  {
    company: "Tech Trade Solutions Limited",
    role: "UI Engineer & Design System Contributor",
    period: "2024 — 2025",
    badge: "Design System",
    highlights: [
      "Helped create and evolve the organization's design system.",
      "Built reusable UI components.",
      "Standardized typography, spacing, colors, and component patterns.",
      "Improved consistency across multiple products.",
      "Worked closely with designers and engineers.",
    ],
  },
  {
    company: "Dflix",
    role: "Frontend Developer & UI/UX Intern",
    period: "2024 — January 2026",
    employmentType: "Internship",
    badge: "Product Design",
    highlights: [
      "Designed user-centric interfaces.",
      "Conducted UX research and interaction design.",
      "Built responsive production-ready frontend features.",
      "Collaborated on product design and feature implementation.",
      "Improved usability through iterative design and user feedback.",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "forge",
    number: "01",
    name: "Forge",
    subtitle: "Decoupled Coding Agent & Custom Harness",
    description:
      "Event-driven execution harness for autonomous software engineering agents with durable checkpointing.",
    techStack: ["Python", "Inngest", "FastAPI", "CLI", "Terminal UI"],
    githubUrl: "https://github.com/yours-truly68/forge",
    darkCard: true,
    highlights: [
      "Designed and built a decoupled event-driven execution harness orchestrating autonomous ReAct software engineering agents.",
      "Developed a terminal-first developer experience supporting interactive command execution, session management, and runtime model switching through CLI commands.",
      "Engineered durable checkpointing for recoverable execution state.",
      "Designed a configurable runtime layer supporting seamless switching between cloud-hosted and local LLM providers.",
    ],
  },
  {
    id: "kando",
    number: "02",
    name: "KANDo",
    subtitle: "Project Management Platform",
    description:
      "Modern kanban platform for high-performance engineering teams with role-based access control.",
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Zustand",
    ],
    githubUrl: "https://github.com/yours-truly68/project-management-system",
    status: "In Progress",
    highlights: [
      "Built a production-grade project management platform supporting collaborative workspaces, Kanban boards, task management, and role-based access control.",
      "Designed a normalized PostgreSQL data model using SQLAlchemy to support workspaces, projects, tasks, and comments.",
      "Implemented Role-Based Access Control (RBAC) for workspace-scoped authorization.",
      "Developed a feature-oriented frontend architecture using TanStack Query and Zustand.",
    ],
  },
  {
    id: "gale",
    number: "03",
    name: "Gale",
    subtitle: "Gale Encyclopedia RAG Chatbot",
    description:
      "RAG-powered medical & encyclopedia assistant for intelligent domain-specific information retrieval.",
    techStack: [
      "Python",
      "LangChain",
      "OpenAI SDK",
      "Pinecone",
      "Flask",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/yours-truly68/G-bot",
    darkCard: true,
    highlights: [
      "Architected and developed a Retrieval-Augmented Generation (RAG) chatbot grounded on the Gale Encyclopedia knowledge base.",
      "Engineered an end-to-end ingestion pipeline to preprocess, chunk, embed, and index encyclopedia documents into Pinecone.",
      "Implemented a retrieval pipeline using LangChain and OpenAI SDK to orchestrate vector search and contextual prompt augmentation.",
      "Built a modular backend exposing REST APIs for document ingestion, semantic retrieval, and conversational querying.",
    ],
  },
  {
    id: "purplexity",
    number: "04",
    name: "Purplexity",
    subtitle: "AI Search Engine & Conversational Assistant",
    description:
      "AI search & discovery platform with streaming LLM responses and Tavily web retrieval.",
    techStack: ["Next.js", "Bun", "Supabase", "PostgreSQL", "Groq", "Qwen"],
    githubUrl: "https://github.com/yours-truly68/purplexity",
    darkCard: true,
    highlights: [
      "Architected an AI-powered search engine with streaming LLM responses.",
      "Integrated Tavily for contextual web retrieval.",
      "Engineered a streaming inference pipeline to progressively deliver LLM responses, reducing perceived latency.",
    ],
  },
  {
    id: "zomatoes",
    number: "05",
    name: "Zomatoes",
    subtitle: "Production-Oriented Online Food Delivery Platform",
    description:
      "Full-stack food delivery platform demonstrating event-driven RabbitMQ messaging, WebSockets real-time sync, and Razorpay payment processing.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RabbitMQ",
      "WebSockets",
      "Razorpay",
      "Docker",
    ],
    githubUrl: "https://github.com/yours-truly68/zomato-clone",
    darkCard: true,
    highlights: [
      "Structured backend using Modular Monolith principles inspired by Microservices for clean domain isolation.",
      "Implemented RabbitMQ to asynchronously coordinate order processing, restaurant notifications, and delivery workflows.",
      "Developed WebSocket communication for live delivery tracking and instant restaurant order updates.",
      "Integrated Razorpay payment gateway with server-side transaction verification for secure checkout.",
      "Containerized deployment using Docker for production-ready engineering workflows.",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    institution: "Ramaiah Institute of Technology",
    degree: "Bachelor of Engineering",
    grade: "CGPA: 7.65",
  },
  {
    institution: "Government Pre - University College, Sagara",
    degree: "12th Std",
    grade: "Percentage: 99.16%",
  },
  {
    institution: "St. Joseph's English Medium High School, Mankalale, Sagara",
    degree: "10th std",
    grade: "Percentage: 98.08%",
  },
];

export interface JournalArticleItem {
  id: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  isDraft?: boolean;
}

export const journalArticles: JournalArticleItem[] = [
  {
    id: "event-driven-ai-agents",
    date: "MAY 18, 2025",
    readTime: "8 MIN READ",
    title: "Designing Reliable AI Agents with Event-Driven Systems",
    summary:
      "Architectural insights on durable checkpointing, execution state recovery, and decoupled agent execution harnesses.",
    isDraft: true,
  },
  {
    id: "rag-at-scale",
    date: "MAY 08, 2025",
    readTime: "12 MIN READ",
    title: "RAG at Scale: Lessons from Building Purplexity",
    summary:
      "Optimizing vector search retrieval latency, contextual prompt augmentation, and streaming inference pipelines.",
    isDraft: true,
  },
  {
    id: "building-kando",
    date: "APR 21, 2025",
    readTime: "6 MIN READ",
    title: "Building KANDo: A Modern Kanban for Engineering Teams",
    summary:
      "Normalizing PostgreSQL schemas with SQLAlchemy, implementing RBAC authorization, and state management with Zustand.",
    isDraft: true,
  },
];

export interface PrincipleItem {
  id: string;
  iconName: "clarity" | "ship" | "iterate" | "share";
  title: string;
  description: string;
}

export const principlesData: PrincipleItem[] = [
  {
    id: "clarity",
    iconName: "clarity",
    title: "Build with clarity",
    description:
      "Simplicity in design, clarity in code, clarity in communication.",
  },
  {
    id: "ship",
    iconName: "ship",
    title: "Ship with confidence",
    description: "Test thoroughly, ship fearlessly, and own the impact.",
  },
  {
    id: "iterate",
    iconName: "iterate",
    title: "Iterate with purpose",
    description: "Learn fast, improve continuously, and build what matters.",
  },
  {
    id: "share",
    iconName: "share",
    title: "Share and give back",
    description: "Knowledge grows when shared. Community matters.",
  },
];
