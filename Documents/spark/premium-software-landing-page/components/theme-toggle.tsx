"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Render a size-stable placeholder until mounted to avoid layout shift
  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-sm border border-border bg-transparent flex-shrink-0" />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.88 }}
      className={`
        relative w-9 h-9 rounded-sm border flex items-center justify-center
        overflow-hidden flex-shrink-0
        transition-colors duration-300
        ${isDark
          ? "border-[oklch(0.30_0.01_260)] text-[oklch(0.72_0.01_90)] hover:border-ember/50 hover:text-ember"
          : "border-border text-muted-foreground hover:border-ember/50 hover:text-ember"
        }
      `}
    >
      {/* Subtle ember hover wash */}
      <motion.div
        className="absolute inset-0 bg-ember/0 hover:bg-ember/5 transition-colors duration-300 pointer-events-none"
      />

      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
            animate={{ rotate: 0,   scale: 1,   opacity: 1 }}
            exit={{   rotate:  90,  scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <Sun className="w-[15px] h-[15px]" strokeWidth={1.6} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate:  90, scale: 0.4, opacity: 0 }}
            animate={{ rotate:   0, scale: 1,   opacity: 1 }}
            exit={{   rotate: -90, scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <Moon className="w-[15px] h-[15px]" strokeWidth={1.6} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
