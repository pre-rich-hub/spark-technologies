"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"
import { caseStudies } from "@/lib/data/case-studies"

const industryGroups = [
  {
    industry: "Travel & Hospitality",
    description: "Premium digital experiences for the global travel market — from Ethiopian expeditions to curated international tours.",
    slugs: ["hamba-tours", "hora-tours"],
  },
  {
    industry: "Real Estate & PropTech",
    description: "Luxury real estate platforms engineered for the world's most discerning property buyers.",
    slugs: ["maison-real-estate"],
  },
  {
    industry: "Automotive & Luxury",
    description: "Concierge-grade booking systems for exclusive automotive and lifestyle services.",
    slugs: ["prestige-car-rental"],
  },
  {
    industry: "Health & Fitness",
    description: "Results-driven platforms that convert browsers into committed members.",
    slugs: ["iron-pulse"],
  },
  {
    industry: "Construction & Infrastructure",
    description: "Enterprise-grade digital presence for global construction and engineering firms.",
    slugs: ["atlas-build"],
  },
  {
    industry: "Fashion & Retail",
    description: "Premium e-commerce storefronts built around conscious consumption and timeless design.",
    slugs: ["shemzu-store"],
  },
  {
    industry: "Food & Beverage",
    description: "Cinematic fine dining platforms that match the ambition of Michelin-starred cuisine.",
    slugs: ["aurum-restaurant"],
  },
]

export default function WorkIndustriesPage() {
  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { once: true, margin: "-60px" })

  return (
    <main>
      <PageHero
        eyebrow="Work · By Industry"
        title="Every Industry."
        highlighted="One Standard."
        description="We bring the same uncompromising engineering and design quality to every vertical — from luxury hospitality to fine dining to global construction."
      />

      <section className="py-20" ref={gridRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-20">
          {industryGroups.map((group, gi) => {
            const projects = group.slugs.map((s) => caseStudies.find((c) => c.slug === s)).filter(Boolean) as typeof caseStudies

            return (
              <motion.div
                key={group.industry}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: gi * 0.1 }}
              >
                {/* Industry header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 pb-6 border-b border-border">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-ember font-medium mb-2">Industry</p>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{group.industry}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">{group.description}</p>
                </div>

                {/* Project cards */}
                <div className={`grid gap-5 ${projects.length === 1 ? "grid-cols-1 max-w-xl" : "grid-cols-1 md:grid-cols-2"}`}>
                  {projects.map((project) => (
                    <div key={project.slug} className="group relative flex flex-col rounded-sm border border-border bg-card/60 hover:bg-card/90 overflow-hidden transition-colors duration-500">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-ember/5 to-transparent" />

                      {/* Thumbnail */}
                      <div className="relative h-[160px] overflow-hidden border-b border-border flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 text-[9px] uppercase tracking-[0.10em] font-medium rounded-sm border bg-background/80 backdrop-blur-sm border-border text-muted-foreground hover:text-ember hover:border-ember/40 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ExternalLink className="w-2.5 h-2.5" />
                          Live
                        </a>
                      </div>

                      <Link href={`/work/${project.slug}`} className="relative z-10 flex flex-col p-7">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className="text-[10px] uppercase tracking-[0.16em] text-ember/80 font-medium">{project.category}</span>
                          </div>
                          <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                            <ArrowUpRight className="w-3 h-3 text-ember" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-ember transition-colors">{project.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.tagline}</p>
                      </Link>
                      <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <PageCta
        title="Your Industry. Our Engineering."
        subtitle="Whatever market you operate in, we bring the same standard: premium-quality platforms that perform."
        secondaryLabel="View All Work"
        secondaryHref="/work"
      />
    </main>
  )
}
