import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SignalDivider from '../components/SignalDivider.jsx'
import { technologies } from '../data/technologies.js'

const bootLines = [
  '> initializing frontier.sys ...',
  '> scanning horizon for signals ...',
  '> 6 domains detected: AI · ROBOTICS · QUANTUM · IOT · VR · SEC',
  '> connection established. welcome.',
]

const predictions = [
  {
    year: '2026–27',
    title: 'Agentic AI goes mainstream',
    text: 'AI systems shift from answering prompts to completing multi-step tasks with limited supervision, inside real software tools.',
  },
  {
    year: '2028–30',
    title: 'Edge intelligence normalizes',
    text: 'Small, efficient models running on-device make IoT and wearables genuinely responsive without a round trip to the cloud.',
  },
  {
    year: '2030+',
    title: 'Quantum reaches useful scale',
    text: 'Error-corrected qubits cross the threshold needed for chemistry and materials simulation beyond classical reach.',
  },
]

export default function Home() {
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= bootLines.length) return
    const t = setTimeout(() => setLineIndex((i) => i + 1), 550)
    return () => clearTimeout(t)
  }, [lineIndex])

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-edge bg-grid bg-grid">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-base/60 to-base" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="eyebrow mb-6">Field notes on what comes next</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.15] text-text md:text-6xl">
            Six signals from the edge of technology.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Frontier tracks the emerging technologies reshaping software and society — artificial intelligence,
            robotics, quantum computing, the Internet of Things, immersive reality and cybersecurity — and reads
            the signal out of the noise.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/technologies" className="btn-primary">Explore the technologies</Link>
            <Link to="/about" className="btn-secondary">About this project</Link>
          </div>

          <div className="mt-16 max-w-xl rounded-lg border border-edge bg-surface/80 p-5 font-display text-xs leading-loose text-signal shadow-lg shadow-black/40 md:text-sm">
            {bootLines.slice(0, lineIndex).map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            {lineIndex < bootLines.length && <span className="animate-blink">_</span>}
          </div>
        </div>
      </section>

      {/* Domain grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-3">01 — Domains tracked</p>
            <h2 className="font-display text-2xl font-bold text-text md:text-3xl">Where we're watching</h2>
          </div>
          <Link to="/technologies" className="hidden font-display text-xs uppercase tracking-widest text-signal hover:text-white md:block">
            View all →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((t) => (
            <Link key={t.id} to="/technologies" className="card group block">
              <span className="font-display text-xs tracking-widest text-amber">{t.code}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-text">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.summary}</p>
              <span className="mt-4 inline-block font-display text-xs uppercase tracking-widest text-signal opacity-0 transition-opacity group-hover:opacity-100">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <SignalDivider />
      </div>

      {/* Predictions timeline */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="eyebrow mb-3">02 — Forward signal</p>
        <h2 className="font-display text-2xl font-bold text-text md:text-3xl">Predictions for the future of IT</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          A rough timeline of where these domains seem to be heading, based on current research trajectories and
          shipping products rather than speculation.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {predictions.map((p) => (
            <div key={p.year} className="border-l-2 border-signal/40 pl-5">
              <span className="font-display text-xs tracking-widest text-signal">{p.year}</span>
              <h3 className="mt-2 font-display text-base font-bold text-text">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
