import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'
import image from '../assets/mainbg.png'

// SVG Star Icon Component
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25,0 L30,20 L50,25 L30,30 L25,50 L20,30 L0,25 L20,20 Z" fill="#8B5CF6"/>
  </svg>
)

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('')
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const imageRef = useRef(null)
  const fullName = 'Priyanshu Rawat'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedName(fullName.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)
    
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleMouseMove = (e) => {
    if (!imageRef.current) return
    
    const rect = imageRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate mouse position relative to center (-1 to 1 range)
    let mouseX = (e.clientX - centerX) / (rect.width / 2)
    let mouseY = (e.clientY - centerY) / (rect.height / 2)
    
    // Limit the range to -1 to 1
    mouseX = Math.min(Math.max(mouseX, -1), 1)
    mouseY = Math.min(Math.max(mouseY, -1), 1)
    
    // Max rotation degrees
    const maxRotate = 15
    
    // Set rotation values - image follows cursor direction
    setRotateY(mouseX * maxRotate)  // Rotate left/right
    setRotateX(-mouseY * maxRotate) // Rotate up/down
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  const marqueeWords = ['CRAFTING VISUALS', 'BUILDING WORLDS', 'DESIGN', 'INNOVATE', 'VISUALIZE', 'CREATE']

  return (
    <>
      <section className="hero-section">
        {/* Interactive 3D Image */}
        <div 
          className="hero-bg-image"
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => scrollToSection('work')}
        >
          <motion.img 
            src={image} 
            alt="Background decoration"
            draggable="false"
            animate={{
              rotateX: rotateX,
              rotateY: rotateY,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              mass: 0.6
            }}
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform"
            }}
          />
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>
                Hi,<br /> I'm <span className="accent-text typed-name">
                  {displayedName}
                  <span className="cursor-blink">|</span>
                </span>
              </h1>
              <p className="hero-description">
                Creative Designer specializing in <br />
                Motion Graphics & 3D Visualization
              </p>
              <div className="btn-group">
                <button 
                  className="btn-primary"
                  onClick={() => scrollToSection('work')}
                >
                  View Work →
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="marquee-section">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <div className="marquee-content">
              {marqueeWords.map((word, index) => (
                <React.Fragment key={`set1-${index}`}>
                  <span className="marquee-text">{word}</span>
                  <span className="marquee-icon"><StarIcon /></span>
                </React.Fragment>
              ))}
            </div>
            <div className="marquee-content">
              {marqueeWords.map((word, index) => (
                <React.Fragment key={`set2-${index}`}>
                  <span className="marquee-text">{word}</span>
                  <span className="marquee-icon"><StarIcon /></span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero