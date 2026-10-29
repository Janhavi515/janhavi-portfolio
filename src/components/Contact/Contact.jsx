import "./Contact.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("janhavimalushte@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={item}>Contact Me</motion.h2>

        <motion.p variants={item}>
          I'm currently open to new opportunities. Feel free to reach out if you
          have a question or just want to connect.
        </motion.p>

        <motion.div className="contact-links" variants={item}>
          {/* Copy Email Button */}
          <motion.button
            type="button"
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`contact-card copy-email-btn ${copied ? "copied" : ""}`}
            aria-label="Copy email address"
          >
            {copied ? <FaCheck className="icon-success" /> : <FaCopy />}
            <span>{copied ? "Copied to clipboard!" : "Copy Email"}</span>
          </motion.button>

          {/* Direct Email link */}
          <motion.a
            href="mailto:janhavimalushte@gmail.com"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="contact-card"
          >
            <FaEnvelope />
            <span>Send Email</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/janhavi-malushte"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="contact-card"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Janhavi515"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="contact-card"
          >
            <FaGithub />
            <span>GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;