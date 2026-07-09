import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { SEO } from '../components/SEO'

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" />
      <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-xs tracking-[0.25em] text-accent uppercase">404</p>
        <h1 className="font-display mt-4 text-3xl font-semibold text-white">Page not found</h1>
        <Button to="/" className="mt-8">
          Return home
        </Button>
        <Link to="/contact" className="mt-4 text-sm text-muted hover:text-white">
          Contact
        </Link>
      </section>
    </>
  )
}
