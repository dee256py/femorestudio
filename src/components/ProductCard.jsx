function ProductCard({ product }) {
  const message = `Hi Femorestudio, I am interested in the ${product.name}.`;

  return (
    <article className="product-card">
      <div
        className="product-image-placeholder"
        style={
          product.image
            ? {
                backgroundImage: `linear-gradient(rgba(17,17,17,.05), rgba(17,17,17,.75)), url(${product.image})`,
                backgroundPosition: product.imagePosition || "center",
              }
            : undefined
        }
      >
        <span>{product.name}</span>
      </div>

      <div className="product-info">
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong>{product.price}</strong>

        <a
          href={`/contact?product=${encodeURIComponent(
            product.name
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