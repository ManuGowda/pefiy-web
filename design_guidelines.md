# Pefiy Design Guidelines - Pass.app Inspired

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Pass.app's modern crypto wallet interface, characterized by vibrant gradients, glassmorphism effects, and smooth animations. The design emphasizes clarity, trust, and technological sophistication.

## Core Design Principles
- **Gradient-First Visual Language**: Purple-to-blue gradients as primary visual anchors
- **Glassmorphism Aesthetic**: Frosted glass effects with subtle blur and transparency
- **Motion-Enhanced Experience**: Smooth scroll-triggered animations throughout
- **Trust Through Clarity**: Clean layouts with generous whitespace
- **Mobile-First Responsiveness**: Seamless adaptation across all devices

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
- **Full viewport height** (min-h-screen) with animated gradient background
- **Centered content** with max-w-4xl headline and subtext
- **Dual CTA buttons**: "Join Waitlist" (primary gradient) + secondary action
- **Hero mockup image**: Large phone/app mockup positioned center or right-aligned, floating with subtle parallax
- **Gradient overlay**: Purple (#8B5CF6) to Blue (#3B82F6) diagonal gradient
- **Entrance animations**: Fade-up on all elements with staggered delays (0.2s, 0.4s, 0.6s)

### Navigation
- **Fixed top nav** with backdrop blur (backdrop-blur-lg bg-white/80)
- **Logo left-aligned**, navigation links center/right
- **Mobile hamburger menu** with slide-in drawer animation
- **Sticky behavior** on scroll with subtle shadow transition

### Feature Sections (4-6 sections recommended)
- **Two-column layouts** alternating image-text placement per section
- **Glassmorphism cards**: bg-white/10 backdrop-blur-md with border border-white/20
- **Icon integration**: Use Heroicons (outline style) at 32x32 or 48x48 size
- **Scroll animations**: Fade-in and slide-up on viewport entry
- **Image placeholders**: Mockup screenshots, abstract illustrations, or gradient shapes

### Waitlist Form
- **Inline email input** with rounded-full styling
- **Gradient submit button** matching hero CTA
- **Success state**: Modal or inline message with checkmark animation
- **Glassmorphism container** with backdrop-blur-xl

### Footer
- **Multi-column layout**: 4 columns on desktop (Company, Product, Resources, Social)
- **Newsletter signup** integrated in footer
- **Social icons**: Heroicons with hover scale transform
- **Bottom bar**: Copyright and legal links

## Glassmorphism Implementation
- **Background**: bg-white/10 or bg-black/5 depending on context
- **Backdrop blur**: backdrop-blur-md to backdrop-blur-xl
- **Borders**: border border-white/20 or border-gray-200/30
- **Shadows**: shadow-lg shadow-purple-500/10 for depth
- **Apply to**: Feature cards, navigation, modals, input fields

## Animation Strategy (Framer Motion)
- **Entrance animations**: Fade-up (y: 20 → 0, opacity: 0 → 1) with 0.6s duration
- **Scroll triggers**: useInView hook for section reveals
- **Hover effects**: Scale 1.02-1.05 on cards, translate-y on buttons
- **Stagger children**: 0.1-0.2s delay between card animations
- **Page transitions**: Smooth fade on route changes
- **Parallax effect**: Subtle transform on hero mockup image (0.3x scroll speed)

## Images
**Critical Image Placements**:
1. **Hero Section**: Large phone/app mockup (800x1600px) showing app interface, floating with drop shadow and subtle glow
2. **Feature Section 1**: Dashboard/analytics mockup (1200x800px)
3. **Feature Section 2**: Transaction/chat interface mockup (1000x1200px)
4. **Feature Section 3**: Security/protection visual (1200x800px)
5. **Feature Section 4**: Rewards/perks interface mockup (1000x1200px)

All images should have rounded corners (rounded-2xl or rounded-3xl) and subtle shadow effects.

## Responsive Breakpoints
- **Mobile**: Base styles, single column layouts
- **Tablet** (md: 768px): Two-column grids, larger typography
- **Desktop** (lg: 1024px): Full multi-column layouts, maximum spacing
- **Large Desktop** (xl: 1280px): Contained max-width with centered content

## Button Specifications
- **Primary CTA**: Gradient background (purple-to-blue), white text, rounded-full, with backdrop-blur on hero overlays
- **Secondary CTA**: Transparent with white border, white text, backdrop-blur-md
- **Hover states**: Built-in scale transform (hover:scale-105) and brightness increase
- **No manual hover styling needed**: Use component's default hover/active states

## Grid Systems
- **Feature grids**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-8
- **Testimonial cards**: grid-cols-1 md:grid-cols-2 with gap-6
- **Footer columns**: grid-cols-2 md:grid-cols-4 with gap-8

This design creates a premium, modern crypto wallet experience with Pass.app's signature gradient aesthetic, glassmorphism depth, and smooth animations throughout.