'use client'

import { useEffect, useState } from 'react'

const PageTransition = () => {
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-primary z-50 transition-transform duration-500 ease-in-out ${
        isActive 
          ? 'transform scale-y-100 origin-bottom' 
          : 'transform scale-y-0 origin-top'
      }`}
    />
  )
}

export default PageTransition