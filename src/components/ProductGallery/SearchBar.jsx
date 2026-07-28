function SearchBar({ value, onChange }) {
  return (
    <label className="search-bar">
      <span className="sr-only">Search by title</span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by title…"
      />
    </label>
  )
}

export default SearchBar
