import React from 'react'
import { motion } from 'framer-motion'
import './Services.css'

// Import images from assets folder (same src level)
import brandingIcon from '../assets/branding.png'
import motionIcon from '../assets/motion-graphic.png'
import design3dIcon from '../assets/3d.png'
import visualIcon from '../assets/Visual_Design.png'

const services = [
  {
    title: "Branding",
    description: "Visual identity, logo design, brand guidelines, and strategy development",
    icon: brandingIcon,
    // price: "From $2k"
  },
    {
    title: "3D Design",
    description: "Product visualization, environments, abstract renders, character design",
    icon: design3dIcon,
    // price: "From $4k"
  },
  {
    title: "Visual Design",
    description: "UI/UX, social media graphics, print materials, digital assets",
    icon: visualIcon,
    // price: "From $1.5k"
  },
  {
    title: "Others",
    description: "2D & 3D animation, web design, custom projects, and creative consulting",
    icon: motionIcon,
    // price: "From $3k"
  },
]

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Services
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              {/* <p className="service-price">{service.price}</p> */}
              <button className="service-btn" onClick={() => window.location.href = '#contact'}>
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services