function CategoryFilter({ categories, selected, onChange }) {
  return (
    <div className="category-filter" role="group" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={selected === cat ? 'is-active' : ''}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
