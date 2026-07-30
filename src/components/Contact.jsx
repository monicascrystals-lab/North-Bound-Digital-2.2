import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  business: '',
  websiteType: '',
  budget: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email.'
    if (!formData.phone.trim()) nextErrors.phone = 'Please enter your phone number.'
    if (!formData.business.trim()) nextErrors.business = 'Please enter your business name.'
    if (!formData.websiteType) nextErrors.websiteType = 'Please choose a website type.'
    if (!formData.budget) nextErrors.budget = 'Please choose a budget option.'
    if (!formData.message.trim()) nextErrors.message = 'Please describe your project briefly.'

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validation = validate()

    if (Object.keys(validation).length) {
      setErrors(validation)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <p className="eyebrow">Contact</p>
        <h2>Start your website project with Northbound Digital</h2>
        <p>
          Send a message to discuss your website needs, or use one of the direct contact links below.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-panel">
          <div className="contact-card">
            <p className="contact-label">Phone</p>
            <a href="tel:0766115666">076 611 5666</a>
          </div>
          <div className="contact-card">
            <p className="contact-label">WhatsApp</p>
            <a href="https://wa.me/27766115666" target="_blank" rel="noopener noreferrer">
              076 611 5666
            </a>
          </div>
          <div className="contact-card">
            <p className="contact-label">Email</p>
            <a href="mailto:Northbounddigital@gmail.co.za">Northbounddigital@gmail.co.za</a>
          </div>
          <div className="contact-card">
            <p className="contact-label">Location</p>
            <p>Bloemfontein, South Africa</p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="tel:0766115666">
              Call Me
            </a>
            <a
              className="button button-secondary"
              href="https://wa.me/27766115666"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Me
            </a>
            <a className="button button-tertiary" href="mailto:Northbounddigital@gmail.co.za">
              Email Me
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <p className="form-note">
            This form is a demonstration until a form service like Formspree or Netlify Forms is
            connected.
          </p>

          {submitted && (
            <div className="form-success" role="status">
              Thank you! Your message has been received locally. I will reach out soon.
            </div>
          )}

          <label className="form-field">
            <span>
              Name <strong aria-hidden="true">*</strong>
            </span>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'error-name' : undefined}
            />
            {errors.name && (
              <span className="field-error" id="error-name">
                {errors.name}
              </span>
            )}
          </label>

          <label className="form-field">
            <span>
              Email <strong aria-hidden="true">*</strong>
            </span>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'error-email' : undefined}
            />
            {errors.email && (
              <span className="field-error" id="error-email">
                {errors.email}
              </span>
            )}
          </label>

          <label className="form-field">
            <span>
              Phone number <strong aria-hidden="true">*</strong>
            </span>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'error-phone' : undefined}
            />
            {errors.phone && (
              <span className="field-error" id="error-phone">
                {errors.phone}
              </span>
            )}
          </label>

          <label className="form-field">
            <span>
              Business name <strong aria-hidden="true">*</strong>
            </span>
            <input
              name="business"
              type="text"
              value={formData.business}
              onChange={handleChange}
              aria-invalid={!!errors.business}
              aria-describedby={errors.business ? 'error-business' : undefined}
            />
            {errors.business && (
              <span className="field-error" id="error-business">
                {errors.business}
              </span>
            )}
          </label>

          <label className="form-field">
            <span>
              Type of website needed <strong aria-hidden="true">*</strong>
            </span>
            <select
              name="websiteType"
              value={formData.websiteType}
              onChange={handleChange}
              aria-invalid={!!errors.websiteType}
              aria-describedby={errors.websiteType ? 'error-websiteType' : undefined}
            >
              <option value="">Choose an option</option>
              <option value="One-page website">One-page website</option>
              <option value="Multi-page website">Multi-page website</option>
              <option value="Website redesign">Website redesign</option>
              <option value="Website maintenance">Website maintenance</option>
              <option value="Logo design">Logo design</option>
              <option value="Other">Other</option>
            </select>
            {errors.websiteType && (
              <span className="field-error" id="error-websiteType">
                {errors.websiteType}
              </span>
            )}
          </label>

          <label className="form-field">
            <span>
              Budget <strong aria-hidden="true">*</strong>
            </span>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              aria-invalid={!!errors.budget}
              aria-describedby={errors.budget ? 'error-budget' : undefined}
            >
              <option value="">Choose a budget</option>
              <option value="Under R2,500">Under R2,500</option>
              <option value="R2,500–R5,000">R2,500–R5,000</option>
              <option value="R5,000–R10,000">R5,000–R10,000</option>
              <option value="Over R10,000">Over R10,000</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
            {errors.budget && (
              <span className="field-error" id="error-budget">
                {errors.budget}
              </span>
            )}
          </label>

          <label className="form-field">
            <span>
              Message <strong aria-hidden="true">*</strong>
            </span>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'error-message' : undefined}
            />
            {errors.message && (
              <span className="field-error" id="error-message">
                {errors.message}
              </span>
            )}
          </label>

          <button type="submit" className="button button-primary submit-button">
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
