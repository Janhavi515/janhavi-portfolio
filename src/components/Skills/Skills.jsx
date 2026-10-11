import "./Skills.scss";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaSass,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";
import { SiRedux, SiTypescript, SiSymfony, SiMysql, SiVite } from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend Core & State",
    icon: <FaReact />,
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "RTK Query", icon: <SiRedux /> },
      { name: "JavaScript (ES6+)", icon: <FaJsSquare /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Component Architecture", icon: <FaLayerGroup /> },
    ],
  },
  {
    category: "Styling & UI Systems",
    icon: <FaSass />,
    skills: [
      { name: "SCSS / SASS", icon: <FaSass /> },
      { name: "Framer Motion", icon: <FaLayerGroup /> },
      { name: "CSS3 / Modern Layouts", icon: <FaLayerGroup /> },
      { name: "Responsive UI/UX", icon: <FaLayerGroup /> },
      { name: "Design Tokens", icon: <FaLayerGroup /> },
    ],
  },
  {
    category: "Backend & Integrations",
    icon: <FaNodeJs />,
    skills: [
      { name: "RESTful APIs", icon: <FaLayerGroup /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Symfony", icon: <SiSymfony /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "API Caching & Tuning", icon: <FaTools /> },
    ],
  },
  {
    category: "Engineering Tools & DevOps",
    icon: <FaTools />,
    skills: [
      { name: "Git / GitHub", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Web Performance (Core Web Vitals)", icon: <FaTools /> },
      { name: "Agile / Scrum & Jira", icon: <FaTools /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Competencies
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          🛠️ Skills &amp; Architecture
        </motion.h2>
      </div>

      <motion.div
        className="skills-categories-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillCategories.map((group, idx) => (
          <motion.div
            key={idx}
            className="skill-category-card"
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className="category-header">
              <span className="category-icon">{group.icon}</span>
              <h3>{group.category}</h3>
            </div>

            <div className="skills-badge-list">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-chip">
                  <span className="chip-icon">{skill.icon}</span>
                  <span className="chip-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;