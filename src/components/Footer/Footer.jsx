import "./Footer.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Janhavi Malushte</p>
        <span className="footer-separator">•</span>
        <p className="footer-built">Built with React ⚛️</p>
      </div>
    </motion.footer>
  );
};

export default Footer;