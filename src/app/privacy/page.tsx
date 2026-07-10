import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Blind Teknologis privacy policy.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-16 sm:py-20">
        <article className="prose prose-zinc mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-charcoal uppercase">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted">Last updated: July 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
            <section>
              <h2 className="text-base font-bold text-charcoal">Information We Collect</h2>
              <p className="mt-2">
                When you contact us or request early access, we collect the information you provide
                — such as your name, email address, shop name, and message content.
              </p>
            </section>
            <section>
              <h2 className="text-base font-bold text-charcoal">How We Use Your Information</h2>
              <p className="mt-2">
                We use the information you provide to respond to your inquiries, evaluate early
                access requests, and communicate with you about our services.
              </p>
            </section>
            <section>
              <h2 className="text-base font-bold text-charcoal">Data Security</h2>
              <p className="mt-2">
                We take reasonable measures to protect the information you share with us. However,
                no method of transmission over the internet is completely secure.
              </p>
            </section>
            <section>
              <h2 className="text-base font-bold text-charcoal">Contact</h2>
              <p className="mt-2">
                If you have questions about this privacy policy, contact us at{' '}
                <a href="mailto:info@blindteknologis.com" className="text-brand-red hover:underline">
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
