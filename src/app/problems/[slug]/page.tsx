import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { db } from '@/lib/db'
import { stripMarkdown } from '@/lib/utils'
import { GlassNavbar } from '@/components/glass/GlassNavbar'
import { ProblemDescription } from '@/components/problems/ProblemDescription'
import { CodeEditor } from '@/components/editor/CodeEditor'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const problem = await db.problem.findUnique({
    where: { slug },
    select: {
      title: true,
      description: true,
      difficulty: true,
      tags: true,
    },
  })

  if (!problem) {
    return {}
  }

  const tags = JSON.parse(problem.tags)
  const cleanDescription = stripMarkdown(problem.description, 160)

  return {
    title: problem.title,
    description: cleanDescription,
    keywords: tags,
    openGraph: {
      type: 'article',
      title: problem.title,
      description: cleanDescription,
      url: `https://leetcode-local.vercel.app/problems/${slug}`,
      images: [
        {
          url: `/problems/${slug}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: problem.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: problem.title,
      description: cleanDescription,
      images: [`/problems/${slug}/opengraph-image.png`],
    },
    alternates: {
      canonical: `https://leetcode-local.vercel.app/problems/${slug}`,
    },
  }
}

export default async function ProblemPage({ params }: PageProps) {
  const { slug } = await params

  const problem = await db.problem.findUnique({
    where: { slug },
  })

  if (!problem) {
    notFound()
  }

  const testCases = JSON.parse(problem.testCases)
  const tags = JSON.parse(problem.tags)
  const companies = JSON.parse(problem.companies)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: problem.title,
    description: stripMarkdown(problem.description, 500),
    url: `https://leetcode-local.vercel.app/problems/${slug}`,
    educationalLevel: problem.difficulty,
    keywords: tags.join(', '),
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://leetcode-local.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Problems',
        item: 'https://leetcode-local.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: problem.title,
        item: `https://leetcode-local.vercel.app/problems/${slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <GlassNavbar />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-120px)]">
            {/* Left side: Problem description */}
            <div className="overflow-y-auto pr-4 custom-scrollbar">
              <ProblemDescription
                title={problem.title}
                difficulty={problem.difficulty}
                description={problem.description}
                tags={tags}
                companies={companies}
                editorial={problem.editorial}
                solution={problem.solution}
              />
            </div>

            {/* Right side: Code editor */}
            <div className="overflow-hidden flex flex-col">
              <CodeEditor
                starterCode={problem.starterCode}
                testCases={testCases}
                problemSlug={problem.slug}
              />
            </div>
          </div>
        </div>

        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(148, 163, 184, 0.3);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(148, 163, 184, 0.5);
          }
        `}</style>
      </main>
    </>
  )
}
