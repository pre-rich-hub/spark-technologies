"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const values = [
  {
    title: "Innovation-Driven",
    description:
      "We stay ahead of the curve, constantly exploring emerging technologies to deliver cutting-edge solutions.",
  },
  {
    title: "Client-Centric",
    description:
      "Your success is our priority. We work as an extension of your team, deeply understanding your business goals.",
  },
  {
    title: "Quality Obsessed",
    description:
      "Every line of code, every design decision is crafted with precision and uncompromising attention to detail.",
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication, honest timelines, no surprises — you are always fully in the loop.",
  },
]

const expertise = [
  "React & Next.js",
  "Node.js & Python",
  "AWS & GCP",
  "Kubernetes",
  "PostgreSQL",
  "Machine Learning",
  "TypeScript",
  "GraphQL",
]

const metrics = [
  { value: "40+", label: "Engineers"  },
  { value: "15",  label: "Countries"  },
  { value: "24/7",label: "Support"    },
]

export function AboutSection() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[500px] rounded-full bg-ember/6 blur-[140px]" />
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
            About Nexus
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] text-balance">
            Engineering the Future,<br />
            <span className="gradient-text">One Solution</span> at a Time
          </h2>
          <div className="mt-12 h-px bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — narrative + values */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-base text-muted-foreground leading-relaxed mb-12 text-pretty">
              Founded by engineers with a passion for excellence, Nexus has grown into a global
              software studio serving startups and Fortune 500 companies alike. We combine deep
              technical expertise with strategic thinking to deliver solutions that drive real,
              measurable business impact.
            </p>

            <div className="space-y-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group flex gap-5 pb-8 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="mt-1 w-[3px] h-5 rounded-full bg-ember flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <h3 className="font-semibold mb-1.5 text-sm">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — tech stack card + floating stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative"
          >
            <div className="rounded-sm border border-border bg-card/60 p-8 overflow-hidden">
              {/* Decorative ember corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-ember/10 to-transparent pointer-events-none" />

              <h3 className="text-sm uppercase tracking-[0.16em] text-muted-foreground mb-2">
                Our Tech Stack
              </h3>
              <p className="text-2xl font-bold mb-8">
                Industry-leading technologies.<br />
                <span className="gradient-text">Zero compromise.</span>
              </p>

              <div className="flex flex-wrap gap-2.5">
                {expertise.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: 0.4 + i * 0.045 }}
                    className="px-3.5 py-2 text-xs border border-border rounded-sm text-muted-foreground hover:border-ember/50 hover:text-ember transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Metrics row */}
              <div className="mt-10 pt-8 border-t border-border grid grid-cols-3 gap-4">
                {metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-3xl font-bold gradient-text leading-none mb-1">{m.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 px-5 py-4 rounded-sm glass glow-sm"
            >
              <div className="text-xl font-bold gradient-text leading-none">99.9%</div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mt-1">Uptime SLA</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-5 px-5 py-4 rounded-sm glass glow-sm"
            >
              <div className="text-xl font-bold gradient-text leading-none">ISO</div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mt-1">27001 Certified</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
