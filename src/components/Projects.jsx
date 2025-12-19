import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const projects = [
  {
    name: "Ezent",
    intent: "Event management platform",
    description: "A comprehensive event management platform designed to simplify every step of organizing events. Allows organizers to create, manage, and track events efficiently while providing real-time insights.",
    bullets: [
      "Reduced manual effort for organizers",
      "Designed end-to-end workflows",
      "Built for reliability & scale"
    ],
    stack: "React · Node.js · MongoDB · Tailwind",
    liveUrl: "https://www.ezent.me"
  },
  {
    name: "Clowd",
    intent: "Modern resume builder",
    description: "A drag-and-drop resume builder that lets users create professional resumes with customizable templates. Features subdomains for hosting resumes online.",
    bullets: [
      "Drag-and-drop functionality",
      "Customizable templates",
      "Personal subdomain hosting"
    ],
    stack: "React · Firebase · Tailwind",
    liveUrl: "https://www.clowd.me"
  },
  {
    name: "BlogDrop",
    intent: "Social blogging platform",
    description: "A social blogging platform featuring personalized feeds, interactive social elements, and dedicated user subdomains for showcasing content.",
    bullets: [
      "Personalized content feeds",
      "Interactive social features",
      "Community-driven environment"
    ],
    stack: "Next.js · PostgreSQL · Prisma",
    liveUrl: "https://blogdrop.charanfolio.me"
  },
  {
    name: "SysBot",
    intent: "AI Career Studio",
    description: "AI-powered platform guiding users in career planning and skill development. Offers personalized advice, learning resources, and mock interviews.",
    bullets: [
      "AI-driven career advice",
      "Mock interview practice",
      "Skill gap analysis"
    ],
    stack: "React · OpenAI API · Express",
    liveUrl: "https://sysbot.netlify.app"
  },
  {
    name: "CollabFlow",
    intent: "Collaborative workflow platform",
    description: "Streamlined team communication and project management tool. Enables teams to organize tasks, share updates, and track progress in real-time.",
    bullets: [
      "Real-time progress tracking",
      "Team collaboration workflows",
      "Task organization"
    ],
    stack: "React · Socket.io · Redux",
    liveUrl: "https://collabflow.charanfolio.me/"
  }
]

export default function Projects() {
  const [expanded, setExpanded] = useState(0)

  return (
    <section className="w-full">
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="border-b border-portfolio-muted/20 last:border-none"
          >
            <button
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="w-full text-left py-2 group"
            >
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-base md:text-lg font-semibold text-portfolio-text dark:group-hover:text-white transition-colors duration-300">
                    {project.name}
                  </h3>
                  <span className="hidden md:block text-xs md:text-sm text-portfolio-muted font-normal group-hover:text-portfolio-text/80 transition-colors">
                    {project.intent}
                  </span>
                </div>
                <motion.span
                  animate={{
                    rotate: expanded === index ? 90 : 0,
                  }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-portfolio-muted group-hover:text-portfolio-text transition-colors"
                >
                  <FiArrowUpRight className={expanded === index ? "" : "transform rotate-45"} />
                </motion.span>
              </div>
              <div className="md:hidden mt-1">
                <span className="text-xs text-portfolio-muted font-normal">
                  {project.intent}
                </span>
              </div>
            </button>

            <AnimatePresence>
              {expanded === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 pt-1 md:pl-0">
                    <p className="text-portfolio-text/80 text-xs md:text-sm leading-relaxed max-w-2xl mb-3">
                      {project.description}
                    </p>

                    <ul className="space-y-1 mb-3 text-xs md:text-sm text-portfolio-muted">
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-portfolio-accent/60" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm">
                      <span className="font-mono text-xs text-portfolio-muted/60 uppercase tracking-wider">
                        {project.stack}
                      </span>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-portfolio-text hover:text-portfolio-accent transition-colors border-b border-transparent hover:border-portfolio-accent pb-0.5"
                        >
                          Visit Site <FiArrowUpRight />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}