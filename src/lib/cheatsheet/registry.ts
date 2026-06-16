import type { TopicMeta, TopicSlug, Accent } from './types'

// Single source of truth for the topic list — drives both the hub cards and
// the sidebar navigation. Adding a topic = one entry here + one data module.
export const TOPICS: TopicMeta[] = [
  {
    slug: 'leetcode',
    title: 'LeetCode',
    icon: '🧩',
    blurb: 'Практика задач у редакторі коду + шпаргалка JS/TS лайфхаків.',
    accent: 'orange',
    formats: ['practice', 'cheatsheet'],
    badges: ['Практика', 'Лайфхаки'],
  },
  {
    slug: 'architecture',
    title: 'Architecture',
    icon: '🏗️',
    blurb: 'Патерни проєктування, принципи та архітектурні підходи.',
    accent: 'violet',
    formats: ['extended', 'cheatsheet'],
  },
  {
    slug: 'react',
    title: 'React',
    icon: '⚛️',
    blurb: 'Хуки, рендеринг, стан і патерни сучасного React.',
    accent: 'cyan',
    formats: ['extended', 'cheatsheet'],
  },
  {
    slug: 'angular',
    title: 'Angular',
    icon: '🅰️',
    blurb: 'Компоненти, DI, RxJS, сигнали та екосистема Angular.',
    accent: 'rose',
    formats: ['extended', 'cheatsheet', 'quiz'],
  },
  {
    slug: 'javascript',
    title: 'JS / TS',
    icon: '⚙️',
    blurb: 'JavaScript і TypeScript для senior-рівня співбесід.',
    accent: 'amber',
    formats: ['extended', 'cheatsheet', 'quiz'],
  },
  {
    slug: 'git',
    title: 'Git',
    icon: '🔀',
    blurb: 'Команди, робочі процеси та вирішення конфліктів.',
    accent: 'emerald',
    formats: ['extended', 'cheatsheet'],
  },
  {
    slug: 'ai',
    title: 'AI',
    icon: '🤖',
    blurb: 'AI-інструменти та робота з Claude Code.',
    accent: 'indigo',
    formats: ['extended', 'cheatsheet'],
  },
  {
    slug: 'ide',
    title: 'IDE',
    icon: '🖥️',
    blurb: 'Найпоширеніші IDE та редактори для JS/TS розробки.',
    accent: 'sky',
    formats: ['extended'],
    badges: ['VS Code', 'Cursor', 'WebStorm'],
  },
]

export function getTopic(slug: TopicSlug): TopicMeta | undefined {
  return TOPICS.find((t) => t.slug === slug)
}

export const FORMAT_LABELS: Record<string, string> = {
  extended: 'Розширена',
  cheatsheet: 'Шпаргалка',
  quiz: 'Квіз',
  practice: 'Практика',
}

// Path for a topic format. practice -> /problems (shared editor), extended ->
// /slug, others -> /slug/<format>.
export function formatHref(slug: TopicSlug, format: string): string {
  if (format === 'practice') return '/problems'
  return format === 'extended' ? `/${slug}` : `/${slug}/${format}`
}

// Primary route for a topic = its first declared format. Lets a topic open on
// something other than the extended view (e.g. LeetCode opens on Practice).
export function topicHref(topic: TopicMeta): string {
  return formatHref(topic.slug, topic.formats[0])
}

// Tailwind class fragments per accent. Static strings so Tailwind keeps them.
export const ACCENT: Record<
  Accent,
  { text: string; border: string; ring: string; gradient: string; dot: string }
> = {
  indigo: {
    text: 'text-indigo-400',
    border: 'hover:border-indigo-400/60',
    ring: 'ring-indigo-400/40',
    gradient: 'from-indigo-500 to-indigo-700',
    dot: 'bg-indigo-400',
  },
  cyan: {
    text: 'text-cyan-400',
    border: 'hover:border-cyan-400/60',
    ring: 'ring-cyan-400/40',
    gradient: 'from-cyan-500 to-blue-600',
    dot: 'bg-cyan-400',
  },
  violet: {
    text: 'text-violet-400',
    border: 'hover:border-violet-400/60',
    ring: 'ring-violet-400/40',
    gradient: 'from-violet-500 to-purple-700',
    dot: 'bg-violet-400',
  },
  emerald: {
    text: 'text-emerald-400',
    border: 'hover:border-emerald-400/60',
    ring: 'ring-emerald-400/40',
    gradient: 'from-emerald-500 to-green-700',
    dot: 'bg-emerald-400',
  },
  amber: {
    text: 'text-amber-400',
    border: 'hover:border-amber-400/60',
    ring: 'ring-amber-400/40',
    gradient: 'from-amber-400 to-yellow-600',
    dot: 'bg-amber-400',
  },
  rose: {
    text: 'text-rose-400',
    border: 'hover:border-rose-400/60',
    ring: 'ring-rose-400/40',
    gradient: 'from-rose-500 to-red-700',
    dot: 'bg-rose-400',
  },
  orange: {
    text: 'text-orange-400',
    border: 'hover:border-orange-400/60',
    ring: 'ring-orange-400/40',
    gradient: 'from-orange-500 to-orange-700',
    dot: 'bg-orange-400',
  },
  sky: {
    text: 'text-sky-400',
    border: 'hover:border-sky-400/60',
    ring: 'ring-sky-400/40',
    gradient: 'from-sky-500 to-blue-600',
    dot: 'bg-sky-400',
  },
}
