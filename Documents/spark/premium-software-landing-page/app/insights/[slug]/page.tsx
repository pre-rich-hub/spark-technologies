"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageCta } from "@/components/shared/page-cta"
import { articles, getArticleBySlug } from "@/lib/data/insights"
import { use } from "react"

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug }  = use(params)
  const article   = getArticleBySlug(slug)

  if (!article) notFound()

  const related = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 2)

  return (
    <main>
      {/* Article Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden border-b border-border" style={{ background: "var(--section-alt)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] rounded-full bg-ember/6 blur-[140px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-ember transition-colors mb-8">
            ← All Insights
          </Link>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 text-[10px] uppercase tracking-[0.16em] border border-ember/30 text-ember rounded-sm">{article.category}</span>
            <span className="px-3 py-1 text-[10px] uppercase tracking-[0.16em] border border-border text-muted-foreground rounded-sm">{article.readTime}</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.0] mb-8 text-balance"
          >
            {article.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-sm bg-ember/10 border border-ember/20 flex items-center justify-center">
              <span className="text-sm font-bold text-ember">{article.author.split(" ").map((n) => n[0]).join("")}</span>
            </div>
            <div>
              <p className="text-sm font-semibold">{article.author}</p>
              <p className="text-xs text-muted-foreground">
                {article.role} &middot; {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          {/* Excerpt / lede */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl text-foreground/80 leading-relaxed mb-12 font-light border-l-4 border-ember pl-6"
          >
            {article.excerpt}
          </motion.p>

          {/* Body content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="prose prose-sm max-w-none"
            style={{
              "--tw-prose-body": "oklch(0.45 0.01 90)",
              "--tw-prose-headings": "oklch(0.10 0.008 260)",
              "--tw-prose-bold": "oklch(0.10 0.008 260)",
            } as React.CSSProperties}
          >
            {article.body.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                const text = paragraph.slice(2, -2)
                return (
                  <h3 key={i} className="text-xl font-bold mt-10 mb-4 text-foreground">{text}</h3>
                )
              }
              if (paragraph.includes("**")) {
                const parts = paragraph.split(/(\*\*.*?\*\*)/g)
                return (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {parts.map((part, j) =>
                      part.startsWith("**") && part.endsWith("**")
                        ? <strong key={j} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>
                        : part
                    )}
                  </p>
                )
              }
              return (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-5">{paragraph}</p>
              )
            })}
          </motion.div>

          {/* Author bio */}
          <div className="mt-16 pt-8 border-t border-border flex items-start gap-5">
            <div className="w-14 h-14 rounded-sm bg-ember/10 border border-ember/20 flex items-center justify-center flex-shrink-0">
              <span className="text-base font-bold text-ember">{article.author.split(" ").map((n) => n[0]).join("")}</span>
            </div>
            <div>
              <p className="font-semibold mb-0.5">{article.author}</p>
              <p className="text-xs text-ember uppercase tracking-[0.12em] mb-2">{article.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Member of the Spark engineering team, writing on software systems, AI in production, and the craft of building software that lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 border-t border-border" style={{ background: "var(--section-alt)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex items-center justify-between mb-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ember font-medium">Related Articles</p>
              <Link href="/insights" className="flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-ember transition-colors">
                All Insights <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="group flex flex-col rounded-sm border border-border bg-card/60 hover:bg-card/90 p-8 transition-colors duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-ember/4 to-transparent pointer-events-none" />
                  <span className="text-[10px] uppercase tracking-[0.14em] text-ember/80 mb-3">{a.category}</span>
                  <h3 className="text-base font-bold mb-3 leading-tight group-hover:text-ember transition-colors">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{a.excerpt.slice(0, 100)}…</p>
                  <span className="text-xs text-muted-foreground">{a.readTime}</span>
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <PageCta
        title="Want to Work With Us?"
        subtitle="The thinking in this article is applied in every project we deliver."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </main>
  )
}
