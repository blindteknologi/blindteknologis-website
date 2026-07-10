import { useState, type FormEvent } from 'react'
import { Button } from '../ui/Button'
import { CONTACT_EMAIL } from '../../lib/site'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Early Access Request')
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="border-b border-border bg-elevated">
      <div className="section-pad mx-auto max-w-xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Contact
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white uppercase md:text-4xl">
            Request Early Access
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Blind Teknologis is engaging with a limited number of strategic partners. Share
            your details and our team will follow up.
          </p>
        </div>

        {sent ? (
          <p className="mt-10 rounded-lg border border-border bg-card p-8 text-center text-sm text-muted" role="status">
            Your email client should open shortly. You can also reach us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:text-accent">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-lg border border-border bg-card p-8"
            noValidate
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-semibold tracking-wider text-muted uppercase">
                Full Name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-border bg-black px-4 py-3 text-sm text-white outline-none focus:border-accent/50"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-semibold tracking-wider text-muted uppercase">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-black px-4 py-3 text-sm text-white outline-none focus:border-accent/50"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="company" className="mb-2 block text-xs font-semibold tracking-wider text-muted uppercase">
                Company
              </label>
              <input
                id="company"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-lg border border-border bg-black px-4 py-3 text-sm text-white outline-none focus:border-accent/50"
                autoComplete="organization"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-semibold tracking-wider text-muted uppercase">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-lg border border-border bg-black px-4 py-3 text-sm text-white outline-none focus:border-accent/50"
              />
            </div>
            <Button type="submit" className="w-full" showArrow>
              Request Early Access
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
