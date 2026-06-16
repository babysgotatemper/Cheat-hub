import type { Metadata } from 'next'
import { ideContent } from '@/lib/cheatsheet/ide'
import { getTopic } from '@/lib/cheatsheet/registry'
import { ProseTopicView } from '@/components/cheatsheet/ProseTopicView'

const meta = getTopic('ide')!

export const metadata: Metadata = {
  title: `${meta.title} — Теорія`,
  description: meta.blurb,
}

export default function Page() {
  return <ProseTopicView content={ideContent} meta={meta} />
}
