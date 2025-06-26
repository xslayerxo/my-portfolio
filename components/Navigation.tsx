'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-5 px-15 bg-white/95 backdrop-blur-md shadow-sm' 
        : 'py-8 px-15 bg-white/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div 
          className="font-syne text-2xl font-bold tracking-tight cursor-pointer hover:text-accent transition-colors duration-300"
          onClick={() => scrollToSection('hero')}
        >
          sumit.
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 items-center">
          {['Home', 'About', 'Skills', 'Projects', 'Experience'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-primary font-medium text-sm relative group transition-colors duration-300 hover:text-accent"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-secondary px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              Let&apos;s Talk
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 md:hidden">
            <ul className="flex flex-col py-4">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="w-full text-left px-6 py-3 text-primary font-medium hover:bg-gray-100 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation