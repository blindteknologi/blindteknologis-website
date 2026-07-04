import { Button } from '../components/Button'
import { SEO } from '../components/SEO'

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" path="/404" />
      <section className="section-padding">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">404</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Page not found</h1>
          <p className="mt-4 text-zinc-400">The page you are looking for does not exist or has moved.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button to="/">Back to home</Button>
            <Button to="/contact" variant="secondary">Contact us</Button>
          </div>
        </div>
      </section>
    </>
  )
}
