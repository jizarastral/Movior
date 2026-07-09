import { ArrowRight, Phone, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY } from "@/lib/site"

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* Realistic highway truck footage (muted loop) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-truck-poster.jpg"
        aria-hidden
      >
        <source src="/hero-truck-road.mp4" type="video/mp4" />
      </video>

      {/* overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/45" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-16 md:px-6 md:pt-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-sm font-medium text-ink-foreground backdrop-blur-sm">
            <Truck className="h-4 w-4 text-primary" />
            {COMPANY.tagline}
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-tight tracking-tight text-ink-foreground sm:text-5xl lg:text-6xl">
            Moving Business Forward Across the UAE
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-foreground/80 md:text-lg">
            Providing reliable transportation, logistics, heavy equipment movement, low-bed trailer services, project
            cargo solutions, and specialized transport services throughout the United Arab Emirates.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <a href="#quote">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-ink-foreground/30 bg-ink-foreground/10 px-6 text-base text-ink-foreground backdrop-blur-sm hover:bg-ink-foreground/20 hover:text-ink-foreground"
            >
              <a href="#fleet">View Our Fleet</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 px-6 text-base text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
            >
              <a href={`tel:${COMPANY.phoneLinks[0]}`}>
                <Phone className="h-5 w-5" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
