import { useState } from 'react'
import services from '../data/services'

function Services() {
  const [openService, setOpenService] = useState(null)

  const toggleService = (id) => {
    setOpenService((current) => (current === id ? null : id))
  }

  return (
    <section id="services" className="section services-section">
      {/* Future React Bits Magic Bento can wrap the services grid here */}
      <div className="section-header">
        <p className="eyebrow">Services</p>
        <h2>Web design services that support your business</h2>
        <p>
          Choose the right website option for your business, whether you need a simple landing
          page, a refreshed brand presence, or ongoing website support.
        </p>
      </div>

      <div className="services-grid" role="list">
        {services.map((service) => {
          const isOpen = openService === service.id
          return (
            <article key={service.id} className={`service-card ${isOpen ? 'open' : ''}`}>
              <div className="service-card-header">
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
                <button
                  type="button"
                  className="service-toggle"
                  aria-expanded={isOpen}
                  aria-controls={`${service.id}-details`}
                  onClick={() => toggleService(service.id)}
                >
                  {isOpen ? 'Hide details' : 'Learn more'}
                </button>
              </div>

              <div
                id={`${service.id}-details`}
                className="service-details"
                hidden={!isOpen}
              >
                <p>{service.details}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
