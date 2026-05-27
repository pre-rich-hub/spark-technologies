"use client"

import { notFound } from "next/navigation"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { PageCta } from "@/components/shared/page-cta"
import { services, getServiceBySlug } from "@/lib/data/services"
import { caseStudies } from "@/lib/data/case-studies"
import { use } from "react"

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const service  = getServiceBySlug(slug)

  if (!service) notFound()

  const processRef  = useRef(null)
  const techRef     = useRef(null)
  const relatedRef  = useRef(null)

  const processInView = useInView(processRef, { once: true, margin: "-60px" })
  const techInView    = useInView(techRef,    { once: true, margin: "-60px" })
  const relatedInView = useInView(relatedRef, { once: true, margin: "-60px" })

  const relatedCases = caseStudies.filter((c) => service.relatedWork.includes(c.slug))
  const Icon = service.icon

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-[-10%] w-[600px] h-[600px] rounded-full bg-ember/8 blur-[160px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-ember transition-colors mb-8">
            ← All Services
          </Link>
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-sm border border-border flex items-center justify-center flex-shrink-0 bg-card/60">
              <Icon className="w-7 h-7 text-ember" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-2">{service.tagline}</p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] text-balance"
              >
                {service.title}
              </motion.h1>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-muted-foreground leading-relaxed max-w-2xl"
          >
            {service.description}
          </motion.p>
          <div className="mt-12 h-px bg-border" />
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-b border-border" style={{ background: "var(--section-alt)" }} ref={processRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-14"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Our Process</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">How We Deliver It</h2>
          </motion.div>
          <div className="divide-y divide-border">
            {service.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -16 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="group flex gap-8 py-7 hover:text-ember transition-colors duration-300"
              >
                <span className="text-xs font-bold text-ember/50 tabular-nums flex-shrink-0 mt-0.5 group-hover:text-ember transition-colors">{step.step}</span>
                <div>
                  <h3 className="font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies + Benefits */}
      <section className="py-24" ref={techRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={techInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Technology Stack</p>
              <h2 className="text-3xl font-bold tracking-tight leading-[0.92] mb-8">Industry-Leading Tools</h2>
              <div className="flex flex-wrap gap-2.5">
                {service.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={techInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="px-3.5 py-2 text-xs border border-border rounded-sm text-muted-foreground hover:border-ember/50 hover:text-ember transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={techInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Key Benefits</p>
              <h2 className="text-3xl font-bold tracking-tight leading-[0.92] mb-8">What You Gain</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    animate={techInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                    className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="w-[3px] rounded-full bg-ember flex-shrink-0 opacity-70 mt-1" style={{ height: "1.1em" }} />
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {relatedCases.length > 0 && (
        <section className="py-24 border-t border-border" style={{ background: "var(--section-alt)" }} ref={relatedRef}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={relatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-4">Related Work</p>
              <h2 className="text-3xl font-bold tracking-tight">See It in Action</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {relatedCases.map((cs, i) => (
                <motion.div
                  key={cs.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Link
                    href={`/work/${cs.slug}`}
                    className="group flex flex-col rounded-sm border border-border bg-card/60 hover:bg-card/90 p-8 transition-colors duration-500 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-ember/80 font-medium">{cs.industry}</span>
                      <h3 className="text-2xl font-bold mt-2 mb-2 group-hover:text-ember transition-colors">{cs.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{cs.tagline}</p>
                      <div className="flex items-center gap-1.5 mt-2 text-sm font-medium text-ember opacity-0 group-hover:opacity-100 transition-opacity">
                        View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/50 mb-6">Other Services</p>
          <div className="flex flex-wrap gap-3">
            {services.filter((s) => s.slug !== slug).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm border border-border rounded-sm text-muted-foreground hover:border-ember/40 hover:text-ember transition-colors duration-300"
              >
                {s.title}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        primaryLabel="Discuss This Service"
        primaryHref="/contact"
        secondaryLabel="See All Services"
        secondaryHref="/services"
      />
    </main>
  )
}
