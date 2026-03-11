import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <p className="intro">Hi, my name is</p>

      <h1>Janhavi Malushte</h1>

      <h2>Frontend Engineer</h2>

      <p className="description">
        I build responsive and interactive web applications using modern
        technologies.
      </p>

      <a href="#projects" className="hero-btn">
        View My Work
      </a>
    </section>
  );
};

export default Hero;