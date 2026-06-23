import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const POINTS = [
  "Heavy equipment transportation & low-bed operations",
  "Project cargo handling and industrial logistics",
  "Customized transport solutions for every project",
  "Safety-led operations with professional operators",
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/about-operations.png"
              alt="Movior Transport fleet lined up in a UAE logistics yard"
              width={720}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-xl bg-primary px-6 py-5 text-primary-foreground shadow-lg md:block">
            <div className="font-heading text-3xl font-extrabold">28+</div>
            <div className="text-sm font-medium opacity-90">Years of heritage</div>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            About Movior Transport
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A trusted transport partner for the UAE&apos;s most demanding projects
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Movior Transport LLC is a trusted transportation and logistics company delivering safe, reliable, and
            efficient transport solutions across the UAE. We specialize in heavy equipment transportation, low-bed
            trailer operations, project cargo handling, industrial logistics, and customized transport services
            tailored to the needs of our clients.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Backed by industry expertise and a commitment to operational excellence, we provide transportation
            solutions that support construction, infrastructure, industrial, and commercial projects throughout the
            region.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
