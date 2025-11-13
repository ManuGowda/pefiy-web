# Pefiy - AI-Powered Crypto Finance Platform

## Overview

Pefiy is a modern web application designed to transform remittances into strategic crypto investments through AI-powered finance tools. The platform features a marketing landing page with a waitlist signup system, built with a warm, playful aesthetic featuring coral-orange and teal gradients, glassmorphism effects, and smooth animations. The design emphasizes approachability and optimism through 3D illustration-inspired visuals.

The application uses a full-stack TypeScript architecture with React on the frontend and Express on the backend, designed to scale from a landing page to a comprehensive crypto finance platform.

## Recent Changes (January 2025)

**Complete Rebranding to Warm, Playful Aesthetic:**
- Color palette changed from purple-blue to coral-orange (hsl(12, 100%, 65%)) and teal (hsl(175, 50%, 55%))
- Hero image replaced with 3D illustration showing character viewing financial charts and coins
- All gradients updated from `gradient-purple-blue` to `gradient-orange-teal`
- Chart colors updated to green (hsl(115, 45%, 55%)), golden yellow (hsl(40, 95%, 60%)), and teal accents
- Design guidelines updated to reflect warm, friendly branding approach
- All UI components (buttons, icons, success states) now use warm color palette
- Glassmorphism shadows updated to warm teal/orange tints

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management and API calls

**UI Framework:**
- shadcn/ui component library with Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Framer Motion for scroll-triggered animations and page transitions
- Custom design system based on Inter font family with gradient-first visual language

**Design Philosophy:**
The frontend follows a warm, playful 3D illustration aesthetic emphasizing:
- Coral-orange to teal gradient overlays as primary visual anchors
- Glassmorphism aesthetic with frosted glass effects (backdrop-blur-lg, bg-white/10)
- Motion-enhanced experience with fade-up and slide-up animations on viewport entry
- Warm, approachable color palette making finance feel friendly and optimistic
- Mobile-first responsive design with consistent spacing primitives
- Component-based architecture with reusable UI primitives from shadcn/ui

**State Management:**
- React Query for server state with configured defaults (no window refocus, infinite stale time)
- React hooks (useState, useRef, useInView) for local component state
- Custom hooks for responsive behavior (useIsMobile) and toast notifications (useToast)

### Backend Architecture

**Technology Stack:**
- Express.js server with TypeScript for type-safe API development
- ES Modules (type: "module") for modern JavaScript syntax
- Custom middleware for request logging and JSON body parsing with raw body capture

**API Design:**
- RESTful API endpoints under `/api` namespace
- Single waitlist endpoint: `POST /api/waitlist` for email collection
- Centralized error handling with validation using Zod schemas
- HTTP status code conventions (400 for validation, 409 for conflicts, 500 for server errors)

**Development vs Production:**
- Development: Vite dev server integrated as Express middleware for HMR
- Production: Static file serving from compiled dist/public directory
- Replit-specific plugins for runtime error overlays and development tools in non-production environments

**Server Configuration:**
- Request/response logging middleware with path filtering (only /api routes logged)
- JSON response capture for debugging
- Raw body preservation for potential webhook integrations

### Data Storage Solutions

**Current Implementation:**
- In-memory storage (MemStorage class) using JavaScript Maps for development/testing
- Interface-based storage abstraction (IStorage) allowing future database implementations

**Database Schema (Drizzle ORM):**
- PostgreSQL dialect configured via Drizzle Kit
- Two primary tables defined in shared/schema.ts:
  - `users`: id (UUID), username (unique), password (text)
  - `waitlist`: id (UUID), email (unique), createdAt (timestamp)
- Zod integration via drizzle-zod for runtime validation matching database schema
- Migration system configured to output to ./migrations directory

**Future Database Integration:**
- Neon Database serverless PostgreSQL (@neondatabase/serverless package installed)
- Connection pooling via connect-pg-simple for session management
- Environment variable configuration (DATABASE_URL) ready for deployment

**Data Validation:**
- Zod schemas derived from Drizzle table definitions for consistency
- Custom validation rules (e.g., email format validation in insertWaitlistSchema)
- Validation error transformation using zod-validation-error for user-friendly messages

### Authentication and Authorization

**Current State:**
- User schema defined with username/password fields for future authentication
- No active authentication implementation (landing page doesn't require auth)

**Prepared Infrastructure:**
- Session management package installed (connect-pg-simple for PostgreSQL sessions)
- User model with unique username constraint ready for registration flow
- Password field present (future implementation should use bcrypt/argon2 hashing)

**Security Considerations:**
- CORS not explicitly configured (implicitly allows all origins in development)
- Credentials included in fetch requests ("credentials: include")
- No rate limiting on waitlist endpoint (should be added before production)

### External Dependencies

**UI Component Libraries:**
- Radix UI suite (@radix-ui/*) for 20+ accessible headless components
- Lucide React for consistent icon system
- cmdk for command palette functionality
- Embla Carousel for image/content carousels
- Vaul drawer component
- React Day Picker for calendar/date selection

**Data Fetching and Validation:**
- @tanstack/react-query v5 for async state management
- Zod for schema validation and type inference
- React Hook Form with @hookform/resolvers for form state management

**Styling and Animation:**
- Tailwind CSS with PostCSS for processing
- Framer Motion for declarative animations
- class-variance-authority for component variant management
- clsx and tailwind-merge for conditional className composition

**Database and ORM:**
- Drizzle ORM v0.39 with drizzle-zod integration
- @neondatabase/serverless for Postgres connectivity
- drizzle-kit for migration generation and schema management

**Build and Development Tools:**
- TypeScript compiler with strict mode enabled
- esbuild for server-side bundling in production
- tsx for TypeScript execution in development
- Vite with React plugin and Replit-specific development enhancements

**Asset Management:**
- Images stored in attached_assets/ directory
- Hero image: 3D illustration (landing-page_1763053460279.png) featuring character with financial charts
- Vite alias (@assets) for importing static assets
- Path aliases configured: @/ (client/src), @shared/ (shared), @assets/ (attached_assets)

**Third-Party Services:**
- Google Fonts CDN for Inter font family
- No payment processing, analytics, or email services currently integrated