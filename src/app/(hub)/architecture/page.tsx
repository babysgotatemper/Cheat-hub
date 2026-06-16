import type { Metadata } from 'next'
import { architectureContent } from '@/lib/cheatsheet/architecture'
import { getTopic } from '@/lib/cheatsheet/registry'
import { ProseTopicView } from '@/components/cheatsheet/ProseTopicView'

const meta = getTopic('architecture')!

export const metadata: Metadata = {
  title: `${meta.title} — Теорія`,
  description: meta.blurb,
}

export default function Page() {
  return <ProseTopicView content={architectureContent} meta={meta} />
}
