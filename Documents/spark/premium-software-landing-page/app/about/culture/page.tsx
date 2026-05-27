"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"

const pillars = [
  {
    n: "01",
    title: "Ownership, not task assignment",
    body: "Every engineer at Spark owns a problem end-to-end — from the first architecture decision to the last production alert. There is no handoff layer, no relay race, no ambiguity about who is accountable.",
  },
  {
    n: "02",
    title: "Craft over velocity",
    body: "We build things right. We would rather have an honest conversation about scope than ship something we are not proud of. Speed matters — and so does what ships. Both are non-negotiable.",
  },
  {
    n: "03",
    title: "Intellectual honesty",
    body: "We tell clients what they need to hear, not what they want to hear. The same applies internally. Projected confidence that covers uncertainty is more dangerous than saying 'I don't know yet.'",
  },
  {
    n: "04",
    title: "Selective by design",
    body: "We turn down projects that don't meet our standards — either technically or as a client fit. Selectivity is not elitism; it's how we maintain the quality of work that everyone here is proud to put their name on.",
  },
  {
    n: "05",
    title: "Small team, full context",
    body: "Everyone on the team has full context on every project. No silos. No need to wait for a briefing to understand what's happening. Context is treated as infrastructure, not a privilege.",
  },
  {
    n: "06",
    title: "Long-term thinking",
    body: "We design for the system's ten-year life, not the six-month engagement. That applies to client work and to how we build the studio itself — deliberately, without shortcuts that compound into problems.",
  },
]

const rhythms = [
  { label: "Async-first", desc: "Deep work is protected. Meetings are earned, not scheduled by default." },
  { label: "Weekly demos", desc: "Every client sees working software every week. No dark-room development." },
  { label: "Open backlog", desc: "Clients have full visibility into what's being built and why." },
  { label: "Code review culture", desc: "Every PR is reviewed by a senior engineer. Quality is structural, not individual." },
  { label: "Learning budget", desc: "Every team member has an annual learning budget and time to use it." },
  { label: "Remote-first", desc: "We hire the best engineers regardless of location. Overlap hours are protected." },
]

export default function CulturePage() {
  const pillarsRef = useRef(null)
  const rhythmsRef = useRef(null)
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-60px" })
  const rhythmsInView = useInView(rhythmsRef, { once: true, margin: "-60px" })

  return (
    <main>
      <PageHero
        eyebrow="About · Culture"
        title="How We Think."
        highlighted="How We Work."
        description="The norms, rhythms, and beliefs that shape how Spark operates — from the first line of code to the last production deployment."
      />

      {/* Pillars */}
      <section className="py-24" ref={pillarsRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Cultural Pillars</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">
                What We Actually Believe
              </h2>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Not values on a wall. Beliefs that get tested every time we scope a project, review a PR, or have a hard client conversation.
              </p>
            </div>
            <div className="mt-12 h-px bg-border" />
          </motion.div>

          <div className="divide-y divide-border">
            {pillars.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, x: -16 }}
                animate={pillarsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="group flex gap-8 py-8 hover:bg-card/30 transition-colors duration-300 -mx-4 px-4 rounded-sm"
              >
                <span className="text-xs font-bold text-ember/50 tabular-nums flex-shrink-0 mt-1 group-hover:text-ember transition-colors">{p.n}</span>
                <div>
                  <h3 className="font-semibold mb-2 group-hover:text-ember transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working rhythms */}
      <section
        className="py-24 border-t border-border"
        style={{ background: "var(--section-alt)" }}
        ref={rhythmsRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={rhythmsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Working Rhythms</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">How We Operate</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
            {rhythms.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 16 }}
                animate={rhythmsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative bg-card/60 hover:bg-card/90 p-8 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-ember mb-5" />
                  <h3 className="font-semibold mb-2 group-hover:text-ember transition-colors">{r.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="This Culture. Your Project."
        subtitle="If this sounds like the kind of studio you want building your software, let's talk."
        secondaryLabel="Meet the Team"
        secondaryHref="/about/team"
      />
    </main>
  )
}
