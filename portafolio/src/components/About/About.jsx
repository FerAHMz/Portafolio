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
              I'm a passionate Full Stack Developer with expertise in modern web technologies, fueled by the same curiosity that drives my love for video games, music, and Pokémon.
              My journey in web development began with a desire to create interactive, user-friendly applications—whether it's building seamless UIs or optimizing backend logic, I approach coding with the same enthusiasm I bring to gaming and basketball.
            </p>
            <p>
              I specialize in crafting responsive web applications using React.js, Node.js, and other cutting-edge technologies.
              Beyond coding, you’ll find me analyzing NBA stats (go Lakers!), composing playlists for focus sessions, or hunting for rare Pokémon
              My goal? To develop efficient, scalable, and maintainable solutions—just like a well-coordinated basketball play or a perfectly balanced game mechanic.
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
              <h3>Interests & Passions</h3>
              <p>Full-Stack Development • Data Analytics • AI & LLM-Powered Design</p> 
              <p>Basketball (Go Lakers!) • Video Game Design • Pokémon Lore • Music </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About