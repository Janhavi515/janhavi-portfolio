import "./Navbar.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
      <motion.a
        href="#"
        className="logo"
        whileHover={{ scale: 1.15, rotate: 4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        JM.
      </motion.a>

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

      {/* Mobile Menu Toggle Button */}
      <button
        type="button"
        className="mobile-toggle-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

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
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;