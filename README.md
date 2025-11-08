# SaaSified and Amplified: Ascending Software to the Sky

Official event website for GDGoC PLM's flagship event in collaboration with Philippine Startup Week 2025.

## Event Details

**Date:** November 13, 2025 (Thursday)  
**Time:** 12:00 PM – 4:00 PM  
**Venue:** Bukod Tanging Bulwagan, PLM, Intramuros, Manila  
**Theme:** Scaling Filipino Innovation: Start Local, Go Global!

## About

This is a static event website built with Next.js and TypeScript, showcasing our keynote speakers, event schedule, and registration information for PLM students interested in SaaS innovation and cloud-driven entrepreneurship.

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript

## Development

```bash
# Navigate to app directory
cd app

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Development server will be available at `http://localhost:3000`

## Project Structure

```
├── documentation/          # Project documentation (SRS)
├── docs/                  # Raw event info (gitignored)
└── app/                   # Next.js application
    ├── src/
    │   └── app/          # App Router pages
    │       ├── about/
    │       ├── speakers/
    │       ├── schedule/
    │       ├── faq/
    │       ├── partners/
    │       ├── layout.tsx
    │       └── page.tsx
    ├── components/        # Reusable React components
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   └── Countdown.tsx
    ├── constants/         # Hardcoded data
    │   ├── eventData.ts
    │   ├── speakers.ts
    │   ├── faq.ts
    │   ├── schedule.ts
    │   └── partners.ts
    ├── types/            # TypeScript interfaces
    └── lib/              # Utility functions
```

## Pages

- **Home** (`/`) - Event hero, countdown, quick links
- **About** (`/about`) - Event details, objectives, partnerships
- **Speakers** (`/speakers`) - Speaker bios and topics
- **Schedule** (`/schedule`) - Event timeline
- **FAQ** (`/faq`) - Frequently asked questions
- **Partners** (`/partners`) - Sponsors and partners

## Developed By

**Daniel Hardy C. Camacho** – Web Development Lead, GDGoC PLM 2025  
**Mariano Luiz B. King** – Web Development Lead, GDGoC PLM 2025

---

**Google Developer Groups on Campus – Pamantasan ng Lungsod ng Maynila**
