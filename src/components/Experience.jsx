import { motion } from 'framer-motion'

const experiences = [
  {
    company: "Evangelion Solutions",
    role: "Web Developer",
    period: "Aug 2025 – Oct 2025",
    bullets: [
      "Developed an AI-powered SaaS product and successfully pushed it to beta release.",
      "Maintaining and enhancing the platform post-launch to ensure performance, scalability, and seamless user experience.",
      "Worked closely with cross-functional teams to implement iterative improvements based on stakeholder and beta user feedback."
    ]
  },
  {
    company: "Infinity Code Nexus",
    role: "Software Developer",
    period: "Feb 2024 – Present",
    bullets: [
      "Developed a end to end user and admin management system for ICN.",
      "Maintaining and enhancing the platform to ensure performance, scalability, and seamless user experience.",
      "Leading the development team, coordinating tasks, reviewing code, and ensuring timely delivery of features."
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
  return (
    <div className="relative ml-2 md:ml-0 pb-0">
      <div className="border-l border-portfolio-muted/20 space-y-6">
        {experiences.map((exp) => (
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

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-0.5">
              <h3 className="text-sm font-medium text-portfolio-text">
                {exp.company}
              </h3>
              <span className="text-xs font-mono text-portfolio-muted uppercase tracking-wider mt-0.5 sm:mt-0">
                {exp.period}
              </span>
            </div>

            <div className="text-portfolio-muted font-medium mb-1 text-sm">
              {exp.role}
            </div>

            <ul className="space-y-0.5">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="text-portfolio-text/70 text-sm leading-normal max-w-xl flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-portfolio-accent/60 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}