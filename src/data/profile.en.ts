// Versión en inglés de profile.ts. Reutiliza los datos que no dependen del idioma
// (URLs, imágenes, íconos, stack) y solo traduce el texto visible.

import * as es from "./profile";
import type { StackCategory, ExperienceEntry, EducationEntry, RecognitionEntry, Project } from "./profile";

export type { StackItem, StackCategory, ExperienceEntry, EducationEntry, RecognitionEntry, Project } from "./profile";

export const personal = {
  ...es.personal,
  cvUrl: "/cv/cv_miguel_angel_posada_en.pdf",
  website: es.personal.website.replace(/es\/$/, ""),
  websiteDisplay: es.personal.websiteDisplay.replace(/\/es$/, ""),
  summary:
    "Full Stack Developer with a backend focus: APIs, automations and business systems with Python and React. I currently build and maintain the CRM at Arrendamientos del Norte.",
};

const stackLabels: Record<string, [label: string, comment: string]> = {
  Lenguajes: ["Languages", "// programming languages"],
  Frameworks: ["Frameworks", "// frameworks"],
  Frontend: ["Frontend", "// frontend"],
  "Bases de datos": ["Databases", "// databases"],
  ORMs: ["ORMs", "// orms"],
  "DevOps y Cloud": ["DevOps & Cloud", "// devops & cloud"],
  Automatización: ["Automation", "// automation"],
  "Inteligencia Artificial": ["Artificial Intelligence", "// ai"],
  Protocolos: ["Protocols", "// protocols"],
};

const stackItemNames: Record<string, string> = {
  "Integración de APIs de IA": "AI API integration",
};

export const stack: StackCategory[] = es.stack.map((group) => {
  const [label, comment] = stackLabels[group.label] ?? [group.label, group.comment];
  return {
    label,
    comment,
    items: group.items.map((item) => ({ ...item, name: stackItemNames[item.name] ?? item.name })),
  };
});

export const experience: ExperienceEntry[] = [
  {
    ...es.experience[0],
    role: "Backend Developer (Contractor)",
    period: "Jun 2026 — present",
    bullets: [
      "Development and maintenance of the company CRM.",
      "Better-organized clients and much easier follow-up for the team.",
      "End-to-end features with FastAPI, PostgreSQL and React.",
      "Internal process automation and API development.",
      "Go-to person for all CRM development.",
    ],
  },
  {
    ...es.experience[1],
    role: "Software Development Intern",
    period: "Mar 2026 — Jun 2026",
    bullets: [
      "Built a CRM with FastAPI, React and PostgreSQL.",
      "Built an RPA system with Python and Playwright.",
      "Automation through web scraping.",
      "Adobe Illustrator integration.",
      "Cloud spreadsheet integration.",
    ],
  },
];

export const education: EducationEntry[] = [
  { ...es.education[0], title: "Software Development Assistant Technician" },
  { ...es.education[1], title: "High School Diploma" },
];

export const languages = [
  { ...es.languages[0], name: "Spanish", level: "Native" },
  { ...es.languages[1], name: "English", level: "B2 · Certified" },
];

export const recognitions: RecognitionEntry[] = [
  {
    ...es.recognitions[0],
    title: "Second place — Science, Innovation and Creativity Fair",
    organizer: "Bello Department of Education and Mayor's Office",
    description:
      "Second place in the High School (10th and 11th grade) category with StudyPass, built by a team of 3: I handled the backend, one teammate the frontend and another the system security. Covered by Diario de Medellín.",
    links: [
      {
        label: "Article — Diario de Medellín",
        url: "https://diariodemedellin.com/bello-celebro-la-creatividad-y-la-innovacion-con-la-feria-de-la-ciencia-2025/",
      },
    ],
  },
  {
    ...es.recognitions[1],
    title: "First place — Science, Research and Competitiveness Fair",
    organizer: "Bello Department of Education and Mayor's Office",
    description:
      "First place in the Middle School category with OcularVoice, built with a teammate (I handled the backend, they handled the frontend). Covered by local media.",
    links: [
      { label: "Repository — OcularVoice", url: "https://github.com/LoskoMiguel/OcularVoice" },
      {
        label: "Video interview",
        url: "https://www.facebook.com/belloeduca/videos/-conoce-los-ganadores-de-la-feria-de-la-ciencia-la-investigaci%C3%B3n-y-la-competitiv/353523174449755/",
      },
    ],
  },
];

const projectText: Record<string, Pick<Project, "description" | "role" | "summary"> & { name?: string }> = {
  StudyPass: {
    description:
      "Academic management system for I.E. Jorge Eliécer Gaitán Ayala: attendance tracking via barcode scanning, automatic calculation of absences and late arrivals, reports and statistics, and an AI chat to query the data. Second place at the 2025 Science Fair.",
    summary:
      "Attendance system for I.E. Jorge Eliécer Gaitán Ayala with barcode scanning, reports and an AI chat. Backend in a team of 3.",
    role: "Backend development in a team of 3: barcode scanner, attendance/absence logic, reports and AI chat via LangGraph",
  },
  "CRM Empresarial": {
    name: "Business CRM",
    description: "CRM for rental management: handling clients, contracts and the business's internal processes.",
    summary:
      "CRM for Arrendamientos del Norte to manage clients, properties, appointments, follow-ups and owner acquisition. Full stack development.",
    role: "Full stack development: FastAPI and PostgreSQL backend, React frontend and end-to-end features",
  },
  "Comparativo de Pagos": {
    name: "Payment Comparison",
    description:
      "Financial audit system that compares Excel payment plans between Alianza Fiduciaria and SINCO, installment by installment, and generates a polished Excel comparison report with the differences highlighted.",
    summary:
      "Financial audit tool that compares Excel payment plans installment by installment between two systems and generates a report of the differences. Full stack freelance project.",
    role: "Freelance project — full stack development: backend (parsers, comparison, authentication) with FastAPI and frontend with Next.js",
  },
  CreditoFuturo: {
    description:
      "Credit and loan management system with late-fee calculation, credit risk scoring, a financial dashboard, payment tracking and cash reconciliation.",
    role: "Full stack development: FastAPI/PostgreSQL backend (late-fee logic, JWT authentication) and HTML/CSS/JS frontend",
  },
  "VanderBilt — Fragancias": {
    name: "VanderBilt — Fragrances",
    description:
      "Practice project: premium fragrance e-commerce for the Colombian market, with a catalog filtered by scent family and gender, cart, wishlist and deals. Includes admin and supervisor panels to manage products, users, promotions and discount codes, with automatic date-based activation via scheduled jobs.",
    role: "Full stack development: REST API with Express and Prisma/PostgreSQL, scheduled jobs with Agenda for promotions and discount codes, JWT authentication, image uploads via Cloudinary and a vanilla JS frontend with admin and supervisor panels",
  },
  "Sistema de Planes": {
    name: "Plans App",
    description:
      "App built for my group of friends: propose and vote on plans (outings, restaurants, activities) with a code name, photos, comments and a ranking of the most voted, all in real time.",
    role: "Backend development: REST API with Express and PostgreSQL (Supabase), real-time votes and comments with Socket.IO, and photo/video uploads via Cloudinary",
  },
  "Sistema RPA de Automatización": {
    name: "RPA Automation System",
    description: "Automation of repetitive processes through web scraping, Adobe Illustrator integration and cloud spreadsheets.",
    role: "Design and implementation of the RPA system",
  },
};

export const projects: Project[] = es.projects.map((project) => ({
  ...project,
  ...projectText[project.name],
  status: project.status === "EN PROGRESO" ? "IN PROGRESS" : project.status,
}));

export const nav = [
  { label: "about", href: "#sobre-mi" },
  { label: "stack", href: "#stack" },
  { label: "experience", href: "#experiencia" },
  { label: "projects", href: "#proyectos" },
  { label: "education", href: "#educacion" },
  { label: "recognition", href: "#reconocimientos" },
  { label: "contact", href: "#contacto" },
];
