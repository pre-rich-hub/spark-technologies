"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"

const values = [
  {
    title:       "Relentless Quality",
    description: "We would rather miss a deadline than ship something we are not proud of. Every codebase we deliver is one we will stake our reputation on.",
  },
  {
    title:       "Engineering Integrity",
    description: "We tell clients what they need to hear, not what they want to hear. Honest technical assessment — even when it complicates the conversation.",
  },
  {
    title:       "Transparent Process",
    description: "No black box. Weekly demos, clear milestones, open backlog. You always know the state of your project, your budget, and your timeline.",
  },
  {
    title:       "Long-Term Thinking",
    description: "Every architecture decision is made for the system's ten-year life, not the six-month engagement. We build for where your business is going.",
  },
]

const principles = [
  {
    n:    "01",
    title:"Systems over features",
    desc: "We spend more time on the architecture than the features — because the architecture is what makes features possible at scale. Features are temporary. Structure is permanent.",
  },
  {
    n:    "02",
    title:"AI-native by default",
    desc: "We design for AI from the first whiteboard session. Not retrofitted. Not bolted on. Integrated into the data model, the API contracts, and the infrastructure from the start.",
  },
  {
    n:    "03",
    title:"Security as structure",
    desc: "Security is a design constraint, not a post-launch audit. We make it a first-class concern from the initial architecture review through to every deployment.",
  },
  {
    n:    "04",
    title:"Code that teaches",
    desc: "Every codebase is documented and structured as if the next engineer is better than us. Because eventually, they will be — and the system should be ready for them.",
  },
  {
    n:    "05",
    title:"Performance is product",
    desc: "Load time, throughput, and error rates are product decisions. We measure them like revenue, because the engineering quality users feel directly determines what they do next.",
  },
]

const delivery = [
  {
    title: "Direct accountability",
    desc:  "You work directly with the engineers who scoped your project. There are no account managers or delivery layers between you and the people writing the code.",
  },
  {
    title: "Named technical lead",
    desc:  "Every engagement has a single named technical lead who owns architectural decisions, attends every client touchpoint, and is reachable without scheduling a meeting.",
  },
  {
    title: "No handoff model",
    desc:  "We don't sell and hand off. The team that designs your system builds it. The team that builds it deploys it. Continuity is not optional — it is how quality is maintained.",
  },
]


export default function AboutPage() {
  const missionRef  = useRef(null)
  const principlesRef = useRef(null)
  const valuesRef   = useRef(null)
  const deliveryRef = useRef(null)

  const missionInView    = useInView(missionRef,    { once: true, margin: "-80px" })
  const principlesInView = useInView(principlesRef, { once: true, margin: "-80px" })
  const valuesInView     = useInView(valuesRef,     { once: true, margin: "-80px" })
  const deliveryInView   = useInView(deliveryRef,   { once: true, margin: "-80px" })

  return (
    <main>
      <PageHero
        eyebrow="About Spark"
        title="Software Engineered"
        highlighted="Without Compromise."
        description="Spark is a software engineering studio. We build AI-native platforms, enterprise systems, and scalable infrastructure for companies that refuse to compromise on the quality of their software."
      />

      {/* Mission */}
      <section
        className="py-24 border-b border-border"
        style={{ background: "var(--section-alt)" }}
        ref={missionRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Our Position</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.08] text-balance mb-6">
                Most software gets built to a deadline.<br />
                <span className="gradient-text">Ours gets built to last.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="space-y-5"
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every architecture decision we make is for the system&apos;s ten-year life, not the six-month engagement. Every code review is done as if the system will need to run flawlessly at ten times its current scale. Because eventually, it will.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We work with ambitious companies — the ones building systems that matter, that carry real load, that fail in ways that cost real money. They come to us because they need engineering that matches the seriousness of what they are building.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We are selective by design. Every engagement gets the full force of our attention, and we do not dilute that across more clients than we can serve at that standard.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="py-24" ref={principlesRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={principlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Engineering Philosophy</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">
                How We Think
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Five principles that govern every technical decision we make — from the first design session to the last deployment.
              </p>
            </div>
            <div className="mt-12 h-px bg-border" />
          </motion.div>

          <div className="divide-y divide-border">
            {principles.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, x: -16 }}
                animate={principlesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="group flex gap-8 py-8 hover:bg-card/30 transition-colors duration-300 -mx-4 px-4 rounded-sm"
              >
                <span className="text-xs font-bold text-ember/50 tabular-nums flex-shrink-0 mt-1 group-hover:text-ember transition-colors">
                  {p.n}
                </span>
                <div>
                  <h3 className="font-semibold mb-2 group-hover:text-ember transition-colors duration-300">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-24 border-y border-border"
        style={{ background: "var(--section-alt)" }}
        ref={valuesRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Our Values</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-card/60 hover:bg-card/90 p-8 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />
                <div className="flex gap-4 relative z-10">
                  <div
                    className="w-[3px] rounded-full bg-ember flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity mt-1"
                    style={{ height: "1.2em" }}
                  />
                  <div>
                    <h3 className="font-semibold mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-24" ref={deliveryRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={deliveryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">How We Work</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">
              How We Deliver
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
            {delivery.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                animate={deliveryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-card/60 hover:bg-card/90 p-8 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-5xl font-bold text-foreground/[0.04] leading-none block mb-5 select-none tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold mb-3">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to Build Something Exceptional?"
        subtitle="Partner with a studio that treats your codebase like a long-term investment."
        secondaryLabel="See Our Work"
        secondaryHref="/work"
      />
    </main>
  )
}
