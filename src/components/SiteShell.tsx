import type { ReactNode } from 'react'

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="panel-shadow min-h-screen overflow-hidden bg-white md:rounded-[22px]">
      {children}
    </div>
  )
}
