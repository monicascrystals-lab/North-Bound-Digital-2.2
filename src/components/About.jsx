function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-content">
        <div className="section-copy">
          <p className="eyebrow">About Monica</p>
          <h2>Professional website design for small businesses</h2>
          <p>
            I create polished, mobile-friendly websites for small businesses that want to look
            trustworthy, professional and easy to use. Every website is designed to support your
            business goals with clean layout, strong hierarchy and thoughtful usability.
          </p>
          <p>
            I believe every small business deserves a website that feels professional, trustworthy
            and easy to use.
          </p>
        </div>

        <div className="about-visual">
          <div className="photo-frame" aria-hidden="true">
            <span className="photo-label">Profile photo placeholder</span>
            {/* Replace this placeholder with Monica's profile photo at src/assets/images/profile.jpg or similar */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
