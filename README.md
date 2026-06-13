# Kgs Muhammad Raihan Ghifari — Portfolio

A premium, cinematic portfolio for **Kgs Muhammad Raihan Ghifari** — Mobile Engineer,
Android Developer & AI-Powered Product Builder. Dark Prisma-inspired aesthetic with
scroll-driven motion design.

## Tech Stack

- React 18 + Vite + TypeScript
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Design System

| Token        | Value                        |
| ------------ | ---------------------------- |
| Background   | `#000000`                    |
| Cards        | `#101010` / `#212121`        |
| Primary      | `#DEDBC8`                    |
| Main text    | `#E1E0CC`                    |
| Secondary    | `text-gray-400` / `gray-500` |
| Global font  | Almarai                      |
| Accent font  | Instrument Serif (italic)    |

## Sections

Hero → About → Skills & Expertise → Featured Projects → Experience → Services → Contact

## Project Images

Project thumbnails are loaded from `public/portfolio/<project>/` and referenced in
`src/data/portfolio.ts`. To add a project image, drop it in the relevant folder and
add its path to that project's `images` array.

## Development

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## Notes

- The previous static HTML/CSS/JS site is preserved in `legacy/` for reference.
- Deploys on Vercel as a Vite app (auto-detected, output `dist/`).
