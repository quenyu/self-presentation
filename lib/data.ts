export type StackItem = {
  name: string;
  role: string;
  level: number;
  status: string;
  accent: "red" | "cyan" | "white";
};

export type StackMetric = {
  label: string;
  value: string;
  tone: "red" | "cyan" | "white";
};

export type ProjectItem = {
  name: string;
  description: string;
  stack: string[];
  signal: string;
};

export type ArchitectureNode = {
  label: string;
  detail: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const navItems = [
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
] as const;

export const stackItems: StackItem[] = [
  {
    name: "Go",
    role: "backend core",
    level: 92,
    status: "primary runtime",
    accent: "cyan",
  },
  {
    name: "PostgreSQL",
    role: "data layer",
    level: 84,
    status: "schemas / queries",
    accent: "white",
  },
  {
    name: "Docker",
    role: "delivery",
    level: 76,
    status: "compose / images",
    accent: "red",
  },
  {
    name: "Python",
    role: "automation",
    level: 72,
    status: "parsers / scripts",
    accent: "white",
  },
  {
    name: "Next.js",
    role: "interface",
    level: 78,
    status: "React / App Router",
    accent: "cyan",
  },
  {
    name: "Cloudflare",
    role: "edge",
    level: 65,
    status: "DNS / edge logic",
    accent: "red",
  },
];

export const stackMetrics: StackMetric[] = [
  { label: "API design", value: "REST", tone: "cyan" },
  { label: "Workers", value: "async", tone: "white" },
  { label: "Automation", value: "scripts", tone: "red" },
  { label: "Deploy", value: "Docker", tone: "cyan" },
];

export const projects: ProjectItem[] = [
  {
    name: "deadlock-stats",
    description:
      "Game statistics dashboard with analytical views and structured data presentation.",
    stack: ["Next.js", "API", "analytics"],
    signal: "dashboards, data modeling, product thinking",
  },
  {
    name: "notification-platform",
    description:
      "Event delivery concept for notifications, queues and user-facing delivery states.",
    stack: ["Go", "PostgreSQL", "workers"],
    signal: "backend architecture, async flows",
  },
  {
    name: "pr-reviewer",
    description:
      "AI-assisted code review helper focused on repository context and developer feedback.",
    stack: ["Python/JS", "GitHub", "AI tools"],
    signal: "automation, code analysis",
  },
  {
    name: "deutsch-learner",
    description:
      "Language learning interface with structured exercises and progress-oriented UX.",
    stack: ["React", "app UI", "content logic"],
    signal: "interface systems, learning flow",
  },
];

export const architectureNodes: ArchitectureNode[] = [
  { label: "Client", detail: "web / bot / parser" },
  { label: "API Gateway", detail: "routing / boundary" },
  { label: "Go Service", detail: "handlers / domain logic" },
  { label: "PostgreSQL", detail: "state / indexes" },
  { label: "Worker", detail: "jobs / retries" },
  { label: "External APIs", detail: "Telegram / Cloudflare" },
];

export const contactLinks: ContactLink[] = [
  { label: "GitHub", value: "quenyu", href: "https://github.com/quenyu" },
  { label: "Telegram", value: "@your_handle", href: "https://t.me/your_handle" },
  { label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
];
