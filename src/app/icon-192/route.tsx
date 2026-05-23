import { ImageResponse } from 'next/og'

export const dynamic = 'force-dynamic'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'system-ui',
        } as React.CSSProperties}
      >
        LC
      </div>
    ),
    {
      width: 192,
      height: 192,
    },
  )
}
