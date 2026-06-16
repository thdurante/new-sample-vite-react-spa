import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h1>404 — Not found</h1>
      <p>
        This route is handled client-side. <Link to="/">Back to Home</Link>.
      </p>
    </section>
  )
}
