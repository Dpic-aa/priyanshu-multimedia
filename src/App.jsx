import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import ToolsProcess from './components/ToolsProcess'
import Education from './components/Education'
import Experience from './components/Experience'
import Services from './components/Services'
// import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      <Cursor />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="work"><SelectedWork /></section>
      <section id="tools"><ToolsProcess /></section>
      <section id="education"><Education /></section>
      <section id="experience"><Experience /></section>
      <section id="services"><Services /></section>
      {/* <section id="testimonials"><Testimonials /></section> */}
      <Footer />
    </>
  )
}

export default App