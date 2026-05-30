"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { caseStudies } from "@/lib/data/case-studies"

const featured = caseStudies.slice(0, 3).map(study => ({
  slug: study.slug,
  title: study.title,
  category: study.category,
  industry: study.industry,
  liveUrl: study.liveUrl,
  domain: new URL(study.liveUrl).hostname.replace('www.', ''),
  impact: study.tagline,
  tech: study.technologies,
  thumbUrl: study.thumbnail,
}))

export function FeaturedWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="work" className="relative py-32 overflow-hidden" style={{ background: "var(--section-alt)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-ember/5 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">
            Selected Work
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] text-balance">
              Work That<br />
              <span className="gradient-text">Defines</span> Industries
            </h2>
            <div className="lg:text-right">
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-5">
                From luxury travel to fine dining to real estate — digital platforms built to convert at the highest end of every market.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-sm text-ember hover:text-ember-light transition-colors duration-300 font-medium"
              >
                View all case studies
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="mt-12 h-px bg-border" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="flex flex-col"
            >
              <div className="group relative flex flex-col rounded-sm border border-border bg-card/60 hover:bg-card/90 overflow-hidden flex-1 transition-colors duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />

                {/* Screenshot thumbnail */}
                <div className="relative h-[210px] overflow-hidden flex-shrink-0 border-b border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.thumbUrl}
                    alt={`${project.title} website preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />

                  {/* Live site chip */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.10em] font-medium rounded-sm border bg-background/80 backdrop-blur-sm border-border text-muted-foreground hover:text-ember hover:border-ember/40 transition-all duration-200 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0"
                  >
                    <ExternalLink className="w-2.5 h-2.5" />
                    {project.domain}
                  </a>
                </div>

                {/* Content */}
                <Link href={`/work/${project.slug}`} className="relative z-10 flex flex-col flex-1 p-7">

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-[10px] uppercase tracking-[0.20em] font-medium text-ember/80">
                      {project.industry}
                    </span>
                    <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
                      <ArrowUpRight className="w-3 h-3 text-ember" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-3xl leading-tight tracking-tight mb-2 group-hover:text-ember transition-colors">
                    {project.title}
                  </h3>

                  {/* Category */}
                  <p className="text-[10px] uppercase tracking-[0.14em] mb-4 font-medium text-ember/60">
                    {project.category}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {project.impact}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] uppercase tracking-[0.10em] border border-border rounded-sm text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>

                {/* Bottom sweep */}
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
