import type { ReactNode } from 'react'

export type FocusSection = {
  id: string
  navLabel: string
  heading: string
  content: ReactNode
}

export type DirectoryPage = {
  id: string
  navLabel: string
  title: string
  intro: string
  sections: FocusSection[]
}

export function getFocusSectionId(pageId: string, sectionId: string): string {
  return `focus-${pageId}-${sectionId}`
}

export const DIRECTORY_PAGES: DirectoryPage[] = [
  {
    id: 'education',
    navLabel: 'Education',
    title: 'Education',
    intro: 'Formal training, certifications, and continuous learning focus areas.',
    sections: [
      {
        id: 'high-school',
        navLabel: 'High School',
        heading: 'High School ',
        content: (
          <p>
            Highland High School, Graduated 2008. Coursework focused on general education with an emphasis on mathematics and science.
          </p>
        ),
      },
      {
        id: 'undergraduate',
        navLabel: 'Undergraduate',
        heading: 'Undergraduate',
        content: (
          <div>
            <p>B.S. in Mathematics Education, Youngstown State University graduated 2012</p>
            <p>
              Coursework focus: algorithms, operating systems, networks, and software design.
            </p>
          </div>
        ),
      },
      {
        id: 'graduate-school',
        navLabel: 'Graduate School',
        heading: 'Graduate School',
        content: (
          <p>
            Graduate-level learning currently focused on scalable system design and advanced
            software architecture patterns.
          </p>
        ),
      },
      {
        id: 'professional-development',
        navLabel: 'Professional Development',
        heading: 'Professional Development',
        content: (
          <ul>
            <li>Distributed systems and reliability practices</li>
            <li>Multiplayer networking and real-time synchronization</li>
            <li>Developer tooling and workflow automation</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: 'experience',
    navLabel: 'Employment History',
    title: 'Employment History',
    intro: 'Roles and project ownership across engineering organizations.',
    sections: [
      {
        id: 'tcetra',
        navLabel: 'T-CETRA',
        heading: 'T-CETRA | Software Engineer',
        content: (
          <ul>
            <li>Built and maintained production systems with a reliability-first mindset.</li>
            <li>
              Partnered cross-functionally to deliver scoped features and operational improvements.
            </li>
            <li>Contributed to code quality, documentation, and maintainability standards.</li>
          </ul>
        ),
      },
      {
        id: 'previous-roles',
        navLabel: 'Previous Roles',
        heading: 'Previous Roles',
        content: (
          <p>
            Prior engineering positions focused on shipping customer-facing features, reducing
            operational overhead, and strengthening development practices.
          </p>
        ),
      },
      {
        id: 'notable-work',
        navLabel: 'Notable Work',
        heading: 'Notable Work',
        content: (
          <ul>
            <li>Core platform improvements for reliability and observability</li>
            <li>Workflow simplification for developer productivity</li>
            <li>Cross-team feature delivery from design through production support</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: 'skills',
    navLabel: 'Professional Skills',
    title: 'Professional Skills',
    intro: 'Grouped by depth: core strengths, proven proficiency, and rapid ramp-up tools.',
    sections: [
      {
        id: 'core-skills',
        navLabel: 'Core Skills',
        heading: 'Core Skills',
        content: (
          <ul>
            <li>Systems thinking and architecture</li>
            <li>Problem decomposition and debugging</li>
            <li>Technical communication</li>
          </ul>
        ),
      },
      {
        id: 'proficient-skills',
        navLabel: 'Proficient Skills',
        heading: 'Proficient Skills',
        content: (
          <ul>
            <li>TypeScript / JavaScript</li>
            <li>React</li>
            <li>API and backend integration</li>
          </ul>
        ),
      },
      {
        id: 'ramp-up-skills',
        navLabel: 'Fast Ramp-Up Skills',
        heading: 'Fast Ramp-Up Skills',
        content: (
          <ul>
            <li>New frameworks and internal tools</li>
            <li>Domain-specific platforms</li>
            <li>Automation and scripting workflows</li>
          </ul>
        ),
      },
    ],
  },
]
