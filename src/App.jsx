import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiInfo } from 'react-icons/fi'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Connect from './components/Connect'
import ThemeToggle from './components/ThemeToggle'
import Writes from './components/Writes'

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'system'
  )
  const [activeTab, setActiveTab] = useState('Projects')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const root = window.document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(mediaQuery.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const tabs = [
    { id: 'About', label: 'About' },
    { id: 'Projects', label: 'Projects' },
    { id: 'Resume', label: 'Experience' },
    { id: 'Writing', label: 'My Writings' },
  ]

  return (
    <div className="min-h-screen  mt-4 bg-portfolio-bg  text-portfolio-text font-sans dark:selection:bg-portfolio-muted/20 dark:selection:text-gray-300 px-6 max-w-2xl mx-auto flex flex-col">
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-grow flex flex-col"
      >
        {/* HERO SECTION */}
        <header className="pt-6 md:pt-8 pb-4">
          <Profile />
        </header>

        <main className="flex-grow flex flex-col">
          {/* TABS NAVIGATION */}
          {/* TABS NAVIGATION */}
          <div className="flex justify-center items-center border dark:border-portfolio-muted/20 gap-1 p-1 mb-8 overflow-x-auto no-scrollbar w-full md:w-auto bg-portfolio-muted/5 rounded-xl md:inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative  flex items-center justify-center px-4 py-1.5 text-xs md:text-sm font-medium transition-colors whitespace-nowrap outline-none rounded-xl z-10 ${activeTab === tab.id
                  ? 'text-portfolio-text'
                  : 'text-portfolio-muted hover:text-portfolio-text/80'
                  }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute border dark:border-portfolio-muted/20 inset-0 bg-portfolio-card shadow-sm rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div>
            <AnimatePresence mode="wait">
              {activeTab === 'About' && (
                <motion.div
                  key="About"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-2xl"
                >
                  <div className="flex flex-col gap-2 text-left">
                    <p className="text-sm text-portfolio-text/80 leading-relaxed font-light">
                      I’m an engineering student and full-stack developer who enjoys turning ideas into usable, real-world products. I’m curious about how systems work end to end and like being involved from problem understanding to final delivery.
                    </p>
                    <p className="text-sm text-portfolio-text/80 leading-relaxed font-light">
                      I prefer simple architectures that ship fast, scale naturally, and avoid unnecessary complexity. I enjoy working close to the product, understanding the problem, designing the system, and shipping iteratively. I care about clarity in code, reliability in systems, and communication in teams.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'Projects' && (
                <motion.div
                  key="Projects"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Projects />
                </motion.div>
              )}

              {activeTab === 'Experience' && (
                <motion.div
                  key="Experience"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Experience />
                </motion.div>
              )}

              {activeTab === 'Writing' && (
                <motion.div
                  key="Writing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Writes />
                </motion.div>
              )}

              {activeTab === 'Resume' && (
                <motion.div
                  key="Resume"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col gap-4">
                    <Experience />
                    {/* <div className="mt-4 pt-4 border-t border-portfolio-muted/10">
                            <a href="/Charan_s_Resume.pdf" target="_blank" className="text-sm text-portfolio-text underline decoration-portfolio-muted/30 underline-offset-4 hover:decoration-portfolio-text transition-all">Download Full Resume</a>
                        </div> */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* FOOTER SECTION */}
          <section className="py-6 border-t border-portfolio-muted/10 mt-12 mb-6">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start text-sm text-portfolio-muted">
              <div className="flex flex-col gap-2">
                <p className="text-portfolio-text font-medium">
                  Available for select projects
                </p>
                <div className="flex flex-wrap gap-x-1 gap-y-1">
                  <a href="mailto:pathurisai31@gmail.com" className="hover:text-portfolio-text transition-colors">Email</a>
                  <span>·</span>
                  <a href="https://github.com/charannsai" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-text transition-colors">GitHub</a>
                  <span>·</span>
                  <a href="https://linkedin.com/in/charannsai" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-text transition-colors">LinkedIn</a>
                  <span>·</span>
                  <a href="https://twitter.com/saircasticc" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-text transition-colors">Twitter</a>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between w-full md:w-auto md:flex-col md:items-end md:gap-2">
                <ThemeToggle theme={theme} setTheme={setTheme} />
                <p className="text-xs opacity-60">Last updated on: November 2025</p>
              </div>
            </div>
          </section>
        </main>
      </motion.div>
    </div>
  )
}

export default App