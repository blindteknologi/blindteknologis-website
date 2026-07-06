import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { SEO } from '../components/SEO'

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you requested could not be found." />

      <section className="flex min-h-[60vh] items-center justify-center px-6 py-24">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Page not found
          </h1>
          <p className="mt-4 text-white/45">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-10">
            <Button to="/">Return home</Button>
          </div>
          <Link
            to="/contact"
            className="mt-4 inline-block text-sm text-white/40 transition-colors hover:text-white"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
