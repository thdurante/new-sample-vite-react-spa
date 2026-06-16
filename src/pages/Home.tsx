import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>
        This is a standard Vite + React single-page application with client-side
        routing via <code>react-router-dom</code>. It mirrors the tech stack of a
        real Static Hosting site so we can verify framework detection end to end.
      </p>
      <p>
        Jump to <Link to="/products">Products</Link> or{' '}
        <Link to="/contact">Contact</Link>.
      </p>
    </section>
  )
}
