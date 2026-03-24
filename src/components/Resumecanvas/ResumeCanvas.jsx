import { forwardRef } from "react";
import "./ResumeCanvas.scss";

const ResumeCanvas = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="offcanvas offcanvas-start custom-offcanvas"
      tabIndex="-1"
      id="resumeCanvas"
    >
      {/* Header */}
      <div className="offcanvas-header">
        <h5>My Resume</h5>
        <button
          type="button"
          className="resume-btn-close"
          data-bs-dismiss="offcanvas"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="offcanvas-body">
        <div className="resume-content">
          <h2>Janhavi Malushte</h2>
          <p className="resume-role">Frontend Engineer</p>

          {/* SUMMARY */}
          <div className="resume-section">
            <h3>Summary</h3>
            <p className="p-tag-font">
              Frontend Developer with 4 years of experience building scalable,
              high-performance web applications using React and Redux. Focused
              on clean architecture, reusable components, and delivering smooth
              user experiences.
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="resume-section">
            <h3>Experience</h3>

            <div className="resume-item">
              <h4>Software Engineer</h4>
              <span>Researchwire | Mar 2022 – Present</span>
              <ul>
                <li>Built analytics platform used by 10,000+ users</li>
                <li>Improved performance by 80%</li>
                <li>Increased development efficiency by 30%</li>
                <li>Worked with React, Redux, Node.js</li>
                <li>Designed APIs improving data throughput by 50%</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Web Developer Intern</h4>
              <span>Web2Attract | Jan 2021 – Jul 2021</span>
              <ul>
                <li>Developed e-commerce platform using WordPress</li>
                <li>Improved UI/UX and responsiveness</li>
              </ul>
            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div className="resume-section">
            <h3>Technical Skills</h3>

            <div className="resume-skill-group">
              <strong>Frontend:</strong>
              <p>
                React, Redux, RTK Query, HTML5, CSS3, JavaScript, TypeScript
              </p>
            </div>

            <div className="resume-skill-group">
              <strong>Backend:</strong>
              <p>Node.js, Symfony</p>
            </div>

            <div className="resume-skill-group">
              <strong>Tools:</strong>
              <p>Git, Docker, Jira, Agile, GitHub</p>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="resume-section">
            <h3>Education</h3>
            <p className="p-tag-font">MCA - SNDT University</p>
          </div>

          {/* CERTIFICATIONS */}
          <div className="resume-section">
            <h3>Certifications</h3>
            <ul>
              <li className="p-tag-font">ReactJS Course – NamasteDev (2023)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ResumeCanvas;
