import { Link } from "react-router-dom";
import { siteContent } from "../data/siteContent";

function GalleryPreview() {
  return (
    <section className="gallery-section">
      <div className="gallery-heading">
        <p className="eyebrow">Editorial gallery</p>
        <h2>Custom pieces with main-character energy.</h2>
        <p>
          A visual look into Femorestudio’s custom lingerie and dancewear, made
          for movement, confidence, and statement moments.
        </p>
      </div>

      <div className="editorial-gallery">
        {siteContent.gallery.map((item, index) => (
          <article
            className={`editorial-card editorial-card-${index + 1}`}
            key={item.title}
            style={
              item.image
                ? {
                    backgroundImage: `linear-gradient(rgba(8, 9, 8, 0.08), rgba(8, 9, 8, 0.55)), url(${item.image})`,
                    backgroundPosition: item.imagePosition || "center",
                  }
                : undefined
            }
          >
            <div className="editorial-card-content">
              <p>{item.label}</p>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="gallery-cta">
        <Link to="/products" className="btn secondary">
          View Full Collection
        </Link>
      </div>
    </section>
  );
}

export default GalleryPreview;