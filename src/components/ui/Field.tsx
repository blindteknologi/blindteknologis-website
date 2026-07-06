import type { InputHTMLAttributes, SelectHTMLAttributes } from 'react'

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function Field({ label, error, id, className = '', ...props }: FieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div>
      <label htmlFor={fieldId} className="mb-2 block text-xs font-medium tracking-wider text-text-secondary uppercase">
        {label}
      </label>
      <input
        id={fieldId}
        className={`w-full rounded-lg border bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-accent/50 focus:ring-1 focus:ring-accent/30 ${error ? 'border-accent/60' : 'border-border'} ${className}`}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-accent">{error}</p>}
    </div>
  )
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  options: { value: string; label: string }[]
}

export function SelectField({ label, error, id, options, className = '', ...props }: SelectFieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div>
      <label htmlFor={fieldId} className="mb-2 block text-xs font-medium tracking-wider text-text-secondary uppercase">
        {label}
      </label>
      <select
        id={fieldId}
        className={`w-full appearance-none rounded-lg border bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30 ${error ? 'border-accent/60' : 'border-border'} ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-panel">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-xs text-accent">{error}</p>}
    </div>
  )
}
