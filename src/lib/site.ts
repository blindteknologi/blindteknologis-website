export const SITE_NAME = 'Blind Teknologis'
export const SITE_TAGLINE = 'Automotive Intelligence Platform'
export const SITE_DESCRIPTION =
  'Blind Teknologis develops intelligent software that transforms vehicle data into actionable insights for modern automotive service.'

export const GITHUB_ORG = 'blindteknologi'
export const GITHUB_REPO = 'blindteknologis-website'
export const GITHUB_URL = `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}`
export const TEKBOX_REPO_URL = `https://github.com/${GITHUB_ORG}/TekBox`

export const CONTACT_EMAILS = {
  info: 'info@blindteknologis.com',
  support: 'support@blindteknologis.com',
  sales: 'sales@blindteknologis.com',
  api: 'api@blindteknologis.com',
  privacy: 'privacy@blindteknologis.com',
} as const

export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? 'https://blindteknologis.com'

export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
