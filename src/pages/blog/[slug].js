import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../components/Layout';

export default function BlogPost({ frontMatter, mdxSource }) {
  return (
    <Layout>
      <article className="prose lg:prose-xl">
        <h1>{frontMatter.title}</h1>
        <div className="mb-8 text-gray-500">
          {new Date(frontMatter.date).toLocaleDateString()}
        </div>
        <MDXRemote {...mdxSource} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content/posts'));
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), 'src/content/posts', `${params.slug}.md`),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug: params.slug,
      mdxSource
    }
  };
}