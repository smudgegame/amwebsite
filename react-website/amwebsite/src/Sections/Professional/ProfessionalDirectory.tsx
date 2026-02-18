import { useEffect, useMemo, useRef, useState } from 'react'
import FocusPage from './FocusPage'
import { DIRECTORY_PAGES, getFocusSectionId } from './directoryPages'
import './ProfessionalDirectory.css'

export default function ProfessionalDirectory() {
  const [activeId, setActiveId] = useState(DIRECTORY_PAGES[0].id)
  const [pendingSectionTarget, setPendingSectionTarget] = useState<string | null>(null)
  const focusBodyRef = useRef<HTMLDivElement>(null)

  const activePage = useMemo(
    () => DIRECTORY_PAGES.find(page => page.id === activeId) ?? DIRECTORY_PAGES[0],
    [activeId],
  )

  function scrollToSection(targetId: string) {
    const focusBody = focusBodyRef.current
    const target = document.getElementById(targetId)
    if (!focusBody || !target) {
      return
    }

    const focusBodyRect = focusBody.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const nextTop = focusBody.scrollTop + (targetRect.top - focusBodyRect.top) - 6

    focusBody.scrollTo({
      top: Math.max(0, nextTop),
      behavior: 'smooth',
    })
  }

  function onPageClick(pageId: string) {
    setActiveId(pageId)
  }

  function onSectionClick(pageId: string, sectionId: string) {
    const targetId = getFocusSectionId(pageId, sectionId)

    if (pageId !== activeId) {
      setActiveId(pageId)
      setPendingSectionTarget(targetId)
      return
    }

    scrollToSection(targetId)
  }

  useEffect(() => {
    if (!pendingSectionTarget) {
      return
    }

    const id = requestAnimationFrame(() => {
      scrollToSection(pendingSectionTarget)
      setPendingSectionTarget(null)
    })

    return () => cancelAnimationFrame(id)
  }, [pendingSectionTarget, activeId])

  return (
    <section className="professional-directory" aria-label="Professional details">
      <aside className="professional-directory__nav ui-panel" aria-label="Professional sections">
        <h2 className="professional-directory__heading ui-eyebrow">Directory</h2>
        <nav>
          {DIRECTORY_PAGES.map(page => {
            const isActive = page.id === activePage.id

            return (
              <div key={page.id} className="professional-directory__group">
                <button
                  type="button"
                  className={`professional-directory__link${isActive ? ' is-active' : ''}`}
                  onClick={() => onPageClick(page.id)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {page.navLabel}
                </button>

                {isActive ? (
                  <ul className="professional-directory__subnav">
                    {page.sections.map(section => (
                      <li key={section.id}>
                        <button
                          type="button"
                          className="professional-directory__sublink"
                          onClick={() => onSectionClick(page.id, section.id)}
                        >
                          {section.navLabel}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            )
          })}
        </nav>
      </aside>

      <FocusPage
        bodyRef={focusBodyRef}
        pageId={activePage.id}
        title={activePage.title}
        intro={activePage.intro}
        sections={activePage.sections}
      />
    </section>
  )
}
