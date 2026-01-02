import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const projects = [
  {
    name: "Ezent",
    intent: "Event management platform",
    description: "A comprehensive event management platform designed to simplify every step of organizing events. Allows organizers to create, manage, and track events efficiently while providing real-time insights.",
    stack: "React · Node.js/Express · PostgreSQL ",
    liveUrl: "https://www.ezent.me"
  },
  {
    name: "Clowd",
    intent: "Modern resume builder",
    description: "A drag-and-drop resume builder that lets users create professional resumes with customizable templates. Features subdomains for hosting resumes online.",
    stack: "Next.js · Supabase · PostgreSQL",
    liveUrl: "https://www.clowd.me"
  },
  {
    name: "BlogDrop",
    intent: "Social blogging platform",
    description: "A social blogging platform featuring personalized feeds, interactive social elements, and dedicated user subdomains for showcasing content.",
    stack: "Next.js · PostgreSQL · Supabase",
    liveUrl: "https://blogdrop.charanfolio.me"
  },
  {
    name: "Churn Prediction",
    intent: "Customer Churn Prediction",
    description: "Customer Churn Prediction is a end to end web application for organizations that uses machine learning to predict customer churn based on various factors such as customer behavior, demographics, and purchase history.",
    stack: "Flask, Python, Machine Learning",
    liveUrl: "https://github.com/Charannsai/chubb_ai"
  },
  {
    name: "CollabFlow",
    intent: "Collaborative workflow platform",
    description: "Streamlined team communication and project management tool. Enables teams to organize tasks and track progress in real-time.",
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
            className="border-b border-portfolio-muted/10 last:border-none"
          >
            <button
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="w-full text-left py-4 group"
            >
              <div className="flex items-baseline justify-between">
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 gap-1">
                  <h3 className="text-base font-medium text-portfolio-text transition-colors duration-300">
                    {project.name}
                  </h3>
                  <span className="text-sm text-portfolio-muted font-light group-hover:text-portfolio-text/70 transition-colors">
                    {project.intent}
                  </span>
                </div>
                <motion.span
                  animate={{
                    rotate: expanded === index ? 90 : 0,
                  }}
                  className="text-portfolio-muted group-hover:text-portfolio-text transition-colors text-lg opacity-50"
                >
                  <FiArrowUpRight className={expanded === index ? "" : "transform rotate-45"} />
                </motion.span>
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
                  <div className="pb-6 pt-2">
                    <p className="text-portfolio-text/80 text-sm leading-relaxed max-w-xl mb-4 font-light font-sans">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs">
                      <span className="font-mono text-xs text-portfolio-muted/60 tracking-tight">
                        {project.stack}
                      </span>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-portfolio-text hover:text-portfolio-muted transition-colors border-b border-portfolio-muted/20 pb-0.5 hover:border-portfolio-text"
                        >
                          Visit Project <FiArrowUpRight />
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