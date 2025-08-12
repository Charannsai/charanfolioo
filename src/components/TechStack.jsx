import { motion } from 'framer-motion'

const techStack = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
]

export default function TechStack() {
  const duplicatedStack = [...techStack, ...techStack]

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mb-6"
    >
      <h2 className="font-display text-lg font-semibold mb-4 text-left">Tech Stack</h2>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 py-2 md:flex-wrap"
          animate={{
            x: window.innerWidth < 768 ? [0, -techStack.length * 48] : 0
          }}
          transition={{
            x: {
              repeat: window.innerWidth < 768 ? Infinity : 0,
              repeatType: "loop",
              duration: 15,
              ease: "linear"
            }
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <img
              key={`${tech.name}-${index}`}
              src={tech.icon}
              alt={tech.name}
              title={tech.name}
              className="w-6 h-6 flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}