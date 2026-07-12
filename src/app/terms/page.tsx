import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Blind Teknologis terms of service.',
  alternates: { canonical: `${SITE_URL}/terms/` },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-16 sm:py-20">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-charcoal uppercase">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted">Last updated: July 2026</p>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted">
            <section aria-labelledby="tos-accept">
              <h2 id="tos-accept" className="text-base font-bold text-charcoal">
                Acceptance of Terms
              </h2>
              <p className="mt-2">
                By accessing or using the Blind Teknologis website, you agree to be bound by these
                terms of service. If you do not agree, please do not use this site.
              </p>
            </section>

            <section aria-labelledby="tos-use">
              <h2 id="tos-use" className="text-base font-bold text-charcoal">
                Use of the Website
              </h2>
              <p className="mt-2">
                This website is provided for informational purposes. Content may be updated at any
                time without notice. Early access requests do not guarantee product availability.
              </p>
            </section>

            <section aria-labelledby="tos-ip">
              <h2 id="tos-ip" className="text-base font-bold text-charcoal">
                Intellectual Property
              </h2>
              <p className="mt-2">
                All content, trademarks, and materials on this site are the property of Blind
                Teknologis and are protected by applicable intellectual property laws.
              </p>
            </section>

            <section aria-labelledby="tos-liability">
              <h2 id="tos-liability" className="text-base font-bold text-charcoal">
                Limitation of Liability
              </h2>
              <p className="mt-2">
                Blind Teknologis provides this website &quot;as is&quot; without warranties of any
                kind. We are not liable for any damages arising from your use of this site.
              </p>
            </section>

            <section aria-labelledby="tos-contact">
              <h2 id="tos-contact" className="text-base font-bold text-charcoal">
                Contact
              </h2>
              <p className="mt-2">
                Questions about these terms? Contact us at{' '}
                <a
                  href="mailto:info@blindteknologis.com"
                  className="text-brand-red hover:underline"
                >
                  info@blindteknologis.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
