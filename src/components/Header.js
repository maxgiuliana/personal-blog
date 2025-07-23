import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-8">
      <nav className="flex justify-between items-center max-w-4xl mx-auto px-4">
        <Link href="/" className="text-2xl font-bold">
          Your Blog
        </Link>
        <div className="space-x-4">
          <Link href="/blog" className="hover:text-gray-600">
            Blog
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}