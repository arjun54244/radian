// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";

const blogPosts = [
  { id: 1, title: "First Blog Post", slug: "first-blog", content: "This is the first blog post content." },
  { id: 2, title: "Second Blog Post", slug: "second-blog", content: "This is the second blog post content." },
];

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
