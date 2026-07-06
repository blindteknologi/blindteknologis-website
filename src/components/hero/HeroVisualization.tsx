import { Lock } from 'lucide-react'

export function HeroVisualization() {
  const nodes = [
    { x: 60, y: 80, delay: '0s' },
    { x: 340, y: 90, delay: '0.8s' },
    { x: 50, y: 280, delay: '1.2s' },
    { x: 350, y: 290, delay: '0.4s' },
    { x: 200, y: 40, delay: '1.6s' },
    { x: 200, y: 360, delay: '2s' },
  ]

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]" aria-hidden="true">
      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />

      {/* Wireframe grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.15]" viewBox="0 0 400 400">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" />
      </svg>

      {/* Connection paths */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none">
        {nodes.map((node, i) => (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={node.x}
            y2={node.y}
            stroke="#E50914"
            strokeWidth="0.75"
            strokeOpacity="0.25"
            strokeDasharray="4 6"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.15;0.45;0.15"
              dur={`${4 + i}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Orbital ring */}
        <circle
          cx="200"
          cy="200"
          r="120"
          stroke="url(#chromeStroke)"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
          className="origin-center"
          style={{ transformOrigin: 'center' }}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="30s"
            repeatCount="indefinite"
          />
        </circle>

        <defs>
          <linearGradient id="chromeStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0f0f0" />
            <stop offset="50%" stopColor="#888" />
            <stop offset="100%" stopColor="#e0e0e0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Rotating chrome core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-spin-slow relative h-44 w-44 rounded-full p-[2px]">
          <div className="chrome-gradient h-full w-full rounded-full opacity-80" />
        </div>
        <div className="absolute inset-3 rounded-full bg-black/90" />
        <div className="absolute inset-6 animate-pulse-ring rounded-full border border-white/10 bg-panel" />

        {/* Locked engine core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-panel/90 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]">
            <Lock className="text-accent" size={24} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Secure data nodes */}
      {nodes.map((node, i) => (
        <div
          key={i}
          className="animate-float-y absolute"
          style={{
            left: `${(node.x / 400) * 100}%`,
            top: `${(node.y / 400) * 100}%`,
            transform: 'translate(-50%, -50%)',
            animationDelay: node.delay,
          }}
        >
          <div className="relative">
            <div className="h-3 w-3 rounded-full border border-white/20 bg-panel" />
            <div className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
          </div>
        </div>
      ))}

      {/* Corner wireframe accents */}
      <div className="absolute top-6 left-6 h-10 w-10 border-t border-l border-white/12" />
      <div className="absolute top-6 right-6 h-10 w-10 border-t border-r border-white/12" />
      <div className="absolute bottom-6 left-6 h-10 w-10 border-b border-l border-white/12" />
      <div className="absolute right-6 bottom-6 h-10 w-10 border-r border-b border-white/12" />
    </div>
  )
}
