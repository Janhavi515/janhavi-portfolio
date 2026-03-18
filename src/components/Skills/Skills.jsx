import "./Skills.scss";

const Skills = () => {

  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "SCSS",
    "Git",
    "REST API",
    "Responsive Design"
  ];

  return (
    <section id="skills" className="skills">

      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;