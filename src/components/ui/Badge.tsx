import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variantStyles = {
    default: 'bg-slate-700 text-slate-100',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-600 text-white',
    error: 'bg-red-600 text-white',
  }

  return (
    <span
      className={cn(
        'inline-block px-2.5 py-0.5 rounded-full text-xs font-medium',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
