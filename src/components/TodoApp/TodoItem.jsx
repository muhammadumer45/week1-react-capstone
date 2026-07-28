import { useState } from 'react'
import { formatDateTime } from '../../utils/formatDateTime'

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.text)

  const started = formatDateTime(todo.createdAt)
  const finished = formatDateTime(todo.completedAt)

  function handleSave() {
    onEdit(todo.id, draft)
    setIsEditing(false)
  }

  function handleCancel() {
    setDraft(todo.text)
    setIsEditing(false)
  }

  return (
    <li className={`todo-item ${todo.completed ? 'is-done' : ''}`}>
      <div className="todo-item-top">
        <label className="todo-check">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
          />
          <span className="checkmark" aria-hidden="true" />
        </label>

        {isEditing ? (
          <div className="todo-edit">
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSave()
                if (e.key === 'Escape') handleCancel()
              }}
              autoFocus
            />
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" className="btn-ghost" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <>
            <div className="todo-main">
              <span className="todo-text">{todo.text}</span>
              <div className="todo-meta">
                <p className="meta-row">
                  <span className="meta-label">Started</span>
                  <span>{started || '—'}</span>
                </p>
                {todo.completed && (
                  <p className="meta-row meta-done">
                    <span className="meta-label">Completed</span>
                    <span>{finished || '—'}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="todo-actions">
              <button type="button" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button
                type="button"
                className="btn-danger"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </li>
  )
}

export default TodoItem
