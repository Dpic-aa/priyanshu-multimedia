import React from 'react'
import { motion } from 'framer-motion'
import './Experience.css'

const experiences = [
  {
    company: "Freelancer",
    period: "2025 – Current",
    role: "Freelance Designer",
    achievements: [
      "Branding Project for a Startup (Logo + Packaging)",
      "Social Media Campaign",
      "Short-form Edits",
      "Create a 3D Model in Blender",
      "Create visual impact in raw video through video editing",
      "Environment Scene Animation In 3D"
    ]
  },
  {
    company: "Deeceeline",
    period: "Feb 2026 – Apr 2026",
    role: "Video Editor",
    location: "Noida Sector 62",
    achievements: [
      "Video editing and post-production",
      "Motion graphics creation",
      "Visual effects and color grading"
    ]
  },
  {
    company: "Jagran New Media",
    period: "Dec 2025 – Feb 2026",
    role: "Graphic Designer",
    location: "Noida",
    achievements: [
      "Created engaging social media graphics",
      "Designed marketing collateral",
      "Collaborated with creative team"
    ]
  },
  
]

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work <span className="accent-text">Experience</span>
        </motion.h2>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="company-period">{exp.period}</span>
                </div>
                <p className="company-role">{exp.role}</p>
                {exp.location && <p className="company-location">{exp.location}</p>}
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience