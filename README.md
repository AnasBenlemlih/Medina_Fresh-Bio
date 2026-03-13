# MEDINA Fresh & Bio

A modern, high-converting landing page for **MEDINA Fresh & Bio** — a fresh juice and snack shop in the Medina of Fès, Morocco.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion** (scroll animations)
- **TypeScript**

## Features

- Mobile-first responsive design
- Sticky navbar with hamburger menu on mobile
- Smooth scroll navigation
- SEO-optimized metadata
- Google Maps embed (Location section)
- Sticky bottom CTA on mobile (View Menu / Find Us)
- Accessibility: focus states, ARIA labels, semantic HTML

## Get Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Customize

- **Phone / WhatsApp / Instagram:** Edit `components/Contact.tsx` (placeholders: replace with real numbers and handle).
- **Google Maps:** The embed uses the address “Rue Talaa Sghira, 2 Rue Souiket Ben Safi, Fès 30000, Maroc”. For a precise pin, replace the embed URL in `Location.tsx` with the “Embed” iframe URL from Google Maps.

## Project Structure

```
├── app/
│   ├── layout.tsx    # Root layout, metadata, fonts
│   ├── page.tsx      # Home page (sections)
│   └── globals.css   # Tailwind + base styles
├── components/
│   ├── Navbar.tsx    # Sticky nav + mobile menu
│   ├── Hero.tsx      # Hero with CTAs
│   ├── About.tsx     # About section
│   ├── Menu.tsx      # Menu grid (juices, smoothies, etc.)
│   ├── Gallery.tsx   # Image gallery
│   ├── Location.tsx  # Address + Google Maps
│   ├── Contact.tsx   # Phone, WhatsApp, Instagram
│   ├── Footer.tsx    # Brand + copyright
│   └── MobileCTA.tsx # Sticky bottom CTAs (mobile)
├── tailwind.config.ts
└── next.config.js
```

## Performance

- `next/image` for optimized images (Unsplash)
- Lazy loading for below-the-fold content
- `display: swap` for fonts to avoid FOIT

Target: Lighthouse 90+ (run `npm run build` then audit in Chrome DevTools).
