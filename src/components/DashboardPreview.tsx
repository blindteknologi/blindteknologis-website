const sidebarItems = ['Dashboard', 'Vehicle Intelligence', 'Maintenance', 'Reports', 'Settings']

const stats = [
  { label: 'Work Orders Saved', value: '847' },
  { label: 'Time Saved', value: '12.4h' },
  { label: 'Revenue Recovered', value: '$48.2K' },
]

function WireframeCar() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full" fill="none" aria-hidden="true">
      <path
        d="M20 50 L40 35 L70 30 L130 30 L160 35 L180 50 L175 55 L25 55 Z"
        stroke="#E30613"
        strokeWidth="1"
        opacity="0.7"
      />
      <circle cx="50" cy="55" r="10" stroke="#888" strokeWidth="0.75" />
      <circle cx="150" cy="55" r="10" stroke="#888" strokeWidth="0.75" />
      <path d="M75 38 L95 38 L100 32 L120 32" stroke="#E30613" strokeWidth="0.5" opacity="0.5" />
      <line x1="20" y1="42" x2="180" y2="42" stroke="#555" strokeWidth="0.5" opacity="0.4" />
      <line x1="30" y1="35" x2="170" y2="35" stroke="#555" strokeWidth="0.5" opacity="0.3" />
    </svg>
  )
}

function LineChart() {
  return (
    <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
      <polyline
        points="0,50 25,45 50,35 75,40 100,20 125,25 150,15 175,10 200,5"
        fill="none"
        stroke="#E30613"
        strokeWidth="2"
      />
      <polyline
        points="0,50 25,45 50,35 75,40 100,20 125,25 150,15 175,10 200,5 200,60 0,60"
        fill="url(#chartFill)"
        opacity="0.15"
      />
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E30613" />
          <stop offset="100%" stopColor="#E30613" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function BarChart() {
  const bars = [40, 65, 45, 80, 55, 70, 50]
  return (
    <div className="flex h-full items-end gap-1" aria-hidden="true">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-brand-red/70"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  )
}

export function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-2xl" aria-hidden="true">
      <div className="rounded-t-xl bg-zinc-700 px-3 py-1.5">
        <div className="mx-auto h-1 w-8 rounded-full bg-zinc-500" />
      </div>

      <div className="overflow-hidden rounded-b-xl border border-zinc-700/50 bg-[#0d0d0d] shadow-2xl shadow-black/60">
        <div className="flex min-h-[280px] sm:min-h-[320px]">
          <aside className="hidden w-28 shrink-0 border-r border-zinc-800 bg-[#0a0a0a] p-3 sm:block">
            <div className="mb-4 h-2 w-12 rounded bg-brand-red/60" />
            <ul className="space-y-2">
              {sidebarItems.map((item, i) => (
                <li
                  key={item}
                  className={`rounded px-2 py-1 text-[8px] leading-tight ${
                    i === 0 ? 'bg-zinc-800 text-white' : 'text-zinc-500'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex-1 p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-2 w-20 rounded bg-zinc-700" />
              <div className="h-5 w-5 rounded-full bg-zinc-800" />
            </div>

            <div className="mb-3 grid grid-cols-3 gap-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-2">
                  <p className="text-[7px] text-zinc-500 sm:text-[8px]">{stat.label}</p>
                  <p className="mt-0.5 text-xs font-bold text-white sm:text-sm">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-2">
                <p className="mb-1 text-[8px] text-zinc-500">Vehicle Model</p>
                <div className="h-16 sm:h-20">
                  <WireframeCar />
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-2">
                <p className="mb-1 text-[8px] text-zinc-500">RO Insights</p>
                <div className="h-16 sm:h-20">
                  <LineChart />
                </div>
              </div>
            </div>

            <div className="mt-2 rounded-lg border border-zinc-800 bg-zinc-900/60 p-2">
              <p className="mb-1 text-[8px] text-zinc-500">Top Services</p>
              <div className="h-10 sm:h-12">
                <BarChart />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto h-2 w-3/4 rounded-b-lg bg-zinc-800" />
    </div>
  )
}
