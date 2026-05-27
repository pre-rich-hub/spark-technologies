import { LucideIcon, Code2, Globe, TabletSmartphone } from "lucide-react"

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
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
