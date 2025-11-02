# SaaSified and Amplified 2025 - Event Website

Official website for **"SaaSified and Amplified: Ascending Software to the Sky"** — a GDGoC PLM flagship event in collaboration with Philippine Startup Week 2025.

**Event Date:** November 13, 2025  
**Built with:** Next.js 16 + TypeScript

---

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## Project Structure

```
app/
├── src/app/              # Pages (App Router)
│   ├── page.tsx         # Homepage
│   ├── about/           # About page
│   ├── speakers/        # Speakers page
│   ├── schedule/        # Schedule page
│   ├── faq/             # FAQ page
│   └── partners/        # Partners page
├── components/          # Reusable components (Header, Footer, Countdown)
├── constants/           # Hardcoded event data
├── types/              # TypeScript interfaces
└── lib/                # Utility functions
```

---

## Available Branches

- **`main`** — Styled version with vanilla CSS
- **`feature/raw-unstyled`** — Raw HTML structure (no styling)
- **`feature/vanilla-css-styling`** — Vanilla CSS implementation reference

---

## Key Features

- Static site generation (SSG)
- TypeScript with strict mode
- SEO optimized with metadata
- Responsive design
- Event countdown timer
- 6 pages: Home, About, Speakers, Schedule, FAQ, Partners

---

## Common Tasks

**Update registration link:**
```typescript
// constants/eventData.ts
export const REGISTRATION_LINK: ExternalLink = {
  url: 'YOUR-GOOGLE-FORMS-URL',
  label: 'Register Now',
  openInNewTab: true,
};
```

**Add a new FAQ:**
```typescript
// constants/faq.ts
{
  id: 'faq-11',
  question: 'Your question?',
  answer: 'Your answer.',
}
```

---

## Deploy to Vercel

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Set root directory to `/app`
3. Deploy automatically on push to `main`

---

## Developed By

**Daniel Hardy C. Camacho** — Web Development Lead, GDGoC PLM 2025  
**Mariano Luiz B. King** — Web Development Lead, GDGoC PLM 2025

---

**Google Developer Groups on Campus – Pamantasan ng Lungsod ng Maynila**
