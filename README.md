# Harpoon Studios — Company Website

> **Code. Fight. Dominate.**
>
> The official marketing website for Harpoon Studios — an AI robot programming game where you write code to control robots that fight in an arena using a unique harpoon mechanic.

---

## Overview

A fully static, single-page-application marketing site built with **React 19** and **Vite**. It covers the full company story across 9 pages: product, game mechanics, team, roadmap, blog, FAQ, contact, and careers. The UI is animated, space-themed, and fully responsive.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19.2.6 | UI framework |
| React Router DOM | 7.18.0 | Client-side routing |
| Framer Motion | 12.40.0 | Page transitions and scroll animations |
| Lucide React | 1.21.0 | Icon library |
| Vite | 8.0.12 | Dev server and bundler |
| ESLint | 10.x | Linting (react-hooks + react-refresh plugins) |

> **No Tailwind.** All styles live in `src/index.css` using CSS custom properties and vanilla class-based selectors.

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install & Run

```bash
# 1. Navigate to the project
cd harpoon-studios

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app runs at **http://localhost:5173**

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across all `.js` / `.jsx` files |

---

## Project Structure

```
harpoon-studios/
├── public/
│   ├── favicon.svg          # SVG favicon
│   ├── icons.svg            # Shared icon sprite
│   └── team/                # Team member photos (zly1–zly4.jpg)
│
├── src/
│   ├── components/
│   │   ├── CanvasBackground.jsx  # Animated starfield / nebula canvas
│   │   ├── Navbar.jsx            # Fixed nav with dropdown + mobile menu
│   │   └── Footer.jsx            # Multi-column footer with social links
│   │
│   ├── pages/
│   │   ├── Home.jsx         # Hero, feature highlights
│   │   ├── About.jsx        # Company story, origin, mission
│   │   ├── Team.jsx         # Team member profiles with photos
│   │   ├── Game.jsx         # Harpoon mechanics, physics, FOV system
│   │   ├── Ideas.jsx        # 4-phase roadmap + long-term vision
│   │   ├── FAQ.jsx          # Accordion FAQ (4 categories)
│   │   ├── Blog.jsx         # Blog post grid with featured article
│   │   ├── Contact.jsx      # Contact form with submission state
│   │   └── Careers.jsx      # Open roles with skill tags
│   │
│   ├── assets/
│   │   └── hero.png         # Hero section image
│   │
│   ├── App.jsx              # Router + AnimatePresence (page transitions)
│   ├── main.jsx             # ReactDOM.createRoot entry point
│   └── index.css            # Global design system (tokens, utilities, components)
│
├── index.html               # Shell HTML with Google Fonts and meta tags
├── vite.config.js           # Vite config (React plugin only)
└── eslint.config.js         # Flat ESLint config
```

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section, feature cards, CTA |
| `/about` | About | Company origin story, mission statement |
| `/team` | Team | Profiles: name, role, bio, skill tags, photo |
| `/game` | Game | Harpoon physics, FOV system, API reference |
| `/ideas` | Ideas | 4-phase product roadmap + long-term vision |
| `/faq` | FAQ | Accordion Q&A: General, Gameplay, Technical, Pricing |
| `/blog` | Blog | Featured article + post grid |
| `/contact` | Contact | Form with reason dropdown, contact info |
| `/careers` | Careers | Open roles: Senior Game Engine Dev, Frontend Engineer, Game Designer, Developer Advocate |

---

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Cyan | `#00d4ff` | Primary accent, CTAs, links |
| Purple | `#8b5cf6` | Secondary accent, gradients |
| Orange | `#ff6b35` | Tertiary accent, highlights |
| Background | `#020212` | Page background |
| Surface | `#07071e` | Cards, secondary background |

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| Orbitron | 400–900 | Display headings, logo |
| Inter | 300–700 | Body text, UI copy |
| JetBrains Mono | 400–600 | Code snippets, technical labels |

All three fonts are loaded from Google Fonts in `index.html`.

### Key CSS Utilities (defined in `index.css`)

| Class | Purpose |
|-------|---------|
| `.container` | Max-width 1220px, centered |
| `.section` | 110px top/bottom padding |
| `.page-wrapper` | Full-page layout wrapper |
| `.btn-primary` | Cyan → purple gradient button with hover lift |
| `.glass-card` | Frosted glass card (backdrop blur + border) |

---

## Key Component Notes

### `CanvasBackground.jsx`
Full-screen `<canvas>` rendered behind all page content using `position: fixed`. Draws:
- **900 twinkling stars** — sine-wave brightness oscillation per star
- **12 nebula clouds** — slow-moving blobs in cyan, purple, and orange
- **Shooting stars** — randomly spawned, fade out on exit
- **Subtle grid** — 80px spacing, very low opacity

Handles `window.resize` to keep canvas dimensions correct.

### `Navbar.jsx`
- Fixed to top; adds blur + border on scroll
- Desktop: inline links with a **Company** dropdown (About, Ideas, Team, Careers)
- Mobile: hamburger menu that slides open below 900px breakpoint
- Lucide icons: `Zap` (logo), `Menu` / `X` (mobile toggle), `ChevronDown` (dropdown)

### `App.jsx`
Wraps all routes in `<AnimatePresence>` from Framer Motion so every page-to-page navigation fades/slides smoothly.

---

## Lucide React v1.x — Icon Caveat

Lucide React v1.21.0 removed all brand icons. The following substitutions are used throughout the codebase:

| Intended | Replacement Used |
|----------|-----------------|
| `Twitter` | `Share2` |
| `Github` | `Terminal` |
| `Linkedin` | `Network` |
| `Discord` | `MessageCircle` |

Do not install an older version of `lucide-react` to restore brand icons — use the substitutes above or SVG imports from the brand directly.

---

## Build & Deploy

```bash
# Build for production
npm run build

# Output is in dist/
# Deploy dist/ to any static host: Vercel, Netlify, GitHub Pages, Cloudflare Pages
```

The site is fully static — no backend, no API, no environment variables required.

---

## Contact

**Harpoon Studios Inc.**
San Francisco, CA
hello@harpoonstudios.io
