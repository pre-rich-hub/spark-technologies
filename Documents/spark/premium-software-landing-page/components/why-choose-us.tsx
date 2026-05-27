"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Zap, Eye, Users, BarChart3, Globe } from "lucide-react"

const advantages = [
  {
    icon: Zap,
    title: "Strategic Engineering",
    description: "Every system we design starts with your business model. Technology follows strategy, not the other way around.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "Weekly demos, clear milestones, honest timelines. You always know exactly where your project stands.",
  },
  {
    icon: Shield,
    title: "Security-First Architecture",
    description: "Security is a design constraint, not a post-launch audit. We embed it from the first whiteboard session.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description: "We don't disappear post-launch. Every engagement includes a 60-day support window and ongoing options.",
  },
  {
    icon: BarChart3,
    title: "Performance by Default",
    description: "We obsess over load times, Core Web Vitals, and error rates — because performance is a feature, not a phase.",
  },
  {
    icon: Globe,
    title: "Built to Scale",
    description: "Architecture that grows with your business — from first launch to whatever comes next, without rewrites.",
  },
]

export function WhyChooseUs() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-[-10%] w-[600px] h-[500px] rounded-full bg-ember/6 blur-[140px]" />
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
            Why Spark
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] text-balance">
              Built for the<br />
              <span className="gradient-text">Demanding Few</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              We work with clients who refuse to compromise — on quality, on scale, or on the long-term health of their systems.
            </p>
          </div>
          <div className="mt-12 h-px bg-border" />
        </motion.div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-card/60 hover:bg-card/90 p-8 transition-colors duration-500 overflow-hidden"
            >
              {/* Number */}
              <span className="absolute top-5 right-6 text-6xl font-bold leading-none text-foreground/[0.04] select-none pointer-events-none tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Hover wash */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-ember/4 to-transparent" />

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-sm border border-border flex items-center justify-center mb-6 group-hover:border-ember/40 transition-colors duration-500">
                  <item.icon className="w-4.5 h-4.5 text-muted-foreground group-hover:text-ember transition-colors duration-500" style={{ width: "18px", height: "18px" }} />
                </div>

                <h3 className="text-base font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
