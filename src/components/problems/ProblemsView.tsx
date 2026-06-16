'use client'

import { useMemo } from 'react'
import { ProblemList } from '@/components/problems/ProblemList'
import { useUserStore } from '@/lib/userStore'

interface Problem {
  id: number
  slug: string
  title: string
  difficulty: string
}

export function ProblemsView({ problems }: { problems: Problem[] }) {
  const { data } = useUserStore()

  const solvedSlugs = useMemo(
    () =>
      Object.entries(data.progress)
        .filter(([, status]) => status === 'solved')
        .map(([slug]) => slug),
    [data.progress],
  )

  const solvedSet = useMemo(() => new Set(solvedSlugs), [solvedSlugs])

  const easy = problems.filter((p) => p.difficulty === 'Easy')
  const medium = problems.filter((p) => p.difficulty === 'Medium')
  const hard = problems.filter((p) => p.difficulty === 'Hard')

  const easyDone = easy.filter((p) => solvedSet.has(p.slug)).length
  const mediumDone = medium.filter((p) => solvedSet.has(p.slug)).length
  const hardDone = hard.filter((p) => solvedSet.has(p.slug)).length
  const solvedCount = problems.filter((p) => solvedSet.has(p.slug)).length

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100">Практика</h1>
        <p className="text-sm text-slate-400">
          Розв’язуй задачі в редакторі з автоматичною перевіркою тестів.
        </p>
      </div>

      <div className="glass-subtle rounded-xl p-6 mb-8">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-slate-400 mb-1">Total</p>
            <p className="text-2xl font-bold text-slate-100">
              <span className="text-emerald-400">{solvedCount}</span>
              <span className="text-slate-500"> / </span>
              {problems.length}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Easy</p>
            <p className="text-2xl font-bold text-slate-100">
              <span className="text-green-300">{easyDone}</span>
              <span className="text-slate-500">/</span>
              <span className="text-green-300">{easy.length}</span>
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Medium</p>
            <p className="text-2xl font-bold text-slate-100">
              <span className="text-yellow-300">{mediumDone}</span>
              <span className="text-slate-500">/</span>
              <span className="text-yellow-300">{medium.length}</span>
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Hard</p>
            <p className="text-2xl font-bold text-slate-100">
              <span className="text-red-300">{hardDone}</span>
              <span className="text-slate-500">/</span>
              <span className="text-red-300">{hard.length}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
          Problem List
        </h2>
        <ProblemList problems={problems} solvedSlugs={solvedSlugs} />
      </div>
    </div>
  )
}
