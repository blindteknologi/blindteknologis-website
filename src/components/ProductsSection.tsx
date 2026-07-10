import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PRODUCTS } from '@/lib/site'

export function ProductsSection() {
  return (
    <section id="products" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold tracking-[0.24em] text-brand-red uppercase">
            Products
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.08] font-bold tracking-tight text-charcoal uppercase sm:text-[2.25rem]">
            Software Modules for
            <br />
            Modern Shops
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            A unified platform of intelligent modules designed to help repair shops work smarter,
            communicate better, and grow profitably.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, index) => (
            <article
              key={product.title}
              className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-red uppercase">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-sm font-bold tracking-[0.06em] text-charcoal uppercase">
                {product.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{product.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products/"
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-brand-red uppercase transition-colors hover:text-brand-red-hover"
          >
            View All Products
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
