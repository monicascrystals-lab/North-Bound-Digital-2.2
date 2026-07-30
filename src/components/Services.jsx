function Services({ MagicBento }) {
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
        {/* Service cards replaced by the existing MagicBento component */}
        {MagicBento ? <MagicBento /> : null}
      </div>
    </section>
  )
}

export default Services
