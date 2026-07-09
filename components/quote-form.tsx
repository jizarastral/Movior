"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { COMPANY } from "@/lib/site"

/** Quote requests go to info@movior.co via FormSubmit (works on static hosting). */
const QUOTE_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(COMPANY.email)}`

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch(QUOTE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || "Not provided",
          message: formData.message.trim(),
          _subject: `New quote request from ${formData.name.trim()}`,
          _template: "table",
          _captcha: "false",
          _replyto: formData.email.trim(),
        }),
      })

      if (!res.ok) {
        setError("Could not send your request. Please try again or email us directly.")
        return
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setTimeout(() => setSubmitted(false), 8000)
    } catch {
      setError("Could not send your request. Please try again or email us directly.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="quote" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Request a Quote"
          title="Tell us about your transport needs"
          description="Fill in the form and our team will get back to you within 24 hours with a tailored solution."
        />

        {submitted ? (
          <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-50 p-6 text-center text-green-700">
            <p className="text-lg font-semibold">Thank you for your request!</p>
            <p className="mt-2 text-sm">
              We&apos;ll review your details and contact you shortly at the email you provided.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                maxLength={200}
                value={formData.name}
                onChange={handleChange}
                disabled={submitting}
                className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={320}
                value={formData.email}
                onChange={handleChange}
                disabled={submitting}
                className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                maxLength={50}
                value={formData.phone}
                onChange={handleChange}
                disabled={submitting}
                className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                placeholder="+971 50 123 4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={5000}
                value={formData.message}
                onChange={handleChange}
                disabled={submitting}
                className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                placeholder="Describe the cargo, weight, dimensions, pickup/delivery locations, and any special requirements."
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}{" "}
                <a href={`mailto:${COMPANY.email}`} className="font-semibold underline">
                  {COMPANY.email}
                </a>
              </div>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={submitting}>
              {submitting ? "Sending..." : "Send Quote Request"}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
