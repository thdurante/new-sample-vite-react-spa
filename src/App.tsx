import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Client-side routing across several routes. Because this is a SPA, the edge
// must rewrite unknown paths to /index.html (DeployHQ "SPA mode") or a hard
// refresh on /about, /products, etc. would 404. Detection reports spa_mode=true
// for spa_vite_react, which is what wires that rewrite up.
export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <span className="app__brand">New Sample · Vite + React SPA</span>
        <nav className="app__nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="app__footer">
        Sample project for DeployHQ Static Hosting detection testing.
      </footer>
    </div>
  )
}
