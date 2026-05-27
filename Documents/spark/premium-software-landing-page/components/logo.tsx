export function SparkMark() {
  return (
    <div className="relative h-9 w-9 flex-shrink-0">
      <div className="absolute inset-0 rounded-sm bg-ember opacity-90" />
      <div className="absolute inset-[2px] rounded-[3px] bg-[oklch(0.10_0.008_260)] flex items-center justify-center">
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path d="M10 1L4 9H8L6 15L12 7H8Z" fill="var(--ember)" />
        </svg>
      </div>
    </div>
  )
}
