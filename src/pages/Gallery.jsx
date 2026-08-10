import { useState } from 'react'
import { ArtAI, ArtRobotics, ArtQuantum, ArtIoT, ArtVR, ArtSecurity } from '../components/TechArt.jsx'

const items = [
  { id: 'ai', title: 'Neural pathways', caption: 'A layered network — the abstraction behind modern AI models.', Art: ArtAI },
  { id: 'robotics', title: 'Actuated form', caption: 'A generalized robotic frame: sensing head, jointed arms, mobile base.', Art: ArtRobotics },
  { id: 'quantum', title: 'Superposed states', caption: 'Overlapping orbits standing in for a qubit\'s many simultaneous states.', Art: ArtQuantum },
  { id: 'iot', title: 'Mesh of things', caption: 'A hub-and-spoke sensor network — the shape of most IoT deployments.', Art: ArtIoT },
  { id: 'vr', title: 'Field of view', caption: 'A stylized headset representing immersive and mixed-reality devices.', Art: ArtVR },
  { id: 'security', title: 'The perimeter', caption: 'A shield and lock — the enduring shorthand for digital defense.', Art: ArtSecurity },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <div>
      <section className="border-b border-edge px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4">Gallery</p>
          <h1 className="font-display text-3xl font-bold text-text md:text-5xl">Visual notes from six domains.</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Original illustrations built for this project, one per technology domain. Select any image to view it
            larger with its caption.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ id, title, caption, Art }) => (
            <button
              key={id}
              onClick={() => setActive({ id, title, caption, Art })}
              className="card overflow-hidden p-0 text-left"
            >
              <Art className="h-48 w-full" />
              <div className="p-5">
                <h3 className="font-display text-sm font-bold text-text">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{caption}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div
            className="max-w-2xl overflow-hidden rounded-lg border border-edge bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <active.Art className="w-full" />
            <div className="flex items-start justify-between gap-4 p-6">
              <div>
                <h3 className="font-display text-base font-bold text-text">{active.title}</h3>
                <p className="mt-1 text-sm text-muted">{active.caption}</p>
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="font-display text-xs uppercase tracking-widest text-signal"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
