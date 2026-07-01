import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";

function Products() {
  return (
    <main>
      <Reveal>
        <section className="page-header">
          <p className="eyebrow">The collection</p>
          <h1>Products</h1>
          <p className="script-text">made to move</p>

          <p className="page-intro">
            Browse Femorestudio’s custom lingerie and dancewear pieces. For
            custom sizing, colour changes, or pole-performance sets, send an
            enquiry.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Reveal>

      <Reveal>
        <section className="custom-order-section">
          <p className="eyebrow">Custom orders</p>
          <h2>Made around your body, movement, and vision.</h2>

          <div className="custom-order-grid">
            <div>
              <h3>Custom Sizing</h3>
              <p>
                Each piece can be discussed around your measurements so it feels
                comfortable, secure, and made for you.
              </p>
            </div>

            <div>
              <h3>Colour Requests</h3>
              <p>
                Want something in emerald, burgundy, blush, black, gold, or a
                completely different mood? Send your idea through the enquiry
                form.
              </p>
            </div>

            <div>
              <h3>Performance Wear</h3>
              <p>
                Perfect for pole dancers and performers who need pieces that
                look beautiful while allowing movement.
              </p>
            </div>
          </div>

          <Link to="/contact" className="btn primary custom-order-btn">
            Request a Custom Piece
          </Link>
        </section>
      </Reveal>
    </main>
  );
}

export default Products;