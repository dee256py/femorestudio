import { Link } from "react-router-dom";
import { siteContent } from "../data/siteContent";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div className="footer-logo">F</div>

        <div>
          <h3>Femorestudio</h3>
          <p>Custom lingerie & dancewear made for confidence and movement.</p>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <a href={`mailto:${siteContent.contact.email}`}>
            {siteContent.contact.email}
          </a>
          <a
            href={siteContent.contact.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href={siteContent.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Femorestudio. All rights reserved.</p>
        <p>Custom pieces. Fierce movement. Luxury detail.</p>
      </div>
    </footer>
  );
}

export default Footer;