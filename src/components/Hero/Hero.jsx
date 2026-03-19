import "./Hero.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  const name = "Janhavi Malushte";

  return (
    <section className="hero">
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.p className="intro" variants={item}>
          Hi, my name is
        </motion.p>

        {/* 🔥 Animated Name */}
        <motion.h1 className="fancy-name" variants={item}>
          {name.split("").map((char, index) => (
            <span
              key={index}
              className="letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </motion.h1>

        <motion.h2 variants={item}>Frontend Engineer</motion.h2>

        <motion.p className="description" variants={item}>
          I build modern, responsive web applications using React and JavaScript
          with a focus on performance and user experience.
        </motion.p>

        {/* Buttons */}
        <motion.div className="hero-buttons" variants={item}>
          <motion.a
            href="/Janhavi_Malushte_Frontend_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>

          <motion.a
            href="/Janhavi_Malushte_Frontend_Developer.pdf"
            download
            className="resume-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="social-icons" variants={item}>
          <motion.a
            href="https://github.com/Janhavi515"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/janhavi-malushte"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
