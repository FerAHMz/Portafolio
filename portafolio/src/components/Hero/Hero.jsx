import './Hero.css'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hi, I'm <span className="highlight">Fernando Hernández</span></h1>
        <h2>Computer Science Engineering Student</h2>
        <p>
        Passionate about web development and data analysis, with a constant commitment to learning and technological advancement. I enjoy transforming data into valuable insights and creating innovative digital solutions, while staying current with the latest industry trends and best practices.
        </p>
        
        <div className="hero-buttons">
          <motion.a 
            href="#projects" 
            className="primary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a 
            href="#contact" 
            className="secondary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero