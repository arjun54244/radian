// app/blog/page.tsx
import Link from "next/link";

const blogPosts = [
  { id: 1, title: "First Blog Post", slug: "first-blog" },
  { id: 2, title: "Second Blog Post", slug: "second-blog" },
];

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
