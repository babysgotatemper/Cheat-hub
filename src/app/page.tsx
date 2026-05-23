import type { Metadata } from 'next'
import { db } from '@/lib/db'
import { GlassNavbar } from '@/components/glass/GlassNavbar'
import { ProblemList } from '@/components/problems/ProblemList'

export const metadata: Metadata = {
  title: 'Problems',
  description: 'Browse and solve JavaScript and TypeScript coding challenges. All problems include detailed explanations, editorials, and premium solutions.',
  openGraph: {
    type: 'website',
    title: 'Problems | LeetCode Local',
    description: 'Browse and solve JavaScript and TypeScript coding challenges with editorials and solutions.',
  },
  alternates: {
    canonical: 'https://leetcode-local.vercel.app',
  },
}

export default async function Home() {
  const [problems, progressRecords] = await Promise.all([
    db.problem.findMany({
      select: {
        id: true,
        slug: true,
        title: true,
        difficulty: true,
      },
      orderBy: { id: 'asc' },
    }),
    db.progress.findMany({
      where: { status: 'solved' },
      select: { problemId: true },
    }),
  ])

  const solvedIds = new Set(progressRecords.map((p) => p.problemId))
  const solvedCount = solvedIds.size

  const easyProblems = problems.filter((p) => p.difficulty === 'Easy')
  const mediumProblems = problems.filter((p) => p.difficulty === 'Medium')
  const hardProblems = problems.filter((p) => p.difficulty === 'Hard')

  const easyTotal = easyProblems.length
  const easyDone = easyProblems.filter((p) => solvedIds.has(p.id)).length

  const mediumTotal = mediumProblems.length
  const mediumDone = mediumProblems.filter((p) => solvedIds.has(p.id)).length

  const hardTotal = hardProblems.length
  const hardDone = hardProblems.filter((p) => solvedIds.has(p.id)).length

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'LeetCode Local Problems',
    description: 'A collection of JavaScript and TypeScript coding challenges',
    url: 'https://leetcode-local.vercel.app',
    hasPart: problems.map((p) => ({
      '@type': 'LearningResource',
      name: p.title,
      url: `https://leetcode-local.vercel.app/problems/${p.slug}`,
      educationalLevel: p.difficulty,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlassNavbar />
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="glass-subtle rounded-xl p-6 mb-8">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-slate-400 mb-1">Total</p>
                <p className="text-2xl font-bold text-slate-100">
                  <span className="text-emerald-400">{solvedCount}</span>
                  <span className="text-slate-500"> / </span>
                  {problems.length}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">Easy</p>
                <p className="text-2xl font-bold text-slate-100">
                  <span className="text-green-300">{easyDone}</span>
                  <span className="text-slate-500">/</span>
                  <span className="text-green-300">{easyTotal}</span>
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">Medium</p>
                <p className="text-2xl font-bold text-slate-100">
                  <span className="text-yellow-300">{mediumDone}</span>
                  <span className="text-slate-500">/</span>
                  <span className="text-yellow-300">{mediumTotal}</span>
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">Hard</p>
                <p className="text-2xl font-bold text-slate-100">
                  <span className="text-red-300">{hardDone}</span>
                  <span className="text-slate-500">/</span>
                  <span className="text-red-300">{hardTotal}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Problem List</h2>
            <ProblemList problems={problems} solvedIds={Array.from(solvedIds)} />
          </div>
        </div>
      </main>
    </>
  )
}
