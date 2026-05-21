import React from 'react'
import { motion } from 'framer-motion'
import './ToolsProcess.css'

// Import local images
import photoshopIcon from '../assets/Photoshop_logo.png'
import illustratorIcon from '../assets/Illustrator_logo.png'
import afterEffectsIcon from '../assets/AfterEffects_logo.png'
import blenderIcon from '../assets/Blender_logo.png'
import canvaIcon from '../assets/canva-logo-.png'
import PremiereIcon from '../assets/Adobe_Premiere_Pro.png'

const tools = [
  { 
    name: "Photoshop", 
    image: photoshopIcon,
    color: "#31A8FF"
  },
  { 
    name: "Illustrator", 
    image: illustratorIcon,
    color: "#FF9A00"
  },
  { 
    name: "Premiere Pro", 
    image: PremiereIcon,
    color: "#9999FE"
  },
  { 
    name: "After Effects", 
    image: afterEffectsIcon,
    color: "#9999FF"
  },
  { 
    name: "Blender", 
    image: blenderIcon,
    color: "#F5792A"
  },
  { 
    name: "Canva", 
    image: canvaIcon,
    color: "#386EE3"
  }
]

const processSteps = [
  { 
    number: "01", 
    title: "Discover", 
    description: "Research, brainstorming, and concept development",
    details: ["Client consultation", "Market research", "Creative brief"]
  },
  { 
    number: "02", 
    title: "Design", 
    description: "Visual creation and iterative feedback",
    details: ["Wireframes", "Mood boards", "Visual mockups"]
  },
  { 
    number: "03", 
    title: "Develop", 
    description: "Bringing designs to life with technical execution",
    details: ["Poster", "3D modeling", "Logo Branding"]
  },
  { 
    number: "04", 
    title: "Deliver", 
    description: "Final polish and project handoff to Client",
    details: ["Quality assurance", "File delivery", "Client training"]
  }
]

const ToolsProcess = () => {
  return (
    <section className="tools-process-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            Tools & <span className="accent-text">Process</span>
          </h2>
          <p className="section-subtitle">The creative arsenal and workflow I rely on</p>
        </motion.div>

        {/* TWO COLUMN LAYOUT */}
        <div className="two-column-wrapper">
          
          {/* LEFT COLUMN - TOOLS (2 column grid) */}
          <div className="tools-column">
            <div className="tools-grid-center">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="tool-card-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="tool-header-center">
                    <div className="tool-icon-center" style={{ borderColor: tool.color }}>
                      <img src={tool.image} alt={tool.name} className="tool-logo" />
                    </div>
                    <h3 className="tool-name-center">{tool.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - PROCESS */}
          <div className="process-column">
            <h3 className="process-column-title">My Process</h3>
            <div className="journey-track">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="journey-node"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="node-card">
                    <div className="node-header">
                      <div className="node-number-circle">
                        <span>{step.number}</span>
                      </div>
                      <h4 className="node-title-main">{step.title}</h4>
                    </div>
                    <p className="node-desc-main">{step.description}</p>
                    <div className="node-details">
                      {step.details.map((detail, i) => (
                        <span key={i} className="detail-tag">{detail}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </section>
  )
}

export default ToolsProcess