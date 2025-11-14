/**
 * Pefiy Brand Theme
 * Master theme file derived from Figma branding system
 * Source: pefiy-figma-branding/styles/globals.css
 */

export const theme = {
  // Colors - Primary (from logo spheres)
  colors: {
    primary: {
      // Navy/Blue scale from branding
      '900': '#1e3a8a', // Navy 900 - Primary text, headers
      '800': '#1e40af', // Blue 800 - Interactive elements
      '700': '#1d4ed8', // Blue 700 - Primary buttons
      '600': '#2563eb', // Blue 600 - Links, accents
      '500': '#3b82f6', // Blue 500 - Hover states
      '400': '#60a5fa', // Blue 400 - Secondary accents
      '300': '#93c5fd', // Blue 300 - Disabled states
      '200': '#bfdbfe', // Blue 200 - Backgrounds
      '100': '#dbeafe', // Blue 100 - Light backgrounds
    },
    // Logo gradient colors
    logo: {
      light: '#6B9EFF',   // Sphere Light
      mid: '#5588FF',     // Sphere Mid
      dark: '#3366EE',    // Sphere Dark
      deep: '#0033BB',    // Sphere Deep
    },
    // Neutral colors
    neutral: {
      '900': '#0f172a', // Slate 900 - Body text
      '700': '#334155', // Slate 700 - Secondary text
      '500': '#64748b', // Slate 500 - Muted text
      '300': '#cbd5e1', // Slate 300 - Borders
      '100': '#f1f5f9', // Slate 100 - Subtle backgrounds
      white: '#ffffff', // White - Surfaces
    },
    // Semantic colors
    semantic: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
  },

  // Typography
  typography: {
    fontFamily: {
      sans: 'system-ui, -apple-system, sans-serif',
      serif: 'Georgia, serif',
      mono: 'Menlo, monospace',
    },
    fontSize: {
      display: '56px',    // 3.5rem
      '2xl': '48px',      // 3rem - Heading 1
      xl: '36px',         // 2.25rem - Heading 2
      lg: '28px',         // 1.75rem - Heading 3
      base: '24px',       // 1.5rem - Heading 4
      bodyLg: '18px',     // 1.125rem - Body Large
      body: '16px',       // 1rem - Body
      sm: '14px',         // 0.875rem - Body Small
      xs: '12px',         // 0.75rem - Caption
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.1,   // Display
      snug: 1.2,    // Heading 1
      normal: 1.3,  // Heading 2
      relaxed: 1.4, // Heading 3
      loose: 1.5,   // Heading 4, Caption
      body: 1.6,    // Body, Body Large
    },
  },

  // Spacing (using Tailwind's default scale)
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
  },

  // Border Radius
  borderRadius: {
    sm: '0.1875rem',  // 3px
    md: '0.375rem',   // 6px
    lg: '0.5625rem',  // 9px
    xl: '0.625rem',   // 10px (default radius)
    '2xl': '0.75rem', // 12px
    '3xl': '1rem',    // 16px
    full: '9999px',
  },

  // Shadows
  shadows: {
    '2xs': '0px 1px 2px 0px hsl(240 6% 10% / 0.05)',
    xs: '0px 1px 3px 0px hsl(240 6% 10% / 0.1)',
    sm: '0px 1px 2px 0px hsl(240 6% 10% / 0.05), 0px 1px 3px 0px hsl(240 6% 10% / 0.1)',
    md: '0px 4px 6px -1px hsl(240 6% 10% / 0.1), 0px 2px 4px -2px hsl(240 6% 10% / 0.1)',
    lg: '0px 10px 15px -3px hsl(240 6% 10% / 0.1), 0px 4px 6px -4px hsl(240 6% 10% / 0.1)',
    xl: '0px 20px 25px -5px hsl(240 6% 10% / 0.1), 0px 8px 10px -6px hsl(240 6% 10% / 0.1)',
    '2xl': '0px 25px 50px -12px hsl(240 6% 10% / 0.25)',
  },
} as const;

export type Theme = typeof theme;

