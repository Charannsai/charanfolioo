import { motion } from 'framer-motion'
import Connect from './Connect'

export default function Profile() {
  return (
    <div className="mb-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-row items-start gap-4 mb-6 "
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQF1OgRm9MVMqg/profile-displayphoto-shrink_200_200/B56ZV1CQfQGsAY-/0/1741425281600?e=1750291200&v=beta&t=-oe1xoPDji9ikp3WC6EfkRp73DR9WQZAeuvLHLOAJsI"
          alt="Profile"
          className="w-20 h-20 rounded-lg shadow-lg"
        />
        <div className="text-left">
          <h4 className="font-display text-2xl  font-bold mb-1">Charan Sai Pathuri</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 ">Hyderabad, India</p>
          <Connect />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-3 mb-2 text-left"
      >
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm dark:text-gray-400">
          <li>I am an Engineering student passionate about AI and Software Development.</li>
          <li>Committed to continuous learning to stay ahead in emerging technologies.</li>
          <li>My Interests lies on various tech and I am involved in learning Networking as well.</li>
          <li>Currently Building my side projects and preparing for CCNA Certification.</li>
          <li>I Aspire to contribute to cutting-edge projects that solve real-world problems through technology.</li>
          
        </ul>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-left"
      >
        <p className="text-gray-600 text-sm dark:text-gray-400">
          Read my latest blogs at{' '}
          <a
            href="https://blogs.charanfolio.me"
            className="text-gray-600 dark:text-gray-400 font-semibold"
          >
            blogs.charanfolio.me
          </a> and <a
            href="#"
            className="text-gray-600 dark:text-gray-400 font-semibold"
          >
            My Resume.
          </a>
        </p>
        
      </motion.div>
    </div>
  )
}