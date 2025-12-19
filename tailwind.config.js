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
        }
      },
    },
  },
  plugins: [],
}