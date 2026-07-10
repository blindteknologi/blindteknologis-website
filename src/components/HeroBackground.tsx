export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#050505]" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 860"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="redBand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e31b23" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#e31b23" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="whiteBand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="1440" height="860" fill="#050505" />
        <polygon points="480,0 1440,0 1440,860 120,860" fill="url(#redBand)" opacity="0.18" />
        <polygon points="560,0 1440,0 1440,720 260,860" fill="url(#whiteBand)" opacity="0.07" />

        <line x1="460" y1="0" x2="1440" y2="860" stroke="#e31b23" strokeWidth="5" opacity="0.65" />
        <line x1="540" y1="0" x2="1440" y2="740" stroke="#e31b23" strokeWidth="2.5" opacity="0.4" />
        <line x1="620" y1="0" x2="1440" y2="620" stroke="#ffffff" strokeWidth="3" opacity="0.25" />
        <line x1="700" y1="0" x2="1440" y2="500" stroke="#e31b23" strokeWidth="1.5" opacity="0.3" />
        <line x1="400" y1="40" x2="1200" y2="860" stroke="#d8d8d8" strokeWidth="1.5" opacity="0.14" />
        <line x1="820" y1="0" x2="1440" y2="420" stroke="#ffffff" strokeWidth="1" opacity="0.12" />
      </svg>

      <div className="absolute top-1/4 right-0 h-[520px] w-[640px] bg-brand-red/25 blur-[180px]" />
      <div className="absolute right-1/3 bottom-0 h-72 w-72 bg-brand-red/15 blur-[120px]" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/92 to-[#050505]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/35" />
    </div>
  )
}
