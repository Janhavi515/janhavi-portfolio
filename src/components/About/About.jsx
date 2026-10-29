import "./About.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [years, setYears] = useState(0);
  const [users, setUsers] = useState(0);
  const [speed, setSpeed] = useState(0);

  // Smooth ease-out counter animation
  useEffect(() => {
    if (inView) {
      const duration = 1100;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic curve for natural slowdown
        const ease = 1 - Math.pow(1 - progress, 3);

        setYears(Math.floor(4 * ease));
        setUsers(Math.floor(10 * ease));
        setSpeed(Math.floor(80 * ease));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setYears(4);
          setUsers(10);
          setSpeed(80);
        }
      };

      const animId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animId);
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
            <h3>{years}+</h3>
            <p>Years Experience</p>
          </motion.div>

          <motion.div
            className="experience-card"
            whileHover={{ rotateY: -10, scale: 1.05 }}
          >
            <h3>{users}k+</h3>
            <p>Users Supported</p>
          </motion.div>

          <motion.div
            className="experience-card"
            whileHover={{ rotateY: 10, scale: 1.05 }}
          >
            <h3>{speed}%</h3>
            <p>Faster Data Load</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;