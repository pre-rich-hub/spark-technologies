import { LucideIcon, Brain, Building2, Cloud, Code2, Globe, TabletSmartphone, Layers, Smartphone } from "lucide-react"

export interface Service {
  slug: string
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  process: { step: string; title: string; description: string }[]
  technologies: string[]
  benefits: string[]
  relatedWork: string[]
}

export const services: Service[] = [
  {
    slug: "scalable-systems",
    icon: Layers,
    title: "Scalable Systems",
    tagline: "Built for where you're going.",
    description:
      "Distributed architecture, event-driven design, and platform engineering — systems that handle millions of users today and ten times that tomorrow, without a rewrite.",
    process: [
      { step: "01", title: "Capacity & Growth Modelling", description: "Analyse current load, project growth, and model the bottlenecks that will constrain you at 10× — before you hit them." },
      { step: "02", title: "Architecture Blueprint", description: "Design the target architecture: service boundaries, data models, messaging patterns, and infrastructure topology." },
      { step: "03", title: "Foundation Build", description: "Core infrastructure — API gateway, service mesh, observability stack — laid down before feature development begins." },
      { step: "04", title: "Iterative Migration", description: "Strangler fig or parallel run patterns to migrate live traffic with zero downtime and rollback capability at every step." },
      { step: "05", title: "Load Testing & Hardening", description: "Synthetic load at 10× peak, chaos engineering, and automated failover validation before any production promotion." },
    ],
    technologies: ["Go", "Kafka", "PostgreSQL", "Kubernetes", "Redis", "Terraform", "gRPC", "Prometheus"],
    benefits: [
      "Handle 10× your current peak without architectural rewrites",
      "Sub-100ms API response times under load — not just on a benchmark",
      "Zero-downtime deployments and automated rollback on degraded signals",
      "Event-driven design that decouples services and eliminates cascading failures",
      "Full observability: distributed tracing, structured logging, and SLO-driven alerting",
    ],
    relatedWork: ["maison-real-estate", "prestige-car-rental"],
  },
  {
    slug: "ai-platforms",
    icon: Brain,
    title: "AI Platforms",
    tagline: "Intelligence that compounds.",
    description:
      "Production-grade AI systems — LLM integrations, RAG pipelines, and custom ML models — engineered to deliver measurable business outcomes at scale.",
    process: [
      { step: "01", title: "Discovery & Data Audit", description: "Map your data assets, identify AI opportunities, and define success metrics before a single model is trained." },
      { step: "02", title: "Model Architecture", description: "Select and design the right approach — fine-tuned LLMs, classical ML, or hybrid systems — for your specific use case." },
      { step: "03", title: "Pipeline Engineering", description: "End-to-end MLOps: data ingestion, preprocessing, training, evaluation, and automated retraining." },
      { step: "04", title: "Integration & Deployment", description: "Seamless integration via APIs or embedded inference, with defined latency SLAs and rollback strategy." },
      { step: "05", title: "Monitoring & Iteration", description: "Continuous drift monitoring, A/B testing, and iterative improvement tied directly to business KPIs." },
    ],
    technologies: ["Python", "PyTorch", "LangChain", "OpenAI API", "Pinecone", "Kubernetes"],
    benefits: [
      "Reduce manual operational costs through intelligent, auditable automation",
      "Surface insights from unstructured data that was previously inaccessible",
      "Deliver personalised experiences at scale without linear cost growth",
      "Full auditability and explainability for compliance-sensitive use cases",
      "Proprietary models trained on your data — never shared with third parties",
    ],
    relatedWork: ["hamba-tours", "hora-tours"],
  },
  {
    slug: "enterprise-applications",
    icon: Building2,
    title: "Enterprise Applications",
    tagline: "Mission-critical. Built to last.",
    description:
      "Complex enterprise systems engineered for real-world load, regulatory requirements, and organisational scale — with the security posture that mission-critical software demands.",
    process: [
      { step: "01", title: "Requirements & Compliance Mapping", description: "Deep stakeholder workshops to map functional requirements, regulatory constraints, and integration surface area." },
      { step: "02", title: "Architecture Design", description: "Domain-driven design with clear bounded contexts, data models, and security boundaries defined before development begins." },
      { step: "03", title: "Iterative Build", description: "Two-week sprints with weekly demos. Architecture decisions documented in ADRs. No dark-room development." },
      { step: "04", title: "Security & Compliance Review", description: "Penetration testing, OWASP audit, and compliance validation — SOC 2, HIPAA, GDPR — before any production traffic." },
      { step: "05", title: "Rollout & Hyper-care", description: "Staged rollout with feature flags, runbooks, and dedicated on-call support through the first 90 days." },
    ],
    technologies: ["Go", "PostgreSQL", "Kafka", "Kubernetes", "Terraform", "Datadog"],
    benefits: [
      "99.9%+ uptime SLA with multi-region failover and automated recovery",
      "SOC 2 Type II and ISO 27001 certified development practices throughout",
      "Designed for 10× growth without architectural rewrites",
      "Full audit trails and RBAC for compliance-heavy industries",
      "Seamless integration with SAP, Salesforce, and existing enterprise tooling",
    ],
    relatedWork: ["atlas-build", "prestige-car-rental"],
  },
  {
    slug: "cloud-infrastructure",
    icon: Cloud,
    title: "Cloud Infrastructure",
    tagline: "Reliability engineered in.",
    description:
      "Modern cloud architecture optimised for performance, cost-efficiency, and resilience — whether you're migrating legacy systems, going multi-cloud, or building greenfield.",
    process: [
      { step: "01", title: "Infrastructure Audit", description: "Assessment of current state: costs, performance bottlenecks, security posture, and scalability limits." },
      { step: "02", title: "Architecture Blueprint", description: "Cloud-native design with infrastructure-as-code, cost modelling, and disaster recovery strategy." },
      { step: "03", title: "Migration Strategy", description: "Phased migration plan — lift-and-shift where pragmatic, re-architecture where it matters — with zero-downtime cutover." },
      { step: "04", title: "Automation & IaC", description: "Full Terraform codebase, CI/CD pipelines, and GitOps workflows so every infrastructure change is reviewed and audited." },
      { step: "05", title: "Observability & Cost Governance", description: "OpenTelemetry instrumentation, alerting, dashboards, and FinOps tracking to eliminate waste." },
    ],
    technologies: ["AWS", "GCP", "Terraform", "Kubernetes", "ArgoCD", "Grafana"],
    benefits: [
      "20–40% infrastructure cost reduction through right-sizing and reserved capacity",
      "Zero-downtime deployments with automated rollback on degraded signals",
      "Multi-region active-active architecture for global resilience",
      "Full infrastructure-as-code — no manual console changes, ever",
      "SRE-grade runbooks and on-call playbooks included in every engagement",
    ],
    relatedWork: ["maison-real-estate", "iron-pulse"],
  },
  {
    slug: "custom-development",
    icon: Code2,
    title: "Custom Development",
    tagline: "Your vision. Zero compromise.",
    description:
      "Bespoke full-stack software built to your exact specifications — from greenfield products to legacy modernisation. No templates, no shortcuts, no handoffs.",
    process: [
      { step: "01", title: "Product Discovery", description: "Two-week discovery sprint: user research, technical constraints, competitor analysis, and a detailed product brief." },
      { step: "02", title: "Technical Design", description: "System design document, API contracts, data models, and a working prototype reviewed before full build begins." },
      { step: "03", title: "Agile Build", description: "Weekly releases to staging. Continuous integration, automated test suites, and code review on every PR." },
      { step: "04", title: "QA & Performance Testing", description: "End-to-end testing, load testing at 10× expected peak, accessibility audit, and cross-browser validation." },
      { step: "05", title: "Launch & Handover", description: "Production deployment, observability configuration, full documentation, and a 60-day post-launch support window." },
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
    benefits: [
      "Codebase you own entirely — no vendor lock-in",
      "Documented architecture and clean code your internal team can extend",
      "Performance optimised from the ground up — not patched in later",
      "Accessibility-first (WCAG 2.1 AA) and internationalisation-ready",
      "Source code escrow and knowledge transfer included in every engagement",
    ],
    relatedWork: ["shemzu-store", "aurum-restaurant"],
  },
  {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    tagline: "Full-stack. Production-ready. Fast.",
    description:
      "High-performance web applications and SaaS platforms — from architecture through deployment. Modern stack, clean code, and the performance standards that users and search engines demand.",
    process: [
      { step: "01", title: "Architecture & Stack Selection", description: "Right-size the stack for your use case: rendering strategy, data layer, auth, and deployment model defined before build." },
      { step: "02", title: "Frontend Engineering", description: "Pixel-precise UI implementation with component systems, animation, and accessibility baked in from the first sprint." },
      { step: "03", title: "Backend & API Layer", description: "RESTful or GraphQL APIs, database design, authentication, and third-party integrations — built for reliability and extensibility." },
      { step: "04", title: "Performance Optimisation", description: "Core Web Vitals tuning, image optimisation, edge caching, and bundle analysis until the numbers are where they need to be." },
      { step: "05", title: "Deployment & CI/CD", description: "Production infrastructure, automated deployment pipelines, monitoring, and a 60-day post-launch support window." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    benefits: [
      "Sub-2s load times on mobile — Core Web Vitals optimised from day one",
      "SEO-ready architecture: server rendering, structured data, and performance that ranks",
      "Design system that scales with your product without accruing visual debt",
      "Accessible by default — WCAG 2.1 AA compliance built in, not bolted on",
      "Clean, documented codebase your team can maintain and extend independently",
    ],
    relatedWork: ["hamba-tours", "hora-tours"],
  },
  {
    slug: "mobile-development",
    icon: TabletSmartphone,
    title: "Mobile Development",
    tagline: "Native quality. One codebase.",
    description:
      "Cross-platform iOS and Android apps built with Flutter and React Native — native performance, polished UI, and full platform parity without the cost of two separate codebases.",
    process: [
      { step: "01", title: "Platform Strategy", description: "Define the right cross-platform approach — Flutter for pixel-perfect parity, React Native for JS ecosystem leverage — with clear trade-off rationale." },
      { step: "02", title: "UX & Design System", description: "Mobile-first design system with platform-adaptive components that feel native on iOS and Android while maintaining brand consistency." },
      { step: "03", title: "Core Build", description: "Feature development in two-week cycles with TestFlight and Play Store internal track releases. Real device testing throughout." },
      { step: "04", title: "Performance & Polish", description: "60fps rendering validation, memory profiling, offline-first architecture, and accessibility compliance for both platforms." },
      { step: "05", title: "App Store Launch & CI", description: "Fastlane-automated submission, staged rollouts, crash monitoring, and OTA update strategy for post-launch agility." },
    ],
    technologies: ["Flutter", "Dart", "React Native", "TypeScript", "Firebase", "Fastlane"],
    benefits: [
      "Single codebase ships to iOS and Android simultaneously — halving time-to-market",
      "Near-native performance with Flutter's Impeller renderer or React Native's new architecture",
      "Shared business logic with your web or backend — one model across stacks",
      "App Store and Play Store optimised: ASO, screenshots, and metadata strategy included",
      "OTA updates via CodePush or Shorebird — ship fixes without waiting on app review",
    ],
    relatedWork: ["iron-pulse", "hora-tours"],
  },
  {
    slug: "digital-products",
    icon: Smartphone,
    title: "Digital Products",
    tagline: "User-centric. Market-ready. Built to grow.",
    description:
      "End-to-end digital product development — from discovery and UX design through engineering and launch. Products that users love and that generate measurable business outcomes.",
    process: [
      { step: "01", title: "Product Discovery", description: "User research, competitive analysis, and a product brief that aligns business goals with user needs before a line of code is written." },
      { step: "02", title: "UX Design & Prototyping", description: "Information architecture, wireframes, interactive prototypes, and user testing — validated before the engineering build begins." },
      { step: "03", title: "Design System", description: "A component library that enforces visual consistency and accelerates feature development throughout the product lifecycle." },
      { step: "04", title: "Engineering Build", description: "Full-stack development with weekly releases, automated testing, and performance budgets enforced from day one." },
      { step: "05", title: "Launch & Growth", description: "App store optimisation, analytics instrumentation, A/B testing infrastructure, and a post-launch iteration roadmap." },
    ],
    technologies: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS", "Figma", "Vercel", "Stripe"],
    benefits: [
      "Products designed around real user behaviour — not assumptions or internal opinions",
      "Design system that scales across features without accruing visual debt",
      "Performance-optimised from the ground up — Core Web Vitals, TTI, and CLS targets met",
      "Accessible by default — WCAG 2.1 AA compliance built in, not bolted on",
      "Analytics and experimentation infrastructure to learn and iterate from day one",
    ],
    relatedWork: ["shemzu-store", "aurum-restaurant"],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
