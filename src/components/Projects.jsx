import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    name: "Ezent",
    description: "Ezent is a comprehensive event management platform designed to simplify every step of organizing events. It allows organizers to create, manage, and track events efficiently, while providing real-time insights and seamless attendee engagement. Checkout the platform to know more features and services provided by ezent.",
    liveUrl: "https://www.ezent.me"
  },
  {
    name: "Clowd",
    description: "Clowd is a modern resume builder that lets users create professional resumes with drag-and-drop functionality and customizable templates. Users can easily download their resumes or host them on a personal subdomain. The platform simplifies resume creation while providing a sleek, user-friendly experience.",
    liveUrl: "https://www.clowd.me"
  },
  {
    name: "BlogDrop",
    description: "BlogDrop is a social blogging platform that lets users share, discover, and engage with content effortlessly. It features personalized feeds, interactive social elements like likes and comments, and dedicated user subdomains for showcasing blogs. The platform connects writers and readers in a dynamic, community-driven environment.",
    liveUrl: "https://blogdrop.charanfolio.me"
  }, {
    name: "SysBot - AI Career Studio",
    description: "SysBot – AI Career Studio is an AI-powered platform that guides users in career planning and skill development. It offers personalized career advice, learning resources, and mock interview features to practice and improve performance. Users can explore opportunities, enhance skills, and prepare confidently for interviews",
    liveUrl: "https://sysbot.netlify.app"
  },
  {
    name: "CollabFlow (Under Development)",
    description: "CollabFlow is a collaborative workflow platform designed to streamline team communication and project management. It enables teams to organize tasks, share updates, and track progress in real-time. The platform enhances productivity by simplifying collaboration and keeping everyone aligned.",
    liveUrl: "https://collabflow.charanfolio.me/"
  }
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [previewProject, setPreviewProject] = useState(null)
  const [hideTimeout, setHideTimeout] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 2)

  const handleProjectMouseEnter = (project) => {
    if (hideTimeout) clearTimeout(hideTimeout)
    setPreviewProject(project)
  }

  const handleProjectMouseLeave = () => {
    const timeout = setTimeout(() => setPreviewProject(null), 300)
    setHideTimeout(timeout)
  }

  const handleOpenProject = (url) => {
    setIsAnimating(true)
    setTimeout(() => {
      window.open(url, '_blank')
      setIsAnimating(false)
      setPreviewProject(null)
    }, 600)
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-display text-lg font-semibold text-left">Project That I've Built</h2>
        {projects.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs mt-3 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 transition-colors hover:underline hover:underline-offset-4"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
      <div className="space-y-3 ">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
            className="flex items-start justify-between group "
          >
            <div className="flex-1 relative">
              <span 
                className="relative inline-block"
                onMouseEnter={() => handleProjectMouseEnter(project)}
                onMouseLeave={handleProjectMouseLeave}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center gap-2"
                >
                  {project.name}
                  <FiExternalLink size={12} />
                </a>
                
                {previewProject?.name === project.name && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.9 }}
                    animate={{ 
                      opacity: previewProject ? 1 : 0, 
                      x: previewProject ? 0 : 10,
                      scale: previewProject ? 1 : 0.9
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute z-50 top-0 right-full mr-4 w-96 h-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden pointer-events-auto"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isAnimating ? 'perspective(1000px) rotateY(-90deg) scale(1.2)' : 'none',
                      transition: isAnimating ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
                    }}
                    onMouseEnter={() => handleProjectMouseEnter(project)}
                    onMouseLeave={handleProjectMouseLeave}
                  >
                    <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Preview</span>
                      <button
                        onClick={() => handleOpenProject(project.liveUrl)}
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 p-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </button>
                    </div>
                    <div className="w-full h-full overflow-hidden relative">
                      <div className="absolute inset-0 p-4 bg-white dark:bg-gray-900">
                        <div className="animate-pulse space-y-4">
                          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                          <div className="grid grid-cols-2 gap-3 mt-4">
                            <div className="h-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
                            <div className="h-20 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
                          </div>
                          <div className="h-16 bg-gray-300 dark:bg-gray-600 rounded mt-4"></div>
                        </div>
                      </div>
                      <iframe
                        src={project.liveUrl}
                        className="border-0 relative z-10"
                        style={{ 
                          width: '1200px', 
                          height: '800px', 
                          transform: 'scale(0.32)', 
                          transformOrigin: 'top left' 
                        }}
                        title={`${project.name} Preview`}
                        onLoad={(e) => e.target.previousElementSibling.style.display = 'none'}
                      />
                    </div>
                  </motion.div>
                )}
              </span>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 text-justify">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}