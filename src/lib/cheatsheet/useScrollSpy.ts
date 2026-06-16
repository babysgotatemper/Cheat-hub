'use client'

import { RefObject, useEffect, useState } from 'react'

// Highlights the section currently in view within a scroll container.
// Mirrors the original CheetSheet behaviour (root = scroll container, 0.4
// threshold). Returns the id of the active section.
export function useScrollSpy(ids: string[], rootRef: RefObject<HTMLElement | null>): string {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const root = rootRef.current
    if (!root || ids.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { root, threshold: 0.4 },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, rootRef])

  return activeId
}
