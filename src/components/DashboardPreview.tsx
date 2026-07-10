import {
  AlertTriangle,
  BarChart3,
  Car,
  FileText,
  LayoutDashboard,
  Settings,
  Wrench,
} from 'lucide-react'

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Car, label: 'Vehicle Intelligence' },
  { icon: Wrench, label: 'Maintenance' },
  { icon: BarChart3, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
]

const stats = [
  { label: 'Work Orders Saved', value: '128', change: '+16%' },
  { label: 'Time Saved', value: '82.5 hrs', change: '+22%' },
  { label: 'Revenue Recovered', value: '$18,420', change: '+18%' },
  { label: 'Opportunities', value: '24', change: '+15%' },
]

const topServices = [
  { name: 'Maintenance', width: '88%' },
  { name: 'Brakes', width: '72%' },
  { name: 'Diagnostics', width: '58%' },
  { name: 'Tires', width: '45%' },
]

function WireframeCar() {
  return (
    <svg viewBox="0 0 280 120" className="h-full w-full" fill="none" aria-hidden="true">
      <path
        d="M30 75 L55 52 L95 42 L185 42 L225 52 L250 75 L242 82 L38 82 Z"
        stroke="#e31b23"
        strokeWidth="1.2"
        opacity="0.85"
      />
      <path
        d="M95 42 L115 32 L165 32 L185 42"
        stroke="#e31b23"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <circle cx="75" cy="82" r="14" stroke="#666" strokeWidth="0.8" />
      <circle cx="205" cy="82" r="14" stroke="#666" strokeWidth="0.8" />
      <circle cx="75" cy="82" r="6" stroke="#e31b23" strokeWidth="0.5" opacity="0.5" />
      <circle cx="205" cy="82" r="6" stroke="#e31b23" strokeWidth="0.5" opacity="0.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1={60 + i * 40}
          y1="55"
          x2={60 + i * 40}
          y2="75"
          stroke="#444"
          strokeWidth="0.5"
          opacity="0.5"
        />
      ))}
      <ellipse cx="140" cy="58" rx="35" ry="8" stroke="#e31b23" strokeWidth="0.5" opacity="0.4" />
      <circle cx="120" cy="68" r="3" fill="#e31b23" opacity="0.7" />
      <circle cx="160" cy="65" r="3" fill="#e31b23" opacity="0.5" />
    </svg>
  )
}

function RoInsightsChart() {
  return (
    <svg viewBox="0 0 240 70" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="roFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e31b23" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#e31b23" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points="0,55 30,48 60,40 90,45 120,28 150,32 180,18 210,22 240,12"
        fill="none"
        stroke="#e31b23"
        strokeWidth="2"
      />
      <polygon
        points="0,55 30,48 60,40 90,45 120,28 150,32 180,18 210,22 240,12 240,70 0,70"
        fill="url(#roFill)"
      />
    </svg>
  )
}

export function DashboardPreview() {
  return (
    <div className="relative w-full" aria-hidden="true">
      <div className="relative mx-auto max-w-[580px]">
        <div className="rounded-t-[14px] bg-gradient-to-b from-[#c8c8c8] to-[#a8a8a8] px-3 pt-2 pb-1.5 shadow-lg">
          <div className="mx-auto mb-1.5 h-1.5 w-2 rounded-full bg-[#888]" />
          <div className="overflow-hidden rounded-t-lg border border-[#999]/50 bg-[#0c0c0c] shadow-inner">
            <div className="flex min-h-[300px] sm:min-h-[340px]">
              <aside className="hidden w-[72px] shrink-0 border-r border-zinc-800 bg-[#080808] py-3 sm:block">
                <div className="mb-3 flex justify-center">
                  <div className="h-1 w-6 rounded bg-brand-red" />
                </div>
                <ul className="space-y-1 px-1.5">
                  {sidebarItems.map((item) => (
                    <li
                      key={item.label}
                      className={`flex flex-col items-center gap-0.5 rounded px-1 py-1.5 ${
                        item.active ? 'bg-zinc-800/80' : ''
                      }`}
                    >
                      <item.icon
                        size={12}
                        className={item.active ? 'text-brand-red' : 'text-zinc-600'}
                        strokeWidth={1.5}
                      />
                      <span
                        className={`text-center text-[6px] leading-tight ${
                          item.active ? 'text-white' : 'text-zinc-600'
                        }`}
                      >
                        {item.label.split(' ')[0]}
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="flex-1 p-2.5 sm:p-3">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <FileText size={10} className="text-brand-red" />
                    <span className="text-[8px] font-semibold text-white">Service Advisor Dashboard</span>
                  </div>
                  <div className="h-4 w-4 rounded-full bg-zinc-800" />
                </div>

                <div className="mb-2 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded border border-zinc-800 bg-zinc-900/90 px-1.5 py-1.5"
                    >
                      <p className="text-[6px] leading-tight text-zinc-500">{stat.label}</p>
                      <p className="text-[10px] font-bold text-white sm:text-[11px]">{stat.value}</p>
                      <p className="text-[7px] font-medium text-emerald-500">{stat.change}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-1.5 sm:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded border border-zinc-800 bg-zinc-900/70 p-1.5">
                    <p className="mb-1 text-[7px] text-zinc-500">Vehicle Intelligence</p>
                    <div className="h-20 sm:h-24">
                      <WireframeCar />
                    </div>
                  </div>

                  <div className="rounded border border-zinc-800 bg-zinc-900/70 p-1.5">
                    <p className="mb-1 text-[7px] text-zinc-500">Vehicle Health</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[7px] text-zinc-500">Overall Status</span>
                        <span className="text-[8px] font-semibold text-emerald-500">Good</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[7px] text-zinc-500">Systems Scanned</span>
                        <span className="text-[8px] font-semibold text-white">32</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                        <div className="h-full w-[78%] rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex items-center gap-1 pt-1">
                        <AlertTriangle size={8} className="text-amber-500" />
                        <span className="text-[6px] text-zinc-500">2 maintenance items due</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-1.5 grid gap-1.5 sm:grid-cols-2">
                  <div className="rounded border border-zinc-800 bg-zinc-900/70 p-1.5">
                    <p className="mb-1 text-[7px] text-zinc-500">RO Insights</p>
                    <div className="h-12 sm:h-14">
                      <RoInsightsChart />
                    </div>
                  </div>

                  <div className="rounded border border-zinc-800 bg-zinc-900/70 p-1.5">
                    <p className="mb-1 text-[7px] text-zinc-500">Top Services</p>
                    <div className="space-y-1">
                      {topServices.map((service) => (
                        <div key={service.name} className="flex items-center gap-1.5">
                          <span className="w-14 shrink-0 text-[6px] text-zinc-500">{service.name}</span>
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-800">
                            <div
                              className="h-full rounded-full bg-brand-red/80"
                              style={{ width: service.width }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto h-2 w-[92%] rounded-b-sm bg-gradient-to-b from-[#a0a0a0] to-[#888]" />
        <div className="mx-auto -mt-0.5 h-1 w-[70%] rounded-b-lg bg-[#777]" />
      </div>

      <div className="absolute -bottom-4 left-1/2 h-8 w-[80%] -translate-x-1/2 rounded-[50%] bg-black/40 blur-xl" />
    </div>
  )
}
