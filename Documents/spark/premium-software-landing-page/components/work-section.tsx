"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

/* ─────────────────────────────────────────────────────────────────
   8 real projects in ONE pool.
   Row 1 shows items 0-3 (duplicated for loop) — scrolls LEFT.
   Row 2 shows items 4-7 (duplicated for loop) — scrolls RIGHT.
──────────────────────────────────────────────────────────────────── */
const projects = [
  { title: "Hamba Ethiopia Tours", category: "Tourism Platform",            accent: "ember",   wide: true,  index: "01" },
  { title: "Maison",               category: "Luxury Real Estate",          accent: "dark",    wide: false, index: "02" },
  { title: "PRESTIGE",             category: "Luxury Automotive Platform",  accent: "neutral", wide: false, index: "03" },
  { title: "IronPulse",            category: "Fitness Club Platform",       accent: "dark",    wide: true,  index: "04" },
  { title: "AtlasBuild Group",     category: "Construction & Engineering",  accent: "neutral", wide: true,  index: "05" },
  { title: "Shemzu",               category: "Fashion E-Commerce",          accent: "ember",   wide: false, index: "06" },
  { title: "Hora Tours",           category: "Luxury Travel Platform",      accent: "ember",   wide: true,  index: "07" },
  { title: "Aurum",                category: "Fine Dining Platform",        accent: "dark",    wide: false, index: "08" },
]

const rowOne = projects.slice(0, 4)
const rowTwo = projects.slice(4, 8)

/* ── Styles keyed by accent ─────────────────────────────────────── */
type Accent = "ember" | "neutral" | "dark"

const cardBg: Record<Accent, string> = {
  ember:   "bg-ember border-ember/35",
  neutral: "bg-[oklch(0.94_0.005_260)] border-[oklch(0.82_0.01_260)]",
  dark:    "bg-[oklch(0.90_0.006_260)] border-[oklch(0.78_0.008_260)]",
}
const categoryColor: Record<Accent, string> = {
  ember:   "text-cream/50",
  neutral: "text-ember/80",
  dark:    "text-ember/80",
}
const titleColor: Record<Accent, string> = {
  ember:   "text-cream",
  neutral: "text-foreground",
  dark:    "text-foreground",
}
const arrowColor: Record<Accent, string> = {
  ember:   "border-cream/25 text-cream",
  neutral: "border-ember/45 text-ember",
  dark:    "border-ember/45 text-ember",
}
const accentLine: Record<Accent, string> = {
  ember:   "bg-cream/30",
  neutral: "bg-ember",
  dark:    "bg-ember",
}
const indexGhost: Record<Accent, string> = {
  ember:   "text-cream/12",
  neutral: "text-foreground/6",
  dark:    "text-foreground/5",
}

/* ── Card ────────────────────────────────────────────────────────── */
interface CardProps {
  title: string; category: string
  accent: Accent; wide: boolean; index: string
}

function ProjectCard({ title, category, accent, wide, index }: CardProps) {
  return (
    <div
      className={`
        group relative flex-shrink-0 border rounded-sm overflow-hidden cursor-pointer select-none
        transition-all duration-700 hover:scale-[1.018] hover:z-10
        ${wide ? "w-[420px]" : "w-[300px]"} h-[260px]
        ${cardBg[accent]}
      `}
    >
      {/* Fine grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,currentColor,currentColor 1px,transparent 1px,transparent 44px),repeating-linear-gradient(90deg,currentColor,currentColor 1px,transparent 1px,transparent 44px)",
        }}
      />

      {/* Ghost index number */}
      <span className={`absolute top-3 right-5 font-bold tabular-nums text-7xl leading-none select-none pointer-events-none ${indexGhost[accent]}`}>
        {index}
      </span>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-7">
        <span className={`text-[10px] uppercase tracking-[0.20em] font-medium ${categoryColor[accent]}`}>
          {category}
        </span>

        <h3 className={`font-bold leading-none tracking-tight text-balance text-4xl ${titleColor[accent]}`}>
          {title}
        </h3>

        <div className="flex items-end justify-end">
          <div className={`
            w-8 h-8 rounded-full border flex items-center justify-center
            opacity-0 group-hover:opacity-100 transition-all duration-500
            translate-y-1 group-hover:translate-y-0
            ${arrowColor[accent]}
          `}>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Bottom sweep line on hover */}
      <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out ${accentLine[accent]}`} />
    </div>
  )
}

/* ── RAF-driven marquee ──────────────────────────────────────────── */
/**
 * direction "left"  → strip scrolls toward the left  (row 1)
 * direction "right" → strip scrolls toward the right (row 2)
 *
 * We duplicate the item array so the seam is invisible:
 * the strip width is exactly 2× the natural content width,
 * and we reset position by exactly half (the full natural width)
 * once we've scrolled that far — creating a seamless loop.
 */
function MarqueeRow({
  items,
  direction,
  speed = 0.45,
}: {
  items: CardProps[]
  direction: "left" | "right"
  speed?: number
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef   = useRef(0)
  const rafRef   = useRef<number | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Wait one frame so DOM has rendered and we can measure true width
    const frame = requestAnimationFrame(() => {
      // The track contains 2× the items; half-width = one natural copy
      const halfW = track.scrollWidth / 2

      const tick = () => {
        if (direction === "left") {
          posRef.current -= speed
          if (Math.abs(posRef.current) >= halfW) posRef.current = 0
        } else {
          posRef.current += speed
          if (posRef.current >= 0) posRef.current = -halfW
        }
        track.style.transform = `translateX(${posRef.current}px)`
        rafRef.current = requestAnimationFrame(tick)
      }

      // Seed starting position for right-direction rows so they begin mid-stream
      if (direction === "right") posRef.current = -halfW / 2

      rafRef.current = requestAnimationFrame(tick)
    })

    return () => {
      cancelAnimationFrame(frame)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [direction, speed])

  const doubled = [...items, ...items]

  return (
    <div className="relative w-full overflow-hidden">
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-28 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-28 z-10 bg-gradient-to-l from-white to-transparent" />

      {/* Track — no CSS transition/animation; RAF drives transform directly */}
      <div ref={trackRef} className="flex gap-4 w-max" style={{ willChange: "transform" }}>
        {doubled.map((item, i) => (
          <ProjectCard key={`${item.index}-${i}`} {...item} />
        ))}
      </div>
    </div>
  )
}

/* ── Section ─────────────────────────────────────────────────────── */
export function WorkSection() {
  const headerRef = useRef(null)
  const isInView  = useInView(headerRef, { once: true, margin: "-80px" })

  return (
    <section
      id="work"
      className="relative py-28 overflow-hidden"
      style={{ background: "oklch(1 0 0)" }}
    >
      {/* Ambient ember glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] rounded-full bg-ember/6 blur-[180px]" />
      </div>

      {/* Header */}
      <div ref={headerRef} className="mx-auto max-w-7xl px-6 lg:px-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">
            Selected Work
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] text-balance text-foreground">
              Work That<br />
              <span className="gradient-text">Defines</span> Industries
            </h2>
            <div className="lg:max-w-xs">
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                From venture-backed startups to global enterprises — we craft digital systems
                that scale, endure, and redefine what software can accomplish.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-ember transition-colors duration-300 group font-medium"
              >
                <span className="border-b border-foreground/20 group-hover:border-ember pb-px transition-colors duration-300">
                  Start a project
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 h-px bg-border origin-left"
        />
      </div>

      {/* Scrolling rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.45 }}
        className="flex flex-col gap-4"
      >
        {/* Row 1 — left-flowing (projects 01–06) */}
        <MarqueeRow items={rowOne} direction="left" speed={0.42} />

        {/* Row 2 — right-flowing (projects 07–12)
            Moving in the opposite direction creates the illusion that
            cards exiting row 1 are "looping back" into row 2. */}
        <MarqueeRow items={rowTwo} direction="right" speed={0.42} />
      </motion.div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 flex items-center justify-between"
      >
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/40">
          8 live projects &mdash; 2024
        </p>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/40">
          <span className="w-1.5 h-1.5 rounded-full bg-ember inline-block" />
          Global Delivery
        </div>
      </motion.div>
    </section>
  )
}
