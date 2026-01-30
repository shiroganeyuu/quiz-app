import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          600: '#7c3aed',
          700: '#6d28d9',
          900: '#4c1d95',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          600: '#0284c7',
          700: '#0369a1',
        },
        accent: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        danger: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'h1': {
              fontSize: '2rem',
              fontWeight: '700',
              lineHeight: '1.2',
            },
            'h2': {
              fontSize: '1.5rem',
              fontWeight: '600',
              lineHeight: '1.3',
            },
            'h3': {
              fontSize: '1.25rem',
              fontWeight: '600',
              lineHeight: '1.4',
            },
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
