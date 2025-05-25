import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiCplusplus, SiC, SiKotlin, SiPostgresql, SiVuedotjs, SiVite, SiGo } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, icon: <FaHtml5 /> },
    { name: 'CSS', level: 80, icon: <FaCss3Alt /> },
    { name: 'JavaScript', level: 85, icon: <FaJs /> },
    { name: 'React', level: 80, icon: <FaReact /> },
    { name: 'Node.js', level: 75, icon: <FaNodeJs /> },
    { name: 'Python', level: 90, icon: <FaPython /> },
    { name: 'Java', level: 65, icon: <FaJava /> },
    { name: 'C++', level: 50, icon: <SiCplusplus /> },
    { name: 'C', level: 40, icon: <SiC /> },
    { name: 'Kotlin', level: 80, icon: <SiKotlin /> },
    { name: 'Git', level: 95, icon: <FaGitAlt /> },
    { name: 'SQL', level: 90, icon: <SiPostgresql /> },
    { name: 'Docker', level: 80, icon: <FaDocker /> },
    { name: 'Vue', level: 75, icon: <SiVuedotjs /> },
    { name: 'Vite', level: 80, icon: <SiVite /> },
    { name: 'Go', level: 70, icon: <SiGo /> },
];

  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="skills-container"
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-info">
                <div className="skill-name-with-icon">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar-container">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;