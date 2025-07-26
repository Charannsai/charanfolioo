import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PDFModal({ isOpen, onClose, pdfUrl }) {
  const [isMobile, setIsMobile] = useState(false)
  const [pdfError, setPdfError] = useState(false)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())
      const isSmallScreen = window.innerWidth <= 768
      setIsMobile(isMobileDevice || isSmallScreen)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Reset error state when modal opens
  useEffect(() => {
    if (isOpen) {
      setPdfError(false)
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'Charan_s_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, '_blank')
  }

  const handleIframeError = () => {
    setPdfError(true)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`relative w-full h-full ${
            isMobile ? 'max-w-full max-h-full' : 'max-w-7xl max-h-[90vh]'
          } ${isMobile ? 'm-0' : 'mx-4'} bg-white dark:bg-gray-900 ${
            isMobile ? 'rounded-none' : 'rounded-lg'
          } shadow-2xl overflow-hidden`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`flex items-center justify-between ${
            isMobile ? 'p-3' : 'p-4'
          } border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1d1d1d]`}>
            <h3 className={`${
              isMobile ? 'text-base' : 'text-lg'
            } font-semibold text-gray-900 dark:text-white truncate`}>
              Resume Preview
            </h3>
            
            <div className="flex items-center gap-1">
              {(isMobile || pdfError) && (
                <>
                  <button
                    onClick={handleDownload}
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    title="Download PDF"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={handleOpenInNewTab}
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    title="Open in New Tab"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                  
                  <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />
                </>
              )}
              
              <button
                onClick={onClose}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                title="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div 
            className="flex-1 overflow-hidden relative bg-gray-100 dark:bg-[#242424]"
            style={{ height: `calc(100% - ${isMobile ? '57px' : '73px'})` }}
          >
            {(isMobile || pdfError) ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="max-w-md">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {isMobile ? 'PDF Viewer' : 'Cannot Display PDF'}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {isMobile 
                      ? 'PDF viewing is limited on mobile devices. Please use the options below to access the resume.'
                      : 'Your browser cannot display this PDF. Please download or open in a new tab.'
                    }
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleDownload}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-500/25 bg- hover:bg-gray-500/25 text-gray-800 dark:text-white rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download PDF
                    </button>
                    
                    <button
                      onClick={handleOpenInNewTab}
                      className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Open in New Tab
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Desktop PDF Viewer */
              <div className="flex items-center justify-center h-full p-4">
                <iframe
                  src={pdfUrl}
                  className="w-full h-full border-0 rounded shadow-lg bg-white"
                  title="PDF Viewer"
                  onError={handleIframeError}
                  style={{ minHeight: '500px' }}
                />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}