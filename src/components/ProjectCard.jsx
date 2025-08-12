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
      className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/40 dark:to-gray-900/40 rounded-xl  dark:border-gray-600 border border-white/10 hover:shadow-xl hover:scale-[1.01] dark:hover:border-gray-500 overflow-hidden relative group transition-all duration-300 h-[120px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-5 space-y-3"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display text-sm font-semibold text-left pr-4">{project.name}</h3>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-left text-xs leading-relaxed">{project.description}</p>
          </motion.div>
        )}
        
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 p-5 flex items-center justify-center"
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
                    {/* <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 hover:bg-gray-100 dark:hover:bg-gray-500/20 rounded-full transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                    </a> */}
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