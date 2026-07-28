const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
]

function TodoFilters({ filter, onChange }) {
  return (
    <div className="todo-filters" role="group" aria-label="Filter todos">
      {FILTERS.map((item) => (
        <button
          key={item.id}
          type="button"
          className={filter === item.id ? 'is-active' : ''}
          onClick={() => onChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default TodoFilters
