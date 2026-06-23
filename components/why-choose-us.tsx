import { Clock, Cog, MapPinned, ShieldCheck, Timer, Truck, TrendingUp, Users } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const REASONS = [
  { icon: TrendingUp, title: "28+ Years Combined Experience", desc: "Decades of heritage behind every movement." },
  { icon: ShieldCheck, title: "Safety-Focused Operations", desc: "Rigorous safety standards on every project." },
  { icon: Users, title: "Professional Drivers & Operators", desc: "Skilled, certified, and reliable teams." },
  { icon: Truck, title: "Modern Fleet", desc: "Well-maintained, purpose-built equipment." },
  { icon: MapPinned, title: "UAE-Wide Coverage", desc: "Operating across all seven emirates." },
  { icon: Clock, title: "24/7 Operational Support", desc: "Round-the-clock coordination and dispatch." },
  { icon: Timer, title: "Timely Deliveries", desc: "Schedules engineered for reliability." },
  { icon: Cog, title: "Customized Solutions", desc: "Transport plans tailored to your project." },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted by contractors and government entities"
          description="We combine heritage, modern equipment, and operational discipline to deliver transport solutions you can rely on."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div key={reason.title} className="bg-card p-6 transition-colors hover:bg-secondary">
              <reason.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-heading text-base font-bold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
