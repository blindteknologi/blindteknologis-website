export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#080808]" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1555215695-3004980ad54e?w=2000&h=1200&fit=crop&auto=format&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: '75% 40%',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/92 to-[#080808]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/50" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="redBand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e31b23" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e31b23" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="whiteBand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <polygon points="600,0 1440,0 1440,800 200,800" fill="url(#redBand)" opacity="0.12" />
        <polygon points="700,0 1440,0 1440,600 400,800" fill="url(#whiteBand)" opacity="0.08" />

        <line x1="480" y1="0" x2="1440" y2="800" stroke="#e31b23" strokeWidth="3" opacity="0.55" />
        <line x1="560" y1="0" x2="1440" y2="680" stroke="#e31b23" strokeWidth="1.5" opacity="0.35" />
        <line x1="640" y1="0" x2="1440" y2="560" stroke="#ffffff" strokeWidth="2" opacity="0.2" />
        <line x1="720" y1="0" x2="1440" y2="480" stroke="#e31b23" strokeWidth="1" opacity="0.25" />
        <line x1="380" y1="100" x2="1100" y2="800" stroke="#c0c0c0" strokeWidth="1.5" opacity="0.15" />
        <line x1="820" y1="0" x2="1440" y2="380" stroke="#ffffff" strokeWidth="1" opacity="0.12" />

        <path
          d="M0 0 L200 0 L0 180 Z"
          fill="#e31b23"
          opacity="0.08"
        />
      </svg>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-brand-red/15 blur-[140px]" />
      <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-brand-red/10 blur-[100px]" />
    </div>
  )
}
