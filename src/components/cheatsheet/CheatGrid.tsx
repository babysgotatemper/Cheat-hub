import Link from 'next/link'
import type { Section } from '@/lib/cheatsheet/types'
import { DifficultyBadge } from './DifficultyBadge'

// Compact, print-friendly reference: one row per task across 2 columns.
export function CheatGrid({ sections }: { sections: Section[] }) {
  return (
    <div className="flex flex-col gap-8">
      {sections.map((section) => (
        <section key={section.id}>
          <h2 className="mb-3 flex items-center gap-2 border-b border-orange-400/30 pb-2 text-lg font-bold text-orange-400">
            <span>{section.emoji}</span> {section.title}
            {section.count != null && (
              <span className="text-sm font-normal text-slate-500">({section.count})</span>
            )}
          </h2>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {section.tasks.map((task) => {
              const inner = (
                <>
                  <div className="flex items-center gap-2">
                    {task.number > 0 && (
                      <span className="text-[11px] font-semibold text-slate-500">
                        #{task.number}
                      </span>
                    )}
                    <span className="flex-1 truncate text-sm font-semibold text-slate-200">
                      {task.title}
                    </span>
                    <DifficultyBadge difficulty={task.difficulty} compact />
                  </div>
                  {task.hint && <div className="text-xs text-slate-500">{task.hint}</div>}
                </>
              )
              const className =
                'flex flex-col gap-1.5 rounded-lg border border-white/10 bg-black/20 p-3 transition-colors hover:border-orange-400/40'
              return task.practiceSlug ? (
                <Link
                  key={`${section.id}-${task.id}-${task.number}`}
                  href={`/problems/${task.practiceSlug}`}
                  className={className}
                >
                  {inner}
                </Link>
              ) : (
                <div key={`${section.id}-${task.id}-${task.number}`} className={className}>
                  {inner}
                </div>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
