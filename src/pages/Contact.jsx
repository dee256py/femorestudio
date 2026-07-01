import { useLocation } from "react-router-dom";
import { siteContent } from "../data/siteContent";
import Reveal from "../components/Reveal";

function Contact() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const selectedProduct = params.get("product") || "";
  const enquiryMessage =
    params.get("message") ||
    "Hi Femorestudio, I would like to make an enquiry.";

  return (
    <main>
      <Reveal>
        <section className="page-header">
          <p className="eyebrow">Enquiries</p>
          <h1>Contact</h1>
          <p className="script-text">let’s create something custom</p>

          <p className="page-intro">
            For custom lingerie, dancewear, sizing requests, colour changes, or
            pole-performance pieces, send Femorestudio an enquiry below.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="contact-section">
          <div className="contact-info">
            <p className="eyebrow">Start here</p>
            <h2>Tell us what you want made.</h2>
            <p>
              Include the style, colour, size, deadline, and any inspiration you
              have in mind.
            </p>

            <div className="contact-links">
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

          <form
            className="contact-form"
            action={`mailto:${siteContent.contact.email}`}
            method="POST"
            encType="text/plain"
          >
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" />
            </label>

            <label>
              Email
              <input name="email" type="email" placeholder="Your email" />
            </label>

            <label>
              Product
              <input
                name="product"
                type="text"
                placeholder="Custom set, lace bra, one piece..."
                defaultValue={selectedProduct}
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="6"
                defaultValue={enquiryMessage}
              ></textarea>
            </label>

            <button type="submit" className="btn primary">
              Send Enquiry
            </button>
          </form>
        </section>
      </Reveal>
    </main>
  );
}

export default Contact;