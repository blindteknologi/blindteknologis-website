'use client'

import { useState, type FormEvent } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CONTACT_EMAIL } from '@/lib/site'
import { Mail, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header active="Contact" />
      <main>
        <section className="bg-charcoal py-20 text-white">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-red uppercase">Contact</p>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              Request Early Access
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-300">
              Tell us about your shop and we&apos;ll be in touch to discuss how Blind Teknologis
              can help you maximize every opportunity.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight text-charcoal uppercase">
                Get in Touch
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-muted">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-red" aria-hidden="true" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-charcoal">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-brand-red" aria-hidden="true" />
                  United States
                </li>
              </ul>
            </div>

            {submitted ? (
              <div className="rounded-2xl bg-surface-light p-8 text-center">
                <p className="text-lg font-semibold text-charcoal">Thank you!</p>
                <p className="mt-2 text-sm text-muted">
                  We&apos;ve received your request and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold tracking-wide text-charcoal uppercase">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold tracking-wide text-charcoal uppercase">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>
                <div>
                  <label htmlFor="shop" className="mb-1.5 block text-xs font-semibold tracking-wide text-charcoal uppercase">
                    Shop Name
                  </label>
                  <input
                    id="shop"
                    name="shop"
                    type="text"
                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold tracking-wide text-charcoal uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-6 py-3 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand-red-hover"
                >
                  Submit Request
                  <Send size={14} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
