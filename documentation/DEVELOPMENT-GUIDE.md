# Development Guide

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- Code editor (VS Code recommended)

### Initial Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd gdg-phsw-2025
```

2. **Install dependencies:**
```bash
cd app
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
Navigate to `http://localhost:3000`

## Available Scripts

### Development
```bash
npm run dev          # Start development server with hot reload
npm run dev -- -p 3001  # Start on custom port
```

### Building
```bash
npm run build        # Create optimized production build
npm run start        # Run production build locally
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run lint -- --fix  # Auto-fix linting issues
```

### Type Checking
```bash
npx tsc --noEmit     # Check TypeScript errors without compiling
```

## Project Configuration

### Environment Variables

Create `.env.local` in the `/app` directory for local configuration:

```env
# Example (if needed in future)
NEXT_PUBLIC_REGISTRATION_URL=https://forms.google.com/...
NEXT_PUBLIC_ANALYTICS_ID=UA-XXXXX-X
```

**Note:** Current implementation doesn't require env variables yet.

### TypeScript Configuration

TypeScript is configured with strict mode in `tsconfig.json`:
- Strict type checking enabled
- Path aliases configured for clean imports
- No implicit any types allowed

### Next.js Configuration

Static export is enabled in `next.config.ts`:
```typescript
{
  output: 'export',
  images: { unoptimized: true }
}
```

## Development Workflow

### 1. Working on Pages

**Example: Update the Homepage**

```bash
# File: app/src/app/page.tsx
```

1. Edit the page component
2. Save file (hot reload updates automatically)
3. Check browser for changes
4. Verify TypeScript compilation

### 2. Adding New Data

**Example: Add a new FAQ**

```typescript
// File: app/constants/faq.ts

export const FAQ_ITEMS: FAQItem[] = [
  // ... existing items
  {
    id: 'faq-11',
    question: 'New question?',
    answer: 'The answer to the question.',
  },
];
```

### 3. Creating Components

**Example: Create a Button component**

```typescript
// File: app/components/Button.tsx

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={`button button-${variant}`}>
      {label}
    </button>
  );
}
```

Then export from `components/index.ts`:
```typescript
export { default as Button } from './Button';
```

### 4. Updating Constants

**To update the registration link:**

```typescript
// File: app/constants/eventData.ts

export const REGISTRATION_LINK: ExternalLink = {
  url: 'https://forms.google.com/your-form-url', // Update here
  label: 'Register Now',
  openInNewTab: true,
};
```

### 5. Adding Metadata (SEO)

Each page should have unique metadata:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | SaaSified and Amplified 2025',
  description: 'Page description for SEO',
  openGraph: {
    title: 'Social media title',
    description: 'Social media description',
    images: ['/og-image.jpg'],
  },
};
```

## Common Tasks

### Task: Update Event Date

1. Open `app/constants/eventData.ts`
2. Modify `EVENT_DATE` constant:
```typescript
export const EVENT_DATE = new Date('2025-11-13T12:00:00+08:00');
```
3. Save and verify countdown timer updates

### Task: Add New Speaker

1. Open `app/constants/speakers.ts`
2. Add new speaker object to `SPEAKERS` array:
```typescript
{
  id: 'speaker-4',
  name: 'Speaker Name',
  title: 'Title and Credentials',
  topic: 'Talk Title',
  topicDescription: 'Description...',
  biography: 'Bio...',
}
```
3. Speaker automatically appears on `/speakers` page

### Task: Update Navigation

1. Open `app/components/Header.tsx`
2. Modify `navLinks` array:
```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  // Add new link
  { href: '/gallery', label: 'Gallery' },
];
```

## Debugging

### TypeScript Errors

Run type checking:
```bash
npx tsc --noEmit
```

Common issues:
- Missing type imports
- Incorrect prop types
- Untyped variables (avoid `any`)

### Build Errors

```bash
npm run build
```

Check for:
- Import path issues
- Missing dependencies
- TypeScript compilation errors

### Runtime Errors

Check browser console (F12) for:
- Client-side errors
- Network issues
- React errors

Check terminal for:
- Server-side errors
- Build-time errors

## Testing

### Manual Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Active page is highlighted in nav
- [ ] Countdown timer updates every second
- [ ] Registration link opens in new tab
- [ ] Footer links work
- [ ] 404 page displays for invalid routes
- [ ] Content is accurate and up-to-date

### Cross-browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Responsive Testing

Test at breakpoints:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## Git Workflow

### Branch Strategy

```bash
main                 # Production-ready code
├── feature/name    # New features
├── fix/name        # Bug fixes
└── docs/name       # Documentation updates
```

### Commit Messages

Follow conventional commits:

```bash
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: restructure code
test: add tests
chore: update dependencies
```

### Example Workflow

```bash
# Create feature branch
git checkout -b feature/add-gallery-page

# Make changes and commit
git add .
git commit -m "feat: add gallery page for event photos"

# Push to remote
git push origin feature/add-gallery-page

# Create pull request on GitHub
# Merge after review
```

## Performance Optimization

### Current Implementation

- Static site generation (SSG)
- No server-side rendering needed
- Optimized for fast load times

### Future Optimizations (Phase 2)

- Image optimization with Next.js Image component
- Code splitting
- Lazy loading
- CDN caching

## Troubleshooting

### Issue: Port 3000 already in use

```bash
# Use different port
npm run dev -- -p 3001
```

### Issue: Module not found errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript path alias not working

Check `tsconfig.json` paths configuration matches import statements.

### Issue: Build fails

```bash
# Check for errors
npm run build

# Clear Next.js cache
rm -rf .next
npm run build
```

## Resources

- **Next.js Docs:** https://nextjs.org/docs
- **TypeScript Docs:** https://www.typescriptlang.org/docs
- **React Docs:** https://react.dev

## Getting Help

- Check documentation in `/documentation`
- Review SRS document for requirements
- Check project structure guide
- Contact development team leads

---

**Happy Coding!**

*Developed by Daniel Hardy C. Camacho & Mariano Luiz B. King*
