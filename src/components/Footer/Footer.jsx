import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">

      <p>© {new Date().getFullYear()} Janhavi Malushte</p>

      <p>Built with React</p>

    </footer>
  );
};

export default Footer;