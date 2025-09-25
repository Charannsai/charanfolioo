import { useState } from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: "SR3 Excellence",
    role: "Full Stack Developer",
    startDate: "Nov 2024",
    endDate: "Present",
    description: "As a Full Stack Web Developer at SR3, I am responsible for building and launching the official SR3 website. I handled both the front-end and back-end development, ensuring a responsive, user-friendly interface while integrating the required functionalities to meet the organization’s goals. My work focused on creating a clean, fast, and modern web experience that effectively communicates SR3’s mission and services. Still working on it, it is under beta testing phase."
  },
  {
    company: "Edunet Foundation",
    role: "Full Stack Intern",
    startDate: "Feb 2025",
    endDate: "April 2025",
    description: "In my role as a Full Stack Developer at Edunet Foundation(AICTE), I worked on building a real-time collaboration tool for project management. Leveraging my skills in development, I aim to create a seamless and efficient platform to enhance team productivity and communication."
  },
  {
    company: "ICN, Pallavi Engineering College",
    role: "Full Stack Developement Lead",
    startDate: "Jan 2024",
    endDate: "Present",
    description: "In my position as Full Stack Team Lead at Pallavi Engineering College's Infinity Nexus club, I led teams of like-minded individuals to foster creativity and teamwork, resulting in successful project outcomes with actively organizing the events and workshops to build a better full stack community on campus."
  },
  {
    company: "FreeLancer",
    role: "SaaS Developer",
    startDate: "Nov 2023",
    endDate: "Present",
    description: "Built and maintained web applications using modern JavaScript frameworks. Collaborated with various clients to understand their requirements and deliver tailored solutions. Developed RESTful APIs and integrated third-party services to enhance application functionality. Ensured code quality through testing and code reviews, while also optimizing applications for performance and scalability."
  },
  
]

export default function Experience() {
  const [showAll, setShowAll] = useState(false)
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 1)

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-display text-lg font-semibold text-left">Experience</h2>
        {experiences.length > 1 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs text-gray-500 hover:text-gray-600 mt-2 dark:text-gray-400 dark:hover:text-gray-300 transition-colors hover:underline hover:underline-offset-4"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
      <div className="relative">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
        
        <div className="space-y-8">
          {displayedExperiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute left-2 top-2 w-1 h-3 bg-gray-500 rounded-full -translate-x-1/2">
               </div>
              
              <div className="flex flex-row items-center justify-between mb-2">
                <div>
                  <h3 className="text-md font-semibold">{experience.company}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{experience.role}</p>
                </div>
                <p className="text-xs text-gray-500 mb-5 dark:text-gray-400 ml-4">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-xs text-justify">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}