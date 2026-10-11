import "./About.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [count, setCount] = useState(0);

  //  Count animation
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = 4;
      const duration = 1000;

      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }
  }, [inView]);

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
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* LEFT */}
        <div className="about-left">
          <motion.h2 variants={item}>About Me</motion.h2>

          <motion.p variants={item}>
            Hi, I'm <span>Janhavi Malushte</span>, a Frontend Engineer with <span>4+ years</span> of
            professional experience building high-performance, scalable web
            applications using React, Redux, and modern JavaScript.
          </motion.p>

          <motion.p variants={item}>
            I specialize in architecting clean UI component systems, optimizing complex
            data rendering, and delivering seamless user experiences.
          </motion.p>

          <motion.p variants={item}>
            Currently working as a Software Engineer at Researchwire, where I focus on
            building enterprise analytics platforms, streamlining API integrations, and
            driving significant performance optimizations.
          </motion.p>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <motion.div
            className="experience-card"
            whileHover={{ rotateY: 10, scale: 1.05 }}
          >
            <h3>{count}+</h3>
            <p>Years Experience</p>
          </motion.div>

          <motion.div
            className="experience-card"
            whileHover={{ rotateY: -10, scale: 1.05 }}
          >
            <h3>10k+</h3>
            <p>Users Supported</p>
          </motion.div>

          <motion.div
            className="experience-card"
            whileHover={{ rotateY: 10, scale: 1.05 }}
          >
            <h3>80%</h3>
            <p>Faster Data Load</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;