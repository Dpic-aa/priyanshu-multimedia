import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './SelectedWork.css'
import brand1 from '../assets/branding/1/Brand1.jpeg'
import brand2 from '../assets/branding/2/Brand2.jpg'
import brand3 from '../assets/branding/3/Brand3.png'

import poster1 from '../assets/poster/HUNK POSTER.jpg'
import poster2 from '../assets/poster/poster.png'
import poster3 from '../assets/poster/projrct pro3.jpg'

import model1 from '../assets/3D AD/1/ADpic.png'
import model2 from '../assets/3D AD/2/ADpic.jpg'
import model3 from '../assets/3d model/1/ADpic.png'

const tabs = [
  {
    id: 1,
    title: "BRANDING",
    number: "01",
    projects: [
      { id: 1, name: "Rituva Fashion", 
        // description: "Brand identity for Indian fashion studio", 
        image: brand1 },
      { id: 2, name: "Aurelia Fashion", // description: "Natural skincare branding", 
        image: brand2 },
      { id: 3, name: "Urban Edge", // description: "Streetwear brand design", 
        image: brand3 },
      // { id: 4, name: "Lumina Tech", description: "Tech brand identity", image: "https://placehold.co/600x400/1a1a1a/8B5CF6?text=Lumina+Tech" },
    ],
    behanceLink: "https://www.behance.net/priyanshurawat16"
  },
  {
    id: 2,
    title: "POSTER",
    number: "02",
    projects: [
      { id: 5, name: "HUNK ", //description: "Abstract motion graphics", 
      image: poster1 },
      { id: 6, name: "TOM TOM", // description: "Kinetic typography", 
        image: poster2 },
      { id: 7, name: "Shubhashray", // description: "Fluid simulations", 
        image: poster3 },
      // { id: 8, name: "Pulse", // description: "Music visualization", 
      //   image: "https://placehold.co/600x400/1a1a1a/8B5CF6?text=Pulse" },
    ],
    behanceLink: "https://www.behance.net/priyanshurawat16"
  },
  {
    id: 3,
    title: "3D",
    number: "03",
    projects: [
      { id: 9, name: "iPhone Ad", //description: "3D environment design", 
      image: model1 },
      { id: 10, name: "Lipstick Ad", //description: "Generative 3D art", 
        image: model2 },
      { id: 11, name: "Telephone", // description: "Surreal 3D composition", 
        image: model3 },
      // { id: 12, name: "Cyberpunk City", // description: "3D cityscape", 
      //   image: "https://placehold.co/600x400/1a1a1a/8B5CF6?text=Cyberpunk+City" },
    ],
    behanceLink: "https://www.behance.net/priyanshurawat16"
  }
]

const SelectedWork = () => {
  const containerRef = useRef(null)
  const [hoveredProject, setHoveredProject] = useState(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // ALL cards start from the SAME sticky position
  const stickyTop = 160 // Consistent sticky position for all cards
  
  // CARD 1 (Branding) - Stays visible, moves up as others come in
  const card1Y = useTransform(scrollYProgress, [0, 0.5], [0, 0])
  const card1Opacity = 1
  
  // CARD 2 (Motion) - Slides up from bottom
  const card2Y = useTransform(scrollYProgress, [0.2, 0.5], [200, 0])
  const card2Opacity = 1
  
  // CARD 3 (3D) - Slides up from bottom
  const card3Y = useTransform(scrollYProgress, [0.5, 0.8], [200, 0])
  const card3Opacity = 1

  // Content visibility
  const card1ContentOpacity = 1
  const card2ContentOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const card3ContentOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1])

  return (
    <section className="selected-work-section" ref={containerRef}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ position: 'sticky',
              top: `${80}px`,
              // bottom: `${200}px`, 
              zIndex: 0 }}
        >
          Selected <span className="accent-text">Work</span>
        </motion.h2>
        
        <div className="scroll-stack-wrapper">
          {/* CARD 1 - BRANDING */}
          <motion.div
            className="scroll-stack-card card-branding"
            style={{
              y: card1Y,
              opacity: card1Opacity,
              position: 'sticky',
              top: `${stickyTop}px`,
              zIndex: 1
            }}
            transition={{ duration: 0.1 }}
          >
            <div className="scroll-stack-header">
              <div className="header-number">{tabs[0].number}</div>
              <div className="header-title">{tabs[0].title}</div>
            </div>

            <motion.div 
              className="scroll-stack-content"
              style={{
                opacity: card1ContentOpacity
              }}
            >
              <div className="projects-stack-wrapper">
                <div className="projects-scroll-grid">
                  {tabs[0].projects.map((project) => (
                    <motion.div
                      key={project.id}
                      className="project-scroll-card"
                      whileHover={{ y: -8 }}
                      onHoverStart={() => setHoveredProject(project.id)}
                      onHoverEnd={() => setHoveredProject(null)}
                    >
                      <div className="project-scroll-image-wrapper">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="project-scroll-image"
                          style={{
                            transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
                          }}
                        />
                        {/* {hoveredProject === project.id && (
                          <div className="project-scroll-overlay">
                            <span>View Project →</span>
                          </div>
                        )} */}
                      </div>
                      <div className="project-scroll-info">
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="scroll-button-container">
                  <a 
                    href={tabs[0].behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scroll-explore-btn"
                  >
                    Explore More on Behance →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 2 - MOTION */}
          <motion.div
            className="scroll-stack-card card-motion"
            style={{
              y: card2Y,
              opacity: card2Opacity,
              position: 'sticky',
              top: `${stickyTop}px`,
              zIndex: 2
            }}
            transition={{ duration: 0.1 }}
          >
            <div className="scroll-stack-header">
              <div className="header-number">{tabs[1].number}</div>
              <div className="header-title">{tabs[1].title}</div>
            </div>

            <motion.div 
              className="scroll-stack-content"
              style={{
                opacity: card2ContentOpacity
              }}
            >
              <div className="projects-stack-wrapper">
                <div className="projects-scroll-grid">
                  {tabs[1].projects.map((project) => (
                    <motion.div
                      key={project.id}
                      className="project-scroll-card"
                      whileHover={{ y: -8 }}
                      onHoverStart={() => setHoveredProject(project.id)}
                      onHoverEnd={() => setHoveredProject(null)}
                    >
                      <div className="project-scroll-image-wrapper">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="project-scroll-image"
                          style={{
                            transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
                          }}
                        />
                        {/* {hoveredProject === project.id && (
                          <div className="project-scroll-overlay">
                            <span>View Project →</span>
                          </div>
                        )} */}
                      </div>
                      <div className="project-scroll-info">
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="scroll-button-container">
                  <a 
                    href={tabs[1].behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scroll-explore-btn"
                  >
                    Explore More on Behance →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 3 - 3D */}
          <motion.div
            className="scroll-stack-card card-3d"
            style={{
              y: card3Y,
              opacity: card3Opacity,
              position: 'sticky',
              top: `${stickyTop}px`,
              zIndex: 3
            }}
            transition={{ duration: 0.1 }}
          >
            <div className="scroll-stack-header">
              <div className="header-number">{tabs[2].number}</div>
              <div className="header-title">{tabs[2].title}</div>
            </div>

            <motion.div 
              className="scroll-stack-content"
              style={{
                opacity: card3ContentOpacity
              }}
            >
              <div className="projects-stack-wrapper">
                <div className="projects-scroll-grid">
                  {tabs[2].projects.map((project) => (
                    <motion.div
                      key={project.id}
                      className="project-scroll-card"
                      whileHover={{ y: -8 }}
                      onHoverStart={() => setHoveredProject(project.id)}
                      onHoverEnd={() => setHoveredProject(null)}
                    >
                      <div className="project-scroll-image-wrapper">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="project-scroll-image"
                          style={{
                            transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
                          }}
                        />
                        {/* {hoveredProject === project.id && (
                          <div className="project-scroll-overlay">
                            <span>View Project →</span>
                          </div>
                        )} */}
                      </div>
                      <div className="project-scroll-info">
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="scroll-button-container">
                  <a 
                    href={tabs[2].behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scroll-explore-btn"
                  >
                    Explore More on Behance →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SelectedWork