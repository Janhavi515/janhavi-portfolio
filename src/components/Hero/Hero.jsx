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
        <a
          href="/Janhavi_Malushte_Frontend_Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          View Resume
        </a>

        <a
          href="/Janhavi_Malushte_Frontend_Developer.pdf"
          download
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>

      <div className="social-icons">
        <a
          href="https://github.com/Janhavi515"
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
