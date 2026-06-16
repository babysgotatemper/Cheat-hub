'use client'

import { useMemo, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import 'highlight.js/styles/github-dark.css'

// Register only the languages we ship to keep the bundle small.
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)

// Map our content languages onto a registered hljs language.
const LANG_MAP: Record<string, string> = {
  typescript: 'typescript',
  ts: 'typescript',
  tsx: 'typescript',
  javascript: 'javascript',
  js: 'javascript',
  jsx: 'javascript',
  bash: 'bash',
  sh: 'bash',
  shell: 'bash',
  html: 'xml',
  xml: 'xml',
  css: 'css',
}

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

  const highlighted = useMemo(() => {
    const lang = LANG_MAP[language.toLowerCase()]
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch {
        /* fall through to escaped plain text */
      }
    }
    // No registered language → escape so it renders as plain text.
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }, [code, language])

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
