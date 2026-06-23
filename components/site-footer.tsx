import Image from "next/image"
import { AtSign, Globe, Mail, MapPin, Phone, Share2 } from "lucide-react"
import { COMPANY, NAV_LINKS } from "@/lib/site"

const SERVICES = [
  "Heavy Equipment Transport",
  "Low Bed Trailer Services",
  "Flatbed Trailer Transport",
  "Project Cargo Logistics",
  "Oversized Load Transport",
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <span className="inline-flex items-center rounded-md bg-primary px-2 py-1.5">
            <Image src="/movior-logo.png" alt="Movior Transport logo" width={140} height={60} className="h-9 w-auto" />
          </span>
          <p className="mt-5 text-sm leading-relaxed text-ink-foreground/70">
            Reliable transportation and logistics solutions across the UAE. {COMPANY.tagline}
          </p>
          <div className="mt-5 flex gap-3">
            {[Globe, Share2, AtSign].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media link"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-foreground/10 text-ink-foreground transition-colors hover:bg-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-ink-foreground">Company</h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ink-foreground/70 transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-ink-foreground">Services</h3>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((service) => (
              <li key={service}>
                <a href="#services" className="text-sm text-ink-foreground/70 transition-colors hover:text-primary">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-ink-foreground">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-ink-foreground/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              Abu Dhabi, United Arab Emirates
            </li>
            {COMPANY.phones.map((phone, i) => (
              <li key={phone} className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href={`tel:${COMPANY.phoneLinks[i]}`} className="transition-colors hover:text-primary">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-primary">
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-ink-foreground/60 md:flex-row md:px-6">
          <p>
            &copy; {year} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
