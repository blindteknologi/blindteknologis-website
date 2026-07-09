export const SITE_NAME = 'Blind Teknologis'

export const SITE_DESCRIPTION =
  'Blind Teknologis develops enterprise workflow software that helps automotive service businesses eliminate repetitive administrative work, improve consistency, recover missed opportunities, and operate more efficiently through intelligent automation.'

export const CONTACT_EMAIL = 'info@blindteknologis.com'
export const PRIVACY_EMAIL = 'privacy@blindteknologis.com'

export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? 'https://blindteknologis.com'

export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
