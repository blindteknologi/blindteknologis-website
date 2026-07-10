'use client'

import { useState, type FormEvent } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CONTACT_DEPARTMENTS, type ContactDepartmentId } from '@/lib/site'
import { Mail, MapPin, Send } from 'lucide-react'

const SHOP_DETAILS_TIP =
  'Type of auto repairs, number of advisors and technicians, current shop management system, current digital inspection platform, if they are a tire installation shop..'

const MESSAGE_TIP = 'What can we help you with?'

const inputClass =
  'w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-brand-red focus:ring-1 focus:ring-brand-red'

const labelClass = 'mb-1.5 block text-xs font-semibold tracking-wide text-charcoal uppercase'

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  )
}

export default function ContactPage() {
  const [departmentId, setDepartmentId] = useState<ContactDepartmentId>('info')
  const [submitted, setSubmitted] = useState(false)

  const department =
    CONTACT_DEPARTMENTS.find((d) => d.id === departmentId) ?? CONTACT_DEPARTMENTS[0]

  function handleDepartmentChange(id: ContactDepartmentId) {
    setDepartmentId(id)
    setSubmitted(false)
  }

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
              Get in Touch
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-300">
              Choose the right team below and we&apos;ll route your request to the right place.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,280px)_1fr]">
              <div>
                <h2 className="font-display text-xl font-bold tracking-tight text-charcoal uppercase">
                  Contact Options
                </h2>
                <ul className="mt-6 space-y-2">
                  {CONTACT_DEPARTMENTS.map((dept) => {
                    const isActive = dept.id === departmentId
                    return (
                      <li key={dept.id}>
                        <button
                          type="button"
                          onClick={() => handleDepartmentChange(dept.id)}
                          className={`w-full rounded-lg border px-4 py-3 text-left transition-colors ${
                            isActive
                              ? 'border-brand-red bg-red-50'
                              : 'border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50'
                          }`}
                        >
                          <span
                            className={`block text-sm font-semibold ${
                              isActive ? 'text-brand-red' : 'text-charcoal'
                            }`}
                          >
                            {dept.label}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted">{dept.email}</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>

                <ul className="mt-8 space-y-3 text-sm text-muted">
                  <li className="flex items-center gap-3">
                    <Mail size={16} className="shrink-0 text-brand-red" aria-hidden="true" />
                    <a href={`mailto:${department.email}`} className="hover:text-charcoal">
                      {department.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin size={16} className="shrink-0 text-brand-red" aria-hidden="true" />
                    United States
                  </li>
                </ul>
              </div>

              <div>
                <div className="mb-6">
                  <h2 className="font-display text-xl font-bold tracking-tight text-charcoal uppercase">
                    {department.label}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{department.description}</p>
                </div>

                {submitted ? (
                  <div className="rounded-2xl bg-surface-light p-8 text-center">
                    <p className="text-lg font-semibold text-charcoal">Thank you!</p>
                    <p className="mt-2 text-sm text-muted">
                      We&apos;ve received your message and will respond via {department.email}.
                    </p>
                  </div>
                ) : (
                  <form key={departmentId} onSubmit={handleSubmit} className="space-y-5">
                    <Field id="name" label="Name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className={inputClass}
                      />
                    </Field>

                    <Field id="email" label="Email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={inputClass}
                      />
                    </Field>

                    <Field id="jobTitle" label="Job Title">
                      <input
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        required
                        className={inputClass}
                      />
                    </Field>

                    {department.formType === 'business' && (
                      <>
                        <Field id="location" label="Location">
                          <input
                            id="location"
                            name="location"
                            type="text"
                            required
                            className={inputClass}
                          />
                        </Field>

                        <Field id="phone" label="Phone Number">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            className={inputClass}
                          />
                        </Field>

                        <Field id="shopDetails" label="Shop Details">
                          <textarea
                            id="shopDetails"
                            name="shopDetails"
                            rows={4}
                            required
                            placeholder={SHOP_DETAILS_TIP}
                            className={`${inputClass} resize-none`}
                          />
                        </Field>

                        <Field id="message" label="Message">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder={MESSAGE_TIP}
                            className={`${inputClass} resize-none`}
                          />
                        </Field>
                      </>
                    )}

                    {department.formType === 'support' && (
                      <>
                        <Field id="phone" label="Phone Number">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            className={inputClass}
                          />
                        </Field>

                        <Field id="location" label="Location">
                          <input
                            id="location"
                            name="location"
                            type="text"
                            required
                            className={inputClass}
                          />
                        </Field>

                        <Field id="directContact" label="Direct Contact Number">
                          <input
                            id="directContact"
                            name="directContact"
                            type="tel"
                            required
                            className={inputClass}
                          />
                        </Field>

                        <Field id="issue" label="Issue">
                          <textarea
                            id="issue"
                            name="issue"
                            rows={4}
                            required
                            placeholder={MESSAGE_TIP}
                            className={`${inputClass} resize-none`}
                          />
                        </Field>
                      </>
                    )}

                    {department.formType === 'privacy' && (
                      <>
                        <Field id="phone" label="Phone Number">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            className={inputClass}
                          />
                        </Field>

                        <Field id="location" label="Location">
                          <input
                            id="location"
                            name="location"
                            type="text"
                            required
                            className={inputClass}
                          />
                        </Field>

                        <Field id="message" label="Message">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder={MESSAGE_TIP}
                            className={`${inputClass} resize-none`}
                          />
                        </Field>
                      </>
                    )}

                    <input type="hidden" name="department" value={department.id} />

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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
