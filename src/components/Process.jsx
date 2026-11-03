import { useState } from 'react'

const steps = [
  {
    id: 'consultation',
    title: '1. Consultation',
    summary: 'We discuss your business, goals, audience, preferred style and the features your website needs.',
  },
  {
    id: 'design',
    title: '2. Design',
    summary: 'I create the layout, colours, typography and visual direction for the website.',
  },
  {
    id: 'development',
    title: '3. Development',
    summary: 'I build the website, add the content, images, responsive layout and interactive features.',
  },
  {
    id: 'review',
    title: '4. Review',
    summary: 'You review the website and provide feedback before final changes are completed.',
  },
  {
    id: 'launch',
    title: '5. Launch',
    summary: 'Once approved, the website is tested, connected to hosting and published online.',
  },
]

function Process() {
  const [activeStep, setActiveStep] = useState(steps[0].id)

  return (
    <section id="process" className="section process-section">
      <div className="section-header">
        <p className="eyebrow">A simple process</p>
        <h2>Clear from first conversation to confident launch.</h2>
        <p>
          A straightforward process that keeps you involved, informed, and confident from first
          conversation to website launch.
        </p>
      </div>

      <div className="process-grid">
        {steps.map((step, index) => {
          const isActive = activeStep === step.id
          return (
            <button
              key={step.id}
              type="button"
              className={`process-step ${isActive ? 'active' : ''}`}
              onClick={() => setActiveStep(step.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActiveStep(step.id)
                }
              }}
            >
              <span className="process-step-number">0{index + 1}</span>
              <div className="process-step-copy">
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default Process
