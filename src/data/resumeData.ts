/* ==========================================================================
   RESUME-SPECIFIC DATA ENHANCEMENTS
   Source of Truth: src/assets/Mohammad_Razim_Professional_CV.pdf
   ========================================================================== */

export interface ResumeData {
  currently: string;
  certifications: string;
  resumeHighlights: string[];
  skillsGrouped: {
    category: string;
    skills: string[];
  }[];
}

export const resumeData: ResumeData = {
  currently: "Software Development Intern @ Fortune Group",
  certifications: "Currently pursuing industry certifications.",
  resumeHighlights: [
    "Software Development Intern @ Fortune Group building production-grade AI & Full-Stack tools.",
    "Built 5+ production & open-source projects across Agentic AI, RAG pipelines, and Web3 platforms.",
    "Architected Forge: An event-driven ReAct software engineering execution harness with durable state checkpointing.",
    "Built Gale Chatbot: RAG medical encyclopedia system grounded on vector search (Pinecone) & LangChain.",
    "B.E. in Computer Science from Ramaiah Institute of Technology with strong academic excellence (99.16% in 12th Std, 98.08% in 10th Std).",
  ],
  skillsGrouped: [
    {
      category: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "SQL", "C"],
    },
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "TanStack Query",
        "Zustand",
        "Redux-toolkit",
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
      category: "Databases",
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
      category: "AI & ML",
      skills: [
        "LangChain",
        "LangGraph",
        "OpenAI SDK",
        "Vector Databases",
        "RAG Pipelines",
        "Model Context Protocol (MCP)",
        "AI Agents",
      ],
    },
    {
      category: "Architecture & Tools",
      skills: [
        "REST APIs",
        "Distributed Systems",
        "Event-Driven Architecture",
        "Role-Based Access Control (RBAC)",
        "System Design",
        "Git",
        "Docker",
        "Linux",
      ],
    },
  ],
};
