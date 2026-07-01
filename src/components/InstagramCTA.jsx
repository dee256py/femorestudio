import { Link } from "react-router-dom";
import { siteContent } from "../data/siteContent";

function InstagramCTA() {
  return (
    <section className="instagram-cta">
      <p className="eyebrow">Stay connected</p>

      <h2>Follow the studio for custom drops, behind the scenes and new pieces.</h2>

      <p>
        See Femorestudio’s latest lingerie and dancewear creations, then send an
        enquiry when you are ready to create something custom.
      </p>

      <div className="instagram-buttons">
        <a
          href={siteContent.contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="btn primary"
        >
          View Instagram
        </a>

        <Link to="/contact" className="btn secondary">
          Start an Enquiry
        </Link>
      </div>
    </section>
  );
}

export default InstagramCTA;