export function PlatformVisual() {
  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-lg border border-border bg-black"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-black" />
      <div className="absolute top-4 right-4 left-4 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-accent/60" />
        <div className="h-2 w-2 rounded-full bg-white/10" />
        <div className="h-2 w-2 rounded-full bg-white/10" />
      </div>

      <div className="absolute inset-6 top-12 flex flex-col gap-3">
        <div className="h-8 w-32 rounded bg-white/5" />
        <div className="grid grid-cols-3 gap-2">
          {['Status', 'Workflow', 'Health'].map((label) => (
            <div key={label} className="rounded border border-border p-3">
              <div className="h-1.5 w-8 rounded bg-accent/40" />
              <div className="mt-2 h-4 w-12 rounded bg-white/10" />
            </div>
          ))}
        </div>
        <div className="flex-1 rounded border border-border p-3">
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-2">
                <div className="h-2 w-2 shrink-0 rounded-full bg-accent/50" />
                <div className="h-2 flex-1 rounded bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  )
}
