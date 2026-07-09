import { Cpu, Lock, Workflow, Zap } from 'lucide-react'

const pillars = [
  { icon: Cpu, label: 'Enterprise Architecture' },
  { icon: Workflow, label: 'Scalable Design' },
  { icon: Lock, label: 'Security First' },
  { icon: Zap, label: 'Automation Focus' },
]

export function EnterpriseReady() {
  return (
    <section className="border-b border-border bg-surface-secondary">
      <div className="section-pad mx-auto max-w-7xl">
        <h2 className="font-display mb-12 text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Enterprise Ready
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {pillars.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="card flex flex-col items-center rounded-2xl px-4 py-10 text-center"
            >
              <Icon size={24} className="text-accent" strokeWidth={1.5} aria-hidden="true" />
              <p className="font-display mt-5 text-sm font-medium tracking-wide text-white">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
