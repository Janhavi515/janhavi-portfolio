import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-left">
          <h2>About Me</h2>

          <p>
            Hi, I'm <span>Janhavi Malushte</span>, a Frontend Developer with
            4 years of experience building responsive and scalable web
            applications using React.
          </p>

          <p>
            I enjoy creating clean UI, smooth user experiences and writing
            maintainable frontend code.
          </p>

          <p>
            Currently working as a Software Engineer where I focus on
            building React based applications and improving application
            performance.
          </p>
        </div>

        <div className="about-right">
          <div className="experience-card">
            <h3>4</h3>
            <p>Years Experience</p>
          </div>

          <div className="experience-card">
            <h3>10+</h3>
            <p>Projects Worked On</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;