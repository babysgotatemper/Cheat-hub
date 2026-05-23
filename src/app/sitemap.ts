import { MetadataRoute } from 'next'
import { db } from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://leetcode-local.vercel.app'

  const problems = await db.problem.findMany({
    select: {
      slug: true,
    },
  })

  const problemEntries: MetadataRoute.Sitemap = problems.map((problem) => ({
    url: `${baseUrl}/problems/${problem.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily',
      priority: 1,
    },
    ...problemEntries,
  ]
}
