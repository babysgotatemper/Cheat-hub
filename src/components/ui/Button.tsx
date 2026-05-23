import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...props
}: ButtonProps) {
  const variantStyles = {
    default: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-slate-700 text-white hover:bg-slate-600',
    outline: 'border border-slate-400 text-slate-100 hover:bg-slate-800',
    ghost: 'text-slate-100 hover:bg-slate-800 hover:text-white',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={cn(
        'rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
