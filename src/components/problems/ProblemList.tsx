'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { GlassCard } from '@/components/glass/GlassCard'

interface Problem {
  id: number
  slug: string
  title: string
  difficulty: string
}

interface ProblemListProps {
  problems: Problem[]
  solvedIds: number[]
}

const difficultyColors = {
  Easy: 'success',
  Medium: 'warning',
  Hard: 'error',
} as const

type SortOption = 'default' | 'a-z' | 'z-a' | 'easiest' | 'hardest'
type DifficultyFilter = 'all' | 'easy' | 'medium' | 'hard'
type StatusFilter = 'all' | 'solved' | 'unsolved'

export function ProblemList({ problems, solvedIds }: ProblemListProps) {
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('default')

  const solvedSet = new Set(solvedIds)

  const filteredAndSorted = useMemo(() => {
    let result = [...problems]

    // Difficulty filter
    if (difficultyFilter !== 'all') {
      const diffMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' }
      result = result.filter((p) => p.difficulty === diffMap[difficultyFilter])
    }

    // Status filter
    if (statusFilter === 'solved') {
      result = result.filter((p) => solvedSet.has(p.id))
    } else if (statusFilter === 'unsolved') {
      result = result.filter((p) => !solvedSet.has(p.id))
    }

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter((p) => p.title.toLowerCase().includes(term))
    }

    // Sorting
    if (sortBy === 'a-z') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortBy === 'z-a') {
      result.sort((a, b) => b.title.localeCompare(a.title))
    } else if (sortBy === 'easiest') {
      const diffOrder = { Easy: 1, Medium: 2, Hard: 3 }
      result.sort((a, b) => diffOrder[a.difficulty as keyof typeof diffOrder] - diffOrder[b.difficulty as keyof typeof diffOrder])
    } else if (sortBy === 'hardest') {
      const diffOrder = { Easy: 1, Medium: 2, Hard: 3 }
      result.sort((a, b) => diffOrder[b.difficulty as keyof typeof diffOrder] - diffOrder[a.difficulty as keyof typeof diffOrder])
    }

    return result
  }, [problems, difficultyFilter, statusFilter, searchTerm, sortBy, solvedSet])

  if (problems.length === 0) {
    return (
      <GlassCard variant="dark" className="text-center">
        <p className="text-slate-300">No problems found.</p>
      </GlassCard>
    )
  }

  return (
    <div className="space-y-4 w-full">
      {/* Filters and Search */}
      <div className="glass-subtle rounded-xl p-4 space-y-3">
        {/* Difficulty Filters */}
        <div className="flex flex-wrap gap-2">
          {(['all', 'easy', 'medium', 'hard'] as DifficultyFilter[]).map((diff) => (
            <button
              key={diff}
              onClick={() => setDifficultyFilter(diff)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                difficultyFilter === diff
                  ? 'glass text-slate-100'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {diff === 'all' ? 'All' : diff.charAt(0).toUpperCase() + diff.slice(1)}
            </button>
          ))}
        </div>

        {/* Status and Sort */}
        <div className="flex flex-wrap gap-2">
          <div className="flex gap-2">
            {(['all', 'solved', 'unsolved'] as StatusFilter[]).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                  statusFilter === status
                    ? 'glass text-slate-100'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex-1 flex gap-2">
            <input
              type="text"
              placeholder="Search problems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-3 py-1 rounded-lg bg-slate-900/50 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3 py-1 rounded-lg bg-slate-900/50 text-slate-100 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
            >
              <option value="default">Default</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="easiest">Easiest</option>
              <option value="hardest">Hardest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Problem List */}
      <div className="grid gap-2">
        {filteredAndSorted.length === 0 ? (
          <GlassCard variant="dark" className="text-center">
            <p className="text-slate-300 text-sm">No problems match your filters.</p>
          </GlassCard>
        ) : (
          filteredAndSorted.map((problem) => {
            const isSolved = solvedSet.has(problem.id)
            return (
              <Link key={problem.id} href={`/problems/${problem.slug}`}>
                <div
                  className={`rounded-xl p-3 hover:glass cursor-pointer transition-all duration-200 flex items-center justify-between gap-4 ${
                    isSolved
                      ? 'glass-subtle border-l-2 border-emerald-400'
                      : 'glass-subtle'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {isSolved && <span className="text-emerald-400 text-lg">✓</span>}
                    <span className={`font-medium truncate text-sm ${isSolved ? 'text-slate-400' : 'text-slate-100'}`}>
                      {problem.title}
                    </span>
                  </div>
                  <Badge
                    variant={difficultyColors[problem.difficulty as keyof typeof difficultyColors]}
                    className="whitespace-nowrap flex-shrink-0 text-xs"
                  >
                    {problem.difficulty}
                  </Badge>
                </div>
              </Link>
            )
          })
        )}
      </div>
    </div>
  )
}
