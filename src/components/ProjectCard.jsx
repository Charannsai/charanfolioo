import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiInfo } from 'react-icons/fi'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useState } from 'react'

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 * index }}
      className="bg-white dark:bg-gray-600/10 rounded-lg shadow-lg overflow-hidden p-3 relative group h-[80px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-2"
          >
            <h3 className="font-display text-md font-semibold text-left">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-left text-xs">{project.description}</p>
          </motion.div>
        )}
        
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 bg-white dark:bg-gray-600/10 p-4 flex items-center justify-center"
          >
            <Tooltip.Provider>
              <div className="flex  gap-4">
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 hover:bg-gray-100 dark:hover:bg-gray-500/20 rounded-full transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="bg-gray-900 text-white px-2 py-1 rounded text-xs"
                      sideOffset={5}
                    >
                      Live Demo
                      <Tooltip.Arrow className="fill-gray-900" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>

                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 hover:bg-gray-100 dark:hover:bg-gray-500/20 rounded-full transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                    </a>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="bg-gray-900 text-white px-2 py-1 rounded text-xs"
                      sideOffset={5}
                    >
                      GitHub
                      <Tooltip.Arrow className="fill-gray-900" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>

                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <a
                      href={project.knowMoreUrl}
                      className="p-4 hover:bg-gray-100 dark:hover:bg-gray-500/20 rounded-full transition-colors"
                    >
                      <FiInfo className="w-4 h-4" />
                    </a>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="bg-gray-900 text-white px-2 py-1 rounded text-xs"
                      sideOffset={5}
                    >
                      Know More
                      <Tooltip.Arrow className="fill-gray-900" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </div>
            </Tooltip.Provider>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}