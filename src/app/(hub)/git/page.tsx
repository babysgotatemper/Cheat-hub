import type { Metadata } from 'next'
import { gitContent } from '@/lib/cheatsheet/git'
import { getTopic } from '@/lib/cheatsheet/registry'
import { ProseTopicView } from '@/components/cheatsheet/ProseTopicView'

const meta = getTopic('git')!

export const metadata: Metadata = {
  title: `${meta.title} — Теорія`,
  description: meta.blurb,
}

export default function Page() {
  return <ProseTopicView content={gitContent} meta={meta} />
}
