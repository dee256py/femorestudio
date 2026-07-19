import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../sanity/client";

function GalleryPreview() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`
        *[_type == "galleryItem"] | order(displayOrder asc) {
          _id,
          slot,
          image,
          altText,
          imagePosition,
          displayOrder
        }
      `)
      .then((data) => {
        setGalleryItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load gallery:", error);
        setIsLoading(false);
      });
  }, []);

  const galleryDetails = {
    "red-custom-set": {
      title: "Red Custom Set",
      label: "Signature Piece",
    },
    "black-custom-set": {
      title: "Black Custom Set",
      label: "Performance Wear",
    },
    "lace-bras": {
      title: "Lace Bras",
      label: "Lingerie",
    },
    "one-pieces": {
      title: "One Pieces",
      label: "Dancewear",
    },
  };

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

      {isLoading ? (
        <div className="gallery-loading">Loading the collection...</div>
      ) : (
        <div className="editorial-gallery">
          {galleryItems.map((item, index) => {
            const details = galleryDetails[item.slot] || {
              title: "Femorestudio",
              label: "Editorial Piece",
            };

            const imageUrl = item.image
              ? urlFor(item.image).width(1400).quality(90).url()
              : "";

            return (
              <article
                className={`editorial-card editorial-card-${index + 1}`}
                key={item._id}
                role="img"
                aria-label={item.altText}
                style={
                  imageUrl
                    ? {
                        backgroundImage: `linear-gradient(
                          rgba(8, 9, 8, 0.08),
                          rgba(8, 9, 8, 0.55)
                        ), url(${imageUrl})`,
                        backgroundPosition: item.imagePosition || "center",
                      }
                    : undefined
                }
              >
                <div className="editorial-card-content">
                  <p>{details.label}</p>
                  <h3>{details.title}</h3>
                </div>
              </article>
            );
          })}
        </div>
      )}

      <div className="gallery-cta">
        <Link to="/products" className="btn secondary">
          View Full Collection
        </Link>
      </div>
    </section>
  );
}

export default GalleryPreview;