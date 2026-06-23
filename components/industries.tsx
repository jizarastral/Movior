import { Building, Construction, Factory, Fuel, Landmark, Leaf, ShoppingBag, Wrench } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const INDUSTRIES = [
  { icon: Construction, label: "Construction" },
  { icon: Building, label: "Infrastructure" },
  { icon: Fuel, label: "Oil & Gas" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Wrench, label: "Industrial Projects" },
  { icon: Landmark, label: "Government Projects" },
  { icon: Leaf, label: "Renewable Energy" },
  { icon: ShoppingBag, label: "Commercial Development" },
]

export function Industries() {
  return (
    <section id="industries" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Powering the sectors that build the UAE"
          description="Our transport solutions support a broad range of industries with specialized expertise and dependable service."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.label}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card px-4 py-8 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <industry.icon className="h-7 w-7" />
              </span>
              <span className="font-heading text-base font-semibold text-foreground">{industry.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
