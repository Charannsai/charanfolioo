import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Profile() {
  return (
    <div className="flex flex-row items-start gap-6">
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src="/profile2.png"
        alt="Profile"
        className="w-20 h-20 border border-portfolio-muted/20 rounded-full bg-portfolio-muted/10 object-cover flex-shrink-0 grayscale opacity-90 transition-opacity hover:opacity-100"
      />

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col gap-4 text-left"
      >
        <div className="flex flex-col gap-0.5">
          <h1 className="text-xl font-semibold tracking-wide text-portfolio-text">
            Charan Sai Pathuri
          </h1>
          <h2 className="text-sm text-portfolio-muted font-normal tracking-wide">
            Software Engineer · Systems & Product
          </h2>
        </div>

        <p className="max-w-lg text-sm text-portfolio-text/90 leading-relaxed">
          I build reliable, minimal systems that turn complex ideas into usable, real-world products.
        </p>

        <div className="flex items-center gap-4 text-sm text-portfolio-muted/60">
          <a
            href="https://writes.charanfolio.me"
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
        </div>
      </motion.div>
    </div>
  )
}