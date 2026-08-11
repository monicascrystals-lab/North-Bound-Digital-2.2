import { useState } from 'react'
import portfolio from '../data/portfolio'

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section-header">
        <p className="eyebrow">Portfolio</p>
        <h2>Selected website concepts for local businesses</h2>
        <p>
          Every website I create is tailored to your business and your vision.
          From colours and fonts to layout, imagery, and features, each detail
          can be customised to suit your brand.
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

              <button
                className="button button-tertiary"
                onClick={() => setSelectedProject(project)}
              >
                View This Website
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="portfolio-modal"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="portfolio-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="portfolio-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <h2>{selectedProject.name}</h2>

            <div className="portfolio-modal-images">
              {selectedProject.screenshots?.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`${selectedProject.name} screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio