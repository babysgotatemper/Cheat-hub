'use client'

import { useMemo, useState } from 'react'
import { Check, X } from 'lucide-react'
import type { QuizData } from '@/lib/cheatsheet/types'
import { cn } from '@/lib/utils'

export function Quiz({ data }: { data: QuizData }) {
  // answers[i] = chosen option index, or undefined if unanswered.
  const [answers, setAnswers] = useState<Record<number, number>>({})

  const answeredCount = Object.keys(answers).length
  const score = useMemo(
    () =>
      Object.entries(answers).filter(
        ([i, opt]) => data.questions[Number(i)].correct === opt,
      ).length,
    [answers, data.questions],
  )

  const choose = (qi: number, oi: number) => {
    setAnswers((prev) => (prev[qi] !== undefined ? prev : { ...prev, [qi]: oi }))
  }

  const reset = () => setAnswers({})

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <header className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">{data.title}</h1>
          <p className="mt-1 text-sm text-slate-400">{data.questions.length} питань</p>
        </div>
        <div className="glass-subtle rounded-xl px-4 py-2 text-right">
          <div className="text-2xl font-bold text-slate-100">
            <span className="text-emerald-400">{score}</span>
            <span className="text-slate-500"> / </span>
            {answeredCount}
          </div>
          <div className="text-xs text-slate-500">правильних</div>
        </div>
      </header>

      {answeredCount > 0 && (
        <button
          onClick={reset}
          className="mb-6 text-sm text-slate-400 underline hover:text-slate-200"
        >
          Почати спочатку
        </button>
      )}

      <ol className="flex flex-col gap-6">
        {data.questions.map((q, qi) => {
          const chosen = answers[qi]
          const answered = chosen !== undefined
          return (
            <li key={q.id} className="glass-subtle rounded-2xl border border-white/10 p-5">
              <h3
                className="mb-4 font-semibold text-slate-100"
                dangerouslySetInnerHTML={{ __html: `${qi + 1}. ${q.question}` }}
              />
              <div className="flex flex-col gap-2">
                {q.options.map((opt, oi) => {
                  const isCorrect = oi === q.correct
                  const isChosen = oi === chosen
                  return (
                    <button
                      key={oi}
                      onClick={() => choose(qi, oi)}
                      disabled={answered}
                      className={cn(
                        'flex items-center justify-between gap-3 rounded-lg border px-4 py-2.5 text-left text-sm transition-colors',
                        !answered && 'border-white/10 text-slate-300 hover:border-white/30 hover:bg-white/5',
                        answered && isCorrect && 'border-emerald-500/50 bg-emerald-500/10 text-emerald-200',
                        answered && isChosen && !isCorrect && 'border-red-500/50 bg-red-500/10 text-red-200',
                        answered && !isChosen && !isCorrect && 'border-white/5 text-slate-500',
                      )}
                    >
                      <span dangerouslySetInnerHTML={{ __html: opt }} />
                      {answered && isCorrect && <Check size={16} className="shrink-0" />}
                      {answered && isChosen && !isCorrect && <X size={16} className="shrink-0" />}
                    </button>
                  )
                })}
              </div>

              {answered && q.explanation && (
                <div
                  className="cheat-prose mt-4 rounded-lg border-l-2 border-indigo-400/60 bg-indigo-500/5 px-4 py-3 text-sm"
                  dangerouslySetInnerHTML={{ __html: q.explanation }}
                />
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
