"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    quote:
      "Spark transformed our entire digital infrastructure. Their expertise in cloud architecture saved us millions in operational costs while significantly improving performance.",
    author: "Sarah Chen",
    role:   "CTO",
    company:"TechCorp Global",
    initials:"SC",
  },
  {
    quote:
      "Working with Spark felt like having an extension of our own team. They understood our vision immediately and delivered beyond our expectations, on time and within budget.",
    author: "Michael Torres",
    role:   "VP of Engineering",
    company:"FinanceHub",
    initials:"MT",
  },
  {
    quote:
      "The AI platform they built has revolutionized how we handle customer support. Response times dropped 80% and customer satisfaction is at an all-time high.",
    author: "Emily Watson",
    role:   "COO",
    company:"RetailMax",
    initials:"EW",
  },
]

export function TestimonialsSection() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-ember/6 blur-[130px]" />
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
            Client Perspectives
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] text-balance">
              In Their<br />
              <span className="gradient-text">Own Words</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              The measure of our work is the confidence clients place in us — project after project.
            </p>
          </div>
          <div className="mt-12 h-px bg-border" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-card/60 hover:bg-card/90 p-8 transition-colors duration-500 overflow-hidden"
            >
              {/* Ember hover wash */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-ember/5 to-transparent" />

              {/* Opening mark */}
              <span className="block text-5xl font-bold text-ember/25 leading-none mb-4 select-none">&ldquo;</span>

              <p className="text-sm text-foreground/85 leading-relaxed mb-8 relative z-10">
                {t.quote}
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-sm bg-ember/15 border border-ember/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-ember">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
