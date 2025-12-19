import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Connect from './components/Connect'
import ThemeToggle from './components/ThemeToggle'


const Section = ({ label, children, className = "" }) => (
  <div className={`flex flex-col md:flex-row md:gap-6 gap-2 py-4 md:py-8 border-t border-portfolio-muted/10 ${className}`}>
    <div className="w-full md:w-32 shrink-0">
      <span className="text-[10px] font-semibold tracking-widest text-portfolio-muted uppercase sticky top-12">
        {label}
      </span>
    </div>
    <div className="w-full">
      {children}
    </div>
  </div>
);

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'system'
  )

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

  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text font-sans selection:bg-portfolio-accent selection:text-portfolio-bg px-4 md:px-8 lg:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* HERO SECTION */}
        <header className="pt-8 md:pt-12 pb-4 flex flex-col items-start gap-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-portfolio-text mb-1">
              Charan Sai Pathuri
            </h1>
            <h2 className="text-sm text-portfolio-muted font-normal mb-3">
              Software Developer
            </h2>
            <p className="max-w-lg text-sm md:text-base text-portfolio-text/90 leading-relaxed font-light">
              I build practical web products with a focus on clarity, reliability, and real-world constraints.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-4 text-xs md:text-sm text-portfolio-muted/60 pt-4 mt-1"
          >
            <a
              href="https://blogs.charanfolio.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-portfolio-text transition-colors"
            >
              Blog <FiArrowUpRight />
            </a>
            <a
              href="/Charan_s_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-portfolio-text transition-colors"
            >
              Resume <FiArrowUpRight />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-3 text-xs md:text-sm text-portfolio-muted w-full max-w-md mt-3"
          >
            <span>Engineering student</span>
            <span className="w-1 h-1 rounded-full bg-portfolio-muted/50"></span>
            <span>Full-stack</span>
            <span className="w-1 h-1 rounded-full bg-portfolio-muted/50"></span>
            <span>Hyderabad</span>
          </motion.div>
        </header>

        <main>
          {/* ABOUT SECTION */}
          <Section label="About">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <p className="text-sm md:text-base text-portfolio-text/80 leading-relaxed font-light">
                I prefer simple architectures that ship fast, scale naturally, and avoid unnecessary complexity.
              </p>
            </motion.div>
          </Section>

          {/* PROJECTS SECTION */}
          <Section label="Selected Work">
            <Projects />
          </Section>

          {/* EXPERIENCE SECTION */}
          <Section label="Experience">
            <Experience />
          </Section>

          {/* FOOTER SECTION */}
          <section className="py-10 border-t border-portfolio-muted/10 mt-4">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
              <div className="flex flex-col gap-2">
                <h3 className="text-base md:text-lg text-portfolio-text font-medium">
                  Open to full-time roles and <br /> meaningful client work.
                </h3>
                <p className="text-portfolio-muted text-xs md:text-sm">
                  Available for select projects
                </p>
                <div className="flex items-center gap-4 mt-1">
                  <Connect />
                </div>
              </div>

              <div className="flex flex-col gap-2 items-start md:items-end text-sm text-portfolio-muted">
                <ThemeToggle theme={theme} setTheme={setTheme} />
                <p className="text-xs opacity-60">Last updated on: April 2025</p>
                <p>© {new Date().getFullYear()} Charan Sai Pathuri</p>
              </div>
            </div>
          </section>
        </main>
      </motion.div>
    </div>
  )
}

export default App