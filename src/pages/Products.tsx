const PRODUCTS = [
  { id: 'starter', name: 'Starter', blurb: 'A single static page.' },
  { id: 'team', name: 'Team', blurb: 'Multiple routes, shared layout.' },
  { id: 'scale', name: 'Scale', blurb: 'Everything in Team, plus a contact form.' },
]

export default function Products() {
  return (
    <section>
      <h1>Products</h1>
      <ul className="product-list">
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>
            <div>{product.blurb}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
