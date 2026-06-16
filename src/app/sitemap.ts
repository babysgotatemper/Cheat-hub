import { MetadataRoute } from 'next'
import { problems } from '@/data/problems'
import { TOPICS, formatHref } from '@/lib/cheatsheet/registry'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://cheat-hub.vercel.app'

  const problemEntries: MetadataRoute.Sitemap = problems.map((problem) => ({
    url: `${baseUrl}/problems/${problem.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Cheat-sheet topic pages (extended / cheatsheet / quiz per topic).
  const topicEntries: MetadataRoute.Sitemap = TOPICS.flatMap((topic) =>
    topic.formats.map((format) => ({
      url: `${baseUrl}${formatHref(topic.slug, format)}`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  )

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/problems`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...topicEntries,
    ...problemEntries,
  ]
}
