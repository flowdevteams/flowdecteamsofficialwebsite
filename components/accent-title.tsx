import { cn } from "@/lib/utils"

interface AccentTitleProps {
  text: string
  highlightWords?: number
  className?: string
  accentClassName?: string
}

export function AccentTitle({
  text,
  highlightWords,
  className,
  accentClassName,
}: AccentTitleProps) {
  const words = text.trim().split(/\s+/)
  const accentCount = Math.min(
    words.length,
    Math.max(1, highlightWords ?? Math.ceil(words.length / 2))
  )
  const accentStart = Math.max(0, words.length - accentCount)
  const baseText = words.slice(0, accentStart).join(" ")
  const accentText = words.slice(accentStart).join(" ")

  return (
    <span className={cn("font-heading", className)}>
      {baseText && <span>{baseText} </span>}
      <span className={cn("text-primary", accentClassName)}>{accentText}</span>
    </span>
  )
}
