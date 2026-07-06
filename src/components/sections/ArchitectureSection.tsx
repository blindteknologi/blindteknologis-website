import { Lock } from 'lucide-react'

const steps = [
  { label: 'Their Platform', locked: false },
  { label: 'Secure API', locked: false },
  { label: 'Blind Core', locked: true },
  { label: 'Structured Workflow Assets', locked: false },
]

export function ArchitectureSection() {
  return (
    <section id="architecture" className="border-b border-border bg-panel/20">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
              Architecture
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Low Friction.
              <br />
              Enterprise Security.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-secondary">
              Blind Teknologis operates as a secure automation layer behind your existing
              platform. Your users continue using the interface they already know while our
              infrastructure performs complex workflow automation in the background.
            </p>
          </div>

          <div className="panel red-glow rounded-2xl p-8 md:p-10">
            <div className="flex flex-col items-center gap-0">
              {steps.map((step, i) => (
                <div key={step.label} className="flex w-full flex-col items-center">
                  <div
                    className={`flex w-full max-w-xs items-center justify-center gap-3 rounded-xl border px-6 py-4 ${
                      step.locked
                        ? 'border-accent/30 bg-accent/5'
                        : 'border-border bg-black/40'
                    }`}
                  >
                    {step.locked && <Lock size={14} className="shrink-0 text-accent" />}
                    <span
                      className={`font-display text-sm font-medium tracking-wide ${step.locked ? 'text-white' : 'text-text-secondary'}`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex flex-col items-center py-3">
                      <div className="h-6 w-px bg-gradient-to-b from-white/20 to-accent/40" />
                      <svg width="12" height="8" viewBox="0 0 12 8" className="text-accent/50">
                        <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
