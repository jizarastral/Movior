import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Heritage } from "@/components/heritage"
import { CeoMessage } from "@/components/ceo-message"
import { Services } from "@/components/services"
import { Fleet } from "@/components/fleet"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Industries } from "@/components/industries"
import { Testimonials } from "@/components/testimonials"
import { QuoteForm } from "@/components/quote-form"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <About />
        <Heritage />
        <CeoMessage />
        <Services />
        <Fleet />
        <WhyChooseUs />
        <Industries />
        <Testimonials />
        <QuoteForm />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
