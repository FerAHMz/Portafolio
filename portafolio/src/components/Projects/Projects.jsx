import './Projects.css'
import { motion } from 'framer-motion'
import lab6Preview from "../../assets/images/lab6_preview.png";
import calcPreview from "../../assets/images/calc_preview.png";
import turtlePreview from "../../assets/images/turtle_preview.png";
import musicPreview from "../../assets/images/music_preview.jpg";
import rickandmortyPreview from "../../assets/images/rickandmorty_preview.jpeg";
import almondPreview from "../../assets/images/almond_preview.webp";
import laligaPreview from "../../assets/images/laliga_preview.jpg";
import celestialclashPreview from "../../assets/images/celestialclash_preview.avif";

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
      description: 'Draw made it with CSS only',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
      image: turtlePreview,
      github: 'https://github.com/FerAHMz/lab4.git',
      live: 'https://ferahmz.github.io/lab4/'
    },
    {
      title: 'Music Advisor',
      description: 'Music RecommenderThis project implements a music recommendation system using Neo4j as a database manager. Users can register, log in and get song recommendations based on genres and artists.',
      technologies: ['Java', 'Neo4j', 'Maven'],
      image: musicPreview,
      github: 'https://github.com/FerAHMz/Proyecyo-2-AED'
    },
    {
      title: 'Rick and Morty App',
      description: 'Mobile application for android of rick and morty, gives us a list of the characters with their name, species, status and gender of the series consumed from the API of rick and morty and gives us a list of locations with their id, type and dimension information and a profile section.',
      technologies: ['Kotlin'],
      image: rickandmortyPreview,
      github: 'https://github.com/FerAHMz/LabRickAndMorty/tree/Lab-12'
    },
    {
      title: 'Almond classification',
      description: 'Developed a high-precision machine learning system that revolutionizes quality control for almond sorting in commercial bakeries. The solution replaces error-prone manual inspection with automated computer vision classification, ensuring only premium ingredients enter production.',
      technologies: ['C++', 'Python'],
      image: almondPreview,
      github: 'https://github.com/FerAHMz/Proyecto-2-Micro'
    },
    {
      title: 'La Liga Tracker API',
      description: 'La Liga Tracker API es un backend desarrollado en Go que gestiona datos de partidos de fútbol, ofreciendo operaciones CRUD completas y endpoints especializados para actualización en tiempo real de goles, tarjetas y tiempo extra. Implementado con Gin Framework, SQLite y Docker, incluye documentación Swagger, manejo CORS y una colección Postman para pruebas. El proyecto demuestra arquitectura limpia, alto rendimiento (300ms de respuesta) y cumplimiento de buenas prácticas en desarrollo backend.',
      technologies: ['GoLang', 'HTML', 'SQLite', 'Docker', 'Postman', 'Swagger'],
      image: laligaPreview,
      github: 'https://github.com/FerAHMz/lab6'
    },
    {
      title: 'Celestial Clash',
      description: 'Celestial Clash es un videojuego desarrollado en Java utilizando el IDE Greenfoot, que implementa los paradigmas de programación orientada a objetos para crear una simulación espacial interactiva. El jugador controla una nave astronauta que debe esquivar y destruir asteroides mediante un sistema de disparos, gestionando colisiones mediante bounding boxes y un contador de vidas. El proyecto demuestra competencia en diseño de game loops, gestión de sprites, reproducción de efectos sonoros y estados del juego (Game Over).',
      technologies: ['Java', 'GreenFoot'],
      image: celestialclashPreview,
      github: 'https://github.com/FerAHMz/Celestial-Clash'
    },
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
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  )}
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