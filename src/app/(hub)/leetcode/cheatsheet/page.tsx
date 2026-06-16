import type { Metadata } from 'next'
import Link from 'next/link'
import { Dumbbell } from 'lucide-react'
import { leetcodeData } from '@/lib/cheatsheet/leetcode'
import { CheatGrid } from '@/components/cheatsheet/CheatGrid'

export const metadata: Metadata = {
  title: 'LeetCode — Шпаргалка',
  description: 'Компактна шпаргалка NeetCode 250: 18 тем, 175+ задач з підказками й складністю.',
}

export default function LeetcodeCheatsheetPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <header className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-orange-400">🧩 LeetCode — Шпаргалка</h1>
          <p className="mt-1 text-sm text-slate-400">
            Компактний довідник усіх задач з підказками й складністю.
          </p>
        </div>
        <Link
          href="/problems"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
        >
          <Dumbbell size={16} /> Практика
        </Link>
      </header>

      <CheatGrid sections={leetcodeData.sections} />
    </div>
  )
}
