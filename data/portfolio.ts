export interface Project {
  id: string;
  title: string;
  subtitle: string;
  featured: boolean;
  isCaseStudy?: boolean;
  badge?: string;
  categoryTag?: string;
  projectNumber?: string;
  telemetryType?: "wave" | "metrics" | "spectrum";
  bullets: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  client?: string;
  description?: string;
  bullets: string[];
  stack: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  badge: "Winner" | "Finalist" | "Top 10" | "Award";
  organization?: string;
  description: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  badge?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface StatItem {
  value: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export interface AcademicRecord {
  title: string;
  boardOrInst: string;
  score: string;
  scale: string;
  type: string;
  badge: string;
  highlightColor: string;
}

export interface PortfolioData {
  meta: {
    name: string;
    role: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    githubUrl: string;
    linkedinUrl: string;
    resumeUrl: string;
    systemBuild: string;
  };
  academics: AcademicRecord[];
  stats: StatItem[];
  marqueeTech: string[];
  education: {
    institution: string;
    degree: string;
    period: string;
    cgpa: string;
    coursework: string[];
  };
  focusAreas: {
    title: string;
    description: string;
    icon: string;
  }[];
  experiences: ExperienceItem[];
  projects: Project[];
  skillCategories: SkillCategory[];
  achievements: AchievementItem[];
  certifications: CertificationItem[];
  leadership: LeadershipItem[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  meta: {
    name: "Arkabrata Roy",
    role: "Software Engineer",
    title: "Software Engineer — Backend Systems — Applied AI Engineering",
    tagline:
      "Building backend services, scalable applications, and AI-powered systems.",
    bio: "Final-year Computer Science undergraduate at KIIT University (Aug 2023 – Present, CGPA 7.77/10) focused on Software Engineering, with hands-on experience in Backend Systems and Applied AI. Skilled in building scalable applications, developing reliable backend services, and integrating AI technologies to solve real-world engineering challenges.",
    location: "West Bengal, India / Remote",
    email: "arkabrataroy@gmail.com",
    phone: "+91 9051155639",
    githubUrl: "https://github.com/arka2024",
    linkedinUrl: "https://linkedin.com/in/arkabrata-roy-b006a6280",
    resumeUrl: "/resume.pdf",
    systemBuild: "v2.10.4 • PROD READY",
  },
  academics: [
    {
      title: "B.Tech in Computer Science & Engineering",
      boardOrInst: "KIIT University, Bhubaneswar",
      score: "7.77",
      scale: "/ 10 CGPA",
      type: "Cumulative CGPA",
      badge: "Undergraduate",
      highlightColor: "cyan",
    },
    {
      title: "12th Boards (Senior Secondary)",
      boardOrInst: "ISC Board Examination",
      score: "83.33",
      scale: "%",
      type: "ISC Board Score",
      badge: "Class XII",
      highlightColor: "indigo",
    },
    {
      title: "10th Boards (Secondary)",
      boardOrInst: "ICSE Board Examination",
      score: "86.00",
      scale: "%",
      type: "ICSE Board Score",
      badge: "Class X",
      highlightColor: "emerald",
    },
  ],
  stats: [
    {
      value: "7.77",
      suffix: "/ 10",
      label: "College CGPA Points",
      sublabel: "B.Tech in Computer Science & Engineering, KIIT University, Bhubaneswar",
    },
    {
      value: "83.33",
      suffix: "%",
      label: "12th Boards (Senior Secondary)",
      sublabel: "ISC Board Examination",
    },
    {
      value: "86",
      suffix: "%",
      label: "10th Boards (Secondary)",
      sublabel: "ICSE Board Examination",
    },
  ],
  marqueeTech: [
    "NEXT.JS 14",
    "APACHE KAFKA",
    "POSTGRESQL",
    "DRIZZLE ORM",
    "LANGCHAIN RAG",
    "PYTHON / FLASK",
    "DOCKER CONTAINER",
    "AWS CLOUD",
    "GRPC PROTOBUF",
    "MICROSERVICES",
    "SCIKIT-LEARN",
    "OPENAI GPT-4O",
    "GOOGLE GEMINI",
    "MONGODB",
  ],
  education: {
    institution: "KIIT University, Bhubaneswar",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Aug 2023 – Present",
    cgpa: "7.77 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
    ],
  },
  focusAreas: [
    {
      title: "Backend & Microservices",
      description:
        "Building reliable REST & gRPC APIs, distributed services, and microservice orchestration with Node.js & Flask.",
      icon: "Server",
    },
    {
      title: "Event-Driven & Messaging",
      description:
        "Architecting asynchronous event streams, message buses, and consumer failure recovery with Apache Kafka.",
      icon: "Cpu",
    },
    {
      title: "Applied AI & RAG",
      description:
        "Designing LLM pipelines, vector embeddings, LangChain workflows, and hallucination evaluation frameworks.",
      icon: "Sparkles",
    },
    {
      title: "Database Engineering",
      description:
        "Schema design, relational indexing, and safe schema migrations using PostgreSQL, MongoDB, and Drizzle ORM.",
      icon: "Database",
    },
    {
      title: "Search & Recommendations",
      description:
        "Multi-factor heuristic rankers, KNN retrieval, Cosine & Haversine similarity models, and OpenSearch pipelines.",
      icon: "Search",
    },
    {
      title: "Cloud & Devops",
      description:
        "Containerizing workloads with Docker, continuous delivery via GitHub Actions, and scalable AWS deployments.",
      icon: "Cloud",
    },
  ],
  experiences: [
    {
      id: "sundew-solutions",
      company: "Sundew Solutions",
      role: "Full Stack Developer Intern",
      period: "May 2026 – Jul 2026",
      client: "Asmbel — U.S.-based B2B Home Warranty Platform",
      bullets: [
        "Analyzed and debugged data flows across 12 distributed microservices, resolving service-integration issues across policy, claims, and technician-management workflows.",
        "Developed and integrated REST and gRPC APIs to connect backend services and implement cross-service business workflows.",
        "Implemented asynchronous Kafka event flows, tracing producer-consumer interactions to diagnose failures in distributed workflows.",
        "Managed PostgreSQL schemas and migrations using Drizzle ORM, coordinating database changes with dependent backend services.",
        "Progressed from service-level debugging to end-to-end feature ownership, contributing to implementation, testing, code reviews, and production-oriented fixes.",
      ],
      stack: [
        "Node.js",
        "REST APIs",
        "gRPC",
        "Apache Kafka",
        "PostgreSQL",
        "Drizzle ORM",
        "Microservices",
      ],
    },
    {
      id: "pm-accelerator",
      company: "Product Manager Accelerator (Cohort 6)",
      role: "AI Intern",
      period: "Oct 2025 – Dec 2025",
      bullets: [
        "Collaborated with a 7-member cross-functional team to develop and validate an AI-powered MVP integrating external APIs with application workflows.",
        "Converted product requirements into application features and iterated through testing, debugging, and user feedback to refine the MVP.",
      ],
      stack: [
        "Python",
        "API Workflows",
        "AI Integration",
        "MVP Development",
        "Agile",
      ],
    },
  ],
  projects: [
    {
      id: "asmbel-case-study",
      title: "Asmbel: High-Throughput B2B Warranty Microservices Platform",
      subtitle:
        "Enterprise warranty servicing platform integrating 12 microservices managing policies, claims lifecycles, and technician dispatches.",
      featured: true,
      isCaseStudy: true,
      badge: "Private / NDA",
      categoryTag: "ENTERPRISE BACKEND",
      projectNumber: "01 / 03",
      telemetryType: "wave",
      bullets: [
        "Analyzed and debugged data flows across 12 distributed microservices, resolving service-integration issues across policy, claims, and technician workflows.",
        "Designed resilient REST and high-throughput gRPC inter-service communication channels with automated error-recovery.",
        "Integrated asynchronous Kafka message queues for decoupled workflow triggers and automated PostgreSQL migrations via Drizzle ORM.",
      ],
      stack: [
        "Node.js",
        "REST",
        "gRPC",
        "Apache Kafka",
        "PostgreSQL",
        "Drizzle ORM",
        "Microservices",
      ],
    },
    {
      id: "brightpath",
      title: "BrightPath: AI-Powered School Discovery & RAG Engine",
      subtitle:
        "RAG-based semantic search & recommendation pipeline across 100+ schools with automated hallucination evaluation.",
      featured: true,
      badge: "Featured AI Project",
      categoryTag: "APPLIED AI & RAG",
      projectNumber: "02 / 03",
      telemetryType: "metrics",
      bullets: [
        "Built a RAG-based semantic search and recommendation pipeline covering 100+ schools, combining structured school data with natural-language retrieval.",
        "Automated evaluation for hallucination, relevance, and response quality, reducing manual testing effort by 60%.",
        "Deployed the application on AWS with CI/CD automation, creating a repeatable build, test, and release workflow.",
      ],
      stack: [
        "Next.js",
        "LangChain",
        "OpenAI GPT-4o-mini",
        "OpenSearch",
        "AWS",
        "CI/CD",
      ],
      githubUrl: "https://github.com/arka2024/Brightpath-main",
    },
    {
      id: "cohabitai",
      title: "CohabitAI: Multi-Factor Roommate & PG Allocation Platform",
      subtitle:
        "Multi-factor matching pipeline using Cosine Similarity, Euclidean Distance, TF-IDF, and Haversine Distance.",
      featured: true,
      badge: "Featured ML Project",
      categoryTag: "MACHINE LEARNING",
      projectNumber: "03 / 03",
      telemetryType: "spectrum",
      bullets: [
        "Engineered a multi-factor recommendation pipeline using Cosine Similarity, Euclidean Distance, TF-IDF, and Haversine Distance, improving matching accuracy by 28% across 500+ test profiles.",
        "Combined constraint filtering, ranking, and KNN retrieval to match location, preference, and compatibility requirements.",
        "Integrated Gemini-generated explanations to provide interpretable and personalized recommendation results.",
      ],
      stack: [
        "Python",
        "Flask",
        "Scikit-learn",
        "Google Gemini API",
        "MongoDB",
      ],
      githubUrl: "https://github.com/arka2024/AI-PG-Room-Allocation-FINAL",
    },
    {
      id: "mindgenome-ai",
      title: "Mindgenome-AI",
      subtitle:
        "[EDIT ME] Cognitive Intelligence & Behavioral Analytics Platform",
      featured: false,
      badge: "[EDIT ME]",
      categoryTag: "AI PLATFORM",
      bullets: [
        "[EDIT ME] Interactive cognitive modeling and analytical dashboard built with TypeScript for structured behavioral insights.",
        "[EDIT ME] Modular reactive state management, asynchronous data querying, and modern UI components.",
      ],
      stack: ["TypeScript", "Next.js", "Tailwind CSS", "AI Analytics"],
      githubUrl: "https://github.com/arka2024/Mindgenome-AI",
    },
    {
      id: "traffic-management",
      title: "Traffic Management & Route Optimization",
      subtitle:
        "[EDIT ME] Algorithmic Urban Congestion Analysis & Pathfinding",
      featured: false,
      badge: "[EDIT ME]",
      categoryTag: "SYSTEMS & ALGORITHMS",
      bullets: [
        "[EDIT ME] Dynamic shortest-path graph algorithms and congestion-weighted routing simulating urban transit nodes.",
        "[EDIT ME] Real-time interactive visualization of rerouted trajectories with performance analysis across network choke points.",
      ],
      stack: ["JavaScript", "Graph Theory", "Pathfinding", "Simulation"],
      githubUrl: "https://github.com/arka2024/Traffic-Management_Route-Optimize",
    },
    {
      id: "multilingual-scam-detection",
      title: "Multilingual Scam Detection",
      subtitle: "Cross-Lingual Fraud & Social Engineering Classifier",
      featured: false,
      badge: "Hackathon project (forked)",
      categoryTag: "NLP & SECURITY",
      bullets: [
        "Fork of Sar-Hal/MultilingualScamDetection created for the Global AI Hackathon.",
        "Evaluated multilingual text classification transformers and NLP feature pipelines to detect phishing and fraudulent patterns.",
        "Analyzed cross-lingual semantic representations for resilient zero-shot spam detection.",
      ],
      stack: [
        "Python",
        "NLP",
        "Transformers",
        "Scikit-learn",
        "Hackathon Fork",
      ],
      githubUrl: "https://github.com/arka2024/MultilingualScamDetection",
    },
    {
      id: "deepfake-classifier",
      title: "Deepfake Classifier",
      subtitle:
        "Hybrid CNN/RNN Deep Learning Architecture for Manipulated Media",
      featured: false,
      badge: "Computer Vision",
      categoryTag: "COMPUTER VISION",
      bullets: [
        "Hybrid CNN and RNN model architecture detecting facial manipulation artifacts and temporal frame inconsistencies.",
        "Preprocessed video streams, extracted facial landmarks, and performed spectral frequency analysis using OpenCV.",
      ],
      stack: ["Python", "CNN", "RNN", "OpenCV", "Deep Learning", "PyTorch"],
      githubUrl: "https://github.com/arka2024",
    },
  ],
  skillCategories: [
    {
      category: "Languages",
      iconName: "Code",
      skills: ["Python", "Java", "C", "SQL"],
    },
    {
      category: "Backend",
      iconName: "Server",
      skills: [
        "Node.js",
        "Express.js",
        "Flask",
        "REST APIs",
        "Microservices",
        "gRPC",
        "Apache Kafka",
      ],
    },
    {
      category: "Databases",
      iconName: "Database",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Drizzle ORM",
        "Schema Design",
        "Migrations",
      ],
    },
    {
      category: "AI / ML",
      iconName: "Cpu",
      skills: [
        "Generative AI",
        "LLMs",
        "RAG",
        "LangChain",
        "Hugging Face",
        "Scikit-learn",
        "TF-IDF",
        "Semantic Search",
        "Prompt Engineering",
      ],
    },
    {
      category: "Web & Cloud",
      iconName: "Cloud",
      skills: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "AWS",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Vercel",
      ],
    },
    {
      category: "Engineering",
      iconName: "GitBranch",
      skills: [
        "Distributed Systems",
        "Event-Driven Architecture",
        "API Design",
        "Testing",
        "Debugging",
        "Git",
      ],
    },
  ],
  achievements: [
    {
      title: "Winner: MLSA Hackathon",
      badge: "Winner",
      organization: "Microsoft Learn Student Ambassadors",
      description: "Secured 1st Place in the competitive AI/ML Track.",
    },
    {
      title: "Winner: KPIT NOVA",
      badge: "Winner",
      organization: "KPIT Technologies",
      description: "1st Place in the Embedded Systems & Engineering Challenge.",
    },
    {
      title: "State Finalist: Smart India Hackathon 2024",
      badge: "Finalist",
      organization: "Ministry of Education & AICTE",
      description: "Selected as State Finalist for nationwide software solutions.",
    },
    {
      title: "Top 10: ICDCIT Hackathon",
      badge: "Top 10",
      organization: "ICDCIT",
      description:
        "Ranked among top 10 teams in the Natural Language Processing Track.",
    },
    {
      title: "Award: KIIT FEST — Hack The Bot",
      badge: "Award",
      organization: "KIIT University",
      description: "Awarded for autonomous robotics and algorithmic navigation.",
    },
  ],
  certifications: [
    {
      name: "Prompt Engineering for ChatGPT",
      issuer: "Vanderbilt University",
      badge: "GenAI",
    },
    {
      name: "Generative AI: Introduction and Applications",
      issuer: "IBM",
      badge: "LLMs",
    },
    {
      name: "Google Cloud Fundamentals: Core Infrastructure",
      issuer: "Google Cloud",
      badge: "Cloud",
    },
    {
      name: "Developing a Google SRE Culture",
      issuer: "Google Cloud",
      badge: "DevOps & SRE",
    },
  ],
  leadership: [
    {
      role: "Technical Secretary & Core ML Member",
      organization: "AISOC KIIT",
      period: "May 2024 – Aug 2026",
      bullets: [
        "Led GenAI workshops for 200+ students, covering LLM pipelines, prompt engineering, and model deployment.",
        "Coordinated an AI/ML hackathon involving 50+ teams, managing problem formulation, technical mentoring, and judging logistics.",
      ],
    },
    {
      role: "Tech Lead, Project Wing",
      organization: "IEEE Computer Society KIIT",
      period: "Jan 2026 – Jun 2026",
      bullets: [
        "Led 3+ student engineering project teams building production-ready software solutions.",
        "Mentored members on ML system design, API contracts, deployment pipelines, and code quality.",
      ],
    },
    {
      role: "UI/UX & ML Contributor",
      organization: "Elabs KIIT",
      period: "Mar 2024 – Aug 2026",
      bullets: [
        "Redesigned internal platform interfaces, increasing usability scores by 25%.",
        "Contributed to machine learning personalization modules and algorithmic telemetry.",
      ],
    },
    {
      role: "Design Intern",
      organization: "KIIT E-CELL",
      period: "Jan 2024 – Jun 2024",
      bullets: [
        "Designed creative assets and digital materials for 2+ major entrepreneurship events.",
        "Supported 50+ incubator members with user experience and digital brand guidance.",
      ],
    },
  ],
};
