/**
 * Format ISO / timestamp into friendly date + time
 * Example: 29 Jul 2026 · 12:10 AM
 */
export function formatDateTime(value) {
  if (!value) return null

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null

  const datePart = date.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  const timePart = date.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  })

  return `${datePart} · ${timePart}`
}
