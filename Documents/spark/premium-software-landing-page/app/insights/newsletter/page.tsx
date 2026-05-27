"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/shared/page-hero"

const topics = [
  { label: "AI systems in production",          desc: "LLMs, RAG, agents — what actually works at scale." },
  { label: "Architecture decisions explained",  desc: "The reasoning behind patterns we use and patterns we avoid." },
  { label: "Engineering culture",               desc: "How we work, what we've learned, what we'd do differently." },
  { label: "New whitepapers & research",        desc: "First access to every paper we publish." },
  { label: "Hiring & team building",            desc: "How we find, evaluate, and retain exceptional engineers." },
  { label: "Case studies",                      desc: "What we built, how we built it, and what happened." },
]

const recent = [
  { title: "Why we stopped using microservices for every new project", reads: "4.2K reads" },
  { title: "The three LLM observability metrics we track in every production deployment", reads: "6.7K reads" },
  { title: "How we cut a client's infrastructure bill by 42% in six weeks", reads: "3.9K reads" },
  { title: "What fine dining taught us about premium UX", reads: "2.8K reads" },
]

export default function NewsletterPage() {
  const [email, setEmail]       = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <main>
      <PageHero
        eyebrow="Insights · Newsletter"
        title="Engineering Thinking,"
        highlighted="Weekly."
        description="The Spark newsletter — technical depth, honest perspectives, and practical guides from engineers who build production systems every day."
      />

      <section className="py-24" style={{ background: "var(--section-alt)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left — signup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-6">Subscribe</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.05] mb-5">
                One email per week.<br />
                <span className="gradient-text">No filler. No fluff.</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-sm">
                5,200+ engineers and engineering leaders read the Spark newsletter. Join them for weekly perspectives on the problems that actually matter.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 px-6 py-5 rounded-sm border border-ember/30 bg-ember/8"
                >
                  <div className="w-8 h-8 rounded-full bg-ember flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-cream" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">You&apos;re subscribed.</p>
                    <p className="text-xs text-muted-foreground mt-0.5">First issue arrives next {["Monday","Tuesday","Wednesday","Thursday","Friday"][new Date().getDay() % 5]}.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="flex-1 px-4 py-3 text-sm rounded-sm border border-border bg-background focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/30 transition-colors placeholder:text-muted-foreground/50"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-sm bg-ember text-cream hover:bg-ember-light transition-colors flex-shrink-0 group"
                  >
                    Subscribe
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}

              <p className="text-[10px] text-muted-foreground/50 mt-4">
                No spam. Unsubscribe any time. We don&apos;t share your email.
              </p>
            </motion.div>

            {/* Right — topics + recent */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-10"
            >
              {/* Topics */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.20em] text-muted-foreground/60 mb-5">What we cover</p>
                <div className="space-y-3">
                  {topics.map((t) => (
                    <div key={t.label} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-1.5" />
                      <div>
                        <span className="text-sm font-medium">{t.label}</span>
                        <span className="text-sm text-muted-foreground"> — {t.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent issues */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.20em] text-muted-foreground/60 mb-5">Recent issues</p>
                <div className="space-y-2">
                  {recent.map((r) => (
                    <div key={r.title} className="group flex items-center justify-between gap-4 py-3 border-b border-border/50 last:border-0 cursor-pointer hover:text-ember transition-colors">
                      <p className="text-sm leading-snug group-hover:text-ember transition-colors">{r.title}</p>
                      <span className="text-[10px] text-muted-foreground/50 flex-shrink-0 tabular-nums">{r.reads}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Or browse all our writing at{" "}
                <Link href="/insights" className="text-ember hover:text-ember-light transition-colors underline underline-offset-2">
                  Insights →
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
