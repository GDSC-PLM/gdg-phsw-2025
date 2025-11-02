# Software Requirements Specification (SRS)
## GDGoC PLM Event Website: SaaSified and Amplified 2025

**Document Version:** 1.0  
**Date:** November 2, 2025  
**Project:** Static Event Website for "SaaSified and Amplified: Ascending Software to the Sky"  
**Organization:** Google Developer Groups on Campus – PLM (GDGoC PLM)  
**Prepared by:** Development Team

---

## Table of Contents

1. [Introduction](#1-introduction)
   - 1.1 [Purpose](#11-purpose)
   - 1.2 [Scope](#12-scope)
   - 1.3 [Document Overview](#13-document-overview)
   - 1.4 [Definitions and Acronyms](#14-definitions-and-acronyms)
2. [Overall Description](#2-overall-description)
   - 2.1 [Product Perspective](#21-product-perspective)
   - 2.2 [Product Features](#22-product-features)
   - 2.3 [User Classes and Characteristics](#23-user-classes-and-characteristics)
   - 2.4 [Operating Environment](#24-operating-environment)
   - 2.5 [Design and Implementation Constraints](#25-design-and-implementation-constraints)
   - 2.6 [Assumptions and Dependencies](#26-assumptions-and-dependencies)
3. [System Features and Requirements](#3-system-features-and-requirements)
   - 3.1 [Homepage/Landing Page](#31-homepagelanding-page)
   - 3.2 [About the Event Page](#32-about-the-event-page)
   - 3.3 [Speakers Page](#33-speakers-page)
   - 3.4 [Schedule/Agenda Page](#34-scheduleagenda-page)
   - 3.5 [FAQ Page](#35-faq-page)
   - 3.6 [Partners/Sponsors Page](#36-partnerssponsors-page)
   - 3.7 [Navigation and Routing](#37-navigation-and-routing)
   - 3.8 [Countdown Timer](#38-countdown-timer)
   - 3.9 [External Registration Integration](#39-external-registration-integration)
4. [Nonfunctional Requirements](#4-nonfunctional-requirements)
   - 4.1 [Performance Requirements](#41-performance-requirements)
   - 4.2 [Security Requirements](#42-security-requirements)
   - 4.3 [Maintainability](#43-maintainability)
   - 4.4 [Usability](#44-usability)
   - 4.5 [Scalability](#45-scalability)
   - 4.6 [Reliability and Availability](#46-reliability-and-availability)
   - 4.7 [SEO and Discoverability](#47-seo-and-discoverability)
   - 4.8 [Accessibility](#48-accessibility)
   - 4.9 [Browser Compatibility](#49-browser-compatibility)
5. [Tools and Technologies](#5-tools-and-technologies)
   - 5.1 [Frontend Framework](#51-frontend-framework)
   - 5.2 [Programming Language](#52-programming-language)
   - 5.3 [Deployment Platform](#53-deployment-platform)
   - 5.4 [Version Control](#54-version-control)
   - 5.5 [Development Tools](#55-development-tools)
6. [Project Timeline and Milestones](#6-project-timeline-and-milestones)
7. [Future Enhancements](#7-future-enhancements)
8. [Appendices](#8-appendices)

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) document provides a comprehensive description of the requirements for developing a static event website for **"SaaSified and Amplified: Ascending Software to the Sky"**, an official campus partner event for Philippine Startup Week 2025, organized by Google Developer Groups on Campus – Pamantasan ng Lungsod ng Maynila (GDGoC PLM).

The purpose of this document is to:
- Define the functional and nonfunctional requirements of the website
- Establish a clear understanding between stakeholders and the development team
- Serve as a reference for development, testing, and validation
- Guide the technical implementation using Next.js and TypeScript

### 1.2 Scope

The website will serve as the primary digital platform for the event scheduled for **November 13, 2025**. The scope includes:

**In Scope:**
- Static informational website with multiple pages
- Event details, speaker information, and schedule presentation
- External registration integration via Google Forms
- Countdown timer to event date
- FAQ and Partners/Sponsors sections
- SEO optimization and social media integration
- Responsive design structure (barebones, no styling libraries)
- Deployment on Vercel
- Post-event archival and future reference capability

**Out of Scope (Current Phase):**
- Visual design and styling (deferred to Phase 2)
- CSS frameworks or component libraries
- Backend services or database integration
- User authentication or admin panels
- Real-time features or websockets
- Payment processing
- Content Management System (CMS) integration

### 1.3 Document Overview

This document is organized into sections covering:
- Overall product description and context
- Detailed functional requirements for each page and feature
- Nonfunctional requirements covering performance, security, and quality attributes
- Technical stack and tools
- Project timeline and future considerations

### 1.4 Definitions and Acronyms

| Term | Definition |
|------|------------|
| **SRS** | Software Requirements Specification |
| **SaaS** | Software as a Service |
| **GDGoC PLM** | Google Developer Groups on Campus – Pamantasan ng Lungsod ng Maynila |
| **PLM** | Pamantasan ng Lungsod ng Maynila |
| **PSW 2025** | Philippine Startup Week 2025 |
| **SEO** | Search Engine Optimization |
| **SSG** | Static Site Generation |
| **SSR** | Server-Side Rendering |
| **ISR** | Incremental Static Regeneration |
| **API** | Application Programming Interface |
| **UI** | User Interface |
| **UX** | User Experience |
| **FAQ** | Frequently Asked Questions |
| **CTA** | Call to Action |

---

## 2. Overall Description

### 2.1 Product Perspective

The website is a standalone static web application developed specifically for the "SaaSified and Amplified" event. It serves as the central information hub for:
- Event attendees (100-150 PLM students)
- Event organizers (GDGoC PLM team)
- Guest speakers (3 industry professionals)
- Potential partners and sponsors

The website will remain deployed post-event to serve as:
- A historical archive of the event
- A reference for future GDGoC PLM events
- A showcase of student-led technology initiatives at PLM

### 2.2 Product Features

The website will include the following core features:

1. **Homepage/Landing Page** – Event hero section, theme introduction, key details
2. **About the Event** – Objectives, partnership opportunities, GDGoC PLM information
3. **Speakers Section** – Speaker profiles, topics, and credentials
4. **Schedule/Agenda** – High-level event timeline (12:00 PM – 4:00 PM)
5. **FAQ Page** – Commonly asked questions and answers
6. **Partners/Sponsors Page** – Recognition of supporting organizations
7. **Navigation System** – Seamless routing between pages
8. **Countdown Timer** – Real-time countdown to event date (November 13, 2025)
9. **External Registration** – Link/button to Google Forms registration
10. **SEO Optimization** – Meta tags, Open Graph, and Twitter card support
11. **Responsive Structure** – Mobile, tablet, and desktop compatibility (structural only)

### 2.3 User Classes and Characteristics

#### 2.3.1 Primary Users: Event Attendees (Students)
- **Characteristics:** PLM students aged 18-25, tech-savvy, mobile-first users
- **Goals:** Learn about the event, register, view speaker details, find venue information
- **Technical Expertise:** Basic to intermediate web users
- **Usage Pattern:** Multiple short visits (pre-event information gathering)

#### 2.3.2 Secondary Users: Event Organizers
- **Characteristics:** GDGoC PLM team members, event coordinators
- **Goals:** Share event information, promote to students, track engagement
- **Technical Expertise:** Intermediate to advanced
- **Usage Pattern:** Frequent access for monitoring and sharing

#### 2.3.3 Tertiary Users: Speakers
- **Characteristics:** Industry professionals, technical experts
- **Goals:** Verify personal information, share event link
- **Technical Expertise:** Advanced
- **Usage Pattern:** Occasional access to review content

#### 2.3.4 Tertiary Users: Partners and Sponsors
- **Characteristics:** Organizations interested in collaboration
- **Goals:** Understand partnership opportunities, view brand placement
- **Technical Expertise:** Varies
- **Usage Pattern:** Initial research visit

### 2.4 Operating Environment

**Client-Side Environment:**
- **Platforms:** Desktop computers, laptops, tablets, smartphones
- **Operating Systems:** Windows, macOS, Linux, iOS, Android
- **Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Network:** Standard internet connectivity (3G, 4G, 5G, WiFi)

**Server-Side Environment:**
- **Hosting:** Vercel platform
- **Deployment:** Global CDN for fast content delivery
- **Build:** Next.js static export with SSG

### 2.5 Design and Implementation Constraints

1. **Technology Stack:**
   - Must use Next.js (React framework)
   - Must use TypeScript (type-safe development)
   - No CSS frameworks or styling libraries in Phase 1

2. **Content Management:**
   - All content must be hardcoded in components
   - No CMS or external content sources

3. **Deployment:**
   - Must deploy to Vercel platform
   - Must support static site generation

4. **Timeline:**
   - Website must be completed by November 10, 2025 (deadline in 8 days)

5. **Future Compatibility:**
   - Structure must accommodate future styling (Phase 2)
   - Code must be maintainable and well-documented

6. **Performance:**
   - Must handle concurrent traffic from 100-150 users
   - Must be optimized for SEO and social sharing

### 2.6 Assumptions and Dependencies

**Assumptions:**
1. All event content (text, dates, speaker bios) is finalized
2. Google Forms registration link will be provided before deployment
3. Partner/sponsor information will be available before launch
4. Domain name or Vercel subdomain will be configured
5. Target users have modern browsers with JavaScript enabled

**Dependencies:**
1. Vercel platform availability and reliability
2. Next.js framework stability (using latest stable version)
3. TypeScript toolchain and compiler
4. External Google Forms service for registration
5. Internet connectivity for users accessing the site

---

## 3. System Features and Requirements

### 3.1 Homepage/Landing Page

#### 3.1.1 Description
The homepage serves as the main entry point, providing an overview of the event with immediate visual impact and key information.

#### 3.1.2 Functional Requirements

**FR-HP-01:** Display event title and theme
- The page must prominently display "SaaSified and Amplified: Ascending Software to the Sky"
- Must include the tagline: "In collaboration with Philippine Startup Week 2025"
- Must display the theme: "Scaling Filipino Innovation: Start Local, Go Global!"

**FR-HP-02:** Event key details section
- Date: November 13, 2025 (Thursday)
- Time: 12:00 PM – 4:00 PM
- Venue: Bukod Tanging Bulwagan, Pamantasan ng Lungsod ng Maynila (PLM), Intramuros, Manila
- Format: Onsite Keynote Talk
- Audience: 100–150 PLM students

**FR-HP-03:** Countdown timer component
- Must display real-time countdown to November 13, 2025, 12:00 PM (Philippine Time)
- Must show days, hours, minutes, and seconds remaining
- Must update every second
- After the event date passes, display "Event has concluded" or similar message

**FR-HP-04:** Call-to-action (CTA) for registration
- Must display a prominent "Register Now" button
- Button must link to external Google Forms registration page
- Link must open in a new tab

**FR-HP-05:** Brief event description
- Must include a 2-3 paragraph overview of the event
- Must highlight the focus on SaaS and cloud-based software

**FR-HP-06:** Quick links section
- Links to Speakers, Schedule, About, FAQ sections
- Visual navigation cards or buttons for easy access

#### 3.1.3 Technical Requirements

**TR-HP-01:** Implement as Next.js homepage (`/` route or `index.tsx`)
**TR-HP-02:** Use TypeScript interfaces for event data structure
**TR-HP-03:** Countdown timer must use client-side JavaScript (React hooks: `useState`, `useEffect`)
**TR-HP-04:** Must be SEO-optimized with proper meta tags
**TR-HP-05:** External links must include `rel="noopener noreferrer"` for security

---

### 3.2 About the Event Page

#### 3.2.1 Description
Provides comprehensive information about the event's purpose, objectives, partnership opportunities, and the organizing body (GDGoC PLM).

#### 3.2.2 Functional Requirements

**FR-AB-01:** Event description section
- Must include detailed "About the Event" content
- Must explain SaaS focus and key topics:
  - SaaS fundamentals and cloud architecture
  - Scalability and flexibility in modern software
  - Security, reliability, and data protection
  - SaaS-driven entrepreneurship and digital transformation

**FR-AB-02:** Event objectives
- Must display all four objectives:
  1. Equip PLM students with insights on SaaS innovation
  2. Connect students with industry professionals
  3. Promote cloud-driven entrepreneurship awareness
  4. Strengthen academia-industry collaboration

**FR-AB-03:** Partnership opportunities section
- Must detail benefits for partners:
  - Brand exposure among PLM students
  - Featured in event materials
  - Social media promotion
  - Direct connection with students
  - Contribution to nationwide startup advocacy
- Must mention in-kind sponsorship opportunities

**FR-AB-04:** About GDGoC PLM
- Must include description of GDGoC PLM
- Must highlight mission: "build great solutions, transform communities, and connect Haribons through technology"
- Must mention affiliation with global Google Developer network

#### 3.2.3 Technical Requirements

**TR-AB-01:** Implement as `/about` route
**TR-AB-02:** Use semantic HTML5 elements (`<section>`, `<article>`, `<header>`)
**TR-AB-03:** Structure content with TypeScript-defined content objects
**TR-AB-04:** Ensure proper heading hierarchy (h1, h2, h3)

---

### 3.3 Speakers Page

#### 3.3.1 Description
Showcases the three keynote speakers with their credentials, topics, and professional backgrounds.

#### 3.3.2 Functional Requirements

**FR-SP-01:** Speaker 1 - Jazmine Claire Calma
- **Name:** Jazmine Claire Calma
- **Title:** AWS, GCP & ISTQB Certified • Women Techmakers Ambassador • Google Developer Groups Cloud Manila Lead
- **Topic:** "The SaaS Blueprint: Building in the Clouds"
- **Topic Description:** Full description of the SaaS architecture talk
- **Biography:** Complete professional bio (as provided in speaker-details.txt)

**FR-SP-02:** Speaker 2 - Sermil Matoto
- **Name:** Sermil Matoto
- **Title:** Google Developer Expert – Cloud | Chief Engineer at Kollab
- **Topic:** "Scaling Heights: The Art of Seamless Growth"
- **Topic Description:** Full description of the scalability and cloud infrastructure talk
- **Biography:** Complete professional bio (as provided in speaker-details.txt)

**FR-SP-03:** Speaker 3 - Shan Sebastian
- **Name:** Shan Sebastian
- **Title:** CEO of SmartChat AI PH | Co-founder of PH Business Network | SaaS & AI Content Strategist
- **Topic:** "Innovation on Demand: SaaS and the Startup Mindset"
- **Topic Description:** Full description of the entrepreneurial SaaS talk
- **Biography:** Complete professional bio (as provided in speaker-details.txt)

**FR-SP-04:** Speaker card layout
- Each speaker must have a dedicated section/card
- Must display: profile image placeholder, name, title, topic, topic description, biography
- Must maintain consistent layout across all three speakers

#### 3.3.3 Technical Requirements

**TR-SP-01:** Implement as `/speakers` route
**TR-SP-02:** Create TypeScript interface for speaker data model:
```typescript
interface Speaker {
  id: string;
  name: string;
  title: string;
  topic: string;
  topicDescription: string;
  biography: string;
  imageUrl?: string; // Optional for Phase 1
}
```
**TR-SP-03:** Store speaker data as hardcoded array/object
**TR-SP-04:** Map through speakers array to render components
**TR-SP-05:** Use semantic HTML for accessibility

---

### 3.4 Schedule/Agenda Page

#### 3.4.1 Description
Displays a high-level timeline of the event from 12:00 PM to 4:00 PM.

#### 3.4.2 Functional Requirements

**FR-SC-01:** Event timeline overview
- Must display: November 13, 2025 (Thursday), 12:00 PM – 4:00 PM
- Venue: Bukod Tanging Bulwagan, PLM

**FR-SC-02:** Basic agenda structure
- Must include general flow (e.g., Registration, Opening Remarks, Keynote Sessions, Closing)
- Does not need detailed minute-by-minute breakdown
- Must indicate the three speaker sessions

**FR-SC-03:** Speaker topics reference
- Must reference the three speaker topics:
  1. "The SaaS Blueprint: Building in the Clouds"
  2. "Scaling Heights: The Art of Seamless Growth"
  3. "Innovation on Demand: SaaS and the Startup Mindset"

#### 3.4.3 Technical Requirements

**TR-SC-01:** Implement as `/schedule` or `/agenda` route
**TR-SC-02:** Use TypeScript interface for schedule items
**TR-SC-03:** Present information in clear, scannable format (list or timeline structure)

---

### 3.5 FAQ Page

#### 3.5.1 Description
Addresses common questions about the event, registration, venue, and participation.

#### 3.5.2 Functional Requirements

**FR-FAQ-01:** Common questions and answers
- Must include at least 8-12 FAQ items covering:
  - Who can attend? (PLM students only, closed to public)
  - How to register? (Link to Google Forms)
  - Is there a registration fee? (To be determined)
  - What should I bring?
  - Dress code
  - Venue location and directions
  - Event format and duration
  - Contact for questions
  - Food/refreshments
  - Certificates of attendance

**FR-FAQ-02:** Expandable/collapsible format (optional)
- May use accordion-style layout for better UX
- Or simple list format with questions and answers

**FR-FAQ-03:** Contact information
- Must provide GDGoC PLM contact email or social media links

#### 3.5.3 Technical Requirements

**TR-FAQ-01:** Implement as `/faq` route
**TR-FAQ-02:** Create TypeScript interface for FAQ data:
```typescript
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
```
**TR-FAQ-03:** Store FAQ data as hardcoded array
**TR-FAQ-04:** If using accordion, implement with React state management

---

### 3.6 Partners/Sponsors Page

#### 3.6.1 Description
Recognizes and showcases organizations supporting the event.

#### 3.6.2 Functional Requirements

**FR-PS-01:** Partner/sponsor listing
- Must display logos and names of partner organizations
- Must include Philippine Startup Week 2025 as primary collaboration partner

**FR-PS-02:** Partner categories (if applicable)
- May organize into tiers: Title Partner, Major Sponsors, Supporting Partners, etc.

**FR-PS-03:** Partner descriptions (optional)
- Brief description or tagline for each partner

**FR-PS-04:** Placeholder for future partners
- Structure must accommodate addition of more partners

**FR-PS-05:** Call-to-action for partnership
- Must include text inviting organizations to partner
- Link back to "About" page partnership opportunities section

#### 3.6.3 Technical Requirements

**TR-PS-01:** Implement as `/partners` or `/sponsors` route
**TR-PS-02:** Create TypeScript interface for partner data:
```typescript
interface Partner {
  id: string;
  name: string;
  logoUrl?: string;
  description?: string;
  websiteUrl?: string;
  tier?: 'title' | 'major' | 'supporting';
}
```
**TR-PS-03:** Use hardcoded partner data array
**TR-PS-04:** External links must open in new tab with security attributes

---

### 3.7 Navigation and Routing

#### 3.7.1 Description
Provides seamless navigation between all pages of the website.

#### 3.7.2 Functional Requirements

**FR-NAV-01:** Primary navigation menu
- Must be accessible from all pages
- Must include links to: Home, About, Speakers, Schedule, FAQ, Partners
- Must visually indicate current/active page

**FR-NAV-02:** Logo/brand element
- Must include GDGoC PLM or event branding
- Logo must link back to homepage

**FR-NAV-03:** Registration CTA in navigation
- Must include prominent "Register" button in navigation bar
- Must link to Google Forms

**FR-NAV-04:** Footer navigation
- Must include footer with:
  - Links to all main pages
  - Social media links (if applicable)
  - Copyright/credits
  - GDGoC PLM information

**FR-NAV-05:** Mobile navigation
- Navigation must be functional on mobile devices
- May use hamburger menu or simplified navigation

#### 3.7.3 Technical Requirements

**TR-NAV-01:** Use Next.js `Link` component for client-side routing
**TR-NAV-02:** Create reusable navigation components (Header, Footer)
**TR-NAV-03:** Use Next.js `useRouter` for active page detection
**TR-NAV-04:** Implement layout component wrapping all pages
**TR-NAV-05:** Ensure accessibility (semantic HTML, ARIA labels)

---

### 3.8 Countdown Timer

#### 3.8.1 Description
Real-time countdown to the event date displayed on the homepage.

#### 3.8.2 Functional Requirements

**FR-CT-01:** Display countdown
- Must show days, hours, minutes, seconds until November 13, 2025, 12:00 PM
- Must use Philippine Time (PHT/GMT+8)

**FR-CT-02:** Update frequency
- Must update every second (1000ms interval)

**FR-CT-03:** Post-event display
- After event date/time passes, must display completion message
- Example: "Event has concluded" or "Thank you for attending"

**FR-CT-04:** Zero-padding
- Must display two-digit format (e.g., "05" instead of "5")

#### 3.8.3 Technical Requirements

**TR-CT-01:** Implement using React hooks (`useState`, `useEffect`)
**TR-CT-02:** Use JavaScript Date object for time calculations
**TR-CT-03:** Clear interval on component unmount (cleanup)
**TR-CT-04:** Handle timezone conversion to Philippine Time
**TR-CT-05:** Create reusable countdown component with TypeScript props:
```typescript
interface CountdownProps {
  targetDate: Date;
  completionMessage?: string;
}
```

---

### 3.9 External Registration Integration

#### 3.9.1 Description
Integration point for external Google Forms registration.

#### 3.9.2 Functional Requirements

**FR-REG-01:** Registration button/link
- Must be prominently displayed on homepage
- May also appear in navigation or other strategic locations

**FR-REG-02:** External link behavior
- Must open Google Forms in new browser tab
- Must not navigate away from current website

**FR-REG-03:** Link configuration
- Must accept registration URL as configurable value
- Easy to update when Google Forms link is provided

**FR-REG-04:** Registration status (optional)
- May display message if registration is closed or full

#### 3.9.3 Technical Requirements

**TR-REG-01:** Store Google Forms URL in configuration/constants file
**TR-REG-02:** Use `target="_blank"` and `rel="noopener noreferrer"`
**TR-REG-03:** Create TypeScript type for external links:
```typescript
interface ExternalLink {
  url: string;
  label: string;
  openInNewTab: boolean;
}
```

---

## 4. Nonfunctional Requirements

### 4.1 Performance Requirements

**NFR-PERF-01:** Page Load Time
- Initial page load must complete within 3 seconds on standard broadband connection
- Subsequent page navigation must complete within 1 second (client-side routing)

**NFR-PERF-02:** Time to Interactive (TTI)
- Page must become fully interactive within 5 seconds on 4G mobile connection

**NFR-PERF-03:** Lighthouse Performance Score
- Must achieve minimum Lighthouse performance score of 90/100

**NFR-PERF-04:** Bundle Size
- JavaScript bundle size must be under 200KB (gzipped)
- Initial page load should minimize JavaScript execution time

**NFR-PERF-05:** Concurrent Users
- Must handle at least 150 concurrent users without degradation
- Must support traffic spikes during registration announcement periods

**NFR-PERF-06:** Static Asset Optimization
- Images must use modern formats (WebP with fallback) in future phases
- Must implement lazy loading for below-the-fold content

### 4.2 Security Requirements

**NFR-SEC-01:** HTTPS
- Website must be served exclusively over HTTPS
- Vercel provides SSL certificates by default

**NFR-SEC-02:** External Links
- All external links must use `rel="noopener noreferrer"` to prevent reverse tabnabbing

**NFR-SEC-03:** Content Security Policy
- Implement basic CSP headers via Next.js configuration

**NFR-SEC-04:** No Sensitive Data
- No storage of user data or cookies (static site)
- Registration handled entirely by Google Forms

**NFR-SEC-05:** Dependency Security
- Use latest stable versions of Next.js and dependencies
- No known security vulnerabilities in npm packages

### 4.3 Maintainability

**NFR-MAINT-01:** Code Quality
- All code must be written in TypeScript with strict mode enabled
- Must pass TypeScript compiler without errors

**NFR-MAINT-02:** Code Organization
- Must follow Next.js project structure conventions
- Separate components, pages, utilities, and types into dedicated folders

**NFR-MAINT-03:** Documentation
- All components must include JSDoc comments
- README.md must document setup, development, and deployment procedures

**NFR-MAINT-04:** Type Safety
- All props, state, and functions must have explicit TypeScript types
- No use of `any` type except where absolutely necessary

**NFR-MAINT-05:** Reusability
- Common UI elements (buttons, cards, sections) must be extracted as reusable components
- Configuration values (dates, URLs) must be centralized in constants file

**NFR-MAINT-06:** Version Control
- All code must be tracked in Git repository
- Commit messages must follow conventional commit format

### 4.4 Usability

**NFR-USE-01:** Navigation Clarity
- Users must be able to reach any page within 2 clicks from homepage
- Navigation labels must be clear and self-explanatory

**NFR-USE-02:** Content Readability
- Text content must be scannable with clear headings and sections
- Important information must be prominently displayed

**NFR-USE-03:** Call-to-Action Visibility
- Registration CTA must be immediately visible on homepage
- CTA buttons must be clearly distinguishable from regular links

**NFR-USE-04:** Error Handling
- 404 page must exist for invalid routes
- Must provide clear path back to homepage

**NFR-USE-05:** Loading States
- Countdown timer must not cause layout shift on load
- Any dynamic content must have loading states

### 4.5 Scalability

**NFR-SCALE-01:** Static Generation
- All pages must be statically generated at build time
- No server-side rendering required for current scope

**NFR-SCALE-02:** CDN Distribution
- Vercel must distribute static assets via global CDN
- Content must be cached for optimal delivery

**NFR-SCALE-03:** Extensibility
- Architecture must support easy addition of new pages
- Component structure must accommodate future styling phase

**NFR-SCALE-04:** Content Scalability
- Data structures must accommodate additional speakers, FAQs, or partners without code restructuring

### 4.6 Reliability and Availability

**NFR-REL-01:** Uptime
- Website must maintain 99.9% uptime during critical period (November 1-13, 2025)
- Vercel SLA provides high availability

**NFR-REL-02:** Error Recovery
- If countdown timer fails, must degrade gracefully without breaking page
- Must not crash on client-side errors

**NFR-REL-03:** Build Reliability
- Next.js build process must complete without errors
- Deployment must be atomic (all-or-nothing)

### 4.7 SEO and Discoverability

**NFR-SEO-01:** Meta Tags
- Every page must have unique `<title>` and `<meta description>`
- Title format: "[Page Name] | SaaSified and Amplified 2025"

**NFR-SEO-02:** Open Graph Tags
- Must implement Open Graph meta tags for social media sharing
- Must include: title, description, image, URL, type

**NFR-SEO-03:** Twitter Cards
- Must implement Twitter Card meta tags
- Must use summary_large_image card type

**NFR-SEO-04:** Structured Data
- Must implement JSON-LD structured data for event information
- Schema.org Event markup for better search visibility

**NFR-SEO-05:** Sitemap
- Must generate sitemap.xml for search engine crawling

**NFR-SEO-06:** Semantic HTML
- Must use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`)
- Proper heading hierarchy (single h1 per page, logical h2-h6 structure)

**NFR-SEO-07:** URL Structure
- Clean, descriptive URLs (e.g., `/speakers`, not `/page?id=2`)
- No trailing slashes or special characters

### 4.8 Accessibility

**NFR-A11Y-01:** WCAG Compliance
- Must meet WCAG 2.1 Level AA standards (as much as possible without styling)

**NFR-A11Y-02:** Keyboard Navigation
- All interactive elements must be keyboard accessible
- Tab order must be logical and predictable

**NFR-A11Y-03:** ARIA Labels
- Must use appropriate ARIA labels for navigation and interactive elements
- Skip-to-content link for keyboard users

**NFR-A11Y-04:** Focus Management
- Visible focus indicators on all interactive elements (even without styling)
- Focus must not be trapped

**NFR-A11Y-05:** Alt Text
- All images must have descriptive alt text
- Decorative images must have empty alt attribute

**NFR-A11Y-06:** Language Declaration
- HTML lang attribute must be set to "en" (English)

### 4.9 Browser Compatibility

**NFR-COMPAT-01:** Modern Browsers
- Must work on latest 2 versions of:
  - Google Chrome
  - Mozilla Firefox
  - Safari
  - Microsoft Edge

**NFR-COMPAT-02:** Mobile Browsers
- Must work on mobile Safari (iOS)
- Must work on Chrome for Android

**NFR-COMPAT-03:** Responsive Structure
- Must have functional layout on screen sizes: 320px - 2560px width
- Must support portrait and landscape orientations

**NFR-COMPAT-04:** JavaScript Requirement
- Website requires JavaScript for countdown timer and routing
- Core content must be present in HTML (SEO)

---

## 5. Tools and Technologies

### 5.1 Frontend Framework

**Primary Framework:** Next.js (latest stable version as of November 2025)
- **Reasoning:**
  - Built on React for component-based architecture
  - Excellent static site generation capabilities
  - Built-in routing system
  - Optimized build and performance
  - First-class TypeScript support
  - Seamless Vercel deployment integration

**Build Configuration:**
- Static Site Generation (SSG) using `next export` or App Router with static exports
- All pages pre-rendered at build time

### 5.2 Programming Language

**Primary Language:** TypeScript
- **Version:** Latest stable (5.x)
- **Configuration:**
  - Strict mode enabled
  - No implicit any
  - Strict null checks
  - Type-safe component props and state

**Reasoning:**
- Type safety reduces runtime errors
- Better IDE support and autocomplete
- Self-documenting code through types
- Easier refactoring and maintenance

### 5.3 Deployment Platform

**Hosting:** Vercel
- **Features Used:**
  - Automatic deployments from Git
  - Global CDN distribution
  - SSL/HTTPS by default
  - Environment variable management
  - Preview deployments for pull requests
  - Analytics and performance monitoring

**Domain:**
- Vercel-provided subdomain (e.g., `gdgoc-plm-event.vercel.app`)
- Or custom domain if configured

### 5.4 Version Control

**Platform:** Git (GitHub, GitLab, or Bitbucket)
- **Branching Strategy:**
  - `main` branch for production deployments
  - Feature branches for development
  - Pull request workflow

**Commit Conventions:**
- Conventional Commits format
- Examples: `feat:`, `fix:`, `docs:`, `refactor:`

### 5.5 Development Tools

**Package Manager:**
- npm or yarn (whichever developer prefers)

**Code Editor:**
- Visual Studio Code (recommended)
- TypeScript and ESLint extensions

**Development Server:**
- Next.js development server (`next dev`)
- Hot module replacement for fast development

**Linting and Formatting:**
- ESLint for code quality
- TypeScript compiler for type checking
- Optional: Prettier for code formatting

**Build Tools:**
- Next.js build system (`next build`)
- Static export generation

---

## 6. Project Timeline and Milestones

**Project Start Date:** November 2, 2025  
**Project Deadline:** November 10, 2025 (8 days)  
**Event Date:** November 13, 2025

### Phase 1: Structure and Functionality (Current Phase)

**Day 1-2 (Nov 2-3):** Project Setup and Core Pages
- Initialize Next.js + TypeScript project
- Set up project structure and routing
- Implement homepage and navigation
- Create basic layout components

**Day 3-4 (Nov 4-5):** Content Pages Implementation
- Implement About page
- Implement Speakers page
- Implement Schedule/Agenda page

**Day 5-6 (Nov 6-7):** Additional Features
- Implement FAQ page
- Implement Partners/Sponsors page
- Implement countdown timer component
- Integrate external registration links

**Day 7 (Nov 8):** Testing and Optimization
- Test all pages and navigation
- Verify countdown timer functionality
- Test responsive structure across devices
- SEO optimization and meta tags
- Check TypeScript compilation

**Day 8 (Nov 9):** Deployment and Documentation
- Deploy to Vercel
- Test production build
- Configure domain (if applicable)
- Finalize documentation
- Buffer day for any issues

**Day 9 (Nov 10):** Final Review and Launch
- Final stakeholder review
- Make any last-minute adjustments
- Official launch
- Share with intended audience

### Phase 2: Styling and Design (Post-Structure)
- To be scheduled after November 10
- Will include CSS/styling framework integration
- Visual design implementation
- Animations and interactions

### Phase 3: Post-Event (After November 13)
- Update website with "Event Concluded" messaging
- Optional: Add photo gallery or event recap
- Maintain as archive/reference

---

## 7. Future Enhancements

The following features are out of scope for Phase 1 but may be considered for future iterations:

### Design and Styling (Phase 2)
- CSS framework integration (Tailwind CSS, CSS Modules, etc.)
- Visual design implementation matching theme colors
- Animations and transitions
- Image assets and graphics

### Enhanced Functionality (Phase 3+)
- Photo gallery from the event
- Testimonials or feedback section
- Downloadable resources (presentations, certificates)
- Newsletter subscription
- Live streaming integration (for future hybrid events)
- Admin panel for content management
- Blog or news section for GDGoC PLM updates

### Technical Enhancements
- Analytics integration (Google Analytics, Vercel Analytics)
- Progressive Web App (PWA) capabilities
- Internationalization (Tagalog/Filipino language support)
- Dark mode toggle
- Advanced animations (Framer Motion, GSAP)

### Community Features
- Social media feed integration
- Community forum or discussion board
- Alumni network for past attendees

---

## 8. Appendices

### 8.1 Event Information Summary

**Event Name:** SaaSified and Amplified: Ascending Software to the Sky  
**Date:** November 13, 2025 (Thursday)  
**Time:** 12:00 PM – 4:00 PM  
**Venue:** Bukod Tanging Bulwagan, Pamantasan ng Lungsod ng Maynila, Intramuros, Manila  
**Organizer:** GDGoC PLM  
**Expected Attendees:** 100-150 PLM students  

### 8.2 Key Stakeholders

- GDGoC PLM organizing team
- PLM students (target audience)
- Three keynote speakers
- Philippine Startup Week 2025 partners
- Potential sponsors and partners

### 8.3 Reference Documents

- `general-info.txt` – Event details and theme information
- `speaker-details.txt` – Speaker biographies and topics
- `activities-lineup.txt` – Event schedule (to be populated)

### 8.4 Contact Information

**For Technical Inquiries:**
- Development team contact (to be added)

**For Event Inquiries:**
- GDGoC PLM contact information (to be added)

### 8.5 Design Theme Reference

**Theme:** SaaSified and Amplified: Ascending Software to the Sky

**Color Palette:**
- ☁️ Sky White – clarity and openness
- 🌤 Cloud Blue – innovation and technology
- 💫 Sunrise Gradient (Cyan–Violet–Pink) – progress and creativity

**Design Motif:**
- Digital skyline or ascending cloud ladder
- Represents scalable innovation from local to global

*(Visual design implementation deferred to Phase 2)*

---

## Document Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Project Owner | [Name] | | |
| Lead Developer | [Name] | | |
| GDGoC PLM Representative | [Name] | | |

---

**End of Document**

*This SRS document serves as the foundational blueprint for the development of the "SaaSified and Amplified" event website. All requirements outlined herein are subject to change through formal change request processes and stakeholder approval.*