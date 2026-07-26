/* ==========================================================================
   AUTHORITATIVE PORTFOLIO DATA
   Source of Truth: src/assets/Mohammad_Razim_Professional_CV.pdf
   ========================================================================== */

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  summary: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
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
  email: "mrazim.dev@gmail.com",
  github: "https://github.com/yours-truly68",
  linkedin: "https://linkedin.com/in/mrazim",
  summary:
    "Software Engineer specializing in Full-Stack AI applications using Python, TypeScript, FastAPI, and Next.js. Experienced in building production-grade AI systems, developer tooling, Retrieval-Augmented Generation (RAG) pipelines, and scalable backend services with modern software architecture, distributed systems, and LLM frameworks.",
};

export const technicalSkills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C"],
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "TanStack Query", "Zustand", "shadcn/ui"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Flask", "Node.js", "Express.js", "WebSockets"],
  },
  {
    category: "Databases & ORMs",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "SQLAlchemy", "Prisma", "Mongoose"],
  },
  {
    category: "AI & LLMs",
    skills: ["OpenAI SDK", "LangChain", "LangGraph", "RAG", "MCP", "AI Agents"],
  },
  {
    category: "Tools & Concepts",
    skills: ["Git", "Docker", "Linux", "Postman", "System Design", "Distributed Systems", "Event-Driven Architecture", "RBAC"],
  },
];

export const professionalExperience: ExperienceItem[] = [
  {
    company: "Dflix",
    role: "Frontend Developer & UI/UX Intern",
    period: "2024 — PRESENT",
    highlights: [
      "Developed responsive production-ready user interfaces for a Web3 movie review platform.",
      "Conducted user research and translated wireframes into scalable frontend components.",
      "Collaborated with designers and engineers to improve usability and user experience.",
      "Built reusable React components following responsive design principles and modular frontend architecture.",
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
    techStack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy", "Zustand"],
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
    id: "g-bot",
    number: "03",
    name: "Gale Chatbot",
    subtitle: "Gale Encyclopedia RAG Chatbot (G-bot)",
    description:
      "RAG-powered medical & encyclopedia assistant for intelligent domain-specific information retrieval.",
    techStack: ["Python", "LangChain", "OpenAI SDK", "Pinecone", "Flask", "PostgreSQL"],
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
    id: "jomatoes",
    number: "05",
    name: "Jomatoes",
    subtitle: "Distributed Food Ordering Platform",
    description:
      "Event-driven food ordering platform with RabbitMQ, WebSockets real-time sync, and Razorpay payments.",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "RabbitMQ", "WebSockets"],
    githubUrl: "https://github.com/yours-truly68/zomato-clone",
    highlights: [
      "Architected a distributed food ordering platform supporting Customers, Restaurant Partners, and Delivery Riders.",
      "Designed an event-driven backend using RabbitMQ to asynchronously coordinate order processing, inventory updates, and delivery workflows.",
      "Implemented real-time order lifecycle synchronization using WebSockets.",
      "Integrated Razorpay for secure payment processing with server-side payment verification.",
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
