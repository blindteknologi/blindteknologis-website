export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0 bg-[#080808]"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1800&h=1000&fit=crop&auto=format&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: '70% center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <line x1="520" y1="0" x2="1440" y2="900" stroke="#E30613" strokeWidth="1.5" opacity="0.45" />
        <line x1="680" y1="0" x2="1440" y2="720" stroke="#E30613" strokeWidth="1" opacity="0.25" />
        <line x1="400" y1="120" x2="1200" y2="900" stroke="#b0b0b0" strokeWidth="1" opacity="0.2" />
        <line x1="800" y1="0" x2="1440" y2="500" stroke="#E30613" strokeWidth="0.75" opacity="0.18" />
        <path
          d="M0 680 Q360 620 720 680 T1440 680"
          stroke="#E30613"
          strokeWidth="1"
          opacity="0.15"
          fill="none"
        />
      </svg>

      <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-brand-red/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/3 h-48 w-48 rounded-full bg-brand-red/15 blur-[100px]" />
    </div>
  )
}
