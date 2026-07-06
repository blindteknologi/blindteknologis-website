export function HeroVisualization() {
  return (
    <div
      className="relative aspect-square w-full max-w-lg overflow-hidden rounded-2xl"
      aria-hidden="true"
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgb(255 255 255 / 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgb(255 255 255 / 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/15 blur-[80px] animate-pulse-glow" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Network connections */}
        <g stroke="#D71920" strokeWidth="0.75" opacity="0.35">
          <line x1="80" y1="120" x2="200" y2="80" strokeDasharray="4 4">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="200" y1="80" x2="320" y2="140" strokeDasharray="4 4">
            <animate attributeName="opacity" values="0.15;0.45;0.15" dur="5s" repeatCount="indefinite" />
          </line>
          <line x1="80" y1="120" x2="140" y2="240" strokeDasharray="4 4" />
          <line x1="140" y1="240" x2="260" y2="280" strokeDasharray="4 4" />
          <line x1="260" y1="280" x2="320" y2="140" strokeDasharray="4 4" />
          <line x1="200" y1="80" x2="260" y2="280" strokeDasharray="4 4" opacity="0.2" />
        </g>

        {/* Wireframe nodes */}
        {[
          [80, 120],
          [200, 80],
          [320, 140],
          [140, 240],
          [260, 280],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="5" fill="#111111" stroke="rgb(255 255 255 / 0.2)" strokeWidth="1" />
            <circle cx={cx} cy={cy} r="2" fill="#D71920" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur={`${3 + i}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* Flowing particles */}
        {[
          { cx: 120, cy: 100, dur: '6s', delay: '0s' },
          { cx: 240, cy: 110, dur: '7s', delay: '1s' },
          { cx: 180, cy: 200, dur: '5s', delay: '0.5s' },
          { cx: 300, cy: 200, dur: '8s', delay: '2s' },
          { cx: 100, cy: 260, dur: '6.5s', delay: '1.5s' },
        ].map((p, i) => (
          <circle key={i} r="1.5" fill="#D71920">
            <animateMotion dur={p.dur} repeatCount="indefinite" begin={p.delay}>
              <mpath href={`#flow-path-${i}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.9;0" dur={p.dur} repeatCount="indefinite" begin={p.delay} />
          </circle>
        ))}

        <path id="flow-path-0" d="M 80 120 Q 140 60 200 80 T 320 140" fill="none" />
        <path id="flow-path-1" d="M 200 80 Q 260 100 320 140" fill="none" />
        <path id="flow-path-2" d="M 140 240 Q 200 200 260 280" fill="none" />
        <path id="flow-path-3" d="M 320 140 Q 280 200 260 280" fill="none" />
        <path id="flow-path-4" d="M 80 120 Q 110 180 140 240" fill="none" />
      </svg>

      {/* Glass UI panels */}
      <div className="glass-panel animate-float absolute top-8 right-6 w-36 rounded-lg p-3">
        <div className="mb-2 h-1 w-8 rounded-full bg-accent/60" />
        <div className="space-y-1.5">
          <div className="h-1 w-full rounded-full bg-white/10" />
          <div className="h-1 w-[80%] rounded-full bg-white/[0.08]" />
          <div className="h-1 w-[60%] rounded-full bg-white/[0.06]" />
        </div>
      </div>

      <div className="glass-panel animate-drift absolute bottom-12 left-6 w-44 rounded-lg p-4">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <div className="h-1 flex-1 rounded-full bg-white/12" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square rounded bg-white/5" />
          ))}
        </div>
      </div>

      <div className="glass-panel absolute top-1/2 left-1/2 w-28 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-accent/20 p-3">
        <div className="mx-auto mb-2 h-6 w-6 rounded-full border border-accent/40" />
        <div className="mx-auto h-1 w-12 rounded-full bg-white/15" />
        <div className="mx-auto mt-1 h-1 w-8 rounded-full bg-white/8" />
      </div>

      {/* Corner wireframe accents */}
      <div className="absolute top-4 left-4 h-8 w-8 border-t border-l border-white/15" />
      <div className="absolute right-4 bottom-4 h-8 w-8 border-r border-b border-white/15" />
    </div>
  )
}
