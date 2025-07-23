const Archive = () => {
    // Sample data for blog posts
    const posts = [
        { title: "Post 1", date: "2023-01-01", slug: "post-1" },
        { title: "Post 2", date: "2023-02-01", slug: "post-2" },
        { title: "Post 3", date: "2023-03-01", slug: "post-3" },
    ];

    return (
        <div>
            <h1>Blog Archive</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <a href={`/blog/${post.slug}`}>
                            {post.title} - {post.date}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Archive;