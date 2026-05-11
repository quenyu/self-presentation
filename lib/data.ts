export type ProjectItem = {
  name: string;
  description: string;
  stack: string[];
  signal: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const navItems = [
  { label: "Runtime", href: "#systems" },
  { label: "Projects", href: "#systems" },
  { label: "Contact", href: "#contact" },
] as const;

export const stackSignals = ["Go", "PostgreSQL", "Docker", "Python", "Next.js", "Cloudflare"] as const;

export const architecturePath = ["Client", "API Gateway", "Go Service", "PostgreSQL", "Worker", "External APIs"] as const;

export const projects: ProjectItem[] = [
  {
    name: "deadlock-stats",
    description: "Analytics surface for game stats and structured performance views.",
    stack: ["Next.js", "API", "analytics"],
    signal: "data modeling + readable dashboards",
  },
  {
    name: "notification-platform",
    description: "Event delivery layer for queues, notifications and delivery states.",
    stack: ["Go", "PostgreSQL", "workers"],
    signal: "async backend architecture",
  },
  {
    name: "pr-reviewer",
    description: "AI-assisted code review helper with repository context.",
    stack: ["Python/JS", "GitHub", "AI tools"],
    signal: "automation + code analysis",
  },
  {
    name: "deutsch-learner",
    description: "Learning interface with exercises and progress-oriented UX.",
    stack: ["React", "app UI", "content logic"],
    signal: "clean app flow + content logic",
  },
];

export const contactLinks: ContactLink[] = [
  { label: "GitHub", value: "quenyu", href: "https://github.com/quenyu" },
  { label: "Telegram", value: "@your_handle", href: "https://t.me/your_handle" },
  { label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
];
