"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"
import { services } from "@/lib/data/services"

const methodologySteps = [
  { n: "01", title: "Discovery",        desc: "We deeply understand your business model, technical constraints, and success metrics before proposing any solution."          },
  { n: "02", title: "Architecture",     desc: "We design the system before we build it. Architecture decisions are documented, reviewed, and explained — not hidden."        },
  { n: "03", title: "Iterative Build",  desc: "Two-week sprints, weekly demos, open backlog. You see real software, not status reports."                                    },
  { n: "04", title: "Quality Gates",    desc: "Security audits, performance testing, and compliance validation are built into the process — not bolt-on at the end."       },
  { n: "05", title: "Launch & Beyond",  desc: "We don't disappear post-launch. 60-day hyper-care plus ongoing partnership options for every engagement."                   },
]

export default function ServicesPage() {
  const methodRef  = useRef(null)
  const servicesRef = useRef(null)

  const methodInView   = useInView(methodRef,   { once: true, margin: "-80px" })
  const servicesInView = useInView(servicesRef, { once: true, margin: "-80px" })

  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title="Services Built for"
        highlighted="Tomorrow."
        description="End-to-end software engineering — from strategy through to production. Six practice areas, one unified standard of quality."
      />

      {/* Services grid */}
      <section className="py-24" ref={servicesRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col bg-card/60 hover:bg-card/90 p-8 h-full transition-colors duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-ember/5 to-transparent" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-sm border border-border flex items-center justify-center mb-6 group-hover:border-ember/40 transition-colors duration-500">
                      <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-ember transition-colors duration-500" />
                    </div>

                    <h3 className="text-xl font-bold mb-2 flex items-start justify-between gap-2">
                      {service.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-ember flex-shrink-0 mt-1" />
                    </h3>

                    <p className="text-xs text-ember/80 uppercase tracking-[0.14em] mb-4 font-medium">{service.tagline}</p>

                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.technologies.slice(0, 4).map((t) => (
                        <span key={t} className="px-2.5 py-1 text-[10px] uppercase tracking-[0.10em] border border-border rounded-sm text-muted-foreground">
                          {t}
                        </span>
                      ))}
                      {service.technologies.length > 4 && (
                        <span className="px-2.5 py-1 text-[10px] uppercase tracking-[0.10em] border border-border rounded-sm text-muted-foreground">
                          +{service.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 border-y border-border" style={{ background: "var(--section-alt)" }} ref={methodRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={methodInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">How We Work</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92] max-w-xl">
              A Process Designed for Clarity
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-px bg-border rounded-sm overflow-hidden">
            {methodologySteps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                animate={methodInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card/60 hover:bg-card/90 p-7 transition-colors duration-400 relative overflow-hidden group"
              >
                <span className="text-6xl font-bold text-foreground/[0.04] leading-none block mb-5 select-none tabular-nums">{step.n}</span>
                <h3 className="text-sm font-semibold mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to Build Something Exceptional?"
        subtitle="Tell us about your project and we will match you with the right practice area."
        secondaryLabel="See Our Work"
        secondaryHref="/work"
      />
    </main>
  )
}
