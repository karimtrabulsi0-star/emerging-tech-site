// Original, lightweight SVG illustrations for each technology domain.
// Kept abstract/geometric to match the site's signal/circuit visual language.

export function ArtAI(props) {
  return (
    <svg viewBox="0 0 400 300" {...props}>
      <rect width="400" height="300" fill="#111A2E" />
      {Array.from({ length: 5 }).map((_, i) => (
        <circle key={i} cx={80 + i * 60} cy={90} r={5} fill="#5EEAD4" />
      ))}
      {Array.from({ length: 3 }).map((_, i) => (
        <circle key={i} cx={140 + i * 60} cy={160} r={5} fill="#F5A623" />
      ))}
      {Array.from({ length: 4 }).map((_, i) => (
        <circle key={i} cx={100 + i * 60} cy={230} r={5} fill="#5EEAD4" />
      ))}
      {[[80,90,140,160],[140,90,140,160],[200,90,140,160],[260,90,200,160],[320,90,200,160],
        [140,160,100,230],[140,160,160,230],[200,160,220,230],[200,160,280,230]].map((p,i)=>(
        <line key={i} x1={p[0]} y1={p[1]} x2={p[2]} y2={p[3]} stroke="#233252" strokeWidth="1.5" />
      ))}
    </svg>
  )
}

export function ArtRobotics(props) {
  return (
    <svg viewBox="0 0 400 300" {...props}>
      <rect width="400" height="300" fill="#111A2E" />
      <rect x="150" y="90" width="100" height="90" rx="10" fill="#182644" stroke="#5EEAD4" strokeWidth="2" />
      <circle cx="180" cy="130" r="8" fill="#5EEAD4" />
      <circle cx="220" cy="130" r="8" fill="#5EEAD4" />
      <rect x="185" y="155" width="30" height="6" rx="3" fill="#F5A623" />
      <line x1="200" y1="90" x2="200" y2="60" stroke="#5EEAD4" strokeWidth="2" />
      <circle cx="200" cy="52" r="7" fill="#F5A623" />
      <rect x="130" y="185" width="30" height="60" rx="6" fill="#182644" stroke="#233252" strokeWidth="2" />
      <rect x="240" y="185" width="30" height="60" rx="6" fill="#182644" stroke="#233252" strokeWidth="2" />
    </svg>
  )
}

export function ArtQuantum(props) {
  return (
    <svg viewBox="0 0 400 300" {...props}>
      <rect width="400" height="300" fill="#111A2E" />
      <ellipse cx="200" cy="150" rx="140" ry="50" fill="none" stroke="#233252" strokeWidth="1.5" />
      <ellipse cx="200" cy="150" rx="140" ry="50" fill="none" stroke="#5EEAD4" strokeWidth="1.5" transform="rotate(60 200 150)" />
      <ellipse cx="200" cy="150" rx="140" ry="50" fill="none" stroke="#F5A623" strokeWidth="1.5" transform="rotate(120 200 150)" />
      <circle cx="200" cy="150" r="10" fill="#5EEAD4" />
    </svg>
  )
}

export function ArtIoT(props) {
  return (
    <svg viewBox="0 0 400 300" {...props}>
      <rect width="400" height="300" fill="#111A2E" />
      <circle cx="200" cy="150" r="14" fill="#F5A623" />
      {[[90,80],[310,80],[90,220],[310,220],[200,50],[200,250]].map((p,i)=>(
        <g key={i}>
          <line x1="200" y1="150" x2={p[0]} y2={p[1]} stroke="#233252" strokeWidth="1.5" />
          <circle cx={p[0]} cy={p[1]} r="8" fill="#5EEAD4" />
        </g>
      ))}
    </svg>
  )
}

export function ArtVR(props) {
  return (
    <svg viewBox="0 0 400 300" {...props}>
      <rect width="400" height="300" fill="#111A2E" />
      <rect x="120" y="120" width="160" height="70" rx="20" fill="#182644" stroke="#5EEAD4" strokeWidth="2" />
      <circle cx="165" cy="155" r="16" fill="#0A0F1C" stroke="#F5A623" strokeWidth="2" />
      <circle cx="235" cy="155" r="16" fill="#0A0F1C" stroke="#F5A623" strokeWidth="2" />
      <rect x="90" y="145" width="30" height="10" rx="5" fill="#233252" />
      <rect x="280" y="145" width="30" height="10" rx="5" fill="#233252" />
    </svg>
  )
}

export function ArtSecurity(props) {
  return (
    <svg viewBox="0 0 400 300" {...props}>
      <rect width="400" height="300" fill="#111A2E" />
      <path d="M200 60 L270 90 V150 C270 195 240 220 200 240 C160 220 130 195 130 150 V90 Z" fill="#182644" stroke="#5EEAD4" strokeWidth="2" />
      <rect x="182" y="140" width="36" height="28" rx="4" fill="#0A0F1C" stroke="#F5A623" strokeWidth="2" />
      <path d="M190 140 v-10 a10 10 0 0 1 20 0 v10" fill="none" stroke="#F5A623" strokeWidth="2" />
    </svg>
  )
}
