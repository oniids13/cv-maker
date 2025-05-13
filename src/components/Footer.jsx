import { GitHub, LinkedIn, Code } from "@mui/icons-material";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="copyright">
          © {new Date().getFullYear()} | Jose Dino Abaya
        </div>
        <div className="social-links">
          <a
            href="https://github.com/oniids13"
            aria-label="GitHub Profile"
            target="_blank"
          >
            <GitHub />
          </a>
          <a
            href="https://www.linkedin.com/in/oniids/"
            aria-label="LinkedIn Profile"
            target="_blank"
          >
            <LinkedIn />
          </a>
          <a
            href="https://jose-dino-portfolio-react.vercel.app/"
            aria-label="Portfolio"
            target="_blank"
          >
            <Code />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
