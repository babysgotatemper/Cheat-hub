'use client'

import { useMemo, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import 'highlight.js/styles/github-dark.css'
import { highlight } from '@/lib/cheatsheet/highlight'

export function CodeBlock({
  code,
  summary,
  language = 'typescript',
  defaultOpen = false,
}: {
  code: string
  summary?: string
  language?: string
  defaultOpen?: boolean
}) {
  const [copied, setCopied] = useState(false)

  const highlighted = useMemo(() => highlight(code, language), [code, language])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <details className="group mt-3 rounded-lg border border-white/10 bg-black/30" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white">
        <span className="flex items-center gap-2">
          <span className="text-slate-500 transition-transform group-open:rotate-90">▶</span>
          {summary ?? `Розв’язок (${language})`}
        </span>
      </summary>
      <div className="relative border-t border-white/10">
        <button
          onClick={copy}
          className="absolute right-2 top-2 z-10 rounded-md p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
          aria-label="Скопіювати код"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
        <pre className="overflow-x-auto bg-transparent p-4 text-[13px] leading-relaxed">
          <code
            className="hljs bg-transparent p-0 font-mono"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </pre>
      </div>
    </details>
  )
}
