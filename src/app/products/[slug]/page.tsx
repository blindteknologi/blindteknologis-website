import { permanentRedirect } from 'next/navigation'

/** Legacy marketing module URLs — keep for bookmarks, send to honest Products page. */
const LEGACY_SLUGS = [
  'tekbox-platform',
  'maintenance-intelligence',
  'technician-ai',
  'inspection-intelligence',
  'digital-vehicle-health-reports',
  'workflow-automation',
  'business-analytics',
  'future-marketplace',
] as const

export const dynamicParams = false

export function generateStaticParams() {
  return LEGACY_SLUGS.map((slug) => ({ slug }))
}

export default function LegacyProductSlugPage() {
  permanentRedirect('/products/')
}
