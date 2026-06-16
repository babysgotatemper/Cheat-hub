import type { Metadata } from 'next'
import { javascriptCheat } from '@/lib/cheatsheet/javascript'
import { getTopic } from '@/lib/cheatsheet/registry'
import { ProseTopicView } from '@/components/cheatsheet/ProseTopicView'

const meta = getTopic('javascript')!

export const metadata: Metadata = {
  title: `${meta.title} — Шпаргалка`,
  description: meta.blurb,
}

export default function Page() {
  return <ProseTopicView content={javascriptCheat} meta={meta} />
}
