import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link href="/">
          <h1 className="text-4xl font-bold tracking-tight">My Blog</h1>
          <p className="text-primary-foreground/80 mt-2">Insights, tutorials, and stories</p>
        </Link>
      </div>
    </header>
  )
}
