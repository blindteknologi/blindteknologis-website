/**
 * Hero section background: hero-visual.png with layered dark overlays.
 * Uses CSS background-image (not <Image>) so the hero text stays crisp above it.
 */
export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* hero-visual.png — full bleed, cover */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/hero-visual.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark charcoal base overlay — keeps background visible at ~40% */}
      <div className="absolute inset-0 bg-charcoal/65" />

      {/* Translucent black reinforcement for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Vignette: edges darken, center stays open */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.55)_100%)]" />

      {/* Left-side gradient so left-column text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />

      {/* Bottom fade to blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-hero/80 to-transparent" />
    </div>
  )
}
