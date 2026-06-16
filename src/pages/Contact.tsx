export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>This is a static contact form — it does not submit anywhere.</p>
      <form
        onSubmit={(event) => {
          event.preventDefault()
        }}
        style={{ display: 'grid', gap: '0.5rem', maxWidth: '320px' }}
      >
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="you@example.com" />
        <textarea name="message" placeholder="Message" rows={4} />
        <button type="submit">Send</button>
      </form>
    </section>
  )
}
