import type { RefObject } from 'react'
import { getFocusSectionId, type FocusSection } from './directoryPages'

type FocusPageProps = {
  bodyRef: RefObject<HTMLDivElement | null>
  pageId: string
  title: string
  intro: string
  sections: FocusSection[]
}

export default function FocusPage({ bodyRef, pageId, title, intro, sections }: FocusPageProps) {
  return (
    <article className="focus-page ui-panel" aria-live="polite">
      <header className="focus-page__header">
        <h3 className="focus-page__title">{title}</h3>
        <p className="focus-page__intro">{intro}</p>
      </header>

      <div className="focus-page__body" ref={bodyRef}>
        {sections.map(section => (
          <section
            id={getFocusSectionId(pageId, section.id)}
            key={section.id}
            className="focus-page__section"
          >
            <h4 className="focus-page__section-title">{section.heading}</h4>
            <div className="focus-page__section-content">{section.content}</div>
          </section>
        ))}
      </div>
    </article>
  )
}
