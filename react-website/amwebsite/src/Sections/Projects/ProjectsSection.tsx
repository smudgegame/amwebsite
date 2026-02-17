import './projects.css'

export default function ProjectsSection() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3>Godot Multiplayer FPS</h3>
          <p>Experimenting with ideas, using mathematics, and learning software.</p>
        </div>

        <div className="project-card">
          <h3>Angular Website</h3>
          <p>My original personal site — archived but relavant.</p>
        </div>
      </div>

      <p>Here are some fun projects I’ve been working on:</p>
      <ul>
        <li>Multiplayer FPS (Godot)</li>
        <li>Spaceship flying game (Godot)</li>
        <li>Angular website (archived)</li>
        <li>LaTeX / technical docs</li>
      </ul>
      <p>Click to expand this section.</p>
    </section>
  )
}
