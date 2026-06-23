import {
  Boxes,
  Building2,
  Container,
  Cog,
  Factory,
  HardHat,
  MapPin,
  PackageOpen,
  Truck,
  Weight,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const SERVICES = [
  { icon: Weight, title: "Heavy Equipment Transportation", desc: "Safe movement of heavy plant and equipment across the UAE." },
  { icon: Truck, title: "Low Bed Trailer Services", desc: "Multi-axle low-bed trailers for tall and heavy loads." },
  { icon: Container, title: "Flatbed Trailer Transport", desc: "Flexible flatbed haulage for varied cargo profiles." },
  { icon: Cog, title: "Heavy Machinery Relocation", desc: "Precision relocation of industrial machinery." },
  { icon: HardHat, title: "Construction Equipment Transport", desc: "Reliable delivery of construction assets to site." },
  { icon: PackageOpen, title: "Project Cargo Logistics", desc: "End-to-end planning for complex project cargo." },
  { icon: Factory, title: "Industrial Logistics Solutions", desc: "Tailored logistics for industrial operations." },
  { icon: Boxes, title: "Oversized Load Transportation", desc: "Permitted, escorted movement of oversized loads." },
  { icon: Building2, title: "Infrastructure Project Support", desc: "Dedicated support for infrastructure programs." },
  { icon: MapPin, title: "UAE Nationwide Transport", desc: "Coverage across all seven emirates, 24/7." },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Specialized transport solutions, delivered with precision"
          description="From heavy equipment to complex project cargo, Movior Transport provides the full spectrum of specialized transportation services across the UAE."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
