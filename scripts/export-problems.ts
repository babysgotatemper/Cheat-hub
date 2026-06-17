// One-off generator: exports every Problem row from prisma/dev.db into the
// static data module src/data/problems.ts (the DB-less deployment source).
// Re-run with: npx tsx scripts/export-problems.ts
import { createClient } from '@libsql/client'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const DB_URL = 'file:prisma/dev.db'
const OUT = resolve('src/data/problems.ts')

const HEADER = `// Static problem data. Replaces the database for the DB-less deployment.
// \`tags\`, \`companies\` and \`testCases\` are kept as JSON strings to match the
// shape the Prisma layer used to return, so consuming pages keep using
// \`JSON.parse(...)\` unchanged.
//
// AUTO-GENERATED from prisma/dev.db by scripts/export-problems.ts — do not edit
// by hand; re-run the generator instead.

export interface StaticProblem {
  id: number
  slug: string
  title: string
  frontendId?: string
  difficulty: string
  acRate?: number
  description: string
  tags: string
  companies: string
  starterCode: string
  testCases: string
  solution?: string
  editorial?: string
}

`

const FOOTER = `
export const problems: StaticProblem[] = rawProblems.map((p, i) => ({
  id: i + 1,
  ...p,
}))

export function getProblemBySlug(slug: string): StaticProblem | undefined {
  return problems.find((p) => p.slug === slug)
}
`

const str = (v: unknown) => JSON.stringify(v == null ? '' : String(v))
const has = (v: unknown) => v != null && String(v).trim() !== ''

function serialize(row: Record<string, unknown>): string {
  const lines: string[] = ['  {']
  lines.push(`    slug: ${str(row.slug)},`)
  lines.push(`    title: ${str(row.title)},`)
  if (has(row.frontendId)) lines.push(`    frontendId: ${str(row.frontendId)},`)
  lines.push(`    difficulty: ${str(row.difficulty)},`)
  if (row.acRate != null) lines.push(`    acRate: ${Number(row.acRate)},`)
  lines.push(`    description: ${str(row.description)},`)
  lines.push(`    tags: ${str(row.tags)},`)
  lines.push(`    companies: ${str(row.companies)},`)
  lines.push(`    starterCode: ${str(row.starterCode)},`)
  lines.push(`    testCases: ${str(row.testCases)},`)
  if (has(row.solution)) lines.push(`    solution: ${str(row.solution)},`)
  if (has(row.editorial)) lines.push(`    editorial: ${str(row.editorial)},`)
  lines.push('  },')
  return lines.join('\n')
}

async function main() {
  const db = createClient({ url: DB_URL })
  const { rows } = await db.execute('SELECT * FROM Problem ORDER BY id')

  const body =
    'const rawProblems: Omit<StaticProblem, \'id\'>[] = [\n' +
    rows.map((r) => serialize(r as Record<string, unknown>)).join('\n') +
    '\n]\n'

  writeFileSync(OUT, HEADER + body + FOOTER, 'utf8')
  console.log(`Wrote ${rows.length} problems to ${OUT}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
