import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium deep greens per design intent
        primary: '#0F3D2E',
        'primary-dark': '#0A2818',
        'primary-light': '#16A34A',
        'primary-accent': '#22C55E',
        // Neutrals
        'neutral-50': '#F9FAFB',
        'neutral-100': '#F3F4F6',
        'neutral-200': '#E5E7EB',
        'neutral-300': '#D1D5DB',
        'neutral-700': '#374151',
        'neutral-900': '#111827',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        // Large, dominant headings per design intent
        'hero-xl': ['90px', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-lg': ['72px', { lineHeight: '1.2', fontWeight: '700' }],
        'hero-md': ['60px', { lineHeight: '1.2', fontWeight: '700' }],
        'section-xl': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'section-lg': ['40px', { lineHeight: '1.3', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
}

export default config
