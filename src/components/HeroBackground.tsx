export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#060606]" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-[#060606] via-[#0a0a0a] to-[#111]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 820"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="redGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e31b23" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#e31b23" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="whiteGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <polygon points="520,0 1440,0 1440,820 180,820" fill="url(#redGlow)" opacity="0.14" />
        <polygon points="620,0 1440,0 1440,680 320,820" fill="url(#whiteGlow)" opacity="0.06" />

        <line x1="500" y1="0" x2="1440" y2="820" stroke="#e31b23" strokeWidth="4" opacity="0.6" />
        <line x1="580" y1="0" x2="1440" y2="700" stroke="#e31b23" strokeWidth="2" opacity="0.35" />
        <line x1="660" y1="0" x2="1440" y2="580" stroke="#ffffff" strokeWidth="2.5" opacity="0.22" />
        <line x1="740" y1="0" x2="1440" y2="460" stroke="#e31b23" strokeWidth="1.5" opacity="0.28" />
        <line x1="420" y1="60" x2="1180" y2="820" stroke="#d0d0d0" strokeWidth="1.5" opacity="0.12" />
        <line x1="860" y1="0" x2="1440" y2="400" stroke="#ffffff" strokeWidth="1" opacity="0.1" />
      </svg>

      <div className="absolute top-1/3 right-0 h-[500px] w-[600px] bg-brand-red/20 blur-[160px]" />
      <div className="absolute right-1/4 bottom-0 h-64 w-64 bg-brand-red/10 blur-[100px]" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/95 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]/30" />
    </div>
  )
}
