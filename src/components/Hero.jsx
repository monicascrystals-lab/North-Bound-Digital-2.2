function Hero({ logo }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-panel">
        <div className="hero-intro">
          <p className="eyebrow"><span />Independent web studio · Bloemfontein</p>
          <h1>Websites that turn <em>local attention</em> into loyal customers.</h1>
          <p className="hero-copy">
            Northbound Digital builds distinct, high-performing websites for local businesses ready to look credible, get found and grow with confidence.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Start your project <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="#portfolio">
              Explore selected work <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="Northbound Digital strengths">
            <span>Made for mobile</span><span>Built with intention</span><span>Local, personal service</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-art-card"><img src={logo} alt="" /><span>01 / Northbound</span><strong>Built to move.</strong></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
