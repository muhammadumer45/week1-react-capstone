import TodoItem from './TodoItem'
import EmptyState from '../ui/EmptyState'

function TodoList({ todos, onToggle, onEdit, onDelete }) {
  if (todos.length === 0) {
    return <EmptyState message="No todos here. Add one above!" />
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList
