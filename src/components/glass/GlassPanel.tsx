import { ReactNode } from 'react'

interface GlassPanelProps {
  children: ReactNode
  className?: string
}

export function GlassPanel({ children, className = '' }: GlassPanelProps) {
  return <div className={`glass-dark rounded-2xl overflow-hidden ${className}`}>{children}</div>
}
