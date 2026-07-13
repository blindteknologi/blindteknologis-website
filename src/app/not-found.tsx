import Link from 'next/link'
import { SiteShell } from '@/components/SiteShell'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

export default function NotFound() {
  return (
    <SiteShell>
      <SiteHeader />
      <main id="main-content" className="bg-white">
        <section className="section-shell py-24 sm:py-32">
          <p className="eyebrow">Page Not Found</p>
          <h1 className="section-heading mt-4">The page you requested is not available.</h1>
          <p className="section-copy mt-5 max-w-xl">
            Return to the homepage to explore the Blind Teknologis platform, products, and contact
            paths.
          </p>
          <Link href="/" className="pill-button mt-8 bg-brand-red text-white hover:bg-brand-red-strong">
            Back to Home
          </Link>
        </section>
      </main>
      <SiteFooter />
    </SiteShell>
  )
}
