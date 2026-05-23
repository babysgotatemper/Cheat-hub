import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stripMarkdown(text: string, maxLength: number = 160): string {
  return text
    .replace(/[#*`>[\]]/g, '') // Remove markdown syntax
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace [text](url) with text
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim()
    .substring(0, maxLength)
    .replace(/\s+$/, '')
}
