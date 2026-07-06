export const SITE_NAME = 'Blind Teknologis'
export const SITE_TAGLINE = 'Enterprise Software for Automotive Service'
export const SITE_DESCRIPTION =
  'Blind Teknologis develops intelligent workflow software that helps automotive service businesses operate more efficiently through automation, consistency, and intelligent business processes.'

export const CONTACT_EMAILS = {
  info: 'info@blindteknologis.com',
  support: 'support@blindteknologis.com',
  sales: 'sales@blindteknologis.com',
  privacy: 'privacy@blindteknologis.com',
} as const

export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? 'https://blindteknologis.com'

export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
