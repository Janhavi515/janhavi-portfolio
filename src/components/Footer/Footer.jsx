import "./Footer.scss";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">

        <p>© {new Date().getFullYear()} Janhavi Malushte</p>

        <p className="footer-built">
          Built with React ⚛️
        </p>

      </div>
    </motion.footer>
  );
};

export default Footer;