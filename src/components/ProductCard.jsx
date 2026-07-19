import { urlFor } from "../sanity/client";

function ProductCard({ product }) {
  const message = `Hi Femorestudio, I am interested in the ${product.title}.`;

  return (
    <article className="product-card">
      <div
        className="product-image-placeholder"
        style={{
          backgroundImage: `linear-gradient(rgba(17,17,17,.05), rgba(17,17,17,.75)), url(${urlFor(
            product.image
          ).width(900).url()})`,
          backgroundPosition: "center",
        }}
      >
        <span>{product.title}</span>
      </div>

      <div className="product-info">
        <p>{product.category}</p>

        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <strong>{product.price}</strong>

        <a
          href={`/contact?product=${encodeURIComponent(
            product.title
          )}&message=${encodeURIComponent(message)}`}
          className="product-link"
        >
          Enquire About This Piece
        </a>
      </div>
    </article>
  );
}

export default ProductCard;