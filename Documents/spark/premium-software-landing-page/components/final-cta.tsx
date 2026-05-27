"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCta() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative py-36 overflow-hidden border-t border-border"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-ember/8 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.90] mb-8"
        >
          <span className="block text-balance text-foreground">Ready to Build</span>
          <span className="block text-balance gradient-text">Something</span>
          <span className="block text-balance text-foreground">Exceptional?</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="text-base text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Tell us about your project and we will schedule a free discovery call within 24 hours.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-10 py-4 text-sm font-semibold rounded-sm bg-ember text-cream hover:bg-ember-light transition-colors duration-300 glow group"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 px-10 py-4 text-sm font-medium rounded-sm border border-border text-foreground hover:border-ember/50 hover:text-ember transition-colors duration-300"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-14 text-[11px] uppercase tracking-[0.18em] text-muted-foreground/50"
        >
          Every system engineered to production standard &nbsp;&middot;&nbsp; No exceptions
        </motion.p>
      </div>
    </section>
  )
}
