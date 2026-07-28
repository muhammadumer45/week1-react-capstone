function EmptyState({ message }) {
  return (
    <div className="empty-state">
      <p>{message || 'Nothing to show yet.'}</p>
    </div>
  )
}

export default EmptyState
