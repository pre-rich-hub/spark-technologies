"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"

const team = [
  {
    name:  "Nathaniel Cross",
    role:  "Founder & CTO",
    bio:   "15 years building distributed systems for companies ranging from Series A startups to NYSE-listed enterprises. Led engineering at two successful exits. Obsessive about system design and code that lasts.",
    stack: ["Go", "Kubernetes", "Kafka", "PostgreSQL"],
    initial: "NC",
  },
  {
    name:  "Amara Osei",
    role:  "Head of Product Engineering",
    bio:   "Full-stack engineer and product thinker who spent six years at Stripe building payment infrastructure before joining Spark. Believes the best products are born when engineers understand users deeply.",
    stack: ["Next.js", "TypeScript", "Python", "AWS"],
    initial: "AO",
  },
  {
    name:  "Lena Hartmann",
    role:  "Lead AI/ML Engineer",
    bio:   "PhD in Machine Learning (ETH Zürich). Designed production ML systems for three Fortune 500 companies. Specialises in LLM integration, RAG pipelines, and making AI models actually reliable in production.",
    stack: ["PyTorch", "LangChain", "Python", "Kubernetes"],
    initial: "LH",
  },
  {
    name:  "Marcus Delacroix",
    role:  "Principal Infrastructure Engineer",
    bio:   "Former SRE at Google. Has designed multi-region Kubernetes clusters for platforms processing billions of events daily. Considers chaos engineering a core product feature, not an afterthought.",
    stack: ["Terraform", "AWS", "GCP", "ArgoCD"],
    initial: "MD",
  },
  {
    name:  "Suki Tanaka",
    role:  "Head of Design",
    bio:   "10 years designing digital products that people actually want to use. Former design lead at a Series B SaaS company. Believes design and engineering are the same discipline at the highest level.",
    stack: ["Figma", "Framer", "React", "Tailwind CSS"],
    initial: "ST",
  },
  {
    name:  "Rafael Montoya",
    role:  "Senior Backend Engineer",
    bio:   "Backend systems specialist with deep experience in event-driven architecture and database performance. Built the transaction processing layer for a fintech platform handling $500M monthly volume.",
    stack: ["Go", "Rust", "PostgreSQL", "Redis"],
    initial: "RM",
  },
  {
    name:  "Priya Sharma",
    role:  "Senior Full-Stack Engineer",
    bio:   "Full-stack engineer who has shipped production code at both early-stage startups and enterprise organisations. Strong opinions on API design, testing strategy, and the value of boring technology.",
    stack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    initial: "PS",
  },
  {
    name:  "Jordan Okafor",
    role:  "Senior Mobile Engineer",
    bio:   "Flutter and React Native specialist who has shipped apps to the App Store and Play Store for clients in healthcare, fintech, and consumer verticals. 60fps or nothing.",
    stack: ["Flutter", "React Native", "Firebase", "TypeScript"],
    initial: "JO",
  },
]

const advisors = [
  {
    name: "Dr. Elena Vasquez",
    role: "AI Research Advisor",
    note: "Former Research Scientist, DeepMind. Advises on model architecture and production AI safety.",
  },
  {
    name: "Thomas Müller",
    role: "Enterprise GTM Advisor",
    note: "20+ years in enterprise software sales. Former VP Sales at two $1B+ SaaS companies.",
  },
  {
    name: "Sarah Chen",
    role: "Design Systems Advisor",
    note: "Principal Designer, Vercel. Co-authored a design system used by 15,000+ developers.",
  },
]

export default function TeamPage() {
  const teamRef    = useRef(null)
  const advisorRef = useRef(null)
  const teamInView    = useInView(teamRef,    { once: true, margin: "-60px" })
  const advisorInView = useInView(advisorRef, { once: true, margin: "-60px" })

  return (
    <main>
      <PageHero
        eyebrow="About · The Team"
        title="The Engineers"
        highlighted="Behind the Work."
        description="A small, senior, deliberately assembled team. No juniors paired with clients. No account managers diluting the signal. Every engagement gets the full force of our best people."
      />

      {/* Team stats strip */}
      <section className="py-10 border-b border-border" style={{ background: "var(--section-alt)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-center divide-x divide-border">
            {[
              { v: "8",    l: "Core team members"    },
              { v: "10+",  l: "Avg. years experience" },
              { v: "3",    l: "Advisors"              },
              { v: "100%", l: "Senior engineers"      },
            ].map((s) => (
              <div key={s.l} className="px-8 py-4 first:pl-0">
                <p className="text-2xl font-bold gradient-text">{s.v}</p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-24" ref={teamRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Core Team</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.92]">Who We Are</h2>
            <div className="mt-10 h-px bg-border" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative bg-card/60 hover:bg-card/90 p-7 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  {/* Avatar initial */}
                  <div className="w-12 h-12 rounded-sm bg-ember/10 border border-ember/20 flex items-center justify-center mb-5">
                    <span className="text-sm font-bold text-ember">{member.initial}</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-0.5 group-hover:text-ember transition-colors">{member.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-ember/70 mb-4">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-5">{member.bio}</p>
                  {/* Stack chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.stack.map((s) => (
                      <span key={s} className="px-2 py-0.5 text-[9px] uppercase tracking-[0.10em] border border-border rounded-sm text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section
        className="py-24 border-t border-border"
        style={{ background: "var(--section-alt)" }}
        ref={advisorRef}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={advisorInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Advisors</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[0.92]">Senior Counsel</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {advisors.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 16 }}
                animate={advisorInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-sm border border-border bg-card/60 hover:bg-card/90 p-7 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="font-semibold mb-0.5 group-hover:text-ember transition-colors">{a.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-ember/70 mb-4">{a.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.note}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Want to Work With This Team?"
        subtitle="We're selective about the projects we take on. Tell us what you're building."
        secondaryLabel="Our Culture"
        secondaryHref="/about/culture"
      />
    </main>
  )
}
