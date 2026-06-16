import type { Metadata } from 'next'
import { javascriptContent } from '@/lib/cheatsheet/javascript'
import { getTopic } from '@/lib/cheatsheet/registry'
import { ProseTopicView } from '@/components/cheatsheet/ProseTopicView'

const meta = getTopic('javascript')!

export const metadata: Metadata = {
  title: `${meta.title} — Теорія`,
  description: meta.blurb,
}

export default function Page() {
  return <ProseTopicView content={javascriptContent} meta={meta} />
}
