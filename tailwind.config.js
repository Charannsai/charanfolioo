export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      colors: {
        portfolio: {
          bg: 'rgb(var(--portfolio-bg) / <alpha-value>)',
          text: 'rgb(var(--portfolio-text) / <alpha-value>)',
          muted: 'rgb(var(--portfolio-muted) / <alpha-value>)',
          accent: 'rgb(var(--portfolio-accent) / <alpha-value>)',
          card: 'rgb(var(--portfolio-card) / <alpha-value>)',
          border: 'rgb(var(--portfolio-border) / <alpha-value>)',
        }
      },
      animation: {
        marquee: 'marquee 80s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}