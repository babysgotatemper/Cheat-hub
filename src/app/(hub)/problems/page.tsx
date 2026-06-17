import type { Metadata } from 'next'
import { problems } from '@/data/problems'
import { stripMarkdown } from '@/lib/utils'
import { ProblemsView } from '@/components/problems/ProblemsView'

export const metadata: Metadata = {
  title: 'Problems',
  description:
    'Browse and solve JavaScript and TypeScript coding challenges. All problems include detailed explanations, editorials, and premium solutions.',
  openGraph: {
    type: 'website',
    title: 'Problems | Cheat Hub',
    description:
      'Browse and solve JavaScript and TypeScript coding challenges with editorials and solutions.',
  },
  alternates: {
    canonical: 'https://cheat-hub.vercel.app/problems',
  },
}

export default function ProblemsPage() {
  const list = problems.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    difficulty: p.difficulty,
    summary: stripMarkdown(p.description, 140), // «що зробити»
    tags: JSON.parse(p.tags) as string[], // «що використати»
  }))

  return <ProblemsView problems={list} />
}
