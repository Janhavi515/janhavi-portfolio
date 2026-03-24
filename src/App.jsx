import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ResumeCanvas from "./components/Resumecanvas/ResumeCanvas";
import { useRef } from "react";
import { Offcanvas } from "bootstrap";

function App() {
  const canvasRef = useRef(null);

  const openResume = () => {
    const offcanvas = new Offcanvas(canvasRef.current, {
      backdrop: true,   
      scroll: false,    
    });
    offcanvas.show();
  };

  return (
    <>
      <Navbar />
      <Hero openResume={openResume}/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <ResumeCanvas  ref={canvasRef}/>
    </>
  );
}

export default App
