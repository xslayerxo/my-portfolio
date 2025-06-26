'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'text' | 'drag'>('default')
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  // Use refs for smooth animation without re-renders
  const mousePos = useRef({ x: 0, y: 0 })
  const cursorPos = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })
  const animationId = useRef<number>()

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 'ontouchstart' in window
      setIsMobile(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Smooth animation loop using RAF
  const animate = useCallback(() => {
    if (!cursorRef.current || !followerRef.current || !trailRef.current) return

    // Smooth cursor movement with optimized easing
    const ease = 0.2
    const followerEase = 0.1

    cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * ease
    cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * ease

    followerPos.current.x += (mousePos.current.x - followerPos.current.x) * followerEase
    followerPos.current.y += (mousePos.current.y - followerPos.current.y) * followerEase

    // Apply transforms using translate3d for hardware acceleration with proper centering
    cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%)`
    followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%)`
    trailRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%)`

    animationId.current = requestAnimationFrame(animate)
  }, [])

  // Mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePos.current.x = e.clientX
    mousePos.current.y = e.clientY
    
    if (!isVisible) {
      setIsVisible(true)
    }
  }, [isVisible])

  // Mouse enter/leave handlers for interactive elements
  const handleMouseEnter = useCallback((e: Event) => {
    const target = e.target as HTMLElement
    
    if (target.matches('a, button, [role="button"], input, textarea, select, .project, .skill-tag')) {
      setCursorState('hover')
      // Add subtle magnetic effect for interactive elements
      if (target.matches('button, [role="button"], .project')) {
        target.style.transform = 'scale(1.02)'
        target.style.transition = 'transform 0.2s ease'
      }
    } else if (target.matches('h1, h2, h3, h4, h5, h6, p, span, [contenteditable]')) {
      setCursorState('text')
    }
  }, [])

  const handleMouseLeave = useCallback((e: Event) => {
    const target = e.target as HTMLElement
    setCursorState('default')
    
    // Remove magnetic effect
    if (target.matches('button, [role="button"], .project')) {
      target.style.transform = 'scale(1)'
    }
  }, [])

  const handleMouseDown = useCallback(() => {
    setCursorState('drag')
  }, [])

  const handleMouseUp = useCallback(() => {
    setCursorState('default')
  }, [])

  const handleMouseEnterWindow = useCallback(() => {
    setIsVisible(true)
  }, [])

  const handleMouseLeaveWindow = useCallback(() => {
    setIsVisible(false)
  }, [])

  useEffect(() => {
    if (isMobile) return

    // Start animation loop
    animationId.current = requestAnimationFrame(animate)

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseenter', handleMouseEnterWindow)
    document.addEventListener('mouseleave', handleMouseLeaveWindow)

    // Add hover effects using event delegation
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current)
      }
      
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseenter', handleMouseEnterWindow)
      document.removeEventListener('mouseleave', handleMouseLeaveWindow)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [isMobile, animate, handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp, handleMouseEnterWindow, handleMouseLeaveWindow])

  if (isMobile) return null

  return (
    <div className={`cursor-container ${isVisible ? 'cursor-visible' : 'cursor-hidden'}`}>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className={`cursor-dot ${cursorState}`}
        style={{ willChange: 'transform' }}
      />
      
      {/* Cursor follower ring */}
      <div
        ref={followerRef}
        className={`cursor-follower ${cursorState}`}
        style={{ willChange: 'transform' }}
      />
      
      {/* Cursor trail effect */}
      <div
        ref={trailRef}
        className={`cursor-trail ${cursorState}`}
        style={{ willChange: 'transform' }}
      />

      <style jsx>{`
        .cursor-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          transition: opacity 0.3s ease;
        }

        .cursor-hidden {
          opacity: 0;
        }

        .cursor-visible {
          opacity: 1;
        }

        .cursor-dot {
          position: fixed;
          width: 10px;
          height: 10px;
          background: linear-gradient(135deg, #0066FF, #00CCFF);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10001;
          transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 0 15px rgba(0, 102, 255, 0.4), 0 0 30px rgba(0, 204, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .cursor-follower {
          position: fixed;
          width: 32px;
          height: 32px;
          border: 1.5px solid rgba(0, 102, 255, 0.5);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: rgba(0, 102, 255, 0.1);
        }

        .cursor-trail {
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          background: rgba(0, 102, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Hover state */
        .cursor-dot.hover {
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, #FF6B6B, #FF8E53);
          box-shadow: 0 0 20px rgba(255, 107, 107, 0.6), 0 0 40px rgba(255, 107, 107, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        .cursor-follower.hover {
          width: 48px;
          height: 48px;
          border-color: rgba(255, 107, 107, 0.8);
          background: rgba(255, 107, 107, 0.15);
          box-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
          animation: pulse 2s infinite;
        }

        .cursor-trail.hover {
          width: 36px;
          height: 36px;
          background: rgba(255, 107, 107, 0.25);
        }

        /* Text state */
        .cursor-dot.text {
          width: 2px;
          height: 18px;
          border-radius: 1px;
          background: linear-gradient(180deg, #4ECDC4, #44A08D);
          box-shadow: 0 0 8px rgba(78, 205, 196, 0.4);
          animation: blink 1.5s infinite;
        }

        .cursor-follower.text {
          width: 16px;
          height: 24px;
          border-radius: 8px;
          border-color: rgba(78, 205, 196, 0.3);
          background: rgba(78, 205, 196, 0.08);
        }

        .cursor-trail.text {
          width: 12px;
          height: 20px;
          border-radius: 6px;
          background: rgba(78, 205, 196, 0.2);
        }

        /* Drag state */
        .cursor-dot.drag {
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, #9B59B6, #E74C3C);
          box-shadow: 0 0 25px rgba(155, 89, 182, 0.7), 0 0 50px rgba(231, 76, 60, 0.4);
          border: 2px solid rgba(255, 255, 255, 0.3);
          animation: spin 1s linear infinite;
        }

        .cursor-follower.drag {
          width: 56px;
          height: 56px;
          border-color: rgba(155, 89, 182, 0.8);
          background: rgba(155, 89, 182, 0.2);
          box-shadow: 0 0 30px rgba(155, 89, 182, 0.4);
          animation: pulse 1.5s infinite;
        }

        .cursor-trail.drag {
          width: 40px;
          height: 40px;
          background: rgba(155, 89, 182, 0.3);
        }

        /* Smooth animations */
        @media (prefers-reduced-motion: no-preference) {
          .cursor-dot {
            transition: width 0.2s ease, height 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
          }
          
          .cursor-follower {
            transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          }
          
          .cursor-trail {
            transition: width 0.4s ease, height 0.4s ease, background 0.4s ease;
          }
        }

        /* Animations */
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0.3;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .cursor-dot,
          .cursor-follower,
          .cursor-trail {
            transition: none;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default CustomCursor