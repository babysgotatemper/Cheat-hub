import Link from 'next/link'

interface GlassNavbarProps {
  title?: string
  /** Where the brand/logo links to. Defaults to the hub homepage. */
  href?: string
  /** Optional extra links rendered on the right. */
  links?: { label: string; href: string }[]
}

export function GlassNavbar({
  title = 'LeetCode Local',
  href = '/',
  links,
}: GlassNavbarProps) {
  return (
    <nav className="glass-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href={href} className="flex items-center gap-2 group">
          <span className="text-xl font-bold font-mono bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            &lt;/&gt;
          </span>
          <span className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
            {title}
          </span>
        </Link>

        {links && links.length > 0 && (
          <div className="flex items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
