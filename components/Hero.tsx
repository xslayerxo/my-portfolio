'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = '// PORTFOLIO.2025'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const targetPosition = element.offsetTop - offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-48 pb-20 px-6 relative bg-secondary dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto">
        <div className="relative z-10">
          <motion.p 
            className="font-jetbrains text-sm font-medium text-gray-500 dark:text-gray-400 mb-5 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {displayText}
          </motion.p>
          
          <motion.h1 
            className="font-syne text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight mb-8 text-primary dark:text-white transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Developer<br />
            & <span className="text-accent">Creator</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            SUMIT <span className="text-accent font-jetbrains text-lg md:text-xl lg:text-2xl">[ ./slayer ]</span>
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-500 dark:text-gray-400 mb-15 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Developer | Creator
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mt-15"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-primary dark:bg-white text-secondary dark:text-gray-900 px-10 py-4 text-base font-medium rounded-full transition-all duration-300 hover:bg-accent hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
            >
              Explore Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-transparent text-primary dark:text-white px-10 py-4 text-base font-medium rounded-full border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:border-primary dark:hover:border-white hover:bg-primary dark:hover:bg-white hover:text-secondary dark:hover:text-gray-900"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="flex flex-col items-center">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-5 writing-mode-vertical">
              scroll
            </div>
            <div className="w-px h-20 bg-gray-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-primary animate-scroll-down"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero