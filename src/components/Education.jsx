import React from 'react'
import { motion } from 'framer-motion'
import './Education.css'

const educationData = [
  {
    degree: "10th Standard",
    institution: "Uttarakhand Board",
    year: "Completed",
    score: "First Division"
  },
  {
    degree: "12th Standard",
    institution: "Uttarakhand Board",
    year: "Completed",
    score: "First Division"
  },
  {
    degree: "3D Motion Graphic Designer",
    institution: "Arena Animation, South Extension",
    year: "Completed",
    specialization: "Motion Graphics & 3D Animation"
  },
  {
    degree: "BA (Pursuing)",
    institution: "Delhi University - SOL",
    year: "Current",
    status: "Ongoing"
  }
]

const Education = () => {
  return (
    <section className="education-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My <span className="accent-text">Education</span>
        </motion.h2>

        <div className="education-grid">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="education-year">{item.year}</div>
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-institution">{item.institution}</p>
              {item.score && <span className="education-badge">{item.score}</span>}
              {item.specialization && <p className="education-specialization">{item.specialization}</p>}
              {item.status && <span className="education-badge current">Currently Pursuing</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education