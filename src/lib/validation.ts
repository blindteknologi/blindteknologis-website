const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.uk',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'msn.com',
  'aol.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'protonmail.com',
  'proton.me',
  'mail.com',
  'zoho.com',
  'yandex.com',
  'gmx.com',
  'gmx.net',
  'fastmail.com',
  'tutanota.com',
  'hey.com',
  'pm.me',
])

export function isCorporateEmail(email: string): boolean {
  const parts = email.trim().toLowerCase().split('@')
  if (parts.length !== 2) return false
  const domain = parts[1]
  return domain.length > 0 && !FREE_EMAIL_DOMAINS.has(domain)
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}
