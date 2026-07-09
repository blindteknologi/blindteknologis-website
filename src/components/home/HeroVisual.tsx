export function HeroVisual() {
  return (
    <div
      className="relative aspect-[5/4] w-full overflow-hidden rounded-sm"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0000] to-black" />
      <div className="absolute bottom-0 left-1/2 h-48 w-72 -translate-x-1/2 bg-accent/25 blur-[100px]" />
      <div className="absolute top-1/3 right-1/4 h-32 w-32 bg-accent/15 blur-[80px]" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 400" fill="none">
        <ellipse cx="250" cy="280" rx="180" ry="40" fill="url(#floor)" opacity="0.5" />
        <defs>
          <radialGradient id="floor">
            <stop offset="0%" stopColor="#D91424" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={100 + i * 70}
            y1={80}
            x2={250}
            y2={220}
            stroke="#D91424"
            strokeWidth="0.5"
            strokeOpacity="0.25"
          />
        ))}

        <rect x="180" y="160" width="140" height="100" rx="4" stroke="rgb(255 255 255 / 0.08)" strokeWidth="1" fill="#0a0a0a" />
        <rect x="200" y="180" width="100" height="8" rx="2" fill="#D91424" opacity="0.6" />
        <rect x="200" y="200" width="80" height="4" rx="1" fill="white" opacity="0.1" />
        <rect x="200" y="210" width="60" height="4" rx="1" fill="white" opacity="0.06" />
        <rect x="200" y="220" width="90" height="4" rx="1" fill="white" opacity="0.06" />

        <circle cx="250" cy="130" r="40" stroke="rgb(255 255 255 / 0.1)" strokeWidth="1" />
        <circle cx="250" cy="130" r="24" stroke="#D91424" strokeWidth="0.75" strokeOpacity="0.5" />
        <circle cx="250" cy="130" r="6" fill="#D91424" opacity="0.8" />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  )
}
