"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu, X, ChevronDown,
  Code2, Globe, TabletSmartphone,
  ArrowUpRight,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { MelbaMark } from "@/components/logo"
import type { LucideIcon } from "lucide-react"

/* ─── Types ────────────────────────────────────────────────────────────── */
interface DropdownItem {
  name: string
  href: string
  description: string
  icon: LucideIcon
  badge?: string
}

interface NavLink {
  name: string
  href: string
  dropdown?: {
    items: DropdownItem[]
    columns?: 1 | 2
    cta?: { label: string; href: string }
  }
}

/* ─── Nav config ────────────────────────────────────────────────────────── */
const navLinks: NavLink[] = [
  {
    name: "Services",
    href: "/services",
    dropdown: {
      columns: 2,
      items: [
        { name: "Custom Development", href: "/services/custom-development", description: "Bespoke full-stack software built to your spec", icon: Code2 },
        { name: "Web Development",    href: "/services/web-development",    description: "High-performance web apps and SaaS platforms",   icon: Globe },
        { name: "Mobile Development", href: "/services/mobile-development", description: "iOS and Android apps from a single codebase",    icon: TabletSmartphone },
      ],
      cta: { label: "View all services", href: "/services" },
    },
  },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

/* ─── Dropdown panel ────────────────────────────────────────────────────── */
function DropdownPanel({
  dropdown,
  isActive,
}: {
  dropdown: NonNullable<NavLink["dropdown"]>
  isActive: boolean
}) {
  const isTwoCols = dropdown.columns === 2

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0,  scale: 1    }}
          exit={  { opacity: 0, y: 8,  scale: 0.97 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className={`
            absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2
            z-50 origin-top
            bg-background/96 backdrop-blur-2xl
            border border-border/70
            rounded-sm shadow-[0_8px_48px_-8px_oklch(0_0_0/0.22)]
            overflow-hidden
            ${isTwoCols ? "w-[620px]" : "w-[340px]"}
          `}
        >
          {/* Top accent line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-ember to-transparent opacity-70" />

          <div className={`p-3 ${isTwoCols ? "grid grid-cols-2 gap-1" : "flex flex-col gap-0.5"}`}>
            {dropdown.items.map((item) => (
              <DropdownItem key={item.name} item={item} />
            ))}
          </div>

          {dropdown.cta && (
            <>
              <div className="mx-4 h-px bg-border/60" />
              <div className="p-3">
                <Link
                  href={dropdown.cta.href}
                  className="flex items-center justify-between w-full px-4 py-2.5 rounded-sm text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors duration-200 group"
                >
                  <span>{dropdown.cta.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </Link>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function DropdownItem({ item }: { item: DropdownItem }) {
  const Icon = item.icon
  return (
    <Link
      href={item.href}
      className="group flex items-start gap-3.5 px-4 py-3.5 rounded-sm hover:bg-muted/50 transition-colors duration-150"
    >
      <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-sm border border-border/60 bg-muted/30 flex items-center justify-center group-hover:border-ember/40 group-hover:bg-ember/8 transition-all duration-200">
        <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-ember transition-colors duration-200" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground group-hover:text-ember transition-colors duration-200 leading-tight">
            {item.name}
          </span>
          {item.badge && (
            <span className="px-1.5 py-0.5 text-[9px] uppercase tracking-[0.1em] font-semibold bg-ember/15 text-ember rounded-sm leading-none">
              {item.badge}
            </span>
          )}
        </div>
        <p className="text-[12px] text-muted-foreground mt-0.5 leading-snug">
          {item.description}
        </p>
      </div>
    </Link>
  )
}

/* ─── Mobile accordion item ─────────────────────────────────────────────── */
function MobileNavItem({
  link,
  isActive,
}: {
  link: NavLink
  isActive: (href: string) => boolean
}) {
  const [expanded, setExpanded] = useState(false)

  if (!link.dropdown) {
    return (
      <Link
        href={link.href}
        className={`text-2xl font-semibold tracking-tight transition-colors ${
          isActive(link.href) ? "text-ember" : "text-[oklch(0.97_0.005_90)] hover:text-ember"
        }`}
      >
        {link.name}
      </Link>
    )
  }

  return (
    <div className="w-full">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center gap-2 text-2xl font-semibold tracking-tight transition-colors ${
          isActive(link.href) ? "text-ember" : "text-[oklch(0.97_0.005_90)] hover:text-ember"
        }`}
      >
        {link.name}
        <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 flex flex-col gap-1 pl-2 border-l border-ember/30">
              {link.dropdown.items.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-sm hover:bg-white/5 transition-colors group"
                  >
                    <Icon className="w-4 h-4 text-ember/60 group-hover:text-ember transition-colors" />
                    <span className="text-sm font-medium text-[oklch(0.85_0.005_90)] group-hover:text-[oklch(0.97_0.005_90)] transition-colors">
                      {item.name}
                    </span>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Navigation ────────────────────────────────────────────────────────── */
export function Navigation() {
  const [isScrolled, setIsScrolled]       = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  const openDropdown = useCallback((name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(name)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/92 backdrop-blur-xl border-b border-border py-4"
            : "py-7"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <MelbaMark />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  className="relative"
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.2 }}
                  onMouseEnter={() => link.dropdown ? openDropdown(link.name) : setActiveDropdown(null)}
                  onMouseLeave={scheduleClose}
                >
                  {link.dropdown ? (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm rounded-sm transition-colors duration-200 relative group ${
                        isActive(link.href) || activeDropdown === link.name
                          ? "text-foreground bg-muted/50"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                      }`}
                      aria-expanded={activeDropdown === link.name}
                    >
                      {link.name}
                      <motion.span
                        animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                      </motion.span>
                      {isActive(link.href) && (
                        <span className="absolute bottom-0.5 left-3 right-3 h-[1px] bg-ember rounded-full" />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-sm rounded-sm transition-colors duration-200 relative inline-block ${
                        isActive(link.href)
                          ? "text-foreground bg-muted/50"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                      }`}
                    >
                      {link.name}
                      {isActive(link.href) && (
                        <span className="absolute bottom-0.5 left-3 right-3 h-[1px] bg-ember rounded-full" />
                      )}
                    </Link>
                  )}

                  {/* Dropdown panel */}
                  {link.dropdown && (
                    <div
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <DropdownPanel
                        dropdown={link.dropdown}
                        isActive={activeDropdown === link.name}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Right side: theme toggle + CTA */}
            <motion.div
              className="hidden lg:flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 }}
            >
              <ThemeToggle />
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-sm bg-ember text-cream hover:bg-ember-light transition-colors duration-300"
              >
                Start a Project
              </Link>
            </motion.div>

            {/* Mobile: theme toggle + hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[oklch(0.05_0.008_260/0.98)] backdrop-blur-xl pt-24 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  className="w-full flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <MobileNavItem link={link} isActive={isActive} />
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center px-8 py-4 text-base font-medium rounded-sm bg-ember text-cream"
              >
                Start a Project
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
