export const COMPANY = {
  name: "Movior Transport LLC",
  shortName: "Movior Transport",
  tagline: "Driving Reliability. Delivering Excellence.",
  city: "Abu Dhabi, UAE",
  email: "info@movior.co",
  phones: ["+971 54 244 0760", "+971 50 687 8661"],
  // digits only for tel/whatsapp links
  phoneLinks: ["+971542440760", "+971506878661"],
  whatsapp: "971542440760",
} as const

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
] as const
