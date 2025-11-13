# Pefiy - AI-Powered Crypto Finance Platform

## Overview

Pefiy is a modern web application designed to transform remittances into strategic crypto investments through AI-powered finance tools. The platform features a marketing landing page with a waitlist signup system, built with a minimal black and white aesthetic featuring a neon green accent, inspired by Tuyo.com. The design emphasizes professionalism and clarity through high-contrast typography and clean, intentional design.

The application uses a full-stack TypeScript architecture with React on the frontend and Express on the backend, designed to scale from a landing page to a comprehensive crypto finance platform.

## Recent Changes (January 2025)

**Rebranding to Minimal Black & White with Neon Green (Tuyo-Inspired):**
- Complete color palette pivot from coral-orange/teal to monochrome with green accent
- Dark mode primary: Rich charcoal background (hsl(210, 20%, 4%)), white text, neon green (hsl(110, 72%, 56%))
- Light mode alternative: White background, black text, same green accent
- Hero image replaced with monochrome phone mockup showing dark app interface with green highlights
- All gradient classes removed - replaced with solid `bg-primary` (neon green) styling
- Feature cards updated from glassmorphism to matte black/white with subtle borders
- Chart colors converted to grayscale with selective green highlights
- Design guidelines completely rewritten for minimal, high-contrast aesthetic
- Button styling simplified to solid green CTAs with dark text

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
The frontend follows a minimal black & white aesthetic inspired by Tuyo.com, emphasizing:
- Monochrome foundation (black/white/gray) with single neon green accent
- High-contrast typography for maximum readability
- Matte card surfaces with subtle borders instead of glassmorphism
- Motion-enhanced experience with fade-up and slide-up animations on viewport entry
- Dark-first design optimized for professional fintech aesthetic
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
- Hero image: Monochrome phone mockup (Black_white_green_fintech_phone_152b320e.png) showing dark app UI with green accents
- Vite alias (@assets) for importing static assets
- Path aliases configured: @/ (client/src), @shared/ (shared), @assets/ (attached_assets)

**Third-Party Services:**
- Google Fonts CDN for Inter font family
- No payment processing, analytics, or email services currently integrated