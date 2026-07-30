import { useState } from 'react'

const steps = [
  {
    id: 'consultation',
    title: 'Consultation',
    summary: 'We discuss your business, goals, audience, preferred style and the features your website needs.',
  },
  {
    id: 'design',
    title: 'Design',
    summary: 'I create the layout, colours, typography and visual direction for the website.',
  },
  {
    id: 'development',
    title: 'Development',
    summary: 'I build the website, add the content, images, responsive layout and interactive features.',
  },
  {
    id: 'review',
    title: 'Review',
    summary: 'You review the website and provide feedback before final changes are completed.',
  },
  {
    id: 'launch',
    title: 'Launch',
    summary: 'Once approved, the website is tested, connected to hosting and published online.',
  },
]

function Process() {
  const [activeStep, setActiveStep] = useState(steps[0].id)

  return (
    <section id="process" className="section process-section">
      {/* Future React Bits animated timeline can be added to the process step layout */}
      <div className="section-header">
        <p className="eyebrow">Process</p>
        <h2>How a Northbound Digital website comes together</h2>
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
              <span className="process-step-number">{index + 1}</span>
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
