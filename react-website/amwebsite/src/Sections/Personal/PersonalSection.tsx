import './personal.css'

export default function PersonalSection() {
  return (
    <section className="personal">
      <h2>About Me</h2>
      <p>
        I’m a builder, a dad, a game tinkerer, and someone who cares
        deeply about understanding how things work.
      </p>

      <p>
        Here’s a little about me personally: hobbies, family, interests.
      </p>
      <p>
        Images, photos, and short stories go here. Bright and happy section!
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div style={{ flex: 1, background: '#ffc', height: '100px' }}>Image 1</div>
        <div style={{ flex: 1, background: '#cfc', height: '100px' }}>Image 2</div>
        <div style={{ flex: 1, background: '#ccf', height: '100px' }}>Image 3</div>
      </div>
    </section>
  )
}
