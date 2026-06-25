"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, send data to your API or email service
    console.log("Quote request:", formData)
    setSubmitted(true)
    // Reset form after submission
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
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
            <p className="mt-2 text-sm">We’ll review your details and contact you shortly.</p>
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
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Describe the cargo, weight, dimensions, pickup/delivery locations, and any special requirements."
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Quote Request
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}