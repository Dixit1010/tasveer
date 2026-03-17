
# Tasveer — Photo Portfolio

A modern, animated **photo portfolio** built with **Vite + React**. It includes a smooth-scrolling landing page, a filterable gallery, and a lightbox experience.

## Features

- **Gallery + Lightbox**: click photos to open an immersive viewer
- **Smooth scrolling**: powered by Lenis
- **Motion & micro-interactions**: Framer Motion + GSAP
- **3D section**: built with React Three Fiber / Drei / Three.js
- **Styling**: Tailwind CSS

## Tech Stack

- **React 19** + **Vite**
- **Tailwind CSS**
- **Framer Motion**, **GSAP**
- **Lenis**
- **Three.js**, **@react-three/fiber**, **@react-three/drei**

## Getting Started (Local)

### Prerequisites

- **Node.js** (recommended: latest LTS)
- **npm** (ships with Node)

### Install & run

```bash
npm install
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Customize the Photos

The gallery data lives in:

- `src/data/photos.js`

Update the `PHOTOS` array:

- **src**: full-size image URL
- **thumb**: thumbnail URL
- **title**: photo title
- **cat**: category slug (e.g. `street`, `nature`)
- **year**: display year
- **aspectRatio**: `landscape` or `portrait`

Also update the visible category list in:

- `CATEGORIES`

## Project Structure (high level)

- `src/App.jsx`: page layout + lightbox state
- `src/components/`: UI sections (Hero, Gallery, Lightbox, Navbar, etc.)
- `src/data/photos.js`: photo metadata

## Build & Deploy

Build:

```bash
npm run build
```

This outputs static files to `dist/`, which you can deploy to:

- **GitHub Pages**, **Netlify**, **Vercel**, **Cloudflare Pages**, etc.

## License

If you plan to make this public, add a license (MIT is a common choice).
