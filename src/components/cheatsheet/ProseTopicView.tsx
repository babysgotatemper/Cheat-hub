'use client'

import { useMemo, useRef } from 'react'
import type { TopicContent, TopicMeta } from '@/lib/cheatsheet/types'
import { ACCENT } from '@/lib/cheatsheet/registry'
import { useScrollSpy } from '@/lib/cheatsheet/useScrollSpy'
import { TopicPanel, TopicPanelItem } from './TopicPanel'
import { MobileSectionNav } from './MobileSectionNav'
import { ContentBlocks } from './ContentBlocks'

export function ProseTopicView({
  content,
  meta,
}: {
  content: TopicContent
  meta: TopicMeta
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const accent = ACCENT[meta.accent]

  const items: TopicPanelItem[] = useMemo(
    () => content.sections.map((s) => ({ id: s.id, label: s.title })),
    [content.sections],
  )
  const ids = useMemo(() => items.map((i) => i.id), [items])
  const activeId = useScrollSpy(ids, scrollRef)

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="flex h-screen">
      <TopicPanel
        items={items}
        activeId={activeId}
        onJump={jump}
        accentText={accent.text}
        accentBorder=""
      />

      <div ref={scrollRef} className="flex-1 overflow-y-auto scroll-smooth">
        <MobileSectionNav items={items} activeId={activeId} onJump={jump} />

        <header className="border-b border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent px-6 py-8 md:px-10">
          <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-100">
            <span>{meta.icon}</span> {meta.title}
          </h1>
          <p className="mt-2 max-w-2xl text-slate-400">{meta.blurb}</p>
        </header>

        {content.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-4 px-6 py-8 md:px-10">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-2xl font-bold text-slate-100">{section.title}</h2>
              <ContentBlocks blocks={section.blocks} />
            </div>
          </section>
        ))}

        <div className="h-24" />
      </div>
    </div>
  )
}
