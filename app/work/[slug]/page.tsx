"use client"

import { notFound } from "next/navigation"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { PageCta } from "@/components/shared/page-cta"
import { caseStudies, getCaseStudyBySlug } from "@/lib/data/case-studies"
import { use } from "react"

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug }   = use(params)
  const caseStudy  = getCaseStudyBySlug(slug)

  if (!caseStudy) notFound()

  const bodyRef  = useRef(null)
  const bodyInView = useInView(bodyRef, { once: true, margin: "-60px" })

  const otherCases = caseStudies.filter((c) => c.slug !== slug).slice(0, 2)

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-[-10%] w-[600px] h-[600px] rounded-full bg-ember/8 blur-[160px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <Link href="/work" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-ember transition-colors mb-8">
            ← All Work
          </Link>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 text-[10px] uppercase tracking-[0.16em] border border-ember/30 text-ember rounded-sm">{caseStudy.industry}</span>
            <span className="px-3 py-1 text-[10px] uppercase tracking-[0.16em] border border-border text-muted-foreground rounded-sm">{caseStudy.category}</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.90] mb-6 text-foreground"
          >
            {caseStudy.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8"
          >
            {caseStudy.tagline}
          </motion.p>
          {caseStudy.liveUrl && (
            <motion.a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-sm border border-ember/40 bg-ember/10 text-ember hover:bg-ember hover:text-cream transition-all duration-300"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Visit Live Site
            </motion.a>
          )}
        </div>
      </section>

      {/* Meta strip */}
      <section className="border-b border-border" style={{ background: "var(--section-alt)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-center divide-x divide-border">
            {[
              { label: "Client",   value: caseStudy.title    },
              { label: "Industry", value: caseStudy.industry },
              { label: "Timeline", value: caseStudy.timeline },
            ].map((m) => (
              <div key={m.label} className="px-8 py-5 first:pl-0">
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground/60 mb-0.5">{m.label}</p>
                <p className="text-sm font-semibold">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot preview */}
      {caseStudy.liveUrl && (
        <section className="py-16 border-b border-border" style={{ background: "var(--section-alt)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-6">Live Platform</p>
            <div className="relative rounded-sm border border-border overflow-hidden shadow-2xl">
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/60 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-border" />
                  <div className="w-3 h-3 rounded-full bg-border" />
                  <div className="w-3 h-3 rounded-full bg-border" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-background/60 rounded-sm border border-border max-w-sm mx-auto">
                    <div className="w-2 h-2 rounded-full bg-ember/60 flex-shrink-0" />
                    <span className="text-[11px] text-muted-foreground truncate">{caseStudy.liveUrl.replace(/^https?:\/\//, "")}</span>
                  </div>
                </div>
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-ember transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              {/* Screenshot */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={caseStudy.thumbnail}
                alt={`${caseStudy.title} live platform`}
                className="w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="py-24" ref={bodyRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={bodyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">The Challenge</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={bodyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h2 className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Our Solution</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 border-b border-border" style={{ background: "var(--section-alt)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-8">Technologies Used</p>
          <div className="flex flex-wrap gap-3">
            {caseStudy.technologies.map((tech) => (
              <span key={tech} className="px-3.5 py-2 text-xs border border-border rounded-sm text-muted-foreground hover:border-ember/40 hover:text-ember transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* More work */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between mb-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium">More Work</p>
            <Link href="/work" className="flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-ember transition-colors">
              View All <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {otherCases.map((cs) => (
              <div key={cs.slug} className="group relative flex flex-col rounded-sm border border-border bg-card/60 hover:bg-card/90 overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />
                {/* Thumbnail */}
                {cs.liveUrl && (
                  <div className="relative h-[140px] overflow-hidden border-b border-border flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cs.thumbnail}
                      alt={cs.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                  </div>
                )}
                <Link href={`/work/${cs.slug}`} className="relative z-10 flex flex-col p-7">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-ember/80 font-medium mb-2">{cs.industry}</span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-ember transition-colors">{cs.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{cs.tagline}</p>
                </Link>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to Build Something Exceptional?"
        subtitle="Let's create your next case study together."
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </main>
  )
}
