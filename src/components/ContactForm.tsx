'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { CONTACT_EMAILS } from '@/lib/site'

type Department = {
  label: string
  email: string
  description: string
}

const departments: Department[] = [
  {
    label: 'General Inquiries',
    email: CONTACT_EMAILS.general,
    description: 'Questions about the company, the website, or where to start.',
  },
  {
    label: 'Sales',
    email: CONTACT_EMAILS.sales,
    description: 'Early access, product fit, and shop workflow conversations.',
  },
  {
    label: 'API & Integrations',
    email: CONTACT_EMAILS.api,
    description: 'Tekmetric API diligence, connectivity planning, and integration discussions.',
  },
  {
    label: 'Support',
    email: CONTACT_EMAILS.support,
    description: 'Product support and operational assistance for TekBox users.',
  },
  {
    label: 'Privacy',
    email: CONTACT_EMAILS.privacy,
    description: 'Privacy requests, data-protection questions, and policy inquiries.',
  },
]

const inputClassName =
  'mt-2 w-full rounded-[16px] border border-black/10 bg-white px-4 py-3.5 text-sm text-charcoal outline-none transition-colors focus:border-brand-red'

export function ContactForm() {
  const [department, setDepartment] = useState<Department>(departments[0])
  const [status, setStatus] = useState('Submitting opens your email client with the completed message.')

  function handleSubmit(formData: FormData) {
    const name = String(formData.get('name') ?? '')
    const company = String(formData.get('company') ?? '')
    const role = String(formData.get('role') ?? '')
    const email = String(formData.get('email') ?? '')
    const phone = String(formData.get('phone') ?? '')
    const message = String(formData.get('message') ?? '')

    const subject = `${department.label} inquiry from ${name || 'website visitor'}`
    const body = [
      `Name: ${name}`,
      `Shop / Company: ${company}`,
      `Role: ${role}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      '',
      'Message:',
      message,
    ].join('\n')

    window.location.href = `mailto:${department.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus(`Opening your email client for ${department.email}.`)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
      <div className="space-y-3">
        {departments.map((option) => {
          const active = option.email === department.email

          return (
            <button
              key={option.email}
              type="button"
              onClick={() => {
                setDepartment(option)
                setStatus('Submitting opens your email client with the completed message.')
              }}
              className={`w-full rounded-[18px] border px-5 py-4 text-left transition-colors ${
                active ? 'border-brand-red bg-red-50/80' : 'border-black/7 bg-white hover:bg-surface'
              }`}
            >
              <p className={`text-sm font-semibold ${active ? 'text-brand-red' : 'text-charcoal'}`}>
                {option.label}
              </p>
              <p className="mt-1 text-sm text-copy">{option.email}</p>
              <p className="mt-3 text-sm leading-6 text-copy">{option.description}</p>
            </button>
          )
        })}
      </div>

      <form
        action={handleSubmit}
        className="rounded-[22px] border border-black/7 bg-white p-6 sm:p-8"
        aria-describedby="contact-form-note"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-medium text-copy-dark">
            Name
            <input required name="name" type="text" className={inputClassName} />
          </label>
          <label className="text-sm font-medium text-copy-dark">
            Shop / Company
            <input required name="company" type="text" className={inputClassName} />
          </label>
          <label className="text-sm font-medium text-copy-dark">
            Role
            <input required name="role" type="text" className={inputClassName} />
          </label>
          <label className="text-sm font-medium text-copy-dark">
            Email
            <input required name="email" type="email" className={inputClassName} />
          </label>
          <label className="text-sm font-medium text-copy-dark sm:col-span-2">
            Phone
            <input name="phone" type="tel" className={inputClassName} />
          </label>
          <label className="text-sm font-medium text-copy-dark sm:col-span-2">
            Message
            <textarea required name="message" rows={6} className={`${inputClassName} resize-y`} />
          </label>
        </div>

        <p id="contact-form-note" className="mt-4 text-sm leading-6 text-copy">
          {status}
        </p>

        <button type="submit" className="pill-button mt-6 bg-brand-red text-white hover:bg-brand-red-strong">
          Send Message
          <Send size={14} aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}
