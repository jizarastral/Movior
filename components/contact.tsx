import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { COMPANY } from "@/lib/site"

export function Contact() {
  return (
    <section id="contact" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Contact Us"
          title="Get in touch with our team"
          description="Reach out to discuss your transport requirements. Our team is available around the clock to support your project."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-5">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground">Head Office</h3>
                <p className="mt-1 text-sm text-muted-foreground">Abu Dhabi, United Arab Emirates</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground">Phone</h3>
                <div className="mt-1 flex flex-col gap-1">
                  {COMPANY.phones.map((phone, i) => (
                    <a
                      key={phone}
                      href={`tel:${COMPANY.phoneLinks[i]}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground">Email</h3>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-6 transition-colors hover:bg-primary/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground">WhatsApp</h3>
                <p className="mt-1 text-sm text-muted-foreground">Chat with us for a quick response</p>
              </div>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Movior Transport location — Abu Dhabi"
              src="https://www.google.com/maps?q=Abu+Dhabi,+United+Arab+Emirates&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
