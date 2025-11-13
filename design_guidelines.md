# Pefiy Design Guidelines - Minimal Black & White with Neon Green

## Design Approach
**Minimal, High-Impact Branding**: Inspired by Tuyo.com, featuring a sophisticated black and white color palette with strategic neon green accents. The design emphasizes clarity, focus, and professionalism through high contrast, minimal color usage, and clean typography.

## Core Design Principles
- **Monochrome Foundation**: Rich blacks and pure whites as primary canvas
- **Strategic Color Accent**: Single neon green color for CTAs, success states, and key interactions
- **High Contrast Typography**: Bold headlines with excellent readability
- **Minimal Visual Noise**: Clean layouts with intentional whitespace
- **Dark-First Design**: Optimized for dark mode with elegant light mode alternative
- **Mobile-First Responsiveness**: Seamless adaptation across all devices

## Color Palette

### Dark Mode (Primary)
- **Background**: hsl(210, 20%, 4%) - Rich charcoal, nearly black
- **Foreground**: hsl(0, 0%, 98%) - Soft white for text
- **Card**: hsl(0, 0%, 8%) - Matte black cards
- **Primary (Neon Green)**: hsl(110, 72%, 56%) - CTAs, accents, success
- **Muted Text**: hsl(0, 0%, 64%) - Secondary information
- **Borders**: hsl(0, 0%, 16%) - Subtle separation

### Light Mode (Alternative)
- **Background**: hsl(0, 0%, 100%) - Pure white
- **Foreground**: hsl(0, 0%, 9%) - Deep black for text
- **Card**: hsl(0, 0%, 98%) - Subtle gray cards
- **Primary (Neon Green)**: hsl(110, 72%, 56%) - CTAs, accents, success
- **Muted Text**: hsl(0, 0%, 46%) - Secondary information
- **Borders**: hsl(0, 0%, 90%) - Subtle separation

### Chart Colors (Grayscale + Green)
- **Chart 1**: hsl(0, 0%, 40%) - Dark gray
- **Chart 2**: hsl(0, 0%, 60%) - Medium gray
- **Chart 3**: hsl(0, 0%, 80%) - Light gray
- **Chart 4**: hsl(110, 72%, 56%) - Neon green (highlight)
- **Chart 5**: hsl(0, 0%, 70%) - Mid gray

## Typography System
**Font Family**: Inter (via Google Fonts CDN)
- **Hero Headline**: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- **Section Headlines**: text-3xl md:text-4xl lg:text-5xl, font-bold
- **Subheadlines**: text-xl md:text-2xl, font-semibold
- **Body Text**: text-base md:text-lg, font-normal, leading-relaxed
- **Feature Cards**: text-lg md:text-xl for titles, text-base for descriptions
- **CTAs**: text-base md:text-lg, font-semibold

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- **Section Padding**: py-16 md:py-24 lg:py-32 for major sections
- **Container Width**: max-w-7xl for content containers
- **Card Spacing**: gap-6 md:gap-8 for grids, space-y-4 for stacks
- **Button Spacing**: px-8 py-4 for primary CTAs, px-6 py-3 for secondary

## Component Library

### Hero Section
- **Full viewport height** (min-h-screen) with dark background
- **Centered content** with max-w-4xl headline and subtext
- **Primary CTA button**: "Join Waitlist" with neon green background
- **Hero mockup**: Modern phone showing app interface with black theme and green accents
- **Subtle glow**: Minimal green radial blur effect (5% opacity, optional)
- **Entrance animations**: Fade-up on all elements with staggered delays (0.2s, 0.4s, 0.6s)

### Navigation
- **Fixed top nav** with backdrop blur (backdrop-blur-lg bg-white/80)
- **Logo left-aligned**, navigation links center/right
- **Mobile hamburger menu** with slide-in drawer animation
- **Sticky behavior** on scroll with subtle shadow transition

### Feature Sections
- **Single row of 4 cards** displaying key features in compact format
- **Matte cards**: Solid bg-card backgrounds with border-border for separation
- **Icon integration**: Lucide icons in neon green containers at 20x20 size
- **Scroll animations**: Fade-in and slide-up on viewport entry
- **Image placeholders**: Mockup screenshots, minimalist icons, or solid shapes

### Waitlist Form
- **Inline email input** with standard rounded styling
- **Solid green submit button** with high contrast dark text
- **Success state**: Inline message with checkmark icon in green circle
- **Matte card container** with solid bg-card and subtle border

### Footer
- **Multi-column layout**: 4 columns on desktop (Company, Product, Resources, Social)
- **Newsletter signup** integrated in footer
- **Social icons**: Heroicons with hover scale transform
- **Bottom bar**: Copyright and legal links

## Card & Surface Treatment
- **Feature cards**: Solid matte black (dark mode) or white (light mode) backgrounds
- **Borders**: Subtle 1px borders in matching theme color
- **Shadows**: Minimal or none - rely on borders for separation
- **No glassmorphism**: Clean, flat surfaces with clear boundaries
- **Apply to**: Feature cards, navigation, modals, input fields

## Animation Strategy (Framer Motion)
- **Entrance animations**: Fade-up (y: 20 → 0, opacity: 0 → 1) with 0.6s duration
- **Scroll triggers**: useInView hook for section reveals
- **Hover effects**: Scale 1.02-1.05 on cards, translate-y on buttons
- **Stagger children**: 0.1-0.2s delay between card animations
- **Page transitions**: Smooth fade on route changes
- **Parallax effect**: Subtle transform on hero mockup image (0.3x scroll speed)

## Images
**Hero Section**:
- **Phone Mockup**: Modern smartphone (3:4 aspect ratio) showing app interface
- **Screen Content**: Dark theme with black background, white text, green accents
- **Style**: Realistic 3D render with subtle shadows, clean product photography aesthetic
- **Presentation**: Floating on dark background with minimal green glow

**Feature Cards**:
- Use simple icons with neon green backgrounds
- Icons rendered in dark color (nearly black) for maximum contrast
- Keep visuals minimal and focused on clarity

All images maintain high contrast and avoid unnecessary color to preserve the monochrome aesthetic.

## Responsive Breakpoints
- **Mobile**: Base styles, single column layouts
- **Tablet** (md: 768px): Two-column grids, larger typography
- **Desktop** (lg: 1024px): Full multi-column layouts, maximum spacing
- **Large Desktop** (xl: 1280px): Contained max-width with centered content

## Button Specifications
- **Primary CTA**: Neon green background (hsl(110, 72%, 56%)), dark text, high contrast
- **Secondary CTA**: Black or white with subtle borders
- **Hover states**: Built-in elevation and brightness adjustments
- **No manual hover styling needed**: Use component's default hover/active states
- **Focus**: Green ring for keyboard navigation

## Grid Systems
- **Feature grids**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-8
- **Testimonial cards**: grid-cols-1 md:grid-cols-2 with gap-6
- **Footer columns**: grid-cols-2 md:grid-cols-4 with gap-8

This design creates a sophisticated, minimal crypto finance experience with a monochrome foundation and strategic neon green accents. The high-contrast, clean aesthetic emphasizes professionalism and clarity while maintaining visual interest through bold typography and intentional color usage.