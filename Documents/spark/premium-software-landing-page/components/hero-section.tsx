"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const pillars = [
  { value: "Custom",     label: "Built Software"   },
  { value: "Web",        label: "& Mobile"         },
  { value: "Clean",      label: "Architecture"     },
  { value: "End-to-End", label: "Delivery"         },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — subtle ember ambient + fine grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-[-20%] w-[700px] h-[700px] rounded-full bg-ember/10 blur-[160px] animate-pulse-glow" />
        <div
          className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-ember/6 blur-[130px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.97 0.005 90 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.005 90 / 0.15) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-[-0.03em] leading-[0.90] mb-8"
        >
          <span className="block text-balance text-foreground">We Build</span>
          <span className="block text-balance gradient-text">Digital</span>
          <span className="block text-balance text-foreground">Excellence</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed text-pretty"
        >
          A software studio crafting custom web and mobile products for ambitious
          businesses — built to last, delivered without compromise.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-sm bg-ember text-cream hover:bg-ember-light transition-colors duration-300 glow group"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-sm border border-border hover:border-ember/50 hover:text-ember transition-colors duration-300"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Capability pillars */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px border border-border rounded-sm overflow-hidden bg-border"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.label}
              className="flex flex-col items-center justify-center py-8 px-4 bg-card/60 hover:bg-card/90 transition-colors duration-300"
            >
              <span className="text-lg sm:text-xl font-bold gradient-text leading-none mb-2 tracking-tight">
                {pillar.value}
              </span>
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {pillar.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.20em] text-muted-foreground/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-ember/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
