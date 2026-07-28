import { useState, useEffect } from 'react'

/**
 * Sync React state with localStorage.
 *
 * Mental model:
 * - First render: read saved value from localStorage (or use fallback)
 * - Whenever `value` changes: write it back to localStorage
 *
 * Dependency array: [key, value]
 * - We re-run the effect when key or value changes
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved !== null ? JSON.parse(saved) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Could not save to localStorage:', error)
    }
  }, [key, value])

  return [value, setValue]
}
