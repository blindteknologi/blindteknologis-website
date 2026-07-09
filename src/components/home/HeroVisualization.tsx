export function HeroVisualization() {
  const nodes = [
    { cx: 80, cy: 100 },
    { cx: 320, cy: 80 },
    { cx: 60, cy: 280 },
    { cx: 340, cy: 260 },
    { cx: 200, cy: 200 },
  ]

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-card"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(rgb(255 255 255 / 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgb(255 255 255 / 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[80px]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 360" fill="none">
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => (
            <line
              key={`${i}-${j}`}
              x1={a.cx}
              y1={a.cy}
              x2={b.cx}
              y2={b.cy}
              stroke="#D91424"
              strokeWidth="0.75"
              strokeOpacity="0.2"
              className="animate-line-pulse"
              style={{ animationDelay: `${(i + j) * 0.4}s` }}
            />
          )),
        )}

        {nodes.map((node, i) => (
          <g key={i}>
            <rect
              x={node.cx - 14}
              y={node.cy - 14}
              width="28"
              height="28"
              rx="6"
              stroke="rgb(255 255 255 / 0.12)"
              strokeWidth="1"
              fill="#111111"
            />
            <circle cx={node.cx} cy={node.cy} r="3" fill="#D91424" opacity="0.85" />
          </g>
        ))}

        <circle cx="200" cy="200" r="48" stroke="rgb(255 255 255 / 0.1)" strokeWidth="1" />
        <circle cx="200" cy="200" r="32" stroke="#D91424" strokeWidth="0.75" strokeOpacity="0.35" />
      </svg>

      <div className="absolute top-5 left-5 h-8 w-8 border-t border-l border-white/15" />
      <div className="absolute right-5 bottom-5 h-8 w-8 border-r border-b border-white/15" />
    </div>
  )
}
