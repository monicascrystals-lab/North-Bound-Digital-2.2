import services from '../data/services'
import { useState } from 'react'

function Services() {
  const [isPaused, setIsPaused] = useState(false)
  const cubeFaces = services.slice(0, 6)

  return (
    <section id="services" className="section services-section">
      <div className="section-header">
        <p className="eyebrow">What I do</p>
        <h2>Everything your business needs to show up with confidence.</h2>
        <p>
          From the first idea to a website you’re proud to share, every project is shaped around the way your customers make decisions.
        </p>
      </div>

      <div className="services-cube-layout">
        <div className="cube-scene" aria-label="Rotating services cube">
          <div className={`services-cube ${isPaused ? 'is-paused' : ''}`}>
            {cubeFaces.map((service, index) => (
              <article className={`cube-face cube-face-${index + 1}`} key={service.id}>
                <span className="service-index">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <a href="#contact" className="service-link">Enquire <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </div>

        <div className="cube-controls">
          <p>Six ways to move your business forward.</p>
          <button
            type="button"
            className="cube-toggle"
            aria-pressed={isPaused}
            onClick={() => setIsPaused((current) => !current)}
          >
            {isPaused ? 'Resume rotation' : 'Pause rotation'}
          </button>
          <span className="cube-note">Hover or focus a panel to hold it in place.</span>
        </div>
      </div>
    </section>
  )
}

export default Services
