function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-content">
        <div className="section-copy">
          <p className="eyebrow">The Northbound difference</p>
          <h2>Built for the businesses people find, compare and choose every day.</h2>
          <p>
            Your website is often the first proof that your business is the right choice. I create polished, mobile-first websites that make that first impression count — with clear messaging, considered design and straightforward next steps.
          </p>
          <a className="text-link" href="#contact">Let’s talk about your business <span aria-hidden="true">↗</span></a>
        </div>
        <div className="about-metrics" aria-label="What Northbound Digital delivers">
          <div><strong>01</strong><span>Clear strategy<br />before pixels</span></div>
          <div><strong>02</strong><span>Responsive on<br />every screen</span></div>
          <div><strong>03</strong><span>Support after<br />launch day</span></div>
        </div>
      </div>
    </section>
  )
}

export default About
