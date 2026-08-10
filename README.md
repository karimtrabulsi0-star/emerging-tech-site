# Frontier — Emerging Technologies Field Guide

A responsive React frontend that informs visitors about six emerging technology
domains — Artificial Intelligence, Robotics, Quantum Computing, the Internet of
Things, Virtual/Augmented Reality, and Cybersecurity — and closes with short
predictions for the future of IT.

Built as a Phase 2 web development coursework project: a functional, deployed
React frontend with routing, reusable components, responsive layout, and a
validated contact form.

## Live pages

| Route            | Purpose                                                             |
|-------------------|----------------------------------------------------------------------|
| `/`               | Home — hero, all six domains at a glance, future-of-IT predictions |
| `/about`          | About — project intent, values, and how it was built                |
| `/technologies`   | Technologies — expandable detail on each of the six domains         |
| `/gallery`        | Gallery — original illustrations for each domain, with a lightbox   |
| `/contact`        | Contact — client-side validated contact form                        |

## Tech stack

- **React 19** with **Vite** as the build tool
- **React Router** for client-side routing across 5 pages
- **Tailwind CSS** for styling and responsive layout
- Plain SVG illustrations authored for this project (no external image
  dependencies, so the gallery has no licensing concerns)

## Design system

- **Colors:** deep navy background (`#0A0F1C`), signal teal accent
  (`#5EEAD4`), amber highlight (`#F5A623`)
- **Type:** `JetBrains Mono` for display/headings (a nod to the
  terminal/signal theme), `Inter` for body copy
- **Signature element:** an animated "signal divider" — a pulse of light
  travelling along a horizontal line — used between major sections to tie the
  whole site back to the idea of transmitted signal

## Project structure

```
emerging-tech-site/
├── public/
│   └── signal.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SignalDivider.jsx
│   │   └── TechArt.jsx        # original SVG illustrations
│   ├── data/
│   │   └── technologies.js    # content for the 6 domains
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Technologies.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
└── package.json
```

## Setup instructions

**Requirements:** Node.js 18+ and npm.

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd emerging-tech-site

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
# open the printed local URL (usually http://localhost:5173)

# 4. Build for production
npm run build

# 5. Preview the production build locally
npm run preview
```

## Deployment

This is a static frontend build, so it deploys to any static host.

**Vercel**
1. Push this repo to GitHub.
2. Import the repo at vercel.com → New Project.
3. Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.
4. Deploy.

**Netlify**
1. Push this repo to GitHub.
2. New site from Git → select the repo.
3. Build command: `npm run build`, publish directory: `dist`.
4. Deploy.

**GitHub Pages**
1. `npm install -D gh-pages`
2. Add to `package.json`: `"homepage": "https://<user>.github.io/<repo>"` and a
   script `"deploy": "gh-pages -d dist"`.
3. Set `base: '/<repo>/'` in `vite.config.js`.
4. `npm run build && npm run deploy`.

## Screenshots

_Add screenshots of each page here once deployed, e.g.:_

```
![Home page](./screenshots/home.png)
![Technologies page](./screenshots/technologies.png)
![Gallery page](./screenshots/gallery.png)
![Contact page](./screenshots/contact.png)
```

## Notes

- The contact form validates input on the client only (no backend is wired
  up); wiring it to an email service (e.g. Formspree, EmailJS) or a custom API
  is a natural next step.
- All gallery imagery is original SVG created for this project, so there are
  no third-party licensing constraints.
- Built on top of an earlier Phase 1 static HTML/CSS version of this project,
  reimplemented here as a componentized React application.
