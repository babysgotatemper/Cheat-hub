'use client'

import { BookOpen, Lightbulb } from 'lucide-react'
import { GlassCard } from '@/components/glass/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
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

function parseDescription(text: string) {
  const examplesIndex = text.search(/Example/i)
  const constraintsIndex = text.search(/Constraints?:/i)

  let examplesSection = ''
  let constraintsSection = ''
  let mainText = text

  if (examplesIndex !== -1 && constraintsIndex !== -1 && examplesIndex < constraintsIndex) {
    examplesSection = text.substring(examplesIndex, constraintsIndex).trim()
    mainText = text.substring(0, examplesIndex).trim()
    constraintsSection = text.substring(constraintsIndex).trim()
  } else if (examplesIndex !== -1) {
    examplesSection = text.substring(examplesIndex).trim()
    mainText = text.substring(0, examplesIndex).trim()
  } else if (constraintsIndex !== -1) {
    constraintsSection = text.substring(constraintsIndex).trim()
    mainText = text.substring(0, constraintsIndex).trim()
  }

  return {
    main: mainText.trim(),
    examples: examplesSection.trim(),
    constraints: constraintsSection.trim(),
  }
}

export function ProblemDescription({
  title,
  difficulty,
  description,
  tags,
  companies,
  editorial,
  solution,
}: ProblemDescriptionProps) {
  const { main, examples, constraints } = parseDescription(description)

  const mainHtml = md.render(main)
  const examplesHtml = examples ? md.render(examples) : ''
  const constraintsHtml = constraints ? md.render(constraints) : ''
  const editorialHtml = editorial ? md.render(editorial) : ''

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <h1 className="text-3xl font-bold text-slate-100">{title}</h1>
          <div className="flex flex-shrink-0 items-center gap-2">
            {editorial && editorialHtml && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" size="sm" className="inline-flex items-center gap-1.5">
                    <BookOpen size={15} className="text-green-400" /> Editorial
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <span className="text-green-400">✓</span> Editorial
                    </DialogTitle>
                  </DialogHeader>
                  <div
                    className="prose prose-invert max-w-none text-slate-200"
                    dangerouslySetInnerHTML={{ __html: editorialHtml }}
                  />
                </DialogContent>
              </Dialog>
            )}

            {solution && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" size="sm" className="inline-flex items-center gap-1.5">
                    <Lightbulb size={15} className="text-cyan-400" /> Solution
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <span className="text-cyan-400">💡</span> Solution
                    </DialogTitle>
                  </DialogHeader>
                  <pre className="text-slate-200 text-sm overflow-x-auto custom-scrollbar">
                    <code>{solution}</code>
                  </pre>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant={difficultyColors[difficulty as keyof typeof difficultyColors]}>
            {difficulty}
          </Badge>
          {tags.length > 0 && <span aria-hidden className="h-4 w-px bg-white/15" />}
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
          dangerouslySetInnerHTML={{ __html: mainHtml }}
        />
      </GlassCard>

      {examplesHtml && (
        <div>
          <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
            <span className="text-indigo-400">📝</span> Examples
          </h2>
          <GlassCard variant="dark">
            <div
              className="prose prose-invert max-w-none text-slate-200 space-y-4"
              dangerouslySetInnerHTML={{ __html: examplesHtml }}
            />
          </GlassCard>
        </div>
      )}

      {constraintsHtml && (
        <div>
          <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
            <span className="text-amber-400">⚡</span> Constraints
          </h2>
          <GlassCard variant="dark">
            <div
              className="prose prose-invert max-w-none text-slate-200"
              dangerouslySetInnerHTML={{ __html: constraintsHtml }}
            />
          </GlassCard>
        </div>
      )}

    </div>
  )
}
