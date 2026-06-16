import type { Difficulty } from '@/lib/cheatsheet/types'
import { cn } from '@/lib/utils'

const STYLES: Record<Difficulty, string> = {
  Easy: 'bg-green-500/15 text-green-300 border-green-500/30',
  Medium: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
  Hard: 'bg-red-500/15 text-red-300 border-red-500/30',
}

const SHORT: Record<Difficulty, string> = { Easy: 'E', Medium: 'M', Hard: 'H' }

export function DifficultyBadge({
  difficulty,
  compact = false,
  className,
}: {
  difficulty: Difficulty
  compact?: boolean
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-block rounded border font-semibold',
        compact ? 'px-1.5 py-0.5 text-[10px]' : 'px-2 py-0.5 text-xs',
        STYLES[difficulty],
        className,
      )}
    >
      {compact ? SHORT[difficulty] : difficulty}
    </span>
  )
}
