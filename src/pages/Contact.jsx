import { useState } from 'react'

const initial = { name: '', email: '', topic: 'General inquiry', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email.'
    if (!form.message.trim()) next.message = 'Please add a short message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // Frontend-only demo: no backend is wired up, so we just confirm receipt locally.
    setStatus('sent')
    setForm(initial)
  }

  return (
    <div>
      <section className="border-b border-edge px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="font-display text-3xl font-bold text-text md:text-5xl">Send a signal.</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            Questions, corrections or topic requests — the form below reaches the team. This is a frontend
            demonstration, so submissions are validated locally rather than sent to a live inbox.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16">
        {status === 'sent' && (
          <div className="mb-8 rounded-lg border border-signal/40 bg-signal/10 px-5 py-4 text-sm text-signal">
            Message received. Thanks for writing in — we'll follow up by email.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block font-display text-xs uppercase tracking-widest text-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="input-field"
              placeholder="Ada Lovelace"
            />
            {errors.name && <p className="mt-2 text-xs text-amber">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-display text-xs uppercase tracking-widest text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="input-field"
              placeholder="you@domain.com"
            />
            {errors.email && <p className="mt-2 text-xs text-amber">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="topic" className="mb-2 block font-display text-xs uppercase tracking-widest text-muted">
              Topic
            </label>
            <select
              id="topic"
              name="topic"
              value={form.topic}
              onChange={handleChange}
              className="input-field"
            >
              <option>General inquiry</option>
              <option>AI</option>
              <option>Robotics</option>
              <option>Quantum computing</option>
              <option>IoT</option>
              <option>VR / AR</option>
              <option>Cybersecurity</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block font-display text-xs uppercase tracking-widest text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="input-field resize-none"
              placeholder="What's on your mind?"
            />
            {errors.message && <p className="mt-2 text-xs text-amber">{errors.message}</p>}
          </div>

          <button type="submit" className="btn-primary w-full sm:w-auto">Send message</button>
        </form>
      </section>
    </div>
  )
}
