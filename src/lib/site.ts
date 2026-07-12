export const SITE_NAME = 'Blind Teknologis'
export const SITE_URL = 'https://blindteknologis.com'
export const SITE_DESCRIPTION =
  'Intelligent software for automotive service operations. AI-powered tools that help repair shops recover revenue, save advisor time, and modernize operations.'
export const CONTACT_EMAIL = 'info@blindteknologis.com'

export const CONTACT_DEPARTMENTS = [
  {
    id: 'info',
    email: 'info@blindteknologis.com',
    label: 'General Info',
    description: 'General inquiries about Blind Teknologis and how we can help your shop.',
    formType: 'business' as const,
  },
  {
    id: 'sales',
    email: 'sales@blindteknologis.com',
    label: 'Sales',
    description: 'Early access requests, pricing discussions, and partnership inquiries.',
    formType: 'business' as const,
  },
  {
    id: 'api',
    email: 'api@blindteknologis.com',
    label: 'API & Integrations',
    description: 'Technical connectivity, integration questions, and API access.',
    formType: 'business' as const,
  },
  {
    id: 'support',
    email: 'support@blindteknologis.com',
    label: 'Support',
    description: 'Product support, technical assistance, and troubleshooting.',
    formType: 'support' as const,
  },
  {
    id: 'privacy',
    email: 'privacy@blindteknologis.com',
    label: 'Privacy',
    description: 'Privacy policy questions, data requests, and compliance matters.',
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
    description: 'Pull history, surface recommendations, and show customers with clarity.',
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
    description: 'Seamlessly connect with your existing shop management systems.',
  },
  {
    title: 'VIN Decoding',
    description: 'Decode more data points and uncover what other tools miss.',
  },
] as const

export const PLATFORM_FUTURE_MODULE = {
  title: 'Future AI Modules',
  description: 'Expanding capabilities built for the next generation of shop intelligence.',
} as const

export const PLATFORM_MODULES = [...PLATFORM_HERO_MODULES, PLATFORM_FUTURE_MODULE] as const

export const PRODUCTS = [
  {
    id: 'tekbox',
    title: 'TekBox Platform',
    description:
      'The unified foundation for vehicle intelligence, workflow automation, and shop operations.',
  },
  {
    id: 'maintenance-intelligence',
    title: 'Maintenance Intelligence',
    description:
      'Surface maintenance context and service requirements with clarity and confidence.',
  },
  {
    id: 'technician-ai',
    title: 'Technician AI',
    description:
      'Transform technical repair notes into clear, customer-friendly explanations.',
  },
  {
    id: 'inspection-intelligence',
    title: 'Inspection Intelligence',
    description:
      'Turn digital inspections into actionable insights and revenue opportunities.',
  },
  {
    id: 'vehicle-health',
    title: 'Digital Vehicle Health Reports',
    description:
      'Deliver professional vehicle health summaries that build trust and drive approvals.',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description:
      'Automate repetitive tasks so your team focuses on customers and repairs.',
  },
  {
    id: 'business-analytics',
    title: 'Business Analytics',
    description:
      'Track performance, identify trends, and make data-driven decisions for your shop.',
  },
  {
    id: 'future-marketplace',
    title: 'Future Marketplace',
    description:
      'An expanding ecosystem of integrations, modules, and partner solutions.',
  },
] as const

export const INTEGRATIONS = [
  { name: 'Tekmetric', category: 'Shop Management' },
  { name: 'Shop-Ware', category: 'Shop Management' },
  { name: 'Mitchell1', category: 'Shop Management' },
  { name: 'Protractor', category: 'Shop Management' },
  { name: 'NAPA TRACS', category: 'Shop Management' },
  { name: 'CCC', category: 'Estimating' },
  { name: 'VIN Decoders', category: 'Vehicle Data' },
  { name: 'Open API', category: 'Custom Integration' },
] as const

export const ABOUT_STATS = [
  { value: '82+', label: 'Hours Saved Monthly', sub: 'Per service advisor' },
  { value: '24', label: 'Opportunities Recovered', sub: 'Average per month' },
  { value: '18%', label: 'Revenue Growth', sub: 'From missed services' },
  { value: '32', label: 'Systems Scanned', sub: 'Per vehicle profile' },
] as const

export const SOCIAL_LINKS = [
  { href: 'https://linkedin.com/company/blindteknologis', label: 'LinkedIn' },
  { href: 'https://x.com/blindteknologis', label: 'X (Twitter)' },
  { href: 'https://github.com/blindteknologi', label: 'GitHub' },
] as const
