import GalleryPreview from "../components/GalleryPreview";
import InstagramCTA from "../components/InstagramCTA";
import Reveal from "../components/Reveal";

function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-glow"></div>

        <p className="eyebrow">Custom lingerie & dancewear</p>
        <h1>Femorestudio</h1>
        <p className="script-text">custom for your confidence</p>

        <p className="hero-text">
          Fierce custom pieces made for confidence, movement and unforgettable
          performances.
        </p>

        <div className="hero-buttons">
          <a href="/products" className="btn primary">
            View Collection
          </a>
          <a href="/contact" className="btn secondary">
            Request Custom Set
          </a>
        </div>
      </main>

      <Reveal>
        <section className="about-section">
          <p className="eyebrow">The Studio</p>
          <h2>Luxury pieces created around you.</h2>

          <p>
            Every Femorestudio design is handcrafted to help women feel elegant,
            fearless and completely themselves. Whether it’s for pole, dance,
            performance or confidence, each piece is made uniquely for you.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <GalleryPreview />
      </Reveal>

      <Reveal>
        <section className="why-section">
          <p className="eyebrow">Why Femorestudio</p>
          <h2>Made for bodies that move, perform and command attention.</h2>

          <div className="why-grid">
            <div className="why-card">
              <h3>Custom Made</h3>
              <p>
                Every order is created around your measurements, your style and
                your performance needs.
              </p>
            </div>

            <div className="why-card">
              <h3>Fierce Detail</h3>
              <p>
                Lace, satin, rich colours and statement finishes made to feel
                bold, feminine and unforgettable.
              </p>
            </div>

            <div className="why-card">
              <h3>Pole Ready</h3>
              <p>
                Designed for dancers and performers who need pieces that look
                good while moving with confidence.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="process-section">
          <p className="eyebrow">How it Works</p>
          <h2>Your custom piece in four simple steps.</h2>

          <div className="process-grid">
            <div className="step">
              <span>01</span>
              <h3>Choose a Style</h3>
              <p>Browse the collection or tell us your vision.</p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>Measurements</h3>
              <p>Send your measurements for a perfectly tailored fit.</p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>Handcrafted</h3>
              <p>Your piece is carefully created with premium materials.</p>
            </div>

            <div className="step">
              <span>04</span>
              <h3>Delivered</h3>
              <p>Your custom lingerie is packaged beautifully and shipped to you.</p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <InstagramCTA />
      </Reveal>
    </>
  );
}

export default Home;