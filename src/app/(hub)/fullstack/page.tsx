import type { Metadata } from 'next'
import { fullstackContent } from '@/lib/cheatsheet/fullstack'
import { getTopic } from '@/lib/cheatsheet/registry'
import { ProseTopicView } from '@/components/cheatsheet/ProseTopicView'

const meta = getTopic('fullstack')!

export const metadata: Metadata = {
  title: `${meta.title} — Теорія`,
  description: meta.blurb,
}

export default function Page() {
  return <ProseTopicView content={fullstackContent} meta={meta} />
}
