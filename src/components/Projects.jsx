import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    name: "Rapiduix V 1.0.8",
    description: "UI Component Library for cross-native applications.",
    image: "https://raw.githubusercontent.com/Charannsai/images-haha/refs/heads/main/Screenshot%202025-04-06%20101823.png",
    liveUrl: "https://rapiduix.tech",
    githubUrl: "https://github.com/charannsai/rapiduix",
    knowMoreUrl: "/projects/rapiduix"
  },
  {
    name: "EventOrgX",
    description: "A to Z Event Management System for Organizations.",
    image: "https://placehold.co/600x400",
    liveUrl: "https://charanfolio.site",
    githubUrl: "https://github.com/charannsai/",
    knowMoreUrl: "/projects/project2"
  },
  {
    name: "Repalize",
    description: "Built an AI tool to generate knowledge on a specific repo.",
    image: "https://placehold.co/600x400",
    liveUrl: "https://project3.demo",
    githubUrl: "https://github.com/username/project3",
    knowMoreUrl: "/projects/project3"
  },
  {
    name: "CollaBro",
    description: "Real time collaboration tool for project management with AI supported features.",
    image: "https://placehold.co/600x400",
    liveUrl: "https://collabflow.charanfolio.me/",
    githubUrl: "https://collabflow.charanfolio.me/",
    knowMoreUrl: "/projects/project4"
  }
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 2)

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-display text-lg font-semibold text-left">This is what I've Built</h2>
        {projects.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs mt-3 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  )
}