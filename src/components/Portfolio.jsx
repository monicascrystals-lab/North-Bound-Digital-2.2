import portfolio from '../data/portfolio'

function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio-section">
      {/* Portfolio hover effect animation can be applied to these cards later */}
      <div className="section-header">
        <p className="eyebrow">Portfolio</p>
        <h2>Selected website concepts for local businesses</h2>
        <p>
          These placeholder projects show the style and layout direction that can be adapted for your
          business website.
        </p>
      </div>

      <div className="portfolio-grid">
        {portfolio.map((project) => (
          <article key={project.id} className="portfolio-card">
            <div className="portfolio-image">
  <img
    src={project.image}
    alt={`${project.name} website screenshot`}
  />
            </div>
            
            <div className="portfolio-copy">
              <h3>{project.name}</h3>
              <p className="portfolio-category">{project.category}</p>
              <p>{project.description}</p>
              <a
                className={`button button-tertiary ${!project.url ? 'disabled' : ''}`}
                href={project.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!project.url}
                tabIndex={project.url ? 0 : -1}
              >
                View This Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
