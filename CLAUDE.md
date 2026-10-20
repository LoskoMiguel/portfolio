# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-page personal portfolio site (Miguel Ángel Posada Marín, backend developer) built with Astro. No UI framework (React/Vue/etc.) is used — pages are plain `.astro` components. The site is bilingual: English at `/` (default) and Spanish at `/es/`, via Astro's built-in `i18n` config in `astro.config.mjs`.

## Commands

- `npm run dev` — start the dev server at `localhost:4321`
- `npm run build` — runs `astro check` (type checking) then `astro build`; type errors fail the build
- `npm run preview` — serve the production build locally
- `npm run cv` — build, then print `/es/cv` and `/cv` to `public/cv/cv_miguel_angel_posada.pdf` and `cv_miguel_angel_posada_en.pdf` via headless Google Chrome (`scripts/build-cv.mjs`; override the binary with `CHROME_PATH`)
- `npm run astro -- <cmd>` — run other Astro CLI commands (e.g. `astro add`)

There is no test suite and no separate lint command configured.

## Architecture

**Content/component separation.** All visible site copy (personal info, stack, experience, education, projects, nav links) lives in `src/data/profile.ts` as typed exports (`personal`, `stack`, `experience`, `education`, `languages`, `projects`, `nav`). Components import from this file rather than hardcoding text — keep it that way when editing content. The source of truth for this data is `docs/about-me.md` (a Spanish-language personal info doc); update both when personal/professional info changes.

**i18n.** `src/data/profile.en.ts` exports the same names as `profile.ts` in English: it spreads the Spanish entries and overrides only the text, so URLs/images/icons live once in `profile.ts`. Update both files when copy changes. UI chrome (headings, buttons, aria-labels) lives in `src/i18n/ui.ts` (`ui.es` / `ui.en`; a type check fails if `en` is missing a key). Components resolve the language with `getLang(Astro.currentLocale)`, then use `getProfile(lang)` and `useTranslations(lang)` — never import `profile.ts` directly for content. `src/pages/es/index.astro` and `src/pages/es/cv.astro` just render the root pages, which pick the language from the URL. Section `id`s stay in Spanish in both languages so the ES/EN switch in `Nav.astro` can keep the current `#hash`.

**Page composition.** `src/pages/index.astro` is the portfolio page. It wraps everything in `src/layouts/BaseLayout.astro` and assembles section components in order: `Nav`, `Hero`, `About`, `Stack`, `Experience`, `Projects`, `Education`, `Contact`, `Footer`. Each section is a self-contained `.astro` component under `src/components/` with its own scoped `<style>` block — there's no shared component library beyond the CSS custom properties in global styles.

**CV page.** `src/pages/cv.astro` is a standalone, print-styled (Letter, light theme, `noindex`) résumé built from the same `profile.ts` data — it doesn't use `BaseLayout` or the dark design tokens. Only projects with a `summary` appear on it. Each language's `personal.cvUrl` points to its own PDF. Regenerate both PDFs with `npm run cv` after changing CV-relevant data.

**Design tokens.** `src/styles/global.css` defines the full design system as CSS custom properties on `:root`: colors (`--bg`, `--ink`, `--accent`, `--line`, etc.), fonts (`--font-display` = Space Grotesk, `--font-body` = IBM Plex Sans, `--font-mono` = IBM Plex Mono), font-size scale (`--fs-2xs` … `--fs-3xl`), spacing, radii, and easing. The theme is dark-only (`color-scheme: dark`), styled as a "backend systems console" with an amber accent — reuse these tokens in new components instead of introducing new literal colors/sizes.

**Reveal-on-scroll.** Any element with class `.reveal` starts hidden/offset and is revealed via an `IntersectionObserver` set up in an inline script in `BaseLayout.astro`, which adds `.is-visible` on intersect. Falls back to fully visible when `IntersectionObserver` is unsupported or `prefers-reduced-motion` is set. New animated sections should follow this same `.reveal` pattern rather than inventing a new scroll-animation mechanism.

**Icons.** Brand icons come from the `simple-icons` package, referenced in `profile.ts` by export name (e.g. `icon: "siPython"`) and resolved dynamically in `Stack.astro`. Because some brand colors (near-black hexes) would be invisible on the dark background, `Stack.astro` computes relative luminance and falls back to `--ink-muted` when the brand color is too dark — reuse this pattern if icons are added elsewhere. Items without a matching brand icon use a short text `fallback` badge instead.

**Assets.** `src/assets/` holds images processed through `astro:assets` (`<Image />`, optimized/typed imports — see `Hero.astro`). `public/` holds files served as-is verbatim (favicon, `certificados/*.pdf` referenced directly by URL from `profile.ts`).

**TypeScript.** `tsconfig.json` extends `astro/tsconfigs/strict`. Since `npm run build` runs `astro check` first, keep `profile.ts` types (`StackItem`, `ExperienceEntry`, `EducationEntry`, `Project`, etc.) accurate when changing data shapes.
