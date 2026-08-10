import SignalDivider from '../components/SignalDivider.jsx'

const values = [
  {
    title: 'Signal over hype',
    text: 'Every domain is explained in terms of what actually ships and works today, with speculation clearly labeled as such.',
  },
  {
    title: 'Plain language',
    text: 'Technical ideas are translated for readers who are curious but not necessarily specialists in every domain.',
  },
  {
    title: 'Built in the open',
    text: 'This site is itself a demonstration of the frontend practices it writes about — version controlled and deployed publicly.',
  },
]

const timeline = [
  { step: '01', label: 'Research', text: 'Reviewing current developments across six technology domains.' },
  { step: '02', label: 'Design', text: 'Structuring content around a consistent visual and information system.' },
  { step: '03', label: 'Build', text: 'Implementing the frontend in React with reusable, responsive components.' },
  { step: '04', label: 'Ship', text: 'Version controlling the project and deploying it as a public, working site.' },
]

export default function About() {
  return (
    <div>
      <section className="border-b border-edge px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4">About Frontier</p>
          <h1 className="font-display text-3xl font-bold text-text md:text-5xl">
            A field guide, not a press release.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Frontier was built as an academic web development project exploring how emerging technologies —
            artificial intelligence, robotics, quantum computing, IoT, virtual reality and cybersecurity — are
            actually changing how software gets built and used. The goal is to explain each domain clearly enough
            that a newcomer can follow along, without flattening the nuance that makes each field interesting.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="eyebrow mb-6">What we care about</p>
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="card">
              <h3 className="font-display text-base font-bold text-text">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6">
        <SignalDivider />
      </div>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <p className="eyebrow mb-6">How this project was built</p>
        <div className="space-y-8">
          {timeline.map((t) => (
            <div key={t.step} className="flex gap-6">
              <span className="font-display text-sm font-bold text-signal">{t.step}</span>
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-text">{t.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
