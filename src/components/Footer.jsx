import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";


const socialLinks = [
  { id: "github", icon: <FaGithub />, label: "GitHub", href: "https://github.com/Jesh-samso" },
  { id: "linkedin", icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/samson-opondo-29b101287/" },
  { id: "email", icon: <FaEnvelope />, label: "Email", href: "mailto:samsonopondo1274@gmail.com" },
  { id: "whatsapp", icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/254116069774" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-main">
          <div className="footer-info">
            <h3>Samson Opondo</h3>
            <p>Developer | Building innovative digital solutions</p>
          </div>
          <div className="footer-social">
            <p className="social-title">Connect With Me</p>
            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={social.label}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Samson Opondo. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
