import Link from 'next/link'

interface GlassNavbarProps {
  title?: string
}

export function GlassNavbar({ title = 'LeetCode Local' }: GlassNavbarProps) {
  return (
    <nav className="glass-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold font-mono bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            &lt;/&gt;
          </span>
          <span className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
            {title}
          </span>
        </Link>
      </div>
    </nav>
  )
}
