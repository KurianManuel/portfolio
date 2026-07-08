/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#0e0e0e',
          900: '#111111',
          800: '#171717',
          700: '#1f1f1f',
          600: '#2a2a2a',
          500: '#3a3a3a',
          400: '#4a4a4a',
        },
        lime: {
          DEFAULT: '#C8FF34',
          muted: '#8fb320',
          dark: '#5a7210',
          faint: '#1a1f0a',
        },
        slate: {
          primary: '#e8e8e8',
          secondary: '#a0a0a0',
          muted: '#5a5a5a',
          faint: '#2a2a2a',
        }
      },
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up-delay': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.06s forwards',
        'clip-reveal': 'clipReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'cursor-dot': 'cursorDot 0.1s ease-out forwards',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'pulse-slow-delay': 'pulseSlow 4s ease-in-out 2s infinite',
        'pulse-logo': 'pulseLogo 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        clipReveal: {
          '0%': { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0% 0 0 0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.8' },
        },
        pulseLogo: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'snap': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
