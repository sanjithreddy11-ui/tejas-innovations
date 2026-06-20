import Link from "next/link";
import { blogs } from "@/lib/blogData";

export const metadata = {
  title: "Blog | Tejas",
  description: "Web development and SEO insights",
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-12">
        Blog
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="border border-white/10 rounded-3xl p-6 hover:border-white/30 transition"
          >
            <h2 className="text-2xl font-semibold mb-3">
              {blog.title}
            </h2>

            <p className="text-zinc-400 mb-4">
              {blog.description}
            </p>

            <span className="text-sm text-zinc-500">
              {blog.date}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}