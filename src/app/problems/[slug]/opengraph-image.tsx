import { ImageResponse } from 'next/og'
import { db } from '@/lib/db'

export const alt = 'Problem'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const problem = await db.problem.findUnique({
    where: { slug },
    select: {
      title: true,
      difficulty: true,
      tags: true,
    },
  })

  if (!problem) {
    return new ImageResponse(
      <div style={{ fontSize: 32, color: 'white' }}>Problem not found</div>,
      { ...size }
    )
  }

  const tags = JSON.parse(problem.tags)
  const difficultyColor =
    problem.difficulty === 'Easy'
      ? '#10b981'
      : problem.difficulty === 'Medium'
        ? '#f59e0b'
        : '#ef4444'

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 'bold',
            marginBottom: 30,
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          {problem.title}
        </div>

        <div
          style={{
            display: 'flex',
            gap: 20,
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              padding: '8px 16px',
              backgroundColor: difficultyColor,
              borderRadius: '6px',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            {problem.difficulty}
          </div>
          <div
            style={{
              fontSize: 18,
              color: '#cbd5e1',
            }}
          >
            {tags.slice(0, 3).join(' • ')}
            {tags.length > 3 ? ' +' + (tags.length - 3) : ''}
          </div>
        </div>

        <div
          style={{
            fontSize: 18,
            color: '#94a3b8',
          }}
        >
          Cheat Hub • JavaScript • TypeScript
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
