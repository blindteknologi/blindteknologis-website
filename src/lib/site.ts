import type { Metadata } from 'next'

export const SITE_NAME = 'Blind Teknologis'
export const SITE_URL = 'https://blindteknologis.com'
export const DEFAULT_DESCRIPTION =
  'Blind Teknologis builds TekBox — a knowledge platform that helps automotive repair shops recover missed revenue, reduce paperwork, and deliver clearer service advisor intelligence.'

export const NAV_ITEMS = [
  { label: 'Home', homeHref: '#top', pageHref: '/' },
  { label: 'About', homeHref: '#about', pageHref: '/about/' },
  { label: 'Products', homeHref: '#products', pageHref: '/products/' },
  { label: 'Integrations', homeHref: '#integrations', pageHref: '/integrations/' },
  { label: 'Contact', homeHref: '#contact', pageHref: '/contact/' },
] as const

export const CONTACT_EMAILS = {
  general: 'info@blindteknologis.com',
  sales: 'sales@blindteknologis.com',
  api: 'api@blindteknologis.com',
  support: 'support@blindteknologis.com',
  privacy: 'privacy@blindteknologis.com',
} as const

export const HERO_BULLETS = [
  'Identify missed opportunities and recover more approved work.',
  'Give advisors back time by reducing manual write-up and follow-up steps.',
  'Improve consistency across inspections, recommendations, and delivery.',
  'Create a clearer customer experience without adding more paperwork.',
] as const

export const FEATURE_STRIP = [
  {
    title: 'Save Hours Daily',
    description:
      'Reduce repetitive documentation and manual lookups so advisors spend more time with customers.',
  },
  {
    title: 'Improve Accuracy',
    description:
      'Bring the right vehicle and service context forward before details are missed or rework begins.',
  },
  {
    title: 'Deliver Better Experiences',
    description:
      'Make repair recommendations easier to explain, easier to approve, and easier to trust.',
  },
  {
    title: 'Increase Profitability',
    description:
      'Recover missed revenue opportunities while building a more consistent service process.',
  },
] as const

export const PLATFORM_CARDS = [
  {
    title: 'Vehicle Intelligence',
    description: 'Decode a VIN and compose a clear view of vehicle identity, capabilities, and service context.',
    href: '/products/',
  },
  {
    title: 'Maintenance Intelligence',
    description: 'Evaluate due, due soon, overdue, and not-applicable services from mileage and history.',
    href: '/products/',
  },
  {
    title: 'Evidence & Honesty',
    description: 'Show why a fact is known or unknown — never invent automotive certainty.',
    href: '/products/',
    highlight: true,
  },
  {
    title: 'Service History',
    description: 'Capture prior work so recommendations stay grounded in what the vehicle has already received.',
    href: '/products/',
  },
  {
    title: 'Shop System Integrations',
    description: 'Sit on top of existing shop systems — starting with Tekmetric — without replacing them.',
    href: '/integrations/',
  },
  {
    title: 'Service Advisor Dashboard',
    description: 'Give advisors one place to review decode, capabilities, maintenance, and evidence together.',
    href: '/products/',
  },
] as const

/** Real TekBox features verified in product codebase — public Products page source of truth. */
export const TEKBOX_FEATURES = [
  {
    title: 'VIN Decoding & Vehicle Identification',
    description:
      'Normalize a VIN into year, make, model, engine, and related identity fields using deterministic decode paths.',
  },
  {
    title: 'Vehicle Capability Enrichment',
    description:
      'Surface mechanical and capability signals across major vehicle domains with provenance on every fact.',
  },
  {
    title: 'Maintenance Intelligence',
    description:
      'Evaluate maintenance status (due, due soon, overdue, not applicable) from mileage and service history.',
  },
  {
    title: 'Vehicle Intelligence Report',
    description:
      'Compose decode, capabilities, maintenance, and evidence into one advisor-ready intelligence view.',
  },
  {
    title: 'Evidence & Data-Gap Honesty',
    description:
      'Preserve raw source data and clearly mark UNKNOWN when a fact is unverified — fail closed, never invent.',
  },
  {
    title: 'Service History',
    description:
      'Add, edit, and import service history so recommendations stay grounded in prior work.',
  },
  {
    title: 'Maintenance Timeline',
    description:
      'Visualize previous, current, and upcoming service needs on a clear timeline for advisor conversations.',
  },
  {
    title: 'Service Advisor Dashboard',
    description:
      'Browser workspace for advisors to decode a VIN and review intelligence, maintenance, and evidence panels.',
  },
  {
    title: 'Knowledge Mining Foundation',
    description:
      'Offline document-to-knowledge pipeline that builds provenance-tracked records for future live knowledge.',
  },
  {
    title: 'Shop System Integration Layer',
    description:
      'Vendor-neutral adapter architecture designed to sit alongside shop management systems — Tekmetric first.',
  },
] as const

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return new URL(normalized, SITE_URL).toString()
}

export function buildMetadata({
  title,
  description,
  path = '/',
}: {
  title?: string
  description?: string
  path?: string
}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Automotive Service Intelligence`
  const fullDescription = description ?? DEFAULT_DESCRIPTION

  return {
    title: fullTitle,
    description: fullDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      type: 'website',
      images: [
        {
          url: absoluteUrl('/images/hero-visual.png'),
          width: 1536,
          height: 1024,
          alt: `${SITE_NAME} hero visual`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [absoluteUrl('/images/hero-visual.png')],
    },
  }
}
