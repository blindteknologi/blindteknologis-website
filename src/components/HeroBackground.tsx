export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-hero" aria-hidden="true">
      {/* Metallic texture layer */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: 'url(/images/metallic-textures.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />

      {/* Blueprint overlay — subtle, right side */}
      <div
        className="absolute top-0 right-0 h-full w-[55%] opacity-[0.06]"
        style={{
          backgroundImage: 'url(/images/blueprint-overlay.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Angular red accent bands */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 860"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="redBand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d71920" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d71920" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="whiteBand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <polygon points="520,0 1440,0 1440,860 180,860" fill="url(#redBand)" opacity="0.14" />
        <polygon points="600,0 1440,0 1440,720 320,860" fill="url(#whiteBand)" opacity="0.06" />

        <line x1="500" y1="0" x2="1440" y2="860" stroke="#d71920" strokeWidth="4" opacity="0.55" />
        <line x1="580" y1="0" x2="1440" y2="740" stroke="#d71920" strokeWidth="2" opacity="0.35" />
        <line x1="660" y1="0" x2="1440" y2="620" stroke="#ffffff" strokeWidth="2.5" opacity="0.2" />
        <line x1="740" y1="0" x2="1440" y2="500" stroke="#d71920" strokeWidth="1.5" opacity="0.25" />
        <line x1="420" y1="60" x2="1180" y2="860" stroke="#d8d8d8" strokeWidth="1" opacity="0.1" />
      </svg>

      {/* Ambient glow */}
      <div className="absolute top-1/4 right-0 h-[480px] w-[580px] bg-brand-red/20 blur-[160px]" />
      <div className="absolute right-1/3 bottom-0 h-64 w-64 bg-brand-red/10 blur-[100px]" />

      {/* Vignette gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/95 to-hero/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-hero via-transparent to-hero/40" />
    </div>
  )
}
