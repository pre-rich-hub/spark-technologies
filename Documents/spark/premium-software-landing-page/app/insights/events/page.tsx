"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"

const upcoming = [
  {
    title:    "AI Systems in Production — Beyond the Demo",
    event:    "QCon London 2025",
    date:     "April 8, 2025",
    location: "London, UK",
    type:     "Talk",
    speaker:  "Lena Hartmann, Lead AI/ML Engineer",
    desc:     "The gap between a working prototype and a reliable production AI system is wider than most teams expect. A practical guide to observability, fallback strategies, and drift detection for AI in the real world.",
  },
  {
    title:    "Designing for the Ultra-Premium Market",
    event:    "Awwwards Conference",
    date:     "May 15, 2025",
    location: "Barcelona, Spain",
    type:     "Workshop",
    speaker:  "Suki Tanaka, Head of Design",
    desc:     "A half-day workshop on the design decisions — typography, motion, interaction density — that separate premium digital products from everything else.",
  },
  {
    title:    "Zero-Downtime Migrations at Scale",
    event:    "SREcon EMEA 2025",
    date:     "June 3, 2025",
    location: "Dublin, Ireland",
    type:     "Talk",
    speaker:  "Marcus Delacroix, Principal Infrastructure Engineer",
    desc:     "Walk through three real-world database migrations on live systems — what we tried, what failed, and the patterns we now use reliably.",
  },
]

const past = [
  {
    title:    "Building Scalable Systems for the Luxury Sector",
    event:    "London Tech Week",
    date:     "November 2024",
    location: "London, UK",
    type:     "Panel",
    views:    "2.4K views",
  },
  {
    title:    "The Architecture of Exceptional Digital Products",
    event:    "Awwwards NYC",
    date:     "September 2024",
    location: "New York, USA",
    type:     "Talk",
    views:    "3.8K views",
  },
  {
    title:    "LLMs in Production: Six Things We Learned the Hard Way",
    event:    "AI Engineer World's Fair",
    date:     "July 2024",
    location: "San Francisco, USA",
    type:     "Talk",
    views:    "7.1K views",
  },
  {
    title:    "FinOps at Scale: Cutting Cloud Costs Without Cutting Corners",
    event:    "KubeCon EU",
    date:     "March 2024",
    location: "Paris, France",
    type:     "Workshop",
    views:    "1.9K views",
  },
]

export default function EventsPage() {
  const upcomingRef = useRef(null)
  const pastRef     = useRef(null)
  const upcomingInView = useInView(upcomingRef, { once: true, margin: "-60px" })
  const pastInView     = useInView(pastRef,     { once: true, margin: "-60px" })

  return (
    <main>
      <PageHero
        eyebrow="Insights · Events & Talks"
        title="Where We're"
        highlighted="Speaking."
        description="Our engineers present at the conferences and workshops that matter — sharing what we learn building systems for the world's most demanding clients."
      />

      {/* Upcoming */}
      <section className="py-24" ref={upcomingRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-14"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Coming Up</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">Upcoming Events</h2>
            <div className="mt-10 h-px bg-border" />
          </motion.div>

          <div className="flex flex-col gap-5">
            {upcoming.map((ev, i) => (
              <motion.div
                key={ev.title}
                initial={{ opacity: 0, y: 20 }}
                animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-sm border border-border bg-card/60 hover:bg-card/90 p-8 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col lg:flex-row gap-8">
                  {/* Left */}
                  <div className="lg:w-56 flex-shrink-0">
                    <span className="inline-block px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] bg-ember/10 border border-ember/25 text-ember rounded-sm mb-4">{ev.type}</span>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1.5">
                      <Calendar className="w-3 h-3 text-ember/60" />
                      {ev.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 text-ember/60" />
                      {ev.location}
                    </div>
                  </div>
                  {/* Right */}
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-ember/70 mb-2">{ev.event}</p>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-ember transition-colors leading-snug">{ev.title}</h3>
                    <p className="text-xs text-muted-foreground/70 mb-3 uppercase tracking-[0.10em]">{ev.speaker}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ev.desc}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ember opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 self-start mt-1" />
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      <section
        className="py-24 border-t border-border"
        style={{ background: "var(--section-alt)" }}
        ref={pastRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={pastInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Archive</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[0.92]">Past Talks</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {past.map((ev, i) => (
              <motion.div
                key={ev.title}
                initial={{ opacity: 0, y: 16 }}
                animate={pastInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="group flex items-start gap-4 px-6 py-5 rounded-sm border border-border bg-card/60 hover:bg-card/90 hover:border-ember/30 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] uppercase tracking-[0.10em] border border-border rounded-sm px-1.5 py-0.5 text-muted-foreground">{ev.type}</span>
                    <span className="text-[10px] text-muted-foreground/60">{ev.date}</span>
                  </div>
                  <p className="text-sm font-medium group-hover:text-ember transition-colors leading-snug">{ev.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ev.event} · {ev.location}</p>
                </div>
                <span className="text-[10px] text-muted-foreground/50 tabular-nums flex-shrink-0 mt-1">{ev.views}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Invite Us to Speak"
        subtitle="We speak on AI systems, distributed architecture, premium product engineering, and developer culture."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="Read Our Whitepapers"
        secondaryHref="/insights/whitepapers"
      />
    </main>
  )
}
