import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#5B4ED9',
          hover: '#4A3DC8',
          light: '#7C6EE8',
        },
        neutral: {
          10: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-md': ['36px', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-lg': ['24px', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-md': ['18px', { lineHeight: '1.2', fontWeight: '600' }],
        'body-lg': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-md': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['13px', { lineHeight: '1.5', fontWeight: '450' }],
      },
      borderRadius: {
        'button': '6px',
        'card': '12px',
        'badge': '109px',
      },
      boxShadow: {
        'card': '0px 2px 19.7px 0px rgba(0, 0, 0, 0.1)',
        'card-hover': '0px 2px 13.8px 0px rgba(0, 0, 0, 0.13)',
      },
    },
  },
  plugins: [],
}

export default config
