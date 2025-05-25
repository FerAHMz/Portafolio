import './About.css'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with expertise in modern web technologies.
              My journey in web development started with a curiosity for creating interactive
              and user-friendly applications.
            </p>
            <p>
              I specialize in building responsive web applications using React.js, Node.js,
              and other cutting-edge technologies. My goal is to create efficient, scalable,
              and maintainable solutions that solve real-world problems.
            </p>
          </div>
          <div className="about-info">
            <div className="info-item">
              <h3>Education</h3>
              <p>Third year in Computer Science</p>
              <p>Universidad del Valle de Guatemala</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Guatemala City, Guatemala</p>
            </div>
            <div className="info-item">
              <h3>Interests</h3>
              <p>Web Development, AI, Cloud Computing</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About