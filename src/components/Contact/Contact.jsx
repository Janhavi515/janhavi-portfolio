import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">

      <h2>Contact Me</h2>

      <p>
        I'm currently open to new opportunities. Feel free to reach out if you
        have a question or just want to connect.
      </p>

      <div className="contact-links">

        <a href="mailto:janhavimalushte@gmail.com">
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/janhavi-malushte"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Janhavi515"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

      </div>

    </section>
  );
};



export default Contact;