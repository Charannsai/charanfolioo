import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './components/ThemeToggle'
import Profile from './components/Profile'
// import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  const [theme, setTheme] = useState('system')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const applyTheme = () => {
      if (theme === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        document.documentElement.classList.toggle('dark', isDark)
      } else {
        document.documentElement.classList.toggle('dark', theme === 'dark')
      }
    }
    
    applyTheme()
    const timer = setTimeout(() => setIsLoading(false), 500)
    
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', applyTheme)
      return () => {
        clearTimeout(timer)
        mediaQuery.removeEventListener('change', applyTheme)
      }
    }
    
    return () => clearTimeout(timer)
  }, [theme])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen overflow-x-hidden ${isLoading ? 'blur-load' : 'loaded'}`}
    >
      <div className="max-w-2xl mx-auto px-6 md:py-28 py-12 overflow-x-hidden">
        <Profile />
        {/* <TechStack /> */}
        <Projects />
        <Experience />
        <div className=' flex items-center justify-center mt-8 text-gray-500 dark:text-gray-400 text-xs'>
          <p>
            Last updated on: <span className="text-gray-500 dark:text-gray-400">April 2025</span>
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </motion.div>
  )
}

export default App