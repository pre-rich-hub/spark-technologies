"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"

const coverage = [
  {
    publication: "TechCrunch",
    title: "The boutique studios quietly building the software that luxury brands trust",
    date: "March 2025",
    excerpt: "Spark is one of a handful of engineering studios that has carved out a niche at the highest end of the market — building platforms for luxury hospitality, real estate, and fine dining brands that need digital experiences as refined as their physical ones.",
    type: "Feature",
  },
  {
    publication: "Wired",
    title: "Why premium brands are hiring engineering studios instead of agencies",
    date: "January 2025",
    excerpt: "The shift away from large agencies toward specialist engineering studios is accelerating in the luxury sector. Studios like Spark bring a level of technical depth that traditional agencies can't match.",
    type: "Mention",
  },
  {
    publication: "The Next Web",
    title: "How fine dining restaurants are using technology to protect the guest experience",
    date: "November 2024",
    excerpt: "The platform Spark built for Aurum didn't just digitise the reservation process — it preserved the sense of exclusivity that defines a premium fine dining experience online.",
    type: "Case Study",
  },
  {
    publication: "Skift",
    title: "The technology companies transforming luxury travel in 2024",
    date: "September 2024",
    excerpt: "From Hamba Ethiopia Tours to Hora Tours, engineering studios like Spark are helping premium travel operators compete with booking platforms on digital quality without sacrificing brand identity.",
    type: "Feature",
  },
  {
    publication: "Forbes",
    title: "The luxury real estate platform built by an 8-person engineering studio",
    date: "August 2024",
    excerpt: "Maison's decision to work with Spark instead of a large agency raised eyebrows. The platform — purpose-built for high-end property advisory — validated the bet.",
    type: "Profile",
  },
  {
    publication: "Dezeen",
    title: "Digital design in luxury: when software has to match the architecture",
    date: "June 2024",
    excerpt: "Aurum's digital platform mirrors the minimalist restraint of Tadao Ando's restaurant interiors. The engineering and design were handled by Spark — one of the few studios that treats digital design as architecture.",
    type: "Feature",
  },
]

const awards = [
  { award: "Awwwards Site of the Day",   project: "Maison Real Estate Platform", year: "2024" },
  { award: "CSS Design Awards — WOTD",   project: "PRESTIGE Luxury Car Rental",  year: "2024" },
  { award: "FWA of the Day",             project: "Aurum Fine Dining Platform",   year: "2024" },
  { award: "Webby Award Nominee",        project: "Hamba Ethiopia Tours",         year: "2024" },
]

export default function PressPage() {
  const coverageRef = useRef(null)
  const awardsRef   = useRef(null)
  const coverageInView = useInView(coverageRef, { once: true, margin: "-60px" })
  const awardsInView   = useInView(awardsRef,   { once: true, margin: "-60px" })

  return (
    <main>
      <PageHero
        eyebrow="About · Press & Media"
        title="How the World"
        highlighted="Sees Our Work."
        description="Coverage, features, and awards recognising the platforms we build for the world's most demanding clients."
      />

      {/* Coverage */}
      <section className="py-24" ref={coverageRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={coverageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Media Coverage</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">Press</h2>
            <div className="mt-10 h-px bg-border" />
          </motion.div>

          <div className="divide-y divide-border">
            {coverage.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={coverageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group flex flex-col lg:flex-row gap-6 py-8 hover:bg-card/30 transition-colors duration-300 -mx-4 px-4 rounded-sm cursor-pointer"
              >
                {/* Left meta */}
                <div className="lg:w-48 flex-shrink-0">
                  <p className="font-semibold text-sm group-hover:text-ember transition-colors">{item.publication}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-[0.12em]">{item.date}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 text-[9px] uppercase tracking-[0.10em] border border-ember/25 text-ember/80 rounded-sm">{item.type}</span>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-2 group-hover:text-ember transition-colors leading-snug">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
                </div>
                {/* Arrow */}
                <div className="flex-shrink-0 self-start pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-ember" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section
        className="py-24 border-t border-border"
        style={{ background: "var(--section-alt)" }}
        ref={awardsRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={awardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Recognition</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[0.92]">Design Awards</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((a, i) => (
              <motion.div
                key={a.award}
                initial={{ opacity: 0, y: 16 }}
                animate={awardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-5 px-6 py-5 rounded-sm border border-border bg-card/60 hover:border-ember/30 hover:bg-card/90 transition-colors duration-300 group"
              >
                <span className="w-2 h-2 rounded-full bg-ember flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm group-hover:text-ember transition-colors">{a.award}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{a.project}</p>
                </div>
                <span className="text-xs text-muted-foreground/60 flex-shrink-0 tabular-nums">{a.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Media Enquiries"
        subtitle="For press requests, interviews, or editorial partnerships, reach out directly."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Our Story"
        secondaryHref="/about"
      />
    </main>
  )
}
