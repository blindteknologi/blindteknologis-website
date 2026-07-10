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

export const PLATFORM_HERO_MODULES = [
  {
    title: 'Maintenance Intelligence',
    description: 'Pull history, get recommendations, and show customers with clarity.',
  },
  {
    title: 'Technician Story Rewriting',
    description: 'Transform technician notes into clear, customer-friendly summaries.',
  },
  {
    title: 'Comeback Alerts',
    description: 'Get ahead of potential comebacks before they impact your shop.',
    highlight: true,
  },
  {
    title: 'Shop System Integrations',
    description: 'Seamlessly connect with your shop management systems.',
  },
  {
    title: 'Extensive VIN Decoding',
    description: 'Decode more data points and uncover what others miss.',
  },
] as const

export const PLATFORM_FUTURE_MODULE = {
  title: 'Future AI Modules',
  description: 'Expanding capabilities built for the next generation of shop intelligence.',
} as const

export const PLATFORM_MODULES = [...PLATFORM_HERO_MODULES, PLATFORM_FUTURE_MODULE] as const

export const PRODUCTS = [
  {
    title: 'TekBox Platform',
    description:
      'The unified foundation for vehicle intelligence, workflow automation, and shop operations.',
  },
  {
    title: 'Maintenance Intelligence',
    description:
      'Surface maintenance context and service requirements with clarity and confidence.',
  },
  {
    title: 'Technician AI',
    description:
      'Transform technical repair notes into clear, customer-friendly explanations.',
  },
  {
    title: 'Inspection Intelligence',
    description:
      'Turn digital inspections into actionable insights and revenue opportunities.',
  },
  {
    title: 'Digital Vehicle Health Reports',
    description:
      'Deliver professional vehicle health summaries that build trust and drive approvals.',
  },
  {
    title: 'Workflow Automation',
    description:
      'Automate repetitive tasks so your team focuses on customers and repairs.',
  },
  {
    title: 'Business Analytics',
    description:
      'Track performance, identify trends, and make data-driven decisions for your shop.',
  },
  {
    title: 'Future Marketplace',
    description:
      'An expanding ecosystem of integrations, modules, and partner solutions.',
  },
] as const

export const INTEGRATIONS = [
  'Tekmetric',
  'Shop-Ware',
  'Mitchell1',
  'Protractor',
  'NAPA TRACS',
  'CCC',
  'VIN Decoders',
  'Open API',
] as const

export const ABOUT_STATS = [
  { value: '82+', label: 'Hours Saved Monthly', sub: 'Per service advisor' },
  { value: '24', label: 'Opportunities Recovered', sub: 'Average per month' },
  { value: '18%', label: 'Revenue Growth', sub: 'From missed services' },
  { value: '32', label: 'Systems Scanned', sub: 'Per vehicle profile' },
] as const

export const SOCIAL_LINKS = [
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'https://twitter.com', label: 'X (Twitter)' },
  { href: 'https://github.com', label: 'GitHub' },
] as const
