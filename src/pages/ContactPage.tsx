import { useState, type FormEvent } from 'react'
import { SEO } from '../components/SEO'
import { Button } from '../components/ui/Button'
import { CONTACT_EMAIL } from '../lib/site'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Early Access Request')
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact"
        path="/contact"
        description="Request early access or contact Blind Teknologis."
      />
      <section className="border-b border-border pt-28 pb-16 md:pt-36">
        <div className="section-pad mx-auto max-w-xl !py-0">
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">Contact</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-white">
            Request Early Access
          </h1>
          <p className="mt-4 text-muted">
            Share a few details and our team will follow up promptly.
          </p>

          {submitted ? (
            <p className="card mt-10 rounded-2xl p-8 text-sm text-muted" role="status">
              Your email client should open shortly. If it does not, contact us directly at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:text-accent">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="card mt-10 space-y-5 rounded-2xl p-8" noValidate>
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium tracking-wider text-muted uppercase">
                  Full Name
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-white outline-none focus:border-accent/50"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium tracking-wider text-muted uppercase">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-white outline-none focus:border-accent/50"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-xs font-medium tracking-wider text-muted uppercase">
                  Company
                </label>
                <input
                  id="company"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-white outline-none focus:border-accent/50"
                  autoComplete="organization"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-medium tracking-wider text-muted uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-white outline-none focus:border-accent/50"
                />
              </div>
              <Button type="submit" className="w-full">
                Request Early Access
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
