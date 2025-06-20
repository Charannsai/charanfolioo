import { motion } from 'framer-motion'
import { useState } from 'react'
import Connect from './Connect'
import PDFModal from './PdfModal'

export default function Profile() {
  const [isHovered, setIsHovered] = useState(false)
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false)

  const handleResumeClick = (openInNewTab) => {
    const resumeUrl = '/Charan_s_Resume.pdf' // Replace with your actual resume URL
    if (openInNewTab) {
      window.open(resumeUrl, '_blank')
    } else {
      // Open in modal instead of navigating
      setIsPDFModalOpen(true)
    }
  }

  return (
    <div className="mb-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-row items-start gap-4 mb-6 "
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQFmQoCDtBbnfQ/profile-displayphoto-shrink_200_200/B56Zd0w0mvHQAY-/0/1750010645768?e=1755734400&v=beta&t=PPsIvx_OGttNi7u1sxlwgWuUlGZTOFqD6vbU5vPa9C4"
          className="w-20 h-20 rounded-lg shadow-lg"
        />
        <div className="text-left">
          <h4 className="font-display md:text-2xl text-xl font-bold mb-1">Charan Sai Pathuri</h4>
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
          <li>I’m a Full stack developer by Profession and Engineering student by academics</li>
          <li>Committed to continuous learning and staying ahead in emerging technologies.</li>
          <li>Interested in various tech domains, including Networking.</li>
          <li>Currently working on side projects and preparing for CCNA Certification</li>
          <li>I Aspiring to contribute to impactful, real-world solutions through innovative technology.</li>
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
          </a> and{' '}
          <span 
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="text-gray-600 dark:text-gray-400 font-semibold cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
              My Resume.
            </span>
            
            {/* Hover Card Container with expanded hover area */}
            {isHovered && (
              <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-40">
                {/* Invisible hover bridge */}
                <div 
                  className="absolute left-full top-0 w-6 h-full pointer-events-auto"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              </div>
            )}
            
            {/* Hover Card */}
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.95 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                x: isHovered ? 0 : -10,
                scale: isHovered ? 1 : 0.95
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={`absolute left-full top-0 ml-2 z-50 ${
                isHovered ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[180px]">
                {/* Left Arrow pointing to the text */}
                <div className="absolute left-0 top-3 transform -translate-x-2 w-4 h-4 bg-white dark:bg-[#242424] border border-gray-200 dark:border-gray-700 rotate-45 border-r-0 border-b-0"></div>
                
                <div className="relative bg-white dark:bg-[#242424] rounded-lg py-1">
                  <button
                    onClick={() => handleResumeClick(true)}
                    onMouseDown={(e) => e.preventDefault()}
                    className="w-full px-4 py-3 text-left text-sm text-gray-700 dark:text-gray-300 gap-3 hover:bg-gray-50 dark:hover:bg-[#1d1d1d] transition-colors duration-150 flex items-center border-none outline-none cursor-pointer"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Open in new tab</span>
                  </button>
                  
                  <div className="border-t border-gray-100 dark:border-gray-700"></div>
                  
                  <button
                    onClick={() => handleResumeClick(false)}
                    onMouseDown={(e) => e.preventDefault()}
                    className="w-full px-4 py-3 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1d1d1d] transition-colors duration-150 flex items-center gap-3 border-none outline-none cursor-pointer"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Open here</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </span>
        </p>
      </motion.div>

      {/* PDF Modal */}
      <PDFModal
        isOpen={isPDFModalOpen}
        onClose={() => setIsPDFModalOpen(false)}
        pdfUrl="/Charan_s_Resume.pdf"
      />
    </div>
  )
}