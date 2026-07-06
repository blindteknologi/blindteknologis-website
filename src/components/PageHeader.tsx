type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="section-padding border-b border-border">
      <div className="mx-auto max-w-3xl">
        {eyebrow && (
          <p className="mb-5 text-xs font-medium tracking-[0.25em] text-accent uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl md:leading-[1.1]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg leading-relaxed text-white/50">{description}</p>
        )}
      </div>
    </section>
  )
}
