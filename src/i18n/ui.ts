// Textos de interfaz (títulos, botones, etiquetas) por idioma.
// El contenido del perfil vive en src/data/profile.ts (es) y src/data/profile.en.ts (en).

import * as es from "../data/profile";
import * as en from "../data/profile.en";

export const langs = ["es", "en"] as const;
export type Lang = (typeof langs)[number];

export function getLang(locale: string | undefined): Lang {
  return locale === "es" ? "es" : "en";
}

export function getProfile(lang: Lang) {
  return lang === "en" ? en : es;
}

/** Ruta base de cada idioma: el inglés vive en la raíz y el español bajo /es/. */
export const homePath: Record<Lang, string> = { es: "/es/", en: "/" };
export const cvPath: Record<Lang, string> = { es: "/es/cv", en: "/cv" };

export const ui = {
  es: {
    "meta.cvTitle": "Hoja de vida",
    "lang.switchLabel": "Ver el sitio en inglés",
    "nav.home": "Ir al inicio",
    "nav.sections": "Secciones del sitio",
    "nav.mobile": "Menú móvil",
    "nav.openMenu": "Abrir menú",
    "nav.downloadCv": "Descargar CV",
    "status.available": "disponible",
    "status.unavailable": "no disponible",
    "status.availableWork": "disponible para trabajar",
    "status.availableProjects": "disponible para nuevos proyectos",
    "status.busy": "ocupado actualmente",
    "hero.english": "Inglés B2",
    "hero.englishCert": "Ver certificado de inglés",
    "hero.projects": "Ver proyectos",
    "hero.contact": "Contactar",
    "about.eyebrow": "// sobre-mi",
    "about.p1":
      "¡Hola! Soy Miguel, desarrollador de software. Me apasiona crear aplicaciones modernas y resolver problemas mediante el código.",
    "about.p2":
      "Me gusta aprender constantemente y siempre estoy explorando nuevas tecnologías, herramientas y buenas prácticas para seguir creciendo como desarrollador. Disfruto enfrentar nuevos retos y convertir ideas en soluciones funcionales, buscando escribir código limpio, escalable y fácil de mantener.",
    "about.p3":
      "Actualmente continúo fortaleciendo mis conocimientos en arquitectura de software, desarrollo backend y cloud, con el objetivo de construir soluciones de alta calidad.",
    "about.cardLabel": "Tarjeta de perfil de {name} en formato de respuesta de API",
    "about.statusValue": "disponible",
    "stack.heading": "Herramientas que uso a diario",
    "exp.eyebrow": "// log --experiencia",
    "exp.heading": "Experiencia",
    "exp.current": "actual",
    "projects.eyebrow": "// proyectos",
    "projects.heading": "Proyectos",
    "projects.enlarge": "Ampliar",
    "projects.enlargeLabel": "Ampliar capturas de {name}",
    "projects.shotAlt": "{name}, captura {n} de {total}",
    "projects.shotsLabel": "Capturas de {name}",
    "projects.viewShot": "Ver captura {n}",
    "projects.lightboxAlt": "{name}, captura {n}",
    "projects.restricted": "Sistema interno: sin capturas por motivos de seguridad",
    "projects.role": "Mi rol",
    "projects.tech": "Tecnologías",
    "projects.repo": "Ver repositorio",
    "projects.demo": "Ver demo",
    "projects.private": "Repositorio privado",
    "projects.showMore": "Ver {n} proyectos más",
    "projects.showLess": "Ver menos proyectos",
    "lightbox.close": "Cerrar",
    "lightbox.prevShot": "Captura anterior",
    "lightbox.nextShot": "Captura siguiente",
    "lightbox.closeImage": "Cerrar imagen",
    "lightbox.prevImage": "Imagen anterior",
    "lightbox.nextImage": "Imagen siguiente",
    "edu.eyebrow": "// educacion",
    "edu.heading": "Educación e idiomas",
    "edu.training": "formación",
    "edu.languages": "idiomas",
    "rec.eyebrow": "// reconocimientos",
    "rec.heading": "Reconocimientos",
    "rec.enlarge": "Ampliar foto {n} de {title}",
    "rec.photoAlt": "{title} — foto {n}",
    "contact.eyebrow": "// contacto",
    "contact.heading": "Trabajemos juntos",
    "contact.lead": "Escríbeme si tienes un proyecto en mente.",
    "contact.busy": "actualmente ocupado",
    "contact.path": "/contacto",
    "contact.phone": "telefono",
    "footer.top": "↑ volver arriba",
    "cv.english": "Inglés B2 certificado",
    "cv.experience": "Experiencia",
    "cv.projects": "Proyectos",
    "cv.recognitions": "Reconocimientos",
    "cv.project": "Proyecto",
    "cv.tech": "Tecnologías",
    "cv.education": "Formación",
    "cv.languages": "Idiomas",
  },
  en: {
    "meta.cvTitle": "Résumé",
    "lang.switchLabel": "View the site in Spanish",
    "nav.home": "Go to top",
    "nav.sections": "Site sections",
    "nav.mobile": "Mobile menu",
    "nav.openMenu": "Open menu",
    "nav.downloadCv": "Download CV",
    "status.available": "available",
    "status.unavailable": "unavailable",
    "status.availableWork": "available for work",
    "status.availableProjects": "available for new projects",
    "status.busy": "currently busy",
    "hero.english": "English B2",
    "hero.englishCert": "View English certificate",
    "hero.projects": "View projects",
    "hero.contact": "Contact me",
    "about.eyebrow": "// about-me",
    "about.p1":
      "Hi! I'm Miguel, a software developer. I love building modern applications and solving problems through code.",
    "about.p2":
      "I'm always learning and exploring new technologies, tools and best practices to keep growing as a developer. I enjoy taking on new challenges and turning ideas into working solutions, aiming to write clean, scalable and maintainable code.",
    "about.p3":
      "I'm currently deepening my knowledge of software architecture, backend development and cloud, with the goal of building high-quality solutions.",
    "about.cardLabel": "Profile card for {name} formatted as an API response",
    "about.statusValue": "available",
    "stack.heading": "Tools I use every day",
    "exp.eyebrow": "// log --experience",
    "exp.heading": "Experience",
    "exp.current": "current",
    "projects.eyebrow": "// projects",
    "projects.heading": "Projects",
    "projects.enlarge": "Enlarge",
    "projects.enlargeLabel": "Enlarge screenshots of {name}",
    "projects.shotAlt": "{name}, screenshot {n} of {total}",
    "projects.shotsLabel": "Screenshots of {name}",
    "projects.viewShot": "View screenshot {n}",
    "projects.lightboxAlt": "{name}, screenshot {n}",
    "projects.restricted": "Internal system: no screenshots for security reasons",
    "projects.role": "My role",
    "projects.tech": "Technologies",
    "projects.repo": "View repository",
    "projects.demo": "View demo",
    "projects.private": "Private repository",
    "projects.showMore": "Show {n} more projects",
    "projects.showLess": "Show fewer projects",
    "lightbox.close": "Close",
    "lightbox.prevShot": "Previous screenshot",
    "lightbox.nextShot": "Next screenshot",
    "lightbox.closeImage": "Close image",
    "lightbox.prevImage": "Previous image",
    "lightbox.nextImage": "Next image",
    "edu.eyebrow": "// education",
    "edu.heading": "Education & languages",
    "edu.training": "education",
    "edu.languages": "languages",
    "rec.eyebrow": "// recognition",
    "rec.heading": "Recognition",
    "rec.enlarge": "Enlarge photo {n} of {title}",
    "rec.photoAlt": "{title} — photo {n}",
    "contact.eyebrow": "// contact",
    "contact.heading": "Let's work together",
    "contact.lead": "Write to me if you have a project in mind.",
    "contact.busy": "currently busy",
    "contact.path": "/contact",
    "contact.phone": "phone",
    "footer.top": "↑ back to top",
    "cv.english": "Certified English B2",
    "cv.experience": "Experience",
    "cv.projects": "Projects",
    "cv.recognitions": "Recognition",
    "cv.project": "Project",
    "cv.tech": "Technologies",
    "cv.education": "Education",
    "cv.languages": "Languages",
  },
} as const;

export type UiKey = keyof (typeof ui)["es"];

/** Devuelve `t(key, vars)`: busca el texto en el idioma dado y reemplaza los `{placeholders}`. */
export function useTranslations(lang: Lang) {
  return (key: UiKey, vars: Record<string, string | number> = {}) =>
    ui[lang][key].replace(/\{(\w+)\}/g, (_, name: string) => String(vars[name] ?? `{${name}}`));
}

// Falla el type check si a la versión en inglés le falta alguna clave
const _enHasAllKeys: Record<UiKey, string> = ui.en;
void _enHasAllKeys;
