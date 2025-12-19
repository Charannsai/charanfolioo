import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const experiences = [
  {
    company: "SR3 Excellence",
    role: "Full Stack Developer",
    period: "Nov 2024 – Present",
    bullets: [
      "Built and launched the official SR3 website",
      "Owned frontend and backend (React, Node)",
      "Focused on performance and clean UX"
    ]
  },
  {
    company: "Edunet Foundation",
    role: "Full Stack Intern",
    period: "Feb 2025 – April 2025",
    bullets: [
      "Built real-time collaboration tools",
      "Enhanced team productivity workflows",
      "Implemented efficient project management features"
    ]
  },
  {
    company: "ICN, Pallavi Engineering College",
    role: "Full Stack Development Lead",
    period: "Jan 2024 – Present",
    bullets: [
      "Led technical teams for community projects",
      "Organized workshops and fostered full-stack culture",
      "Mentored peers in web development technologies"
    ]
  },
  {
    company: "Freelance",
    role: "SaaS Developer",
    period: "Nov 2023 – Present",
    bullets: [
      "Built custom web apps for clients",
      "Delivered API integrations and performance optimization",
      "Collaborated on requirements to ship tailored solutions"
    ]
  }
]

export default function Experience() {
  const [showAll, setShowAll] = useState(false)
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 1)

  return (
    <div className={`relative ml-2 md:ml-0 ${showAll ? "pb-0" : "pb-12"}`}>
      <div className="border-l border-portfolio-muted/20 space-y-5">
        <AnimatePresence initial={false}>
          {displayedExperiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="relative pl-6 md:pl-8 overflow-hidden"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[1px] top-2 w-[3px] h-6 bg-portfolio-accent/80 rounded-r-sm" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-sm md:text-base font-medium text-portfolio-text">
                  {exp.company}
                </h3>
                <span className="text-xs font-mono text-portfolio-muted uppercase tracking-wider mt-1 sm:mt-0">
                  {exp.period}
                </span>
              </div>

              <div className="text-portfolio-muted font-medium mb-1 text-xs md:text-sm">
                {exp.role}
              </div>

              <ul className="space-y-0.5">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-portfolio-text/70 text-xs md:text-sm leading-normal max-w-xl flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-portfolio-accent/60 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className={`flex justify-center transition-all duration-300 ${!showAll ? "absolute -bottom-2 -left-[1px] w-[calc(100%+1px)] pt-20 pb-2 bg-gradient-to-t from-portfolio-bg via-portfolio-bg/90 to-transparent" : "pt-4 pb-2 mt-5"}`}>
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 text-xs text-portfolio-text/80 hover:text-portfolio-accent transition-colors bg-portfolio-muted/10 px-4 py-1.5 rounded-full hover:bg-portfolio-muted/20 backdrop-blur-sm"
        >
          {showAll ? (
            <>Show Less <FiChevronUp /></>
          ) : (
            <>Show More <FiChevronDown /></>
          )}
        </button>
      </div>
    </div>
  )
}