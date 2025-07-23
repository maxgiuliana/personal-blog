import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-8 mt-8 border-t">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">
                        © {new Date().getFullYear()} Your Blog. All rights reserved.
                    </p>
                    <nav className="space-x-4">
                        <Link href="/about" className="text-gray-600 hover:text-gray-900">
                            About
                        </Link>
                        <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                            Archive
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}