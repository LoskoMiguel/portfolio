// Contenido fuente: docs/about-me.md
// Toda la información visible del sitio vive aquí para mantener los componentes limpios.

import feriaCiencia2024 from "../assets/feria_2024.webp";
import feriaCiencia2024Certificado from "../assets/feria_2024_2.webp";
import feriaCiencia2025 from "../assets/feria_2025.webp";
import comparativoPagosLogin from "../assets/comparativo_pagos/login.webp";
import comparativoPagosDashboard from "../assets/comparativo_pagos/dashboard.webp";
import creditoFuturoLogin from "../assets/creditofuturo/img1.webp";
import creditoFuturoDashboard from "../assets/creditofuturo/dashboard.webp";
import planesLogin from "../assets/planes/img1.webp";
import planesDashboard from "../assets/planes/img2.webp";
import studypassLogin from "../assets/studypass/img1.webp";
import studypassDashboard from "../assets/studypass/dashboard.webp";
import crmLogin from "../assets/crm/img1.webp";
import crmDashboard from "../assets/crm/dashboard-privado.webp";
import fraganciasTienda from "../assets/fragancias/img1.webp";
import fraganciasProducto from "../assets/fragancias/img2.webp";
import fraganciasDashboard from "../assets/fragancias/img3.webp";

export const personal = {
  name: "Miguel Ángel Posada Marín",
  role: "Full Stack Developer",
  location: "Bello, Antioquia, Colombia",
  email: "magelposada@gmail.com",
  phone: "3235849258",
  phoneDisplay: "+57 323 584 9258",
  github: "https://github.com/LoskoMiguel",
  githubHandle: "github.com/LoskoMiguel",
  website: "https://miguel-posada-dev.vercel.app",
  websiteDisplay: "miguel-posada-dev.vercel.app",
  cvUrl: "/cv/cv_miguel_angel_posada.pdf",
  available: true,
  summary:
    "Full Stack Developer con enfoque en backend: APIs, automatizaciones y sistemas empresariales con Python y React. Actualmente desarrollo y mantengo el CRM de Arrendamientos del Norte.",
};

export type StackItem = {
  name: string;
  /** Export key from the `simple-icons` package, e.g. "siPython". Omit for a generic fallback badge. */
  icon?: string;
  /** Short fallback label (max ~4 chars) shown when there's no brand icon. */
  fallback?: string;
};

export type StackCategory = {
  label: string;
  comment: string;
  items: StackItem[];
};

export const stack: StackCategory[] = [
  {
    label: "Lenguajes",
    comment: "// lenguajes de programación",
    items: [
      { name: "Python", icon: "siPython" },
      { name: "JavaScript", icon: "siJavascript" },
    ],
  },
  {
    label: "Frameworks",
    comment: "// frameworks",
    items: [
      { name: "FastAPI", icon: "siFastapi" },
      { name: "Flask", icon: "siFlask" },
      { name: "Node.js", icon: "siNodedotjs" },
      { name: "Express.js", icon: "siExpress" },
    ],
  },
  {
    label: "Frontend",
    comment: "// frontend",
    items: [
      { name: "HTML", icon: "siHtml5" },
      { name: "CSS", icon: "siCss" },
      { name: "React", icon: "siReact" },
    ],
  },
  {
    label: "Bases de datos",
    comment: "// bases de datos",
    items: [
      { name: "PostgreSQL", icon: "siPostgresql" },
      { name: "MySQL", icon: "siMysql" },
      { name: "MongoDB", icon: "siMongodb" },
      { name: "Supabase", icon: "siSupabase" },
    ],
  },
  {
    label: "ORMs",
    comment: "// orms",
    items: [
      { name: "SQLAlchemy", icon: "siSqlalchemy" },
      { name: "Prisma", icon: "siPrisma" },
    ],
  },
  {
    label: "DevOps y Cloud",
    comment: "// devops y cloud",
    items: [
      { name: "Docker", icon: "siDocker" },
      { name: "Docker Compose", icon: "siDocker" },
      { name: "Git", icon: "siGit" },
      { name: "GitHub", icon: "siGithub" },
      { name: "Linux", icon: "siLinux" },
      { name: "Vercel", icon: "siVercel" },
      { name: "Render", icon: "siRender" },
      { name: "Cloudinary", icon: "siCloudinary" },
    ],
  },
  {
    label: "Automatización",
    comment: "// automatización",
    items: [
      { name: "Playwright", fallback: "PW" },
      { name: "Pandas", icon: "siPandas" },
    ],
  },
  {
    label: "Inteligencia Artificial",
    comment: "// ia",
    items: [
      { name: "LangChain", icon: "siLangchain" },
      { name: "LangGraph", icon: "siLanggraph" },
      { name: "Integración de APIs de IA", fallback: "AI" },
      { name: "Claude Code", icon: "siClaude" },
      { name: "MCP", icon: "siModelcontextprotocol" },
      { name: "Agent Skills", fallback: "SK" },
    ],
  },
  {
    label: "Protocolos",
    comment: "// protocolos",
    items: [
      { name: "REST APIs", fallback: "API" },
      { name: "WebSockets", fallback: "WS" },
      { name: "HTTP/HTTPS", fallback: "HTTP" },
      { name: "JSON", icon: "siJson" },
    ],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  current: boolean;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Desarrollador Backend (Prestación de Servicios)",
    company: "Arrendamientos del Norte",
    period: "jun. 2026 — actualidad",
    current: true,
    bullets: [
      "Desarrollo y mantenimiento del CRM empresarial.",
      "Clientes mejor organizados y un seguimiento mucho más fácil para el equipo.",
      "Nuevas funcionalidades de punta a punta con FastAPI, PostgreSQL y React.",
      "Automatización de procesos internos y desarrollo de APIs.",
      "Punto de referencia para todo el desarrollo del CRM.",
    ],
  },
  {
    role: "Practicante de Desarrollo de Software",
    company: "Arrendamientos del Norte",
    period: "mar. 2026 — jun. 2026",
    current: false,
    bullets: [
      "Desarrollo de un CRM con FastAPI, React y PostgreSQL.",
      "Desarrollo de un sistema RPA con Python y Playwright.",
      "Automatización mediante web scraping.",
      "Integración con Adobe Illustrator.",
      "Integración con hojas de cálculo en la nube.",
    ],
  },
];

export type EducationEntry = {
  title: string;
  institution: string;
  period: string;
  certificateUrl?: string;
  certificateLabel?: string;
};

export const education: EducationEntry[] = [
  {
    title: "Técnico en Asistente en Desarrollo de Software",
    institution: "Cedenorte",
    period: "2024 — 2025",
  },
  {
    title: "Bachillerato",
    institution: "Institución Educativa Jorge Eliécer Gaitán Ayala — Bello, Antioquia",
    period: "2025",
  },
];

export const languages = [
  { name: "Español", level: "Nativo", progress: 100 },
  {
    name: "Inglés",
    level: "B2 · Certificado",
    progress: 65,
    certificateUrl: "/certificados/certificado-ingles-b2.pdf",
    certificateLabel: "certificado-ingles-b2.pdf",
  },
];

export type RecognitionEntry = {
  title: string;
  organizer: string;
  period: string;
  /** Nombre del proyecto premiado, mostrado en la hoja de vida. */
  project: string;
  description: string;
  photos?: (typeof feriaCiencia2024)[];
  links?: { label: string; url: string }[];
};

export const recognitions: RecognitionEntry[] = [
  {
    title: "Segundo puesto — Feria de la Ciencia, la Innovación y la Creatividad",
    organizer: "Secretaría de Educación y Alcaldía de Bello",
    period: "2025",
    project: "StudyPass",
    description:
      "Segundo puesto en la categoría Educación Media (10.º y 11.º) con el proyecto StudyPass, desarrollado en equipo de 3 personas: backend por mi parte, frontend por un compañero y seguridad del sistema por otro. Cobertura en Diario de Medellín.",
    photos: [feriaCiencia2025],
    links: [
      { label: "Repositorio — StudyPass", url: "https://github.com/LoskoMiguel/StudyPass-Jega" },
      {
        label: "Artículo — Diario de Medellín",
        url: "https://diariodemedellin.com/bello-celebro-la-creatividad-y-la-innovacion-con-la-feria-de-la-ciencia-2025/",
      },
    ],
  },
  {
    title: "Primer puesto — Feria de la Ciencia, la Investigación y la Competitividad",
    organizer: "Secretaría de Educación y Alcaldía de Bello",
    period: "2024",
    project: "OcularVoice",
    description:
      "Primer puesto en la categoría Básica Secundaria con el proyecto OcularVoice, desarrollado junto a un compañero (backend por mi parte, frontend por su parte). Cobertura en medios de comunicación locales.",
    photos: [feriaCiencia2024, feriaCiencia2024Certificado],
    links: [
      { label: "Repositorio — OcularVoice", url: "https://github.com/LoskoMiguel/OcularVoice" },
      {
        label: "Entrevista en video",
        url: "https://www.facebook.com/belloeduca/videos/-conoce-los-ganadores-de-la-feria-de-la-ciencia-la-investigaci%C3%B3n-y-la-competitiv/353523174449755/",
      },
    ],
  },
];

export type Project = {
  name: string;
  status: "200 OK" | "EN PROGRESO";
  description: string;
  stack: string[];
  role: string;
  /** Resumen de una línea para la hoja de vida. Solo los proyectos que lo tienen aparecen en /cv. */
  summary?: string;
  screenshots?: (typeof comparativoPagosLogin)[];
  repoUrl?: string;
  demoUrl?: string;
  privateRepo?: boolean;
  placeholder?: boolean;
};

// NOTA: contenido de prueba mientras se documentan los proyectos definitivos
// (capturas, repos, demos). Reemplazar `placeholder` y sumar enlaces reales.
export const projects: Project[] = [
  {
    name: "StudyPass",
    status: "200 OK",
    description:
      "Sistema de gestión académica para la I.E. Jorge Eliécer Gaitán Ayala: control de asistencia por escaneo de código de barras, cálculo automático de faltas y llegadas tarde, reportes y estadísticas, y un chat con IA para consultar los datos. Segundo puesto en la Feria de la Ciencia 2025.",
    stack: ["Flask", "Python", "PostgreSQL", "LangGraph", "OpenAI API"],
    summary:
      "Sistema de asistencia para la I.E. Jorge Eliécer Gaitán Ayala con escaneo de códigos de barras, reportes y chat con IA. Backend en equipo de 3 personas.",
    role: "Desarrollo backend en equipo de 3 personas: scanner de códigos de barra, lógica de asistencia/faltas, reportes y chat con IA vía LangGraph",
    screenshots: [studypassLogin, studypassDashboard],
  },
  {
    name: "CRM Empresarial",
    status: "200 OK",
    description:
      "Sistema CRM para gestión de arrendamientos: administración de clientes, contratos y procesos internos del negocio.",
    stack: ["FastAPI", "React", "PostgreSQL"],
    summary:
      "CRM de Arrendamientos del Norte para gestionar clientes, propiedades, citas, seguimiento y captación de propietarios. Desarrollo full stack.",
    role: "Desarrollo full stack: backend con FastAPI y PostgreSQL, frontend con React y nuevas funcionalidades de punta a punta",
    screenshots: [crmLogin, crmDashboard],
  },
  {
    name: "Comparativo de Pagos",
    status: "200 OK",
    description:
      "Sistema de auditoría financiera que compara planes de pago en Excel entre Alianza Fiduciaria y SINCO, cuota por cuota, y genera un reporte comparativo elegante en Excel con las diferencias resaltadas.",
    stack: ["FastAPI", "Next.js", "React", "Tailwind CSS", "Python"],
    summary:
      "Auditoría financiera que compara planes de pago en Excel cuota por cuota entre dos sistemas y genera un reporte con las diferencias. Proyecto freelance full stack.",
    role: "Proyecto freelance — desarrollo full stack: backend (parsers, comparación, autenticación) con FastAPI y frontend con Next.js",
    screenshots: [comparativoPagosLogin, comparativoPagosDashboard],
    privateRepo: true,
  },
  {
    name: "CreditoFuturo",
    status: "200 OK",
    description:
      "Sistema de gestión de créditos y préstamos con cálculo de mora, score de riesgo crediticio, dashboard financiero, control de pagos y cuadre de caja.",
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "JWT", "JavaScript"],
    role: "Desarrollo full stack: backend con FastAPI/PostgreSQL (lógica de mora, autenticación JWT) y frontend en HTML/CSS/JS",
    screenshots: [creditoFuturoLogin, creditoFuturoDashboard],
    repoUrl: "https://github.com/LoskoMiguel/CreditoFuturo",
  },
  {
    name: "VanderBilt — Fragancias",
    status: "200 OK",
    description:
      "Proyecto de práctica: e-commerce de fragancias premium para el mercado colombiano, con catálogo filtrado por familia olfativa y género, carrito, wishlist y ofertas. Incluye paneles de administrador y supervisor para gestionar productos, usuarios, promociones y códigos de descuento, con activación automática por fecha vía jobs programados.",
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB", "JWT", "Cloudinary"],
    role: "Desarrollo full stack: API REST con Express y Prisma/PostgreSQL, jobs programados con Agenda para promociones y códigos de descuento, autenticación JWT, subida de imágenes vía Cloudinary y frontend vanilla JS con paneles de administrador y supervisor",
    screenshots: [fraganciasTienda, fraganciasProducto, fraganciasDashboard],
    repoUrl: "https://github.com/LoskoMiguel/sistema-fragancias",
  },
  {
    name: "Sistema de Planes",
    status: "200 OK",
    description:
      "Aplicación hecha para mi grupo de amigos: proponer y votar planes (salidas, restaurantes, actividades) con nombre clave, fotos, comentarios y ranking de los más votados, todo en tiempo real.",
    stack: ["Node.js", "Express", "PostgreSQL", "Socket.IO", "Cloudinary"],
    role: "Desarrollo backend: API REST con Express y PostgreSQL (Supabase), votos y comentarios en tiempo real con Socket.IO, y subida de fotos/video vía Cloudinary",
    screenshots: [planesLogin, planesDashboard],
    repoUrl: "https://github.com/LoskoMiguel/mafia-planes",
  },
  {
    name: "Sistema RPA de Automatización",
    status: "200 OK",
    description:
      "Automatización de procesos repetitivos mediante web scraping, integración con Adobe Illustrator y hojas de cálculo en la nube.",
    stack: ["Python", "Playwright", "Pandas"],
    role: "Diseño e implementación del sistema RPA",
    placeholder: true,
  },
];

export const nav = [
  { label: "sobre-mi", href: "#sobre-mi" },
  { label: "stack", href: "#stack" },
  { label: "experiencia", href: "#experiencia" },
  { label: "proyectos", href: "#proyectos" },
  { label: "educacion", href: "#educacion" },
  { label: "reconocimientos", href: "#reconocimientos" },
  { label: "contacto", href: "#contacto" },
];
