"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY, NAV_LINKS } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label={COMPANY.name}>
          <span
            className={cn(
              "flex h-10 items-center rounded-md px-2 transition-colors md:h-12",
              scrolled ? "bg-primary" : "bg-primary/95",
            )}
          >
            <Image
              src="/movior-logo.png"
              alt="Movior Transport logo"
              width={132}
              height={56}
              className="h-7 w-auto md:h-9"
              priority
            />
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                scrolled ? "text-foreground" : "text-background",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${COMPANY.phoneLinks[0]}`}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold transition-colors hover:text-primary",
              scrolled ? "text-foreground" : "text-background",
            )}
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phones[0]}
          </a>
          <Button asChild>
            <a href="#quote">Get a Free Quote</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-md lg:hidden",
            scrolled ? "text-foreground" : "text-background",
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href="#quote" onClick={() => setOpen(false)}>
                Get a Free Quote
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
