import { useState } from 'react'
import { technologies } from '../data/technologies.js'

export default function Technologies() {
  const [openId, setOpenId] = useState(technologies[0].id)

  return (
    <div>
      <section className="border-b border-edge px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4">Technologies</p>
          <h1 className="font-display text-3xl font-bold text-text md:text-5xl">Six domains, in depth.</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Each entry below covers what the technology is, where it currently stands, and where it's applied in
            practice today.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-4">
          {technologies.map((t) => {
            const isOpen = openId === t.id
            return (
              <div key={t.id} className="rounded-lg border border-edge bg-surface">
                <button
                  onClick={() => setOpenId(isOpen ? null : t.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4">
                    <span className="font-display text-xs tracking-widest text-amber">{t.code}</span>
                    <span className="font-display text-base font-bold text-text md:text-lg">{t.name}</span>
                  </span>
                  <span className={`font-display text-signal transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>

                {isOpen && (
                  <div className="border-t border-edge px-6 py-6">
                    <p className="text-sm leading-relaxed text-muted md:text-base">{t.detail}</p>
                    <p className="eyebrow mt-6 mb-3">Common applications</p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {t.applications.map((a) => (
                        <li key={a} className="flex items-center gap-2 text-sm text-text">
                          <span className="h-1 w-1 rounded-full bg-signal" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
