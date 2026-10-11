import "./Hero.scss";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Hero = () => {
  const name = "Janhavi Malushte";

  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT COLUMN: INTRO & BIO */}
        <motion.div
          className="hero-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="intro" variants={item}>
            Hi, my name is
          </motion.p>

          {/* Animated Name */}
          <motion.h1 className="fancy-name" variants={item}>
            {name.split("").map((char, index) => (
              <span
                key={index}
                className="letter"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </motion.h1>

          <motion.h2 variants={item}>Frontend Engineer</motion.h2>

          <motion.p className="description" variants={item}>
            Frontend Engineer with 4+ years of experience building scalable,
            high-performance web applications with React, Redux, and clean
            frontend system architectures.
          </motion.p>

          <motion.p className="highlight" variants={item}>
            🚀 Improved performance by 80% | 📈 Applications used by 10,000+ users
          </motion.p>

          <motion.p className="subtle-text" variants={item}>
            Specializing in React, Redux, and frontend system design
          </motion.p>

          {/* Action Buttons */}
          <motion.div className="hero-buttons" variants={item}>
            <motion.a
              href="/Janhavi_Malushte_Frontend_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn primary-btn"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFileAlt className="btn-icon" />
              <span>View Resume</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="hero-btn contact-btn"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Contact Me</span>
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div className="social-icons" variants={item}>
            <motion.a
              href="https://github.com/Janhavi515"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.15 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/janhavi-malushte"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.15 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: CODE WINDOW */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="tab-pill">
                <span className="tab-icon">⚛️</span>
                <span className="tab-name">Janhavi.config.ts</span>
              </div>
              <span className="window-lang">TypeScript</span>
            </div>

            <div className="window-body">
              <div className="code-line">
                <span className="line-num">1</span>
                <span className="line-content">
                  <span className="token-keyword">const</span>{" "}
                  <span className="token-var">frontendEngineer</span> = &#123;
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">2</span>
                <span className="line-content indent-1">
                  <span className="token-prop">name</span>:{" "}
                  <span className="token-string">"Janhavi Malushte"</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">3</span>
                <span className="line-content indent-1">
                  <span className="token-prop">experience</span>:{" "}
                  <span className="token-string">"4+ Years"</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">4</span>
                <span className="line-content indent-1">
                  <span className="token-prop">role</span>:{" "}
                  <span className="token-string">"Software Engineer (Frontend)"</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">5</span>
                <span className="line-content indent-1">
                  <span className="token-prop">coreStack</span>: [
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">6</span>
                <span className="line-content indent-2">
                  <span className="token-string">"React.js"</span>,{" "}
                  <span className="token-string">"Redux Toolkit"</span>,{" "}
                  <span className="token-string">"RTK Query"</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">7</span>
                <span className="line-content indent-2">
                  <span className="token-string">"TypeScript"</span>,{" "}
                  <span className="token-string">"JavaScript (ES6+)"</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">8</span>
                <span className="line-content indent-1">],</span>
              </div>
              <div className="code-line">
                <span className="line-num">9</span>
                <span className="line-content indent-1">
                  <span className="token-prop">productionMetrics</span>: &#123;
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">10</span>
                <span className="line-content indent-2">
                  <span className="token-prop">loadSpeedBoost</span>:{" "}
                  <span className="token-string">"80% faster"</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">11</span>
                <span className="line-content indent-2">
                  <span className="token-prop">usersSupported</span>:{" "}
                  <span className="token-number">10000</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">12</span>
                <span className="line-content indent-2">
                  <span className="token-prop">velocityIncrease</span>:{" "}
                  <span className="token-string">"30%"</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">13</span>
                <span className="line-content indent-1">&#125;,</span>
              </div>
              <div className="code-line">
                <span className="line-num">14</span>
                <span className="line-content indent-1">
                  <span className="token-prop">openToOpportunities</span>:{" "}
                  <span className="token-boolean">true</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">15</span>
                <span className="line-content">&#125;;</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
