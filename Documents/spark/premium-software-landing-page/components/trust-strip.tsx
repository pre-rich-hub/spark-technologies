"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stack = [
  "Next.js", "TypeScript", "React", "Node.js", "PostgreSQL",
  "Tailwind CSS", "Flutter", "React Native", "Vercel",
  "Stripe", "Figma", "Firebase",
]

const domains = [
  { label: "Custom Development", desc: "Full-stack software built to spec — web apps, SaaS platforms, internal tools" },
  { label: "Web Development",    desc: "Fast, SEO-ready web apps with clean architecture and Core Web Vitals focus"   },
  { label: "Mobile Development", desc: "Cross-platform iOS and Android apps from a single Flutter or React Native codebase" },
  { label: "Product Design",     desc: "UX design, prototyping, and design systems that scale with your product"     },
]

export function TrustStrip() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section
      ref={ref}
      className="relative py-16 border-y border-border/60 overflow-hidden"
      style={{ background: "var(--section-alt)" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-10"
        >
          Core Engineering Stack
        </motion.p>

        {/* Technology tokens */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-14"
        >
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.04 }}
              className="px-3.5 py-1.5 text-xs border border-border/70 rounded-sm text-muted-foreground/90 hover:border-ember/30 hover:text-ember/80 transition-colors duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="h-px bg-border/40 mb-14 origin-center"
        />

        {/* Domain expertise */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-sm overflow-hidden">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.07 }}
              className="bg-card/30 hover:bg-card/60 transition-colors duration-300 px-6 py-5"
            >
              <div className="w-1 h-1 rounded-full bg-ember mb-3" />
              <h3 className="text-xs font-semibold text-foreground/80 mb-1.5 tracking-tight">{domain.label}</h3>
              <p className="text-[11px] text-muted-foreground/85 leading-relaxed">{domain.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
