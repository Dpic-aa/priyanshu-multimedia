import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'Work', href: 'work' },
  { name: 'Tools', href: 'tools' },
  { name: 'Education', href: 'education' },
  { name: 'Experience', href: 'experience' },
  { name: 'Services', href: 'services' },
  // { name: 'Contact', href: 'contact' }
]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Get all sections
      const sections = navLinks.map(link => document.getElementById(link.href))
      
      // Find which section is currently in view
      let currentSection = 'home'
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = navLinks[i].href
            break
          }
        }
      }
      
      setActiveLink(currentSection)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll)
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
      setActiveLink(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <motion.div 
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" onClick={(e) => {
            e.preventDefault()
            scrollToSection('home')
          }}>
            <span className="logo-text">PORTFOLIO</span>
            <span className="logo-dot">.</span>
          </a>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.ul 
          className="nav-links"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <a 
                href={`#${link.href}`}
                className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
              >
                {link.name}
                {activeLink === link.href && (
                  <motion.span 
                    className="nav-link-active"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Contact Button */}
        <motion.div 
          className="nav-contact"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button 
            className="nav-contact-btn"
            onClick={() => scrollToSection('contact')}
          >
            Let's Talk
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button 
              className="mobile-contact-btn"
              onClick={() => scrollToSection('contact')}
            >
              Let's Talk
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar