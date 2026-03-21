import "./Skills.scss";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "SCSS",
    "Git",
    "REST API",
    "Responsive Design",
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="skills">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            variants={item}
            whileHover={{
              scale: 1.08,
              rotateX: 8,
              rotateY: -8,
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;