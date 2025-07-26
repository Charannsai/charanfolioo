import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './components/ThemeToggle'
import Profile from './components/Profile'
// import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'dark'
    }
    return 'light'
  })
  
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${isLoading ? 'blur-load' : 'loaded'}`}
    >
      <div className="absolute top-4 right-4">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <Profile />
        {/* <TechStack /> */}
        <Projects />
        <Experience />
      </div>
    </motion.div>
  )
}

export default App