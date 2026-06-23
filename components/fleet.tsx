import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"

const FLEET = [
  {
    image: "/fleet-lowbed.png",
    name: "Low-Bed Trailers",
    specs: ["3–7 axle configurations", "Up to 80T capacity", "Hydraulic ramps"],
  },
  {
    image: "/fleet-flatbed.png",
    name: "Flatbed Trailers",
    specs: ["40ft & 48ft beds", "Versatile cargo", "Full lashing kit"],
  },
  {
    image: "/fleet-heavytruck.png",
    name: "Heavy-Duty Prime Movers",
    specs: ["High-torque tractors", "GPS tracked", "Euro-spec engines"],
  },
  {
    image: "/fleet-projectcargo.png",
    name: "Specialized & Project Cargo Units",
    specs: ["Modular transporters", "Oversized loads", "Escort-ready"],
  },
]

export function Fleet() {
  return (
    <section id="fleet" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Our Fleet"
          title="A modern fleet built for every load"
          description="Purpose-built trailers and prime movers, maintained to the highest standards and ready for deployment across the UAE."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FLEET.map((unit) => (
            <div
              key={unit.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={unit.image}
                  alt={unit.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <h3 className="absolute bottom-3 left-4 right-4 font-heading text-lg font-bold text-ink-foreground">
                  {unit.name}
                </h3>
              </div>
              <ul className="space-y-2 p-5">
                {unit.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
