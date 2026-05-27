export interface Article {
  slug:       string
  title:      string
  excerpt:    string
  category:   string
  author:     string
  role:       string
  date:       string
  readTime:   string
  featured:   boolean
  body:       string
}

export const articles: Article[] = [
  {
    slug:     "llm-production-architecture",
    title:    "LLM Production Architecture: What Nobody Tells You",
    excerpt:  "Running large language models in production is a fundamentally different engineering discipline from prototyping. Here is what we have learned across 12 production deployments.",
    category: "AI Engineering",
    author:   "Marcus Chen",
    role:     "Head of AI Engineering",
    date:     "2025-11-15",
    readTime: "12 min read",
    featured: true,
    body: `When you move an LLM from a notebook to production, you encounter a class of problems that are invisible in development. Latency tail risk, prompt injection, context window management, and cost governance — these are engineering problems, not research problems.

After deploying LLMs across 12 enterprise systems in the past 18 months, we have developed patterns for each of these challenges.

**Latency is a distribution, not a number**

Your P50 latency looks fine. Your P99 is what kills user experience. LLM inference latency follows a heavy-tailed distribution because of the variability in output token count. A request that generates 50 tokens completes in 800ms; a request that generates 2,000 tokens takes 12 seconds.

The solution is not to optimise for P50 — it is to bound your P99 through output length constraints, streaming responses, and speculative decoding where the model architecture permits it.

**Prompt injection is not hypothetical**

Enterprise LLM deployments that process user-supplied content will encounter prompt injection attempts. We have seen it in every production deployment we have maintained for more than 60 days.

The defence is layered: output schema validation, a secondary classification model that scores inputs before they reach the primary model, and logging at every layer so you can audit the full prompt context when an anomaly fires.

**Context window management as an engineering discipline**

As conversation threads grow, naive implementations that stuff the full history into context hit two problems simultaneously: latency increases and cost scales quadratically with context length.

The pattern we use: a summarisation model that compresses older turns, semantic search over long-form history, and a sliding window with pinned system context. This keeps token counts bounded while preserving conversational coherence.`,
  },
  {
    slug:     "microservices-migration-patterns",
    title:    "Three Microservices Migration Patterns (and When to Use Each)",
    excerpt:  "Not all monolith-to-microservices migrations are equal. The strangler fig, parallel run, and big bang approaches each have a context where they are correct. Here is how we choose.",
    category: "Software Architecture",
    author:   "Priya Nair",
    role:     "Principal Architect",
    date:     "2025-10-28",
    readTime: "9 min read",
    featured: false,
    body: `The first decision in any microservices migration is not which services to extract — it is which migration pattern to use. The wrong choice has derailed more than a few well-intentioned projects.`,
  },
  {
    slug:     "kubernetes-cost-optimisation",
    title:    "Kubernetes Cost Optimisation at Scale: A Practical Guide",
    excerpt:  "Kubernetes clusters at scale develop persistent cost inefficiencies that compound over time. We cut a $2.4M annual cloud bill by 38% without reducing capacity.",
    category: "Cloud Infrastructure",
    author:   "James Okafor",
    role:     "Cloud Infrastructure Lead",
    date:     "2025-10-10",
    readTime: "11 min read",
    featured: false,
    body: `Cloud costs in Kubernetes environments tend to grow non-linearly with scale. The patterns that cause this are well understood — over-provisioned requests/limits, persistent idle compute, and data transfer charges from poor topology-aware routing.`,
  },
  {
    slug:     "enterprise-ai-adoption",
    title:    "Why Enterprise AI Initiatives Fail (And How to Prevent It)",
    excerpt:  "73% of enterprise AI pilots never reach production. The cause is rarely the model — it is the surrounding system and the organisational context it operates in.",
    category: "AI Engineering",
    author:   "Sarah Williams",
    role:     "VP of Delivery",
    date:     "2025-09-22",
    readTime: "8 min read",
    featured: false,
    body: `The failure rate for enterprise AI initiatives is shockingly high relative to the investment. In our experience across 30+ AI engagements, the model quality is rarely the limiting factor.`,
  },
  {
    slug:     "event-driven-architecture-guide",
    title:    "Event-Driven Architecture: A Practical Implementation Guide",
    excerpt:  "Event-driven architecture solves real distributed systems problems — but it introduces new ones. Here is how we implement it without trading one complexity for another.",
    category: "Software Architecture",
    author:   "Alex Torres",
    role:     "Senior Staff Engineer",
    date:     "2025-09-05",
    readTime: "14 min read",
    featured: false,
    body: `Event-driven architecture is often presented as the solution to tight coupling in distributed systems. That is true — but the decoupling comes at the cost of observability complexity, eventual consistency management, and schema evolution challenges.`,
  },
  {
    slug:     "scaling-startup-engineering",
    title:    "Engineering at Scale: What Changes When You Go From 10 to 200 Engineers",
    excerpt:  "The practices that work at 10 engineers actively harm you at 200. Here is a framework for anticipating and managing the architectural transitions that growth forces.",
    category: "Scaling Startups",
    author:   "Marcus Chen",
    role:     "Head of AI Engineering",
    date:     "2025-08-18",
    readTime: "10 min read",
    featured: false,
    body: `Engineering at 10 people optimises for speed. Engineering at 200 people optimises for coordination. The tragedy is that the practices enabling speed at 10 become the source of coordination costs at 200.`,
  },
  {
    slug:     "zero-trust-security-implementation",
    title:    "Implementing Zero-Trust Security Without Breaking Your Engineering Velocity",
    excerpt:  "Zero-trust architectures are non-negotiable for enterprise software. They are also notoriously painful to implement. Here is how we do it without making developers miserable.",
    category: "Enterprise Engineering",
    author:   "Priya Nair",
    role:     "Principal Architect",
    date:     "2025-08-02",
    readTime: "13 min read",
    featured: false,
    body: `Zero-trust security means no implicit trust — every request is authenticated, authorised, and encrypted, regardless of network location. The principle is correct. The implementation is where organisations struggle.`,
  },
  {
    slug:     "observability-platform-engineering",
    title:    "Building an Observability Platform Engineers Actually Use",
    excerpt:  "Most observability implementations produce dashboards no one checks and alerts no one trusts. Here is how to build observability that drives operational decisions.",
    category: "Cloud Infrastructure",
    author:   "James Okafor",
    role:     "Cloud Infrastructure Lead",
    date:     "2025-07-14",
    readTime: "9 min read",
    featured: false,
    body: `Observability is not dashboards. It is the ability to ask arbitrary questions about your system in production and get meaningful answers quickly. Most teams have monitoring. Very few have observability.`,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export const categories = ["All", "AI Engineering", "Software Architecture", "Cloud Infrastructure", "Enterprise Engineering", "Scaling Startups"]
