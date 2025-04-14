import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

const socialLinks = [
  {
    name: 'Email',
    icon: FiMail,
    url: 'mailto:pathurisai31.com',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://linkedin.com/in/charannsai',
  },
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/charannsai',
  },
  {
    name: 'Twitter',
    icon: FiTwitter,
    url: 'https://twitter.com/saircasticc',
  },
  {
    name: 'Instagram',
    icon: FiInstagram,
    url: 'https://instagram.com/saircasticc',
  },
]

export default function Connect() {
  return (
    <motion.div
      
      className=""
    >
      {/* <h2 className="font-display text-xl font-semibold mb-6 text-left">Connect with me</h2> */}
      <div className="flex gap-6 items-center">
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="w-4 h-4" />
            <span className="sr-only">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}