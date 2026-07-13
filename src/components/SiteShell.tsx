import type { ReactNode } from 'react'

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="panel-shadow min-h-screen bg-white md:overflow-hidden md:rounded-[22px]">
      {children}
    </div>
  )
}
