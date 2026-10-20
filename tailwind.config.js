/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Dark Editorial Palette
        obsidian: {
          DEFAULT: '#030303',
          surface: '#080808',
          card: '#111111',
          elevated: '#171717',
        },
        ink: {
          DEFAULT: '#f1eee8',
          secondary: '#dedad4',
          muted: '#aaa9a4',
          subtle: '#787570',
        },
        accent: {
          DEFAULT: '#ff8c59',
          hover: '#ff7738',
          soft: 'rgba(255, 140, 89, 0.12)',
          border: 'rgba(255, 140, 89, 0.3)',
        },
        line: {
          DEFAULT: 'rgba(241, 238, 232, 0.12)',
          subtle: 'rgba(241, 238, 232, 0.07)',
          strong: 'rgba(241, 238, 232, 0.22)',
        },
        // Legacy fallbacks for existing code
        ivory: {
          DEFAULT: '#030303',
          hover: '#080808',
          dark: '#111111',
        },
        primary: {
          DEFAULT: '#f1eee8',
          light: '#dedad4',
        },
        secondary: {
          DEFAULT: '#aaa9a4',
          dark: '#787570',
        },
        border: {
          DEFAULT: 'rgba(241, 238, 232, 0.12)',
          light: 'rgba(241, 238, 232, 0.08)',
          dark: 'rgba(241, 238, 232, 0.2)',
        },
        dark: {
          DEFAULT: '#030303',
          surface: '#080808',
          border: 'rgba(241, 238, 232, 0.12)',
          text: '#f1eee8',
          muted: '#aaa9a4',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        heading: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SFMono-Regular"', 'Consolas', 'monospace'],
      },
      maxWidth: {
        'content': '1280px',
        'container': '1200px',
        'reading': '65ch',
      },
      borderRadius: {
        'none': '0px',
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
      },
      letterSpacing: {
        'editorial': '-0.03em',
        'micro': '0.08em',
        'ultra-wide': '0.14em',
      },
      transitionDuration: {
        'micro': '120ms',
        DEFAULT: '180ms',
        'smooth': '280ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(25, 25, 25, 0.04)',
        'elevated': '0 4px 12px rgba(25, 25, 25, 0.06)',
      },
    },
  },
  plugins: [],
}
