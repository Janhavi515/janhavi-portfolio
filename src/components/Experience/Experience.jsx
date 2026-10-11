import "./Experience.scss";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Software Engineer",
    company: "Researchwire",
    location: "Mumbai, India",
    period: "Mar 2022 – Present",
    badge: "Current Role",
    summary:
      "Leading frontend architecture for data-intensive enterprise platforms, specializing in performance optimization, reusable component design systems, and seamless API integrations.",
    achievements: [
      "Architected and scaled the frontend for an enterprise Patent Analytics platform serving 10,000+ active users.",
      "Engineered an efficient data-fetching and caching strategy using RTK Query, slashing page load times by 80%.",
      "Designed and maintained a centralized reusable component library, boosting team development velocity by 30% and cutting critical UI bugs by 30%.",
      "Optimized large-dataset rendering and complex multi-parameter filter trees for patent discovery with sub-second responsiveness.",
      "Collaborated closely with backend engineers and product managers in an Agile/Scrum environment to deliver sprint deliverables on schedule.",
    ],
    skills: [
      "React.js",
      "Redux Toolkit",
      "RTK Query",
      "JavaScript (ES6+)",
      "Node.js",
      "Symfony",
      "MySQL",
      "Docker",
      "SCSS",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Web2Attract",
    location: "Remote",
    period: "Jan 2021 – Jul 2021",
    badge: "Remote Internship",
    summary:
      "Developed responsive client storefronts and e-commerce web applications with an emphasis on mobile-first design and performance.",
    achievements: [
      "Developed client e-commerce platforms and custom storefront templates.",
      "Ensured seamless cross-browser compatibility and optimized mobile responsiveness across devices.",
      "Collaborated with design teams to translate UI/UX wireframes into functional, interactive web pages.",
    ],
    skills: ["JavaScript", "HTML5", "CSS3 / SCSS", "Responsive Design", "WordPress"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Career Trajectory
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          💼 Work Experience
        </motion.h2>
      </div>

      <motion.div
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experiences.map((exp, idx) => (
          <motion.div key={idx} className="timeline-item" variants={itemVariants}>
            <div className="timeline-marker">
              <div className="marker-dot">
                <FaBriefcase />
              </div>
              {idx !== experiences.length - 1 && <div className="marker-line" />}
            </div>

            <div className="experience-card">
              <div className="card-top">
                <div>
                  <span className="exp-badge">{exp.badge}</span>
                  <h3 className="role-title">{exp.role}</h3>
                  <h4 className="company-name">{exp.company}</h4>
                </div>
                <div className="meta-info">
                  <span className="period">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                  <span className="location">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="exp-summary">{exp.summary}</p>

              <ul className="achievements-list">
                {exp.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="exp-tech-stack">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
