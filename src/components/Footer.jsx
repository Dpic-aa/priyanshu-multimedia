import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer id="contact" className="footer">  {/* ← ADDED id="contact" */}
      {/* Geometric Shapes Background */}
      <div className="geometric-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>
      
      <div className="accent-line"></div>
      
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="footer-headline">
            Let's build something <span className="accent-text">impactful.</span>
          </h2>
          
          <div className="footer-cta">
            <button 
              className="btn-secondary footer-email-btn"
              onClick={() => window.location.href = 'mailto:priyanshurawat310@gmail.com'}
            >
              Send Mail
            </button>
          </div>

          <div className="footer-social">
            <a href="https://www.behance.net/priyanshurawat16" className="social-link">Behance</a>
            <a href="https://www.instagram.com/rwt_priyans" className="social-link">Instagram</a>
            {/* <a href="#" className="social-link">Twitter/X</a>
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a> */}
          </div>

          <div className="footer-bottom">
            <p>© {currentYear} Portfolio </p>
            <p className="footer-credit">Available for freelance & collaborations</p>
            <button onClick={scrollToTop} className="back-to-top">
              ↑ Back to Top
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer