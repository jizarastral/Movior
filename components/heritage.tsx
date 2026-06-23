import { Building2, Landmark } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const GROUP = [
  {
    icon: Landmark,
    name: "Arabian Sky Transport LLC",
    detail:
      "Serving the UAE transportation sector for more than 28 years with established operations in Ajman and Dubai.",
  },
  {
    icon: Building2,
    name: "Ever Rising LLC",
    detail:
      "A trusted Dubai-based organization contributing to our commitment to quality and professional service.",
  },
]

export function Heritage() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Group Companies & Heritage"
          title="Building on a Legacy of Excellence"
          description="Movior Transport LLC is proud to be part of a respected group of companies with decades of experience in transportation and logistics across the UAE."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {GROUP.map((company) => (
            <div
              key={company.name}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <company.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">{company.name}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{company.detail}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          This strong foundation allows Movior Transport LLC to combine experience, innovation, and reliability in
          every project we undertake.
        </p>
      </div>
    </section>
  )
}
