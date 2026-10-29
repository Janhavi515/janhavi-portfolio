import "./Navbar.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="navbar-left">
        <motion.a
          href="#"
          className="logo"
          whileHover={{ scale: 1.15, rotate: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          JM.
        </motion.a>
        <div className="status-pill">
          <span className="pulse-dot"></span>
          <span>Available for roles</span>
        </div>
      </div>

      <div className="navbar-right">
        {/* Desktop & Tablet Navigation */}
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.a
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: "#38bdf8" }}
                className="nav-link"
              >
                {item}
                <motion.span className="underline" layoutId="underline" />
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Direct Resume Button */}
        <motion.a
          href="/Janhavi_Malushte_Frontend_Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume-btn"
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Resume</span>
          <FaExternalLinkAlt className="resume-icon" />
        </motion.a>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="mobile-nav-links">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="mobile-resume-item">
                <a
                  href="/Janhavi_Malushte_Frontend_Developer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="mobile-resume-link"
                >
                  <span>View Resume</span>
                  <FaExternalLinkAlt />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;