"use client"

import { motion } from "framer-motion"

interface PageHeroProps {
  eyebrow:     string
  title:       string
  highlighted?: string
  titleAfter?: string
  description: string
  dark?:       boolean
}

export function PageHero({ eyebrow, title, highlighted, titleAfter, description, dark = false }: PageHeroProps) {
  return (
    <section
      className={`relative pt-40 pb-24 overflow-hidden ${dark ? "bg-[oklch(0.07_0.008_260)]" : "bg-background"}`}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-[-10%] w-[600px] h-[600px] rounded-full bg-ember/8 blur-[160px]" />
        <div
          className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] rounded-full bg-ember/5 blur-[120px]"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {dark && (
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.97 0.005 90 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.005 90 / 0.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-7"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] mb-8 text-balance max-w-4xl ${dark ? "text-[oklch(0.97_0.005_90)]" : "text-foreground"}`}
        >
          {title}{" "}
          {highlighted && <span className="gradient-text">{highlighted}</span>}
          {titleAfter && ` ${titleAfter}`}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className={`text-base leading-relaxed max-w-2xl ${dark ? "text-[oklch(0.72_0.01_90)]" : "text-muted-foreground"}`}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={`mt-12 h-px origin-left ${dark ? "bg-[oklch(0.22_0.01_260)]" : "bg-border"}`}
        />
      </div>
    </section>
  )
}
