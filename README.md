# Abu Sachappa ❤️ Fathima Saachi — 23 Years

A cinematic anniversary website built with React, Vite, TypeScript, Tailwind CSS,
Framer Motion, Lenis (smooth scroll) and Three.js (starfield), using the real
photos, letter, duas, Qur'an verses and memories you provided.

## Running it locally

```bash
npm install
npm run dev
```

Then open the printed local address in your browser.

## Building the final static site

```bash
npm run build
```

This produces a `dist/` folder — a fully static website. You can:
- Open `dist/index.html` directly in a browser, or
- Upload the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages,
  or even a personal web host) to get a shareable link.

## Structure

- `src/data/content.ts` — every line of text on the site, sourced directly
  from the memory bank, letter, duas and Qur'an verses you uploaded.
- `src/data/photos.ts` — the photo manifest (auto-generated from your
  uploaded photos, optimized to `.webp` for fast loading).
- `src/components/` — one file per section of the experience (Opening,
  Meet Abu Sachappa, Meet Fathima Saachi, Their Story, A Life of Giving,
  Family, Travel Memories, Gallery, Letter, Dua, Finale).
- `public/photos/` and `public/music/` — your optimized photos and the
  background music.

## Notes

- Music never autoplays — it only begins, faded in gently, after pressing
  "Begin Our Journey," per your brief.
- The gallery, envelope letter, and music controls are all fully interactive.
- Reduced-motion is respected for visitors who prefer less animation.
- To swap or reorder photos, edit the arrays in `src/data/photos.ts` — the
  filenames map directly to files in `public/photos/<category>/`.
