"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"

const dayInLife = [
  { time: "09:00", label: "Async standup", desc: "A short written update in Slack. What you shipped yesterday, what's blocking you today. No meeting." },
  { time: "09:30", label: "Deep work block", desc: "The first 3 hours of the day are protected for uninterrupted engineering. Meetings don't start until noon." },
  { time: "12:30", label: "Sync if needed", desc: "The only regular meeting slot. Architecture reviews, pair sessions, and client demos happen here — not scattered throughout the day." },
  { time: "14:00", label: "More deep work", desc: "Second deep work block. You own your afternoon. Most engineers ship their most meaningful work between 2–6pm." },
  { time: "17:00", label: "Code review window", desc: "Pull requests get reviewed before end of day. No PR waits more than 24 hours." },
]

const truths = [
  { title: "No career ladder theatre", desc: "We don't have Principal-Staff-Distinguished title inflation. You're a Spark engineer. Your work is the signal." },
  { title: "You write the code you deploy", desc: "No separate DevOps team. Engineers own their systems end-to-end — from the first PR to the first production incident." },
  { title: "Clients see your name in commits", desc: "Your work isn't anonymised behind a studio brand. When we ship, the people who built it are acknowledged." },
  { title: "Meetings are earned", desc: "If something can be communicated in writing, it is. Calendar invites are not the default answer to any problem." },
  { title: "Honest code review", desc: "Code review is about the code, not the person. Feedback is direct, specific, and constructive — not vague or performative." },
  { title: "No crunch culture", desc: "We scope projects to fit within sustainable working hours. Unsustainable timelines are a client negotiation problem, not an engineering headcount problem." },
]

export default function CareersCulturePage() {
  const rhythmRef = useRef(null)
  const truthsRef = useRef(null)
  const rhythmInView = useInView(rhythmRef, { once: true, margin: "-60px" })
  const truthsInView = useInView(truthsRef, { once: true, margin: "-60px" })

  return (
    <main>
      <PageHero
        eyebrow="Careers · Engineering Culture"
        title="How Spark"
        highlighted="Actually Works."
        description="Not a mission statement. The real rhythms, real expectations, and real truths about what it's like to engineer at Spark day to day."
      />

      {/* Day in the life */}
      <section className="py-24" ref={rhythmRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={rhythmInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Daily Rhythm</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">A Day at Spark</h2>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Deep work is protected. Meetings are the exception. Shipping is the norm.
              </p>
            </div>
            <div className="mt-12 h-px bg-border" />
          </motion.div>

          <div className="divide-y divide-border">
            {dayInLife.map((slot, i) => (
              <motion.div
                key={slot.time}
                initial={{ opacity: 0, x: -16 }}
                animate={rhythmInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="group flex gap-8 py-7 hover:bg-card/30 transition-colors duration-300 -mx-4 px-4 rounded-sm"
              >
                <span className="text-sm font-bold text-ember/60 tabular-nums flex-shrink-0 w-12 group-hover:text-ember transition-colors">{slot.time}</span>
                <div>
                  <h3 className="font-semibold mb-1.5 group-hover:text-ember transition-colors">{slot.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{slot.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hard truths */}
      <section
        className="py-24 border-t border-border"
        style={{ background: "var(--section-alt)" }}
        ref={truthsRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={truthsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">The Real Talk</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">
              Things Nobody Puts on a Careers Page
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
            {truths.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                animate={truthsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative bg-card/60 hover:bg-card/90 p-8 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-ember mb-5" />
                  <h3 className="font-semibold mb-3 group-hover:text-ember transition-colors">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Sound Like Your Kind of Studio?"
        subtitle="We're hiring engineers who care deeply about the craft."
        primaryLabel="See Open Roles"
        primaryHref="/careers"
        secondaryLabel="Our Benefits"
        secondaryHref="/careers/benefits"
      />
    </main>
  )
}
