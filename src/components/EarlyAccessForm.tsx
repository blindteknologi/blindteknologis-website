'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { CONTACT_EMAILS } from '@/lib/site'

const inputClassName =
  'mt-2 w-full rounded-[16px] border border-black/10 bg-white px-4 py-3.5 text-sm text-charcoal outline-none transition-colors focus:border-brand-red'

export function EarlyAccessForm() {
  const [status, setStatus] = useState('Submitting opens your email client with the completed request.')

  function handleSubmit(formData: FormData) {
    const name = String(formData.get('name') ?? '')
    const shop = String(formData.get('shop') ?? '')
    const role = String(formData.get('role') ?? '')
    const email = String(formData.get('email') ?? '')
    const phone = String(formData.get('phone') ?? '')
    const locations = String(formData.get('locations') ?? '')
    const systems = String(formData.get('systems') ?? '')
    const priorities = String(formData.get('priorities') ?? '')

    const subject = `Early access request from ${shop || name || 'website visitor'}`
    const body = [
      `Name: ${name}`,
      `Shop: ${shop}`,
      `Role: ${role}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Locations: ${locations}`,
      `Current systems: ${systems}`,
      '',
      'Top priorities:',
      priorities,
    ].join('\n')

    window.location.href = `mailto:${CONTACT_EMAILS.sales}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus(`Opening your email client for ${CONTACT_EMAILS.sales}.`)
  }

  return (
    <form
      action={handleSubmit}
      className="rounded-[24px] border border-black/7 bg-white p-6 sm:p-8 lg:p-10"
      aria-describedby="early-access-note"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-copy-dark">
          Name
          <input required name="name" type="text" className={inputClassName} />
        </label>
        <label className="text-sm font-medium text-copy-dark">
          Shop Name
          <input required name="shop" type="text" className={inputClassName} />
        </label>
        <label className="text-sm font-medium text-copy-dark">
          Role
          <input required name="role" type="text" className={inputClassName} />
        </label>
        <label className="text-sm font-medium text-copy-dark">
          Email
          <input required name="email" type="email" className={inputClassName} />
        </label>
        <label className="text-sm font-medium text-copy-dark">
          Phone
          <input name="phone" type="tel" className={inputClassName} />
        </label>
        <label className="text-sm font-medium text-copy-dark">
          Number of Locations
          <input required name="locations" type="text" className={inputClassName} />
        </label>
        <label className="text-sm font-medium text-copy-dark sm:col-span-2">
          Current Shop Systems
          <input
            required
            name="systems"
            type="text"
            className={inputClassName}
            aria-describedby="systems-help"
          />
        </label>
        <label className="text-sm font-medium text-copy-dark sm:col-span-2">
          What would you most like to improve?
          <textarea required name="priorities" rows={6} className={`${inputClassName} resize-y`} />
        </label>
      </div>

      <p id="systems-help" className="mt-4 text-sm leading-6 text-copy">
        Include your current shop management system, inspection process, or workflow pain points if helpful.
      </p>
      <p id="early-access-note" className="mt-2 text-sm leading-6 text-copy">
        {status}
      </p>

      <button type="submit" className="pill-button mt-6 bg-brand-red text-white hover:bg-brand-red-strong">
        Request Early Access
        <ArrowRight size={14} aria-hidden="true" />
      </button>
    </form>
  )
}
