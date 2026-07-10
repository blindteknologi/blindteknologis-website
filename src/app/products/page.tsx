import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AlertTriangle, FileSearch, Link2, ScanLine, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore the Blind Teknologis platform capabilities for automotive service operations.',
}

const products = [
  {
    icon: FileSearch,
    title: 'Maintenance Intelligence',
    description:
      'Surface maintenance context and service requirements with clarity and confidence. Help advisors present the right recommendations at the right time.',
  },
  {
    icon: Wrench,
    title: 'Technician Story Rewriting',
    description:
      'Transform technical repair notes into clear, customer-friendly explanations. Consistent communication builds trust and reduces confusion.',
  },
  {
    icon: AlertTriangle,
    title: 'Comeback Alerts',
    description:
      'Identify patterns and flag potential comebacks before they impact customer trust. Proactive alerts help your team address issues early.',
  },
  {
    icon: Link2,
    title: 'Shop System Integrations',
    description:
      'Connect with the systems your team already uses. Seamless integration means less disruption and faster adoption across your shop.',
  },
  {
    icon: ScanLine,
    title: 'Extensive VIN Decoding',
    description:
      'Decode vehicle identity data to ground every service interaction in accurate context. From year-make-model to detailed specifications.',
  },
]

export default function ProductsPage() {
  return (
    <>
      <Header active="Products" />
      <main>
        <section className="bg-charcoal py-20 text-white">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-red uppercase">Products</p>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              Intelligence That Powers Your Shop
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-300">
              A unified platform designed to help repair shops work smarter, communicate better,
              and grow profitably.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl space-y-8 px-5 sm:px-8">
            {products.map((product) => (
              <article
                key={product.title}
                className="flex gap-6 rounded-2xl border border-zinc-200 bg-white p-8"
              >
                <div className="shrink-0">
                  <div className="rounded-full bg-red-50 p-3">
                    <product.icon size={24} className="text-brand-red" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold tracking-wide text-charcoal uppercase">
                    {product.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{product.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-xl px-5 text-center sm:px-8">
            <p className="text-sm text-muted">Ready to see how it works for your shop?</p>
            <Link
              href="/contact/"
              className="mt-4 inline-flex rounded-lg bg-brand-red px-6 py-3 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand-red-hover"
            >
              Request Early Access
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
