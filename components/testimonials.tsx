"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const TESTIMONIALS = [
  {
    quote:
      "Movior Transport handled the relocation of our heavy plant equipment with complete professionalism. Every milestone was met on time and the load arrived in perfect condition.",
    name: "Khalid Al Mansoori",
    role: "Project Director, Infrastructure Contractor",
    rating: 5,
  },
  {
    quote:
      "Their low-bed trailer team managed an oversized industrial load across multiple emirates seamlessly. Clear communication and faultless execution from start to finish.",
    name: "Rajesh Nair",
    role: "Logistics Manager, Oil & Gas Services",
    rating: 5,
  },
  {
    quote:
      "Reliable, safety-focused, and responsive around the clock. Movior has become our preferred partner for all specialized transport requirements in the UAE.",
    name: "Sara Abdullah",
    role: "Procurement Lead, Construction Group",
    rating: 5,
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 7000)
    return () => clearInterval(id)
  }, [count])

  const active = TESTIMONIALS[index]

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          tone="light"
          description="Trusted by major contractors and corporate clients across the United Arab Emirates."
        />

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-ink-foreground/10 bg-ink-foreground/[0.04] p-8 backdrop-blur-sm md:p-12">
          <div className="flex justify-center gap-1">
            {Array.from({ length: active.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>
          <blockquote className="mt-6 text-center text-lg leading-relaxed text-ink-foreground md:text-xl">
            &ldquo;{active.quote}&rdquo;
          </blockquote>
          <div className="mt-8 text-center">
            <div className="font-heading text-base font-bold text-ink-foreground">{active.name}</div>
            <div className="text-sm text-primary">{active.role}</div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-primary" : "w-2.5 bg-ink-foreground/30"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
