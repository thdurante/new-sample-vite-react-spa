export default function About() {
  return (
    <section>
      <h1>About</h1>
      <p>
        A deliberately small app that exercises a real router so a hard refresh
        on a non-root path (e.g. <code>/about</code>) only works when the host is
        configured for SPA fallback. Useful for confirming the deploy serves both
        the index and deep-linked routes.
      </p>
    </section>
  )
}
