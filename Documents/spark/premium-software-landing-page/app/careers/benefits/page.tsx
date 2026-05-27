"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { DollarSign, Globe, BookOpen, Heart, Clock, Zap, Home, Coffee } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"

const categories = [
  {
    icon:  DollarSign,
    title: "Compensation",
    items: [
      "Competitive salary benchmarked at the 75th percentile for your market",
      "Annual performance review with clear merit increase criteria",
      "Profit-sharing pool distributed to the full team annually",
      "Equity participation for senior engineers and leads",
    ],
  },
  {
    icon:  Globe,
    title: "Remote & Flexibility",
    items: [
      "Fully remote — work from anywhere with stable internet",
      "Flexible hours with a 4-hour overlap window (10am–2pm CET)",
      "No tracked hours — we measure output, not presence",
      "Annual team retreat at a location voted on by the team",
    ],
  },
  {
    icon:  BookOpen,
    title: "Learning & Growth",
    items: [
      "$3,000 annual learning budget — books, courses, conferences",
      "Dedicated learning time: 4 hours per week, protected in the schedule",
      "Conference speaking encouraged and supported — travel covered",
      "Internal knowledge sessions: monthly deep-dives by engineers for engineers",
    ],
  },
  {
    icon:  Heart,
    title: "Health & Wellbeing",
    items: [
      "Comprehensive private health insurance (covers partner and dependants)",
      "Mental health support: $150/month towards therapy or coaching",
      "Fitness benefit: $100/month towards gym, sport, or health apps",
      "Annual health screening covered",
    ],
  },
  {
    icon:  Clock,
    title: "Time Off",
    items: [
      "35 days annual leave (including public holidays)",
      "No questions asked sick leave — take what you need",
      "Sabbatical programme: 4 weeks paid after 3 years",
      "Extended parental leave: 16 weeks primary, 8 weeks secondary carer",
    ],
  },
  {
    icon:  Home,
    title: "Home Office",
    items: [
      "$2,500 home office setup budget on joining",
      "Annual $750 refresh budget for equipment and ergonomics",
      "Coworking space allowance: $300/month if you prefer to work outside",
      "High-spec MacBook Pro or equivalent — your choice",
    ],
  },
]

const perks = [
  { icon: Zap,    text: "Latest tools: Cursor, Copilot, Linear, Figma — all paid" },
  { icon: Coffee, text: "Monthly team lunch budget (for local coworking or remote team lunches)" },
  { icon: Globe,  text: "Immigration and visa support for international hires" },
  { icon: BookOpen, text: "O'Reilly Learning subscription and technical book requests" },
]

export default function BenefitsPage() {
  const mainRef  = useRef(null)
  const perksRef = useRef(null)
  const mainInView  = useInView(mainRef,  { once: true, margin: "-60px" })
  const perksInView = useInView(perksRef, { once: true, margin: "-60px" })

  return (
    <main>
      <PageHero
        eyebrow="Careers · Benefits"
        title="What We Offer"
        highlighted="Our People."
        description="Compensation and benefits benchmarked at the top of the market — because attracting and retaining exceptional engineers is an engineering problem, and we take it seriously."
      />

      {/* Summary numbers */}
      <section className="py-10 border-b border-border" style={{ background: "var(--section-alt)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-center divide-x divide-border">
            {[
              { v: "35 days",  l: "Annual leave"           },
              { v: "$3K",      l: "Learning budget / year" },
              { v: "$2.5K",    l: "Home office setup"       },
              { v: "100%",     l: "Remote"                  },
            ].map((s) => (
              <div key={s.l} className="px-8 py-4 first:pl-0">
                <p className="text-2xl font-bold gradient-text">{s.v}</p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-24" ref={mainRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={mainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Full Benefits</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">Everything, Detailed</h2>
            <div className="mt-10 h-px bg-border" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mainInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative rounded-sm border border-border bg-card/60 hover:bg-card/90 p-8 transition-colors duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-sm border border-border flex items-center justify-center mb-6 group-hover:border-ember/40 transition-colors">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-ember transition-colors" />
                    </div>
                    <h3 className="font-semibold mb-5 group-hover:text-ember transition-colors">{cat.title}</h3>
                    <ul className="space-y-3">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-ember flex-shrink-0 mt-2" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Extra perks */}
      <section
        className="py-16 border-t border-border"
        style={{ background: "var(--section-alt)" }}
        ref={perksRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={perksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-8"
          >
            And also
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {perks.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.text}
                  initial={{ opacity: 0, y: 12 }}
                  animate={perksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-3 px-5 py-4 rounded-sm border border-border bg-card/40 hover:border-ember/25 transition-colors"
                >
                  <Icon className="w-4 h-4 text-ember/70 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{p.text}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to Join?"
        subtitle="See open roles and apply — we respond to every application within 5 working days."
        primaryLabel="See Open Roles"
        primaryHref="/careers"
        secondaryLabel="Our Culture"
        secondaryHref="/careers/culture"
      />
    </main>
  )
}
