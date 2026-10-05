# Muhammad Furqan — Portfolio

A responsive, animated Next.js portfolio built from Muhammad Furqan's resume. The site uses the App Router, TypeScript, semantic HTML, accessible motion preferences, and zero runtime UI dependencies.

## Visual system

The interface uses a warm technical palette: `#FFFCF2`, `#CCC5B9`, `#403D39`, `#252422`, and `#EB5E28`. Inspired by Serge Studios, the portrait-led hero layers oversized orange typography over a background-free photograph. Custom project concept illustrations, active navigation, native project disclosures, scroll progress, hover feedback, and reduced-motion fallbacks complete the experience. Project illustrations are design concepts, not product screenshots.

## Motion and project images

Desktop uses a pinned, scroll-driven horizontal project rail, word-by-word About emphasis, portrait parallax, section entrances, and project-art hover zoom. Keyboard focus brings hidden cards into view; the rail includes a skip link. Smaller screens, short viewports, touch devices, and reduced-motion preferences use the normal project grid instead. Motion is progressively enhanced with one passive scroll listener and a requestAnimationFrame update, without an animation dependency.

The Cancer Care EMR emblem is an inline vector concept. To add real project pictures later, replace the illustration inside each `.project-art` in `app/page.tsx`; keep that wrapper to preserve the hover and rail behavior. `app/motion.css` contains the motion styles and `components/interactive-layer.tsx` contains scroll orchestration.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import that repository at Vercel.
3. Keep the detected framework as Next.js and deploy.

Or, with the Vercel CLI installed:

```bash
vercel
```

Set `NEXT_PUBLIC_SITE_URL` in Vercel to the final production domain for canonical social metadata. The site defaults to `http://localhost:3000` during local development.

## Resume source

Content is based on `M_Furqan_Resume.pdf`. Edit portfolio content in `app/page.tsx` and the structured profile in `normalized-profile.json`.
