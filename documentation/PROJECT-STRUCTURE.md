# Project Structure Documentation

## Overview

This document outlines the folder structure and file organization for the SaaSified and Amplified 2025 event website.

## Root Directory Structure

```
gdg-phsw-2025/
├── .gitignore              # Git ignore rules
├── README.md               # Project overview and instructions
├── documentation/          # Project documentation
│   └── SRS-Document.md    # Software Requirements Specification
├── docs/                   # Raw event information (gitignored)
│   ├── general-info.txt
│   ├── speaker-details.txt
│   └── activities-lineup.txt
└── app/                    # Next.js application
```

## Next.js App Directory (`/app`)

### Core Configuration Files

```
app/
├── package.json            # Dependencies and scripts
├── package-lock.json       # Locked dependency versions
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── eslint.config.mjs      # ESLint configuration
├── next-env.d.ts          # Next.js TypeScript declarations
└── .gitignore             # App-specific git ignore
```

### Source Code (`/app/src`)

```
src/
└── app/                    # App Router directory
    ├── layout.tsx         # Root layout with Header/Footer
    ├── page.tsx           # Homepage
    ├── globals.css        # Global styles
    ├── not-found.tsx      # 404 page
    ├── about/
    │   └── page.tsx       # About page
    ├── speakers/
    │   └── page.tsx       # Speakers page
    ├── schedule/
    │   └── page.tsx       # Schedule page
    ├── faq/
    │   └── page.tsx       # FAQ page
    └── partners/
        └── page.tsx       # Partners page
```

### Components (`/app/components`)

Reusable React components used across pages.

```
components/
├── index.ts               # Component exports
├── Header.tsx             # Navigation header
├── Footer.tsx             # Site footer
└── Countdown.tsx          # Event countdown timer
```

**Component Guidelines:**
- All components use TypeScript
- Client components marked with `'use client'`
- Exported through `index.ts` for clean imports

### Constants (`/app/constants`)

Hardcoded data for the website.

```
constants/
├── index.ts               # Central exports
├── eventData.ts           # Event details, dates, about info
├── speakers.ts            # Speaker data array
├── faq.ts                 # FAQ items
├── schedule.ts            # Event timeline
└── partners.ts            # Partner/sponsor data
```

**Data Management:**
- All content is hardcoded (no CMS)
- Each file exports typed constants
- Easy to update for content changes

### Types (`/app/types`)

TypeScript type definitions and interfaces.

```
types/
└── index.ts               # All type exports
    ├── Speaker
    ├── FAQItem
    ├── Partner
    ├── ScheduleItem
    ├── EventDetails
    └── ExternalLink
```

**Type Safety:**
- Interfaces define data structures
- Used across components and constants
- Ensures type consistency

### Library (`/app/lib`)

Utility functions and helpers (currently empty, for future use).

```
lib/
└── (utility functions)
```

### Public Assets (`/app/public`)

Static assets served directly.

```
public/
├── images/                # Event images, logos
├── favicon.ico           # Site favicon
└── (other static files)
```

### Build Output

```
.next/                     # Next.js build cache (gitignored)
out/                       # Static export output (gitignored)
node_modules/              # Dependencies (gitignored)
```

## File Naming Conventions

- **Pages**: `page.tsx` in named folders
- **Layouts**: `layout.tsx`
- **Components**: PascalCase (e.g., `Header.tsx`, `Countdown.tsx`)
- **Constants**: camelCase files (e.g., `eventData.ts`, `speakers.ts`)
- **Types**: `index.ts` with named exports

## Import Aliases

Configured in `tsconfig.json`:

```typescript
{
  "@/*": ["./*"],           // Root-level imports
  "@/components": ["./components"],
  "@/types": ["./types"],
  "@/constants": ["./constants"],
  "@/lib": ["./lib"]
}
```

**Usage Examples:**
```typescript
import { Header, Footer } from '@/components';
import { SPEAKERS, EVENT_DETAILS } from '@/constants';
import type { Speaker, FAQItem } from '@/types';
```

## Routing Structure

Next.js App Router file-system based routing:

| Route | File Path | Description |
|-------|-----------|-------------|
| `/` | `src/app/page.tsx` | Homepage |
| `/about` | `src/app/about/page.tsx` | About page |
| `/speakers` | `src/app/speakers/page.tsx` | Speakers page |
| `/schedule` | `src/app/schedule/page.tsx` | Schedule page |
| `/faq` | `src/app/faq/page.tsx` | FAQ page |
| `/partners` | `src/app/partners/page.tsx` | Partners page |
| `*` | `src/app/not-found.tsx` | 404 page |

## Development Workflow

### Adding a New Page

1. Create folder in `src/app/` (e.g., `contact/`)
2. Add `page.tsx` with metadata and content
3. Update navigation in `components/Header.tsx`
4. Add link in footer if needed

### Adding New Data

1. Define TypeScript interface in `types/index.ts`
2. Create constants file in `constants/`
3. Export from `constants/index.ts`
4. Import and use in pages

### Adding a Component

1. Create component file in `components/`
2. Mark as `'use client'` if using hooks/state
3. Export from `components/index.ts`
4. Import using `@/components` alias

## Build

### Development
```bash
cd app
npm run dev
```

### Production Build
```bash
cd app
npm run build
```

### Static Export
```bash
cd app
npm run build
# Output in /out directory
```

## Best Practices

1. **Type Safety**: Always define TypeScript types for data
2. **Component Reusability**: Extract common UI into components
3. **Separation of Concerns**: Keep data separate from UI
4. **Semantic HTML**: Use proper HTML5 elements
5. **Accessibility**: Include ARIA labels and alt text
6. **SEO**: Add metadata to each page
7. **Clean Imports**: Use path aliases (`@/...`)
8. **Documentation**: Comment complex logic

## Future Enhancements

### Phase 2 (Styling)
- Add CSS modules or styling framework
- Implement responsive design
- Create design system

### Phase 3 (Advanced Features)
- Image optimization
- Animation library integration
- Analytics integration
- Performance monitoring

---

*This structure follows Next.js 14+ App Router conventions and is optimized for static site generation.*
