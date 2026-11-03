import SpecularButton from './SpecularButton'
const features = [
  { id: 'design', label: 'Professional premium design',},
  { id: 'mobile', label: 'Mobile-friendly websites',},
  { id: 'service', label: 'Personal service',},
  { id: 'communication', label: 'Clear communication',},
  { id: 'pricing', label: 'Affordable pricing',},
  { id: 'speed', label: 'Fast turnaround',},
  { id: 'support', label: 'Easy updates',},
  { id: 'ongoing', label: 'Ongoing support',},
  { id: 'seo', label: 'SEO-friendly',},
  { id: 'secure', label: 'Secure and reliable setup',},
]

function WhyChooseMe() {
  return (
    <section id="why" className="section why-section">
      <div className="section-header">
        <p className="eyebrow">Why choose Northbound Digital</p>
        <h2>Premium web design with a personal approach</h2>
        <p>
          I combine trusted design principles, responsive development, and direct client support so
          your website feels consistent and easy to manage.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
         <SpecularButton
  key={feature.id}
  className="feature-card"
  size="lg"
  radius={24}
  textColor="#08203f"
  lineColor="#ffffff"
  baseColor="#dfe7f5"
  autoAnimate={true}
>
  {feature.label}
</SpecularButton>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseMe
