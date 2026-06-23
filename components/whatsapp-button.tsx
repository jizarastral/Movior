import { MessageCircle } from "lucide-react"
import { COMPANY } from "@/lib/site"

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
        "Hello Movior Transport, I would like to request a quote.",
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Movior Transport on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
    </a>
  )
}
