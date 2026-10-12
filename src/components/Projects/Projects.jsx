import { useState } from "react";
import "./Projects.scss";
import { FaExternalLinkAlt, FaTimes, FaCheckCircle, FaRocket, FaShieldAlt } from "react-icons/fa";

const projectsData = [
  {
    id: "patent-analytics",
    title: "Enterprise Patent Analytics & Search Engine",
    category: "Enterprise",
    badge: "🏢 Researchwire",
    description:
      "A high-performance enterprise analytics platform enabling intellectual property professionals to query, filter, and analyze multi-million patent datasets with sub-second response times.",
    tech: ["React.js", "Redux Toolkit", "RTK Query", "JavaScript (ES6+)", "Symfony", "MySQL"],
    role: "Software Engineer (Frontend Architecture & API)",
    keyFeatures: [
      "Advanced multi-parameter faceted search with instant query synchronization",
      "Normalized global state caching and automated cache invalidation via RTK Query",
      "Optimized rendering pipelines for dense, high-volume data tables",
      "Interactive analytics dashboards with dynamic charting and summary widgets",
    ],
    impact: [
      "🚀 Slashed data loading times by 80% via strategic API caching",
      "📈 Successfully supported 10,000+ enterprise users",
      "🔧 Reduced critical UI and data-fetching regressions by 30%",
      "⚡ Accelerated frontend feature turnaround by 30%",
    ],
    caseStudy: {
      problem:
        "The legacy interface struggled under heavy data loads. Users querying thousands of patent records experienced sluggish filtering, UI freezes, and redundant API round-trips when switching between search facets.",
      architecture: [
        "State & Data Layer: Migrated data management to RTK Query with normalized cache keys and optimistic updates.",
        "Component Modularity: Deconstructed bloated monolithic pages into atomic, reusable React components.",
        "Performance Optimization: Implemented windowing/virtualization for large datasets and memoized heavy computational calculations with useMemo/useCallback.",
        "API Integration: Coordinated with the Symfony/MySQL backend to streamline payload structures and implement server-side pagination.",
      ],
      results:
        "Page response times dropped by 80%, UI freeze errors were eliminated, and user retention for high-volume patent searchers increased substantially across 10,000+ active enterprise accounts.",
    },
  },
  {
    id: "component-system",
    title: "Enterprise UI Component System & Architecture",
    category: "Design System",
    badge: "⚡ Architecture",
    description:
      "A centralized, reusable component library and design system architecture engineered to standardize UI patterns, accelerate sprint velocity, and maintain visual consistency across enterprise apps.",
    tech: ["React.js", "SCSS", "Framer Motion", "Design Tokens", "Component Architecture"],
    role: "Software Engineer (Frontend)",
    keyFeatures: [
      "Modular design tokens for typography, semantic color scales, and spacing",
      "Comprehensive suite of complex widgets: data grids, drawer modals, multi-select dropdowns, and toast systems",
      "Standardized accessibility (a11y) patterns and keyboard navigation support",
      "Single source of truth architecture eliminating redundant boilerplate code across product teams",
    ],
    impact: [
      "⚡ Increased team sprint delivery speed by 30%",
      "🎯 Standardized UI consistency across entire company product ecosystem",
      "🛡️ Decreased UI regression bugs by 30% through robust prop typing and modular design",
    ],
    caseStudy: {
      problem:
        "Disparate development styles across multiple product modules led to visual inconsistencies, duplicate codebases, and frequent styling conflicts whenever shared features were updated.",
      architecture: [
        "Design Token Strategy: Defined centralized SCSS variables and theme contracts for colors, typography, and elevations.",
        "Component Contract: Authored flexible, compound React components (e.g., Modals, DataTables, FilterBars) with clean prop APIs.",
        "Motion System: Integrated lightweight, unified micro-interactions using Framer Motion without degrading render budgets.",
      ],
      results:
        "New feature delivery time was reduced by roughly 30%, developers onboarded significantly faster, and brand consistency was established across all internal and client-facing platforms.",
    },
  },
  {
    id: "ecommerce-storefront",
    title: "Client E-Commerce Storefront & Optimization",
    category: "E-Commerce",
    badge: "🛍️ Web2Attract",
    description:
      "A responsive client e-commerce platform featuring dynamic product catalogs, optimized checkout flows, and streamlined mobile-first performance.",
    tech: ["JavaScript", "HTML5", "CSS3 / SCSS", "Responsive Design", "WordPress"],
    role: "Web Developer Intern (Remote)",
    keyFeatures: [
      "Fully responsive, mobile-first layouts tailored for diverse screen resolutions",
      "Streamlined shopping cart and interactive product showcase galleries",
      "Optimized asset delivery and fast first-contentful-paint (FCP)",
      "Cross-browser testing ensuring flawless performance across Safari, Chrome, and Firefox",
    ],
    impact: [
      "📱 100% mobile-friendly responsive coverage across all modern devices",
      "🛒 Improved user checkout experience with lower drop-off friction",
      "⚡ Faster asset loading and optimized media assets",
    ],
    caseStudy: {
      problem:
        "The client needed a modern, accessible web storefront that loaded quickly on low-bandwidth mobile connections and provided an intuitive purchase funnel for retail customers.",
      architecture: [
        "Responsive Strategy: Mobile-first layout grids utilizing flexible SCSS mixins and modern CSS techniques.",
        "Performance Tuning: Compressed media assets, deferred non-critical scripts, and streamlined DOM hierarchy.",
      ],
      results:
        "Delivered a polished, responsive storefront that improved mobile engagement and provided a seamless purchasing experience.",
    },
  },
];

const Projects = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <p className="section-subtitle">Real-World Engineering</p>
        <h2>✨ Featured Production Projects</h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="card-header">
              <span className="project-badge">{project.badge}</span>
              <span className="project-category">{project.category}</span>
            </div>

            <h3>{project.title}</h3>
            <p className="desc">{project.description}</p>
            <p className="role">👩‍💻 {project.role}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="features-container">
              <h4 className="section-label">Key Engineering Contributions:</h4>
              <ul className="features">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i}>
                    <FaCheckCircle className="check-icon" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="impact">
              <h4 className="section-label">Production Impact:</h4>
              {project.impact.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>

            <div className="card-actions">
              <button
                type="button"
                className="case-study-btn"
                onClick={() => setActiveCaseStudy(project)}
              >
                <span>Read Architectural Case Study</span>
                <FaExternalLinkAlt />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {activeCaseStudy && (
        <div
          className="case-study-overlay"
          onClick={() => setActiveCaseStudy(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="case-study-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="modal-badge">{activeCaseStudy.badge}</span>
                <h3>{activeCaseStudy.title}</h3>
              </div>
              <button
                type="button"
                className="close-btn"
                onClick={() => setActiveCaseStudy(null)}
                aria-label="Close Case Study"
              >
                <FaTimes />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>
                  <FaShieldAlt className="modal-icon" /> The Engineering Challenge
                </h4>
                <p>{activeCaseStudy.caseStudy.problem}</p>
              </div>

              <div className="modal-section">
                <h4>
                  <FaRocket className="modal-icon" /> Architecture &amp; Technical Solutions
                </h4>
                <ul>
                  {activeCaseStudy.caseStudy.architecture.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section results-section">
                <h4>
                  <FaCheckCircle className="modal-icon" /> Measurable Outcomes &amp; Impact
                </h4>
                <p>{activeCaseStudy.caseStudy.results}</p>
              </div>

              <div className="modal-tech-summary">
                <h5>Tech Stack Utilized:</h5>
                <div className="tech-pills">
                  {activeCaseStudy.tech.map((t, idx) => (
                    <span key={idx} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="close-footer-btn"
                onClick={() => setActiveCaseStudy(null)}
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;