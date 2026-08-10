import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-sm font-bold tracking-widest text-text">FRONTIER</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Field notes on the technologies rewriting how software, hardware and society interact — written for
            builders who want signal, not hype.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-muted">
            <li><NavLink to="/technologies" className="hover:text-signal">Technologies</NavLink></li>
            <li><NavLink to="/gallery" className="hover:text-signal">Gallery</NavLink></li>
            <li><NavLink to="/about" className="hover:text-signal">About</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-signal">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Dispatch</p>
          <p className="text-sm text-muted">Get a monthly signal digest. No noise, unsubscribe anytime.</p>
          <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@domain.com"
              className="input-field py-2 text-sm"
              aria-label="Email address"
            />
            <button type="submit" className="btn-secondary px-4 py-2 text-xs">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-edge px-6 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Frontier. Built as an academic project — for demonstration purposes only.
      </div>
    </footer>
  )
}
