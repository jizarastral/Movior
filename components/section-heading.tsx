import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "center" | "left"
  tone?: "dark" | "light"
  className?: string
}) {
  const isLight = tone === "light"
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</span>
      )}
      <h2
        className={cn(
          "mt-3 text-balance font-heading text-3xl font-bold tracking-tight md:text-4xl",
          isLight ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-pretty leading-relaxed",
            isLight ? "text-ink-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
