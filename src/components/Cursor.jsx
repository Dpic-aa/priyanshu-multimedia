import React, { useEffect, useState } from 'react'
import './Cursor.css'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if device supports hover (desktop)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    
    if (isTouchDevice) {
      setIsVisible(false)
      return
    }

    setIsVisible(true)

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    window.addEventListener('mousemove', moveCursor)
    
    const interactiveElements = document.querySelectorAll('button, a, .project-card, .service-card, .social-link')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div 
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? 'scale(2)' : 'scale(1)'}`
        }}
      />
      <div 
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? 'scale(0.5)' : 'scale(1)'}`
        }}
      />
    </>
  )
}

export default Cursor