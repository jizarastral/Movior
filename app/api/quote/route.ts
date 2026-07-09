import { NextResponse } from "next/server"
import { Resend } from "resend"
import { COMPANY } from "@/lib/site"

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

const TO_EMAIL = process.env.QUOTE_TO_EMAIL || COMPANY.email
const FROM_EMAIL =
  process.env.QUOTE_FROM_EMAIL || "Movior Transport Website <onboarding@resend.dev>"

type QuoteBody = {
  name?: string
  email?: string
  phone?: string
  message?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function parseBody(body: QuoteBody) {
  const name = body.name?.trim() ?? ""
  const email = body.email?.trim() ?? ""
  const phone = body.phone?.trim() ?? ""
  const message = body.message?.trim() ?? ""
  return { name, email, phone, message }
}

function validateFields(fields: ReturnType<typeof parseBody>) {
  const { name, email, phone, message } = fields

  if (!name || !email || !message) {
    return "Name, email, and project details are required."
  }
  if (!isValidEmail(email)) {
    return "Please enter a valid email address."
  }
  if (name.length > 200 || email.length > 320 || phone.length > 50 || message.length > 5000) {
    return "One or more fields are too long."
  }
  return null
}

async function sendWithResend(fields: ReturnType<typeof parseBody>) {
  if (!resend) return { ok: false as const, reason: "missing-key" as const }

  const { name, email, phone, message } = fields
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: email,
    subject: `New quote request from ${name}`,
    text: [
      "New quote request from the Movior Transport website",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      "Project details:",
      message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
        <h2 style="margin: 0 0 16px;">New quote request</h2>
        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin: 0 0 16px;"><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p style="margin: 0 0 8px;"><strong>Project details:</strong></p>
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
  })

  if (error) {
    console.error("Resend error:", error)
    return { ok: false as const, reason: "provider" as const }
  }

  return { ok: true as const }
}

/** Fallback when Resend is not configured — delivers to TO_EMAIL via FormSubmit. */
async function sendWithFormSubmit(fields: ReturnType<typeof parseBody>) {
  const { name, email, phone, message } = fields

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(TO_EMAIL)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone: phone || "Not provided",
      message,
      _subject: `New quote request from ${name}`,
      _template: "table",
      _captcha: "false",
      _replyto: email,
    }),
  })

  if (!response.ok) {
    const text = await response.text().catch(() => "")
    console.error("FormSubmit error:", response.status, text)
    return { ok: false as const }
  }

  return { ok: true as const }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteBody
    const fields = parseBody(body)
    const validationError = validateFields(fields)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    // Prefer Resend when an API key is configured
    if (resend) {
      const result = await sendWithResend(fields)
      if (result.ok) {
        return NextResponse.json({ ok: true })
      }
      return NextResponse.json(
        { error: "Could not send the quote request. Please try again or email us directly." },
        { status: 502 },
      )
    }

    // No Resend key: use FormSubmit to deliver to info@movior.co
    const fallback = await sendWithFormSubmit(fields)
    if (!fallback.ok) {
      return NextResponse.json(
        { error: "Could not send the quote request. Please try again or email us directly." },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Quote API error:", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 },
    )
  }
}
