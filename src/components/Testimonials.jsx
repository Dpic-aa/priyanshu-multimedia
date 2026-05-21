import React from 'react'
import { motion } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
  {
    text: "One of the most creative designers I've worked with. The 3D work was beyond expectations and delivered on time. Highly recommend!",
    name: "Sarah Johnson",
    role: "Creative Director, Studio X",
    rating: 5,
    avatar: "👩‍🎨"
  },
  {
    text: "The motion graphics transformed our brand identity. Attention to detail and innovative approach stands out from the crowd.",
    name: "Michael Chen",
    role: "Marketing Lead, TechCorp",
    rating: 5,
    avatar: "👨‍💻"
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Client <span className="accent-text">Love</span>
        </motion.h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-avatar">{testimonial.avatar}</div>
              <div className="testimonial-stars">
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials