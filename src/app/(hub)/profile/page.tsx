import type { Metadata } from 'next'
import { ProfilePanel } from '@/components/profile/ProfilePanel'

export const metadata: Metadata = {
  title: 'Профіль',
  description: 'Локальний профіль користувача: прогрес, експорт та імпорт JSON.',
}

export default function ProfilePage() {
  return <ProfilePanel />
}
