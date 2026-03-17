/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['Syne Mono', 'monospace'],
        body: ['Cabinet Grotesk', 'sans-serif'],
      },
      colors: {
        bg: '#060606',
        fg: '#f0ede8',
        muted: 'rgba(240,237,232,0.35)',
        dim: 'rgba(240,237,232,0.10)',
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.04em',
        tight: '-0.03em',
      },
    },
  },
  plugins: [],
}

