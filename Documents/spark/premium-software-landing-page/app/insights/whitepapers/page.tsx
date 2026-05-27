"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Download, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"

const whitepapers = [
  {
    title:    "The AI-Native Architecture Playbook",
    subtitle: "How to design systems where AI is a first-class citizen — not a bolt-on.",
    pages:    "42 pages",
    topics:   ["AI/ML", "Architecture", "Production Systems"],
    year:     "2025",
    featured: true,
    excerpt:  "Most teams retrofit AI into existing systems. This paper describes the architectural decisions that make AI integration robust, observable, and safe to iterate on — starting from the data model.",
  },
  {
    title:    "Scaling to 10×: A Field Guide for Engineering Leaders",
    subtitle: "The architectural patterns and organisational changes that enable order-of-magnitude growth.",
    pages:    "38 pages",
    topics:   ["Distributed Systems", "Scalability", "Engineering Leadership"],
    year:     "2025",
    featured: false,
    excerpt:  "Based on our experience migrating five platforms through their 10× inflection points — the bottlenecks, the decisions, and what we'd do differently.",
  },
  {
    title:    "Platform Engineering for Premium Consumer Brands",
    subtitle: "Why luxury brands require a different engineering approach — and how to deliver it.",
    pages:    "28 pages",
    topics:   ["Product Engineering", "UX", "Luxury Tech"],
    year:     "2024",
    featured: false,
    excerpt:  "Premium brands have zero tolerance for performance regressions or UX compromises. This paper covers the technical standards and design principles that premium digital products require.",
  },
  {
    title:    "Cloud Cost Architecture: From Waste to FinOps Discipline",
    subtitle: "A practical framework for reducing cloud spend without sacrificing performance or reliability.",
    pages:    "34 pages",
    topics:   ["Cloud Infrastructure", "FinOps", "Cost Optimisation"],
    year:     "2024",
    featured: false,
    excerpt:  "Infrastructure budgets are often 30–60% higher than they need to be. This paper covers the audit methodology, rightsizing decisions, and reservation strategies we use with clients.",
  },
  {
    title:    "LLM Integration in Production: What Nobody Tells You",
    subtitle: "The real challenges of running large language models at production scale.",
    pages:    "31 pages",
    topics:   ["AI/ML", "LLMs", "Production Engineering"],
    year:     "2024",
    featured: false,
    excerpt:  "Latency, cost, hallucination mitigation, context management, and observability — the problems that appear after the demo and before the launch.",
  },
  {
    title:    "Zero-Downtime Migrations: A Practitioner's Handbook",
    subtitle: "Step-by-step patterns for migrating live production systems without customer impact.",
    pages:    "29 pages",
    topics:   ["Migrations", "Database Engineering", "Platform Engineering"],
    year:     "2024",
    featured: false,
    excerpt:  "Covers the strangler fig, parallel run, and blue-green patterns — with real examples from migrations we have executed on live systems handling millions of transactions.",
  },
]

export default function WhitepapersPage() {
  const gridRef  = useRef(null)
  const isInView = useInView(gridRef, { once: true, margin: "-60px" })

  const featured = whitepapers.find((w) => w.featured)!
  const rest     = whitepapers.filter((w) => !w.featured)

  return (
    <main>
      <PageHero
        eyebrow="Insights · Whitepapers"
        title="Research-Backed"
        highlighted="Technical Depth."
        description="Practitioner-written guides on the engineering challenges that matter — AI systems, scalability, cloud infrastructure, and building software that lasts."
      />

      <section className="py-16 border-b border-border" style={{ background: "var(--section-alt)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/50 mb-8">Featured Paper</p>
          <div className="group flex flex-col lg:flex-row gap-10 rounded-sm border border-border bg-card/60 hover:bg-card/90 p-10 transition-colors duration-500 overflow-hidden relative cursor-pointer">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
            <div className="relative z-10 flex-1">
              <div className="flex flex-wrap gap-2 mb-5">
                {featured.topics.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-[10px] uppercase tracking-[0.10em] border border-ember/25 text-ember/80 rounded-sm">{t}</span>
                ))}
              </div>
              <h2 className="text-3xl font-bold mb-3 group-hover:text-ember transition-colors">{featured.title}</h2>
              <p className="text-sm text-ember/80 mb-4">{featured.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-8">{featured.excerpt}</p>
              <div className="flex items-center gap-6">
                <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm bg-ember text-cream hover:bg-ember-light transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </button>
                <span className="text-xs text-muted-foreground">{featured.pages} · {featured.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" ref={gridRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-10"
          >
            All Whitepapers
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((wp, i) => (
              <motion.div
                key={wp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative rounded-sm border border-border bg-card/60 hover:bg-card/90 p-7 transition-colors duration-500 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {wp.topics.slice(0, 2).map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[9px] uppercase tracking-[0.10em] border border-border rounded-sm text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-sm mb-2 group-hover:text-ember transition-colors leading-snug flex-1">{wp.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">{wp.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.10em]">{wp.pages} · {wp.year}</span>
                    <button className="flex items-center gap-1 text-xs text-ember/70 hover:text-ember transition-colors group/dl">
                      <Download className="w-3 h-3" />
                      <span className="text-[10px] uppercase tracking-[0.10em]">PDF</span>
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Want the Engineering Deep-Dive?"
        subtitle="Subscribe to our newsletter for new papers and technical guides from our team."
        primaryLabel="Subscribe"
        primaryHref="/insights/newsletter"
        secondaryLabel="All Insights"
        secondaryHref="/insights"
      />
    </main>
  )
}
