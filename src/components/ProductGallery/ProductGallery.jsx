import { useEffect, useState } from 'react'
import { fetchProducts } from '../../api/products'
import LoadingSpinner from '../ui/LoadingSpinner'
import ErrorMessage from '../ui/ErrorMessage'
import EmptyState from '../ui/EmptyState'
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'
import './ProductGallery.css'

/**
 * Product Gallery — Week 1 Capstone
 *
 * useEffect mental model:
 * 1. Component mounts → effect runs (empty deps [])
 * 2. We start fetching products
 * 3. Cleanup: if user leaves before fetch finishes, ignore the result
 *    (avoids "setState on unmounted component" / race conditions)
 */
function ProductGallery() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let cancelled = false

    async function loadProducts() {
      setLoading(true)
      setError(null)

      try {
        const data = await fetchProducts()
        // Only update state if this effect is still "alive"
        if (!cancelled) {
          setProducts(data)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Could not fetch products')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadProducts()

    // Cleanup function — runs when deps change or component unmounts
    return () => {
      cancelled = true
    }
  }, [reloadKey]) // re-fetch when user clicks "Try again"

  // Build unique category list from products
  const categories = [
    'all',
    ...new Set(products.map((product) => product.category)),
  ]

  // Search + category filter (client-side)
  const filtered = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.trim().toLowerCase())
    const matchesCategory =
      category === 'all' || product.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <section className="product-gallery" aria-labelledby="gallery-heading">
      <header className="section-header">
        <h2 id="gallery-heading">Product Gallery</h2>
        <p>Fake Store API · search · category filter · loading / error / empty UI</p>
      </header>

      <div className="gallery-controls">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter
          categories={categories}
          selected={category}
          onChange={setCategory}
        />
      </div>

      {loading && <LoadingSpinner label="Loading products…" />}

      {!loading && error && (
        <ErrorMessage
          message={error}
          onRetry={() => setReloadKey((k) => k + 1)}
        />
      )}

      {!loading && !error && products.length === 0 && (
        <EmptyState message="No products returned from the API." />
      )}

      {!loading && !error && products.length > 0 && filtered.length === 0 && (
        <EmptyState message="No products match your search or filter." />
      )}

      {!loading && !error && filtered.length > 0 && (
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductGallery
