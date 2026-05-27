"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { SparkMark } from "@/components/logo"

const footerLinks = {
  Services: [
    { name: "AI Platforms",          href: "/services/ai-platforms"            },
    { name: "Enterprise Apps",       href: "/services/enterprise-applications"  },
    { name: "Cloud Infrastructure",  href: "/services/cloud-infrastructure"    },
    { name: "Custom Development",    href: "/services/custom-development"      },
    { name: "Web Development",        href: "/services/web-development"         },
    { name: "Mobile Development",    href: "/services/mobile-development"      },
  ],
  Company: [
    { name: "About",    href: "/about"    },
    { name: "Work",     href: "/work"     },
    { name: "Insights", href: "/insights" },
    { name: "Careers",  href: "/careers"  },
  ],
  Legal: [
    { name: "Privacy Policy",   href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy",    href: "#" },
  ],
}

const socials = [
  { name: "Twitter",  icon: Twitter,  href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub",   icon: Github,   href: "#" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <SparkMark />
              <span className="text-lg font-semibold tracking-tight group-hover:text-ember transition-colors duration-300">
                Spark
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-7 leading-relaxed">
              A next-generation software studio building scalable systems, AI-powered platforms,
              and enterprise applications for ambitious businesses worldwide.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-ember hover:border-ember/40 transition-colors duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(Object.entries(footerLinks) as [string, { name: string; href: string }[]][]).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60 mb-5">
                {group}
              </h3>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-ember transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60 uppercase tracking-[0.12em]">
            &copy; {new Date().getFullYear()} Spark Technologies. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 uppercase tracking-[0.12em]">
            Crafted with precision &mdash; San Francisco
          </p>
        </div>
      </div>
    </footer>
  )
}
