type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="section-padding border-b border-zinc-800/60">
      <div className="mx-auto max-w-3xl">
        {eyebrow && (
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">{description}</p>
        )}
      </div>
    </section>
  )
}
