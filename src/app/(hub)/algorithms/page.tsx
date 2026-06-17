import type { Metadata } from 'next'
import { algorithmsContent } from '@/lib/cheatsheet/algorithms'
import { getTopic } from '@/lib/cheatsheet/registry'
import { ProseTopicView } from '@/components/cheatsheet/ProseTopicView'

const meta = getTopic('algorithms')!

export const metadata: Metadata = {
  title: `${meta.title} — Теорія`,
  description: meta.blurb,
}

export default function Page() {
  return <ProseTopicView content={algorithmsContent} meta={meta} />
}
