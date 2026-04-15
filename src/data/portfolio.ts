export type SocialLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  featured: boolean;
  title: string;
  tech: string;
  description: string;
  tags: string[];
  gradient: string;
  liveUrl?: string;
  repoUrl?: string;
};

export type BlogArticle = {
  title: string;
  date: string;
  readTime: string;
  category: string;
  url?: string;
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export const portfolioData = {
  brand: "Zunoor Ahmad",
  hero: {
    availability: "Open for exciting opportunities",
    title: "Full Stack Developer",
    subtitle: "Building seamless user experiences",
    roles: [
      "API Integration Expert",
      "Video Call Specialist",
      "System Optimizer",
      "Angular & Ionic Developer",
      "Problem Solver",
    ],
    description:
      "I build applications that users genuinely love. With 3+ years of experience at Dev Blends, I've integrated complex APIs (Zoom, Agora), reduced system errors by 40%, and delivered code with 100% compliance standards. I'm passionate about creating meaningful digital experiences that solve real-world problems.",
  },
  contact: {
    email: "zunoor19@gmail.com",
    phone: "+92 332 4818024",
    location: "Lahore, Pakistan",
  },
  socials: {
    github: "https://github.com/zunoor-ahmad",
    linkedin: "https://linkedin.com/in/zunoor-ahmad",
    twitter: "https://x.com/",
  } as Record<string, string>,
};

export const navLinks = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Services",
  "Blog",
  "Contact",
];

export const projects: PortfolioProject[] = [
  {
    featured: true,
    title: "Full Stack E-Commerce Platform",
    tech: "Next.js + Django",
    description:
      "A comprehensive e-commerce platform with authentication, Stripe payment integration, admin dashboard, and RESTful APIs. Built for scale with 10,000+ daily active users.",
    tags: ["Next.js", "Django", "PostgreSQL", "Stripe", "REST API"],
    gradient: "from-blue-600/20 to-cyan-500/20",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/",
  },
  {
    featured: false,
    title: "AI-Powered Automation Suite",
    tech: "n8n + APIs",
    description:
      "Intelligent workflow automation system integrating 50+ business apps. Processes 10,000+ automated actions daily, reducing manual work by 80%.",
    tags: ["n8n", "Zapier", "Make.com", "APIs", "Webhooks"],
    gradient: "from-emerald-600/20 to-teal-500/20",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/",
  },
  {
    featured: false,
    title: "SaaS Analytics Dashboard",
    tech: "Next.js + Tailwind",
    description:
      "Real-time analytics platform with interactive charts, KPI tracking, team collaboration, and multi-tenant architecture.",
    tags: ["Next.js", "Tailwind", "Recharts", "SaaS", "TypeScript"],
    gradient: "from-orange-600/20 to-red-500/20",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/",
  },
  {
    featured: false,
    title: "Shopify + WordPress Solutions",
    tech: "Shopify + WordPress",
    description:
      "Custom Shopify themes and WordPress plugins for e-commerce clients. 15+ stores launched with custom checkout flows and integrations.",
    tags: ["Shopify", "WordPress", "PHP", "Liquid", "WooCommerce"],
    gradient: "from-pink-600/20 to-rose-500/20",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/",
  },
];

export const blogArticles: BlogArticle[] = [
  {
    title: "B.S. in Computer Science - Virtual University",
    date: "2022 – 2026",
    readTime: "Pursuing",
    category: "Education",
    url: "https://vu.edu.pk",
  },
  {
    title: "Angular & Ionic Professional Training",
    date: "2022 – Present",
    readTime: "Hands-on",
    category: "Training",
    url: "https://example.com",
  },
  {
    title: "Web Development & Self-Learning",
    date: "Ongoing",
    readTime: "Continuous",
    category: "Development",
    url: "https://example.com",
  },
];

export const experiences: Experience[] = [
  {
    title: "Front-End Developer",
    company: "Dev Blends",
    period: "November 2022 – Present",
    description:
      "Integrated third-party APIs including Zoom, boosting project features by 30%. Built an education management system with student-teacher collaboration, scheduling, and batch management. Developed a high-quality Agora-based video call app with 95% user satisfaction. Reduced scheduling errors by 40% through improved system design. Utilized Firebase for database management and callable Node functions. Wrote maintainable TypeScript code following best practices.",
  },
  {
    title: "JavaScript / Angular / Ionic Intern",
    company: "Dev Blends",
    period: "August 2022 – October 2022",
    description:
      "Learned JavaScript fundamentals and Angular architecture. Built cross-platform mobile apps using Ionic. Integrated RESTful APIs and external libraries.",
  },
];

export const footerLinks: SocialLink[] = [
  { label: "GitHub", href: portfolioData.socials.github },
  { label: "LinkedIn", href: portfolioData.socials.linkedin },
  { label: "Twitter", href: portfolioData.socials.twitter },
];