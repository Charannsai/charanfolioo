import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  )
}