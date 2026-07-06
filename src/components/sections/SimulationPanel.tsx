import { useState } from 'react'
import { Button } from '../ui/Button'
import { Modal } from '../ui/Modal'

export function SimulationPanel() {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)

  const handleSimulate = () => {
    if (!value.trim()) return
    setOpen(true)
  }

  return (
    <>
      <section className="border-b border-border bg-panel/30">
        <div className="section-pad mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Enterprise Demonstration
          </p>
          <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Integration Simulation
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-text-secondary">
            Evaluate how secure workflow infrastructure stages and transforms data within
            your existing platform environment.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter Sample VIN / Test Enterprise Node"
              className="flex-1 rounded-lg border border-border bg-black/50 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
              onKeyDown={(e) => e.key === 'Enter' && handleSimulate()}
            />
            <Button onClick={handleSimulate} className="shrink-0">
              Simulate Integration
            </Button>
          </div>
        </div>
      </section>

      <Modal open={open} onClose={() => setOpen(false)} title="Node Staged Securely">
        <p>
          Integration simulation completed successfully. Sample vehicle data has been parsed
          and transformed into structured workflow assets for demonstration purposes.
        </p>
        <p className="mt-4">
          Architecture documentation, sandbox access, and technical specifications are
          available to qualified enterprise partners under mutual NDA.
        </p>
      </Modal>
    </>
  )
}
