# Quick Reference Card

## Start Development

```bash
cd app
npm run dev
```
**URL:** http://localhost:3000

---

## Key Directories

| Path | Purpose |
|------|---------|
| `app/src/app/` | All pages |
| `app/components/` | Reusable components |
| `app/constants/` | Hardcoded data |
| `app/types/` | TypeScript interfaces |
| `documentation/` | Project docs |

---

## Common Tasks

### Update Registration Link
```typescript
// app/constants/eventData.ts (line 25)
export const REGISTRATION_LINK: ExternalLink = {
  url: 'YOUR-GOOGLE-FORMS-URL',
  label: 'Register Now',
  openInNewTab: true,
};
```

### Add New FAQ
```typescript
// app/constants/faq.ts
{
  id: 'faq-11',
  question: 'Your question?',
  answer: 'Your answer.',
}
```

### Add Partner
```typescript
// app/constants/partners.ts
{
  id: 'partner-2',
  name: 'Partner Name',
  description: 'Description',
  tier: 'major',
}
```

---

## Pages & Routes

| Route | File | Status |
|-------|------|--------|
| `/` | `src/app/page.tsx` | Complete |
| `/about` | `src/app/about/page.tsx` | Complete |
| `/speakers` | `src/app/speakers/page.tsx` | Complete |
| `/schedule` | `src/app/schedule/page.tsx` | Complete |
| `/faq` | `src/app/faq/page.tsx` | Complete |
| `/partners` | `src/app/partners/page.tsx` | Complete |

---

## Components

```typescript
import { Header, Footer, Countdown } from '@/components';
```

- **Header:** Navigation + Register button
- **Footer:** Links + Credits
- **Countdown:** Event countdown timer

---

## Data Constants

```typescript
import { 
  EVENT_DETAILS, 
  EVENT_DATE,
  SPEAKERS,
  FAQ_ITEMS,
  SCHEDULE,
  PARTNERS 
} from '@/constants';
```

---

## TypeScript Types

```typescript
import type { 
  Speaker,
  FAQItem,
  Partner,
  ScheduleItem,
  EventDetails 
} from '@/types';
```

---

## Build

### Local Build
```bash
cd app
npm run build
```

---

## Documentation

| Document | Purpose |
|----------|---------|
| `SRS-Document.md` | Full requirements |
| `PROJECT-STRUCTURE.md` | Folder organization |
| `DEVELOPMENT-GUIDE.md` | How to develop |

---

## Quick Commands

```bash
# Development
npm run dev           # Start dev server
npm run build         # Production build
npm run lint          # Run linter

# Git
git status            # Check changes
git add .             # Stage all
git commit -m "msg"   # Commit
git push              # Push to remote
```

---

## Troubleshooting

**Port in use?**
```bash
npm run dev -- -p 3001
```

**Module errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails?**
```bash
rm -rf .next
npm run build
```

---

## Event Details

**Date:** November 13, 2025  
**Time:** 12:00 PM – 4:00 PM  
**Venue:** Bukod Tanging Bulwagan, PLM

**Countdown:** Live on homepage

---

## Phase 1 Complete

- [x] 6 pages working
- [x] 3 components built
- [x] All data hardcoded
- [x] Countdown live
- [x] Navigation working
- [x] TypeScript strict
- [x] SEO optimized
- [x] Ready for Phase 2

---

**Deadline:** November 10, 2025  
**Event:** November 13, 2025

---

*Quick Reference for GDGoC PLM Event Website*  
*Developed by Daniel Hardy C. Camacho & Mariano Luiz B. King*
