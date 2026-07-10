export const SITE_NAME = 'Blind Teknologis'
export const SITE_URL = 'https://blindteknologis.com'
export const CONTACT_EMAIL = 'info@blindteknologis.com'

export const CONTACT_DEPARTMENTS = [
  {
    id: 'info',
    email: 'info@blindteknologis.com',
    label: 'General Info',
    description: 'General inquiries about Blind Teknologis.',
    formType: 'business' as const,
  },
  {
    id: 'sales',
    email: 'sales@blindteknologis.com',
    label: 'Sales',
    description: 'Early access, pricing, and partnership discussions.',
    formType: 'business' as const,
  },
  {
    id: 'api',
    email: 'api@blindteknologis.com',
    label: 'API & Integrations',
    description: 'Integration questions and technical connectivity.',
    formType: 'business' as const,
  },
  {
    id: 'support',
    email: 'support@blindteknologis.com',
    label: 'Support',
    description: 'Product support and technical assistance.',
    formType: 'support' as const,
  },
  {
    id: 'privacy',
    email: 'privacy@blindteknologis.com',
    label: 'Privacy',
    description: 'Privacy policy questions and data requests.',
    formType: 'privacy' as const,
  },
] as const

export type ContactDepartmentId = (typeof CONTACT_DEPARTMENTS)[number]['id']

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/products/', label: 'Products' },
  { href: '/integrations/', label: 'Integrations' },
  { href: '/contact/', label: 'Contact' },
] as const
