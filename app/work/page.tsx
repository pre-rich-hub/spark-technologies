"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"
import { caseStudies } from "@/lib/data/case-studies"

const allTags = ["All", "Luxury", "Tourism", "E-Commerce", "Real Estate", "Hospitality", "Fashion", "Construction"]

export default function WorkPage() {
  const gridRef  = useRef(null)
  const isInView = useInView(gridRef, { once: true, margin: "-60px" })

  const [activeTag, setActiveTag] = useState("All")

  const filtered = activeTag === "All"
    ? caseStudies
    : caseStudies.filter((c) => c.tags.includes(activeTag))

  return (
    <main>
      <PageHero
        eyebrow="Our Work"
        title="Work That"
        highlighted="Defines"
        titleAfter="Industries."
        description="From luxury travel platforms to fine dining experiences to real estate powerhouses — digital products that perform at the highest end of every industry."
      />

      {/* Filter tabs */}
      <section className="py-10 border-b border-border" style={{ background: "var(--section-alt)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.14em] rounded-sm border transition-colors duration-300 ${
                  activeTag === tag
                    ? "bg-ember text-cream border-ember"
                    : "border-border text-muted-foreground hover:border-ember/40 hover:text-ember"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16" ref={gridRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: Math.min(i * 0.07, 0.5) }}
                className="flex flex-col"
              >
                <div className="group relative flex flex-col rounded-sm border border-border bg-card/60 hover:bg-card/90 overflow-hidden flex-1 transition-colors duration-500">
                  {/* Hover wash */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-ember/5 to-transparent" />

                  {/* Screenshot thumbnail */}
                  <div className="relative h-[180px] overflow-hidden flex-shrink-0 border-b border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                    {/* Live site chip */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 text-[9px] uppercase tracking-[0.10em] font-medium rounded-sm border bg-background/80 backdrop-blur-sm border-border text-muted-foreground hover:text-ember hover:border-ember/40 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <ExternalLink className="w-2.5 h-2.5" />
                      Live Site
                    </a>
                  </div>

                  <Link href={`/work/${project.slug}`} className="relative z-10 flex flex-col flex-1 p-7">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.20em] font-medium text-ember/80">{project.industry}</span>
                      </div>
                      <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        <ArrowUpRight className="w-3 h-3 text-ember" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-1.5 group-hover:text-ember transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-[10px] text-ember/80 uppercase tracking-[0.12em] mb-4 font-medium">{project.category}</p>

                    {/* Tagline */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                      {project.tagline}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((t) => (
                        <span key={t} className="px-2.5 py-1 text-[10px] uppercase tracking-[0.10em] border border-border rounded-sm text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </Link>

                  <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-sm">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <PageCta
        title="Ready to Build Something Exceptional?"
        subtitle="Your project could be our next case study."
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </main>
  )
}
