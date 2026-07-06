import { Link } from 'react-router-dom'
import { assetUrl, SITE_NAME } from '../../lib/site'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-black/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/">
          <img
            src={assetUrl('logo.png')}
            alt={SITE_NAME}
            className="h-[2.75rem] w-auto"
          />
        </Link>
        <Link
          to="/#partner-access"
          className="hidden rounded-lg border border-border px-5 py-2 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/[0.04] sm:inline-flex"
        >
          Request Enterprise Access
        </Link>
      </div>
    </header>
  )
}
