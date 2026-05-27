"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/shared/page-hero"

const culture = [
  {
    title: "Direct Ownership",
    desc: "You own your work end-to-end. There is no handoff layer between you and the problem, and no account manager translating your decisions to the client.",
  },
  {
    title: "Craft Over Speed",
    desc: "We build things right. Deadlines matter — so does the quality of what ships. We would rather have an honest conversation about scope than deliver something we are not proud of.",
  },
  {
    title: "Honest Collaboration",
    desc: "Small team, clear communication, no internal politics. Everyone has full context. Everyone's technical opinion is heard because everyone has skin in the outcome.",
  },
  {
    title: "Selective Work",
    desc: "We turn down projects that do not meet our standards. Working here means you will only spend your time on problems that are actually worth solving.",
  },
]

const signals = [
  {
    title: "Engineers who treat quality as a standard, not a preference",
    desc: "Not something that gets deprioritised when timelines compress. Code quality, system design, and test coverage are non-negotiable parts of the job — not extras.",
  },
  {
    title: "People who want ownership, not task assignment",
    desc: "You will be given a problem and trusted to solve it. If you need someone to break your work into subtasks, this is probably not the right environment.",
  },
  {
    title: "Curious, honest, and comfortable with uncertainty",
    desc: "We value people who know the edges of their knowledge and are direct about them. Intellectual honesty is more useful here than projected confidence.",
  },
]

const areas = [
  {
    area: "Engineering",
    desc: "Full-stack, backend, and infrastructure engineers who write code they are proud to maintain a year from now.",
  },
  {
    area: "Design",
    desc: "Product and UX designers who think in systems and treat technical constraints as a creative challenge, not a limitation.",
  },
  {
    area: "Technical Leadership",
    desc: "Senior engineers and leads who can own an engagement end-to-end and communicate directly with clients without a translation layer.",
  },
]

export default function CareersPage() {
  const cultureRef     = useRef(null)
  const lookingRef     = useRef(null)
  const opportunityRef = useRef(null)

  const cultureInView     = useInView(cultureRef,     { once: true, margin: "-80px" })
  const lookingInView     = useInView(lookingRef,     { once: true, margin: "-80px" })
  const opportunityInView = useInView(opportunityRef, { once: true, margin: "-80px" })

  return (
    <main>
      <PageHero
        eyebrow="Work at Spark"
        title="Built by People"
        highlighted="Who Care."
        description="We are a small, deliberate studio. We work on hard problems, hold high standards, and ship things we are proud of. If that sounds like the environment you want, read on."
      />

      {/* How We Work */}
      <section
        className="py-24 border-b border-border"
        style={{ background: "var(--section-alt)" }}
        ref={cultureRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">How We Work</p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">
                Small by Choice.<br /><span className="gradient-text">Serious by Nature.</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                We are not trying to grow into a large agency. We are trying to build a small studio where the quality of the work and the quality of the environment are both as high as we can make them.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                That means a tight team, meaningful work, full ownership over what you build, and colleagues who hold the same standard you do.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
            {culture.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={cultureInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card/60 hover:bg-card/90 p-8 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-ember mb-4" />
                  <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-24" ref={lookingRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={lookingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Who We&apos;re Looking For</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">
                Exceptional People,<br />Not Just Experienced Ones.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                We care more about how you think than where you have worked.
              </p>
            </div>
            <div className="mt-12 h-px bg-border" />
          </motion.div>

          <div className="divide-y divide-border">
            {signals.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -16 }}
                animate={lookingInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group flex gap-8 py-8 hover:bg-card/30 transition-colors duration-300 -mx-4 px-4 rounded-sm"
              >
                <span className="text-xs font-bold text-ember/50 tabular-nums flex-shrink-0 mt-0.5 group-hover:text-ember transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold mb-2 group-hover:text-ember transition-colors duration-300">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Opportunities */}
      <section
        className="py-24 border-t border-border"
        style={{ background: "var(--section-alt)" }}
        ref={opportunityRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={opportunityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-14"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Opportunities</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">
              Future Opportunities
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={opportunityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                We do not hire on a schedule. When space opens for another exceptional person, we find them through our network — or they reach out to us directly.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                We occasionally look for engineers, designers, and technical leads who hold an unusually high bar. People who would be equally uncomfortable shipping mediocre work as they would be working somewhere that tolerates it.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If that sounds like you, send us a short note. Tell us what you build and what you care about. Work samples matter more than credentials.
              </p>

              <div className="mt-10">
                <Link
                  href="mailto:hello@spark.dev?subject=Future Opportunities"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium rounded-sm bg-ember text-cream hover:bg-ember-light transition-colors duration-300 group"
                >
                  hello@spark.dev
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <p className="text-xs text-muted-foreground/60 mt-4">
                  No CV template required. A brief introduction and examples of your work is enough to start a conversation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={opportunityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="space-y-4"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-6">Areas we occasionally hire in</p>
              {areas.map((item, i) => (
                <motion.div
                  key={item.area}
                  initial={{ opacity: 0, y: 12 }}
                  animate={opportunityInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.09 }}
                  className="rounded-sm border border-border bg-card/60 p-6 hover:border-ember/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0" />
                    <span className="text-sm font-semibold">{item.area}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-[18px]">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
