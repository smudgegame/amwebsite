import type { CSSProperties } from 'react'
import './Professional.css'
import './Terminal.css'
import ProfileCard from './ProfileCard'
import ProfessionalDirectory from './ProfessionalDirectory'
import profilePic from '../../assets/profile.png'

type TerminalLine = {
  text: string
  cursor?: boolean
}

type TerminalLineStyle = CSSProperties & {
  '--line-width': string
  '--type-steps': string
  '--type-duration': string
  '--type-delay': string
}

const TERMINAL_LINES: TerminalLine[] = [
  { text: '> building systems' },
  { text: '> learning relentlessly' },
  { text: '> shipping carefully' },
  { text: '> ', cursor: true },
]

const TERMINAL_START_DELAY_MS = 200
const TERMINAL_LINE_GAP_MS = 160
const TERMINAL_CHAR_STEP_MS = 48
const TERMINAL_MIN_DURATION_MS = 260
const TERMINAL_MAX_DURATION_MS = 1500

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max))
}

function buildTerminalLineStyles(lines: TerminalLine[]): TerminalLineStyle[] {
  let nextDelayMs = TERMINAL_START_DELAY_MS

  return lines.map(line => {
    const rawChars = line.text.length + (line.cursor ? 1 : 0)
    const steps = Math.max(1, rawChars + 1)
    const durationMs = clamp(
      steps * TERMINAL_CHAR_STEP_MS,
      TERMINAL_MIN_DURATION_MS,
      TERMINAL_MAX_DURATION_MS,
    )

    const style: TerminalLineStyle = {
      '--line-width': `${steps}ch`,
      '--type-steps': `${steps}`,
      '--type-duration': `${durationMs}ms`,
      '--type-delay': `${nextDelayMs}ms`,
    }

    nextDelayMs += durationMs + TERMINAL_LINE_GAP_MS
    return style
  })
}

export default function ProfessionalSection() {
  const lineStyles = buildTerminalLineStyles(TERMINAL_LINES)

  return (
    <section className="professional">
      <div className="professional-top">
        <ProfileCard
          name="Aaron Margraff"
          role="Software Engineer"
          photoSrc={profilePic}
          status="T-CETRA"
          location="Dublin, OH, United States"
        />

        <div className="professional-content">
          <pre className="terminal" aria-label="Typed professional summary">
            {TERMINAL_LINES.map((line, index) => (
              <span key={`${line.text}-${index}`} className="terminal-line" style={lineStyles[index]}>
                {line.text}
                {line.cursor ? <span className="cursor">_</span> : null}
              </span>
            ))}
          </pre>
        </div>
      </div>

      <ProfessionalDirectory />
    </section>
  )
}
