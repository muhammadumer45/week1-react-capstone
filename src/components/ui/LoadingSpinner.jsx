function LoadingSpinner({ label = 'Loading…' }) {
  return (
    <div className="loading-spinner" role="status" aria-live="polite">
      <span className="spinner" aria-hidden="true" />
      <p>{label}</p>
    </div>
  )
}

export default LoadingSpinner
