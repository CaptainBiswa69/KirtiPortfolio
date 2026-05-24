/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0F0E13',
          light: '#16141F',
          elevated: '#1E1C27',
        },
        rose: {
          DEFAULT: '#D4849A',
          glow: '#E8A5B8',
          muted: 'rgba(212, 132, 154, 0.12)',
          hover: 'rgba(212, 132, 154, 0.25)',
        },
        lavender: {
          DEFAULT: '#9B8EC7',
          glow: '#B8ABE0',
          muted: 'rgba(155, 142, 199, 0.12)',
        },
        gold: {
          DEFAULT: '#D4AF87',
        },
        sage: {
          DEFAULT: '#8FBC8F',
        },
        text: {
          primary: '#F5F0EB',
          secondary: '#A8A3B3',
          tertiary: '#6B6577',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Crimson Text"', 'serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'h1': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['24px', { lineHeight: '1.3' }],
        'body-lg': ['20px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'sm': ['14px', { lineHeight: '1.5' }],
        'xs': ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        '2xs': ['10px', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '30': '120px',
      },
      animation: {
        'breathe': 'breathe 8s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.12' },
          '50%': { opacity: '0.18' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
