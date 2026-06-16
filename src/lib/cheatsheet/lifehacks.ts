import type { Lifehack, LifehackCategory } from './types'

// Categories drive the grouping order on /leetcode/cheatsheet.
export const LIFEHACK_CATEGORIES: LifehackCategory[] = [
  { id: 'strings', title: 'Рядки', emoji: '🔤' },
  { id: 'arrays', title: 'Масиви', emoji: '📚' },
  { id: 'objects', title: "Об'єкти", emoji: '🗂️' },
  { id: 'numbers', title: 'Числа', emoji: '🔢' },
]

// JS/TS lifehacks — короткі трюки роботи з методами мови.
// Щоб додати новий лайфхак, допиши один об'єкт у цей масив.
export const lifehacks: Lifehack[] = [
  {
    id: 'last-char-slice',
    title: 'Останній символ рядка',
    category: 'strings',
    code: 'str.slice(-1)',
    note: "Від'ємний індекс рахується з кінця. Працює і для масивів: <code>arr.slice(-1)[0]</code>.",
    tags: ['slice', 'string', 'останній'],
  },
  // ← нові лайфхаки додаються сюди по одному
]
