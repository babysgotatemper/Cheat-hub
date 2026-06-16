import { ImageResponse } from 'next/og'

export const alt = 'Cheat Hub'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
            background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Cheat Hub
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#cbd5e1',
            fontWeight: 300,
          }}
        >
          Шпаргалки та теорія для співбесід
        </div>
        <div
          style={{
            marginTop: 60,
            fontSize: 18,
            color: '#94a3b8',
            display: 'flex',
            gap: 40,
          }}
        >
          <div>React • Angular • JS/TS</div>
          <div>Git • AI • LeetCode</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
