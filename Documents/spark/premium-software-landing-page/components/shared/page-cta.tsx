"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface PageCtaProps {
  title?:     string
  subtitle?:  string
  primaryLabel?:   string
  primaryHref?:    string
  secondaryLabel?: string
  secondaryHref?:  string
}

export function PageCta({
  title       = "Ready to Build Something Exceptional?",
  subtitle    = "Tell us about your project and we will schedule a free discovery call within 24 hours.",
  primaryLabel   = "Start a Project",
  primaryHref    = "/contact",
  secondaryLabel = "View Our Work",
  secondaryHref  = "/work",
}: PageCtaProps) {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden border-t border-border"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-ember/7 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92] mb-5 text-balance">
              {title.split("Exceptional").length > 1 ? (
                <>
                  {title.split("Exceptional")[0]}
                  <span className="gradient-text">Exceptional</span>
                  {title.split("Exceptional")[1]}
                </>
              ) : (
                title
              )}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
          >
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold rounded-sm bg-ember text-cream hover:bg-ember-light transition-colors duration-300 glow group"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-medium rounded-sm border border-border hover:border-ember/50 hover:text-ember transition-colors duration-300"
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
