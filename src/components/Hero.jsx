function Hero({ logo }) {
  return (
    <section id="home" className="hero-section">
      {/* Future React Bits animated background can be inserted inside this hero section */}
      <div className="hero-panel">
        <div className="hero-intro">
          <img src={logo} alt="Northbound Digital logo" className="hero-logo" />
          <p className="eyebrow">Premium web design for growing local businesses</p>
          <h1>Premium websites designed to help small businesses stand out</h1>
          <p className="hero-copy">
            Northbound Digital creates professional, responsive websites for small businesses that
            want a confident online presence with elegant design and strong usability.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Request a Website
            </a>
            <a className="button button-secondary" href="#portfolio">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <span className="hero-shape hero-shape-circle" />
        <span className="hero-shape hero-shape-ring" />
        <span className="hero-shape hero-shape-wave" />
        <span className="hero-shape hero-shape-dot" />
      </div>
    </section>
  )
}

export default Hero
