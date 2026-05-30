"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"

const values = [
  {
    title: "Relentless Quality",
    description: "We would rather miss a deadline than ship something we are not proud of. Every codebase we deliver is one we will stake our reputation on.",
  },
  {
    title: "Engineering Integrity",
    description: "We tell clients what they need to hear, not what they want to hear. Honest technical assessment — even when it complicates the conversation.",
  },
  {
    title: "Transparent Process",
    description: "No black box. Weekly demos, clear milestones, open backlog. You always know the state of your project, your budget, and your timeline.",
  },
  {
    title: "Long-Term Thinking",
    description: "Every architecture decision is made for the system's ten-year life, not the six-month engagement. We build for where your business is going.",
  },
]

const principles = [
  {
    n: "01",
    title: "Systems over features",
    desc: "We spend more time on the architecture than the features — because the architecture is what makes features possible at scale. Features are temporary. Structure is permanent.",
  },
  {
    n: "02",
    title: "AI-native by default",
    desc: "We design for AI from the first whiteboard session. Not retrofitted. Not bolted on. Integrated into the data model, the API contracts, and the infrastructure from the start.",
  },
  {
    n: "03",
    title: "Security as structure",
    desc: "Security is a design constraint, not a post-launch audit. We make it a first-class concern from the initial architecture review through to every deployment.",
  },
  {
    n: "04",
    title: "Code that teaches",
    desc: "Every codebase is documented and structured as if the next engineer is better than us. Because eventually, they will be — and the system should be ready for them.",
  },
  {
    n: "05",
    title: "Performance is product",
    desc: "Load time, throughput, and error rates are product decisions. We measure them like revenue, because the engineering quality users feel directly determines what they do next.",
  },
]

const delivery = [
  {
    title: "Direct accountability",
    desc: "You work directly with the engineers who scoped your project. There are no account managers or delivery layers between you and the people writing the code.",
  },
  {
    title: "Named technical lead",
    desc: "Every engagement has a single named technical lead who owns architectural decisions, attends every client touchpoint, and is reachable without scheduling a meeting.",
  },
  {
    title: "No handoff model",
    desc: "We don't sell and hand off. The team that designs your system builds it. The team that builds it deploys it. Continuity is not optional — it is how quality is maintained.",
  },
]


export default function AboutPage() {
  const missionRef = useRef(null)
  const principlesRef = useRef(null)
  const valuesRef = useRef(null)
  const deliveryRef = useRef(null)

  const missionInView = useInView(missionRef, { once: true, margin: "-80px" })
  const principlesInView = useInView(principlesRef, { once: true, margin: "-80px" })
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" })
  const deliveryInView = useInView(deliveryRef, { once: true, margin: "-80px" })

  return (
    <main>
      <PageHero
        eyebrow="About Melba Technology"
        title="Software Engineered"
        highlighted="Without Compromise."
        description="Melba Technology is inspired by the timeless wisdom of the Oromo Gadaa System — one of Africa’s oldest indigenous systems of leadership, knowledge, unity, and generational progress."
      />

      {/* Heritage & Mission */}
      <section
        className="py-32 border-b border-border relative overflow-hidden"
        style={{ background: "var(--section-alt)" }}
        ref={missionRef}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-6">Our Legacy</p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05] text-balance mb-8">
                Bridging Heritage<br />
                <span className="gradient-text">With Innovation.</span>
              </h2>
              <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
                <p>
                  For centuries, the Gadaa System shaped communities through responsibility, innovation, collaboration, and visionary thinking. At Melba Technology, we carry that same spirit into the digital age.
                </p>
                <div className="pl-6 border-l-2 border-ember/30">
                  <p className="italic text-foreground/80 font-medium">
                    "Rooted in heritage. Built for the future."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                  We believe technology is more than code and design — it is a tool that connects people, empowers businesses, and builds the future.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rooted in Ethiopian identity and driven by global standards, we create modern digital solutions that help businesses grow, compete, and thrive in a rapidly evolving world.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our mission is to combine the strength of African wisdom with the limitless possibilities of technology. From Ethiopia to the world, Melba Technology exists to build impactful digital experiences that inspire progress, create opportunity, and leave a lasting legacy for the next generation.
                </p>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-border">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-ember font-bold mb-2">Philosophy</p>
                  <p className="text-sm text-foreground/70">Responsibility & Visionary Thinking</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-ember font-bold mb-2">Goal</p>
                  <p className="text-sm text-foreground/70">Global Standards, Local Roots</p>
                </div>
              </div>
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
