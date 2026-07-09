export const SITE_NAME = 'Blind Teknologis'

export const HERO_BODY =
  'Blind Teknologis develops enterprise workflow software that helps automotive service businesses eliminate repetitive administrative work, improve consistency, and operate more efficiently through intelligent automation.'

export const SITE_DESCRIPTION = HERO_BODY

export const CONTACT_EMAIL = 'info@blindteknologis.com'
export const PRIVACY_EMAIL = 'privacy@blindteknologis.com'

export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? 'https://blindteknologis.com'

export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
