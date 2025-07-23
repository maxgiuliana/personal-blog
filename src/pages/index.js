import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import BlogPost from '../components/BlogPost';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function HomePage({ posts = [] }) {
    return (
        <Layout>
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Essays</h1>
                <div className="space-y-12">
                    {posts.length > 0 ? (
                        posts.map(post => (
                            <BlogPost key={post.slug} {...post} />
                        ))
                    ) : (
                        <p className="text-gray-600">No posts yet. Check back soon!</p>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export const getStaticProps = async () => {
    const postsDirectory = path.join(process.cwd(), 'src/content/posts');
    const filenames = fs.readdirSync(postsDirectory);
    
    const posts = filenames
        .filter(filename => filename.endsWith('.md'))
        .map(filename => {
            const filePath = path.join(postsDirectory, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const { data, excerpt } = matter(fileContents, { excerpt: true });
            
            return {
                slug: filename.replace('.md', ''),
                title: data.title || 'Untitled',
                date: data.date || new Date().toISOString(),
                excerpt: data.description || excerpt || 'No excerpt available',
            };
        })
        .filter(post => post.title && post.date) // Filter out any posts with missing required fields
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
        props: {
            posts: posts || [],
        },
    };
};