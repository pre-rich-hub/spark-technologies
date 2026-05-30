"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"

export function ContactSection() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const inputClass =
    "bg-card/50 border-border focus:border-ember hover:border-border/80 h-12 rounded-sm text-sm transition-colors duration-300"

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-ember/8 blur-[130px]" />
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
            Get Started
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.92] text-balance">
              Ready to Build<br />
              <span className="gradient-text">Something Great?</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {"Let's discuss your project. Our team is ready to turn your vision into reality."}
            </p>
          </div>
          <div className="mt-12 h-px bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">
                  Your Name <span className="text-ember">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">
                  Email Address <span className="text-ember">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">
                Company
              </label>
              <Input
                id="company"
                type="text"
                placeholder="Your Company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">
                Tell Us About Your Project
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Describe your project goals, timeline, and any specific requirements..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-sm bg-card/50 border border-border focus:border-ember hover:border-border/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ember/15 transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2.5 w-full justify-center px-8 py-4 text-sm font-semibold rounded-sm bg-ember text-cream hover:bg-ember-light transition-colors duration-300 glow group"
            >
              Send Message
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="rounded-sm border border-border bg-card/60 p-8">
              <h3 className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-7">
                Contact Information
              </h3>

              <div className="space-y-7">
                {[
                  { icon: Mail,  label: "Email",        value: "hello@nexus.dev",   href: "mailto:hello@nexus.dev"    },
                  { icon: Phone, label: "Phone",        value: "+1 (555) 123-4567",  href: "tel:+15551234567"          },
                  { icon: MapPin,label: "Headquarters", value: "100 Innovation Drive, San Francisco CA 94107", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-sm border border-border flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-ember" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-foreground hover:text-ember transition-colors duration-300">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick-response card */}
            <div className="rounded-sm border border-ember/25 bg-ember/5 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
                <span className="text-xs uppercase tracking-[0.16em] text-ember font-medium">Quick Response</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We typically respond within 24 hours. For urgent inquiries, please call us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
