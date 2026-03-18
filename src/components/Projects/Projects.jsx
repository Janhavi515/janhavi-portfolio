import "./Projects.scss";

const Projects = () => {
  const projects = [
    {
      title: "Patent Research Platform",
      description:
        "A web platform for searching and analyzing patent data with filters and analytics.",
      tech: "React, JavaScript, REST API",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal developer portfolio built with React and SCSS showcasing projects and skills.",
      tech: "React, SCSS",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;