import { motion } from 'framer-motion'
import { useState } from 'react'
import Connect from './Connect'
import PDFModal from './PdfModal'

export default function Profile() {
  const [isHovered, setIsHovered] = useState(false)
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false)
  const [showBlogPreview, setShowBlogPreview] = useState(false)
  const [hideTimeout, setHideTimeout] = useState(null)

  const handleResumeClick = (openInNewTab) => {
    const resumeUrl = '/Charan_s_Resume.pdf' 
    if (openInNewTab) {
      window.open(resumeUrl, '_blank')
    } else {
      setIsPDFModalOpen(true)
    }
  }

  const handleBlogMouseEnter = () => {
    if (hideTimeout) clearTimeout(hideTimeout)
    setShowBlogPreview(true)
  }

  const handleBlogMouseLeave = () => {
    const timeout = setTimeout(() => setShowBlogPreview(false), 300)
    setHideTimeout(timeout)
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
  src="/profile.jpg"
  className="w-20 h-20 rounded-lg shadow-lg filter transition duration-300 ease-in-out object-cover hover:shadow-xl"
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
          <li>I’m an engineering student passionate about learning and building Tech.</li>
          <li>Committed to continuous learning and staying ahead in emerging technologies.</li>
          <li>I am curious to understand how things work and eager to learn through innovation.</li>
          <li>Currently working on my side projects and dealing with my academics.</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-left"
      >
        <div className="text-gray-600 text-sm dark:text-gray-400">
          Read my latest blogs at{' '}
          <span 
            className="relative inline-block"
            onMouseEnter={handleBlogMouseEnter}
            onMouseLeave={handleBlogMouseLeave}
          >
            <a
              href="https://blogs.charanfolio.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 font-semibold hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              blogs.charanfolio.me
            </a>
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ 
                opacity: showBlogPreview ? 1 : 0, 
                y: showBlogPreview ? 0 : 10,
                scale: showBlogPreview ? 1 : 0.9
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`absolute z-50 top-full left-0 mt-2 w-96 h-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden ${
                showBlogPreview ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
              onMouseEnter={handleBlogMouseEnter}
              onMouseLeave={handleBlogMouseLeave}
            >
              <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Preview</span>
                <button
                  onClick={() => window.open('https://blogs.charanfolio.me', '_blank')}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 p-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="w-full h-full overflow-hidden">
                <iframe
                  src="https://blogs.charanfolio.me"
                  className="border-0"
                  style={{ 
                    width: '1200px', 
                    height: '800px', 
                    transform: 'scale(0.32)', 
                    transformOrigin: 'top left' 
                  }}
                  title="Blog Preview"
                />
              </div>
            </motion.div>
          </span> and{' '}
          <span 
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="text-gray-600 dark:text-gray-400 font-semibold cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
              My Resume.
            </span>
            
            
            {isHovered && (
              <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-40">
                
                <div 
                  className="absolute left-full top-0 w-6 h-full pointer-events-auto"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              </div>
            )}
            
            
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
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[140px]">
    
    
                <div className="absolute left-0 top-2 transform -translate-x-2 w-3 h-3 bg-white dark:bg-[#242424] border border-gray-200 dark:border-gray-700 rotate-45 border-r-0 border-b-0"></div>
                
                <div className="relative bg-white dark:bg-[#242424] rounded-lg py-1">
                  <button
                    onClick={() => handleResumeClick(true)}
                    onMouseDown={(e) => e.preventDefault()}
                    className="w-full px-3 py-2 text-left text-xs text-gray-700 dark:text-gray-300 gap-2 hover:bg-gray-50 dark:hover:bg-[#1d1d1d] transition-colors duration-150 flex items-center border-none outline-none cursor-pointer"
                  >
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Open in new tab</span>
                  </button>
                  
                  <div className="border-t border-gray-100 dark:border-gray-700"></div>
                  
                  <button
                    onClick={() => handleResumeClick(false)}
                    onMouseDown={(e) => e.preventDefault()}
                    className="w-full px-3 py-2 text-left text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1d1d1d] transition-colors duration-150 flex items-center gap-2 border-none outline-none cursor-pointer"
                  >
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Open here</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </span>
        </div>
      </motion.div>


      <PDFModal
        isOpen={isPDFModalOpen}
        onClose={() => setIsPDFModalOpen(false)}
        pdfUrl="/Charan_s_Resume.pdf"
      />
    </div>
  )
}
