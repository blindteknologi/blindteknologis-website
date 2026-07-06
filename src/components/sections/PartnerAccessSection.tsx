import { useState, type FormEvent } from 'react'
import { Button } from '../ui/Button'
import { Field, SelectField } from '../ui/Field'
import { Modal } from '../ui/Modal'
import { isCorporateEmail, isValidEmail } from '../../lib/validation'

const SHOP_OPTIONS = [
  { value: '1-100', label: '1–100' },
  { value: '101-500', label: '101–500' },
  { value: '500+', label: '500+' },
]

interface FormData {
  fullName: string
  email: string
  company: string
  platform: string
  shops: string
}

interface FormErrors {
  fullName?: string
  email?: string
  company?: string
  platform?: string
}

const initial: FormData = {
  fullName: '',
  email: '',
  company: '',
  platform: '',
  shops: '1-100',
}

export function PartnerAccessSection() {
  const [form, setForm] = useState<FormData>(initial)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const next: FormErrors = {}

    if (!form.fullName.trim()) next.fullName = 'Full name is required'
    if (!form.email.trim()) {
      next.email = 'Corporate email is required'
    } else if (!isValidEmail(form.email)) {
      next.email = 'Enter a valid email address'
    } else if (!isCorporateEmail(form.email)) {
      next.email = 'A corporate email address is required'
    }
    if (!form.company.trim()) next.company = 'Company is required'
    if (!form.platform.trim()) next.platform = 'Platform is required'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm(initial)
    setErrors({})
  }

  return (
    <>
      <section id="partner-access" className="border-b border-border">
        <div className="section-pad mx-auto max-w-2xl">
          <div className="text-center">
            <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
              Partner Access
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Request Early Developer Access
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-text-secondary">
              Blind Teknologis is currently engaging with select enterprise partners.
              Organizations interested in technical documentation, integration planning, or
              sandbox evaluation may request access below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="panel mt-12 rounded-2xl p-8 md:p-10" noValidate>
            <div className="space-y-5">
              <Field
                label="Full Name"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                error={errors.fullName}
                autoComplete="name"
              />
              <Field
                label="Corporate Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                error={errors.email}
                autoComplete="email"
                placeholder="you@company.com"
              />
              <Field
                label="Company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                error={errors.company}
                autoComplete="organization"
              />
              <Field
                label="Platform"
                value={form.platform}
                onChange={(e) => setForm({ ...form, platform: e.target.value })}
                error={errors.platform}
                placeholder="Your platform or organization type"
              />
              <SelectField
                label="Estimated Active Shops"
                value={form.shops}
                onChange={(e) => setForm({ ...form, shops: e.target.value })}
                options={SHOP_OPTIONS}
              />
            </div>

            <Button type="submit" className="mt-8 w-full">
              Request Enterprise Access
            </Button>
          </form>
        </div>
      </section>

      <Modal
        open={submitted}
        onClose={() => setSubmitted(false)}
        title="Request Received"
      >
        <p>
          Thank you for your interest in Blind Teknologis. Our enterprise team will review
          your request and respond within two business days.
        </p>
        <p className="mt-4">
          Initial technical documentation and architecture reviews are provided only after
          execution of a Mutual Non-Disclosure Agreement.
        </p>
      </Modal>
    </>
  )
}
