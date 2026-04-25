# buildbyrosa — Portfolio

Personal portfolio of **Lucas Rosa**, fullstack developer specialized in Mobile & Web. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Features

- **Bilingual (PT/EN)** — full i18n via a custom `LangContext` + `T` component, no external library
- **Particle canvas** — interactive WebGL-style canvas on the hero section
- **Text scramble** — animated text effect on the hero name
- **Scroll reveal** — intersection-observer-based reveal animations
- **Custom cursor** — cursor tracking effect
- **Project detail pages** — dynamic routes at `/projects/[slug]` with per-project content
- **Marquee** — looping ticker strip between sections

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4, PostCSS |
| Linting | ESLint 9 |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home (Hero → Marquee → About → Projects → Experience → Stack → Contact)
│   └── projects/[slug]/    # Dynamic project detail pages
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectDetail.tsx
│   ├── Experience.tsx
│   ├── Stack.tsx
│   ├── Contact.tsx
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── Marquee.tsx
│   ├── ParticleCanvas.tsx
│   ├── TextScramble.tsx
│   ├── ScrollReveal.tsx
│   ├── CursorEffect.tsx
│   ├── LangToggle.tsx
│   ├── T.tsx               # Translation component
│   └── TH.tsx              # Translation component (HTML variant)
├── content/
│   └── projects/
│       └── liria-shop.ts   # Project content data
├── context/
│   └── LangContext.tsx     # Language context (PT/EN)
└── lib/
    ├── translations.ts     # All UI strings in PT and EN
    └── projects.ts         # Project registry and types
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev     # Development server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Adding a Project

1. Create `src/content/projects/your-project.ts` following the `Project` interface in `src/lib/projects.ts`
2. Import and add it to the `projects` array in `src/lib/projects.ts`
3. Add any images to `public/projects/your-project/`

## License

MIT
