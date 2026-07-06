export const SITE_NAME = 'Blind Teknologis'

export const SITE_DESCRIPTION =
  'Blind Teknologis develops enterprise workflow infrastructure for modern automotive service platforms, reducing administrative overhead while improving operational consistency and automation.'

export const CONTACT_EMAILS = {
  info: 'info@blindteknologis.com',
  privacy: 'privacy@blindteknologis.com',
} as const

export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? 'https://blindteknologis.com'

export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
