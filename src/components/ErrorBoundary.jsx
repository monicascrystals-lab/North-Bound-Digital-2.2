import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    // Log detailed error info to the console for diagnosis
    // This will surface the original stack and component stack
    // for the developer while keeping the UI from going blank.
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '2rem', color: '#842029', background: '#fff5f5' }}>
          <h2>Something went wrong rendering a component</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{String(this.state.error)}</pre>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
