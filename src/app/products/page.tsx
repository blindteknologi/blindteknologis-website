import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PRODUCTS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore the Blind Teknologis platform capabilities for automotive service operations.',
}

export default function ProductsPage() {
  return (
    <>
      <Header active="Products" />
      <main>
        <section className="relative overflow-hidden bg-hero py-24 text-white sm:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: 'url(/images/metallic-textures.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-[11px] font-bold tracking-[0.24em] text-brand-red uppercase">Products</p>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight uppercase sm:text-5xl">
              Intelligence That Powers Your Shop
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-300">
              A unified platform designed to help repair shops work smarter, communicate better,
              and grow profitably.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-2">
            {PRODUCTS.map((product, index) => (
              <article
                key={product.title}
                className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] text-brand-red uppercase">
                  Module {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-3 text-lg font-bold tracking-[0.06em] text-charcoal uppercase">
                  {product.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{product.description}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-xl px-5 text-center sm:px-8">
            <p className="text-sm text-muted">Ready to see how it works for your shop?</p>
            <Link
              href="/contact/"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-[11px] font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-brand-red-hover"
            >
              Request Early Access
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
