import Link from 'next/link'
import { format } from 'date-fns'

export default function BlogPost({ title, date, excerpt, slug }) {
    return (
        <article className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
                <Link href={`/blog/${slug}`} className="hover:text-gray-600">
                    {title}
                </Link>
            </h2>
            <time className="text-gray-500 mb-2 block">
                {format(new Date(date), 'MMMM d, yyyy')}
            </time>
            <p className="text-gray-700">{excerpt}</p>
        </article>
    )
}