"use client"

import { useEffect, useRef, useState } from "react"

type Stat = { value: number; suffix: string; label: string }

const STATS: Stat[] = [
  { value: 28, suffix: "+", label: "Years Combined Experience" },
  { value: 7, suffix: "", label: "Emirates Covered" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 24, suffix: "/7", label: "Operational Support" },
]

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])
  return value
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active)
  return (
    <div className="text-center">
      <div className="font-heading text-4xl font-extrabold text-primary md:text-5xl">
        {value}
        {stat.suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-ink-foreground/70 md:text-base">{stat.label}</div>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="bg-ink py-14 md:py-16">
      <div ref={ref} className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-6">
        {STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </section>
  )
}
