import Image from "next/image"

export function MelbaMark({ className, size = 36 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/melba-logo.png"
      alt="Melba Technology"
      width={size}
      height={size}
      className={className}
      style={{ filter: "var(--logo-filter)" }}
      priority
    />
  )
}
