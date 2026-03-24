import "./Navbar.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        JM.
      </motion.div>

      <ul className="nav-links">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.a
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: "#38bdf8" , x: 2}}
              className="nav-link"
            >
              {item}
              <motion.span
                className="underline"
                layoutId="underline"
              />
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;