"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"
import { articles, categories } from "@/lib/data/insights"

export default function InsightsPage() {
  const gridRef  = useRef(null)
  const isInView = useInView(gridRef, { once: true, margin: "-60px" })

  const [activeCategory, setActiveCategory] = useState("All")

  const featured = articles.find((a) => a.featured)
  const rest      = articles.filter((a) => !a.featured)
  const filtered  = activeCategory === "All" ? rest : rest.filter((a) => a.category === activeCategory)

  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Thinking on Software,"
        highlighted="AI,"
        titleAfter="and Scale."
        description="Perspectives from our engineering team on the problems that matter — AI systems in production, distributed systems design, cloud infrastructure, and what it takes to build software that lasts."
      />

      {/* Featured article */}
      {featured && (
        <section className="py-16 border-b border-border" style={{ background: "var(--section-alt)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/50 mb-8">Featured Article</p>
            <Link
              href={`/insights/${featured.slug}`}
              className="group flex flex-col lg:flex-row gap-12 items-start"
            >
              {/* Placeholder visual */}
              <div className="w-full lg:w-[480px] aspect-[16/9] rounded-sm bg-gradient-to-br from-ember/15 via-card to-card border border-border flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-sm border border-ember/30 flex items-center justify-center">
                    <span className="text-xl font-bold gradient-text">N</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.14em] border border-ember/30 text-ember rounded-sm mb-5">
                  {featured.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.05] mb-5 group-hover:text-ember transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-ember/10 border border-ember/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-ember">{featured.author.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold">{featured.author}</p>
                      <p className="text-[10px] text-muted-foreground">{featured.readTime} &middot; {new Date(featured.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-ember group-hover:text-ember-light transition-colors">
                    Read Article
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Category filter */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.14em] rounded-sm border transition-colors duration-300 ${
                  activeCategory === cat
                    ? "bg-ember text-cream border-ember"
                    : "border-border text-muted-foreground hover:border-ember/40 hover:text-ember"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16" ref={gridRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: Math.min(i * 0.07, 0.45) }}
              >
                <Link
                  href={`/insights/${article.slug}`}
                  className="group flex flex-col rounded-sm border border-border bg-card/60 hover:bg-card/90 overflow-hidden h-full transition-colors duration-500 relative"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-ember/4 to-transparent" />

                  {/* Mini visual */}
                  <div className="h-[180px] bg-gradient-to-br from-ember/10 via-card to-card border-b border-border flex items-center justify-center relative overflow-hidden">
                    <span className="text-[10px] uppercase tracking-[0.16em] border border-ember/20 text-ember px-3 py-1 rounded-sm">
                      {article.category}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-6 relative z-10">
                    <h3 className="text-base font-bold leading-tight mb-3 group-hover:text-ember transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-sm bg-ember/10 border border-ember/20 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-ember">{article.author.split(" ").map(n => n[0]).join("")}</span>
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold">{article.author}</p>
                          <p className="text-[10px] text-muted-foreground">{article.readTime}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-ember transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Want to Work With Us?"
        subtitle="The thinking behind this content is applied in every project we deliver."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </main>
  )
}
