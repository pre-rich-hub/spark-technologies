"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Mail, MapPin, Phone, ChevronDown } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"

const offices = [
  { city: "San Francisco", address: "100 Innovation Drive, Suite 900", country: "United States", role: "Headquarters" },
  { city: "London",        address: "One Canada Square, Canary Wharf",  country: "United Kingdom", role: "EMEA Hub"       },
  { city: "Singapore",     address: "1 Raffles Quay, North Tower",      country: "Singapore",      role: "APAC Hub"       },
]

const faqs = [
  { q: "What is your typical project timeline?", a: "Typical projects range from 10 weeks (focused MVP) to 32 weeks (complex enterprise system). After a discovery call we provide a detailed timeline with milestones before any engagement begins." },
  { q: "How do you price your services?", a: "We work on a fixed-scope or time-and-materials basis depending on project clarity. We provide a detailed proposal with line-item breakdown after the discovery call — no surprises." },
  { q: "Do you work with early-stage startups?", a: "Yes, selectively. We reserve capacity for startups with strong product-market evidence and technical ambition. Seed-stage companies often work with us on a focused MVP engagement." },
  { q: "Who will I work with day-to-day?", a: "You work directly with the engineers who scoped your project. There are no account managers between you and the team. Every engagement has a named technical lead who is reachable without scheduling a meeting." },
  { q: "Do you offer post-launch support?", a: "Yes. Every engagement includes a 60-day hyper-care period. After that, we offer retainer-based support, SLA-backed maintenance, and ongoing product partnership arrangements." },
  { q: "Can you work with our existing team?", a: "Absolutely. We embed alongside in-house teams regularly. We can lead, collaborate, or complement — we adapt to your team's structure and workflow." },
]

export default function ContactPage() {
  const formRef  = useRef(null)
  const faqRef   = useRef(null)
  const formInView = useInView(formRef,  { once: true, margin: "-60px" })
  const faqInView  = useInView(faqRef,   { once: true, margin: "-60px" })

  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const inputClass = "w-full bg-input border border-border focus:border-ember rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ember/15 transition-colors duration-300"

  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Build"
        highlighted="Something"
        titleAfter="Great."
        description="Tell us about your project. We respond within 24 hours and schedule a no-obligation discovery call to understand your goals."
      />

      {/* Form + Info */}
      <section className="py-24" ref={formRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-8">Start the Conversation</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">Your Name</label>
                    <input type="text" placeholder="John Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">Email Address</label>
                    <input type="email" placeholder="john@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">Company</label>
                    <input type="text" placeholder="Your Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">Budget Range</label>
                    <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={inputClass}>
                      <option value="">Select a range</option>
                      <option value="50k-150k">$50K – $150K</option>
                      <option value="150k-500k">$150K – $500K</option>
                      <option value="500k-1m">$500K – $1M</option>
                      <option value="1m+">$1M+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">Tell Us About Your Project</label>
                  <textarea rows={6} placeholder="Describe your project goals, timeline, and key requirements..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 w-full justify-center px-8 py-4 text-sm font-semibold rounded-sm bg-ember text-cream hover:bg-ember-light transition-colors duration-300 glow group"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-muted-foreground/60 text-center">
                  We typically respond within 24 hours. No spam, ever.
                </p>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-8"
            >
              {/* Direct contact */}
              <div className="rounded-sm border border-border bg-card/60 p-8">
                <h3 className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-7">Direct Contact</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail,   label: "Email",    value: "hello@spark.dev",          href: "mailto:hello@spark.dev"  },
                    { icon: Phone,  label: "Phone",    value: "+1 (415) 555-0147",         href: "tel:+14155550147"        },
                    { icon: MapPin, label: "HQ",       value: "San Francisco, California", href: null                     },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm border border-border flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-ember" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-1">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-foreground hover:text-ember transition-colors">{value}</a>
                        ) : (
                          <p className="text-sm text-foreground">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="rounded-sm border border-ember/25 bg-ember/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.16em] text-ember font-medium">Quick Response</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We respond to every inquiry within 24 hours. No automated replies — a real engineer reads every message.
                </p>
              </div>

              {/* Discovery process */}
              <div className="rounded-sm border border-border bg-card/60 p-8">
                <h3 className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-6">Discovery Process</h3>
                <div className="space-y-5">
                  {[
                    { n: "01", title: "Submit your brief",    desc: "Use this form or email us directly."       },
                    { n: "02", title: "Discovery call",       desc: "45-minute call to understand your goals."  },
                    { n: "03", title: "Proposal & proposal",  desc: "Detailed scope, timeline, and fixed quote." },
                  ].map((s) => (
                    <div key={s.n} className="flex gap-4">
                      <span className="text-xs font-bold text-ember/60 tabular-nums mt-0.5 flex-shrink-0">{s.n}</span>
                      <div>
                        <p className="text-sm font-semibold mb-0.5">{s.title}</p>
                        <p className="text-xs text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 border-t border-border" style={{ background: "var(--section-alt)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-10">Global Offices</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
            {offices.map((office) => (
              <div key={office.city} className="bg-card/60 p-8 hover:bg-card/90 transition-colors duration-300">
                <span className="text-[10px] uppercase tracking-[0.16em] text-ember font-medium">{office.role}</span>
                <h3 className="text-xl font-bold mt-2 mb-1">{office.city}</h3>
                <p className="text-sm text-muted-foreground">{office.address}</p>
                <p className="text-xs text-muted-foreground/60 mt-1">{office.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" ref={faqRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-14"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">
              Common Questions
            </h2>
          </motion.div>
          <div className="max-w-3xl divide-y divide-border">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="py-5"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
