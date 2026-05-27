"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Layers, Brain, Building2, Cloud, Code2, Smartphone, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "Scalable Systems",
    description:
      "Architecture designed to grow with your business. Systems that handle millions of users while maintaining peak performance.",
    features: ["Microservices", "Event-Driven", "Auto-Scaling"],
  },
  {
    icon: Brain,
    title: "AI-Powered Platforms",
    description:
      "Intelligent solutions that transform raw data into competitive advantage. ML and AI integrated seamlessly into your workflow.",
    features: ["Machine Learning", "NLP", "Predictive Analytics"],
  },
  {
    icon: Building2,
    title: "Enterprise Applications",
    description:
      "Robust, security-first applications tailored for enterprise operations — from ERP to mission-critical custom systems.",
    features: ["Security-First", "Compliance Ready", "Integration APIs"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Modern cloud architecture optimized for performance, reliability, and cost-efficiency across any provider.",
    features: ["Multi-Cloud", "DevOps", "Infrastructure as Code"],
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Bespoke software crafted to your exact specifications. From concept to deployment — we bring your vision to life.",
    features: ["Full-Stack", "API Development", "Legacy Modernization"],
  },
  {
    icon: Smartphone,
    title: "Digital Products",
    description:
      "User-centric digital products that delight customers and drive growth. Web, mobile, and everything beyond.",
    features: ["UX Design", "Cross-Platform", "Performance Optimized"],
  },
]

export function ServicesSection() {
  const ref     = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-ember/6 blur-[140px]" />
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
            What We Do
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] text-balance">
              Services Built<br />
              for <span className="gradient-text">Tomorrow</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              End-to-end solutions that transform how businesses operate, compete,
              and grow in the digital age.
            </p>
          </div>
          <div className="mt-12 h-px bg-border" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative bg-card/60 hover:bg-card/90 p-8 transition-colors duration-500 overflow-hidden"
            >
              {/* Ember hover wash */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-ember/5 to-transparent" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-sm border border-border flex items-center justify-center mb-7 group-hover:border-ember/40 transition-colors duration-500">
                  <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-ember transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 flex items-center justify-between">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-ember" />
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] border border-border rounded-sm text-muted-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
