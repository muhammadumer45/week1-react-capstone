import { useState } from 'react'
import TodoApp from './components/TodoApp/TodoApp'
import ProductGallery from './components/ProductGallery/ProductGallery'
import './App.css'

const TABS = [
  { id: 'todos', label: 'Todo App' },
  { id: 'products', label: 'Product Gallery' },
]

function App() {
  const [tab, setTab] = useState('todos')

  return (
    <div className="app">
      <header className="app-header">
        <p className="eyebrow">Week 1 Capstone · React Beginner</p>
        <h1>Daily Practice Lab</h1>
        <p className="lede">
          useState · useEffect · localStorage · fetch · search &amp; filter
        </p>

        <nav className="tabs" aria-label="App sections">
          {TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={tab === item.id ? 'is-active' : ''}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="app-main">
        {tab === 'todos' ? <TodoApp /> : <ProductGallery />}
      </main>

      <footer className="app-footer">
        <p>Teacher tasks · persist todos · Fake Store API · responsive layout</p>
      </footer>
    </div>
  )
}

export default App
