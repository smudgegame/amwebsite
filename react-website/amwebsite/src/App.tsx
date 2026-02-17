import { Fragment } from 'react'
import type { ComponentType, CSSProperties } from 'react'
import ProfessionalSection from './Sections/Professional/ProfessionalSection'
import ProjectsSection from './Sections/Projects/ProjectsSection'
import PersonalSection from './Sections/Personal/PersonalSection'

type SectionConfig = {
  id: string
  Component: ComponentType
  bg: string
}

type DividerStyle = CSSProperties & {
  '--from-color': string
  '--to-color': string
}

const SECTIONS: SectionConfig[] = [
  { id: 'professional', Component: ProfessionalSection, bg: '#0b0e14' },
  { id: 'projects', Component: ProjectsSection, bg: '#0f172a' },
  { id: 'personal', Component: PersonalSection, bg: '#182744' },
]

function getDividerStyle(fromColor: string, toColor: string): DividerStyle {
  return {
    '--from-color': fromColor,
    '--to-color': toColor,
  }
}

function App() {
  return (
    <main className="page">
      <div className="stack">
        {SECTIONS.map(({ id, Component, bg }, index) => {
          const nextBg = SECTIONS[index + 1]?.bg

          return (
            <Fragment key={id}>
              <div className="stack-section" style={{ backgroundColor: bg }}>
                <Component />
              </div>

              {nextBg ? (
                <div
                  className="section-divider"
                  aria-hidden="true"
                  style={getDividerStyle(bg, nextBg)}
                />
              ) : null}
            </Fragment>
          )
        })}
      </div>
    </main>
  )
}

export default App
