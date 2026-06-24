"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true, full: false },
  { name: "company", label: "Company Name", type: "text", required: false, full: false },
  { name: "email", label: "Email Address", type: "email", required: true, full: false },
  { name: "phone", label: "Phone Number", type: "tel", required: true, full: false },
  { name: "pickup", label: "Pickup Location", type: "text", required: true, full: false },
  { name: "delivery", label: "Delivery Location", type: "text", required: true, full: false },
  { name: "cargo", label: "Cargo Type", type: "text", required: false, full: true },
] as const

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setStatus("success")
        e.currentTarget.reset() // Clear form after success
      } else {
        alert("Something went wrong. Please try again.")
        setStatus("idle")
      }
    } catch (error) {
      alert("Failed to send message. Please check your connection.")
      setStatus("idle")
    }
  }

  return (
    <section id="quote" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Request a Quote</span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Tell us about your transport requirement
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Share a few details about your project and our team will prepare a tailored transport solution and
              competitive quote. We respond to every request promptly, 24/7.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Free, no-obligation quotation",
                "Dedicated project coordinator",
                "Coverage across all seven emirates",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-4 font-heading text-xl font-bold text-foreground">Request received</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thank you for contacting Movior Transport. Our team will get back to you shortly with a tailored
                  quote.
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
                  Submit another request
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                {/* Hidden fields for Web3Forms */}
                <input type="hidden" name="access_key" value="081259a6-ee42-4559-9184-883dc69450d3" />
                <input type="hidden" name="subject" value="New Quote Request - Movior Transport" />
                <input type="hidden" name="from_name" value="Movior Website" />
                <input type="hidden" name="redirect" value="https://movior.co" />

                {FIELDS.map((field) => (
                  <div key={field.name} className={cn(field.full && "sm:col-span-2")}>
                    <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-foreground">
                      {field.label}
                      {field.required && <span className="text-primary"> *</span>}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      className={inputClass}
                      placeholder={field.label}
                    />
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-foreground">
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    className={inputClass}
                    placeholder="Dimensions, weight, timeline, and any special requirements"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}