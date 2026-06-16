import { ReactNode } from 'react'
import { HubShell } from '@/components/cheatsheet/HubShell'

// All routes in the (hub) group render inside the persistent cheat-sheet
// sidebar. The practice flow (/problems/[slug]) lives outside this group and
// therefore renders full-bleed without the sidebar.
export default function HubLayout({ children }: { children: ReactNode }) {
  return <HubShell>{children}</HubShell>
}
