/**
 * Clean fetch helpers — keep API logic OUT of components.
 * Teacher task: "Refactor fetch logic into a clean function"
 */

const BASE_URL = 'https://fakestoreapi.com'

/**
 * Fetch all products from Fake Store API
 * @returns {Promise<Array>} list of products
 */
export async function fetchProducts() {
  const response = await fetch(`${BASE_URL}/products`)

  if (!response.ok) {
    throw new Error(`Failed to load products (${response.status})`)
  }

  const data = await response.json()
  return data
}

/**
 * Fetch all product categories
 * @returns {Promise<string[]>}
 */
export async function fetchCategories() {
  const response = await fetch(`${BASE_URL}/products/categories`)

  if (!response.ok) {
    throw new Error(`Failed to load categories (${response.status})`)
  }

  return response.json()
}
