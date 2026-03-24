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
        >X</button>
      </div>

      {/* Body */}
      <div className="offcanvas-body">
        <div className="resume-content">
          <h2>Janhavi Malushte</h2>
          <p className="resume-role">Frontend Engineer</p>

          {/* Experience */}
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

          {/* Skills */}
          <div className="resume-section">
            <h3>Skills</h3>
            <p>
              React, Redux, JavaScript, TypeScript, Node.js, Git, Tailwind
            </p>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h3>Education</h3>
            <p>MCA - SNDT University</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ResumeCanvas;