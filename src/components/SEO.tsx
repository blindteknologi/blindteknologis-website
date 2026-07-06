import { useEffect } from 'react'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../lib/site'

interface SEOProps {
  title?: string
  description?: string
  path?: string
}

export function SEO({ title, description = SITE_DESCRIPTION, path = '' }: SEOProps) {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Automotive Service. Automated.`
  const url = `${SITE_URL}${path}`

  useEffect(() => {
    document.title = pageTitle
    const set = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    set('description', description)
    set('og:title', pageTitle, true)
    set('og:description', description, true)
    set('og:url', url, true)
    let c = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!c) {
      c = document.createElement('link')
      c.rel = 'canonical'
      document.head.appendChild(c)
    }
    c.href = url
  }, [pageTitle, description, url])

  return null
}
