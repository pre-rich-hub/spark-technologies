"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { MelbaMark } from "@/components/logo"

const footerLinks = {
  Services: [
    { name: "Custom Development", href: "/services/custom-development" },
    { name: "Web Development",    href: "/services/web-development"    },
    { name: "Mobile Development", href: "/services/mobile-development" },
  ],
  Company: [
    { name: "About",   href: "/about"   },
    { name: "Work",    href: "/work"    },
    { name: "Contact", href: "/contact" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <MelbaMark size={40} />
              <div className="leading-none">
                <div className="text-2xl font-bold tracking-tight group-hover:text-ember transition-colors duration-300">
                  Melba
                </div>
                <div className="text-sm font-normal tracking-wide text-muted-foreground group-hover:text-ember/70 transition-colors duration-300">
                  Technology
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-7 leading-relaxed">
              A software studio building custom web and mobile products for ambitious businesses.
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
              <h3 className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80 mb-5">
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
          <p className="text-xs text-muted-foreground/80 uppercase tracking-[0.12em]">
            &copy; {new Date().getFullYear()} Melba Technology. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/80 uppercase tracking-[0.12em]">
            Built with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
