import Image from "next/image"
import { Quote } from "lucide-react"

const PARAGRAPHS = [
  "At Movior Transport, we believe transportation is more than moving cargo—it is about building trust, creating lasting partnerships, and delivering excellence with every journey.",
  "Our company was established with a clear vision: to provide dependable transportation and logistics solutions that support the continued growth and development of the UAE. Every project we undertake reflects our commitment to safety, professionalism, efficiency, and customer satisfaction.",
  "We are proud to build upon the strong heritage of Arabian Sky Transport LLC, which has successfully served the UAE market for more than 28 years, along with the support and expertise of Ever Rising LLC. Their legacy inspires us to maintain the highest standards while embracing innovation and modern transportation practices.",
  "As we continue to grow, our focus remains on delivering reliable transportation solutions, fostering long-term relationships, and contributing to the success of our clients and the UAE's future development.",
]

export function CeoMessage() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-ink-foreground/10 shadow-xl">
            <Image
              src="/ceo-bassam-muhammed.png"
              alt="Bassam Muhammed, Chief Executive Officer of Movior Transport LLC"
              width={560}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-5">
            <div className="font-heading text-xl font-bold text-ink-foreground">Besam Muhammad</div>
            <div className="text-sm font-medium text-primary">Chief Executive Officer, Movior Transport LLC</div>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">A Message from Our CEO</span>
          <Quote className="mt-6 h-10 w-10 text-primary" aria-hidden />
          <h2 className="mt-4 text-balance font-heading text-2xl font-bold leading-snug text-ink-foreground md:text-3xl">
            Welcome to Movior Transport LLC.
          </h2>
          <div className="mt-6 space-y-5">
            {PARAGRAPHS.map((p, i) => (
              <p key={i} className="leading-relaxed text-ink-foreground/75">
                {p}
              </p>
            ))}
            <p className="leading-relaxed text-ink-foreground/75">
              Thank you for your trust and confidence in Movior Transport LLC. We look forward to serving you and
              becoming your preferred transportation partner.
            </p>
          </div>
          <div className="mt-8 border-l-2 border-primary pl-4">
            <div className="font-heading text-lg font-bold text-ink-foreground">Besam Muhammad</div>
            <div className="text-sm text-ink-foreground/60">Chief Executive Officer · Movior Transport LLC</div>
          </div>
        </div>
      </div>
    </section>
  )
}
