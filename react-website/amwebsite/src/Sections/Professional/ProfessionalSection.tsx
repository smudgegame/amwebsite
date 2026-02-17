import './Professional.css'
import ProfileCard from './ProfileCard'
import profilePic from '../../assets/profile.png'

export default function ProfessionalSection() {
  return (
    <section className="professional">
      <ProfileCard
        name="Aaron Margraff"
        role="Software Engineer"
        photoSrc={profilePic}
        status="T-CETRA"
        location="Dublin, OH, United States"
      />

      <div className="professional-content">
        <pre className="terminal">
          &gt; building systems{"\n"}
          &gt; learning relentlessly{"\n"}
          &gt; shipping carefully{"\n"}
          &gt; <span className="cursor">_</span>
        </pre>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
          Suspendisse lectus tortor, dignissim sit amet.
        </p>
        <p>
          More professional details go here. Add links, bullet points, whatever you
          need.
        </p>
      </div>
    </section>
  )
}
