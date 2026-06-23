export const COMPANY = {
  name: "Movior Transport LLC",
  shortName: "Movior Transport",
  tagline: "Driving Reliability. Delivering Excellence.",
  city: "Abu Dhabi, UAE",
  email: "info@moviortransport.com",
  phones: ["+971 50 687 8661", "+971 54 244 0760"],
  // digits only for tel/whatsapp links
  phoneLinks: ["+971506878661", "+971542440760"],
  whatsapp: "971506878661",
} as const

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
] as const
