import type { Metadata } from 'next'
import { leetcodeData } from '@/lib/cheatsheet/leetcode'
import { LeetcodeView } from '@/components/cheatsheet/LeetcodeView'

export const metadata: Metadata = {
  title: 'LeetCode — Теорія',
  description:
    'NeetCode 250: 18 тем і 175+ задач для live-coding інтерв’ю з TypeScript-розв’язками. Теорія + практика в редакторі.',
}

export default function LeetcodePage() {
  return <LeetcodeView data={leetcodeData} />
}
