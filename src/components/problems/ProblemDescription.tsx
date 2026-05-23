'use client'

import { GlassCard } from '@/components/glass/GlassCard'
import { Badge } from '@/components/ui/Badge'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

interface ProblemDescriptionProps {
  title: string
  difficulty: string
  description: string
  tags: string[]
  companies: string[]
  editorial?: string | null
  solution?: string | null
}

const difficultyColors = {
  Easy: 'success',
  Medium: 'warning',
  Hard: 'error',
} as const

export function ProblemDescription({
  title,
  difficulty,
  description,
  tags,
  companies,
  editorial,
  solution,
}: ProblemDescriptionProps) {
  const descriptionHtml = md.render(description)
  const editorialHtml = editorial ? md.render(editorial) : ''

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-slate-100">{title}</h1>
          <Badge variant={difficultyColors[difficulty as keyof typeof difficultyColors]}>
            {difficulty}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>

        {companies.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-slate-400 mb-2">Companies:</p>
            <div className="flex flex-wrap gap-2">
              {companies.map((company) => (
                <span
                  key={company}
                  className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-200"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <GlassCard variant="subtle">
        <div
          className="prose prose-invert max-w-none text-slate-200"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      </GlassCard>

      {editorial && editorialHtml && (
        <div>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Editorial</h2>
          <GlassCard variant="subtle">
            <div
              className="prose prose-invert max-w-none text-slate-200"
              dangerouslySetInnerHTML={{ __html: editorialHtml }}
            />
          </GlassCard>
        </div>
      )}

      {solution && (
        <div>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Solution</h2>
          <GlassCard variant="subtle">
            <pre className="text-slate-200 text-sm overflow-x-auto">
              <code>{solution}</code>
            </pre>
          </GlassCard>
        </div>
      )}
    </div>
  )
}
