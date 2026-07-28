function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </article>
  )
}

export default ProductCard
