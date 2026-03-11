import "./Hero.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <p className="intro">Hi, my name is</p>

      <h1>Janhavi Malushte</h1>

      <h2>Frontend Engineer</h2>

      <p className="description">
        I build modern, responsive web applications using React and JavaScript
        with a focus on performance and user experience.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="hero-btn">
          View Projects
        </a>

        <a href="/resume.pdf" className="resume-btn">
          Download Resume
        </a>
      </div>

      <div className="social-icons">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/janhavi-malushte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Hero;