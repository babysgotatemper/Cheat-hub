import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: 'light' | 'dark' | 'subtle'
}

export function GlassCard({
  children,
  className = '',
  variant = 'dark',
}: GlassCardProps) {
  const variantClass = {
    light: 'glass',
    dark: 'glass-dark',
    subtle: 'glass-subtle',
  }[variant]

  return (
    <div className={`${variantClass} rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  )
}
