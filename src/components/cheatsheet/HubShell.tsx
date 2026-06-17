'use client'

import { ReactNode, useEffect, useState } from 'react'
import { CheatSidebar } from './CheatSidebar'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'sidebarCollapsed'

export function HubShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Read persisted collapse state after mount to avoid hydration mismatch.
  // Syncing from localStorage post-hydration legitimately requires setState
  // in an effect, which the cascading-render lint rule flags as a false positive.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === 'true') setCollapsed(true)
    setHydrated(true)
  }, [])

  const toggle = () => {
    setCollapsed((prev) => {
      const next = !prev
      window.localStorage.setItem(STORAGE_KEY, String(next))
      return next
    })
  }

  return (
    <div className="min-h-screen">
      <CheatSidebar collapsed={collapsed} onToggle={toggle} />
      <main
        className={cn(
          'min-h-screen transition-[margin] duration-200',
          // On mobile the fixed sidebar overlays content (reserve only the
          // slim rail); from md+ reserve the real sidebar width.
          'ml-[56px]',
          collapsed ? 'md:ml-[56px]' : 'md:ml-[224px]',
          !hydrated && 'duration-0',
        )}
      >
        {children}
      </main>
    </div>
  )
}
