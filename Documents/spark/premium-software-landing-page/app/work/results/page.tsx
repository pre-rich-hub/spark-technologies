"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"
import { caseStudies } from "@/lib/data/case-studies"

export default function WorkResultsPage() {
  const gridRef  = useRef(null)
  const isInView = useInView(gridRef, { once: true, margin: "-60px" })

  return (
    <main>
      <PageHero
        eyebrow="Work · All Projects"
        title="Every Platform"
        highlighted="We've Built."
        description="Eight live products across hospitality, real estate, automotive, fitness, construction, fashion, and fine dining — each one built to the same uncompromising standard."
      />

      <section className="py-20" ref={gridRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="divide-y divide-border">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07 }}
              >
                <Link
                  href={`/work/${cs.slug}`}
                  className="group flex flex-col lg:flex-row gap-6 py-8 hover:bg-card/30 transition-colors duration-300 -mx-4 px-4 rounded-sm"
                >
                  {/* Thumbnail */}
                  <div className="lg:w-52 h-32 lg:h-auto flex-shrink-0 rounded-sm overflow-hidden border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cs.thumbnail}
                      alt={cs.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-ember/70 font-medium mb-1">{cs.industry}</span>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-ember transition-colors">{cs.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xl">{cs.tagline}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.technologies.slice(0, 5).map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[9px] uppercase tracking-[0.10em] border border-border rounded-sm text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right actions */}
                  <div className="flex lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 flex-shrink-0">
                    <a
                      href={cs.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-[10px] uppercase tracking-[0.10em] text-muted-foreground hover:text-ember transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live Site
                    </a>
                    <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-3 h-3 text-ember" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to Build Something Exceptional?"
        subtitle="Let's create your next case study together."
        secondaryLabel="See All Work"
        secondaryHref="/work"
      />
    </main>
  )
}
