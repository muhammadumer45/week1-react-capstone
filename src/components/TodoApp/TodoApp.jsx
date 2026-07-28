import { useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilters from './TodoFilters'
import './TodoApp.css'

/**
 * Todo App — start + completed date/time, localStorage, filters
 */
function TodoApp() {
  const [todos, setTodos] = useLocalStorage('week1-todos-v2', [])
  const [filter, setFilter] = useState('all')

  function addTodo(text) {
    const trimmed = text.trim()
    if (!trimmed) return

    const now = new Date().toISOString()

    const newTodo = {
      id: crypto.randomUUID(),
      text: trimmed,
      completed: false,
      createdAt: now,
      completedAt: null,
    }

    setTodos((prev) => [...prev, newTodo])
  }

  function toggleTodo(id) {
    const now = new Date().toISOString()

    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== id) return todo

        const willComplete = !todo.completed
        return {
          ...todo,
          completed: willComplete,
          // Save completed date/time only when marked done
          completedAt: willComplete ? now : null,
        }
      })
    )
  }

  function editTodo(id, newText) {
    const trimmed = newText.trim()
    if (!trimmed) return

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: trimmed } : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.completed).length

  return (
    <section className="todo-app" aria-labelledby="todo-heading">
      <header className="section-header">
        <h2 id="todo-heading">Todo App</h2>
        <p>Start time · complete time · filters · saved in localStorage</p>
      </header>

      <TodoForm onAdd={addTodo} />
      <TodoFilters filter={filter} onChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />

      <p className="todo-count">
        {activeCount} active · {todos.length} total
      </p>
    </section>
  )
}

export default TodoApp
