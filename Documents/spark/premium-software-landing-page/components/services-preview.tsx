"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Building2, Cloud, Code2, Globe, TabletSmartphone, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Brain,
    title: "AI Platforms",
    description: "Production-grade AI systems — LLM integrations, RAG pipelines, and custom ML models — engineered to deliver measurable outcomes at scale.",
    href: "/services/ai-platforms",
  },
  {
    icon: Building2,
    title: "Enterprise Applications",
    description: "Complex enterprise systems engineered for real-world load, regulatory requirements, and organisational scale.",
    href: "/services/enterprise-applications",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Modern cloud architecture optimised for performance, cost-efficiency, and resilience across AWS, GCP, and Azure.",
    href: "/services/cloud-infrastructure",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description: "Bespoke full-stack software built to your exact specifications. No templates, no shortcuts, no handoffs.",
    href: "/services/custom-development",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance web applications and SaaS platforms — modern stack, clean code, and the performance standards users demand.",
    href: "/services/web-development",
  },
  {
    icon: TabletSmartphone,
    title: "Mobile Development",
    description: "Cross-platform iOS and Android apps built with Flutter and React Native — native performance from a single codebase.",
    href: "/services/mobile-development",
  },
]

export function ServicesPreview() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="relative py-32 overflow-hidden">
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
            <div className="lg:text-right">
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-5">
                Six focused capabilities. Each one practised deeply, not spread thin.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm text-ember hover:text-ember-light transition-colors duration-300 font-medium"
              >
                Explore all services
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="mt-12 h-px bg-border" />
        </motion.div>

        {/* Grid — 6 cards, clean 3×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Link
                href={service.href}
                className="group relative flex flex-col bg-card/60 hover:bg-card/90 p-8 transition-colors duration-500 overflow-hidden h-full"
              >
                {/* Ember hover wash */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-ember/5 to-transparent" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-sm border border-border flex items-center justify-center mb-7 group-hover:border-ember/40 transition-colors duration-500">
                    <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-ember transition-colors duration-500" />
                  </div>

                  <h3 className="text-lg font-semibold mb-3 flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-ember flex-shrink-0" />
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <div className="mt-6 text-[11px] uppercase tracking-[0.14em] text-ember/70 font-medium group-hover:text-ember transition-colors duration-300">
                    Learn more
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
