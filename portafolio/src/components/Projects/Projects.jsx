import './Projects.css'
import { motion } from 'framer-motion'
import lab6Preview from "../../assets/images/lab6_preview.png";
import calcPreview from "../../assets/images/calc_preview.png";
import turtlePreview from "../../assets/images/turtle_preview.png";

const Projects = () => {
  const projects = [
    {
      title: 'Pokemon Memory Card',
      description: 'A memory card game built with React where players must click each Pokémon only once without repeating.',
      technologies: ['HTML', 'JavaScript', 'React', 'CSS'],
      image: lab6Preview,
      github: 'https://github.com/FerAHMz/lab6_react.git',
      live: 'https://ferahmz.github.io/lab6_react/'
    },
    {
      title: 'Calculator',
      description: 'A responsive calculator web application built with React, featuring basic arithmetic operations, clean UI design, and keyboard support',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
      image: calcPreview,
      github: 'https://github.com/FerAHMz/Proyecto1_web.git',
      live: 'https://ferahmz.github.io/Proyecto1_web/'
    },
    {
      title: 'Ninjas Turtle only CSS',
      description: '',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
      image: turtlePreview,
      github: 'https://github.com/FerAHMz/lab4.git',
      live: 'https://ferahmz.github.io/lab4/'
    }
  ]

  return (
    <section className="projects" id="projects">
      <motion.div
        className="projects-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects