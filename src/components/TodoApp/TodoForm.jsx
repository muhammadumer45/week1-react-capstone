import { useState } from 'react'

/**
 * Controlled input — React owns the value via useState
 */
function TodoForm({ onAdd }) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!text.trim()) {
      setError('Please enter a todo')
      return
    }

    setError('')
    onAdd(text)
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          if (error) setError('')
        }}
        placeholder="Type a task… (start time saves automatically)"
        aria-label="New todo"
        aria-invalid={Boolean(error)}
      />
      <button type="submit">Add task</button>
      {error && <p className="field-error">{error}</p>}
    </form>
  )
}

export default TodoForm
