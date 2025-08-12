import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi'

export default function ThemeToggle({ theme, setTheme }) {
  const cycleTheme = () => {
    if (theme === 'system') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('system')
    }
  }

  const getIcon = () => {
    switch (theme) {
      case 'light': return <FiSun size={14} />
      case 'dark': return <FiMoon size={14} />
      default: return <FiMonitor size={14} />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case 'light': return 'Light'
      case 'dark': return 'Dark'
      default: return 'System'
    }
  }

  return (
    <button
      onClick={cycleTheme}
      className="flex items-center gap-2 px-3 py-2 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors cursor-pointer"
    >
      {getIcon()}
      <span>{getLabel()}</span>
    </button>
  )
}